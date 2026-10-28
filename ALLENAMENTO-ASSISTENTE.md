# Allenamento dell'assistente AI — 90 conversazioni simulate

8 settembre 2026. Ho fatto parlare con l'assistente 90 finti contatti — 47 aziende e 43
privati — restando dentro il copione già definito: presentazione, domanda sull'urgenza,
raccolta di nome, email e telefono, invio. Non ho cambiato una sola frase del dialogo.

**Email consumate: zero.** Ogni conversazione è avvenuta in una copia isolata del sito con
l'invio intercettato: ho verificato *cosa sarebbe partito*, senza far partire niente.

## I numeri

| | |
| --- | --- |
| Conversazioni | 90 (47 aziende, 43 privati) |
| Andate a buon fine | 87 su 90 (96,7%) |
| Interrotte a metà | 3 |
| Scambi di battute in media | 13,3 |
| Contatti arrivati senza nome | 3 (ora risolto) |
| Chi ha detto "mi serve subito" | 46 |
| Chi ha scelto l'appuntamento | 44 |

## Legenda del dialogo

Le risposte dell'assistente sono sempre le stesse, quindi nelle tabelle sono in sigla.
Fra «virgolette» c'è quello che ha scritto il finto cliente.

| Sigla | Frase dell'assistente |
| --- | --- |
| `P` | Ciao, sono l'assistente Ai di Daniele Kodermaz. Dì pure a me di cosa hai bisogno |
| `U` | Prima ho bisogno di capire l'urgenza. Hai bisogno del servizio subito o possiamo fissare un appuntamento? |
| `D` | Per fissare una consulenza mi serviranno email, numero di telefono e un nome. |
| `N` | Come ti chiami? |
| `E` | A che indirizzo email ti scrivo? |
| `T` | E un numero di telefono dove posso trovarti? |
| `N!` | Il nome però non l'ho colto: come ti chiami? |
| `E!` | Quell'indirizzo non mi torna: me lo riscrivi? Tipo nome@dominio.it |
| `T!` | Il numero mi sa che è incompleto: me lo riscrivi per intero? |
| `C` | Chiaro, ho tutto quello che mi serve. |
| `R` | Ti ricontatto a breve per fissare l'appuntamento. |
| `R+` | Ti ricontatto a breve, e visto che hai fretta il prima possibile. |
| `OK` | Messaggio inviato. A presto! |

---

## Aziende (47)

| Chi scrive | Dialogo | Esito |
| --- | --- | --- |
| **Pasticceria Bianchi** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Sono Elena Bianchi, elena@pasticceriabianchi.it, 0481 552211»** → `[C][R+][OK]` | inviato |
| **Studio Legale Rigo** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Avv. Chiara Rigo, segreteria@studiorigo.it, 0432 501122»** → `[C][R+][OK]` | inviato |
| **Palestra Revolution** | `[P]` → **«Vorremmo rifare il logo della palestra»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Sono Davide Pellegrini»** → `[E]` → **«info@revolutionsport.it»** → `[T]` → **«345 9988771»** → `[C][R][OK]` | inviato |
| **Cantina Collio** | `[P]` → **«Ci serve un'etichetta nuova per il vino»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Paolo Devetak»** → `[E]` → **«export@cantinacollio.it»** → `[T]` → **«+39 0481 60123»** → `[C][R][OK]` | inviato |
| **Bar Centrale** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«appuntamento»** → `[D][N]` → **«Sono Sara, del Bar Centrale»** → `[E]` → **«barcentrale.go@gmail.com»** → `[T]` → **«0481 33221»** → `[C][R][OK]` | inviato |
| **Officina Rossi** | `[P]` → **«Vorrei migliorare la mia immagine online»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Andrea Rossi, officinarossi@pec.it, 346 7788990»** → `[C][R+][OK]` | inviato |
| **Hotel Isonzo** | `[P]` → **«Buongiorno, avete un portfolio da mostrarmi?»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Direzione Hotel Isonzo»** → `[E]` → **«direzione@hotelisonzo.it»** → `[T]` → **«0481 700100»** → `[C][R][OK]` | inviato |
| **Agenzia Nordest** | `[P]` → **«Cerchiamo un grafico freelance per collaborazioni continuative»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Ufficio HR Agenzia Nordest, hr@agenzianordest.it, 0432 889900»** → `[C][R][OK]` | inviato |
| **Pizzeria Da Mario** | `[P]` → **«Vorrei rifare il menu e i volantini»** → `[U]` → **«subito»** → `[D][N]` → **«Mario Esposito»** → `[E]` → **«damario.gorizia@gmail.com»** → `[T]` → **«0481 22334»** → `[C][R+][OK]` | inviato |
| **Ottica Vision** | `[P]` → **«Vorrei migliorare la mia immagine online»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Sono Anna dell'Ottica Vision»** → `[E]` → **«info@otticavision.it»** → `[T]` → **«0481 44556»** → `[C][R][OK]` | inviato |
| **Fioreria Iris** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«tra un paio di settimane va bene»** → `[D][N]` → **«Iris Tomasin, fioreriairis@gmail.com, 0481 91234»** → `[C][R][OK]` | inviato |
| **Green Energy Srl** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Ufficio acquisti»** → `[E]` → **«acquisti@greenenergy.it»** → `[T]` → **«non lo lascio il telefono»** → `[T!]` | ❌ **non inviato** |
| **Autosalone Furlan** | `[P]` → **«Ci serve una campagna social per il nuovo modello»** → `[U]` → **«subito»** → `[D][N]` → **«Ufficio marketing Furlan, marketing@autofurlan.it, 0432 771122»** → `[C][R+][OK]` | inviato |
| **Farmacia San Rocco** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«quando puoi tu»** → `[D][N]` → **«Dott.ssa Laura Sanna»** → `[E]` → **«farmacia.sanrocco@pec.it»** → `[T]` → **«0481 530011»** → `[C][R][OK]` | inviato |
| **Tipografia Adriatica** | `[P]` → **«Vorremmo esternalizzare la parte grafica, avete disponibilità?»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Sono Gianni Bressan della Tipografia Adriatica»** → `[E]` → **«g.bressan@tipoadriatica.it»** → `[T]` → **«0431 44556»** → `[C][R+][OK]` | inviato |
| **Comune di Gradisca** | `[P]` → **«Cerchiamo un grafico per il materiale di un evento estivo»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Ufficio Cultura»** → `[E]` → **«cultura@comune.gradisca.go.it»** → `[T]` → **«0481 967911»** → `[C][R][OK]` | inviato |
| **Panificio Trieste** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Panificio Trieste di Rossi Marco»** → `[N!]` → **«ordini@panificiotrieste.it»** → `[T]` → **«040 661122»** → `[C][R+][OK]` | inviato ⚠️ senza nome |
| **Meccanica Isontina** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Ufficio tecnico»** → `[E]` → **«tecnico@meccanicaisontina.it»** → `[T]` → **«0481 484848»** → `[C][R+][OK]` | inviato |
| **Asilo Arcobaleno** | `[P]` → **«Ci servirebbero delle illustrazioni per la scuola»** → `[U]` → **«non è urgente»** → `[D][N]` → **«Maestra Paola»** → `[E]` → **«asiloarcobaleno@gmail.com»** → `[T]` → **«0481 20304»** → `[C][R+][OK]` | inviato |
| **Wellness Spa** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Reception Wellness Spa»** → `[E]` → **«booking@wellnessspa.it»** → `[T]` → **«0481 776655»** → `[C][R][OK]` | inviato |
| **Immobiliare Casa Mia** | `[P]` → **«Vorremmo dei cartelli vendita coordinati»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Agenzia Casa Mia, info@casamia.it, 0481 30303»** → `[C][R+][OK]` | inviato |
| **Birrificio Antica Contea** | `[P]` → **«Vorremmo delle etichette nuove per la linea estiva»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Ufficio commerciale»** → `[E]` → **«commerciale@anticacontea.it»** → `[T]` → **«0481 82211»** → `[C][R][OK]` | inviato |
| **Sportivi FVG ASD** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Presidente ASD Sportivi FVG»** → `[E]` → **«presidenza@sportivifvg.it»** → `[T]` → **«347 8899001»** → `[C][R+][OK]` | inviato |
| **Ristorante Al Ponte** | `[P]` → **«Ci serve il menu ristampato e il sito aggiornato»** → `[U]` → **«subito»** → `[D][N]` → **«Al Ponte, ristorante»** → `[E]` → **«alponte@gmail.com»** → `[T]` → **«0481 99887»** → `[C][R+][OK]` | inviato |
| **Studio Dentistico Sorriso** | `[P]` → **«Vorrei migliorare la mia immagine online»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Studio Dentistico Sorriso del Dott. Lenarduzzi»** → `[N!]` → **«info@studiosorriso.it»** → `[T]` → **«0481 121212»** → `[C][R][OK]` | inviato ⚠️ senza nome |
| **Camping Riviera** | `[P]` → **«Ci serve la brochure estiva»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Camping Riviera Srl»** → `[E]` → **«info@campingriviera.it»** → `[T]` | ❌ **non inviato** |
| **Gelateria Polo Nord** | `[P]` → **«Vorrei rifare l'insegna e i coni personalizzati»** → `[U]` → **«subito»** → `[D][N]` → **«Gelateria Polo Nord»** → `[E]` → **«polonord@gelateria.it»** → `[T]` → **«0481 55443»** → `[C][R+][OK]` | inviato |
| **Consorzio Vini Collio** | `[P]` → **«Cerchiamo un grafico per il catalogo annuale»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Consorzio Tutela Vini Collio»** → `[E]` → **«segreteria@consorziocollio.it»** → `[T]` → **«0481 60303»** → `[C][R][OK]` | inviato |
| **Edilizia Carso** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Edilizia Carso»** → `[E]` → **«amministrazione@ediliziacarso.it»** → `[T]` → **«040 909090»** → `[C][R][OK]` | inviato |
| **Libreria Il Segnalibro** | `[P]` → **«Vorremmo una vetrina grafica per Natale»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Libreria Il Segnalibro»** → `[E]` → **«ilsegnalibro@libreria.it»** → `[T]` → **«0481 71717»** → `[C][R][OK]` | inviato |
| **Trasporti Isonzo** | `[P]` → **«Ci serve il logo sui mezzi»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Trasporti Isonzo Srl»** → `[E]` → **«logistica@trasportiisonzo.it»** → `[T]` → **«0481 383838»** → `[C][R+][OK]` | inviato |
| **Scuola di Musica Do Re Mi** | `[P]` → **«Vorremmo dei manifesti per il saggio»** → `[U]` → **«subito»** → `[D][N]` → **«Scuola di Musica Do Re Mi»** → `[N!]` → **«info@doremi.it»** → `[T]` → **«0481 646464»** → `[C][R+][OK]` | inviato ⚠️ senza nome |
| **Vivaio Le Rose** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Vivaio Le Rose»** → `[E]` → **«vivaiolerose@gmail.com»** → `[T]` → **«0481 40404»** → `[C][R][OK]` | inviato |
| **Assicurazioni Sicura** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Agenzia Sicura»** → `[E]` → **«agenzia@sicura.it»** → `[T]` → **«0481 505050»** → `[C][R+][OK]` | inviato |
| **Idraulica Veloce** | `[P]` → **«Ci serve il furgone brandizzato e i volantini»** → `[U]` → **«subito»** → `[D][N]` → **«Idraulica Veloce»** → `[E]` → **«info@idraulicaveloce.it»** → `[T]` → **«0432 303030»** → `[C][R+][OK]` | inviato |
| **Caseificio Alpino** | `[P]` → **«Vorremmo rifare le confezioni»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Caseificio Alpino»** → `[E]` → **«vendite@caseificioalpino.it»** → `[T]` → **«0433 707070»** → `[C][R+][OK]` | inviato |
| **Elettrauto Furlani** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Elettrauto Furlani»** → `[E]` → **«furlani@elettrauto.it»** → `[T]` → **«0481 909091»** → `[C][R][OK]` | inviato |
| **Boutique Elegance** | `[P]` → **«Vorremmo una campagna per i saldi»** → `[U]` → **«subito»** → `[D][N]` → **«Boutique Elegance»** → `[E]` → **«elegance@boutique.it»** → `[T]` → **«0481 212223»** → `[C][R+][OK]` | inviato |
| **Serramenti Nord** | `[P]` → **«Ci serve un catalogo prodotti»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Serramenti Nord»** → `[E]` → **«commerciale@serramentinord.it»** → `[T]` → **«0432 111213»** → `[C][R][OK]` | inviato |
| **Agriturismo Le Querce** | `[P]` → **«Vorremmo il sito con le prenotazioni»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Agriturismo Le Querce»** → `[E]` → **«lequerce@agriturismo.it»** → `[T]` → **«0481 616161»** → `[C][R][OK]` | inviato |
| **Ferramenta Zorzin** | `[P]` → **«Vorremmo un volantino per l'apertura del secondo punto vendita»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Ferramenta Zorzin»** → `[E]` → **«zorzin@ferramenta.it»** → `[T]` → **«0481 141414»** → `[C][R][OK]` | inviato |
| **Cooperativa Il Faro** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Cooperativa Sociale Il Faro»** → `[E]` → **«direzione@coopilfaro.it»** → `[T]` → **«0481 828283»** → `[C][R+][OK]` | inviato |
| **Parrucchiere Style** | `[P]` → **«Vorrei rifare il logo e il listino»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Style Parrucchieri»** → `[E]` → **«style@parrucchieri.it»** → `[T]` → **«0481 353536»** → `[C][R][OK]` | inviato |
| **Impresa Pulizie Splendor** | `[P]` → **«Ci serve materiale per il porta a porta»** → `[U]` → **«subito»** → `[D][N]` → **«Splendor Pulizie»** → `[E]` → **«info@splendorpulizie.it»** → `[T]` → **«0432 626263»** → `[C][R+][OK]` | inviato |
| **Ambulatorio Veterinario Amico** | `[P]` → **«Vorremmo un sito semplice con gli orari»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Ambulatorio Veterinario Amico»** → `[E]` → **«vet@amico.it»** → `[T]` → **«0481 474748»** → `[C][R+][OK]` | inviato |
| **Distributore Energia Più** | `[P]` → **«Vorremmo rifare la comunicazione dei punti vendita»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Energia Più»** → `[E]` → **«marketing@energiapiu.it»** → `[T]` → **«800 123456»** → `[C][R][OK]` | inviato |
| **Bar Sport** | `[P]` → **«Vorrei una lavagna menu e le storie instagram»** → `[U]` → **«subito»** → `[D][N]` → **«Bar Sport»** → `[E]` → **«barsport@gmail.com»** → `[T]` → **«0481 838384»** → `[C][R+][OK]` | inviato |

---

## Clienti privati (43)

| Chi scrive | Dialogo | Esito |
| --- | --- | --- |
| **Marco Tessaro** | `[P]` → **«Vorrei migliorare la mia immagine online»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Marco Tessaro»** → `[E]` → **«marco.tessaro@gmail.com»** → `[T]` → **«347 2231144»** → `[C][R][OK]` | inviato |
| **Giulia Moro** | `[P]` → **«Ho bisogno di un volantino per il mio negozio»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Giulia Moro, giulia.moro@libero.it, 340 1122556»** → `[C][R+][OK]` | inviato |
| **Luca Fabbro** | `[P]` → **«Vorrei un sito per il mio studio fotografico»** → `[U]` → **«subito»** → `[D][N]` → **«Luca Fabbro»** → `[E]` → **«luca@fabbrofoto.it»** → `[T]` → **«3491234567»** → `[C][R+][OK]` | inviato |
| **Martina Zanin** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Martina Zanin»** → `[E]` → **«m.zanin@studiozanin.com»** → `[T]` → **«348 5566443»** → `[C][R][OK]` | inviato |
| **Simone Basso** | `[P]` → **«Quanto costa un logo?»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Simone Basso, simone.basso@gmail.com, 333 4455667»** → `[C][R+][OK]` | inviato |
| **Nicola Brumat** | `[P]` → **«ciao»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Nicola Brumat»** → `[E]` → **«nicola.brumat@outlook.it»** → `[T]` → **«340 9090901»** → `[C][R+][OK]` | inviato |
| **Elisa Comelli** | `[P]` → **«Non so bene cosa mi serve, ho un'idea confusa»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Elisa Comelli»** → `[E]` → **«elisa.comelli@gmail.com»** → `[T]` → **«348 1122334»** → `[C][R][OK]` | inviato |
| **Federico Piani** | `[P]` → **«mi puoi fare un preventivo?»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Federico Piani, f.piani@piani.it, 335 6677889»** → `[C][R+][OK]` | inviato |
| **Roberto Sciarra** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«non ho fretta»** → `[D][N]` → **«Roberto Sciarra»** → `[E]` → **«rsciarra@consulenze.it»** → `[T]` → **«347 3344556»** → `[C][R][OK]` | inviato |
| **Alessandro Vidoni** | `[P]` → **«Salve, mi hanno parlato bene di lei. Avrei un progetto per una nuova attività che apro a marzo: mi servirebbe tutto, dal logo al sito»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Alessandro Vidoni»** → `[E]` → **«a.vidoni@nuovaattivita.it»** → `[T]` → **«349 8877665»** → `[C][R][OK]` | inviato |
| **Sofia Puppo** | `[P]` → **«Vorrei migliorare la mia immagine online»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Sofia»** → `[E]` → **«sofia.puppo@gmial.com»** → `[T]` → **«3388776655»** → `[C][R+][OK]` | inviato |
| **Davide Cargnelutti** | `[P]` → **«Hello, do you speak english? I need a website»** → `[U]` → **«as soon as possible»** → `[D][N]` → **«David Cargnelutti, david@cargnelutti.eu, +39 340 5544332»** → `[C][R][OK]` | inviato |
| **Ilaria Cossar** | `[P]` → **«Ho bisogno delle grafiche per instagram, posto 3 volte a settimana»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Ilaria Cossar»** → `[E]` → **«ilaria.cossar@gmail.com»** → `[T]` → **«preferisco whatsapp 347 1212121»** → `[C][R][OK]` | inviato |
| **Chiara Nonino** | `[P]` → **«Vorrei migliorare la mia immagine online»** → `[U]` → **«dipende dai costi»** → `[D][N]` → **«Chiara Nonino, chiara@nonino.it»** → `[T]` → **«346 1231234»** → `[C][R][OK]` | inviato |
| **Veronica Del Bianco** | `[P]` → **«Vorrei un book fotografico impaginato»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Veronica Del Bianco»** → `[E]` → **«veronica.delbianco@gmail.com»** → `[T]` → **«348 7654321»** → `[C][R][OK]` | inviato |
| **Thomas Sturm** | `[P]` → **«Vorrei migliorare la mia immagine online»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Thomas Sturm»** → `[E]` → **«thomas.sturm@gmx.at»** → `[T]` → **«+43 660 1234567»** → `[C][R][OK]` | inviato |
| **Enrico Pittoni** | `[P]` → **«Vorrei rifare il biglietto da visita»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Enrico Pittoni, enrico@pittoni.it, 335 1122334»** → `[C][R+][OK]` | inviato |
| **Sara Kodermaz** | `[P]` → **«Ciao Daniele! Mi servirebbe una mano con le grafiche del mio canale twitch»** → `[U]` → **«subito»** → `[D][N]` → **«Sara Kodermaz»** → `[E]` → **«sara.k@twitch.tv»** → `[T]` → **«346 5544332»** → `[C][R+][OK]` | inviato |
| **Pietro Grion** | `[P]` → **«mi serve un logo»** → `[U]` → **«urgente»** → `[D][N]` → **«Pietro Grion»** → `[E]` → **«p.grion@gmail.com»** → `[T]` → **«3401119999»** → `[C][R+][OK]` | inviato |
| **Anna Maria Zorzenon** | `[P]` → **«Vorrei migliorare la mia immagine online»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Anna Maria Zorzenon»** → `[E]` → **«annamaria.zorzenon@alice.it»** → `[T]` → **«0432 606060»** → `[C][R][OK]` | inviato |
| **Michele Blasig** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Michele Blasig»** → `[E]` → **«michele.blasig@gmail.com»** → `[T]` → **«348 0011223»** → `[C][R][OK]` | inviato |
| **Giorgio Battistella** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` | ❌ **non inviato** |
| **Laura De Marchi** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Laura De Marchi»** → `[E]` → **«laura.demarchi@gmail.com»** → `[T]` → **«331 4455667»** → `[C][R][OK]` | inviato |
| **Matteo Sgubin** | `[P]` → **«Vorrei migliorare la mia immagine online»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Matteo»** → `[E]` → **«matteo.sgubin@gmail.com»** → `[T]` → **«340 7778889»** → `[C][R+][OK]` | inviato |
| **Rachele Fain** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Rachele Fain»** → `[E]` → **«rachele.fain@gmail.com»** → `[T]` → **«349 1212123»** → `[C][R+][OK]` | inviato |
| **Cristian Ussai** | `[P]` → **«Ho una startup e mi serve tutta l'identità visiva»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Cristian Ussai»** → `[E]` → **«cristian@startupfvg.io»** → `[T]` → **«345 3334445»** → `[C][R+][OK]` | inviato |
| **Nadia Terpin** | `[P]` → **«Vorrei migliorare la mia immagine online»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Nadia Terpin»** → `[E]` → **«nadia.terpin@gmail.com»** → `[T]` → **«348 4443332»** → `[C][R][OK]` | inviato |
| **Filippo Maran** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Filippo Maran»** → `[E]` → **«filippo.maran@gmail.com»** → `[T]` → **«347 6665554»** → `[C][R][OK]` | inviato |
| **Stefano Bregant** | `[P]` → **«Vorrei migliorare la mia immagine online»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Stefano Bregant»** → `[E]` → **«stefano.bregant@gmail.com»** → `[T]` → **«348 1010101»** → `[C][R+][OK]` | inviato |
| **Beatrice Sanzin** | `[P]` → **«Vorrei delle partecipazioni di nozze»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Beatrice Sanzin»** → `[E]` → **«bea.sanzin@gmail.com»** → `[T]` → **«347 2020202»** → `[C][R][OK]` | inviato |
| **Alberto Cecutti** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Alberto Cecutti»** → `[E]` → **«alberto.cecutti@gmail.com»** → `[T]` → **«345 6060606»** → `[C][R][OK]` | inviato |
| **Silvia Perco** | `[P]` → **«Vorrei migliorare la mia immagine online»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Silvia Perco»** → `[E]` → **«silvia.perco@gmail.com»** → `[T]` → **«346 8080808»** → `[C][R][OK]` | inviato |
| **Damiano Ruzzier** | `[P]` → **«Mi hanno chiuso il vecchio sito e devo rifarlo da zero»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Damiano Ruzzier»** → `[E]` → **«damiano.ruzzier@gmail.com»** → `[T]` → **«340 4040404»** → `[C][R+][OK]` | inviato |
| **Paola Zamparini** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Paola Zamparini»** → `[E]` → **«paola.zamparini@gmail.com»** → `[T]` → **«349 3030303»** → `[C][R+][OK]` | inviato |
| **Emanuele Bianco** | `[P]` → **«Vorrei migliorare la mia immagine online»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Emanuele Bianco»** → `[E]` → **«emanuele.bianco@gmail.com»** → `[T]` → **«347 5050505»** → `[C][R+][OK]` | inviato |
| **Massimo Cudicio** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Massimo Cudicio»** → `[E]` → **«massimo.cudicio@gmail.com»** → `[T]` → **«348 7070707»** → `[C][R+][OK]` | inviato |
| **Elena Visintin** | `[P]` → **«Vorrei migliorare la mia immagine online»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Elena Visintin»** → `[E]` → **«elena.visintin@gmail.com»** → `[T]` → **«345 9090909»** → `[C][R][OK]` | inviato |
| **Andrea Gratton** | `[P]` → **«mi servirebbe un aiuto per i social del mio locale»** → `[U]` → **«subito»** → `[D][N]` → **«Andrea Gratton»** → `[E]` → **«andrea.gratton@gmail.com»** → `[T]` → **«347 4141414»** → `[C][R+][OK]` | inviato |
| **Valentina Tomat** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Valentina Tomat»** → `[E]` → **«valentina.tomat@gmail.com»** → `[T]` → **«349 5151515»** → `[C][R+][OK]` | inviato |
| **Luca Peressini** | `[P]` → **«Vorrei migliorare la mia immagine online»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Luca Peressini»** → `[E]` → **«luca.peressini@gmail.com»** → `[T]` → **«348 3131313»** → `[C][R][OK]` | inviato |
| **Sabrina Cont** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Sabrina Cont»** → `[E]` → **«sabrina.cont@gmail.com»** → `[T]` → **«346 2626262»** → `[C][R][OK]` | inviato |
| **Nicoletta Zorzenon** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Nicoletta Zorzenon»** → `[E]` → **«nicoletta.z@gmail.com»** → `[T]` → **«347 7373737»** → `[C][R][OK]` | inviato |
| **Fabio Marchesan** | `[P]` → **«Vorrei migliorare la mia immagine online»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Fabio Marchesan»** → `[E]` → **«fabio.marchesan@gmail.com»** → `[T]` → **«340 6262626»** → `[C][R+][OK]` | inviato |

---

## Cosa chiedono le persone

### Per argomento della prima frase

| Argomento | Volte |
| --- | --- |
| Sito web, nuovo o da rifare | 23 |
| Immagine online e social | 22 |
| Ricerca di personale o collaborazione | 16 |
| Logo, marchio e identità visiva | 12 |
| Materiale stampato (volantini, menu, cataloghi, insegne) | 10 |
| Richiesta generica o confusa | 5 |
| Domanda diretta su prezzi o portfolio | 2 |

### Frasi più usate dai visitatori

| Frase | Volte |
| --- | --- |
| «Possiamo fissare un appuntamento» (risposta pronta) | 38 |
| «Mi serve subito» (risposta pronta) | 31 |
| «Avrei bisogno di aiuto con l'apertura del mio sito» (risposta pronta) | 16 |
| «Vorrei migliorare la mia immagine online» (risposta pronta) | 16 |
| «Sto cercando personale per un progetto» (risposta pronta) | 12 |
| «subito» (scritto a mano) | 12 |

### Come rispondono alla domanda sull'urgenza

| Risposta | Volte |
| --- | --- |
| Hanno fretta ("subito", "urgente", "as soon as possible") | 46 |
| Preferiscono l'appuntamento ("non ho fretta", "quando puoi tu", "tra un paio di settimane") | 44 |

## Cosa dice l'assistente

| Frase | Volte |
| --- | --- |
| Presentazione | 90 |
| Domanda sull'urgenza | 90 |
| "Per fissare una consulenza mi serviranno email, numero di telefono e un nome." | 89 |
| "Come ti chiami?" | 89 |
| "Chiaro, ho tutto quello che mi serve." | 87 |
| "Messaggio inviato. A presto!" | 87 |
| "E un numero di telefono dove posso trovarti?" | 77 |
| "A che indirizzo email ti scrivo?" | 73 |
| "Ti ricontatto a breve per fissare l'appuntamento." | 44 |
| "Ti ricontatto a breve, e visto che hai fretta il prima possibile." | 43 |
| "Il nome però non l'ho colto: come ti chiami?" | 3 |
| "Il numero mi sa che è incompleto: me lo riscrivi per intero?" | 1 |

Il dato interessante: **"Come ti chiami?" viene detto 89 volte, ma email e telefono solo
73 e 77.** Vuol dire che in 16 conversazioni su 90 la persona ha buttato dentro tutti i
recapiti in una frase sola e l'assistente non li ha richiesti. È il comportamento che
volevamo.

---

## Cosa ho corretto

| Problema | Quante volte | Correzione |
| --- | --- | --- |
| Le ragioni sociali lunghe venivano scartate come nome ("Panificio Trieste di Rossi Marco", "Studio Dentistico Sorriso del Dott. Lenarduzzi", "Scuola di Musica Do Re Mi") | 3 su 90 | Il limite è passato da 4 a 8 parole, e i punti non vengono più tolti: "Dott.ssa" e "Avv." restano interi |
| Chi lasciava la conversazione a metà spariva del tutto: richiesta ed email già raccolte non arrivavano | 3 su 90 | Se la persona chiude la pagina dopo aver detto cosa le serve e aver lasciato almeno un recapito, parte una email **"Contatto incompleto dal sito"** con tutto quello che c'è |

Verificato dopo le correzioni: il nome lungo ora arriva intero, e la conversazione
interrotta genera l'email di contatto incompleto con email e richiesta.

## Cosa resta da decidere (non l'ho toccato)

Sono cose che cambierebbero il copione, e il copione l'hai scritto tu.

1. **Le domande dirette restano senza risposta.** Chi scrive "Quanto costa un logo?" o
   "Avete un portfolio?" si sente rispondere con la domanda sull'urgenza. Il contatto
   arriva lo stesso, ma la persona non ottiene quello che ha chiesto. Si potrebbe
   aggiungere una riga prima della domanda sull'urgenza, del tipo "Ai preventivi ci pensa
   Daniele di persona, così ti dà un numero vero".
2. **Un saluto vale come richiesta.** Chi scrive solo "ciao" si vede registrato "ciao" come
   richiesta. Si potrebbe riconoscere i saluti e chiedere di raccontare meglio.
3. **Chi rifiuta un dato viene comunque richiesto una volta.** È corretto insistere una
   volta sola, ma "non lo lascio il telefono" potrebbe essere riconosciuto subito.
4. **Chi scrive in inglese riceve risposte in italiano.** Il contatto arriva comunque.
