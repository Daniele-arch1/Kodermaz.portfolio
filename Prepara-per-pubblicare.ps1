# ============================================================
#  PREPARA IL SITO DA PUBBLICARE
# ============================================================
#
#  A cosa serve
#  ------------
#  Nella cartella del sito ci sono anche file di lavoro: appunti, prove,
#  il vecchio assistente messo da parte, il server che uso per vedere il
#  sito sul mio computer. Servono a me, non a chi visita il sito.
#
#  Se trascino la cartella intera sull'hosting finiscono online anche quelli:
#  chiunque potrebbe aprirli scrivendo l'indirizzo giusto.
#
#  Questo script fa una copia pulita, con dentro SOLO quello che deve stare
#  online. La copia va in:
#     Documenti\documenti seri\Sito DK\4 - Sito da pubblicare
#  ed e' quella la cartella da caricare sull'hosting.
#
#  Come si usa
#  -----------
#  Doppio clic su "Prepara il sito da pubblicare.cmd".
#  Alla fine si apre da sola la cartella pronta.
#
# ============================================================

$ErrorActionPreference = "Stop"

$sorgente = Split-Path -Parent $MyInvocation.MyCommand.Path
$destinazione = "C:\Users\koder\Documents\documenti seri\Sito DK\4 - Sito da pubblicare"

# Quello che va online. Se un domani aggiungi una cartella nuova (per esempio
# "video"), aggiungila a questo elenco, altrimenti resta fuori.
$fileDaCopiare = @(
    "index.html",
    "privacy.html",
    "404.html",
    "robots.txt",
    "sitemap.xml",
    "favicon.ico"
)
$cartelleDaCopiare = @("css", "js", "img", "fonts")

Write-Host ""
Write-Host "Preparo la copia pulita del sito..." -ForegroundColor Cyan
Write-Host ""

# Si riparte da zero, cosi' se cancelli un file dal sito sparisce anche qui.
if (Test-Path $destinazione) {
    Remove-Item -Path $destinazione -Recurse -Force
}
New-Item -ItemType Directory -Path $destinazione -Force | Out-Null

$copiati = 0

foreach ($nome in $fileDaCopiare) {
    $percorso = Join-Path $sorgente $nome
    if (Test-Path $percorso) {
        Copy-Item -Path $percorso -Destination $destinazione
        Write-Host ("  copiato   " + $nome)
        $copiati = $copiati + 1
    } else {
        Write-Host ("  MANCA     " + $nome) -ForegroundColor Yellow
    }
}

foreach ($nome in $cartelleDaCopiare) {
    $percorso = Join-Path $sorgente $nome
    if (Test-Path $percorso) {
        Copy-Item -Path $percorso -Destination $destinazione -Recurse
        $quanti = (Get-ChildItem -Path $percorso -Recurse -File).Count
        Write-Host ("  copiata   " + $nome + "\  (" + $quanti + " file)")
        $copiati = $copiati + $quanti
    } else {
        Write-Host ("  MANCA     " + $nome + "\") -ForegroundColor Yellow
    }
}

# Controllo di sicurezza: se per sbaglio finisse dentro qualcosa di interno,
# lo dico invece di lasciarlo passare in silenzio.
$sospetti = Get-ChildItem -Path $destinazione -Recurse -Force |
    Where-Object {
        $_.Name -like "*.md" -or
        $_.Name -like "*.ps1" -or
        $_.Name -like "*.cmd" -or
        $_.Name -eq ".claude" -or
        $_.Name -eq "_assistente-rimosso"
    }

Write-Host ""
if ($sospetti) {
    Write-Host "ATTENZIONE: nella copia ci sono file che non dovrebbero starci:" -ForegroundColor Red
    foreach ($s in $sospetti) { Write-Host ("  " + $s.FullName) -ForegroundColor Red }
    Write-Host "Cancellali prima di caricare il sito." -ForegroundColor Red
} else {
    Write-Host ("Fatto: " + $copiati + " file pronti, niente di privato dentro.") -ForegroundColor Green
}

Write-Host ""
Write-Host "Da caricare sull'hosting:" -ForegroundColor Cyan
Write-Host ("  " + $destinazione)
Write-Host ""
Write-Host "Restano fuori (e devono restarci): _assistente-rimosso, i file .md," -ForegroundColor DarkGray
Write-Host "serve.ps1, questo script e la cartella .claude." -ForegroundColor DarkGray
Write-Host ""

Start-Process explorer.exe $destinazione
