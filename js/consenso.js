// ============ PRIVACY E COOKIE ============
// I caratteri ora stanno dentro il sito (cartella fonts/), quindi aprendo una
// pagina non parte piu' nessuna richiesta verso l'esterno: il consenso non
// serve piu' a decidere se contattare Google per il testo.
//
// Resta pero' un servizio che potrebbe entrare in gioco: reCAPTCHA, il filtro
// anti-spam del modulo. Quello si carica solo quando premi "Invia", e solo se
// hai accettato da questa barra. Chi rifiuta puo' comunque scrivere: il
// messaggio parte lo stesso, senza il controllo di Google.

var CONSENSO = (function () {
  const CHIAVE = "dk-consenso";

  // Il browser puo' vietare del tutto la memoria locale: in quel caso la barra
  // ricompare a ogni visita, ma il sito continua a funzionare.
  function leggi() {
    try {
      return localStorage.getItem(CHIAVE);
    } catch (e) {
      return null;
    }
  }

  function salva(valore) {
    try {
      localStorage.setItem(CHIAVE, valore);
    } catch (e) {}
  }

  function avvia() {
    const barra = document.getElementById("consenso");
    if (!barra) return;

    const scelta = leggi();
    const accetta = document.getElementById("consensoAccetta");
    const rifiuta = document.getElementById("consensoRifiuta");

    function chiudi() {
      barra.hidden = true;
    }

    accetta.addEventListener("click", () => {
      salva("accettato");
      chiudi();
    });

    rifiuta.addEventListener("click", () => {
      salva("rifiutato");
      chiudi();
    });

    // Solo a chi non ha ancora scelto.
    if (!scelta) barra.hidden = false;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", avvia);
  } else {
    avvia();
  }

  return {
    scelta: leggi,

    // Usata da js/modulo.js prima di caricare reCAPTCHA.
    accettato: function () {
      return leggi() === "accettato";
    },

    // Usata dalla pagina privacy per far ricomparire la barra.
    riapri: function () {
      try {
        localStorage.removeItem(CHIAVE);
      } catch (e) {}
      const barra = document.getElementById("consenso");
      if (barra) barra.hidden = false;
    },
  };
})();
