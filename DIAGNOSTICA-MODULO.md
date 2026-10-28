# Diagnostica del modulo di contatto — 11 settembre 2026

## In una riga

Il sito funziona. È **Formspree** che rifiuta i messaggi, perché nelle impostazioni del
form è attivo il suo reCAPTCHA, e con il reCAPTCHA attivo Formspree non accetta invii
fatti "in pagina" (AJAX), che è proprio il modo in cui il modulo spedisce senza farti
uscire dal sito.

## Le prove

| # | Da dove | Esito | Risposta di Formspree |
| --- | --- | --- | --- |
| — | Richiesta di sola lettura all'indirizzo del form | 405 (normale) | `Please submit POST request.` — il servizio è raggiungibile |
| 1 | Il modulo vero del sito, compilato e inviato come un visitatore | **403** | `In order to submit via AJAX, you need to set a custom key or reCAPTCHA must be disabled in this form's settings page.` |
| 2 | Direttamente dal terminale, **senza passare dal sito** | **403** | Stesso messaggio |

La prova 2 è quella che chiude il caso: arriva lo stesso rifiuto anche senza il sito di
mezzo, quindi il problema non è nel codice.

Controllato anche, tutto in ordine:

- indirizzo del form `https://formspree.io/f/xgaepkro`, sia nel JavaScript sia
  nell'attributo `action`, metodo `POST`;
- i sei campi arrivano con il loro nome: `nome`, `email`, `telefono`, `messaggio`,
  `_gotcha` (la trappola per i robot), `privacy`;
- nessun errore in console, pagina caricata correttamente;
- in caso di errore il modulo **non cancella** quello che il visitatore ha scritto, e gli
  mostra l'indirizzo email come alternativa.

Nessuna delle due mail è arrivata: Formspree le ha fermate prima di spedirle.

## Come si sistema (5 minuti, dal tuo account)

1. Entra su **formspree.io** con il tuo account.
2. Apri il form `xgaepkro`.
3. Vai in **Settings** e cerca la voce **reCAPTCHA** (di solito nella parte sulla
   protezione dallo spam).
4. **Disattivala** e salva.

Dopo, il modulo riprende a funzionare subito, senza toccare niente nel sito.

**Perché questa e non l'altra strada.** Formspree propone anche l'alternativa di
mettere una chiave reCAPTCHA tua. Il sito sarebbe già predisposto (`chiaveRecaptcha` in
`js/modulo.js`), ma c'è un problema: oggi reCAPTCHA parte solo per chi ha accettato
dalla barra privacy. Con una chiave tua, Formspree rifiuterebbe i messaggi di **chi ha
rifiutato**, e l'informativa promette il contrario ("chi rifiuta può scrivermi lo
stesso"). Per usarla andrebbero cambiati sia il codice sia l'informativa.

Disattivando il reCAPTCHA, la protezione dallo spam resta affidata alla trappola
`_gotcha` nascosta nel modulo, che ferma la maggior parte dei robot semplici. Se un
giorno arriva spam vero, si riparte da qui.

## Dopo la modifica

Basta un solo invio di prova per confermare che è tutto a posto.

## Fatto dopo la diagnosi: il modulo dice perché

Prima, qualunque cosa andasse storta, il visitatore leggeva sempre lo stesso messaggio
generico e il motivo vero si perdeva. Adesso `js/modulo.js` legge la risposta di
Formspree e:

- al **visitatore** mostra il motivo in parole semplici, in italiano o in inglese;
- nella **console del browser** (F12, scheda Console) scrive il motivo tecnico esatto,
  e per il caso reCAPTCHA anche la soluzione.

| Cosa succede | Cosa legge il visitatore |
| --- | --- |
| Impostazione sbagliata su Formspree (il caso di oggi, 403) | "Il modulo in questo momento non riesce a ricevere messaggi per un problema di impostazioni, mio e non tuo. Scrivimi a …" |
| Un campo rifiutato (422) | "Il servizio di invio non ha accettato il campo "Email": controllalo e riprova." — e il cursore va su quel campo |
| Troppi invii in poco tempo (429) | "…il servizio di invio si è preso una pausa. Riprova tra qualche minuto…" |
| Formspree in panne (500) | "Il servizio che recapita i messaggi ha un problema temporaneo…" |
| Niente connessione | "Sembra che tu non sia connesso a internet…" |
| Richiesta bloccata dal browser | "…qualcosa nel browser (per esempio un blocco della pubblicità) ha fermato l'invio…" |

In tutti i casi il testo scritto dal visitatore resta nel modulo. I sei casi, più quello
di un invio riuscito, sono stati provati nel browser con risposte finte, identiche a
quelle di Formspree: **nessuna mail consumata**.
