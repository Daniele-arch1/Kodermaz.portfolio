# Sito personale — Daniele

Sito statico (HTML, CSS, JavaScript). Nessuna libreria, nessun passaggio di build:
i file che vedi sono esattamente quelli che vanno online.

## File

| File | Cosa contiene |
| --- | --- |
| `index.html` | Tutti i testi del sito, divisi per sezione con un commento all'inizio di ognuna |
| `privacy.html` | Informativa privacy e cookie, con il pulsante per rivedere le preferenze |
| `css/style.css` | Colori, tipografia e layout. I colori stanno tutti in `:root`, in cima al file |
| `js/script.js` | Anno nel footer, menu mobile, comparsa allo scroll, voce di menu attiva |
| `js/lingua.js` | Italiano e inglese: tutte le traduzioni e il selettore con la bandiera |
| `js/modulo.js` | Il modulo di contatto: controlli, invio e messaggi di esito |
| `img/daniele.webp` | Foto della sezione "Chi sono" (sostituisci il file per cambiarla) |
| `img/*.svg` | I loghi dei programmi in uso nella sezione "Strumenti" |
| `img/loghi/` | Copie di riserva degli stessi loghi, più quello di Instagram (l'unico in uso da qui) |
| `img/logo-dk.png` | Il marchio DK dell'intestazione, su sfondo trasparente |
| `img/favicon.png` | Icona del sito, 192×192: linguetta del browser e risultati di Google (e `apple-touch-icon.png` per il telefono) |
| `favicon.ico` | La stessa icona in 16, 32 e 48 px, nella radice: alcuni programmi la cercano solo lì |
| `404.html` | Pagina mostrata a chi sbaglia indirizzo |
| `robots.txt` | Cosa possono leggere i motori di ricerca |
| `sitemap.xml` | Elenco delle pagine da indicizzare (solo la home) |
| `css/caratteri.css` | Le regole `@font-face` dei caratteri ospitati nel sito |
| `fonts/` | Sora e Inter in formato `.woff2`, con la licenza |
| `js/consenso.js` | La barra privacy e la scelta salvata nel browser |
| `js/corso-gol.js` | Il calendario delle lezioni, esportato da Google Calendar |
| `serve.ps1` | Server locale per vedere il sito in anteprima |
| `Prepara-per-pubblicare.ps1` | Crea la copia pulita da caricare online |
| `seo/` | I testi per i motori di ricerca e come farsi trovare (non va online) |

## Vedere il sito in locale

Doppio clic su `index.html` funziona già. Per un'anteprima più fedele (stesso
comportamento di quando sarà online), avvia il server locale:

```bash
powershell -NoProfile -ExecutionPolicy Bypass -File serve.ps1
```

Poi apri http://localhost:8792/ — chiudi la finestra per fermarlo.

## Modificare i contenuti

- **Testi**: sono tutti in `index.html`. Ogni sezione ha un commento (`<!-- PROGETTI: ... -->`)
  che dice cosa modificare.
- **Nuovo progetto**: copia un blocco `<article class="project-card reveal"> ... </article>`
  dentro `.projects-grid` e cambia tag, titolo e descrizione.
- **Nuovo strumento**: copia un blocco `<li class="tool-card reveal"> ... </li>`, cambia
  nome e ruolo, e metti il logo in `img/`. I loghi sono SVG monocromatici con
  `fill="#EAECEF"` scritto dentro il file: per cambiarne il colore si modifica quel valore.
  In `img/loghi/` ci sono le copie di riserva più leggere degli stessi sette loghi: se un
  file in `img/` si rovina o va perso, basta ricopiarlo da lì.
- **Colori dei pulsanti**: il rosso acceso `--accent` è per testi e bordi, `--accent-pieno`
  (più profondo) è lo sfondo dei pulsanti pieni, con testo bianco sopra. Sono separati per
  una ragione: lo stesso rosso non può leggersi bene sia come testo sul fondo scuro sia
  come sfondo sotto il testo bianco.
- **Ore del corso GOL**: non si toccano a mano. Il calendario delle lezioni sta in
  `js/corso-gol.js` (generato dal calendario Google) e il sito calcola a ogni visita
  quante ore sono già state fatte e quante mancano, in base alla data di oggi.
  Se le lezioni cambiano, va rigenerato quel file — vedi "Corso GOL" qui sotto.
  I valori `data-ore-fatte` / `data-ore-totali` in `index.html` sono solo la riserva
  usata se `js/corso-gol.js` manca.
- **Colori**: cambia `--accent` in `css/style.css` e cambia tutto il sito.

La classe `reveal` è quella che fa comparire l'elemento allo scroll: lasciala sui
blocchi nuovi per mantenere lo stesso effetto.

## Corso GOL: come funziona il contatore

`js/corso-gol.js` contiene le 62 lezioni del corso (inizio e fine di ognuna), esportate
dal calendario Google. A ogni apertura della pagina il sito somma:

- **ore fatte** — le lezioni già concluse, più i minuti della lezione eventualmente in corso;
- **ore che mancano** — il resto, fino al totale delle ore a calendario (245).

Da qui ricava percentuale, barra di avanzamento ed etichetta della card
("In partenza" → "In corso" → "Completato").
Nessun server e nessuna chiave API: è tutto calcolato nel browser di chi guarda.

Se il calendario cambia (lezioni spostate, aggiunte o annullate) va rigenerato solo
`js/corso-gol.js`: il formato è una riga per lezione, `["inizio", "fine"]` in ISO 8601.

## Italiano e inglese

Il sito è scritto in italiano nell'HTML; l'inglese sta tutto in `js/lingua.js`, una riga
per frase: `"frase italiana": "english sentence"`. Se cambi un testo nell'HTML, cambia la
stessa riga qui, altrimenti quella frase resta in italiano anche in inglese.

La lingua si sceglie in due punti: nella **barra privacy**, quella che compare prima di
usare il sito, e nel **footer**, dalla bandierina con la sigla. La scelta resta salvata nel
browser; al primo arrivo il sito guarda la lingua del browser e si regola da solo.

Le frasi che il JavaScript scrive da solo (i messaggi del modulo, le etichette del corso)
non stanno nell'HTML: sono in fondo a `lingua.js`, nell'elenco `FRASI`, divise per `it` e `en`.

## L'assistente AI, tolto dal sito

L'assistente in chat e l'agente AI sono stati rimossi dal sito. I file non sono stati
buttati: stanno nella cartella `_assistente-rimosso/` (`assistente.js`, `conoscenza.js`,
`agente.js` e `backend/worker.js`). Per rimetterlo servirebbe ricopiarli in `js/`,
riaggiungere i tre `<script>` in fondo a `index.html` e il blocco del pannello nella
sezione contatti — il tutto è nei backup datati dentro `Sito DK\1 - Backup sito`.

Gli stili `.assistente-*` in `css/style.css` e le traduzioni delle sue frasi in
`js/lingua.js` sono stati tolti: erano codice che non serviva più a niente e confondeva
chi apriva i file. Le traduzioni sono conservate in
`_assistente-rimosso/traduzioni-assistente.txt`, il CSS nei backup datati.

## Privacy, cookie e caratteri

I caratteri **Sora** e **Inter** stanno dentro il sito, nella cartella `fonts/`, e le
regole per usarli in `css/caratteri.css`. Prima venivano da Google e partivano solo dopo
un "Accetta": chi rifiutava vedeva il sito con i caratteri di sistema, cioè diverso da
come è stato disegnato. Adesso l'aspetto è identico per tutti e, aprendo una pagina, il
sito non contatta nessuno.

Sono due file per famiglia: uno copre tutti i pesi, l'altro aggiunge le lettere accentate
meno comuni. Il browser scarica il secondo solo se servono davvero. In tutto ~170 KB.

La barra in basso a sinistra compare a chi non ha ancora scelto e ricorda la risposta in
`localStorage` (`dk-consenso`), quindi non ricompare a ogni visita. La scelta continua a
contare per una cosa: **reCAPTCHA**, il filtro anti-spam del modulo. Si carica solo quando
premi "Invia" e solo se hai accettato; chi rifiuta invia lo stesso, senza che Google venga
contattato (resta la trappola anti-robot dentro il modulo).

Chi vuole cambiare idea trova il pulsante "Rivedi le preferenze" in `privacy.html`.

Se cambi uno di questi comportamenti, cambia anche il testo di `privacy.html`: quella
pagina deve dire quello che il sito fa davvero.

## L'archivio

Backup, contatti ricevuti e progetti futuri stanno in
`C:\Users\koder\Documents\documenti seri\Sito DK`. Il backup si fa con un doppio clic su
`1 - Backup sito\Fai il backup adesso.cmd`: conviene lanciarlo dopo ogni modifica
importante.

## Pubblicare

**Non caricare la cartella così com'è.** Dentro ci sono anche file di lavoro, e finirebbero
online insieme al sito: chiunque potrebbe aprirli scrivendo l'indirizzo giusto. Restano
fuori `_assistente-rimosso/`, `seo/`, i file `.md` (questo compreso e i report dei test),
`serve.ps1`, `Prepara-per-pubblicare.ps1` e la cartella `.claude/`.

Doppio clic su **`Prepara il sito da pubblicare.cmd`**: crea una copia con dentro solo
quello che deve stare online e la apre in una finestra. La copia va in
`Documenti\documenti seri\Sito DK\4 - Sito da pubblicare`, ed è quella da caricare
sull'hosting (GitHub Pages, Netlify, Cloudflare Pages o uno spazio FTP), con `index.html`
nella radice.

Se un domani aggiungi una cartella nuova al sito, va aggiunta anche all'elenco dentro
`Prepara-per-pubblicare.ps1`, altrimenti resta fuori dalla copia.

### Prima di pubblicare per la prima volta

Tre indirizzi sono ancora dei segnaposto, perché il sito non ha un dominio:

- `index.html` — `og:url`, `og:image`, `twitter:image` (servono all'anteprima quando il
  link viene condiviso su WhatsApp o LinkedIn);
- `robots.txt` e `sitemap.xml` — la riga con l'indirizzo del sito.

Cerca `IL-TUO-DOMINIO-QUI` e sostituiscilo con l'indirizzo vero.

## Pubblicare su GitHub (www.kodermaz.com)

La cartella è pronta per diventare un repository GitHub e andare online con GitHub Pages.

| File | A cosa serve |
| --- | --- |
| `.gitignore` | Decide cosa sale su GitHub: **solo il sito** (le stesse cose dello script di pubblicazione). Backup, anteprime, appunti `.md`, cartella `seo`, script e vecchi caratteri restano sul computer |
| `CNAME` | Dice a GitHub Pages che il sito risponde a `www.kodermaz.com` |
| `.nojekyll` | File vuoto: dice a GitHub di pubblicare i file così come sono, senza rielaborarli |

Il repository deve essere **pubblico** perché GitHub Pages gratuito funzioni: per
questo il `.gitignore` lascia fuori tutto quello che non è il sito.

### La prima volta

1. Con **GitHub Desktop**: *File → Add local repository* → scegli questa cartella →
   "create a repository" → *Publish repository* (togli la spunta "Keep this code private").
2. Su github.com, nel repository: *Settings → Pages* → *Source: Deploy from a branch*,
   branch `main`, cartella `/ (root)` → *Save*.
3. Sempre in *Pages*, alla voce *Custom domain* deve comparire `www.kodermaz.com`
   (lo legge dal file `CNAME`). Quando il controllo è verde, spunta **Enforce HTTPS**.
4. Dal pannello di chi ti ha venduto il dominio, imposta i DNS:
   - record `CNAME`: nome `www` → valore `daniele-arch1.github.io`
   - record `A` per `kodermaz.com` (senza www), quattro righe:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   I DNS possono metterci da pochi minuti a 24 ore.

### Le volte dopo

Modifichi i file, poi in GitHub Desktop scrivi due parole su cosa hai cambiato,
*Commit to main* e *Push origin*. Dopo un minuto circa il sito online è aggiornato.

Lo script `Prepara il sito da pubblicare` non serve più per GitHub: resta utile solo
se un giorno carichi il sito su un hosting diverso.
