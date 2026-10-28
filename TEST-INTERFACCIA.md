# Test dell'interfaccia — 8 settembre 2026

Venti prove sul sito facendo finta di essere un cliente, concentrate su **modulo di
contatto** e **assistente AI**. Provato sia da computer (822 px) sia da telefono (375 px),
con mouse e con sola tastiera.

**Email consumate: 6 su 10** del budget che mi hai dato. Le trovi in casella con oggetto
"TEST … DAL SITO" o "Test Diagnostica": puoi cestinarle tutte. Le altre prove sono state
fatte intercettando l'invio, così non pesano sul limite mensile di 50.

---

## Le venti prove

| # | Prova | Esito |
| --- | --- | --- |
| 1 | Modulo vuoto | ✅ Bloccato, 4 campi segnalati |
| 2 | Email scritta male (`marco@@sbagliata`) | ✅ Bloccato dal browser |
| 3 | Invio senza spuntare la privacy | ✅ Bloccato: "Seleziona questa casella se intendi procedere" |
| 4 | Nome e messaggio fatti di soli spazi | ⚠️ **Passava** → corretto, ora bloccato |
| 5 | Invio normale (reale) | ✅ HTTP 200 da Formspree |
| 6 | Messaggio molto lungo, 2000 caratteri (reale) | ✅ 200 in 0,8 secondi |
| 7 | Accenti, emoji, virgolette, & (reale) | ✅ 200, testo integro |
| 8 | Messaggio con dentro `<script>alert(1)</script>` (reale) | ⚠️ Respinto dal filtro di Formspree, vedi nota |
| 9 | Doppio clic rapido su "Invia" | ✅ Una sola email, pulsante disattivato durante l'invio |
| 10 | Rete assente durante l'invio | ✅ Messaggio d'errore, testo del cliente conservato |
| 11 | Assistente: apertura e presentazione | ✅ Frase giusta + 3 risposte rapide |
| 12 | Assistente: domanda sull'urgenza | ✅ Esattamente il testo previsto |
| 13 | Cliente che scrive nome, email e telefono tutti insieme | ✅ Una sola domanda, poi chiude |
| 14 | Cliente che li dà uno alla volta | ✅ Tre domande, nessuna ripetuta |
| 15 | Cliente che rifiuta il nome due volte | ✅ Chiede una volta sola, poi tira dritto |
| 16 | Email sbagliata e poi corretta | ✅ Richiesta una sola volta |
| 17 | Telefono con prefisso e spazi (`+39 0432 55 66 77`) | ✅ Riconosciuto |
| 18 | Cliente che aggiunge qualcosa dopo l'invio | ⚠️ **Diceva "lo aggiungo" e non mandava niente** → corretto |
| 19 | Tutto il giro da telefono, 375 px | ✅ Nessuno sbordamento, modulo e assistente usabili |
| 20 | Sola tastiera + barra privacy su "Rifiuta" | ⚠️ **Invio non spediva il messaggio in chat** → corretto |

---

## Il quadro d'insieme

| Aspetto | Punto di forza | Punto debole | Da migliorare | Cosa ho fatto |
| --- | --- | --- | --- | --- |
| **Consegna delle email** | Formspree risponde 200 in meno di un secondo, testo integro anche con accenti ed emoji | Un messaggio con dentro un tag `<script>` viene respinto prima di arrivare | Se capitasse davvero, spiegare al cliente *perché* invece di dire solo "non è andata" | Verificato con 6 invii reali; isolata la causa (è il tag, non gli accenti né la frequenza) |
| **Modulo di contatto** | Validazione chiara, nessun doppio invio, i dati non si perdono se la rete cade | Accettava campi di soli spazi | Un conferma visiva più forte dopo l'invio (es. il modulo che si chiude) | Aggiunta la pulizia degli spazi prima del controllo |
| **Assistente AI** | Raccoglie i dati anche quando arrivano tutti in una frase, non ripete le domande, chiude sempre la conversazione | Prometteva di inoltrare le aggiunte dopo l'invio ma non le mandava | Riconoscere anche i numeri scritti a lettere o le email dettate | Aggiunta la seconda email con le aggiunte, raggruppate e inviate una volta sola |
| **Tastiera e accessibilità** | Ordine di tabulazione corretto, contorno di focus ben visibile, Esc chiude e riporta il fuoco al pulsante | Il tasto Invio in chat non spediva | Nulla di grave | Aggiunto il gestore esplicito del tasto Invio |
| **Telefono** | Nessuno sbordamento orizzontale, campi a tutta larghezza, chat leggibile | Il quadratino della privacy era 18 px, piccolo per il dito | — | Portato a 22 px; anche il testo accanto fa da bersaglio |
| **Privacy** | Rifiutando, dal sito non parte **nessuna** richiesta esterna; il modulo continua a funzionare | La casella privacy resta da spuntare a mano | — | Verificato: 0 richieste esterne con il rifiuto attivo |
| **Anti-spam** | Trappola nascosta già attiva; Formspree filtra da parte sua | reCAPTCHA v3 è cablato ma **spento**: manca la chiave | Registrare il sito su Google e incollare la chiave | Codice pronto: appena metti la chiave si attiva da solo |

---

## Le tre correzioni

1. **Campi di soli spazi** — `"   "` passava per un nome valido. Ora i campi vengono
   ripuliti prima del controllo, quindi risultano vuoti e il browser li segnala.
2. **Aggiunte dopo l'invio** — se il cliente scriveva "ah, dimenticavo: il budget è 300
   euro" dopo aver già inviato, l'assistente rispondeva "lo aggiungo al messaggio" ma quel
   messaggio non partiva. Ora parte una seconda email, con le aggiunte raggruppate e spedite
   una volta sola dopo otto secondi di pausa (o subito, se il cliente chiude la pagina).
   Al massimo una email in più per conversazione.
3. **Tasto Invio in chat** — scrivere e premere Invio non spediva nulla. Ora c'è un gestore
   esplicito: Invio manda, Maiusc+Invio no.

---

## Da sapere

**Il filtro di Formspree.** Un messaggio contenente `<script>…</script>` viene respinto
dalla protezione davanti a Formspree: la richiesta non arriva nemmeno al servizio, e nella
console del browser compare `blocked by CORS policy: No 'Access-Control-Allow-Origin'
header`. È una difesa sensata e nessun cliente vero scrive così. In quel caso il sito mostra l'errore e
**conserva il testo**, con l'indirizzo email come alternativa. Gli accenti, le emoji, le
virgolette e perfino la parola "script" passano senza problemi: ho verificato ognuno.

**reCAPTCHA.** Resta da attivare: serve la chiave del sito da `google.com/recaptcha/admin`
(versione v3) in `js/modulo.js`, e la chiave segreta nelle impostazioni del form su
Formspree. Finché non c'è, l'unica difesa è la trappola nascosta — che comunque ferma i
robot più comuni.

**La spunta privacy.** Resta da mettere a mano di proposito: una casella già spuntata non
vale come consenso, quindi meglio lasciarla vuota.
