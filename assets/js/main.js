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
    const cnEl = document.getElementById('cookie-no');
    if (cpEl) cpEl.innerHTML = T[l]['cookie.p'];
    if (cbEl) cbEl.textContent = T[l]['cookie.btn'];
    if (cnEl) cnEl.textContent = T[l]['cookie.reject'];

    translateStaticContent(l);
    renderTeam(l);
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

  /* ── Team carousel ── */
  document.querySelectorAll('.team-carousel').forEach(carousel => {
    const track = carousel.querySelector('.team-track');
    if (!track) return;
    const prev = carousel.querySelector('.team-nav-prev');
    const next = carousel.querySelector('.team-nav-next');

    const stepSize = () => {
      const card = track.querySelector('.team-card');
      const gap = parseFloat(getComputedStyle(track).columnGap) || 32;
      return card ? card.getBoundingClientRect().width + gap : track.clientWidth;
    };

    /* Arrows stay visible at all times; scrollBy is a no-op once at an end. */
    prev?.addEventListener('click', () => track.scrollBy({ left: -stepSize(), behavior: 'smooth' }));
    next?.addEventListener('click', () => track.scrollBy({ left: stepSize(), behavior: 'smooth' }));
  });

  /* ── Cookie consent (opt-in: analytics only after explicit consent) ── */
  const cookieBar = document.getElementById('cookie-bar');
  if (cookieBar) {
    const okBtn = document.getElementById('cookie-ok');
    let noBtn = document.getElementById('cookie-no');
    if (!noBtn && okBtn) {
      noBtn = document.createElement('button');
      noBtn.id = 'cookie-no';
      noBtn.type = 'button';
      noBtn.className = 'btn btn-sm btn-cookie-no';
      noBtn.textContent = (T[lang] && T[lang]['cookie.reject']) || 'Rifiuta';
      okBtn.parentNode.insertBefore(noBtn, okBtn);
    }
    const consent = localStorage.getItem('sdm-consent');
    if (consent) cookieBar.classList.add('is-hidden');
    if (consent === 'accepted') initAnalytics();
    okBtn && okBtn.addEventListener('click', () => {
      localStorage.setItem('sdm-consent', 'accepted');
      cookieBar.classList.add('is-hidden');
      initAnalytics();
    });
    noBtn && noBtn.addEventListener('click', () => {
      localStorage.setItem('sdm-consent', 'rejected');
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

  /* ── Load dynamic team members from Supabase (replaces static cards) ── */
  loadTeam();

  /* ── Hidden admin access via the footer © symbol (like RM Bygg) ── */
  const copyEl = document.querySelector('.footer-bottom span');
  if (copyEl && copyEl.textContent.indexOf('©') !== -1 && !copyEl.querySelector('a')) {
    copyEl.innerHTML = copyEl.innerHTML.replace('©', '<a href="admin.html" class="admin-dot" aria-label="Area riservata">©</a>');
  }

  /* ── WhatsApp float button (number lives in js/config.js) ── */
  const waNum = ((window.SDM_CONFIG && window.SDM_CONFIG.WHATSAPP_NUMBER) || '').replace(/\D/g, '');
  if (waNum && !document.querySelector('.whatsapp-btn')) {
    const wa = document.createElement('a');
    wa.className = 'whatsapp-btn';
    wa.href = 'https://wa.me/' + waNum;
    wa.target = '_blank';
    wa.rel = 'noopener noreferrer';
    wa.setAttribute('aria-label', 'WhatsApp');
    const tip = (T[localStorage.getItem('sdm-lang') || 'it'] || T.it)['wa.tooltip'] || '';
    wa.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg><span class="whatsapp-tooltip" data-i18n="wa.tooltip">' + tip + '</span>';
    document.body.appendChild(wa);
  }

});
