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
    'hero.title':    'Il sorriso che <em>meriti</em>,<br>curato con <em>arte</em>.',
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
    'contact.cta.title':    'Prenota il tuo appuntamento',
    'contact.cta.text':     'Per prenotare una visita o per qualsiasi domanda, chiamaci negli orari di apertura oppure scrivici un\'email. Ti richiameremo al più presto per fissare la data e l\'ora che preferisci.',
    'contact.cta.hours':    'Lun–Ven 9:00–13:00 / 15:00–19:00 · Sabato su appuntamento',
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
    'hero.title':    'The smile you <em>deserve</em>,<br>crafted with <em>artistry</em>.',
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
    'contact.cta.title':    'Book your appointment',
    'contact.cta.text':     'To book a visit or for any question, call us during opening hours or send us an email. We\'ll get back to you as soon as possible to arrange the date and time that suits you.',
    'contact.cta.hours':    'Mon–Fri 9:00–13:00 / 15:00–19:00 · Saturday by appointment',
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

const STATIC_TEXT_EN = {
  'Prenota appuntamento': 'Book an appointment',
  'Urgenze': 'Emergency',
  'Scopri': 'Discover',
  'Odontoiatria': 'Dentistry',
  'Implantologia': 'Implantology',
  'Chirurgia Orale': 'Oral Surgery',
  'Protesi': 'Prosthetics',
  'Ortodonzia': 'Orthodontics',
  'Pedodonzia': 'Paediatric Dentistry',
  'Igiene': 'Hygiene',
  'Impronta Digitale': 'Digital Impression',
  'TAC Dentale': 'Dental CT Scan',
  'Qualità certificata': 'Certified quality',
  'Nove specializzazioni sotto un unico tetto. Un unico team, un unico preventivo.': 'Nine specialisations under one roof. One team, one quotation.',
  'Tutti i trattamenti': 'All treatments',
  'Prenota una consulenza': 'Book a consultation',
  'Odontoiatria Generale': 'General Dentistry',
  'Visite di controllo, carie, devitalizzazioni e tutto ciò che riguarda la salute dentale quotidiana.': 'Check-ups, cavities, root canals and everything related to everyday dental health.',
  'Impianti dentali di ultima generazione per sostituire denti mancanti in modo stabile e duraturo.': 'Latest-generation dental implants to replace missing teeth in a stable and lasting way.',
  'Estrazioni, denti del giudizio, chirurgia dei tessuti molli e procedure ambulatoriali specializzate.': 'Extractions, wisdom teeth, soft-tissue surgery and specialised outpatient procedures.',
  'Protesi Dentale': 'Dental Prosthetics',
  'Protesi fisse, mobili e su impianti. Ricostruiamo il tuo sorriso con materiali di alta qualità.': 'Fixed, removable and implant-supported prosthetics. We rebuild your smile with high-quality materials.',
  'Apparecchi fissi, rimovibili e allineatori trasparenti per bambini, adolescenti e adulti.': 'Fixed and removable braces and clear aligners for children, teenagers and adults.',
  'Cure dentali dedicate ai più piccoli, con un approccio dolce e rassicurante.': 'Dental care for children, with a gentle and reassuring approach.',
  'Igiene Dentale': 'Dental Hygiene',
  'Pulizia professionale, ablazione del tartaro e prevenzione per gengive e denti sani.': 'Professional cleaning, tartar removal and prevention for healthy gums and teeth.',
  'Scanner intraorali 3D per impronte precise e confortevoli, senza materiale tradizionale.': '3D intraoral scanners for precise, comfortable impressions without traditional impression material.',
  'Tomografia computerizzata per diagnosi precise in implantologia, chirurgia e ortodonzia.': 'Computed tomography for precise diagnosis in implantology, surgery and orthodontics.',
  'Leggi le biografie': 'Read the biographies',
  'Fondatore · Implantologia': 'Founder · Implantology',
  'Fondatore dello studio nel 1998. Specialista in implantologia e chirurgia orale con oltre 25 anni di esperienza nel territorio romagnolo.': 'Founder of the practice in 1998. Specialist in implantology and oral surgery with over 25 years of experience in the Romagna region.',
  'Ortodonzia · Pedodonzia': 'Orthodontics · Paediatric Dentistry',
  'Specialista in ortodonzia fissa e mobile, con particolare attenzione ai pazienti in età evolutiva e al trattamento con allineatori trasparenti.': 'Specialist in fixed and removable orthodontics, with particular attention to young patients and clear aligner treatment.',
  'Protesi · Estetica': 'Prosthetics · Aesthetics',
  'Esperto in protesi dentale e riabilitazione orale completa. Si dedica alla ricostruzione estetica e funzionale del sorriso con materiali all\'avanguardia.': 'Expert in dental prosthetics and full oral rehabilitation. He focuses on aesthetic and functional smile reconstruction using advanced materials.',
  'Navigazione': 'Navigation',
  'Informazioni': 'Information',
  'Orari': 'Opening Hours',
  'Lun–Ven': 'Mon–Fri',
  'Sabato': 'Saturday',
  'Su appuntamento': 'By appointment',
  'Utilizziamo cookie tecnici.': 'We use technical cookies.',
  'Utilizziamo cookie tecnici per il funzionamento del sito.': 'We use technical cookies to make this site work.',
  'Accetta': 'Accept',
  'Da oltre venticinque anni, tre professionisti condividono uno spazio, una filosofia e un obiettivo: prendersi cura della salute orale di ogni paziente come se fosse di famiglia.': 'For over twenty-five years, three professionals have shared one space, one philosophy and one goal: caring for each patient\'s oral health as if they were family.',
  'Nati qui,': 'Born here,',
  'cresciuti con voi.': 'grown with you.',
  'Lo studio nasce nel': 'The practice was founded in',
  'per volontà del Dott. Marcello Rinaldi, con una convinzione semplice e radicata: la salute dentale deve essere cura accessibile, umana e di qualità per tutti.': 'by Dr Marcello Rinaldi, with a simple, deeply held belief: dental health should be accessible, human and high-quality care for everyone.',
  'Fondazione': 'Founded',
  'Anni di attività': 'Years in practice',
  'Specialisti': 'Specialists',
  'Trattamenti': 'Treatments',
  'Fondatore · Implantologia &amp; Chirurgia Orale': 'Founder · Implantology & Oral Surgery',
  'Fondatore · Implantologia & Chirurgia Orale': 'Founder · Implantology & Oral Surgery',
  'Fondatore dello studio nel 1998, il Dott. Marcello Rinaldi è specialista in implantologia e chirurgia orale con oltre venticinque anni di esperienza clinica. Cresciuto e formatosi nel territorio romagnolo, porta in ogni intervento la precisione della specializzazione e il calore di chi conosce i propri pazienti da una vita. È il punto di riferimento per i casi più complessi di chirurgia implantologica, con un approccio diretto, trasparente e sempre orientato al benessere del paziente.': 'Founder of the practice in 1998, Dr Marcello Rinaldi is a specialist in implantology and oral surgery with more than twenty-five years of clinical experience. Raised and trained in the Romagna region, he brings specialist precision and the warmth of someone who has known his patients for a lifetime to every procedure. He is the reference point for the most complex implant surgery cases, with a direct, transparent approach always focused on patient wellbeing.',
  'Ortodonzia · Allineatori · Pedodonzia': 'Orthodontics · Aligners · Paediatric Dentistry',
  'Specialista in ortodonzia fissa e mobile, la Dott.ssa Clara Montalbano si distingue per la competenza con gli allineatori trasparenti e per la cura particolare riservata alla pedodonzia. Il suo approccio gentile e rassicurante la rende il riferimento per i pazienti più giovani e per le famiglie che cercano un dentista capace di mettere a proprio agio anche i bambini più timorosi. Porta avanti la propria formazione con costanza, aggiornandosi sulle tecniche ortodontiche più innovative.': 'A specialist in fixed and removable orthodontics, Dr Clara Montalbano is known for her expertise with clear aligners and her special care in paediatric dentistry. Her gentle, reassuring approach makes her a trusted point of reference for younger patients and for families looking for a dentist who can put even the most anxious children at ease. She continues her professional development consistently, keeping up to date with the most innovative orthodontic techniques.',
  'Protesi · Riabilitazione · Estetica': 'Prosthetics · Rehabilitation · Aesthetics',
  'Il Dott. Mauro Rinaldi è lo specialista dello studio in protesi dentale, riabilitazione orale completa ed estetica del sorriso. Con un occhio attento alle proporzioni e ai dettagli, trasforma sorrisi compromessi in nuove identità utilizzando materiali all\'avanguardia e tecnologie digitali per garantire precisione e durata. La sua passione per l\'estetica dentale si fonde con una solida competenza clinica, rendendo ogni riabilitazione un progetto su misura per il singolo paziente.': 'Dr Mauro Rinaldi is the practice specialist in dental prosthetics, full oral rehabilitation and smile aesthetics. With a careful eye for proportions and detail, he transforms compromised smiles using advanced materials and digital technologies for precision and durability. His passion for dental aesthetics is grounded in solid clinical expertise, making every rehabilitation a bespoke project for the individual patient.',
  'I nostri valori': 'Our values',
  'Quello che ci guida': 'What guides us',
  'ogni giorno.': 'every day.',
  'Professionalità': 'Professionalism',
  'Ogni intervento è eseguito con rigore scientifico, aggiornamento costante e materiali certificati. La qualità non è un optional, è il nostro standard quotidiano.': 'Every procedure is performed with scientific rigour, continuous training and certified materials. Quality is not optional; it is our daily standard.',
  'Ascolto': 'Listening',
  'Prima di agire, ascoltiamo. Ogni paziente porta con sé una storia, delle preoccupazioni e delle aspettative. Il nostro punto di partenza è sempre la persona, non la diagnosi.': 'Before we act, we listen. Every patient brings a story, concerns and expectations. Our starting point is always the person, not the diagnosis.',
  'Aggiornamento continuo': 'Continuous learning',
  'L\'odontoiatria evolve rapidamente. Investiamo in formazione, tecnologie e nuove metodiche per offrire sempre il meglio che la medicina dentale ha da dare.': 'Dentistry evolves quickly. We invest in training, technology and new methods to offer the best that dental medicine can provide.',
  'Cura del paziente': 'Patient care',
  'Non ci fermiamo alla seduta. Seguiamo i nostri pazienti nel tempo, con richiami, controlli preventivi e una presenza costante che va ben oltre il singolo appuntamento.': 'Our care does not stop at the appointment. We follow patients over time with recalls, preventive checks and a consistent presence that goes well beyond a single visit.',
  'Vieni a conoscerci': 'Come and meet us',
  'di persona.': 'in person.',
  'Dall\'odontoiatria generale alla chirurgia implantologica avanzata, tutto ciò di cui la tua salute orale ha bisogno si trova sotto lo stesso tetto, seguito dallo stesso team di fiducia.': 'From general dentistry to advanced implant surgery, everything your oral health needs is under one roof and handled by the same trusted team.',
  'Tutte le specializzazioni': 'All specialisations',
  'Cosa facciamo': 'What we do',
  'per te.': 'for you.',
  'La base di ogni buona salute dentale: visite di controllo periodiche, carie, otturazioni, devitalizzazioni e trattamenti endodontici. Interveniamo tempestivamente per preservare i tuoi denti naturali il più a lungo possibile, prevenendo problematiche maggiori con protocolli di controllo semplici e regolari. Un dente curato in tempo è un dente salvato.': 'The foundation of good dental health: regular check-ups, cavities, fillings, root canals and endodontic treatments. We act promptly to preserve your natural teeth for as long as possible, preventing larger problems with simple, regular check-up protocols. A tooth treated in time is a tooth saved.',
  'Impianti dentali di ultima generazione per sostituire uno o più denti mancanti in modo stabile, duraturo e del tutto naturale. Il Dott. Marcello Rinaldi esegue l\'intervento in day surgery, con tecniche mininvasive e tempi di recupero ridotti. La pianificazione digitale preoperatoria garantisce la massima precisione e sicurezza in ogni fase del trattamento.': 'Latest-generation dental implants to replace one or more missing teeth in a stable, lasting and natural way. Dr Marcello Rinaldi performs the procedure as day surgery, using minimally invasive techniques and reduced recovery times. Digital pre-operative planning ensures maximum precision and safety at every stage of treatment.',
  'Estrazioni complesse, rimozione di denti del giudizio inclusi o semi-inclusi, chirurgia dei tessuti molli e procedure ambulatoriali specializzate. Operiamo in ambiente sterile, con anestesia locale efficace e protocolli post-operatori chiari, per garantire un decorso tranquillo e un rapido ritorno alle attività quotidiane.': 'Complex extractions, removal of impacted or partially impacted wisdom teeth, soft-tissue surgery and specialised outpatient procedures. We work in a sterile environment, with effective local anaesthesia and clear post-operative protocols to support a calm recovery and a quick return to everyday activities.',
  'Protesi fisse su denti naturali o su impianti, protesi mobili totali o parziali, corone e ponti in ceramica o zirconio. Il Dott. Mauro Rinaldi progetta ogni soluzione protesica su misura, curando l\'estetica e la funzione in egual misura, con materiali di alta qualità e un\'attenzione maniacale ai dettagli che fanno la differenza nel risultato finale.': 'Fixed prosthetics on natural teeth or implants, full or partial removable dentures, crowns and bridges in ceramic or zirconia. Dr Mauro Rinaldi designs every prosthetic solution to measure, caring for aesthetics and function equally, with high-quality materials and meticulous attention to the details that make the difference in the final result.',
  'Apparecchi fissi tradizionali, apparecchi rimovibili e allineatori trasparenti per bambini, adolescenti e adulti. La Dott.ssa Clara Montalbano valuta ogni caso individualmente, scegliendo il percorso ortodontico più adeguato all\'età e alle esigenze del paziente. Gli allineatori trasparenti permettono di correggere il morso senza rinunciare all\'estetica durante il trattamento.': 'Traditional fixed braces, removable appliances and clear aligners for children, teenagers and adults. Dr Clara Montalbano assesses each case individually, choosing the orthodontic path best suited to the patient\'s age and needs. Clear aligners make it possible to correct the bite without compromising aesthetics during treatment.',
  'Cure dentali dedicate ai più piccoli, dalla prima visita del neonato alla gestione dei denti da latte e permanenti in fase evolutiva. Il nostro approccio è pensato per ridurre l\'ansia e costruire un rapporto di fiducia duraturo con il piccolo paziente, trasformando ogni visita in un\'esperienza positiva. Interveniamo precocemente per prevenire malocclusioni e carie nei bambini.': 'Dental care for children, from an infant\'s first visit to the management of baby and permanent teeth during development. Our approach is designed to reduce anxiety and build lasting trust with young patients, turning each visit into a positive experience. We intervene early to prevent malocclusions and cavities in children.',
  'Igiene Dentale Professionale': 'Professional Dental Hygiene',
  'Pulizia professionale dei denti, ablazione del tartaro sopra e sotto-gengivale, lucidatura e istruzioni personalizzate per l\'igiene domiciliare. La prevenzione è il modo più efficace e meno costoso per mantenere denti e gengive in salute nel lungo periodo. Consigliamo una seduta ogni sei mesi, o con frequenza adattata alla situazione individuale di ogni paziente.': 'Professional teeth cleaning, tartar removal above and below the gumline, polishing and personalised home-care instructions. Prevention is the most effective and least costly way to keep teeth and gums healthy over time. We recommend a session every six months, or at a frequency tailored to each patient\'s individual situation.',
  'Scanner intraorali 3D di ultima generazione per la rilevazione di impronte digitali precise, rapide e completamente prive del disagio del materiale d\'impronta tradizionale. Il modello digitale viene inviato direttamente al laboratorio, riducendo i tempi di realizzazione di protesi e apparecchi ortodontici e garantendo una precisione millimetrica nei risultati.': 'Latest-generation 3D intraoral scanners capture precise, fast digital impressions without the discomfort of traditional impression material. The digital model is sent directly to the laboratory, reducing the production time for prosthetics and orthodontic appliances and ensuring millimetric precision in the results.',
  'TAC Dentale (CBCT)': 'Dental CT Scan (CBCT)',
  'Tomografia computerizzata cone beam per una diagnostica tridimensionale ad alta risoluzione in ambito implantologico, chirurgico e ortodontico. La TAC dentale permette di pianificare gli impianti con precisione assoluta, visualizzare strutture anatomiche invisibili alla radiografia tradizionale e ridurre al minimo le variabili intraoperatorie per interventi più sicuri e prevedibili.': 'Cone beam computed tomography for high-resolution 3D diagnostics in implantology, surgery and orthodontics. Dental CT allows implants to be planned with absolute precision, anatomical structures invisible on traditional X-rays to be viewed, and intra-operative variables to be minimised for safer, more predictable procedures.',
  '"Ogni bocca racconta una storia diversa. Il nostro compito è': '"Every mouth tells a different story. Our task is to',
  'leggerla con cura': 'read it with care',
  ', trattarla con competenza e restituire un sorriso che duri nel tempo."': ', treat it with expertise and restore a smile that lasts."',
  'Studio Dentistico Rinaldi Montalbano — approccio olistico dal 1998': 'Studio Dentistico Rinaldi Montalbano — holistic approach since 1998',
  'Prenota una visita': 'Book an appointment',
  'di consulenza.': 'consultation.',
  'Studio Dentistico Rinaldi Montalbano · Via Emilia Ovest 45/A, Savignano sul Rubicone': 'Studio Dentistico Rinaldi Montalbano · Via Emilia Ovest 45/A, Savignano sul Rubicone',
  'Orari:': 'Hours:',
  'Lun–Ven 9:00–13:00 · 15:00–19:00 · Sabato su appuntamento &nbsp;|&nbsp;': 'Mon–Fri 9:00–13:00 · 15:00–19:00 · Saturday by appointment &nbsp;|&nbsp;',
  'Prenota visita urgente →': 'Book urgent visit →',
  'contattaci subito': 'contact us immediately',
  'Mal di denti acuto': 'Acute toothache',
  'Dente rotto o scheggiato': 'Broken or chipped tooth',
  'Gonfiore alla guancia o gengiva': 'Swelling of cheek or gum',
  'Sanguinamento post-operatorio': 'Post-operative bleeding',
  'Fuori orario di studio': 'Outside opening hours',
  'Se l\'urgenza avviene di notte, nel weekend o durante le festività:': 'If the emergency happens at night, at the weekend or during public holidays:',
  'Pronto Soccorso:': 'A&E:',
  'Ospedale di Cesena (Via Nazionale 112 — circa 15 km) per dolori acuti, gonfiori importanti o traumi con ferite.': 'Cesena Hospital (Via Nazionale 112 — about 15 km away) for acute pain, major swelling or trauma with wounds.',
  'Guardia Medica:': 'Out-of-hours medical service:',
  'per ricevere indicazioni e farmaci temporanei in attesa dell\'apertura dello studio.': 'for advice and temporary medication while waiting for the practice to open.',
  'Il giorno seguente:': 'The following day:',
  'chiama alle 9:00 —': 'call at 9:00 —',
  '⚠ In caso di difficoltà respiratoria, deglutizione bloccata o trauma grave: chiama immediatamente il': '⚠ In case of breathing difficulty, blocked swallowing or serious trauma: call immediately',
  'Hai bisogno di aiuto': 'Need help',
  'adesso': 'right now',
  'Chiama: 0541 944339': 'Call: 0541 944339',
  'Legale': 'Legal',
  'Domande frequenti': 'Frequently asked questions',
  'Hai dubbi su visite, trattamenti, appuntamenti o accessibilità dello studio? Qui trovi le risposte alle domande che ci vengono poste più spesso. Se non trovi quello che cerchi, chiamaci direttamente.': 'Do you have questions about visits, treatments, appointments or accessibility at the practice? Here are the answers to the questions we are asked most often. If you cannot find what you need, call us directly.',
  'Visite e cure': 'Visits and treatments',
  'Appuntamenti': 'Appointments',
  'Studio e accessibilità': 'Practice and accessibility',
  'Assolutamente no. La visita di controllo è una procedura completamente indolore: il dentista esamina visivamente i denti, le gengive e i tessuti molli della bocca, e se necessario effettua una radiografia. Non vengono utilizzati strumenti che causino dolore. Se nel corso della visita dovessimo rilevare qualcosa che richiede ulteriori approfondimenti, vi spiegheremo con calma cosa è necessario fare e perché, senza fretta.': 'Absolutely not. A check-up is a completely painless procedure: the dentist visually examines the teeth, gums and soft tissues of the mouth and, if necessary, takes an X-ray. No instruments that cause pain are used. If during the visit we find something that requires further investigation, we will calmly explain what needs to be done and why, without rushing.',
  'Per la maggior parte delle persone, una visita di controllo ogni sei mesi è sufficiente per monitorare la salute orale e intercettare eventuali problemi prima che diventino gravi. In alcuni casi — come pazienti con predisposizione alle carie, gengivite o apparecchi ortodontici — potremmo consigliare controlli più frequenti. I bambini andrebbero portati dal dentista già dal secondo anno di vita, per abituarli gradualmente all\'ambiente e per un controllo precoce dello sviluppo dentale.': 'For most people, a check-up every six months is enough to monitor oral health and catch problems before they become serious. In some cases, such as patients prone to cavities, gingivitis or wearing orthodontic appliances, we may recommend more frequent checks. Children should start visiting the dentist from their second year of life, to gradually get used to the environment and allow early monitoring of dental development.',
  'Il costo della prima visita dipende da ciò che comprende: una visita di controllo base, con eventuale radiografia panoramica, ha un costo che vi verrà comunicato al momento della prenotazione. Offriamo sempre un preventivo chiaro e dettagliato prima di iniziare qualsiasi trattamento, così potete valutare con serenità le vostre opzioni. Vi invitiamo a contattarci direttamente per informazioni aggiornate sui costi, poiché possono variare in base alle necessità cliniche specifiche.': 'The cost of a first visit depends on what it includes: a basic check-up, with a possible panoramic X-ray, has a fee that will be communicated when you book. We always provide a clear, detailed quotation before starting any treatment, so you can evaluate your options calmly. Please contact us directly for up-to-date cost information, as prices may vary according to specific clinical needs.',
  'Sì. Le urgenze odontoiatriche sono una priorità per il nostro studio e cerchiamo sempre di trovare spazio in giornata per i pazienti con dolore acuto, ascessi, traumi o rotture improvvise. Chiamate il nostro numero': 'Yes. Dental emergencies are a priority for our practice and we always try to find same-day availability for patients with acute pain, abscesses, trauma or sudden breakages. Call our number',
  'appena possibile: vi illustreremo la situazione e troveremo la soluzione più rapida. Visitate anche la nostra pagina': 'as soon as possible: we will discuss the situation and find the quickest solution. You can also visit our',
  'per ulteriori informazioni su cosa fare fuori dall\'orario di apertura.': 'page for more information on what to do outside opening hours.',
  'Sì, la pedodonzia è una delle nostre specializzazioni. La Dott.ssa Clara Montalbano segue i bambini fin dalla primissima infanzia con un approccio dolce e graduale, pensato per trasformare ogni visita in un\'esperienza positiva. Prima ancora di effettuare qualsiasi trattamento, dedichiamo del tempo a familiarizzare con il bambino, mostrandogli gli strumenti e spiegando tutto con parole semplici. Un bambino che non ha paura del dentista è un adulto con una buona salute orale.': 'Yes, paediatric dentistry is one of our specialisations. Dr Clara Montalbano follows children from early childhood with a gentle, gradual approach designed to make every visit a positive experience. Before carrying out any treatment, we take time to familiarise the child with the practice, showing the instruments and explaining everything in simple words. A child who is not afraid of the dentist becomes an adult with good oral health.',
  'La dentofobia è molto comune e non c\'è nulla di cui vergognarsi: lo sappiamo bene e ne teniamo conto nel modo in cui lavoriamo. Vi chiediamo semplicemente di dircelo apertamente al momento della prenotazione o all\'inizio della visita. Lavoreremo al vostro ritmo, spiegando ogni passo prima di eseguirlo e stabilendo insieme un segnale per fermarci in qualsiasi momento se sentite il bisogno. Un\'esperienza positiva alla volta, molti pazienti ansiosi diventano pazienti sereni nel giro di poche visite.': 'Dental anxiety is very common and nothing to be ashamed of: we know this well and take it into account in the way we work. We simply ask you to tell us openly when booking or at the start of the visit. We will work at your pace, explaining each step before carrying it out and agreeing on a signal to stop at any time if you need to. One positive experience at a time, many anxious patients become calm patients within a few visits.',
  'No, lo sbiancamento dentale è considerato un trattamento estetico e non è incluso nelle prestazioni rimborsabili dal Servizio Sanitario Nazionale. È tuttavia un trattamento sicuro, efficace e non invasivo, eseguito in studio con prodotti professionali che garantiscono risultati visibili e duraturi. Prima di procedere, valutiamo sempre lo stato di salute delle gengive e dello smalto per assicurarci che il trattamento sia adatto a voi.': 'No, teeth whitening is considered an aesthetic treatment and is not included among services reimbursed by the Italian National Health Service. It is, however, a safe, effective and non-invasive treatment carried out in the practice with professional products that deliver visible, lasting results. Before proceeding, we always assess the health of your gums and enamel to make sure the treatment is suitable for you.',
  'L\'impronta digitale viene rilevata con uno scanner intraorale 3D che acquisisce una mappa tridimensionale precisa della vostra dentatura in pochi minuti, senza dover usare il materiale d\'impronta tradizionale in pasta — che molti pazienti trovano scomodo o causa di riflesso faringeo. Il modello digitale è immediato, più preciso e viene inviato direttamente al laboratorio odontotecnico, riducendo i tempi di realizzazione di protesi, corone e apparecchi ortodontici e migliorando la qualità del risultato finale.': 'A digital impression is taken with a 3D intraoral scanner that captures a precise three-dimensional map of your teeth in just a few minutes, without traditional paste impression material, which many patients find uncomfortable or gag-inducing. The digital model is immediate, more precise and sent directly to the dental laboratory, reducing production times for prosthetics, crowns and orthodontic appliances and improving final quality.',
  'Potete prenotare un appuntamento in tre modi: telefonando allo': 'You can book an appointment in three ways: by calling the practice',
  'negli orari di apertura, compilando il modulo sulla nostra': 'during opening hours, by filling in the form on our',
  'pagina Contatti': 'Contact page',
  ', oppure inviando un\'email a': ', or by sending an email to',
  '. Vi risponderemo nel più breve tempo possibile per confermare data e ora che fanno al caso vostro. Anche in fase di prenotazione, non esitate a segnalarci eventuali urgenze o particolari necessità.': '. We will reply as soon as possible to confirm a date and time that suits you. When booking, please also let us know about any emergencies or special needs.',
  'Certo, comprendiamo che gli imprevisti capitano. Vi chiediamo gentilmente di avvisarci con almeno 24 ore di anticipo, in modo da poter offrire lo slot a un altro paziente che ne abbia bisogno. Potete chiamarci al': 'Of course, we understand that unexpected events happen. We kindly ask you to let us know at least 24 hours in advance, so we can offer the slot to another patient who needs it. You can call us on',
  'o inviarci un\'email. In caso di disdetta tardiva ripetuta senza giustificato motivo, potremmo non essere in grado di garantire priorità nella prenotazione successiva.': 'or send us an email. In case of repeated late cancellations without a justified reason, we may not be able to guarantee priority for the next booking.',
  'Una visita di controllo di routine dura in media tra i 20 e i 40 minuti, a seconda di quanto è necessario approfondire e se vengono effettuate radiografie. La prima visita, in cui raccogliamo la vostra anamnesi completa e facciamo una valutazione più dettagliata, può richiedere un po\' più di tempo — tra i 45 minuti e un\'ora. Vi consigliamo di non programmare impegni urgenti immediatamente dopo la visita, così potrete parlare con tranquillità con il dentista.': 'A routine check-up usually lasts between 20 and 40 minutes, depending on how much needs to be assessed and whether X-rays are taken. The first visit, when we collect your full medical history and make a more detailed assessment, may take a little longer, between 45 minutes and one hour. We recommend not scheduling urgent commitments immediately afterwards, so you can speak calmly with the dentist.',
  'Sì, siamo aperti a nuovi pazienti di tutte le età, sia residenti a Savignano sul Rubicone sia provenienti dai comuni limitrofi. Accogliamo famiglie intere con piacere: avere un unico studio di riferimento per tutti i componenti della famiglia semplifica la gestione degli appuntamenti e permette al dentista di conoscere la storia clinica di ogni membro nel dettaglio. Contattateci per fissare la vostra prima visita.': 'Yes, we welcome new patients of all ages, both from Savignano sul Rubicone and from nearby towns. We are happy to care for whole families: having one reference practice for every family member simplifies appointment management and allows the dentist to understand each person\'s clinical history in detail. Contact us to book your first visit.',
  'Sì, lo studio dispone di parcheggio gratuito direttamente di fronte all\'edificio, con ampia disponibilità di posti auto. Siamo ubicati in Via Emilia Ovest 45/A, nella zona Cesare di Savignano sul Rubicone, su un\'arteria stradale facilmente raggiungibile sia da Cesena sia da Rimini. Non avrete difficoltà a trovare parcheggio nemmeno nelle fasce orarie più affollate.': 'Yes, the practice has free parking directly in front of the building, with plenty of spaces available. We are located at Via Emilia Ovest 45/A, in the Cesare area of Savignano sul Rubicone, on a road that is easy to reach from both Cesena and Rimini. You should have no difficulty finding parking even at busier times.',
  'Sì, lo studio è completamente accessibile a persone con disabilità motorie: sono presenti un ingresso privo di barriere architettoniche, un ascensore interno e gli spazi sono progettati per consentire la mobilità in sedia a rotelle o con passeggino. Se avete esigenze particolari legate alla mobilità, vi invitiamo a segnalarcelo al momento della prenotazione in modo che possiamo organizzarci al meglio per accogliervi.': 'Yes, the practice is fully accessible for people with reduced mobility: there is a barrier-free entrance, an internal lift and spaces designed for wheelchair or pushchair movement. If you have specific mobility needs, please tell us when booking so we can organise the best welcome for you.',
  'Accettiamo pagamenti in contanti, con carta di credito o debito (Visa, Mastercard, Bancomat) e tramite bonifico bancario per trattamenti di importo elevato. Per i trattamenti più significativi — come implantologia, ortodonzia o riabilitazioni complete — è possibile concordare un piano di pagamento rateale. Parlateci delle vostre esigenze: cercheremo sempre la soluzione più comoda per voi, perché la salute dentale non dovrebbe essere un ostacolo economico.': 'We accept payment in cash, by credit or debit card (Visa, Mastercard, Bancomat) and by bank transfer for higher-value treatments. For more significant treatments, such as implantology, orthodontics or full rehabilitations, an instalment plan can be agreed. Tell us about your needs: we will always look for the most convenient solution, because dental health should not be an economic obstacle.',
  'Non hai trovato la tua risposta?': 'Didn\'t find your answer?',
  'Parlaci direttamente.': 'Talk to us directly.',
  'Il nostro team è a disposizione per rispondere a qualsiasi domanda, anche prima di decidere se prendere un appuntamento.': 'Our team is available to answer any question, even before you decide whether to book an appointment.',
  'Scrivici': 'Write to us',
  'Siamo a Savignano sul Rubicone, facilmente raggiungibili dalla Via Emilia. Prenota un appuntamento o mandaci un messaggio: ti risponderemo al più presto.': 'We are in Savignano sul Rubicone, easy to reach from Via Emilia. Book an appointment or send us a message: we will reply as soon as possible.',
  'Indirizzo': 'Address',
  'Apri in Google Maps →': 'Open in Google Maps →',
  'Telefono': 'Phone',
  'Orari di apertura': 'Opening hours',
  'Lunedì – Venerdì': 'Monday – Friday',
  'Domenica': 'Sunday',
  'Chiuso': 'Closed',
  'Parcheggio': 'Parking',
  'Accessibilità': 'Accessibility',
  'Mezzi pubblici': 'Public transport',
  'Prenota o scrivi': 'Book or write to us',
  'Nome': 'First name',
  'Cognome': 'Last name',
  'Motivo della visita': 'Reason for visit',
  'Seleziona un motivo…': 'Select a reason…',
  'Visita di controllo': 'Check-up',
  'Urgenza': 'Emergency',
  'Igiene professionale': 'Professional hygiene',
  'Chirurgia orale': 'Oral surgery',
  'Altro': 'Other',
  'Messaggio': 'Message',
  'Ho letto e accetto la': 'I have read and accept the',
  '. Acconsento al trattamento dei miei dati personali per ricevere risposta alla mia richiesta.': '. I consent to the processing of my personal data in order to receive a reply to my request.',
  'Invia richiesta': 'Send request',
  'Grazie! La tua richiesta è stata inviata. Ti contatteremo al più presto per confermare l\'appuntamento.': 'Thank you! Your request has been sent. We will contact you as soon as possible to confirm the appointment.',
  'Informativa legale': 'Legal notice',
  'Ai sensi dell\'art. 13 del Regolamento UE 2016/679 (GDPR), vi forniamo le seguenti informazioni sul trattamento dei vostri dati personali.': 'Pursuant to Article 13 of EU Regulation 2016/679 (GDPR), we provide the following information on the processing of your personal data.',
  '1. Titolare del trattamento': '1. Data controller',
  'Il titolare del trattamento dei dati personali è:': 'The data controller for personal data is:',
  '2. Tipi di dati raccolti': '2. Types of data collected',
  'Attraverso il presente sito web e i canali di contatto dello studio raccogliamo le seguenti categorie di dati personali:': 'Through this website and the practice contact channels, we collect the following categories of personal data:',
  'Dati di identificazione:': 'Identification data:',
  'nome, cognome;': 'first name, last name;',
  'Dati di contatto:': 'Contact data:',
  'indirizzo email, numero di telefono;': 'email address, telephone number;',
  'Dati sanitari (categorie particolari ex art. 9 GDPR):': 'Health data (special categories under Art. 9 GDPR):',
  'informazioni relative allo stato di salute orale, anamnesi medica, diagnosi, piani di trattamento, radiografie e documentazione clinica raccolta nel corso delle visite;': 'information relating to oral health, medical history, diagnoses, treatment plans, X-rays and clinical documentation collected during visits;',
  'Dati di navigazione:': 'Browsing data:',
  'indirizzo IP, tipo di browser, sistema operativo e pagine visitate, raccolti automaticamente in forma anonima o pseudonimizzata dai log del server.': 'IP address, browser type, operating system and visited pages, collected automatically in anonymous or pseudonymised form from server logs.',
  'Non raccogliamo dati sensibili ulteriori rispetto a quelli strettamente necessari per le finalità indicate. Non raccogliamo dati di persone di età inferiore ai 14 anni senza il consenso esplicito dei genitori o tutori legali.': 'We do not collect sensitive data beyond what is strictly necessary for the purposes indicated. We do not collect data from people under 14 years of age without the explicit consent of parents or legal guardians.',
  '3. Finalità e base giuridica del trattamento': '3. Purposes and legal basis of processing',
  '3.1 Gestione delle prenotazioni e dei rapporti clinici': '3.1 Management of bookings and clinical relationships',
  '3.2 Risposta a richieste di contatto': '3.2 Responding to contact requests',
  '3.3 Obblighi di legge': '3.3 Legal obligations',
  '3.4 Legittimo interesse': '3.4 Legitimate interest',
  '4. Modalità del trattamento': '4. Processing methods',
  'Il trattamento è effettuato esclusivamente da personale autorizzato e adeguatamente istruito, vincolato al rispetto della riservatezza dei dati.': 'Processing is carried out exclusively by authorised and adequately trained personnel, bound to respect data confidentiality.',
  '5. Periodo di conservazione': '5. Retention period',
  'dalla data dell\'ultima prestazione, in conformità alle normative sanitarie vigenti (D.Lgs. 196/2003 e successive modifiche, nonché le linee guida del Ministero della Salute). Per i dati relativi alla gestione delle prenotazioni e ai contatti generali non sfociati in un rapporto clinico, il periodo di conservazione è di': 'from the date of the last service, in accordance with current healthcare regulations (Legislative Decree 196/2003 as amended, and the Ministry of Health guidelines). For data relating to booking management and general contacts that do not lead to a clinical relationship, the retention period is',
  'dalla raccolta. I dati di navigazione sono conservati in forma aggregata e anonima.': 'from collection. Browsing data is stored in aggregate and anonymous form.',
  '6. Destinatari e comunicazione dei dati': '6. Recipients and disclosure of data',
  'I vostri dati personali non sono ceduti a terzi a fini commerciali né comunicati a soggetti non autorizzati. Potrebbero essere comunicati nelle seguenti circostanze:': 'Your personal data is not sold to third parties for commercial purposes or disclosed to unauthorised parties. It may be disclosed in the following circumstances:',
  'laboratori odontotecnici': 'dental laboratories',
  'incaricati della realizzazione di protesi o dispositivi su misura, nella misura strettamente necessaria per l\'esecuzione della prestazione;': 'responsible for producing prosthetics or custom devices, to the extent strictly necessary to perform the service;',
  'fornitori di servizi tecnici': 'technical service providers',
  '(es. provider email, hosting del sito) che agiscono come responsabili del trattamento ai sensi dell\'art. 28 GDPR, vincolati da appositi accordi contrattuali;': '(e.g. email provider, website hosting) acting as processors under Art. 28 GDPR and bound by specific contractual agreements;',
  'autorità pubbliche': 'public authorities',
  'nei casi previsti dalla legge (Garante Privacy, Autorità Giudiziaria, Ministero della Salute).': 'in cases provided for by law (Privacy Authority, Judicial Authority, Ministry of Health).',
  'I dati non sono trasferiti verso Paesi terzi al di fuori dell\'Unione Europea, salvo diversa indicazione specifica e con le garanzie previste dalla normativa applicabile.': 'Data is not transferred to third countries outside the European Union unless specifically indicated and with the safeguards required by applicable law.',
  '7. Diritti dell\'interessato': '7. Data subject rights',
  'In qualità di interessato, avete il diritto di esercitare i seguenti diritti nei confronti del titolare del trattamento, ai sensi degli artt. 15–22 del GDPR:': 'As a data subject, you have the right to exercise the following rights against the data controller under Articles 15–22 of the GDPR:',
  'Diritto di accesso (art. 15):': 'Right of access (Art. 15):',
  'ottenere conferma che sia in corso un trattamento di dati che vi riguardano e ottenerne copia;': 'obtain confirmation that data concerning you is being processed and obtain a copy;',
  'Diritto di rettifica (art. 16):': 'Right to rectification (Art. 16):',
  'far correggere dati inesatti o far integrare dati incompleti;': 'have inaccurate data corrected or incomplete data completed;',
  'Diritto alla cancellazione (art. 17):': 'Right to erasure (Art. 17):',
  'richiedere l\'eliminazione dei dati ("diritto all\'oblio"), nei casi previsti dalla normativa;': 'request deletion of data ("right to be forgotten") in the cases provided for by law;',
  'Diritto alla portabilità dei dati (art. 20):': 'Right to data portability (Art. 20):',
  'ricevere i dati forniti in formato strutturato e leggibile da macchina;': 'receive the data provided in a structured, machine-readable format;',
  'Diritto di limitazione del trattamento (art. 18):': 'Right to restriction of processing (Art. 18):',
  'ottenere la limitazione del trattamento in specifiche circostanze;': 'obtain restriction of processing in specific circumstances;',
  'Diritto di opposizione (art. 21):': 'Right to object (Art. 21):',
  'opporsi al trattamento fondato su legittimo interesse, incluso il marketing diretto.': 'object to processing based on legitimate interest, including direct marketing.',
  'Per esercitare questi diritti, è sufficiente inviare una richiesta scritta a': 'To exercise these rights, simply send a written request to',
  'indicando il proprio nome, cognome e la natura della richiesta. Risponderemo entro 30 giorni dalla ricezione, come previsto dal GDPR.': 'indicating your first name, last name and the nature of the request. We will reply within 30 days of receipt, as required by the GDPR.',
  '8. Diritto di reclamo al Garante': '8. Right to lodge a complaint with the Authority',
  '9. Cookie': '9. Cookies',
  '10. Aggiornamenti dell\'informativa': '10. Updates to this notice',
  'gennaio 2025': 'January 2025',
  'Informazioni trasparenti su come utilizziamo i cookie su questo sito, cosa raccolgono e come potete gestirli in qualsiasi momento.': 'Transparent information about how we use cookies on this site, what they collect and how you can manage them at any time.',
  '1. Cosa sono i cookie': '1. What cookies are',
  'I cookie sono piccoli file di testo che i siti web salvano nel vostro browser quando li visitate. Servono a memorizzare informazioni sulla vostra visita — come le preferenze di lingua o lo stato di autenticazione — in modo che non dobbiate reinserirle ogni volta che tornate sul sito. I cookie sono una tecnologia fondamentale per il funzionamento del web moderno.': 'Cookies are small text files that websites save in your browser when you visit them. They store information about your visit, such as language preferences or authentication status, so you do not have to enter it again each time you return to the site. Cookies are a fundamental technology for the modern web.',
  'Esistono diverse categorie di cookie: cookie tecnici (necessari al funzionamento del sito), cookie analitici (per misurare il traffico) e cookie di profilazione (per la pubblicità). Questo sito utilizza esclusivamente cookie tecnici e, sulla sola pagina dei Contatti, cookie di terze parti legati alla mappa incorporata di Google Maps.': 'There are different categories of cookies: technical cookies (necessary for the site to work), analytics cookies (to measure traffic) and profiling cookies (for advertising). This site uses only technical cookies and, only on the Contact page, third-party cookies linked to the embedded Google Maps map.',
  '2. Cookie tecnici utilizzati da questo sito': '2. Technical cookies used by this site',
  'Nome cookie': 'Cookie name',
  'Scopo': 'Purpose',
  'Durata': 'Duration',
  'Memorizza la preferenza di consenso al banner cookie, in modo da non mostrarlo nuovamente nelle visite successive.': 'Stores your cookie banner consent preference so it is not shown again on later visits.',
  '1 anno': '1 year',
  'Memorizza la lingua preferita selezionata dall\'utente (Italiano / English), per mantenere la scelta nelle visite successive.': 'Stores the preferred language selected by the user (Italian / English), to keep the choice on later visits.',
  '3. Cookie di terze parti': '3. Third-party cookies',
  '4. Come gestire i cookie': '4. How to manage cookies',
  'Google Chrome — gestione cookie': 'Google Chrome — cookie management',
  'Mozilla Firefox — gestione cookie': 'Mozilla Firefox — cookie management',
  'Apple Safari — gestione cookie': 'Apple Safari — cookie management',
  'Microsoft Edge — gestione cookie': 'Microsoft Edge — cookie management',
  '5. Consenso': '5. Consent',
  '6. Contatti e aggiornamenti': '6. Contact and updates'
};

Object.assign(STATIC_TEXT_EN, {
  'I dati personali (comprese le informazioni sanitarie) sono trattati per la gestione degli appuntamenti, l\'esecuzione delle prestazioni sanitarie richieste, la tenuta della cartella clinica e il rispetto degli obblighi normativi in ambito sanitario. La base giuridica è l\'esecuzione di un contratto di cui l\'interessato è parte (art. 6, par. 1, lett. b) GDPR) e, per i dati sanitari, il trattamento necessario a fini di medicina preventiva, diagnosi medica, assistenza sanitaria e trattamento terapeutico (art. 9, par. 2, lett. h) GDPR).': 'Personal data, including health information, is processed to manage appointments, provide the requested healthcare services, maintain clinical records and comply with regulatory obligations in healthcare. The legal basis is performance of a contract to which the data subject is party (Art. 6(1)(b) GDPR) and, for health data, processing necessary for preventive medicine, medical diagnosis, healthcare and therapeutic treatment (Art. 9(2)(h) GDPR).',
  'Quando compilate il modulo di contatto sul sito o ci scrivete per email, trattiamo i dati forniti per rispondere alla vostra richiesta. La base giuridica è il consenso dell\'interessato (art. 6, par. 1, lett. a) GDPR) espresso attraverso l\'accettazione dell\'informativa prima dell\'invio del modulo.': 'When you complete the contact form on the site or write to us by email, we process the data provided to respond to your request. The legal basis is the data subject\'s consent (Art. 6(1)(a) GDPR), given by accepting this notice before submitting the form.',
  'Alcuni dati sono trattati per adempiere a obblighi di legge applicabili allo studio medico, quali la normativa fiscale, contabile e sanitaria. La base giuridica è l\'adempimento di un obbligo legale (art. 6, par. 1, lett. c) GDPR).': 'Some data is processed to comply with legal obligations applicable to the medical practice, such as tax, accounting and healthcare regulations. The legal basis is compliance with a legal obligation (Art. 6(1)(c) GDPR).',
  'Potremmo trattare alcuni dati di contatto per l\'invio di comunicazioni relative a richiami periodici o all\'andamento di un trattamento in corso, nell\'interesse legittimo della continuità delle cure (art. 6, par. 1, lett. f) GDPR). Avete sempre la facoltà di opporvi a tale trattamento.': 'We may process some contact data to send communications about periodic recalls or the progress of an ongoing treatment, in the legitimate interest of continuity of care (Art. 6(1)(f) GDPR). You always have the right to object to this processing.',
  'I dati sono trattati sia in formato elettronico — attraverso sistemi informativi adeguatamente protetti — sia in formato cartaceo, conservato in archivi fisici protetti da accesso non autorizzato. Adottiamo misure tecniche e organizzative appropriate per garantire un livello di sicurezza adeguato al rischio, incluse misure di cifratura, controllo degli accessi e procedure di pseudonimizzazione ove applicabili.': 'Data is processed both electronically, through suitably protected information systems, and on paper, stored in physical archives protected from unauthorised access. We adopt appropriate technical and organisational measures to ensure a level of security appropriate to the risk, including encryption, access controls and pseudonymisation procedures where applicable.',
  'I dati sanitari contenuti nella cartella clinica sono conservati per un periodo non inferiore a': 'Health data contained in clinical records is retained for a period of no less than',
  'Se ritenete che il trattamento dei vostri dati personali violi il Regolamento GDPR, avete il diritto di proporre reclamo all\'autorità di controllo competente. In Italia, l\'autorità di controllo è il:': 'If you believe that the processing of your personal data violates the GDPR, you have the right to lodge a complaint with the competent supervisory authority. In Italy, the supervisory authority is:',
  'Garante per la protezione dei dati personali': 'Italian Data Protection Authority',
  'Sito web:': 'Website:',
  'Per le informazioni sull\'utilizzo dei cookie e degli strumenti di tracciamento sul presente sito, si rimanda alla nostra': 'For information on the use of cookies and tracking tools on this site, please refer to our',
  ', disponibile in una pagina dedicata.': ', available on a dedicated page.',
  'La presente informativa può essere aggiornata in qualsiasi momento per riflettere modifiche normative o organizzative. Ogni aggiornamento rilevante sarà comunicato con apposito avviso sul sito. La presente versione è aggiornata a': 'This notice may be updated at any time to reflect regulatory or organisational changes. Any relevant update will be communicated with a notice on the site. This version was updated in',
  'I cookie tecnici sono strettamente necessari per il corretto funzionamento del sito e non richiedono il consenso preventivo dell\'utente ai sensi della normativa vigente. Utilizziamo i seguenti cookie di prima parte:': 'Technical cookies are strictly necessary for the correct operation of the site and do not require the user\'s prior consent under current legislation. We use the following first-party cookies:',
  'Entrambi i cookie sono di prima parte (impostati direttamente da questo sito), non contengono dati personali identificativi e non vengono condivisi con terze parti.': 'Both cookies are first-party cookies, set directly by this site. They do not contain personally identifiable data and are not shared with third parties.',
  'Sulla pagina': 'On the',
  'è incorporata una mappa interattiva di': 'page, an interactive',
  '(Google LLC). Quando caricate quella pagina, Google potrebbe impostare dei propri cookie nel vostro browser per il corretto funzionamento della mappa e, in base alle sue politiche, per finalità di misurazione e personalizzazione. Questi cookie sono gestiti direttamente da Google, su cui non abbiamo controllo.': 'map (Google LLC) is embedded. When you load that page, Google may set its own cookies in your browser for the proper functioning of the map and, according to its policies, for measurement and personalisation purposes. These cookies are managed directly by Google, over which we have no control.',
  'Per informazioni complete sui cookie utilizzati da Google e sulle vostre opzioni, vi invitiamo a consultare la': 'For complete information on the cookies used by Google and your options, please consult the',
  'Informativa sulla privacy di Google': 'Google Privacy Policy',
  'e la': 'and the',
  'pagina dedicata ai cookie di Google': 'Google cookies page',
  'Questo sito non utilizza cookie di profilazione, strumenti di remarketing pubblicitario, pixel di tracciamento o servizi di analisi di terze parti (come Google Analytics). La vostra navigazione non viene profilata a fini commerciali.': 'This site does not use profiling cookies, advertising remarketing tools, tracking pixels or third-party analytics services such as Google Analytics. Your browsing is not profiled for commercial purposes.',
  'Potete controllare, limitare o eliminare i cookie direttamente attraverso le impostazioni del vostro browser. Di seguito trovate i link alle istruzioni dei browser più diffusi:': 'You can control, limit or delete cookies directly through your browser settings. Below are links to instructions for the most common browsers:',
  'Tenete presente che la disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento di alcune funzionalità del sito, come il ricordo delle preferenze linguistiche o la conservazione del vostro consenso al banner cookie.': 'Please note that disabling technical cookies may affect the correct operation of some site functions, such as remembering language preferences or storing your cookie banner consent.',
  'In conformità con il Provvedimento del Garante per la protezione dei dati personali sull\'uso dei cookie (8 maggio 2014) e con le successive linee guida del 2021, il presente sito non richiede il consenso preventivo per i soli cookie tecnici elencati al punto 2. Il banner informativo visibile al primo accesso al sito vi segnala la presenza di cookie tecnici e vi rimanda a questa pagina per i dettagli.': 'In accordance with the Italian Data Protection Authority provision on cookie use (8 May 2014) and the subsequent 2021 guidelines, this site does not require prior consent for the technical cookies listed in section 2 only. The information banner shown on first access informs you of the presence of technical cookies and refers you to this page for details.',
  'Per i cookie di Google Maps (di terze parti), l\'utilizzo del sito e della pagina Contatti implica l\'accettazione delle politiche cookie di Google, come da informativa al punto 3. Se non desiderate che Google imposti cookie attraverso la mappa incorporata, potete accedere alle informazioni sull\'indirizzo dello studio in altri modi (ad esempio ricercando l\'indirizzo direttamente su maps.google.com in una sessione separata) o disabilitare i cookie di terze parti nel vostro browser.': 'For Google Maps cookies (third-party cookies), use of the site and the Contact page implies acceptance of Google\'s cookie policies, as explained in section 3. If you do not want Google to set cookies through the embedded map, you can access the practice address information in other ways, for example by searching the address directly on maps.google.com in a separate session, or disable third-party cookies in your browser.',
  'Per qualsiasi domanda relativa all\'utilizzo dei cookie su questo sito, potete contattarci a': 'For any question about the use of cookies on this site, you can contact us at',
  '. Per informazioni più ampie sul trattamento dei vostri dati personali, consultate la nostra': '. For broader information on the processing of your personal data, please consult our',
  'La presente Cookie Policy può essere aggiornata per riflettere modifiche tecniche al sito o variazioni normative. Ogni modifica rilevante sarà comunicata tramite avviso sul sito. La presente versione è aggiornata a': 'This Cookie Policy may be updated to reflect technical changes to the site or regulatory changes. Any relevant change will be communicated through a notice on the site. This version was updated in'
});

const STATIC_TEXT_IT = Object.fromEntries(Object.entries(STATIC_TEXT_EN).map(([it, en]) => [en, it]));

const STATIC_ATTR_EN = {
  'Chiama': 'Call',
  'Chiama lo studio': 'Call the practice',
  'Mappa Studio Dentistico Rinaldi Montalbano': 'Map of Studio Dentistico Rinaldi Montalbano',
  'Mario': 'John',
  'Rossi': 'Smith',
  '333 1234567': '333 1234567',
  'mario@email.it': 'john@email.com',
  'Descrivi brevemente la tua richiesta o indica la fascia oraria preferita…': 'Briefly describe your request or indicate your preferred time slot…'
};
const STATIC_ATTR_IT = Object.fromEntries(Object.entries(STATIC_ATTR_EN).map(([it, en]) => [en, it]));

const TITLE_EN = {
  'Studio Dentistico Rinaldi Montalbano — Savignano sul Rubicone': 'Rinaldi Montalbano Dental Practice — Savignano sul Rubicone',
  'Chi siamo — Studio Dentistico Rinaldi Montalbano': 'Our Team — Studio Dentistico Rinaldi Montalbano',
  'Trattamenti — Studio Dentistico Rinaldi Montalbano': 'Treatments — Studio Dentistico Rinaldi Montalbano',
  'Urgenze Dentali — Studio Dentistico Rinaldi Montalbano': 'Dental Emergencies — Studio Dentistico Rinaldi Montalbano',
  'Domande Frequenti — Studio Dentistico Rinaldi Montalbano': 'Frequently Asked Questions — Studio Dentistico Rinaldi Montalbano',
  'Contatti — Studio Dentistico Rinaldi Montalbano': 'Contact — Studio Dentistico Rinaldi Montalbano',
  'Privacy Policy — Studio Dentistico Rinaldi Montalbano': 'Privacy Policy — Studio Dentistico Rinaldi Montalbano',
  'Cookie Policy — Studio Dentistico Rinaldi Montalbano': 'Cookie Policy — Studio Dentistico Rinaldi Montalbano'
};
const TITLE_IT = Object.fromEntries(Object.entries(TITLE_EN).map(([it, en]) => [en, it]));

function translateStaticContent(lang) {
  const map = lang === 'en' ? STATIC_TEXT_EN : STATIC_TEXT_IT;
  const attrMap = lang === 'en' ? STATIC_ATTR_EN : STATIC_ATTR_IT;
  const titleMap = lang === 'en' ? TITLE_EN : TITLE_IT;

  if (titleMap[document.title]) document.title = titleMap[document.title];

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE', 'SVG'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    const raw = node.nodeValue;
    const trimmed = raw.replace(/\s+/g, ' ').trim();
    const translated = map[trimmed];
    if (!translated) return;
    const lead = raw.match(/^\s*/)?.[0] || '';
    const trail = raw.match(/\s*$/)?.[0] || '';
    node.nodeValue = `${lead}${translated}${trail}`;
  });

  document.querySelectorAll('[placeholder], [aria-label], [title]').forEach(el => {
    ['placeholder', 'aria-label', 'title'].forEach(attr => {
      const value = el.getAttribute(attr);
      if (value && attrMap[value]) el.setAttribute(attr, attrMap[value]);
    });
  });
}

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

    translateStaticContent(l);
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

  /* Contact form removed — bookings now go via phone/email (see contatti.html). */

});
