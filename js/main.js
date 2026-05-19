/* Studio Dentistico Rinaldi Montalbano — main.js */

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

  /* ── Lang toggle ── */
  const LANGS = {
    it: {
      t: {
        'nav.home':'Home','nav.team':'Chi siamo','nav.treat':'Trattamenti',
        'nav.urg':'Urgenze','nav.faq':'FAQ','nav.contact':'Contatti',
        'hero.sub':'Tre specialisti, un approccio personale. Da oltre 25 anni ci prendiamo cura della salute dentale delle famiglie di Savignano e dintorni.',
        'cookie.p':'Utilizziamo cookie tecnici per il funzionamento del sito.',
        'cookie.btn':'Accetta',
      }
    },
    en: {
      t: {
        'nav.home':'Home','nav.team':'Our Team','nav.treat':'Treatments',
        'nav.urg':'Emergency','nav.faq':'FAQ','nav.contact':'Contact',
        'hero.sub':'Three specialists, one personal approach. For over 25 years we have cared for families in Savignano and the surrounding area.',
        'cookie.p':'We use technical cookies to make the site work.',
        'cookie.btn':'Accept',
      }
    }
  };

  let lang = localStorage.getItem('sdm-lang') || 'it';

  function applyLang(l) {
    lang = l;
    localStorage.setItem('sdm-lang', l);
    document.documentElement.lang = l === 'it' ? 'it' : 'en';
    document.querySelectorAll('[data-lang-btn]').forEach(b => b.classList.toggle('is-active', b.dataset.langBtn === l));
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = LANGS[l]?.t?.[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const v = LANGS[l]?.t?.[el.dataset.i18nHtml];
      if (v !== undefined) el.innerHTML = v;
    });
  }

  document.querySelectorAll('[data-lang-btn]').forEach(b => {
    b.addEventListener('click', () => applyLang(b.dataset.langBtn));
  });
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
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add('is-in');
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
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.style.color = 'var(--gold)';
    }
  });

  /* ── Contact form ── */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const success = document.getElementById('form-success');
      btn.disabled = true;
      btn.textContent = 'Invio in corso…';
      await new Promise(r => setTimeout(r, 1200));
      btn.disabled = false;
      btn.textContent = 'Invia richiesta';
      form.reset();
      if (success) { success.style.display = 'block'; setTimeout(() => success.style.display = 'none', 6000); }
    });
  }

});
