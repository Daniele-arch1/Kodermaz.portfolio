$port = 8792
$root = $PSScriptRoot

$mime = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".json" = "application/json"
  ".svg"  = "image/svg+xml"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".webp" = "image/webp"
  ".ico"  = "image/x-icon"
}

$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $port)
try {
  $listener.Start()
} catch {
  # Di solito e' una seconda copia del launcher: il sito e' gia' in esecuzione.
  Write-Host "La porta $port e' gia' in uso: il sito e' probabilmente gia' avviato su http://localhost:$port/"
  Write-Host "Premi Invio per chiudere questa finestra."
  Read-Host | Out-Null
  exit 1
}
Write-Host "Serving $root on http://localhost:$port/"

while ($true) {
  $client = $listener.AcceptTcpClient()
  # i browser aprono socket che poi non usano: senza timeout il loop si blocca
  $client.ReceiveTimeout = 3000
  $client.SendTimeout = 3000
  try {
    $stream = $client.GetStream()
    $reader = New-Object System.IO.StreamReader($stream)
    $requestLine = $reader.ReadLine()
    while (($headerLine = $reader.ReadLine()) -and $headerLine -ne "") {}

    $status = 200
    $body = [byte[]]@()
    $contentType = "text/plain"

    if ($requestLine -match '^GET\s+(\S+)\s+HTTP') {
      $urlPath = $matches[1].Split('?')[0]
      if ($urlPath -eq "/") { $urlPath = "/index.html" }
      $decoded = [System.Uri]::UnescapeDataString($urlPath).TrimStart("/")
      $filePath = Join-Path $root $decoded
      $fullPath = [System.IO.Path]::GetFullPath($filePath)

      if ($fullPath.StartsWith($root) -and (Test-Path $fullPath -PathType Leaf)) {
        $ext = [System.IO.Path]::GetExtension($fullPath)
        $contentType = $mime[$ext]
        if (-not $contentType) { $contentType = "application/octet-stream" }
        $body = [System.IO.File]::ReadAllBytes($fullPath)
      } else {
        # Come fanno gli hosting veri: se l'indirizzo non esiste si mostra
        # la pagina 404 del sito, non una riga di testo scarno. Cosi' in
        # anteprima si vede esattamente quello che vedra' un visitatore.
        $status = 404
        $paginaErrore = Join-Path $root "404.html"
        if (Test-Path $paginaErrore -PathType Leaf) {
          $contentType = "text/html; charset=utf-8"
          $body = [System.IO.File]::ReadAllBytes($paginaErrore)
        } else {
          $body = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
        }
      }
    } else {
      $status = 400
      $body = [System.Text.Encoding]::UTF8.GetBytes("400 Bad Request")
    }

    $statusText = if ($status -eq 200) { "OK" } elseif ($status -eq 404) { "Not Found" } else { "Bad Request" }
    $headerText = "HTTP/1.1 $status $statusText`r`nContent-Type: $contentType`r`nContent-Length: $($body.Length)`r`nCache-Control: no-cache`r`nConnection: close`r`n`r`n"
    $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($headerText)
    $stream.Write($headerBytes, 0, $headerBytes.Length)
    $stream.Write($body, 0, $body.Length)
    $stream.Flush()
  } catch {
  } finally {
    $client.Close()
  }
}
