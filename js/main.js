/* Studio Dentistico Rinaldi Montalbano — main.js */

/* ── Full translation dictionary ── */
const T = {
  it: {
    /* Nav */
    'nav.home':    'Home',
    'nav.team':    'Chi siamo',
    'nav.treat':   'Trattamenti',
    'nav.urg':     'Urgenze',
    'nav.faq':     'FAQ',
    'nav.contact': 'Contatti',
    'nav.book':    'Prenota',
    /* Cookie */
    'cookie.p':    'Utilizziamo cookie tecnici per il funzionamento del sito. <a href="cookie.html">Cookie policy</a> · <a href="privacy.html">Privacy</a>',
    'cookie.btn':  'Accetta',
    /* Index — hero */
    'hero.eyebrow':  'Studio Dentistico',
    'hero.title':    'Il sorriso<br>che <span class="italic">meriti</span>,<br>curato con<br><span class="italic">arte</span>.',
    'hero.sub':      'Tre specialisti, un approccio personale. Da oltre 25 anni ci prendiamo cura della salute dentale delle famiglie di Savignano e dintorni.',
    'hero.cta1':     'Prenota una visita',
    'hero.cta2':     'Urgenze',
    /* Stats */
    'stat.exp':   'Anni di esperienza',
    'stat.spec':  'Specialisti dedicati',
    'stat.serv':  'Specializzazioni',
    'stat.year':  'Anno di fondazione',
    /* Intro */
    'intro.eyebrow': 'Chi siamo',
    'intro.title':   'Un luogo dove<br><em>la cura è di casa</em>.',
    'intro.p1':      'Lo Studio Dentistico Rinaldi Montalbano nasce nel 1998 dalla visione di Dott. Marcello Rinaldi: offrire cure dentali di alto livello in un ambiente familiare, dove ogni paziente è accolto per nome e trattato come persona, non come numero.',
    'intro.p2':      'Oggi, insieme a Dott.ssa Clara Montalbano e Dott. Mauro Rinaldi, formiamo un team multidisciplinare che copre ogni aspetto della salute orale — dalla prima visita del bambino alla riabilitazione completa dell\'adulto.',
    'intro.cta':     'Conosci il team',
    /* Services */
    'svc.eyebrow': 'I nostri trattamenti',
    'svc.title':   'Tutto ciò di cui<br><em>hai bisogno</em>.',
    'svc.lead':    'Nove specializzazioni sotto un unico tetto. Un unico team, un unico preventivo.',
    'svc.cta':     'Tutti i trattamenti',
    'svc.01':      'Odontoiatria Generale',
    'svc.01.desc': 'Visite di controllo, carie, devitalizzazioni e tutto ciò che riguarda la salute dentale quotidiana.',
    'svc.02':      'Implantologia',
    'svc.02.desc': 'Impianti dentali di ultima generazione per sostituire denti mancanti in modo stabile e duraturo.',
    'svc.03':      'Chirurgia Orale',
    'svc.03.desc': 'Estrazioni, denti del giudizio, chirurgia dei tessuti molli e procedure ambulatoriali specializzate.',
    'svc.04':      'Protesi Dentale',
    'svc.04.desc': 'Protesi fisse, mobili e su impianti. Ricostruiamo il tuo sorriso con materiali di alta qualità.',
    'svc.05':      'Ortodonzia',
    'svc.05.desc': 'Apparecchi fissi, rimovibili e allineatori trasparenti per bambini, adolescenti e adulti.',
    'svc.06':      'Pedodonzia',
    'svc.06.desc': 'Cure dentali dedicate ai più piccoli, con un approccio dolce e rassicurante.',
    'svc.07':      'Igiene Dentale',
    'svc.07.desc': 'Pulizia professionale, ablazione del tartaro e prevenzione per gengive e denti sani.',
    'svc.08':      'Impronta Digitale',
    'svc.08.desc': 'Scanner intraorali 3D per impronte precise e confortevoli, senza materiale tradizionale.',
    'svc.09':      'TAC Dentale',
    'svc.09.desc': 'Tomografia computerizzata per diagnosi precise in implantologia, chirurgia e ortodonzia.',
    /* Quote */
    'quote.text': '"La bocca è la porta della salute. Noi ci prendiamo cura di <em>quella porta</em>, con rispetto e precisione."',
    'quote.cite': 'Studio Dentistico Rinaldi Montalbano — dal 1998',
    /* Team */
    'team.eyebrow': 'Il team',
    'team.title':   'Tre dentisti.<br><em>Un\'unica visione.</em>',
    'team.cta':     'Leggi le biografie',
    'team.1.tag':   'Fondatore · Implantologia',
    'team.1.bio':   'Fondatore dello studio nel 1998. Specialista in implantologia e chirurgia orale con oltre 25 anni di esperienza nel territorio romagnolo.',
    'team.2.tag':   'Ortodonzia · Pedodonzia',
    'team.2.bio':   'Specialista in ortodonzia fissa e mobile, con particolare attenzione ai pazienti in età evolutiva e al trattamento con allineatori trasparenti.',
    'team.3.tag':   'Protesi · Estetica',
    'team.3.bio':   'Esperto in protesi dentale e riabilitazione orale completa. Si dedica alla ricostruzione estetica e funzionale del sorriso.',
    /* CTA band */
    'cta.title':  'Prenota la tua<br><em>prima visita</em>.',
    'cta.book':   'Prenota online',
    'cta.call':   '0541 944339',
    /* Page heroes */
    'ph.team.eyebrow':  'Il team',
    'ph.team.h1':       'Tre dentisti.<br><em>Un\'unica cura.</em>',
    'ph.treat.eyebrow': 'I trattamenti',
    'ph.treat.h1':      'Nove specializzazioni.<br><em>Un unico studio.</em>',
    'ph.urg.label':     'Emergenza dentale? Chiama subito',
    'ph.faq.eyebrow':   'Domande frequenti',
    'ph.faq.h1':        'Le risposte che<br><em>cerchi.</em>',
    'ph.contact.eyebrow':'Contatti',
    'ph.contact.h1':    'Vieni a trovarci<br>o <em>scrivici</em>.',
    'ph.privacy.h1':    'Privacy<br><em>Policy.</em>',
    'ph.cookie.h1':     'Cookie<br><em>Policy.</em>',
    /* chi-siamo.html */
    'team.ph.eyebrow':  'Il team',
    'team.ph.h1':       'Tre dentisti.<br><em>Un\'unica cura.</em>',
    'team.ph.lead':     'Tre professionisti uniti dalla passione per la cura del paziente e dall\'aggiornamento continuo.',
    'team.history.eyebrow': 'La nostra storia',
    'team.history.title':   'Dal 1998, con la stessa <em>dedizione</em>.',
    'team.history.p1':      'Lo studio nasce dalla volontà di Dott. Marcello Rinaldi di portare a Savignano sul Rubicone un centro odontoiatrico che unisse competenza specialistica e calore umano. Nel corso degli anni, si sono uniti Dott.ssa Clara Montalbano e Dott. Mauro Rinaldi, rendendo lo studio un vero riferimento per le famiglie del territorio.',
    'team.values.eyebrow':  'I nostri valori',
    'team.values.title':    'Cosa ci guida <em>ogni giorno</em>.',
    'team.v1.title': 'Professionalità',
    'team.v1.desc':  'Aggiornamento costante, protocolli rigorosi e materiali di prima scelta.',
    'team.v2.title': 'Ascolto',
    'team.v2.desc':  'Ogni paziente ha una storia. Ci prendiamo il tempo per capirla prima di agire.',
    'team.v3.title': 'Aggiornamento continuo',
    'team.v3.desc':  'La dentistica evolve ogni anno. Seguiamo corsi, convegni e nuove tecnologie.',
    'team.v4.title': 'Cura del paziente',
    'team.v4.desc':  'Dal bambino all\'anziano, ogni visita è un momento di fiducia che onoriamo.',
    /* trattamenti.html */
    'treat.ph.eyebrow': 'I trattamenti',
    'treat.ph.h1':      'Nove specializzazioni.<br><em>Un unico studio.</em>',
    'treat.ph.lead':    'Dalla prevenzione quotidiana alla riabilitazione completa, il nostro team copre ogni aspetto della salute orale.',
    'treat.intro.eyebrow': 'Perché sceglierci',
    'treat.cta.title':  'Vuoi sapere qual è il trattamento giusto <em>per te</em>?',
    'treat.cta.sub':    'Prenota una prima visita. Valutiamo insieme la situazione senza impegno.',
    /* urgenze.html */
    'urg.label':        'Emergenza dentale? Chiama subito',
    'urg.eyebrow':      'Cosa fare',
    'urg.title':        'Guida alle<br><em>urgenze dentali</em>.',
    'urg.lead':         'Leggi le istruzioni per la tua situazione e contattaci subito. In caso di dubbio, chiama sempre lo studio.',
    'urg.c1.title':     'Mal di denti acuto',
    'urg.c2.title':     'Dente rotto o scheggiato',
    'urg.c3.title':     'Gonfiore alla guancia o gengiva',
    'urg.c4.title':     'Sanguinamento post-operatorio',
    'urg.after.title':  'Fuori orario di studio',
    'urg.cta.title':    'Hai bisogno di aiuto <em>adesso</em>?',
    'urg.cta.btn':      'Chiama: 0541 944339',
    /* domande-frequenti.html */
    'faq.ph.eyebrow':   'Domande frequenti',
    'faq.ph.h1':        'Le risposte che<br><em>cerchi.</em>',
    'faq.ph.lead':      'Tutto quello che vorresti sapere prima di venire in studio.',
    'faq.cat1':         'Visite e cure',
    'faq.cat2':         'Appuntamenti',
    'faq.cat3':         'Studio e accessibilità',
    /* contatti.html */
    'contact.ph.eyebrow':   'Contatti',
    'contact.ph.h1':        'Vieni a trovarci<br>o <em>scrivici</em>.',
    'contact.ph.lead':      'Siamo a Savignano sul Rubicone, facilmente raggiungibile da Cesena, Rimini e tutta la Valmarecchia.',
    'contact.info.title':   'Informazioni pratiche',
    'contact.form.title':   'Prenota o scrivi',
    'contact.form.nome':    'Nome',
    'contact.form.cognome': 'Cognome',
    'contact.form.tel':     'Telefono',
    'contact.form.motivo':  'Motivo della visita',
    'contact.form.msg':     'Messaggio',
    'contact.form.submit':  'Invia richiesta',
    'contact.form.success': 'Grazie! Ti ricontatteremo al più presto.',
    'contact.label.addr':      'Indirizzo',
    'contact.label.phone':     'Telefono',
    'contact.label.email':     'Email',
    'contact.label.hours':     'Orari',
    'contact.label.park':      'Parcheggio',
    'contact.label.access':    'Accessibilità',
    'contact.label.transport': 'Mezzi pubblici',
    'contact.val.park':      'Parcheggio gratuito direttamente di fronte allo studio, con ampia disponibilità di posti.',
    'contact.val.access':    'Accesso privo di barriere architettoniche per sedia a rotelle e passeggino. Ascensore interno disponibile.',
    'contact.val.transport': 'Autobus linea Cesena–Rimini, fermata Via Emilia Ovest. Lo studio è raggiungibile in pochi minuti a piedi dalla fermata.',
    'contact.hours.monFri':  'Lunedì – Venerdì',
    'contact.hours.sat':     'Sabato',
    'contact.hours.sat.val': 'Su appuntamento',
    'contact.hours.sun':     'Domenica',
    'contact.hours.closed':  'Chiuso',
    /* urgenze.html — new keys */
    'urg.hours-bar':   '<strong>Orari:</strong> Lun–Ven 9:00–13:00 · 15:00–19:00 · Sabato su appuntamento &nbsp;|&nbsp; <a href="contatti.html">Prenota visita urgente →</a>',
    'urg.lead-html':   'Leggi le istruzioni per la tua situazione e <strong style="color:var(--deep)">contattaci subito</strong>. In caso di dubbio, chiama sempre lo studio al <a href="tel:0541944339" style="color:var(--red);font-weight:700">0541 944339</a>.',
    'urg.c1.list':     '<li>Prendi un antidolorifico da banco (ibuprofene o paracetamolo) secondo le indicazioni.</li><li>Evita cibi e bevande molto caldi o freddi.</li><li>Sciacqua con acqua tiepida salata per ridurre l\'infiammazione.</li><li><strong>Chiama lo studio: 0541 944339</strong> per un appuntamento urgente.</li><li>Non applicare aspirina direttamente sulla gengiva.</li>',
    'urg.c2.list':     '<li>Raccogli il frammento e conservalo in latte o soluzione salina.</li><li>Risciacqua la bocca con acqua tiepida.</li><li>Se sanguina, premi con una garza sterile per 10 minuti.</li><li>Applica ghiaccio avvolto in un panno sulla guancia se c\'è gonfiore.</li><li><strong>Chiama subito: 0541 944339</strong> — interveniamo in giornata.</li>',
    'urg.c3.list':     '<li>Applica ghiaccio (avvolto in panno) per 20 minuti, pausa 20 minuti.</li><li>Non applicare calore: può peggiorare l\'infezione.</li><li>Prendi un antidolorifico se necessario.</li><li><strong>Il gonfiore può indicare un ascesso: chiama 0541 944339.</strong></li><li>Se hai febbre alta o difficoltà a deglutire, vai al Pronto Soccorso.</li>',
    'urg.c4.list':     '<li>Mordi fermamente una garza sterile per 20–30 minuti senza aprire la bocca.</li><li>Stai seduto o semi-sdraiato, non completamente disteso.</li><li>Evita di sciacquare, sputare o bere con la cannuccia nelle prime 24h.</li><li>Niente fumo, alcol o cibi caldi nelle prime 48 ore.</li><li><strong>Se non si ferma dopo 30 minuti: 0541 944339</strong> o Pronto Soccorso.</li>',
    'urg.after.intro': 'Se l\'urgenza avviene di notte, nel weekend o durante le festività:',
    'urg.after.list':  '<li><strong>Pronto Soccorso:</strong> Ospedale di Cesena (Via Nazionale 112 — circa 15 km) per dolori acuti, gonfiori importanti o traumi con ferite.</li><li><strong>Guardia Medica:</strong> per ricevere indicazioni e farmaci temporanei in attesa dell\'apertura dello studio.</li><li><strong>Il giorno seguente:</strong> chiama alle 9:00 — <a href="tel:0541944339" style="color:var(--gold-light)">0541 944339</a>.</li>',
    'urg.after.note':  '⚠ In caso di difficoltà respiratoria, deglutizione bloccata o trauma grave: chiama immediatamente il <strong>118</strong>.',
    /* chi-siamo.html — new keys */
    'team.section.eyebrow': 'Il team',
    'team.section.title':   'I professionisti<br><em>che ti curano.</em>',
    'team.history.p2':      'In oltre venticinque anni lo studio è cresciuto, si è arricchito di nuovi specialisti e di tecnologie all\'avanguardia, senza mai perdere il calore di un approccio familiare. Ogni paziente viene accolto per nome, ascoltato con attenzione e accompagnato in ogni fase del percorso di cura.',
    'team.history.p3':      'Siamo profondamente radicati nel territorio romagnolo: Savignano sul Rubicone è la nostra casa, e le famiglie di questa zona sono le nostre famiglie da generazioni.',
    /* trattamenti.html — new keys */
    'treat.list.eyebrow': 'Tutte le specializzazioni',
    'treat.list.title':   'Cosa facciamo<br><em>per te.</em>',
    'treat.list.lead':    'Un percorso di cura personalizzato, dalla prima visita di controllo alla riabilitazione completa. Ogni trattamento è progettato attorno alle tue esigenze.',
    /* privacy.html / cookie.html */
    'ph.legal.eyebrow': 'Informativa legale',
    /* domande-frequenti.html — FAQ questions */
    'faq.q1':  'Una visita di controllo fa male?',
    'faq.q2':  'Ogni quanto devo andare dal dentista?',
    'faq.q3':  'Quanto costa una prima visita?',
    'faq.q4':  'Posso venire con dolore acuto oggi?',
    'faq.q5':  'Trattate anche i bambini piccoli?',
    'faq.q6':  'Ho paura del dentista. Cosa posso fare?',
    'faq.q7':  'Lo sbiancamento dei denti è rimborsato dal SSN?',
    'faq.q8':  'Cos\'è l\'impronta digitale e perché è meglio?',
    'faq.q9':  'Come prenoto un appuntamento?',
    'faq.q10': 'Posso disdire o spostare un appuntamento?',
    'faq.q11': 'Quanto dura mediamente una visita di controllo?',
    'faq.q12': 'Accettate nuovi pazienti?',
    'faq.q13': 'Avete un parcheggio?',
    'faq.q14': 'Lo studio è accessibile in sedia a rotelle?',
    'faq.q15': 'Quali metodi di pagamento accettate?',
  },

  en: {
    /* Nav */
    'nav.home':    'Home',
    'nav.team':    'Our Team',
    'nav.treat':   'Treatments',
    'nav.urg':     'Emergency',
    'nav.faq':     'FAQ',
    'nav.contact': 'Contact',
    'nav.book':    'Book',
    /* Cookie */
    'cookie.p':    'We use technical cookies to make this site work. <a href="cookie.html">Cookie policy</a> · <a href="privacy.html">Privacy</a>',
    'cookie.btn':  'Accept',
    /* Index — hero */
    'hero.eyebrow':  'Dental Practice',
    'hero.title':    'The smile you<br><em>deserve</em>,<br>crafted with<br><em>artistry</em>.',
    'hero.sub':      'Three specialists, one personal approach. For over 25 years we have cared for the dental health of families in Savignano and the surrounding area.',
    'hero.cta1':     'Book an appointment',
    'hero.cta2':     'Emergency',
    /* Stats */
    'stat.exp':   'Years of experience',
    'stat.spec':  'Dedicated specialists',
    'stat.serv':  'Specialisations',
    'stat.year':  'Year founded',
    /* Intro */
    'intro.eyebrow': 'About us',
    'intro.title':   'A place where<br><em>care feels like home</em>.',
    'intro.p1':      'Studio Dentistico Rinaldi Montalbano was founded in 1998 by Dr Marcello Rinaldi with a clear vision: to provide high-quality dental care in a welcoming, family environment where every patient is greeted by name.',
    'intro.p2':      'Today, together with Dr Clara Montalbano and Dr Mauro Rinaldi, we form a multidisciplinary team covering every aspect of oral health — from a child\'s first visit to full adult rehabilitation.',
    'intro.cta':     'Meet the team',
    /* Services */
    'svc.eyebrow': 'Our treatments',
    'svc.title':   'Everything you<br><em>need</em>.',
    'svc.lead':    'Nine specialisations under one roof. One team, one quotation.',
    'svc.cta':     'All treatments',
    'svc.01':      'General Dentistry',
    'svc.01.desc': 'Check-ups, cavities, root canals and everything related to everyday dental health.',
    'svc.02':      'Implantology',
    'svc.02.desc': 'Latest-generation dental implants to replace missing teeth in a stable and lasting way.',
    'svc.03':      'Oral Surgery',
    'svc.03.desc': 'Extractions, wisdom teeth, soft tissue surgery and specialised outpatient procedures.',
    'svc.04':      'Dental Prosthetics',
    'svc.04.desc': 'Fixed, removable and implant-supported prosthetics. We rebuild your smile with premium materials.',
    'svc.05':      'Orthodontics',
    'svc.05.desc': 'Fixed and removable braces and clear aligners for children, teens and adults.',
    'svc.06':      'Paediatric Dentistry',
    'svc.06.desc': 'Dental care dedicated to the youngest patients, with a gentle and reassuring approach.',
    'svc.07':      'Dental Hygiene',
    'svc.07.desc': 'Professional cleaning, tartar removal and prevention to keep gums and teeth healthy.',
    'svc.08':      'Digital Impression',
    'svc.08.desc': '3D intraoral scanners for precise, comfortable impressions — no traditional material needed.',
    'svc.09':      'Dental CT Scan',
    'svc.09.desc': 'Computed tomography for precise diagnosis in implantology, surgery and orthodontics.',
    /* Quote */
    'quote.text': '"The mouth is the gateway to health. We take care of <em>that gateway</em>, with respect and precision."',
    'quote.cite': 'Studio Dentistico Rinaldi Montalbano — since 1998',
    /* Team */
    'team.eyebrow': 'The team',
    'team.title':   'Three dentists.<br><em>One vision.</em>',
    'team.cta':     'Read the biographies',
    'team.1.tag':   'Founder · Implantology',
    'team.1.bio':   'Founder of the practice in 1998. Specialist in implantology and oral surgery with over 25 years of experience in the Romagna region.',
    'team.2.tag':   'Orthodontics · Paediatrics',
    'team.2.bio':   'Specialist in fixed and removable orthodontics, with particular focus on young patients and clear aligner treatment.',
    'team.3.tag':   'Prosthetics · Aesthetics',
    'team.3.bio':   'Expert in dental prosthetics and full oral rehabilitation, dedicated to aesthetic and functional smile reconstruction.',
    /* CTA band */
    'cta.title':  'Book your<br><em>first visit</em>.',
    'cta.book':   'Book online',
    'cta.call':   '0541 944339',
    /* Page heroes */
    'ph.team.eyebrow':  'The team',
    'ph.team.h1':       'Three dentists.<br><em>One care.</em>',
    'ph.treat.eyebrow': 'Treatments',
    'ph.treat.h1':      'Nine specialisations.<br><em>One practice.</em>',
    'ph.urg.label':     'Dental emergency? Call now',
    'ph.faq.eyebrow':   'Frequently asked questions',
    'ph.faq.h1':        'The answers you<br><em>need.</em>',
    'ph.contact.eyebrow':'Contact',
    'ph.contact.h1':    'Visit us or<br><em>write to us</em>.',
    'ph.privacy.h1':    'Privacy<br><em>Policy.</em>',
    'ph.cookie.h1':     'Cookie<br><em>Policy.</em>',
    /* chi-siamo.html */
    'team.ph.eyebrow':  'The team',
    'team.ph.h1':       'Three dentists.<br><em>One care.</em>',
    'team.ph.lead':     'Three professionals united by their passion for patient care and continuous professional development.',
    'team.history.eyebrow': 'Our story',
    'team.history.title':   'Since 1998, with the same <em>dedication</em>.',
    'team.history.p1':      'The practice was born from Dr Marcello Rinaldi\'s desire to bring to Savignano sul Rubicone a dental centre combining specialist expertise with human warmth. Over the years, Dr Clara Montalbano and Dr Mauro Rinaldi joined the team, making the practice a true reference point for families in the area.',
    'team.values.eyebrow':  'Our values',
    'team.values.title':    'What guides us <em>every day</em>.',
    'team.v1.title': 'Professionalism',
    'team.v1.desc':  'Continuous training, rigorous protocols and top-quality materials.',
    'team.v2.title': 'Listening',
    'team.v2.desc':  'Every patient has a story. We take the time to understand it before acting.',
    'team.v3.title': 'Continuous learning',
    'team.v3.desc':  'Dentistry evolves every year. We follow courses, conferences and new technologies.',
    'team.v4.title': 'Patient care',
    'team.v4.desc':  'From children to the elderly, every appointment is a moment of trust that we honour.',
    /* trattamenti.html */
    'treat.ph.eyebrow': 'Treatments',
    'treat.ph.h1':      'Nine specialisations.<br><em>One practice.</em>',
    'treat.ph.lead':    'From everyday prevention to full rehabilitation, our team covers every aspect of oral health.',
    'treat.intro.eyebrow': 'Why choose us',
    'treat.cta.title':  'Want to know which treatment is right <em>for you</em>?',
    'treat.cta.sub':    'Book a first consultation. We assess your situation together, no obligation.',
    /* urgenze.html */
    'urg.label':        'Dental emergency? Call now',
    'urg.eyebrow':      'What to do',
    'urg.title':        'Guide to<br><em>dental emergencies</em>.',
    'urg.lead':         'Read the instructions for your situation and contact us immediately. If in doubt, always call the practice.',
    'urg.c1.title':     'Acute toothache',
    'urg.c2.title':     'Broken or chipped tooth',
    'urg.c3.title':     'Swelling of cheek or gum',
    'urg.c4.title':     'Post-operative bleeding',
    'urg.after.title':  'Outside opening hours',
    'urg.cta.title':    'Need help <em>right now</em>?',
    'urg.cta.btn':      'Call: 0541 944339',
    /* domande-frequenti.html */
    'faq.ph.eyebrow':   'Frequently asked questions',
    'faq.ph.h1':        'The answers you<br><em>need.</em>',
    'faq.ph.lead':      'Everything you\'d like to know before visiting the practice.',
    'faq.cat1':         'Visits & treatments',
    'faq.cat2':         'Appointments',
    'faq.cat3':         'Practice & accessibility',
    /* contatti.html */
    'contact.ph.eyebrow':   'Contact',
    'contact.ph.h1':        'Visit us or<br><em>write to us</em>.',
    'contact.ph.lead':      'We are in Savignano sul Rubicone, easily reachable from Cesena, Rimini and the whole Valmarecchia area.',
    'contact.info.title':   'Practical information',
    'contact.form.title':   'Book or write to us',
    'contact.form.nome':    'First name',
    'contact.form.cognome': 'Last name',
    'contact.form.tel':     'Phone',
    'contact.form.motivo':  'Reason for visit',
    'contact.form.msg':     'Message',
    'contact.form.submit':  'Send request',
    'contact.form.success': 'Thank you! We will get back to you as soon as possible.',
    'contact.label.addr':      'Address',
    'contact.label.phone':     'Phone',
    'contact.label.email':     'Email',
    'contact.label.hours':     'Opening hours',
    'contact.label.park':      'Parking',
    'contact.label.access':    'Accessibility',
    'contact.label.transport': 'Public transport',
    'contact.val.park':      'Free parking directly in front of the practice, with ample spaces available.',
    'contact.val.access':    'Barrier-free access for wheelchair users and pushchairs. Internal lift available.',
    'contact.val.transport': 'Bus line Cesena–Rimini, stop at Via Emilia Ovest. The practice is a few minutes\' walk from the stop.',
    'contact.hours.monFri':  'Monday – Friday',
    'contact.hours.sat':     'Saturday',
    'contact.hours.sat.val': 'By appointment',
    'contact.hours.sun':     'Sunday',
    'contact.hours.closed':  'Closed',
    /* urgenze.html — new keys */
    'urg.hours-bar':   '<strong>Hours:</strong> Mon–Fri 9:00–13:00 · 15:00–19:00 · Saturday by appointment &nbsp;|&nbsp; <a href="contatti.html">Book urgent visit →</a>',
    'urg.lead-html':   'Read the instructions for your situation and <strong style="color:var(--deep)">contact us immediately</strong>. If in doubt, always call the practice at <a href="tel:0541944339" style="color:var(--red);font-weight:700">0541 944339</a>.',
    'urg.c1.list':     '<li>Take an over-the-counter painkiller (ibuprofen or paracetamol) as directed.</li><li>Avoid very hot or cold food and drinks.</li><li>Rinse with warm salt water to reduce inflammation.</li><li><strong>Call the practice: 0541 944339</strong> for an urgent appointment.</li><li>Do not apply aspirin directly to the gum.</li>',
    'urg.c2.list':     '<li>Collect the fragment and preserve it in milk or saline solution.</li><li>Rinse your mouth with warm water.</li><li>If bleeding, press with a sterile gauze for 10 minutes.</li><li>Apply ice wrapped in a cloth to the cheek if swollen.</li><li><strong>Call immediately: 0541 944339</strong> — we treat on the same day.</li>',
    'urg.c3.list':     '<li>Apply ice (wrapped in cloth) for 20 minutes, pause 20 minutes.</li><li>Do not apply heat: it can worsen the infection.</li><li>Take a painkiller if necessary.</li><li><strong>Swelling may indicate an abscess: call 0541 944339.</strong></li><li>If you have high fever or difficulty swallowing, go to A&E.</li>',
    'urg.c4.list':     '<li>Bite firmly on a sterile gauze for 20–30 minutes without opening your mouth.</li><li>Sit upright or semi-reclined, not lying flat.</li><li>Avoid rinsing, spitting or using a straw in the first 24h.</li><li>No smoking, alcohol or hot food for 48 hours.</li><li><strong>If it does not stop after 30 minutes: 0541 944339</strong> or go to A&E.</li>',
    'urg.after.intro': 'If the emergency occurs at night, on weekends or during public holidays:',
    'urg.after.list':  '<li><strong>A&E:</strong> Ospedale di Cesena (Via Nazionale 112 — approx. 15 km) for acute pain, major swelling or trauma with injuries.</li><li><strong>Out-of-hours GP (Guardia Medica):</strong> for temporary advice and medication while waiting for the practice to open.</li><li><strong>The next day:</strong> call at 9:00 — <a href="tel:0541944339" style="color:var(--gold-light)">0541 944339</a>.</li>',
    'urg.after.note':  '⚠ In case of breathing difficulty, blocked swallowing or serious trauma: call <strong>112</strong> immediately.',
    /* chi-siamo.html — new keys */
    'team.section.eyebrow': 'The team',
    'team.section.title':   'The professionals<br><em>who care for you.</em>',
    'team.history.p2':      'Over more than twenty-five years the practice has grown, welcoming new specialists and cutting-edge technologies, without ever losing the warmth of a family approach. Every patient is greeted by name, listened to carefully and supported at every stage of their care.',
    'team.history.p3':      'We are deeply rooted in the Romagna region: Savignano sul Rubicone is our home, and the families of this area have been our families for generations.',
    /* trattamenti.html — new keys */
    'treat.list.eyebrow': 'All specialisations',
    'treat.list.title':   'What we do<br><em>for you.</em>',
    'treat.list.lead':    'A personalised care journey, from the first check-up to full rehabilitation. Every treatment is designed around your needs.',
    /* privacy.html / cookie.html */
    'ph.legal.eyebrow': 'Legal notice',
    /* domande-frequenti.html — FAQ questions */
    'faq.q1':  'Does a check-up hurt?',
    'faq.q2':  'How often should I visit the dentist?',
    'faq.q3':  'How much does a first visit cost?',
    'faq.q4':  'Can I come in with acute pain today?',
    'faq.q5':  'Do you treat young children?',
    'faq.q6':  'I\'m afraid of the dentist. What can I do?',
    'faq.q7':  'Is teeth whitening covered by the NHS?',
    'faq.q8':  'What is a digital impression and why is it better?',
    'faq.q9':  'How do I book an appointment?',
    'faq.q10': 'Can I cancel or reschedule an appointment?',
    'faq.q11': 'How long does a check-up usually take?',
    'faq.q12': 'Do you accept new patients?',
    'faq.q13': 'Is there parking?',
    'faq.q14': 'Is the practice wheelchair accessible?',
    'faq.q15': 'Which payment methods do you accept?',
  }
};

/* ── Nav link map (by href) ── */
const NAV_LINKS = {
  'index.html':              { it: 'Home',        en: 'Home' },
  'chi-siamo.html':          { it: 'Chi siamo',   en: 'Our Team' },
  'trattamenti.html':        { it: 'Trattamenti', en: 'Treatments' },
  'urgenze.html':            { it: 'Urgenze',     en: 'Emergency' },
  'domande-frequenti.html':  { it: 'FAQ',         en: 'FAQ' },
  'contatti.html':           { it: 'Contatti',    en: 'Contact' },
};

document.addEventListener('DOMContentLoaded', () => {

  /* ── Nav scroll ── */
  const nav = document.getElementById('main-nav');
  if (nav && !nav.classList.contains('scrolled')) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile nav ── */
  const burger   = document.getElementById('nav-burger');
  const mobNav   = document.getElementById('mob-nav');
  const mobClose = document.getElementById('mob-close');
  const mobOvl   = document.getElementById('mob-overlay');
  const open  = () => { mobNav?.classList.add('is-open'); document.body.style.overflow = 'hidden'; };
  const close = () => { mobNav?.classList.remove('is-open'); document.body.style.overflow = ''; };
  burger?.addEventListener('click', open);
  mobClose?.addEventListener('click', close);
  mobOvl?.addEventListener('click', close);
  document.querySelectorAll('.mob-links a').forEach(a => a.addEventListener('click', close));

  /* ── Lang apply ── */
  function applyLang(l) {
    localStorage.setItem('sdm-lang', l);
    document.documentElement.lang = l === 'it' ? 'it' : 'en';

    /* Toggle active state on lang buttons */
    document.querySelectorAll('[data-lang-btn]').forEach(b =>
      b.classList.toggle('is-active', b.dataset.langBtn === l)
    );

    /* data-i18n (text) */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = T[l]?.[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });

    /* data-i18n-html (innerHTML) */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const v = T[l]?.[el.dataset.i18nHtml];
      if (v !== undefined) el.innerHTML = v;
    });

    /* Nav links by href */
    document.querySelectorAll('.nav-links a, .mob-links a').forEach(a => {
      const href = a.getAttribute('href');
      if (NAV_LINKS[href]) a.textContent = NAV_LINKS[href][l];
    });

    /* "Prenota" / "Book" CTA buttons */
    document.querySelectorAll('.nav-cta-btn').forEach(el => {
      el.textContent = T[l]['nav.book'];
    });

    /* Cookie bar */
    const cpEl = document.getElementById('cookie-p');
    const cbEl = document.getElementById('cookie-ok');
    if (cpEl) cpEl.innerHTML = T[l]['cookie.p'];
    if (cbEl) cbEl.textContent = T[l]['cookie.btn'];
  }

  const lang = localStorage.getItem('sdm-lang') || 'it';
  document.querySelectorAll('[data-lang-btn]').forEach(b =>
    b.addEventListener('click', () => applyLang(b.dataset.langBtn))
  );
  applyLang(lang);

  /* ── FAQ accordion ── */
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q')?.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach(i => i.classList.remove('is-open'));
      if (!isOpen) item.classList.add('is-open');
    });
  });

  /* ── Reveal on scroll ── */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-in');
      else io.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-in'));
  }

  /* ── Cookie bar ── */
  const cookieBar = document.getElementById('cookie-bar');
  if (cookieBar) {
    if (localStorage.getItem('sdm-cookies')) cookieBar.classList.add('is-hidden');
    document.getElementById('cookie-ok')?.addEventListener('click', () => {
      localStorage.setItem('sdm-cookies', '1');
      cookieBar.classList.add('is-hidden');
    });
  }

  /* ── Active nav link ── */
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mob-links a').forEach(a => {
    if (a.getAttribute('href') === current || (current === '' && a.getAttribute('href') === 'index.html'))
      a.style.color = 'var(--gold)';
  });

  /* ── Contact form ── */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const success = document.getElementById('form-success');
      btn.disabled = true;
      const orig = btn.textContent;
      btn.textContent = localStorage.getItem('sdm-lang') === 'en' ? 'Sending…' : 'Invio in corso…';
      await new Promise(r => setTimeout(r, 1200));
      btn.disabled = false;
      btn.textContent = orig;
      form.reset();
      if (success) { success.style.display = 'block'; setTimeout(() => success.style.display = 'none', 6000); }
    });
  }

});
