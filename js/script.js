// ============ ANNO NEL FOOTER ============
document.getElementById("year").textContent = new Date().getFullYear();

// ============ MENU MOBILE ============
const toggle = document.getElementById("navToggle");
const nav = document.getElementById("mainNav");

function chiudiMenu() {
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", LINGUA.t("menuApri"));
}

toggle.addEventListener("click", () => {
  const aperto = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(aperto));
  // l'etichetta segue la lingua scelta: prima restava sempre in italiano
  toggle.setAttribute("aria-label", LINGUA.t(aperto ? "menuChiudi" : "menuApri"));
});

// Cliccando una voce il menu si richiude
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", chiudiMenu);
});

// Esc chiude il menu e riporta il focus sul pulsante
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("is-open")) {
    chiudiMenu();
    toggle.focus();
  }
});

// Un tocco fuori dal menu lo richiude. Quel tocco serve solo a chiudere: non
// apre anche il link o il pulsante che c'era sotto, altrimenti chi tocca a caso
// per chiudere si ritroverebbe in un'altra pagina senza volerlo.
// Si ascolta in fase di "cattura" (il true in fondo), cosi' il tocco viene
// intercettato prima che arrivi all'elemento sotto il dito.
document.addEventListener(
  "click",
  (e) => {
    if (!nav.classList.contains("is-open")) return;
    if (nav.contains(e.target) || toggle.contains(e.target)) return;
    e.preventDefault();
    e.stopPropagation();
    chiudiMenu();
  },
  true
);

// Tornando a schermo largo il menu non deve restare "aperto"
window.addEventListener("resize", () => {
  if (window.innerWidth > 720) chiudiMenu();
});

// ============ COMPARSA DEGLI ELEMENTI ALLO SCROLL ============
const daRivelare = document.querySelectorAll(".reveal");

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  daRivelare.forEach((el) => el.classList.add("is-visible"));
} else {
  const osservatore = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          osservatore.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  daRivelare.forEach((el) => osservatore.observe(el));
}

// ============ LINK DEI PROGETTI NON ANCORA ONLINE ============
// Finché nell'HTML resta il segnaposto, il link diventa una scritta grigia:
// meglio "Presto online" che un clic su una pagina che non esiste.
document.querySelectorAll('a.project-link[href="INDIRIZZO-APP-QUI"]').forEach((link) => {
  link.removeAttribute("href");
  link.removeAttribute("target");
  link.classList.add("project-link-vuoto");
  link.textContent =
    typeof LINGUA !== "undefined" && LINGUA.attuale() === "en" ? "Coming online soon" : "Presto online";
});

document.addEventListener("linguacambiata", () => {
  document.querySelectorAll(".project-link-vuoto").forEach((link) => {
    link.textContent = LINGUA.attuale() === "en" ? "Coming online soon" : "Presto online";
  });
});

// ============ FOTO DI "CHI SONO" ============
// Finche' la foto non c'e', la colonna si toglie invece di mostrare un'icona rotta.
const figuraFoto = document.querySelector(".about-photo");

if (figuraFoto) {
  const foto = figuraFoto.querySelector("img");
  const nascondiFoto = () => {
    figuraFoto.remove();
    document.querySelector(".about-layout").classList.add("senza-foto");
  };
  if (foto.complete && foto.naturalWidth === 0) nascondiFoto();
  foto.addEventListener("error", nascondiFoto);
}

// ============ CONTO ALLA ROVESCIA DELLE ORE DI CORSO ============
const cardCorso = document.querySelector(".edu-card-wip");

if (cardCorso) {
  // Le ore arrivano dal calendario (js/corso-gol.js): ogni lezione gia' finita
  // conta come fatta, quella in corso conta per i minuti trascorsi. Cosi' il
  // riquadro si aggiorna da solo ogni volta che qualcuno apre la pagina.
  function oreDalCalendario() {
    if (typeof CORSO_GOL === "undefined" || !Array.isArray(CORSO_GOL.lezioni)) return null;

    const adesso = Date.now();
    const ORA = 3600000;
    let totali = 0;
    let fatte = 0;

    CORSO_GOL.lezioni.forEach(([inizioIso, fineIso]) => {
      const inizio = new Date(inizioIso).getTime();
      const fine = new Date(fineIso).getTime();
      if (isNaN(inizio) || isNaN(fine) || fine <= inizio) return;

      totali += (fine - inizio) / ORA;
      if (adesso >= fine) fatte += (fine - inizio) / ORA;
      else if (adesso > inizio) fatte += (adesso - inizio) / ORA;
    });

    if (!totali) return null;
    return { totali: Math.round(totali), fatte: Math.round(fatte) };
  }

  const daCalendario = oreDalCalendario();
  const totali = daCalendario ? daCalendario.totali : Number(cardCorso.dataset.oreTotali) || 0;
  const fatte = daCalendario
    ? Math.min(daCalendario.fatte, totali)
    : Math.min(Number(cardCorso.dataset.oreFatte) || 0, totali);
  const mancanti = totali - fatte;
  const percentuale = totali ? Math.round((fatte / totali) * 100) : 0;

  const numeroFatte = cardCorso.querySelector(".edu-done");
  const numeroMancanti = cardCorso.querySelector(".edu-left");
  const barra = cardCorso.querySelector(".edu-bar-fill");
  const contenitoreBarra = cardCorso.querySelector(".edu-bar");
  const testoPercentuale = cardCorso.querySelector(".edu-percent");

  contenitoreBarra.setAttribute("aria-valuemax", String(totali));
  contenitoreBarra.setAttribute("aria-valuenow", String(fatte));
  // Valori giusti subito: l'animazione li ripercorre quando la card entra in vista,
  // ma nel frattempo non deve restare in pagina un numero vecchio.
  numeroFatte.textContent = String(fatte);
  numeroMancanti.textContent = String(mancanti);
  testoPercentuale.textContent = percentuale + "%";
  const testoPercorso = () =>
    typeof LINGUA !== "undefined"
      ? LINGUA.t("percorso")(percentuale, totali).replace(percentuale + "%", "").trim()
      : " del percorso completato — " + totali + " ore in tutto";

  cardCorso.querySelector(".edu-note-testo").textContent = " " + testoPercorso();

  // L'etichetta segue lo stato reale del corso: da iniziare, in corso, finito.
  const etichetta = cardCorso.querySelector(".edu-badge");
  if (fatte >= totali) {
    etichetta.textContent = "Completato";
    etichetta.classList.remove("edu-badge-wip");
  } else if (fatte > 0) {
    etichetta.textContent = "In corso";
  } else {
    etichetta.textContent = "In partenza";
  }

  // Se si cambia lingua, il riquadro del corso si riscrive nella lingua giusta.
  document.addEventListener("linguacambiata", () => {
    cardCorso.querySelector(".edu-note-testo").textContent = " " + testoPercorso();
  });


  // Le ore fatte salgono, quelle che mancano scendono: il countdown del progetto.
  function anima(elemento, da, a, durata) {
    const inizio = performance.now();
    function passo(ora) {
      const avanzamento = Math.min((ora - inizio) / durata, 1);
      const morbido = 1 - Math.pow(1 - avanzamento, 3);
      elemento.textContent = Math.round(da + (a - da) * morbido);
      if (avanzamento < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
  }

  function mostraAvanzamento() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      numeroFatte.textContent = fatte;
      numeroMancanti.textContent = mancanti;
      barra.style.width = percentuale + "%";
      return;
    }
    anima(numeroFatte, 0, fatte, 1200);
    anima(numeroMancanti, totali, mancanti, 1200);
    barra.style.width = percentuale + "%";
  }

  const spiaCorso = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        mostraAvanzamento();
        spiaCorso.disconnect();
      });
    },
    { threshold: 0.4 }
  );
  spiaCorso.observe(cardCorso);
}

// ============ VOCE DI MENU ATTIVA ============
const sezioni = document.querySelectorAll("main section[id]");
const vociMenu = nav.querySelectorAll('a[href^="#"]:not(.nav-cta)');

// Sezione corrente = l'ultima il cui inizio e' gia' passato sopra il terzo alto
// dello schermo. Semplice e sempre coerente, anche saltando da un link all'altro.
let inAttesaDiFrame = false;

function aggiornaVoceAttiva() {
  const riferimento = window.scrollY + window.innerHeight * 0.35;
  let corrente = null;

  sezioni.forEach((sezione) => {
    if (sezione.offsetTop <= riferimento) corrente = sezione;
  });

  vociMenu.forEach((link) => {
    link.classList.toggle(
      "is-active",
      !!corrente && link.getAttribute("href") === "#" + corrente.id
    );
  });
}

window.addEventListener(
  "scroll",
  () => {
    if (inAttesaDiFrame) return;
    inAttesaDiFrame = true;
    requestAnimationFrame(() => {
      inAttesaDiFrame = false;
      aggiornaVoceAttiva();
    });
  },
  { passive: true }
);

window.addEventListener("resize", aggiornaVoceAttiva);
aggiornaVoceAttiva();


// ============ BARRA DI SCORRIMENTO ============
// Una linea gialla sottile sul bordo basso dell'intestazione: si allunga da
// sinistra man mano che si scorre la pagina, e arriva in fondo alla fine.
(function () {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const barra = document.createElement("div");
  barra.className = "barra-scorrimento";
  barra.setAttribute("aria-hidden", "true");
  header.appendChild(barra);

  let inAttesa = false;
  function aggiorna() {
    inAttesa = false;
    const totale = document.documentElement.scrollHeight - window.innerHeight;
    const quota = totale > 0 ? Math.min(1, Math.max(0, window.scrollY / totale)) : 0;
    barra.style.transform = "scaleX(" + quota + ")";
  }
  function chiedi() {
    if (!inAttesa) { inAttesa = true; requestAnimationFrame(aggiorna); }
  }
  window.addEventListener("scroll", chiedi, { passive: true });
  window.addEventListener("resize", chiedi);
  aggiorna();
})();

// ============ STRUMENTI A SCORRIMENTO ============
// Si duplica la lista delle card: la fila scorre a sinistra e, quando ha
// percorso meta' della sua lunghezza, riparte da capo; con la copia accodata
// il giro non si vede. Le copie sono nascoste ai lettori di schermo.
// - Mouse sulla fascia (o tasto Tab su una card): lo scorrimento si ferma.
// - Freccette: spostano la fila di una card avanti o indietro, con una
//   scivolata morbida, e poi lo scorrimento riprende da li'.
// - Con "riduci movimento" la fila non va da sola: si muove solo con le freccette.
(function () {
  const fila = document.querySelector(".tools-track");
  const fascia = document.querySelector(".tools-marquee");
  if (!fila || !fascia) return;

  const fermo = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const VELOCITA = 50; // px al secondo
  const DURATA_PASSO = 450; // ms della scivolata con le freccette

  [...fila.children].forEach((card) => {
    const copia = card.cloneNode(true);
    copia.setAttribute("aria-hidden", "true");
    fila.appendChild(copia);
  });

  let meta = fila.scrollWidth / 2;
  window.addEventListener("resize", () => { meta = fila.scrollWidth / 2; });

  // Larghezza di un passo: una card piu' il suo margine
  const passo = () => {
    const card = fila.children[0];
    return card.getBoundingClientRect().width + parseFloat(getComputedStyle(card).marginRight);
  };

  let pos = 0;
  let inPausa = false;
  let scivolata = null; // { da, a, inizio }

  fascia.addEventListener("mouseenter", () => { inPausa = true; });
  fascia.addEventListener("mouseleave", () => { inPausa = false; });
  fascia.addEventListener("focusin", () => { inPausa = true; });
  fascia.addEventListener("focusout", () => { inPausa = false; });

  document.querySelectorAll(".tools-arrow").forEach((btn) => {
    btn.addEventListener("click", () => {
      const dir = Number(btn.dataset.direzione) || 1;
      // se una scivolata e' ancora in corso si parte dal suo punto d'arrivo
      const da = scivolata ? scivolata.a : pos;
      scivolata = { da: pos, a: da + dir * passo(), inizio: performance.now() };
    });
  });

  const morbido = (t) => 1 - Math.pow(1 - t, 3);
  let prima = performance.now();

  function giro(ora) {
    const dt = Math.min(ora - prima, 100) / 1000; // niente salti se la scheda era nascosta
    prima = ora;

    if (scivolata) {
      const t = Math.min((ora - scivolata.inizio) / DURATA_PASSO, 1);
      pos = scivolata.da + (scivolata.a - scivolata.da) * morbido(t);
      if (t === 1) scivolata = null;
    } else if (!inPausa && !fermo) {
      pos += VELOCITA * dt;
    }

    // si resta sempre tra 0 e meta': il punto 0 e il punto "meta'" sono identici
    if (meta > 0) {
      const giri = Math.floor(pos / meta);
      if (giri !== 0) {
        pos -= giri * meta;
        if (scivolata) { scivolata.da -= giri * meta; scivolata.a -= giri * meta; }
      }
    }

    fila.style.transform = "translateX(" + (-pos) + "px)";
    requestAnimationFrame(giro);
  }
  requestAnimationFrame(giro);
})();
