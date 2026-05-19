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
