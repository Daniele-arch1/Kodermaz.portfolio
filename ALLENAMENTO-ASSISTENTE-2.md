# Allenamento dell'assistente — seconda tornata, 179 conversazioni

8 settembre 2026. Dopo le modifiche (saluti, rifiuti, risposta sui prezzi, doppia lingua e
base di conoscenza) ho rifatto le prove: **179 conversazioni**, 96 aziende e 83 privati,
149 in italiano e 30 in inglese.

**Email consumate: zero.** Ogni conversazione gira in una copia isolata del sito con
l'invio intercettato: vedo cosa *sarebbe* partito, senza far partire niente.

## I numeri

| | |
| --- | --- |
| Conversazioni | 179 (96 aziende, 83 privati) |
| Lingua | 149 italiano · 30 inglese |
| Contatti completi arrivati | 174 su 179 (97,2%) |
| Contatti incompleti recuperati | 3 (chi ha lasciato la pagina a metà) |
| Persi del tutto | 2 (chi ha scritto una riga e se n'è andato senza recapiti) |
| Scambi di battute in media | 14,2 |
| Contatti senza nome | 1 |
| Contatti senza telefono | 6 (tutti per rifiuto o abbandono) |
| Chi ha fretta | 76 · Chi preferisce l'appuntamento | 68 |

## Legenda del dialogo

Fra «virgolette» c'è quello che ha scritto il finto cliente; in sigla le risposte fisse
dell'assistente. 🇬🇧 segnala le conversazioni in inglese.

| Sigla | Frase |
| --- | --- |
| `P` | Presentazione |
| `SAL` | "Ciao! Raccontami pure di cosa hai bisogno, così passo tutto a Daniele." |
| `U` | "Prima ho bisogno di capire l'urgenza..." |
| `D` | "Per fissare una consulenza mi serviranno email, numero di telefono e un nome." |
| `N` `E` `T` | Chiede nome / email / telefono |
| `N!` `E!` `T!` | Richiede il dato che non ha capito |
| `OKD` | "Va bene, non insisto." (quando il dato viene rifiutato) |
| `DAN` | "Prima fissiamo una data per parlare con Daniele, così potete discutere di cosa hai bisogno." |
| `INFO` | Risposta presa dalle informazioni del sito |
| `TN` | "Torniamo a noi:" |
| `C` `R` `R+` `OK` | Chiusura, ricontatto, conferma di invio |

---

## Aziende (96)

| Chi scrive | Dialogo | Esito |
| --- | --- | --- |
| **Pasticceria Bianchi** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Elena Bianchi, elena@pasticceriabianchi.it, 0481 552211»** → `[C][R+][OK]` | inviato |
| **Studio Legale Rigo** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Avv. Chiara Rigo, segreteria@studiorigo.it, 0432 501122»** → `[C][R+][OK]` | inviato |
| **Cantina Collio** | `[P]` → **«Quanto costa una nuova etichetta?»** → `[DAN][U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Paolo Devetak»** → `[E]` → **«export@cantinacollio.it»** → `[T]` → **«0481 60123»** → `[C][R][OK]` | inviato |
| **Bar Centrale** | `[P]` → **«Chi è Daniele?»** → `[INFO][U]` → **«Vorrei rifare l'insegna»** → `[D][N]` → **«appuntamento»** → `[N!]` → **«Sara Bressan»** → `[E]` → **«barcentrale.go@gmail.com»** → `[T]` → **«0481 33221»** → `[C][R][OK]` | inviato |
| **Officina Rossi** | `[P]` → **«Vorrei migliorare la mia immagine online»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Andrea Rossi»** → `[E]` → **«officinarossi@pec.it»** → `[T]` → **«non lo lascio il numero»** → `[OKD][C][R+][OK]` | inviato ⚠️ senza telefono |
| **Hotel Isonzo** | `[P]` → **«Buonasera»** → `[SAL]` → **«Ci serve la brochure per la stagione»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Direzione Hotel Isonzo»** → `[E]` → **«direzione@hotelisonzo.it»** → `[T]` → **«0481 700100»** → `[C][R+][OK]` | inviato |
| **Agenzia Nordest** | `[P]` → **«Cerchiamo un grafico freelance»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Ufficio HR Agenzia Nordest, hr@agenzianordest.it, 0432 889900»** → `[C][R][OK]` | inviato |
| **Pizzeria Da Mario** | `[P]` → **«Vorrei rifare il menu»** → `[U]` → **«subito»** → `[D][N]` → **«Mario Esposito»** → `[E]` → **«damario.gorizia@gmail.com»** → `[T]` | inviato come **contatto incompleto** |
| **Palestra Revolution** | `[P]` → **«Vorremmo rifare il logo della palestra»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Davide Pellegrini»** → `[E]` → **«info@revolutionsport.it»** → `[T]` → **«345 9988771»** → `[C][R][OK]` | inviato |
| **Ottica Vision** | `[P]` → **«Salve»** → `[SAL]` → **«Vorrei rifare la vetrina»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Anna Zorzin»** → `[E]` → **«info@otticavision.it»** → `[T]` → **«0481 44556»** → `[C][R][OK]` | inviato |
| **Green Energy Srl** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Ufficio acquisti»** → `[E]` → **«acquisti@greenenergy.it»** → `[T]` → **«preferisco non darlo»** → `[OKD][C][R+][OK]` | inviato ⚠️ senza telefono |
| **Autosalone Furlan** | `[P]` → **«Campagna social per il nuovo modello»** → `[U]` → **«subito»** → `[D][N]` → **«Ufficio marketing Furlan, marketing@autofurlan.it, 0432 771122»** → `[C][R+][OK]` | inviato |
| **Farmacia San Rocco** | `[P]` → **«Che esperienza ha?»** → `[INFO][U]` → **«Ci serve un sito con gli orari»** → `[D][N]` → **«quando puoi tu»** → `[DAN][TN][N]` → **«Dott.ssa Laura Sanna»** → `[E]` → **«farmacia.sanrocco@pec.it»** → `[T]` → **«0481 530011»** → `[C][R][OK]` | inviato |
| **Tipografia Adriatica** | `[P]` → **«Vorremmo esternalizzare la grafica»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Gianni Bressan»** → `[E]` → **«g.bressan@tipoadriatica.it»** → `[T]` → **«0431 44556»** → `[C][R+][OK]` | inviato |
| **Comune di Gradisca** | `[P]` → **«Cerchiamo un grafico per un evento estivo»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Ufficio Cultura»** → `[E]` → **«cultura@comune.gradisca.go.it»** → `[T]` → **«0481 967911»** → `[C][R][OK]` | inviato |
| **Panificio Trieste** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Panificio Trieste di Rossi Marco»** → `[E]` → **«ordini@panificiotrieste.it»** → `[T]` → **«040 661122»** → `[C][R+][OK]` | inviato |
| **Fioreria Iris** | `[P]` → **«Dove lavorate?»** → `[DAN][U]` → **«Ci serve un sito»** → `[D][N]` → **«tra due settimane»** → `[N!]` → **«Iris Tomasin»** → `[E]` → **«fioreriairis@gmail.com»** → `[T]` → **«0481 91234»** → `[C][R][OK]` | inviato |
| **Gelateria Polo Nord** | `[P]` → **«Vorrei rifare l'insegna»** → `[U]` → **«subito»** → `[D][N]` → **«Gelateria Polo Nord»** → `[E]` → **«polonord@gelateria.it»** → `[T]` → **«0481 55443»** → `[C][R+][OK]` | inviato |
| **Wellness Spa** | `[P]` → **«Quanto costa un sito completo?»** → `[DAN][U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Reception Wellness Spa»** → `[E]` → **«booking@wellnessspa.it»** → `[T]` → **«0481 776655»** → `[C][R][OK]` | inviato |
| **Immobiliare Casa Mia** | `[P]` → **«Cartelli vendita coordinati»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Agenzia Casa Mia, info@casamia.it, 0481 30303»** → `[C][R+][OK]` | inviato |
| **Birrificio Antica Contea** | `[P]` → **«Etichette per la linea estiva»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Ufficio commerciale»** → `[E]` → **«commerciale@anticacontea.it»** → `[T]` → **«0481 82211»** → `[C][R][OK]` | inviato |
| **Sportivi FVG ASD** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Presidente ASD Sportivi FVG»** → `[E]` → **«presidenza@sportivifvg.it»** → `[T]` → **«347 8899001»** → `[C][R+][OK]` | inviato |
| **Ristorante Al Ponte** | `[P]` → **«Menu ristampato e sito aggiornato»** → `[U]` → **«subito»** → `[D][N]` → **«Al Ponte»** → `[E]` → **«alponte@gmail.com»** → `[T]` → **«0481 99887»** → `[C][R+][OK]` | inviato |
| **Studio Dentistico Sorriso** | `[P]` → **«Vorremmo curare i social»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Studio Dentistico Sorriso del Dott. Lenarduzzi»** → `[E]` → **«info@studiosorriso.it»** → `[T]` → **«0481 121212»** → `[C][R][OK]` | inviato |
| **Camping Riviera** | `[P]` → **«Ci serve la brochure estiva»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Camping Riviera Srl»** → `[E]` → **«info@campingriviera.it»** → `[T]` | inviato come **contatto incompleto** |
| **Consorzio Vini Collio** | `[P]` → **«Catalogo annuale»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Consorzio Tutela Vini Collio»** → `[E]` → **«segreteria@consorziocollio.it»** → `[T]` → **«0481 60303»** → `[C][R][OK]` | inviato |
| **Edilizia Carso** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Edilizia Carso»** → `[E]` → **«amministrazione@ediliziacarso.it»** → `[T]` → **«040 909090»** → `[C][R][OK]` | inviato |
| **Libreria Il Segnalibro** | `[P]` → **«Vetrina grafica per Natale»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Libreria Il Segnalibro»** → `[E]` → **«ilsegnalibro@libreria.it»** → `[T]` → **«0481 71717»** → `[C][R][OK]` | inviato |
| **Trasporti Isonzo** | `[P]` → **«Logo sui mezzi»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Trasporti Isonzo Srl»** → `[E]` → **«logistica@trasportiisonzo.it»** → `[T]` → **«0481 383838»** → `[C][R+][OK]` | inviato |
| **Scuola di Musica Do Re Mi** | `[P]` → **«Manifesti per il saggio»** → `[U]` → **«subito»** → `[D][N]` → **«Scuola di Musica Do Re Mi»** → `[E]` → **«info@doremi.it»** → `[T]` → **«0481 646464»** → `[C][R+][OK]` | inviato |
| **Vivaio Le Rose** | `[P]` → **«Buongiorno»** → `[SAL]` → **«Sito nuovo»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Vivaio Le Rose»** → `[E]` → **«vivaiolerose@gmail.com»** → `[T]` → **«0481 40404»** → `[C][R][OK]` | inviato |
| **Assicurazioni Sicura** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Agenzia Sicura»** → `[E]` → **«agenzia@sicura.it»** → `[T]` → **«0481 505050»** → `[C][R+][OK]` | inviato |
| **Idraulica Veloce** | `[P]` → **«Furgone brandizzato e volantini»** → `[U]` → **«subito»** → `[D][N]` → **«Idraulica Veloce»** → `[E]` → **«info@idraulicaveloce.it»** → `[T]` → **«0432 303030»** → `[C][R+][OK]` | inviato |
| **Caseificio Alpino** | `[P]` → **«Rifare le confezioni»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Caseificio Alpino»** → `[E]` → **«vendite@caseificioalpino.it»** → `[T]` → **«0433 707070»** → `[C][R+][OK]` | inviato |
| **Elettrauto Furlani** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Elettrauto Furlani»** → `[E]` → **«furlani@elettrauto.it»** → `[T]` → **«0481 909091»** → `[C][R][OK]` | inviato |
| **Boutique Elegance** | `[P]` → **«Campagna per i saldi»** → `[U]` → **«subito»** → `[D][N]` → **«Boutique Elegance»** → `[E]` → **«elegance@boutique.it»** → `[T]` → **«0481 212223»** → `[C][R+][OK]` | inviato |
| **Serramenti Nord** | `[P]` → **«Catalogo prodotti»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Serramenti Nord»** → `[E]` → **«commerciale@serramentinord.it»** → `[T]` → **«0432 111213»** → `[C][R][OK]` | inviato |
| **Agriturismo Le Querce** | `[P]` → **«Sito con le prenotazioni»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Agriturismo Le Querce»** → `[E]` → **«lequerce@agriturismo.it»** → `[T]` → **«0481 616161»** → `[C][R][OK]` | inviato |
| **Ferramenta Zorzin** | `[P]` → **«Volantino per il nuovo punto vendita»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Ferramenta Zorzin»** → `[E]` → **«zorzin@ferramenta.it»** → `[T]` → **«0481 141414»** → `[C][R][OK]` | inviato |
| **Cooperativa Il Faro** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Cooperativa Sociale Il Faro»** → `[E]` → **«direzione@coopilfaro.it»** → `[T]` → **«0481 828283»** → `[C][R+][OK]` | inviato |
| **Parrucchiere Style** | `[P]` → **«Logo e listino»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Style Parrucchieri»** → `[E]` → **«style@parrucchieri.it»** → `[T]` → **«0481 353536»** → `[C][R][OK]` | inviato |
| **Impresa Pulizie Splendor** | `[P]` → **«Materiale per il porta a porta»** → `[U]` → **«subito»** → `[D][N]` → **«Splendor Pulizie»** → `[E]` → **«info@splendorpulizie.it»** → `[T]` → **«0432 626263»** → `[C][R+][OK]` | inviato |
| **Ambulatorio Veterinario Amico** | `[P]` → **«Sito semplice con gli orari»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Ambulatorio Veterinario Amico»** → `[E]` → **«vet@amico.it»** → `[T]` → **«0481 474748»** → `[C][R+][OK]` | inviato |
| **Distributore Energia Più** | `[P]` → **«Comunicazione dei punti vendita»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Energia Più»** → `[E]` → **«marketing@energiapiu.it»** → `[T]` → **«800 123456»** → `[C][R][OK]` | inviato |
| **Bar Sport** | `[P]` → **«Lavagna menu e storie instagram»** → `[U]` → **«subito»** → `[D][N]` → **«Bar Sport»** → `[E]` → **«barsport@gmail.com»** → `[T]` → **«0481 838384»** → `[C][R+][OK]` | inviato |
| **Panetteria Del Borgo** | `[P]` → **«Sacchetti personalizzati»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Panetteria Del Borgo»** → `[E]` → **«delborgo@pane.it»** → `[T]` → **«0481 202021»** → `[C][R][OK]` | inviato |
| **Autofficina Kras** | `[P]` → **«Quanto costa il restyling completo?»** → `[DAN][U]` → **«Mi serve subito»** → `[D][N]` → **«Officina Kras»** → `[E]` → **«kras@officina.it»** → `[T]` → **«040 313233»** → `[C][R+][OK]` | inviato |
| **Studio Commercialisti Rossi** | `[P]` → **«Carta intestata e sito»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Studio Rossi & Associati»** → `[E]` → **«info@studiorossi.it»** → `[T]` → **«0432 414243»** → `[C][R][OK]` | inviato |
| **Onoranze Funebri Pace** | `[P]` → **«Manifesti e sito»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Onoranze Pace»** → `[E]` → **«pace@onoranze.it»** → `[T]` → **«0481 505051»** → `[C][R+][OK]` | inviato |
| **Officina Meccanica Zulian** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Zulian Meccanica»** → `[E]` → **«zulian@meccanica.it»** → `[T]` → **«0432 515253»** → `[C][R][OK]` | inviato |
| **Brighton Coffee Co.** 🇬🇧 | `[P]` → **«I need help launching my website»** → `[U]` → **«I need it right away»** → `[D][N]` → **«Emma Clarke, emma@brightoncoffee.co.uk, +44 7700 900111»** → `[C][R+][OK]` | inviato |
| **Nordic Design Studio** 🇬🇧 | `[P]` → **«I'm looking for someone for a project»** → `[U]` → **«I need it right away»** → `[D][N]` → **«Lars Nielsen»** → `[E]` → **«lars@nordicdesign.dk»** → `[T]` → **«+45 20 12 34 56»** → `[C][R+][OK]` | inviato |
| **Alpine Tours GmbH** 🇬🇧 | `[P]` → **«How much does a website cost?»** → `[DAN][U]` → **«Let's set up a meeting»** → `[D][N]` → **«Klaus Weber»** → `[E]` → **«weber@alpinetours.at»** → `[T]` → **«+43 512 998877»** → `[C][R][OK]` | inviato |
| **Green Valley Farm** 🇬🇧 | `[P]` → **«Who is Daniele?»** → `[INFO][U]` → **«We need new packaging labels»** → `[D][N]` → **«Let's set up a meeting»** → `[N!]` → **«Green Valley Farm»** → `[E]` → **«hello@greenvalley.ie»** → `[T]` → **«+353 87 1234567»** → `[C][R][OK]` | inviato |
| **Lakeside Hotel** 🇬🇧 | `[P]` → **«We need a booking website»** → `[U]` → **«Let's set up a meeting»** → `[D][N]` → **«Lakeside Hotel Reception»** → `[E]` → **«info@lakesidehotel.com»** → `[T]` → **«+41 44 123 45 67»** → `[C][R][OK]` | inviato |
| **Blue Ocean Diving** 🇬🇧 | `[P]` → **«We need social media graphics»** → `[U]` → **«I need it right away»** → `[D][N]` → **«Blue Ocean Diving»** → `[E]` → **«dive@blueocean.hr»** → `[T]` → **«+385 91 123 4567»** → `[C][R+][OK]` | inviato |
| **Bright Media Agency** 🇬🇧 | `[P]` → **«Are you a robot?»** → `[INFO][U]` → **«We need a freelance designer»** → `[D][N]` → **«I need it right away»** → `[N!]` → **«Bright Media Agency»** → `[E]` → **«jobs@brightmedia.com»** → `[T]` → **«+44 20 7946 0958»** → `[C][R][OK]` | inviato |
| **Sunrise Bakery** 🇬🇧 | `[P]` → **«Do you speak English?»** → `[INFO][U]` → **«We need menus and signage»** → `[D][N]` → **«I need it right away»** → `[N!]` → **«Sunrise Bakery»** → `[E]` → **«hello@sunrisebakery.co.uk»** → `[T]` → **«+44 161 496 0000»** → `[C][R][OK]` | inviato |
| **Oakwood Law** 🇬🇧 | `[P]` → **«We need a corporate identity»** → `[U]` → **«Let's set up a meeting»** → `[D][N]` → **«Oakwood Law Partners»** → `[E]` → **«office@oakwoodlaw.co.uk»** → `[T]` → **«+44 20 7123 4567»** → `[C][R][OK]` | inviato |
| **Pixel Perfect Ltd** 🇬🇧 | `[P]` → **«How long does a project take?»** → `[DAN][U]` → **«We need help with a rebrand»** → `[D][N]` → **«I need it right away»** → `[N!]` → **«Pixel Perfect Ltd»** → `[E]` → **«hello@pixelperfect.com»** → `[T]` → **«+44 113 496 0000»** → `[C][R][OK]` | inviato |
| **Adriatic Sailing** 🇬🇧 | `[P]` → **«We need brochures for the season»** → `[U]` → **«I need it right away»** → `[D][N]` → **«Adriatic Sailing»** → `[E]` → **«charter@adriaticsailing.hr»** → `[T]` → **«+385 98 765 4321»** → `[C][R+][OK]` | inviato |
| **Tech Start Berlin** 🇬🇧 | `[P]` → **«I'm looking for someone for a project»** → `[U]` → **«I need it right away»** → `[D][N]` → **«Tech Start Berlin GmbH»** → `[E]` → **«talent@techstart.de»** → `[T]` → **«+49 30 12345678»** → `[C][R+][OK]` | inviato |
| **Villa Rosa B&B** 🇬🇧 | `[P]` → **«We need a small website with photos»** → `[U]` → **«Let's set up a meeting»** → `[D][N]` → **«Villa Rosa B&B»** → `[E]` → **«stay@villarosa.it»** → `[T]` → **«+39 0481 700200»** → `[C][R][OK]` | inviato |
| **Summit Consulting** 🇬🇧 | `[P]` → **«We need a pitch deck designed»** → `[U]` → **«Let's set up a meeting»** → `[D][N]` → **«Summit Consulting»** → `[E]` → **«info@summitconsulting.ch»** → `[T]` → **«+41 22 123 45 67»** → `[C][R][OK]` | inviato |
| **Harbour Restaurant** 🇬🇧 | `[P]` → **«Menu redesign please»** → `[U]` → **«I need it right away»** → `[D][N]` → **«Harbour Restaurant»** → `[E]` → **«book@harbour.ie»** → `[T]` → **«+353 1 234 5678»** → `[C][R+][OK]` | inviato |
| **Mountain Gear Shop** 🇬🇧 | `[P]` → **«I'd rather not say the phone»** → `[U]` → **«We need a product catalogue»** → `[D][N]` → **«I need it right away»** → `[N!]` → **«Mountain Gear»** → `[E]` → **«shop@mountaingear.at»** → `[T]` → **«I'd rather not»** → `[OKD][C][R][OK]` | inviato ⚠️ senza telefono |
| **Vetreria Isontina** | `[P]` → **«salve»** → `[SAL]` → **«Cataloghi e sito»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Vetreria Isontina»** → `[E]` → **«info@vetreriaisontina.it»** → `[T]` → **«0481 393939»** → `[C][R+][OK]` | inviato |
| **Studio Fotografico Luce** | `[P]` → **«Vorremmo un sito con la galleria»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Studio Fotografico Luce»** → `[E]` → **«luce@fotografia.it»** → `[T]` → **«0432 727272»** → `[C][R][OK]` | inviato |
| **Macelleria Da Bruno** | `[P]` → **«Etichette e cartelli prezzo»** → `[U]` → **«subito»** → `[D][N]` → **«Macelleria Da Bruno»** → `[E]` → **«bruno@macelleria.it»** → `[T]` → **«0481 585858»** → `[C][R+][OK]` | inviato |
| **Centro Sportivo Aurora** | `[P]` → **«Volantini per i corsi»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Centro Sportivo Aurora»** → `[E]` → **«segreteria@aurorasport.it»** → `[T]` → **«0432 858585»** → `[C][R+][OK]` | inviato |
| **Hotel Al Castello** | `[P]` → **«Sito multilingua»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Hotel Al Castello»** → `[E]` → **«info@alcastello.it»** → `[T]` → **«0481 969696»** → `[C][R][OK]` | inviato |
| **Enoteca Del Collio** | `[P]` → **«Quanto costa? E avete referenze?»** → `[DAN][U]` → **«Mi serve subito»** → `[D][N]` → **«Enoteca Del Collio»** → `[E]` → **«enoteca@collio.it»** → `[T]` → **«0481 626262»** → `[C][R+][OK]` | inviato |
| **Autonoleggio Isonzo** | `[P]` → **«Adesivi per i mezzi e sito»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Autonoleggio Isonzo»** → `[E]` → **«noleggio@isonzo.it»** → `[T]` → **«0481 747474»** → `[C][R][OK]` | inviato |
| **Pescheria Il Delfino** | `[P]` → **«Insegna e menu del giorno»** → `[U]` → **«subito»** → `[D][N]` → **«Pescheria Il Delfino»** → `[E]` → **«delfino@pesce.it»** → `[T]` → **«0481 353535»** → `[C][R+][OK]` | inviato |
| **Azienda Agricola Terre** | `[P]` → **«Etichette bio e sito»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Azienda Agricola Terre del Carso»** → `[E]` → **«info@terredelcarso.it»** → `[T]` → **«0481 464646»** → `[C][R][OK]` | inviato |
| **Palestra Body Time** | `[P]` → **«Campagna abbonamenti»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Body Time»** → `[E]` → **«info@bodytime.it»** → `[T]` → **«0432 646464»** → `[C][R+][OK]` | inviato |
| **Gioielleria Perla** | `[P]` → **«Vetrine e social per Natale»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Gioielleria Perla»** → `[E]` → **«perla@gioielli.it»** → `[T]` → **«0481 787878»** → `[C][R+][OK]` | inviato |
| **Impresa Edile Vidoni** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Impresa Edile Vidoni»** → `[E]` → **«vidoni@edile.it»** → `[T]` → **«0432 292929»** → `[C][R][OK]` | inviato |
| **Officina Bike Point** | `[P]` → **«Volantini e adesivi»** → `[U]` → **«subito»** → `[D][N]` → **«Bike Point»** → `[E]` → **«info@bikepoint.it»** → `[T]` → **«0481 191919»** → `[C][R+][OK]` | inviato |
| **Ristorante La Terrazza** | `[P]` → **«Menu stagionale e sito»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Ristorante La Terrazza»** → `[E]` → **«terrazza@ristorante.it»** → `[T]` → **«0481 828282»** → `[C][R][OK]` | inviato |
| **Tecnoimpianti FVG** | `[P]` → **«Presentazione aziendale»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Tecnoimpianti FVG»** → `[E]` → **«commerciale@tecnoimpianti.it»** → `[T]` → **«0432 373737»** → `[C][R][OK]` | inviato |
| **Scuola Guida Sicura** | `[P]` → **«Locandine e social»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Scuola Guida Sicura»** → `[E]` → **«info@guidasicura.it»** → `[T]` → **«0481 434343»** → `[C][R+][OK]` | inviato |
| **Falegnameria Pahor** | `[P]` → **«Catalogo e biglietti»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Falegnameria Pahor»** → `[E]` → **«pahor@legno.it»** → `[T]` → **«040 767676»** → `[C][R][OK]` | inviato |
| **Caffè Teatro** | `[P]` → **«Rinnovo dell'immagine del locale»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Caffè Teatro»** → `[E]` → **«caffeteatro@gmail.com»** → `[T]` → **«0481 656565»** → `[C][R][OK]` | inviato |
| **Termoidraulica Nord** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Termoidraulica Nord»** → `[E]` → **«ufficio@termonord.it»** → `[T]` → **«0432 494949»** → `[C][R+][OK]` | inviato |
| **Fioreria Petali** | `[P]` → **«Sito con e-commerce»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Fioreria Petali»** → `[E]` → **«petali@fiori.it»** → `[T]` → **«0481 313131»** → `[C][R][OK]` | inviato |
| **Bar Al Ponte Rosso** | `[P]` → **«ciao»** → `[SAL]` → **«Vorremmo rifare l'immagine del bar»** → `[U]` → **«subito»** → `[D][N]` → **«Bar Al Ponte Rosso»** → `[E]` → **«pontrosso@bar.it»** → `[T]` → **«0481 242424»** → `[C][R+][OK]` | inviato |
| **Tabaccheria Centrale** | `[P]` → **«Insegna nuova»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Tabaccheria Centrale»** → `[E]` → **«centrale@tabacchi.it»** → `[T]` → **«0481 111213»** → `[C][R+][OK]` | inviato |
| **Concessionaria Auto Nord** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Auto Nord Concessionaria»** → `[E]` → **«hr@autonord.it»** → `[T]` → **«0432 838384»** → `[C][R+][OK]` | inviato |
| **Panificio Dolce Forno** | `[P]` → **«Sacchetti e vetrina»** → `[U]` → **«subito»** → `[D][N]` → **«Dolce Forno»** → `[E]` → **«dolceforno@pane.it»** → `[T]` → **«0481 949494»** → `[C][R+][OK]` | inviato |
| **Assistenza Informatica Byte** | `[P]` → **«Logo e sito nuovo»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Byte Assistenza»** → `[E]` → **«info@byte.it»** → `[T]` → **«0432 565656»** → `[C][R][OK]` | inviato |
| **Erboristeria Natura** | `[P]` → **«Etichette per i prodotti»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Erboristeria Natura»** → `[E]` → **«natura@erbe.it»** → `[T]` → **«0481 606060»** → `[C][R+][OK]` | inviato |
| **Studio Ingegneria Costruire** | `[P]` → **«Carta intestata e presentazione»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Studio Costruire»** → `[E]` → **«info@costruire.it»** → `[T]` → **«0432 909091»** → `[C][R][OK]` | inviato |
| **Lavanderia Bolle** | `[P]` → **«Volantini e insegna»** → `[U]` → **«subito»** → `[D][N]` → **«Lavanderia Bolle»** → `[E]` → **«bolle@lavanderia.it»** → `[T]` → **«0481 727273»** → `[C][R+][OK]` | inviato |
| **Azienda Vitivinicola Rocca** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Vitivinicola Rocca»** → `[E]` → **«rocca@vini.it»** → `[T]` → **«0481 848485»** → `[C][R+][OK]` | inviato |
| **Centro Estetico Bellezza** | `[P]` → **«Listino e social»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Centro Estetico Bellezza»** → `[E]` → **«info@bellezza.it»** → `[T]` → **«0481 373738»** → `[C][R+][OK]` | inviato |

---

## Clienti privati (83)

| Chi scrive | Dialogo | Esito |
| --- | --- | --- |
| **Marco Tessaro** | `[P]` → **«Vorrei rifare il mio logo»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Marco Tessaro»** → `[E]` → **«marco.tessaro@gmail.com»** → `[T]` → **«347 2231144»** → `[C][R][OK]` | inviato |
| **Giulia Moro** | `[P]` → **«ciao»** → `[SAL]` → **«Ho bisogno di un volantino»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Giulia Moro»** → `[E]` → **«giulia.moro@libero.it»** → `[T]` → **«340 1122556»** → `[C][R+][OK]` | inviato |
| **Luca Fabbro** | `[P]` → **«Avete un portfolio?»** → `[DAN][U]` → **«Mi serve subito»** → `[D][N]` → **«Luca Fabbro»** → `[E]` → **«luca@fabbrofoto.it»** → `[T]` → **«3491234567»** → `[C][R+][OK]` | inviato |
| **Martina Zanin** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Martina Zanin»** → `[E]` → **«m.zanin@studiozanin.com»** → `[T]` → **«348 5566443»** → `[C][R][OK]` | inviato |
| **Simone Basso** | `[P]` → **«Che programmi usi?»** → `[INFO][U]` → **«mi serve un logo»** → `[D][N]` → **«subito»** → `[N!]` → **«Simone Basso»** → `[E]` → **«simone.basso@gmail.com»** → `[T]` → **«333 4455667»** → `[C][R][OK]` | inviato |
| **Elisa Comelli** | `[P]` → **«Non so bene cosa mi serve»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Elisa Comelli»** → `[E]` → **«elisa.comelli@gmail.com»** → `[T]` → **«348 1122334»** → `[C][R][OK]` | inviato |
| **Federico Piani** | `[P]` → **«mi puoi fare un preventivo?»** → `[DAN][U]` → **«Mi serve subito»** → `[D][N]` → **«Federico Piani, f.piani@piani.it, 335 6677889»** → `[C][R+][OK]` | inviato |
| **Ilaria Cossar** | `[P]` → **«Grafiche per instagram»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Ilaria Cossar»** → `[E]` → **«ilaria.cossar@gmail.com»** → `[T]` → **«347 1212121»** → `[C][R+][OK]` | inviato |
| **Roberto Sciarra** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«non ho fretta»** → `[D][N]` → **«Roberto Sciarra»** → `[E]` → **«rsciarra@consulenze.it»** → `[T]` → **«347 3344556»** → `[C][R][OK]` | inviato |
| **Alessandro Vidoni** | `[P]` → **«Apro un'attività a marzo, mi serve tutto: logo, sito, insegna»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Alessandro Vidoni»** → `[E]` → **«a.vidoni@nuovaattivita.it»** → `[T]` → **«349 8877665»** → `[C][R][OK]` | inviato |
| **Sofia Puppo** | `[P]` → **«Vorrei sistemare i social»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Sofia»** → `[E]` → **«sofia.puppo@gmail.com»** → `[T]` → **«3388776655»** → `[C][R+][OK]` | inviato |
| **Chiara Nonino** | `[P]` → **«Vorrei un restyling del marchio»** → `[U]` → **«dipende dai costi»** → `[D][N]` → **«Chiara Nonino, chiara@nonino.it»** → `[T]` → **«346 1231234»** → `[C][R][OK]` | inviato |
| **Veronica Del Bianco** | `[P]` → **«ciao!»** → `[SAL]` | ❌ **niente inviato** |
| **Enrico Pittoni** | `[P]` → **«Biglietto da visita nuovo»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Enrico Pittoni, enrico@pittoni.it, 335 1122334»** → `[C][R+][OK]` | inviato |
| **Sara Kodermaz** | `[P]` → **«Grafiche per il mio canale twitch»** → `[U]` → **«subito»** → `[D][N]` → **«Sara Kodermaz»** → `[E]` → **«sara.k@twitch.tv»** → `[T]` → **«346 5544332»** → `[C][R+][OK]` | inviato |
| **Pietro Grion** | `[P]` → **«mi serve un logo»** → `[U]` → **«urgente»** → `[D][N]` → **«Pietro Grion»** → `[E]` → **«p.grion@gmail.com»** → `[T]` → **«3401119999»** → `[C][R+][OK]` | inviato |
| **Anna Maria Zorzenon** | `[P]` → **«Sei un robot?»** → `[INFO][U]` → **«Vorrei un sito personale»** → `[D][N]` → **«Possiamo fissare un appuntamento»** → `[N!]` → **«Anna Maria Zorzenon»** → `[E]` → **«annamaria.zorzenon@alice.it»** → `[T]` → **«0432 606060»** → `[C][R][OK]` | inviato |
| **Michele Blasig** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Michele Blasig»** → `[E]` → **«michele.blasig@gmail.com»** → `[T]` → **«348 0011223»** → `[C][R][OK]` | inviato |
| **Laura De Marchi** | `[P]` → **«Vorrei un logo per la mia attività»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Laura De Marchi»** → `[E]` → **«laura.demarchi@gmail.com»** → `[T]` → **«331 4455667»** → `[C][R][OK]` | inviato |
| **Matteo Sgubin** | `[P]` → **«Come funziona?»** → `[INFO][U]` → **«Vorrei un sito»** → `[D][N]` → **«Mi serve subito»** → `[N!]` → **«Matteo Sgubin»** → `[E]` → **«matteo.sgubin@gmail.com»** → `[T]` → **«340 7778889»** → `[C][R][OK]` | inviato |
| **Rachele Fain** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Rachele Fain»** → `[E]` → **«rachele.fain@gmail.com»** → `[T]` → **«349 1212123»** → `[C][R+][OK]` | inviato |
| **Cristian Ussai** | `[P]` → **«Startup, mi serve l'identità visiva»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Cristian Ussai»** → `[E]` → **«cristian@startupfvg.io»** → `[T]` → **«345 3334445»** → `[C][R+][OK]` | inviato |
| **Nadia Terpin** | `[P]` → **«Vorrei curare meglio i social»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Nadia Terpin»** → `[E]` → **«nadia.terpin@gmail.com»** → `[T]` → **«348 4443332»** → `[C][R][OK]` | inviato |
| **Filippo Maran** | `[P]` → **«Che software usate?»** → `[INFO][U]` → **«Sito per il mio studio»** → `[D][N]` → **«Possiamo fissare un appuntamento»** → `[N!]` → **«Filippo Maran»** → `[E]` → **«filippo.maran@gmail.com»** → `[T]` → **«347 6665554»** → `[C][R][OK]` | inviato |
| **Stefano Bregant** | `[P]` → **«Restyling del mio marchio»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Stefano Bregant»** → `[E]` → **«stefano.bregant@gmail.com»** → `[T]` → **«348 1010101»** → `[C][R+][OK]` | inviato |
| **Silvia Perco** | `[P]` → **«Vorrei un sito vetrina»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Silvia Perco»** → `[E]` → **«silvia.perco@gmail.com»** → `[T]` → **«346 8080808»** → `[C][R][OK]` | inviato |
| **Damiano Ruzzier** | `[P]` → **«Mi hanno chiuso il vecchio sito, devo rifarlo»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Damiano Ruzzier»** → `[E]` → **«damiano.ruzzier@gmail.com»** → `[T]` → **«340 4040404»** → `[C][R+][OK]` | inviato |
| **Paola Zamparini** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Paola Zamparini»** → `[E]` → **«paola.zamparini@gmail.com»** → `[T]` → **«349 3030303»** → `[C][R+][OK]` | inviato |
| **Emanuele Bianco** | `[P]` → **«Loghi e biglietti»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Emanuele Bianco»** → `[E]` → **«emanuele.bianco@gmail.com»** → `[T]` → **«347 5050505»** → `[C][R+][OK]` | inviato |
| **Massimo Cudicio** | `[P]` → **«Che tempi avete?»** → `[DAN][U]` → **«Sito per la mia ditta»** → `[D][N]` → **«Mi serve subito»** → `[N!]` → **«Massimo Cudicio»** → `[E]` → **«massimo.cudicio@gmail.com»** → `[T]` → **«348 7070707»** → `[C][R][OK]` | inviato |
| **Elena Visintin** | `[P]` → **«Vorrei rifare il curriculum grafico»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Elena Visintin»** → `[E]` → **«elena.visintin@gmail.com»** → `[T]` → **«345 9090909»** → `[C][R][OK]` | inviato |
| **Andrea Gratton** | `[P]` → **«Social del mio locale»** → `[U]` → **«subito»** → `[D][N]` → **«Andrea Gratton»** → `[E]` → **«andrea.gratton@gmail.com»** → `[T]` → **«347 4141414»** → `[C][R+][OK]` | inviato |
| **Sabrina Cont** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Sabrina Cont»** → `[E]` → **«sabrina.cont@gmail.com»** → `[T]` → **«346 2626262»** → `[C][R][OK]` | inviato |
| **Nicoletta Zorzenon** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Nicoletta Zorzenon»** → `[E]` → **«nicoletta.z@gmail.com»** → `[T]` → **«347 7373737»** → `[C][R][OK]` | inviato |
| **Fabio Marchesan** | `[P]` → **«Vorrei un sito per il mio hobby»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Fabio Marchesan»** → `[E]` → **«fabio.marchesan@gmail.com»** → `[T]` → **«340 6262626»** → `[C][R+][OK]` | inviato |
| **Giorgio Battistella** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` | ❌ **niente inviato** |
| **Valentina Tomat** | `[P]` → **«Vorrei presentarmi meglio online»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Valentina Tomat»** → `[E]` → **«valentina.tomat@gmail.com»** → `[T]` → **«349 5151515»** → `[C][R+][OK]` | inviato |
| **Luca Peressini** | `[P]` → **«Sei una persona vera?»** → `[INFO][U]` → **«Mi serve un volantino»** → `[D][N]` → **«Possiamo fissare un appuntamento»** → `[N!]` → **«Luca Peressini»** → `[E]` → **«luca.peressini@gmail.com»** → `[T]` → **«348 3131313»** → `[C][R][OK]` | inviato |
| **Nicola Brumat** | `[P]` → **«hey»** → `[SAL]` → **«Vorrei un portfolio online»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Nicola Brumat»** → `[E]` → **«nicola.brumat@outlook.it»** → `[T]` → **«340 9090901»** → `[C][R+][OK]` | inviato |
| **John Smith** 🇬🇧 | `[P]` → **«I'd like a new logo»** → `[U]` → **«Let's set up a meeting»** → `[D][N]` → **«John Smith»** → `[E]` → **«john.smith@gmail.com»** → `[T]` → **«+44 7700 900222»** → `[C][R][OK]` | inviato |
| **Sarah Bennett** 🇬🇧 | `[P]` → **«hello»** → `[SAL]` → **«I need a flyer for my shop»** → `[U]` → **«Let's set up a meeting»** → `[D][N]` → **«Sarah Bennett»** → `[E]` → **«sarah.bennett@outlook.com»** → `[T]` → **«+44 7911 123456»** → `[C][R][OK]` | inviato |
| **Maria Gonzalez** 🇬🇧 | `[P]` → **«Do you have a portfolio?»** → `[DAN][U]` → **«I need it right away»** → `[D][N]` → **«Maria Gonzalez»** → `[E]` → **«maria.gonzalez@correo.es»** → `[T]` → **«+34 600 112233»** → `[C][R+][OK]` | inviato |
| **Anna Kowalski** 🇬🇧 | `[P]` → **«I'm looking for someone for a project»** → `[U]` → **«Let's set up a meeting»** → `[D][N]` → **«Anna Kowalski»** → `[E]` → **«anna.kowalski@poczta.pl»** → `[T]` → **«+48 501 234 567»** → `[C][R][OK]` | inviato |
| **Tom Harris** 🇬🇧 | `[P]` → **«Where are you based?»** → `[INFO][U]` → **«I need a poster»** → `[D][N]` → **«Let's set up a meeting»** → `[N!]` → **«Tom Harris»** → `[E]` → **«tom.harris@gmail.com»** → `[T]` → **«+44 7700 900333»** → `[C][R][OK]` | inviato |
| **Julia Fischer** 🇬🇧 | `[P]` → **«I'd like to improve my online presence»** → `[U]` → **«Let's set up a meeting»** → `[D][N]` → **«Julia Fischer»** → `[E]` → **«julia.fischer@web.de»** → `[T]` | inviato come **contatto incompleto** |
| **Peter Novak** 🇬🇧 | `[P]` → **«What software do you use?»** → `[DAN][U]` → **«I want to redo my brand»** → `[D][N]` → **«I need it right away»** → `[N!]` → **«Peter Novak»** → `[E]` → **«p.novak@email.cz»** → `[T]` → **«+420 601 234 567»** → `[C][R][OK]` | inviato |
| **Elena Petrova** 🇬🇧 | `[P]` → **«I need a wedding invitation design»** → `[U]` → **«Let's set up a meeting»** → `[D][N]` → **«Elena Petrova»** → `[E]` → **«elena.petrova@mail.ru»** → `[T]` → **«+7 916 123 45 67»** → `[C][R][OK]` | inviato |
| **Marc Dupont** 🇬🇧 | `[P]` → **«I'd like a personal website»** → `[U]` → **«Let's set up a meeting»** → `[D][N]` → **«Marc Dupont»** → `[E]` → **«marc.dupont@orange.fr»** → `[T]` → **«+33 6 12 34 56 78»** → `[C][R][OK]` | inviato |
| **Lucy Turner** 🇬🇧 | `[P]` → **«Can you tell me the price first?»** → `[DAN][U]` → **«Let's set up a meeting»** → `[D][N]` → **«Lucy Turner»** → `[E]` → **«lucy.turner@gmail.com»** → `[T]` → **«+44 7700 900444»** → `[C][R][OK]` | inviato |
| **Robert Kim** 🇬🇧 | `[P]` → **«hi there»** → `[SAL]` → **«I want to redesign my portfolio»** → `[U]` → **«Let's set up a meeting»** → `[D][N]` → **«Robert Kim»** → `[E]` → **«robert.kim@gmail.com»** → `[T]` → **«+1 415 555 0132»** → `[C][R][OK]` | inviato |
| **Nina Petersen** 🇬🇧 | `[P]` → **«What can you do exactly?»** → `[INFO][U]` → **«Social media templates please»** → `[D][N]` → **«I need it right away»** → `[N!]` → **«Nina Petersen»** → `[E]` → **«nina@petersen.no»** → `[T]` → **«+47 912 34 567»** → `[C][R][OK]` | inviato |
| **David Cargnelutti** 🇬🇧 | `[P]` → **«I need a website»** → `[U]` → **«as soon as possible»** → `[D][N]` → **«David Cargnelutti»** → `[E]` → **«david@cargnelutti.eu»** → `[T]` → **«+39 340 5544332»** → `[C][R][OK]` | inviato |
| **Sophie Lambert** 🇬🇧 | `[P]` → **«What's your experience?»** → `[INFO][U]` → **«I'd like a logo for my shop»** → `[D][N]` → **«Let's set up a meeting»** → `[N!]` → **«Sophie Lambert»** → `[E]` → **«sophie.lambert@gmail.com»** → `[T]` → **«+32 470 12 34 56»** → `[C][R][OK]` | inviato |
| **Barbara Fontanini** | `[P]` → **«Buongiorno, avrei bisogno di rifare tutta la comunicazione del mio negozio: insegna, volantini e social»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Barbara Fontanini»** → `[E]` → **«barbara.fontanini@gmail.com»** → `[T]` → **«348 6161616»** → `[C][R][OK]` | inviato |
| **Giacomo Pividori** | `[P]` → **«Non so se posso permettermelo, quanto viene?»** → `[DAN][U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Giacomo Pividori»** → `[E]` → **«g.pividori@gmail.com»** → `[T]` → **«347 8282828»** → `[C][R][OK]` | inviato |
| **Elisa Bearzi** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Elisa Bearzi»** → `[E]` → **«elisa.bearzi@gmail.com»** → `[T]` → **«348 9393939»** → `[C][R+][OK]` | inviato |
| **Alessia Del Fabbro** | `[P]` → **«Che formazione hai fatto?»** → `[INFO][U]` → **«Vorrei un sito per il mio blog»** → `[D][N]` → **«Possiamo fissare un appuntamento»** → `[N!]` → **«Alessia Del Fabbro»** → `[E]` → **«alessia.delfabbro@gmail.com»** → `[T]` → **«349 7474747»** → `[C][R][OK]` | inviato |
| **Riccardo Zanut** | `[P]` → **«Vorrei una consulenza sul marchio»** → `[U]` → **«non ho fretta»** → `[D][N]` → **«Riccardo Zanut»** → `[E]` → **«riccardo.zanut@gmail.com»** → `[T]` → **«346 3636363»** → `[C][R][OK]` | inviato |
| **Marco Blasutta** | `[P]` → **«Ho bisogno di un aiuto ma non so spiegarmi»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Marco Blasutta»** → `[E]` → **«marco.blasutta@gmail.com»** → `[T]` → **«348 1515151»** → `[C][R][OK]` | inviato |
| **Cinzia Toffoli** | `[P]` → **«Vorrei un invito digitale»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Cinzia Toffoli»** → `[E]` → **«cinzia.toffoli@gmail.com»** → `[T]` → **«349 8484848»** → `[C][R+][OK]` | inviato |
| **Gabriele Marin** | `[P]` → **«ciao come stai?»** → `[SAL]` → **«Vorrei rifare il mio sito»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Gabriele Marin»** → `[E]` → **«gabriele.marin@gmail.com»** → `[T]` → **«347 9595959»** → `[C][R+][OK]` | inviato |
| **Federica Cociani** | `[P]` → **«Dove posso vedere i tuoi lavori?»** → `[INFO][U]` → **«Vorrei un logo»** → `[D][N]` → **«Possiamo fissare un appuntamento»** → `[N!]` → **«Federica Cociani»** → `[E]` → **«federica.cociani@gmail.com»** → `[T]` → **«348 2727272»** → `[C][R][OK]` | inviato |
| **Stefania Bulfon** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Stefania Bulfon»** → `[E]` → **«stefania.bulfon@gmail.com»** → `[T]` → **«346 5858585»** → `[C][R+][OK]` | inviato |
| **Tommaso Grion** | `[P]` → **«Vorrei un sito»** → `[U]` → **«subito»** → `[D][N]` → **«non te lo dico il nome»** → `[N!]` → **«tommaso.grion@gmail.com»** → `[T]` → **«347 1616161»** → `[C][R+][OK]` | inviato ⚠️ senza nome |
| **Nicola Cattarossi** | `[P]` → **«mi serve un aiuto grafico urgente per domani»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Nicola Cattarossi»** → `[E]` → **«nicola.cattarossi@gmail.com»** → `[T]` → **«348 3838383»** → `[C][R+][OK]` | inviato |
| **Serena Miotti** | `[P]` → **«Il mio logo fa schifo, si può rifare?»** → `[DAN][U]` → **«Mi serve subito»** → `[D][N]` → **«Serena Miotti»** → `[E]` → **«serena.miotti@gmail.com»** → `[T]` → **«349 4646464»** → `[C][R+][OK]` | inviato |
| **Alberto Nicoletti** | `[P]` → **«Buonasera, vorrei una consulenza»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Alberto Nicoletti»** → `[E]` → **«alberto.nicoletti@gmail.com»** → `[T]` → **«346 7171717»** → `[C][R][OK]` | inviato |
| **Chiara Furlan** | `[P]` → **«Che programmi usi? E quanto costa?»** → `[DAN][U]` → **«Mi serve subito»** → `[D][N]` → **«Chiara Furlan»** → `[E]` → **«chiara.furlan@gmail.com»** → `[T]` → **«348 9292929»** → `[C][R+][OK]` | inviato |
| **Lorenzo Battistutta** | `[P]` → **«Sto cercando personale per un progetto»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Lorenzo Battistutta»** → `[E]` → **«lorenzo.b@gmail.com»** → `[T]` → **«347 5353535»** → `[C][R][OK]` | inviato |
| **Marta Sgubin** | `[P]` → **«Vorrei sapere se lavori anche a distanza»** → `[U]` → **«Vorrei un sito»** → `[D][N]` → **«Possiamo fissare un appuntamento»** → `[N!]` → **«Marta Sgubin»** → `[E]` → **«marta.sgubin@gmail.com»** → `[T]` → **«348 6767676»** → `[C][R][OK]` | inviato |
| **Davide Marchi** | `[P]` → **«urgente!! mi serve un volantino per domani»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Davide Marchi»** → `[E]` → **«davide.marchi@gmail.com»** → `[T]` → **«349 1919191»** → `[C][R+][OK]` | inviato |
| **Ilaria Zanini** | `[P]` → **«Che privacy avete sui dati?»** → `[INFO][U]` → **«Vorrei un sito»** → `[D][N]` → **«Possiamo fissare un appuntamento»** → `[N!]` → **«Ilaria Zanini»** → `[E]` → **«ilaria.zanini@gmail.com»** → `[T]` → **«346 8383838»** → `[C][R][OK]` | inviato |
| **Giovanni Turco** | `[P]` → **«Vorrei rifare le foto e la grafica del profilo»** → `[U]` → **«subito»** → `[D][N]` → **«Giovanni Turco»** → `[E]` → **«giovanni.turco@gmail.com»** → `[T]` → **«348 4242424»** → `[C][R+][OK]` | inviato |
| **Sandra Bertoli** | `[P]` → **«Vorrei un biglietto da visita elegante»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Sandra Bertoli»** → `[E]` → **«sandra.bertoli@gmail.com»** → `[T]` → **«347 2828282»** → `[C][R][OK]` | inviato |
| **Emanuele Fabris** | `[P]` → **«Ho un'idea per un marchio ma mi serve aiuto»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Emanuele Fabris»** → `[E]` → **«emanuele.fabris@gmail.com»** → `[T]` → **«348 5757575»** → `[C][R][OK]` | inviato |
| **Roberta Zanolla** | `[P]` → **«Quanto tempo ci vuole per un sito?»** → `[INFO][U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Roberta Zanolla»** → `[E]` → **«roberta.zanolla@gmail.com»** → `[T]` → **«349 6969696»** → `[C][R][OK]` | inviato |
| **Paolo Miani** | `[P]` → **«Vorrei sistemare il mio profilo professionale»** → `[U]` → **«non ho fretta»** → `[D][N]` → **«Paolo Miani»** → `[E]` → **«paolo.miani@gmail.com»** → `[T]` → **«346 4747474»** → `[C][R][OK]` | inviato |
| **Giada Fantin** | `[P]` → **«Avrei bisogno di aiuto con l'apertura del mio sito»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Giada Fantin»** → `[E]` → **«giada.fantin@gmail.com»** → `[T]` → **«348 8181818»** → `[C][R+][OK]` | inviato |
| **Silvano Comar** | `[P]` → **«Vorrei un manifesto per una mostra»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Silvano Comar»** → `[E]` → **«silvano.comar@gmail.com»** → `[T]` → **«347 3535353»** → `[C][R][OK]` | inviato |
| **Katia Persoglia** | `[P]` → **«Sei tu Daniele?»** → `[DAN][U]` → **«Vorrei un logo»** → `[D][N]` → **«Mi serve subito»** → `[N!]` → **«Katia Persoglia»** → `[E]` → **«katia.persoglia@gmail.com»** → `[T]` → **«348 7878787»** → `[C][R][OK]` | inviato |
| **Manuel Sturam** | `[P]` → **«Ho una band, ci serve la copertina del disco»** → `[U]` → **«Mi serve subito»** → `[D][N]` → **«Manuel Sturam»** → `[E]` → **«manuel.sturam@gmail.com»** → `[T]` → **«349 2525252»** → `[C][R+][OK]` | inviato |
| **Cristina Bassi** | `[P]` → **«Vorrei rifare il sito del mio studio»** → `[U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Cristina Bassi»** → `[E]` → **«cristina.bassi@gmail.com»** → `[T]` → **«346 9191919»** → `[C][R][OK]` | inviato |
| **Denis Vuga** | `[P]` → **«Non mi va di lasciare i dati, posso solo chiedere?»** → `[INFO][U]` → **«Possiamo fissare un appuntamento»** → `[D][N]` → **«Denis Vuga»** → `[E]` → **«denis.vuga@gmail.com»** → `[T]` → **«347 6464646»** → `[C][R][OK]` | inviato |

---

## Cosa chiedono le persone

### Argomento della prima frase

| Argomento | Volte |
| --- | --- |
| Sito web | 34 |
| Logo, marchio e identità visiva | 27 |
| Ricerca di personale o collaborazione | 24 |
| Materiale stampato (volantini, menu, cataloghi, insegne) | 22 |
| Richiesta generica o confusa | 18 |
| Domanda su Daniele o sul servizio | 16 |
| Domanda su prezzi, tempi o portfolio | 14 |
| Social e immagine online | 13 |
| Solo un saluto | 11 |

### Frasi più dette dai visitatori

| Frase | Volte |
| --- | --- |
| «Possiamo fissare un appuntamento» | 62 |
| «Mi serve subito» | 57 |
| «subito» (scritto a mano) | 20 |
| «Sto cercando personale per un progetto» | 18 |
| «Let's set up a meeting» 🇬🇧 | 16 |
| «I need it right away» 🇬🇧 | 13 |
| «Avrei bisogno di aiuto con l'apertura del mio sito» | 8 |
| «Vorrei un sito» | 4 |
| «non ho fretta» | 3 |
| «I'm looking for someone for a project» 🇬🇧 | 3 |

### Urgenza

| Risposta | Volte |
| --- | --- |
| Ha fretta | 76 |
| Preferisce l'appuntamento | 68 |

## Cosa risponde l'assistente

| Frase | Volte |
| --- | --- |
| Presentazione (it + en) | 179 |
| Domanda sull'urgenza | 178 |
| "Come ti chiami?" | 178 |
| "Per fissare una consulenza mi serviranno..." | 177 |
| "Chiaro, ho tutto quello che mi serve." | 174 |
| "Messaggio inviato" | 174 |
| Chiede il telefono | 169 |
| Chiede l'email | 167 |
| "Ti ricontatto per fissare l'appuntamento" | 95 |
| "Ti ricontatto, visto che hai fretta" | 79 |
| **"Il nome però non l'ho colto"** | **23** |
| **"Prima fissiamo una data per parlare con Daniele"** | **18** |
| **Risposte prese dalle informazioni del sito** | **17** |
| **"Ciao! Raccontami pure di cosa hai bisogno"** | **11** |
| **"Va bene, non insisto"** | **3** |

Le ultime cinque righe sono tutte roba nuova: prima non esisteva nessuna di queste
risposte. In 17 conversazioni l'assistente ha risposto con informazioni vere prese dal
sito (chi è Daniele, che programmi usa, dove lavora, che formazione ha, come funziona la
privacy, se è un robot), e in 18 ha portato la conversazione su "fissiamo una data" invece
di parlare di prezzi.

## Cosa ho corretto durante le prove

| Problema | Quante volte | Correzione |
| --- | --- | --- |
| "subito" e "appuntamento" finivano nel campo nome | 2 su 15 nel primo giro | L'assistente non accetta più come nome le parole che parlano di tempi |
| Anche "tra due settimane" ci finiva | 1 | Allargato a tutte le espressioni di tempo (settimane, mesi, giorni, quando…) |
| In inglese ci finiva "I need it right away" | 3 su 15 | Aggiunte le espressioni inglesi ("right away", "as soon as", "immediately") |

Dopo le correzioni ho rifatto quelle conversazioni: i nomi arrivano giusti.

## La correzione decisa dopo il report

**Era la cosa più frequente: 23 volte su 179 l'assistente doveva richiedere il nome.**
Succedeva sempre nello stesso modo: la persona apriva con una domanda ("Che programmi
usi?", "Chi è Daniele?"), quella domanda diventava la richiesta, e da lì in poi tutto
slittava di una battuta — la vera richiesta finiva al posto dell'urgenza, e la risposta
sull'urgenza al posto del nome.

**Corretto il 9 settembre.** Ora vale la stessa regola dei saluti: se il primo messaggio è
solo una domanda, l'assistente risponde e poi chiede **"E dimmi: di cosa avresti
bisogno?"**, senza registrarla come richiesta. Dopo due domande di fila prende comunque
quello che è stato scritto, per non girare a vuoto.

Rifatte dieci conversazioni di controllo, tutte quelle che prima slittavano:
**zero richieste ripetute del nome, dieci contatti su dieci arrivati completi e con il nome
giusto.** Nella stessa occasione l'assistente ha imparato a riconoscere anche "what
software do you use", che prima non capiva.

Restano due cose minori:

- Chi risponde all'urgenza con una domanda ("Che tempi avete?") riceve la risposta e poi si
  vede ripetere la domanda sull'urgenza: funziona, ma sono tre battute.
- "Avete un portfolio?" ora riceve "fissiamo una data" invece dell'indicazione alla sezione
  Progetti, come mi avevi chiesto. Se vuoi si possono dire tutte e due: prima dove guardare,
  poi la proposta di sentirsi.
