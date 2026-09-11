// ============ MODULO DI CONTATTO ============
// I messaggi vanno a Formspree, che li recapita nella casella email.
// L'invio avviene senza ricaricare la pagina: chi scrive resta sul sito.

var MODULO_CONFIG = {
  endpoint: "https://formspree.io/f/xgaepkro",

  // reCAPTCHA v3 di Google: lascia la stringa vuota e il modulo funziona
  // comunque (con la trappola anti-robot già presente nell'HTML).
  // Per attivarlo: vai su google.com/recaptcha/admin, registra il sito
  // scegliendo "reCAPTCHA v3", copia qui la CHIAVE DEL SITO, e incolla la
  // chiave segreta nelle impostazioni del form su Formspree.
  // Lo script di Google viene caricato solo al momento dell'invio, non
  // all'apertura della pagina: finché nessuno scrive, Google non viene contattato.
  chiaveRecaptcha: "",
};

(function () {
  const modulo = document.getElementById("modulo");
  if (!modulo) return;

  const pulsante = document.getElementById("moduloInvia");
  const stato = document.getElementById("moduloStato");
  const nota = document.getElementById("moduloNota");

  // L'avviso di Google va mostrato solo se reCAPTCHA e' davvero attivo.
  if (MODULO_CONFIG.chiaveRecaptcha && nota) nota.hidden = false;

  function messaggio(testo, tipo) {
    stato.textContent = testo;
    stato.className = "modulo-stato" + (tipo ? " modulo-stato-" + tipo : "");
  }

  // Carica lo script di Google una volta sola, e solo quando serve.
  // Due condizioni: che reCAPTCHA sia configurato e che il visitatore abbia
  // accettato dalla barra privacy. Chi ha rifiutato invia lo stesso, senza
  // che Google venga contattato: resta la trappola anti-robot del modulo.
  let recaptchaPronto = null;

  function recaptchaConsentito() {
    if (!MODULO_CONFIG.chiaveRecaptcha) return false;
    return typeof CONSENSO === "undefined" ? false : CONSENSO.accettato();
  }

  function caricaRecaptcha() {
    if (!recaptchaConsentito()) return Promise.resolve(null);
    if (recaptchaPronto) return recaptchaPronto;

    recaptchaPronto = new Promise((risolvi, rifiuta) => {
      const s = document.createElement("script");
      s.src = "https://www.google.com/recaptcha/api.js?render=" + MODULO_CONFIG.chiaveRecaptcha;
      s.onload = () => risolvi(true);
      s.onerror = () => rifiuta(new Error("recaptcha non caricato"));
      document.head.appendChild(s);
    });
    return recaptchaPronto;
  }

  function gettoneRecaptcha() {
    if (!recaptchaConsentito()) return Promise.resolve(null);
    return caricaRecaptcha()
      .then(
        () =>
          new Promise((risolvi) => {
            window.grecaptcha.ready(() => {
              window.grecaptcha
                .execute(MODULO_CONFIG.chiaveRecaptcha, { action: "contatto" })
                .then(risolvi, () => risolvi(null));
            });
          })
      )
      // Se Google non risponde non blocchiamo il messaggio: si invia lo stesso.
      .catch(() => null);
  }

  // ---------- quando l'invio non va ----------
  // Formspree, quando rifiuta un messaggio, dice anche perche'. Chi scrive legge
  // una spiegazione in parole semplici, nella lingua del sito. Il motivo tecnico
  // esatto finisce invece nella console del browser (F12, scheda Console): non lo
  // vede nessun visitatore, ma e' li' che guardi tu se devi capire cosa succede.
  // Quello che il visitatore ha scritto non viene mai cancellato.

  // Formspree risponde in due modi:
  //   { "error": "..." }                                    problema del form
  //   { "errors": [ { "field": "email", "message": "..." } ] }  un campo non va
  function leggiRifiuto(risposta) {
    return risposta.text().then(
      (testo) => {
        let dati = null;
        try {
          dati = JSON.parse(testo);
        } catch (e) {}
        const errori = dati && Array.isArray(dati.errors) ? dati.errors : [];
        const dettaglio =
          (dati && dati.error) ||
          errori.map((e) => (e.field ? e.field + ": " : "") + (e.message || e.code)).join("; ") ||
          testo.trim() ||
          "(risposta vuota)";
        const conCampo = errori.find((e) => e.field);
        return { stato: risposta.status, dettaglio: dettaglio, campo: conCampo ? conCampo.field : null };
      },
      () => ({ stato: risposta.status, dettaglio: "(risposta illeggibile)", campo: null })
    );
  }

  // Il nome del campo come lo vede il visitatore, gia' nella lingua scelta:
  // "Telefono", non "telefono" e non "Telefono facoltativo".
  function etichettaCampo(nome) {
    if (nome === "privacy") return "Privacy";
    const campo = modulo.querySelector('[name="' + nome + '"]');
    const etichetta = campo && campo.id ? modulo.querySelector('label[for="' + campo.id + '"]') : null;
    return etichetta && etichetta.firstChild ? etichetta.firstChild.textContent.trim() : nome;
  }

  function spiega(errore) {
    if (errore.rete) return LINGUA.t(navigator.onLine === false ? "erroreOffline" : "erroreRete");
    const s = errore.stato;
    if (errore.campo && (s === 400 || s === 422)) return LINGUA.t("erroreCampo")(etichettaCampo(errore.campo));
    if (s === 429) return LINGUA.t("erroreTroppi");
    if (s >= 500) return LINGUA.t("erroreServizio");
    if (s === 400 || s === 401 || s === 403 || s === 404) return LINGUA.t("erroreConfigurazione");
    return LINGUA.t("moduloErrore");
  }

  function annotaInConsole(errore) {
    const righe = ["[Modulo di contatto] Invio non riuscito."];
    if (errore.rete) {
      righe.push("La richiesta non è partita, o il browser ha bloccato la risposta: " + errore.dettaglio);
    } else {
      righe.push("Formspree ha risposto HTTP " + errore.stato + ": " + errore.dettaglio);
    }
    if (/recaptcha/i.test(errore.dettaglio)) {
      righe.push("Soluzione: su formspree.io apri il form, vai in Settings e disattiva reCAPTCHA.");
    }
    console.warn(righe.join("\n"));
  }

  function mostraErrore(errore) {
    annotaInConsole(errore);
    messaggio(spiega(errore), "errore");
    // Se il problema e' un campo preciso, il cursore ci va sopra da solo.
    if (errore.campo) {
      const campo = modulo.querySelector('[name="' + errore.campo + '"]');
      if (campo) campo.focus();
    }
  }

  modulo.addEventListener("submit", (e) => {
    e.preventDefault();

    // Gli spazi non sono un nome e non sono un messaggio: si tolgono prima del
    // controllo, cosi' un campo di soli spazi risulta vuoto e il browser lo segnala.
    ["campoNome", "campoEmail", "campoTelefono", "campoMessaggio"].forEach((id) => {
      const campo = document.getElementById(id);
      if (campo) campo.value = campo.value.trim();
    });

    if (!modulo.reportValidity()) return;

    pulsante.disabled = true;
    messaggio(LINGUA.t("moduloAttesa"), "attesa");

    gettoneRecaptcha().then((gettone) => {
      const dati = new FormData(modulo);
      if (gettone) dati.append("g-recaptcha-response", gettone);

      fetch(MODULO_CONFIG.endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: dati,
      })
        .then(
          (r) => {
            if (r.ok) {
              modulo.reset();
              messaggio(LINGUA.t("moduloOk"), "ok");
              return;
            }
            return leggiRifiuto(r).then(mostraErrore);
          },
          // qui si arriva solo se la richiesta non ha avuto nessuna risposta
          (errore) => mostraErrore({ rete: true, dettaglio: errore.message })
        )
        // rete di sicurezza: se qualcosa qui sopra si rompe, il visitatore
        // vede comunque un messaggio invece di un pulsante bloccato
        .catch((errore) => mostraErrore({ stato: 0, dettaglio: String(errore) }))
        .then(() => {
          pulsante.disabled = false;
        });
    });
  });
})();
