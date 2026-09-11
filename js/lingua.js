// ============ ITALIANO E INGLESE ============
// Il sito è scritto in italiano nell'HTML. Qui c'è la traduzione inglese di ogni
// frase: per aggiungerne una basta una riga nuova, "frase italiana": "english".
// La scelta si fa dalla barra privacy o dal footer e resta salvata nel browser.

var LINGUA = (function () {
  const CHIAVE = "dk-lingua";

  // ---------- testi della pagina ----------
  const EN = {
    // navigazione e intestazione
    "Vai al contenuto": "Skip to content",
    "Chi sono": "About me",
    "Progetti": "Projects",
    "Strumenti": "Tools",
    "Contattami": "Contact me",
    "Apri il menu": "Open the menu",
    "Chiudi il menu": "Close the menu",
    "Navigazione principale": "Main navigation",

    // hero
    "Grafica & Digital Marketing": "Graphic Design & Digital Marketing",
    "Ciao, sono Daniele Kodermaz.": "Hi, I'm Daniele Kodermaz.",
    "Ho studiato grafica e comunicazione, adesso creo siti web come questo. Trasformo idee e obiettivi in comunicazioni visive semplici, coerenti e funzionali. Qui trovi i miei lavori e progetti; per informazioni e contatti c'è \"Contattami\" qui sopra.":
      "I studied graphic design and communication, and now I build websites like this one. I turn ideas and goals into visual communication that is simple, consistent and effective. Here you'll find my work and projects; for information and contacts use \"Contact me\" above.",
    "Vedi i progetti": "See the projects",

    // chi sono
    "01 — Chi sono": "01 — About me",
    "Costruisco il mio portfolio, un progetto alla volta.": "Building my portfolio, one project at a time.",
    "Mi presento, sono Daniele Kodermaz. La mia carriera da graphic designer inizia con lo studio di grafica e comunicazione. Successivamente ho fatto qualche progetto su richiesta per conoscenti. La mia presenza sul web inizia con l'apertura di un account per fare live streaming: durante quel periodo ho creato grafiche per il mio canale. Nel 2025 ho partecipato a un corso online per la progettazione di siti web. Attualmente sto sperimentando il mondo relativo all'IA per facilitare il mio lavoro.":
      "Let me introduce myself: I'm Daniele Kodermaz. My career as a graphic designer began with studying graphic design and communication. After that I did a few projects on request for people I know. My presence online started when I opened a live streaming account: during that time I created the graphics for my channel. In 2025 I took an online course in web design. Right now I'm exploring what AI can do to support my work.",
    "Sto costruendo il mio portfolio attraverso progetti pratici, sperimentazione e formazione continua. Il mio obiettivo è lavorare in un'azienda nel mio ambito di interesse e continuare a sperimentare e imparare.":
      "I'm building my portfolio through hands-on projects, experimentation and continuous training. My goal is to work for a company in my field and keep experimenting and learning.",
    "Ritratto di Daniele Kodermaz": "Portrait of Daniele Kodermaz",

    // formazione
    "Corso GOL — Tecniche base di digital marketing": "GOL course — Digital marketing fundamentals",
    "In partenza": "Starting soon",
    "In corso": "In progress",
    "Completato": "Completed",
    "Conseguito": "Obtained",
    "ore fatte": "hours done",
    "ore che mancano": "hours to go",
    "Diploma in grafica e comunicazione": "Diploma in graphic design and communication",
    "Corso Figma web design": "Figma web design course",
    "Ore completate del corso GOL": "Hours completed of the GOL course",

    // progetti
    "02 — Progetti": "02 — Projects",
    "Cosa ho realizzato": "What I've made",
    "Rebranding": "Rebranding",
    "A.S.D. Revolution Sport": "A.S.D. Revolution Sport",
    "Rebranding di una palestra: analisi delle recensioni dei clienti e sviluppo di circa venti proposte di logo, con l'obiettivo di uno stile pulito e meno aggressivo capace di comunicare che la palestra offre più del semplice fitness. Payoff proposto:":
      "Rebranding for a gym: analysis of customer reviews and around twenty logo proposals, aiming at a clean, less aggressive style able to say that the gym offers more than just fitness. Proposed payoff:",
    "\"Più di una palestra\"": "\"More than a gym\"",
    "Web design": "Web design",
    "Questo sito": "This website",
    "Il portfolio che stai guardando: progettato e costruito da zero, contenuti e struttura pensati per comunicare in modo diretto chi sono e cosa so fare.":
      "The portfolio you're looking at: designed and built from scratch, with content and structure meant to say plainly who I am and what I can do.",
    "App web": "Web app",
    "Focus App": "Focus App",
    "Un timer per lavorare a sessioni, senza fronzoli: cicli di lavoro e pause, anello di progresso, statistiche giornaliere e striscia dei giorni consecutivi. Costruita da zero in HTML, CSS e JavaScript, senza librerie.":
      "A no-frills timer for working in sessions: work and break cycles, a progress ring, daily statistics and a streak of consecutive days. Built from scratch in HTML, CSS and JavaScript, with no libraries.",
    "Prova l'app →": "Try the app →",
    "In arrivo": "Coming soon",
    "Il prossimo progetto": "The next project",
    "Nuovi lavori di grafica e comunicazione in arrivo a breve.": "New design and communication work coming soon.",

    // strumenti
    "03 — Strumenti": "03 — Tools",
    "Programmi che utilizzo": "Software I use",
    "AI & contenuti": "AI & content",
    "Grafica vettoriale": "Vector graphics",
    "Fotoritocco": "Photo editing",
    "Montaggio video": "Video editing",
    "UI & web design": "UI & web design",
    "Contenuti social": "Social content",

    // contatti e modulo
    "04 — Contatti": "04 — Contact",
    "Parliamone.": "Let's talk.",
    "Hai un progetto in mente o cerchi una mano con grafica e comunicazione? Scrivimi.":
      "Got a project in mind, or need a hand with design and communication? Write to me.",
    "Nome": "Name",
    "Email": "Email",
    "Telefono": "Phone",
    "facoltativo": "optional",
    "Messaggio": "Message",
    "Come ti chiami": "Your name",
    "Dove ti rispondo": "Where I can reply",
    "Se preferisci una chiamata": "If you prefer a call",
    "Raccontami cosa ti serve": "Tell me what you need",
    "Ho letto l'": "I have read the ",
    "informativa privacy": "privacy notice",
    "e acconsento all'uso dei miei dati per essere ricontattato.": "and I agree to my data being used to get back to me.",
    "Invia il messaggio": "Send the message",
    "Protetto da reCAPTCHA: valgono la": "Protected by reCAPTCHA: Google's",
    "Privacy": "Privacy",
    "e i": "and",
    "Termini": "Terms",
    "di Google.": "apply.",
    "Preferisci scrivere tu?": "Rather write yourself?",
    "Scrivimi direttamente": "Write to me directly",


    // piè di pagina e privacy
    "Daniele Kodermaz. Tutti i diritti riservati. ·": "Daniele Kodermaz. All rights reserved. ·",
    "Privacy e cookie": "Privacy & cookies",
    "Torna al sito": "Back to the site",
    "Questo sito non usa cookie di profilazione e non ti traccia. Raccolgo solo quello che scrivi nel modulo di contatto per poterti rispondere al meglio.":
      "This site uses no profiling cookies and does not track you. I only collect what you write in the contact form, so I can answer you properly.",
    "Vedi tutti i dettagli della privacy": "See the full privacy notice",
    "Rifiuta": "Decline",
    "Accetta": "Accept",
    "Lingua": "Language",
    "Italiano": "Italian",
    "Inglese": "English",

    // pagina privacy
    "Privacy e cookie — Daniele Kodermaz": "Privacy & cookies — Daniele Kodermaz",
    "Daniele Kodermaz — Grafica & Digital Marketing": "Daniele Kodermaz — Graphic Design & Digital Marketing",
    "Daniele Kodermaz, grafico e web designer a Gorizia: logo, immagine coordinata e siti web su misura in Friuli-Venezia Giulia.":
      "Daniele Kodermaz, graphic and web designer in Gorizia, Italy: logos, brand identity and custom websites in Friuli-Venezia Giulia.",
    "Come vengono trattati i dati di chi visita il sito di Daniele Kodermaz: cookie, servizi esterni e messaggi inviati dal modulo di contatto.":
      "How visitor data is handled on Daniele Kodermaz's site: cookies, external services and messages sent through the contact form.",
    "Informativa": "Notice",
    "In breve: questo sito non ti profila, non ha pubblicità e non passa i tuoi dati a nessuno. Qui sotto c'è per esteso cosa succede quando lo visiti.":
      "In short: this site does not profile you, has no advertising and passes your data to no one. Below is the full picture of what happens when you visit.",
    "Chi tratta i dati": "Who handles the data",
    "Daniele Kodermaz, Friuli-Venezia Giulia. Per qualsiasi domanda sui tuoi dati:":
      "Daniele Kodermaz, Friuli-Venezia Giulia. For any question about your data:",
    "Cosa raccolgo": "What I collect",
    "Solo quello che scrivi nel modulo di contatto, e solo se decidi di scrivermi: nome, email, telefono (se lo lasci) e il testo del messaggio.":
      "Only what you write in the contact form, and only if you choose to write: name, email, phone (if you leave it) and the text of your message.",
    "Li uso per una cosa sola: risponderti. Non finiscono in nessuna newsletter, non vengono ceduti né venduti a nessuno.":
      "I use them for one thing only: to answer you. They go into no newsletter, and are neither shared nor sold.",
    "Se non scrivi nulla, non raccolgo niente: non ci sono statistiche di navigazione né profilazione.":
      "If you write nothing, I collect nothing: there are no analytics and no profiling.",
    "Come funziona l'invio": "How sending works",
    "Il messaggio parte solo quando premi \"Invia\": prima di quel momento nulla esce dal tuo browser.":
      "The message is sent only when you press \"Send\": before that, nothing leaves your browser.",
    "reCAPTCHA": "reCAPTCHA",
    "Cookie": "Cookies",
    "Servizi esterni, in breve": "External services, in short",
    "Fine dell'elenco: non ci sono Analytics, pixel pubblicitari o pulsanti social che ti seguono.":
      "That's the whole list: no Analytics, no advertising pixels, no social buttons following you.",
    "Per quanto tempo": "For how long",
    "Le email dei contatti restano nella mia casella finché servono a seguire la richiesta. Se vuoi che cancelli i tuoi dati, scrivimi e lo faccio.":
      "Contact emails stay in my mailbox as long as they are needed to follow up. If you want your data deleted, write to me and I'll do it.",
    "I tuoi diritti": "Your rights",
    "Questo sito è fatto di sole pagine: non ha un server che possa spedire email. Il modulo passa quindi da":
      "This site is made of pages alone: it has no server able to send email. The form therefore goes through",
    ", un servizio che riceve il messaggio e me lo recapita nella casella. Formspree tratta i dati per il tempo tecnico necessario a consegnarli e conserva una copia dei messaggi nel mio account, protetto da password.":
      ", a service that receives the message and delivers it to my mailbox. Formspree handles the data for the time technically needed to deliver it, and keeps a copy of the messages in my account, protected by a password.",
    "di Google, che calcola un punteggio in base a come ti comporti sulla pagina, senza chiederti di riconoscere semafori o strisce pedonali. Per farlo Google riceve informazioni tecniche sul tuo dispositivo e sulla navigazione, e può usare i propri cookie.":
      "by Google, which works out a score from how you behave on the page, without asking you to spot traffic lights or crosswalks. To do that Google receives technical information about your device and browsing, and may use its own cookies.",
    "Il sito non installa cookie di profilazione né strumenti di analisi. L'unica cosa che resta salvata nel tuo browser è la scelta che fai sulla barra \"Privacy e cookie\": serve a non richiedertela ogni volta. È un dato tecnico, resta sul tuo dispositivo e non lo vedo io. Puoi cancellarlo svuotando i dati del sito dal tuo browser.":
      "The site installs no profiling cookies and no analytics. The only thing kept in your browser is the choice you make on the \"Privacy & cookies\" bar, so you're not asked every time. It's a technical value, it stays on your device and I never see it. You can clear it by deleting the site data in your browser.",
    "— recapita i messaggi del modulo. Entra in gioco solo all'invio.":
      "— delivers the messages from the form. It only comes into play when you send.",
    "Puoi chiedermi in qualsiasi momento quali dati tuoi ho, farli correggere o farli cancellare, e puoi opporti al loro uso. Basta una email a":
      "You can ask me at any time what data of yours I hold, have it corrected or deleted, and object to its use. An email is enough:",
    "Scelta non ancora fatta.": "No choice made yet.",
    "Cambiare idea": "Changing your mind",
    "La scelta fatta sulla barra non è definitiva.": "The choice made on the bar is not final.",
    "Rivedi le preferenze": "Review your preferences",
    "Ultimo aggiornamento: 10 settembre 2026.": "Last updated: 10 September 2026.",

    // progetti: il sito di A.S.D. Revolution Sport
    "Sito web per A.S.D. Revolution Sport": "Website for A.S.D. Revolution Sport",
    "Il sito della palestra, nato dopo il rebranding: sala pesi e cardio, macchinari, corsi ed eventi, orari e indicazioni per arrivare, con le foto degli spazi e i collegamenti ai social. Porta online lo stesso messaggio del logo:":
      "The gym's website, built after the rebranding: weights and cardio rooms, equipment, classes and events, opening hours and directions, with photos of the space and links to its social channels. It takes the logo's message online:",
    "Visita il sito →": "Visit the site →",

    // reCAPTCHA e servizi esterni (pagina privacy)
    "Per tenere lontani i messaggi automatici il modulo può usare":
      "To keep automated messages away, the form may use",
    "Lo script viene caricato": "The script is loaded",
    "solo al momento dell'invio, e solo se hai accettato dalla barra":
      "only when you send, and only if you accepted from the bar",
    ": se non scrivi, o se hai rifiutato, Google non entra mai in gioco. Chi rifiuta può scrivermi lo stesso, il messaggio parte comunque. Valgono la":
      ": if you don't write, or if you declined, Google never comes into play. Anyone who declines can still write to me — the message goes through all the same. Google's",
    "Termini di servizio": "Terms of Service",
    "Aprendo una pagina non parte nessuna richiesta verso l'esterno: i caratteri tipografici sono ospitati qui dentro insieme al resto del sito. Restano due soli servizi, e nessuno dei due entra in gioco finché non premi \"Invia\".":
      "Opening a page sends no request outside: the typefaces are hosted here along with the rest of the site. Only two services are left, and neither comes into play until you press \"Send\".",
    "— filtro anti-spam del modulo. Solo all'invio, e solo se hai accettato.":
      "— the form's anti-spam filter. Only when you send, and only if you accepted.",
    ": rispondo io, direttamente.": ": I answer myself, directly.",
    "Adesso: filtro anti-spam attivo, ma solo quando invii.":
      "Right now: anti-spam filter on, but only when you send.",
    "Adesso: nessun servizio di Google, nemmeno quando invii.":
      "Right now: no Google service at all, not even when you send.",

    // pagina di errore (404)
    "Pagina non trovata — Daniele Kodermaz": "Page not found — Daniele Kodermaz",
    "La pagina che cercavi non esiste. Torna al portfolio di Daniele Kodermaz.":
      "The page you were looking for doesn't exist. Back to Daniele Kodermaz's portfolio.",
    "Errore 404": "Error 404",
    "Questa pagina non c'è.": "This page isn't here.",
    "Forse l'indirizzo è stato scritto male, o la pagina si chiamava in un altro modo. Da qui torni dove volevi andare.":
      "Maybe the address was mistyped, or the page went by another name. From here you can get back where you were headed.",
    "Torna alla home": "Back to the home page",
    "Scrivimi": "Write to me",
  };

  // ---------- frasi che stanno nel codice ----------
  // Non stanno nell'HTML: le scrive il JavaScript mentre il sito e' in uso.
  const FRASI = {
    it: {
      moduloAttesa: "Invio in corso…",
      moduloOk: "Messaggio inviato. Ti rispondo al più presto!",
      moduloErrore: "L'invio non è andato a buon fine. Riprova, oppure scrivimi a kodermazdaniele@gmail.com",
      // perché un invio non è andato: le sceglie js/modulo.js leggendo la risposta di Formspree
      erroreOffline: "Sembra che tu non sia connesso a internet, quindi il messaggio non è partito. Quello che hai scritto è ancora qui: riprova appena torna la connessione.",
      erroreRete: "Il messaggio non è riuscito a partire: la connessione si è interrotta, oppure qualcosa nel browser (per esempio un blocco della pubblicità) ha fermato l'invio. Riprova, oppure scrivimi a kodermazdaniele@gmail.com",
      erroreCampo: (campo) => "Il servizio di invio non ha accettato il campo \"" + campo + "\": controllalo e riprova.",
      erroreTroppi: "Sono arrivati troppi messaggi in poco tempo e il servizio di invio si è preso una pausa. Riprova tra qualche minuto, oppure scrivimi a kodermazdaniele@gmail.com",
      erroreConfigurazione: "Il modulo in questo momento non riesce a ricevere messaggi per un problema di impostazioni, mio e non tuo. Scrivimi a kodermazdaniele@gmail.com e ti rispondo lo stesso.",
      erroreServizio: "Il servizio che recapita i messaggi ha un problema temporaneo. Riprova tra poco, oppure scrivimi a kodermazdaniele@gmail.com",
      percorso: (p, t) => p + "% del percorso completato — " + t + " ore in tutto",
      // etichetta del burger per chi usa un lettore di schermo (js/script.js)
      menuApri: "Apri il menu",
      menuChiudi: "Chiudi il menu",
    },
    en: {
      moduloAttesa: "Sending…",
      moduloOk: "Message sent. I'll reply as soon as I can!",
      moduloErrore: "The message could not be sent. Try again, or write to kodermazdaniele@gmail.com",
      erroreOffline: "It looks like you're not connected to the internet, so the message wasn't sent. What you wrote is still here: try again once you're back online.",
      erroreRete: "The message couldn't be sent: the connection dropped, or something in your browser (an ad blocker, for example) stopped it. Try again, or write to kodermazdaniele@gmail.com",
      erroreCampo: (campo) => "The sending service didn't accept the \"" + campo + "\" field: please check it and try again.",
      erroreTroppi: "Too many messages arrived in a short time and the sending service is taking a break. Try again in a few minutes, or write to kodermazdaniele@gmail.com",
      erroreConfigurazione: "The form can't receive messages right now because of a settings problem on my side, not yours. Write to kodermazdaniele@gmail.com and I'll reply all the same.",
      erroreServizio: "The service that delivers the messages has a temporary problem. Try again shortly, or write to kodermazdaniele@gmail.com",
      percorso: (p, t) => p + "% of the course completed — " + t + " hours in total",
      menuApri: "Open the menu",
      menuChiudi: "Close the menu",
    },
  };

  const IT = {};
  Object.keys(EN).forEach((k) => { if (EN[k] !== k) IT[EN[k]] = k; });

  function leggi() {
    try {
      const salvata = localStorage.getItem(CHIAVE);
      if (salvata === "it" || salvata === "en") return salvata;
    } catch (e) {}
    return (navigator.language || "it").toLowerCase().startsWith("en") ? "en" : "it";
  }

  let attuale = "it";

  function traduciNodo(nodo, mappa) {
    const grezzo = nodo.nodeValue;
    const chiave = grezzo.replace(/\s+/g, " ").trim();
    if (!chiave || !mappa[chiave]) return;
    // si conserva lo spazio intorno, altrimenti le parole si attaccano
    const prima = grezzo.match(/^\s*/)[0];
    const dopo = grezzo.match(/\s*$/)[0];
    nodo.nodeValue = prima + mappa[chiave] + dopo;
  }

  function traduci(mappa) {
    const salta = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1 };
    const cammino = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodi = [];
    let n;
    while ((n = cammino.nextNode())) if (!salta[n.parentElement.tagName]) nodi.push(n);
    nodi.forEach((nodo) => traduciNodo(nodo, mappa));

    document.querySelectorAll("[placeholder],[aria-label],[title],[alt]").forEach((el) => {
      ["placeholder", "aria-label", "title", "alt"].forEach((a) => {
        const v = el.getAttribute(a);
        if (v && mappa[v.trim()]) el.setAttribute(a, mappa[v.trim()]);
      });
    });

    // Anche il titolo della linguetta e la descrizione per i motori di ricerca
    if (mappa[document.title.trim()]) document.title = mappa[document.title.trim()];
    document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"], meta[property="og:title"], meta[name="twitter:title"]').forEach((m) => {
      const v = m.getAttribute("content");
      if (v && mappa[v.trim()]) m.setAttribute("content", mappa[v.trim()]);
    });
    const locale = document.querySelector('meta[property="og:locale"]');
    if (locale) locale.setAttribute("content", document.documentElement.lang === "en" ? "en_GB" : "it_IT");
  }

  function applica(lingua, salva) {
    if (lingua === attuale) return;
    attuale = lingua;
    document.documentElement.lang = lingua;
    traduci(lingua === "en" ? EN : IT);
    if (salva !== false) { try { localStorage.setItem(CHIAVE, lingua); } catch (e) {} }
    aggiornaSelettori();
    document.dispatchEvent(new CustomEvent("linguacambiata", { detail: lingua }));
  }

  // ---------- selettore con bandiera ----------
  // Bandiere disegnate invece delle emoji: su Windows le emoji delle bandiere
  // non esistono e comparirebbero due lettere al loro posto.
  const BANDIERE = {
    it:
      '<svg class="bandiera" viewBox="0 0 21 15" role="img" aria-hidden="true">' +
      '<rect width="21" height="15" rx="2" fill="#f5f5f5"/>' +
      '<path d="M0 2a2 2 0 0 1 2-2h5v15H2a2 2 0 0 1-2-2Z" fill="#009246"/>' +
      '<path d="M14 0h5a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-5Z" fill="#ce2b37"/>' +
      "</svg>",
    en:
      '<svg class="bandiera" viewBox="0 0 21 15" role="img" aria-hidden="true">' +
      '<rect width="21" height="15" rx="2" fill="#012169"/>' +
      '<path d="M0 0 21 15M21 0 0 15" stroke="#fff" stroke-width="3"/>' +
      '<path d="M0 0 21 15M21 0 0 15" stroke="#c8102e" stroke-width="1.6"/>' +
      '<path d="M10.5 0v15M0 7.5h21" stroke="#fff" stroke-width="5"/>' +
      '<path d="M10.5 0v15M0 7.5h21" stroke="#c8102e" stroke-width="3"/>' +
      "</svg>",
  };
  const NOMI = { it: "Italiano", en: "English" };

  function costruisciSelettore(contenitore) {
    contenitore.innerHTML = "";
    contenitore.classList.add("selettore-lingua");

    const bottone = document.createElement("button");
    bottone.type = "button";
    bottone.className = "lingua-attuale";
    bottone.setAttribute("aria-expanded", "false");
    bottone.setAttribute("aria-haspopup", "true");

    const tendina = document.createElement("div");
    tendina.className = "lingua-tendina";
    tendina.hidden = true;

    ["it", "en"].forEach((codice) => {
      const voce = document.createElement("button");
      voce.type = "button";
      voce.className = "lingua-voce";
      voce.dataset.lingua = codice;
      voce.innerHTML = BANDIERE[codice] + " " + codice.toUpperCase() + " · " + NOMI[codice];
      voce.addEventListener("click", () => {
        applica(codice);
        tendina.hidden = true;
        bottone.setAttribute("aria-expanded", "false");
      });
      tendina.appendChild(voce);
    });

    bottone.addEventListener("click", () => {
      const aperta = tendina.hidden;
      document.querySelectorAll(".lingua-tendina").forEach((t) => (t.hidden = true));
      document.querySelectorAll(".lingua-attuale").forEach((b) => b.setAttribute("aria-expanded", "false"));
      tendina.hidden = !aperta;
      bottone.setAttribute("aria-expanded", String(aperta));
    });

    contenitore.appendChild(bottone);
    contenitore.appendChild(tendina);
  }

  function aggiornaSelettori() {
    document.querySelectorAll(".lingua-attuale").forEach((b) => {
      b.innerHTML = BANDIERE[attuale] + " " + attuale.toUpperCase();
      b.setAttribute("aria-label", (attuale === "it" ? "Lingua: Italiano" : "Language: English"));
    });
    document.querySelectorAll(".lingua-voce").forEach((v) => {
      v.classList.toggle("is-scelta", v.dataset.lingua === attuale);
    });
  }

  function avvia() {
    document.querySelectorAll("[data-selettore-lingua]").forEach(costruisciSelettore);
    aggiornaSelettori();
    const scelta = leggi();
    if (scelta !== "it") applica(scelta, false);

    document.addEventListener("click", (e) => {
      if (e.target.closest(".selettore-lingua")) return;
      document.querySelectorAll(".lingua-tendina").forEach((t) => (t.hidden = true));
      document.querySelectorAll(".lingua-attuale").forEach((b) => b.setAttribute("aria-expanded", "false"));
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", avvia);
  else avvia();

  return {
    attuale: () => attuale,
    applica: applica,
    t: (chiave) => FRASI[attuale][chiave],
  };
})();
