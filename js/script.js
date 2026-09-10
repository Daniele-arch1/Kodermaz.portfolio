// ============ ANNO NEL FOOTER ============
document.getElementById("year").textContent = new Date().getFullYear();

// ============ MENU MOBILE ============
const toggle = document.getElementById("navToggle");
const nav = document.getElementById("mainNav");

function chiudiMenu() {
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Apri il menu");
}

toggle.addEventListener("click", () => {
  const aperto = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(aperto));
  toggle.setAttribute("aria-label", aperto ? "Chiudi il menu" : "Apri il menu");
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
