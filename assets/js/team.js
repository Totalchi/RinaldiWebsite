/* ── Dynamic team members (Supabase) ── */
let teamMembers = null;

function sdmEscHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function sdmEscAttr(s) { return sdmEscHtml(s).replace(/"/g, '&quot;'); }

function teamCardHTML(m, lang, bioType) {
  const tag = (lang === 'en' ? m.tag_en : m.tag_it) || '';
  const shortBio = (lang === 'en' ? m.bio_short_en : m.bio_short_it) || '';
  const longBio  = (lang === 'en' ? m.bio_long_en  : m.bio_long_it)  || shortBio;
  const bio = bioType === 'long' ? longBio : shortBio;
  const grad = `linear-gradient(145deg, ${m.gradient_from || '#D8CFC4'} 0%, ${m.gradient_to || '#9E7E3A'} 100%)`;
  const inner = m.photo_url
    ? `<img src="${sdmEscAttr(m.photo_url)}" alt="${sdmEscAttr(m.name)}" loading="lazy">`
    : `<div class="team-photo-bg" data-initials="${sdmEscAttr(m.initials || '')}" style="--accent:${sdmEscAttr(m.gradient_to || '#9E7E3A')}"></div>`;
  return '<div class="team-card reveal is-in">'
    + `<div class="team-photo" style="background:${grad}">${inner}</div>`
    + `<div class="team-tag">${sdmEscHtml(tag)}</div>`
    + `<h3>${sdmEscHtml(m.name)}</h3>`
    + `<p>${sdmEscHtml(bio)}</p>`
    + '</div>';
}

function renderTeam(lang) {
  if (!teamMembers || !teamMembers.length) return;
  document.querySelectorAll('[data-team-list]').forEach(list => {
    const bioType = list.dataset.bio || 'short';
    list.innerHTML = teamMembers.map(m => teamCardHTML(m, lang, bioType)).join('');
    list.dataset.dynamic = '1';
    if (list.closest('.team-carousel')) {
      requestAnimationFrame(() => list.dispatchEvent(new Event('scroll')));
    }
  });
}

async function loadTeam() {
  const cfg = window.SDM_CONFIG;
  if (!cfg || !cfg.SUPABASE_URL) return;
  try {
    const r = await fetch(cfg.SUPABASE_URL + '/rest/v1/team_members?select=*&order=sort_order.asc', {
      headers: { apikey: cfg.SUPABASE_ANON_KEY, Authorization: 'Bearer ' + cfg.SUPABASE_ANON_KEY }
    });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const data = await r.json();
    if (data && data.length) {
      teamMembers = data;
      renderTeam(localStorage.getItem('sdm-lang') || 'it');
    }
  } catch (e) {
    console.warn('[SDM] team load failed, keeping static cards:', e && e.message ? e.message : e);
  }
}

