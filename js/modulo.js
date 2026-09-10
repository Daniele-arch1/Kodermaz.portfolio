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
        .then((r) => {
          if (!r.ok) throw new Error("invio non riuscito");
          modulo.reset();
          messaggio(LINGUA.t("moduloOk"), "ok");
        })
        .catch(() => {
          messaggio(LINGUA.t("moduloErrore"), "errore");
        })
        .then(() => {
          pulsante.disabled = false;
        });
    });
  });
})();
