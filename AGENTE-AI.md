# L'agente AI dell'assistente — come è fatto

9 settembre 2026. Riassunto di quello che è stato costruito: cos'è, cosa può e cosa non
può fare, come si accende e quanto costa.

## In due righe

L'assistente del sito ha **due cervelli**. Quello di serie è un elenco di risposte scritte
a mano: gratis, immediato, ma capisce solo quello che gli è stato insegnato. Sopra c'è
**l'agente AI vero** — Claude — che capisce anche le domande storte, gli errori di
battitura e le battute. L'agente si accende quando vuoi tu; finché è spento il sito
funziona esattamente come prima.

Il lavoro principale dell'assistente non cambia: **raccogliere i contatti e mandarteli**.
L'agente serve solo a rispondere meglio alle domande lungo la strada.

## Perché serviva un pezzo in più

Il sito è fatto di sole pagine, senza un computer che lavora dietro. Per parlare con
un'intelligenza artificiale serve una chiave API, e se la mettessimo nelle pagine del sito
chiunque potrebbe leggerla dal codice sorgente e usarla a tue spese.

Serve quindi un piccolo servizio in mezzo, che tiene la chiave al sicuro:

    visitatore → sito → worker (tiene la chiave) → Claude → indietro fino al visitatore

Il worker è `backend/worker.js`, pronto da incollare su Cloudflare Workers, che per questo
uso è gratuito.

## I file

| File | Cosa fa |
| --- | --- |
| `backend/worker.js` | Il servizio con la chiave. Contiene anche le istruzioni date all'AI |
| `js/agente.js` | Il collegamento dal sito al servizio. Qui si incolla l'indirizzo |
| `js/conoscenza.js` | Il cervello di serie: risposte scritte, argomenti vietati, riconoscimento delle scemenze |
| `js/assistente.js` | Il copione della conversazione, che non cambia mai |

## Cosa sa l'agente

Le informazioni sono scritte dentro `backend/worker.js`, nella parte `ISTRUZIONI`, e sono
le stesse che stanno sul sito: chi sei, il percorso (diploma, corso di web design 2025,
corso GOL da 245 ore in corso), cosa fai, i programmi che usi, i lavori pubblicati, che
lavori in FVG e anche a distanza, l'email di contatto, e come funziona la privacy.

Se cambi i testi del sito, aggiorna anche quel pezzo: è l'unico posto da toccare.

## Cosa l'agente non può fare, per costruzione

Non sono buone intenzioni scritte nel prompt: sono blocchi nel codice.

| Argomento | Cosa succede |
| --- | --- |
| Prezzi, preventivi, tariffe, sconti | **Non arrivano nemmeno all'AI.** Risposta fissa: "Prima fissiamo una data per parlare con Daniele, così potete discutere di cosa hai bisogno" |
| Contratti, pagamenti, fatture | Stesso trattamento |
| Dati personali tuoi, informazioni su altri clienti | Stesso trattamento |
| Chiedere nome, email, telefono | Vietato all'AI: quello lo fa il copione, sempre uguale |
| Inventare | Nelle istruzioni: se non sa, deve dirlo |

Verificato: con una domanda sui prezzi il numero di chiamate all'AI è **zero**.

## Se il servizio non risponde

L'assistente aspetta **nove secondi**. Se non arriva niente — servizio giù, credito finito,
rete lenta — ripiega da solo sul cervello di serie e continua la conversazione come se
nulla fosse. Dopo un errore smette di riprovare per un minuto, così i visitatori successivi
non restano ad aspettare. **Il contatto arriva lo stesso, sempre.**

## La chiave, passo per passo (console.anthropic.com)

I nomi delle voci possono cambiare leggermente nel tempo, ma il giro è questo.

1. Vai su **console.anthropic.com** e registrati (va bene l'account Google). È la console
   per sviluppatori: è diversa dall'abbonamento di claude.ai, e si paga a consumo.
2. **Plans & Billing** → aggiungi un metodo di pagamento e **compra credito**: 5 dollari
   sono più che sufficienti per cominciare. Il credito si scala solo quando qualcuno usa
   l'assistente.
3. Sempre in Billing, imposta un **limite di spesa mensile** (usage limit) basso, tipo 5
   dollari: è la rete di sicurezza se qualcuno si diverte a scrivere all'assistente tutto
   il giorno.
4. **API Keys** → **Create Key**. Dai un nome che ti ricordi a cosa serve, per esempio
   `sito-dk`. Copiala subito: viene mostrata **una volta sola**, poi non si recupera più
   (se la perdi, se ne crea un'altra e si cancella la vecchia).
5. La chiave inizia con `sk-ant-`. Va incollata **solo** dentro Cloudflare, come Secret.

**Dove la chiave non deve mai finire:** nei file del sito, nella cartella di backup, in una
chat, in una email. Se dovesse uscire, dalla console si cancella e se ne fa una nuova in
dieci secondi.

## Come si accende

1. Chiave su `console.anthropic.com`, con un po' di credito (vedi sopra).
2. Su `dash.cloudflare.com`: Workers & Pages → Create → Deploy → Edit code → incolli
   `backend/worker.js` → Deploy.
3. Settings → Variables and Secrets → Add → tipo **Secret**, nome `ANTHROPIC_API_KEY`,
   valore la tua chiave.
4. Copi l'indirizzo del worker e lo incolli in `js/agente.js`, voce `endpoint`.
5. In `backend/worker.js`, alla voce `ORIGINI_AMMESSE`, sostituisci `IL-TUO-DOMINIO-QUI`
   con l'indirizzo del sito quando sarà online.

Si può provare in locale prima di pubblicare: `http://localhost:8792` è già fra gli
indirizzi ammessi.

## Quanto costa

Il modello impostato è **`claude-haiku-4-5`**, il più economico: le risposte sono di due
righe, quindi si parla di frazioni di centesimo l'una. Cloudflare, per questo uso, è
gratuito. Si paga solo a consumo, senza abbonamenti.

Se un domani vuoi risposte più raffinate, in `backend/worker.js` cambi `MODELLO` in
`"claude-opus-5"`: il resto del file si adatta da solo.

## Le protezioni tecniche

- Solo il tuo sito può usare il servizio: gli altri indirizzi vengono respinti.
- Le domande sono limitate a 600 caratteri e la conversazione inviata alle ultime sei
  battute: nessuno può far costare una risposta più del dovuto.
- La risposta è limitata a 300 token, cioè due o tre frasi.
- La chiave non compare mai nel sito, né nelle richieste che partono dal browser.

## Privacy

Con l'agente acceso il testo delle domande esce dal sito e va al servizio AI, che lo usa
solo per generare la risposta. **I recapiti no**: nome, email e telefono arrivano soltanto
a te, per email. È già scritto nella pagina Privacy, sezione "Servizi esterni", in italiano
e in inglese.

## Cosa è cambiato anche senza agente

Mentre costruivo l'agente ho migliorato il cervello di serie, perché è quello che risponde
finché non accendi l'altro. Test con quattordici primi messaggi assurdi:

| Il visitatore scrive | Prima | Adesso |
| --- | --- | --- |
| asdasdasd, AAAA, 1234567890, "ok", "?" | Venivano registrati come richiesta | "Scusa, non ho capito. Raccontami in due parole cosa ti serve" |
| "raccontami una barzelletta" | Registrata come richiesta | "Ahah, su questo non ti so aiutare: mi occupo solo dei lavori di Daniele" |
| "che tempo fa a Gorizia?" | Rispondeva dove lavori (agganciava "Gorizia") | Battuta e torna al punto |
| "sai fare la pizza?", "sei single?" | "Non lo so, la giro a Daniele" | Battuta e torna al punto |

Prima cinque messaggi stupidi su quattordici finivano nella mail come richiesta; adesso
nessuno. Le richieste corte ma vere — "logo", "sito", "menu", "volantini" — passano tutte:
verificato.

## Cosa resta da fare

Solo accendere l'agente: chiave, worker, indirizzo. Il codice è pronto e provato con un
servizio finto, ma **non è ancora stato collegato a Claude vero** — quello richiede la tua
chiave e il tuo credito.
