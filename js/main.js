/* Studio Dentistico Rinaldi Montalbano — main.js */

const LANGS = {
  it: {
    nav: { home:'Home', team:'Chi siamo', trattamenti:'Trattamenti', urgenze:'🚨 Urgenze', faq:'FAQ', contatti:'Contatti' },
    cookie: { text:'Utilizziamo i cookie per migliorare la tua esperienza. Continuando accetti la nostra <a href="cookie.html">cookie policy</a> e <a href="privacy.html">privacy policy</a>.', btn:'Accetta' },
  },
  en: {
    nav: { home:'Home', team:'Our Team', trattamenti:'Treatments', urgenze:'🚨 Emergency', faq:'FAQ', contatti:'Contact' },
    cookie: { text:'We use cookies to improve your experience. By continuing you accept our <a href="cookie.html">cookie policy</a> and <a href="privacy.html">privacy policy</a>.', btn:'Accept' },
  }
};

let lang = localStorage.getItem('sdm-lang') || 'it';

function setLang(l) {
  lang = l;
  localStorage.setItem('sdm-lang', l);
  document.documentElement.lang = l === 'it' ? 'it' : 'en';
  document.querySelectorAll('[data-lang-btn]').forEach(b => b.classList.toggle('is-active', b.dataset.langBtn === l));
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = key.split('.').reduce((o, k) => o?.[k], LANGS[l]);
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    const val = key.split('.').reduce((o, k) => o?.[k], LANGS[l]);
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const val = key.split('.').reduce((o, k) => o?.[k], LANGS[l]);
    if (val !== undefined) el.placeholder = val;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Nav scroll
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile nav
  const burger = document.getElementById('nav-burger');
  const mobNav = document.getElementById('mob-nav');
  if (burger && mobNav) {
    burger.addEventListener('click', () => mobNav.classList.add('is-open'));
    mobNav.addEventListener('click', e => { if (e.target === mobNav) mobNav.classList.remove('is-open'); });
    document.getElementById('mob-close')?.addEventListener('click', () => mobNav.classList.remove('is-open'));
    document.querySelectorAll('.mob-links a').forEach(a => a.addEventListener('click', () => mobNav.classList.remove('is-open')));
  }

  // Lang toggle
  document.querySelectorAll('[data-lang-btn]').forEach(b => {
    b.addEventListener('click', () => setLang(b.dataset.langBtn));
  });
  setLang(lang);

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q')?.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('is-open'));
      if (!isOpen) item.classList.add('is-open');
    });
  });

  // Reveal on scroll
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Cookie bar
  const cookieBar = document.getElementById('cookie-bar');
  if (cookieBar) {
    if (localStorage.getItem('sdm-cookies')) cookieBar.classList.add('is-hidden');
    document.getElementById('cookie-ok')?.addEventListener('click', () => {
      localStorage.setItem('sdm-cookies', '1');
      cookieBar.classList.add('is-hidden');
    });
  }

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mob-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) a.classList.add('is-active');
  });
});
