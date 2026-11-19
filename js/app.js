/* gio.cv · lógica del sitio.
   Todo el contenido viene de data/cv.json; este archivo solo lo dibuja.
   Para cambiar textos, niveles o proyectos, edita data/cv.json. */
(function () {
  'use strict';

  /* ---------- Textos de la interfaz ---------- */
  const UI = {
    es: {
      skip: 'Saltar al contenido',
      'nav.timeline': 'trayectoria', 'nav.projects': 'proyectos', 'nav.cv': 'cv', 'nav.contact': 'contacto',
      'side.title': 'Mi experiencia y habilidades', 'side.sub': 'softwares, equipos, roles',
      'search.ph': '¿Qué habilidades buscas?', 'search.clear': 'Limpiar búsqueda',
      'res.count': n => n === 1 ? '1 resultado' : n + ' resultados',
      'res.empty': 'No encontré eso. Prueba con otra palabra o',
      'res.write': 'escríbeme',
      'sec.timeline': 'trayectoria', 'sec.projects': 'proyectos', 'sec.cv': 'cv', 'sec.contact': 'contacto',
      'f.all': 'Todo', 'f.work': 'Laboral', 'f.edu': 'Académico',
      'tl.work': 'laboral', 'tl.edu': 'académico', present: 'presente',
      more: 'ver más', less: 'ver menos', events: n => 'lugares y eventos (' + n + ')',
      'p.all': 'Todos', 'p.personal': 'Personales',
      'st.done': 'Terminado', 'st.wip': 'En desarrollo', 'st.ongoing': 'En curso',
      'p.view': 'Ver proyecto',
      'cv.title': '¿Necesitas mi CV en PDF?', 'cv.sub': 'Elige la versión que más se acerque a lo que buscas.',
      'cv.other': '¿Buscas otro enfoque?', 'cv.write': 'Escríbeme',
      'c.email': 'correo', 'c.phone': 'whatsapp', 'c.instagram': 'instagram', 'c.linkedin': 'linkedin', 'c.soundcloud': 'soundcloud',
      copy: 'Copiar', copied: 'Copiado', 'phone.show': 'Mostrar número', 'phone.wa': 'Escribir por WhatsApp', 'mail.write': 'Escribir',
      'used.title': 'Dónde lo usé', 'used.none': 'Uso personal y de estudio.',
      'lv.high': 'Avanzado', 'lv.mid': 'Intermedio', 'lv.low': 'Principiante',
      'side.collapse': 'Plegar panel', 'side.expand': 'Expandir panel', fab: 'Habilidades',
      'theme.dark': 'Cambiar a modo oscuro', 'theme.light': 'Cambiar a modo claro',
      'hero.contact': 'Contactar', 'hero.cv': 'CV en PDF', 'hero.tops': '// herramientas fuertes',
      'photo.ph': 'foto 4:5',
      'car.prev': 'Área anterior', 'car.next': 'Área siguiente',
      'f.who': 'quién', 'f.sections': 'secciones', 'f.features': 'funciones', 'f.contact': 'contacto',
      'f.search': 'Buscar habilidades', 'f.pdf': 'Descargar CV en PDF', 'f.lang': 'Cambiar idioma', 'f.theme': 'Modo claro / oscuro',
      'f.skills': 'habilidades', updated: 'Última actualización',
      back: '← proyectos', 'p.role': 'rol', 'p.year': 'año', 'p.status': 'estado',
      'l.repo': 'Repositorio', 'l.site': 'Ver sitio', 'l.video': 'Ver video', 'l.instagram': 'Instagram', 'l.doc': 'Dossier (PDF)',
      soon: 'Imágenes y material de referencia: pronto.', notfound: 'No encontré ese proyecto.',
      close: 'Cerrar', months: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
    },
    en: {
      skip: 'Skip to content',
      'nav.timeline': 'experience', 'nav.projects': 'projects', 'nav.cv': 'cv', 'nav.contact': 'contact',
      'side.title': 'My experience & skills', 'side.sub': 'software, gear, roles',
      'search.ph': 'What skills are you looking for?', 'search.clear': 'Clear search',
      'res.count': n => n === 1 ? '1 result' : n + ' results',
      'res.empty': "Couldn't find that. Try another word or",
      'res.write': 'write to me',
      'sec.timeline': 'experience', 'sec.projects': 'projects', 'sec.cv': 'cv', 'sec.contact': 'contact',
      'f.all': 'All', 'f.work': 'Work', 'f.edu': 'Education',
      'tl.work': 'work', 'tl.edu': 'education', present: 'present',
      more: 'show more', less: 'show less', events: n => 'venues & events (' + n + ')',
      'p.all': 'All', 'p.personal': 'Personal',
      'st.done': 'Finished', 'st.wip': 'In progress', 'st.ongoing': 'Ongoing',
      'p.view': 'View project',
      'cv.title': 'Need my CV as a PDF?', 'cv.sub': 'Pick the version closest to what you need.',
      'cv.other': 'Looking for a different focus?', 'cv.write': 'Write to me',
      'c.email': 'email', 'c.phone': 'whatsapp', 'c.instagram': 'instagram', 'c.linkedin': 'linkedin', 'c.soundcloud': 'soundcloud',
      copy: 'Copy', copied: 'Copied', 'phone.show': 'Show number', 'phone.wa': 'Message on WhatsApp', 'mail.write': 'Write',
      'used.title': 'Where I used it', 'used.none': 'Personal use and studies.',
      'lv.high': 'Advanced', 'lv.mid': 'Intermediate', 'lv.low': 'Beginner',
      'side.collapse': 'Collapse panel', 'side.expand': 'Expand panel', fab: 'Skills',
      'theme.dark': 'Switch to dark mode', 'theme.light': 'Switch to light mode',
      'hero.contact': 'Contact me', 'hero.cv': 'PDF CV', 'hero.tops': '// strongest tools',
      'photo.ph': 'photo 4:5',
      'car.prev': 'Previous area', 'car.next': 'Next area',
      'f.who': 'who', 'f.sections': 'sections', 'f.features': 'features', 'f.contact': 'contact',
      'f.search': 'Search skills', 'f.pdf': 'Download PDF CV', 'f.lang': 'Change language', 'f.theme': 'Light / dark mode',
      'f.skills': 'skills', updated: 'Last updated',
      back: '← projects', 'p.role': 'role', 'p.year': 'year', 'p.status': 'status',
      'l.repo': 'Repository', 'l.site': 'Visit site', 'l.video': 'Watch video', 'l.instagram': 'Instagram', 'l.doc': 'Deck (PDF)',
      soon: 'Images and reference material: coming soon.', notfound: "Couldn't find that project.",
      close: 'Close', months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  };

  /* ---------- Estado ---------- */
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* sin almacenamiento */ } }
  };
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const page = document.body.dataset.page;
  let D = null;
  let lang = store.get('gio-lang') || ((navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en');
  if (!UI[lang]) lang = 'es';
  const S = { tl: 'all', pr: 'all', q: '', areas: new Set(), car: 0, carTimer: null, carPaused: false };

  const t = (k, ...a) => { const v = UI[lang][k]; return typeof v === 'function' ? v(...a) : (v == null ? k : v); };
  const L = o => o == null ? '' : (typeof o === 'string' ? o : (o[lang] != null ? o[lang] : o.es));
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  /* ---------- Niveles ---------- */
  function lvl(n) {
    if (n == null) return { label: '', cls: '' };
    if (n >= 70) return { label: t('lv.high'), cls: '' };
    if (n >= 40) return { label: t('lv.mid'), cls: 'mid' };
    return { label: t('lv.low'), cls: 'low' };
  }
  function bar(n) {
    if (n == null) return '';
    const f = Math.round(n / 10); let h = '';
    for (let i = 0; i < 10; i++) h += '<i' + (i < f ? ' class="f"' : '') + '></i>';
    return '<span class="bar" aria-hidden="true">' + h + '</span>';
  }
  function skillRow(s, isRole) {
    const name = L(s.name);
    if (isRole) {
      return '<button type="button" class="skill" data-role="' + s.id + '"><span class="skill-top"><span>' + esc(name) + '</span><span class="lvl">' + esc(L(s.years)) + '</span></span></button>';
    }
    const v = lvl(s.level);
    const note = s.note ? ' <small>· ' + esc(L(s.note)) + '</small>' : '';
    return '<button type="button" class="skill" data-skill="' + s.id + '" aria-label="' + esc(name + (v.label ? ': ' + v.label : '')) + '">' +
      '<span class="skill-top"><span>' + esc(name) + note + '</span><span class="lvl ' + v.cls + '">' + esc(v.label) + '</span></span>' + bar(s.level) + '</button>';
  }

  /* ---------- Fechas y referencias ---------- */
  function fmt(ym) { if (!ym) return t('present'); const [y, m] = ym.split('-'); return t('months')[+m - 1] + ' ' + y; }
  function range(e) { return fmt(e.from) + ' – ' + (e.toLabel ? L(e.toLabel) : fmt(e.to)); }
  function ref(id) {
    const e = D.timeline.find(x => x.id === id);
    if (e) return { label: e.org + ' · ' + range(e), href: (page === 'home' ? '' : './') + '#tl-' + id };
    const p = D.projects.find(x => x.id === id);
    if (p) return { label: L(p.title) + ' (' + p.year + ')', href: 'proyecto.html?p=' + id };
    return null;
  }
  const skillById = id => D.skills.find(s => s.id === id);

  /* ---------- Tema ---------- */
  function currentTheme() {
    const set = document.documentElement.dataset.theme;
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function paintThemeBtn() {
    const b = $('#themeBtn'); if (!b) return;
    const dark = currentTheme() === 'dark';
    b.textContent = dark ? '☀' : '☾';
    b.setAttribute('aria-label', dark ? t('theme.light') : t('theme.dark'));
    b.title = b.getAttribute('aria-label');
  }
  function initTheme() {
    const b = $('#themeBtn'); if (!b) return;
    b.addEventListener('click', () => {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next; store.set('gio-theme', next); paintThemeBtn();
    });
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', paintThemeBtn);
  }

  /* ---------- Idioma ---------- */
  function initLang() {
    const btn = $('#langBtn'), menu = $('#langMenu');
    if (!btn) return;
    const close = () => { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); };
    btn.addEventListener('click', e => { e.stopPropagation(); const o = menu.hidden; menu.hidden = !o; btn.setAttribute('aria-expanded', String(o)); if (o) menu.querySelector('[aria-checked="true"]')?.focus(); });
    $$('button', menu).forEach(b => b.addEventListener('click', () => { setLang(b.dataset.lang); close(); btn.focus(); }));
    document.addEventListener('click', e => { if (!menu.hidden && !menu.contains(e.target)) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { close(); btn.focus(); } });
  }
  function setLang(l) {
    if (!UI[l]) return;
    lang = l; store.set('gio-lang', l);
    renderAll();
  }
  function applyStatic() {
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('#langMenu button').forEach(b => b.setAttribute('aria-checked', String(b.dataset.lang === lang)));
    const q = $('#q'); if (q) { q.placeholder = t('search.ph'); }
    const qc = $('#qClear'); if (qc) qc.setAttribute('aria-label', t('search.clear'));
    paintThemeBtn();
  }

  /* ---------- Menú en celular ---------- */
  function initMenu() {
    const b = $('#menuBtn'), links = $('#navLinks'); if (!b) return;
    b.addEventListener('click', () => { const o = links.classList.toggle('open'); b.setAttribute('aria-expanded', String(o)); });
    $$('a', links).forEach(a => a.addEventListener('click', () => { links.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); }));
  }
  function initActiveNav() {
    if (page !== 'home' || !('IntersectionObserver' in window)) return;
    const map = {}; $$('#navLinks a').forEach(a => { map[a.getAttribute('href').slice(1)] = a; });
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { $$('#navLinks a').forEach(a => a.classList.remove('on')); map[en.target.id]?.classList.add('on'); } });
    }, { rootMargin: '-40% 0px -55% 0px' });
    ['trayectoria', 'proyectos', 'cv', 'contacto'].forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });
  }

  /* ---------- Portada ---------- */
  function renderHero() {
    const p = D.profile;
    const photo = p.photo
      ? '<div class="photo has-img"><img src="' + esc(p.photo) + '" alt="' + esc(p.fullName) + '"></div>'
      : '<div class="photo" role="img" aria-label="' + esc(t('photo.ph')) + '">' + esc(t('photo.ph')) + '</div>';
    const tops = D.skills.filter(s => s.top).map(s => '<button type="button" class="chip" data-skill="' + s.id + '">' + esc(L(s.name)) + '</button>').join('');
    $('#hero').innerHTML = photo +
      '<div class="who">' +
      '<h1 class="gio">' + esc(p.name) + '</h1>' +
      '<span class="say">' + esc(L(p.say)).replace(/&quot;/g, '<b>"</b>') + ' · ' + esc(p.ipa) + '</span>' +
      '<span class="full">' + esc(p.fullName) + '</span>' +
      '<p class="tagline">' + esc(L(p.tagline)) + '</p>' +
      '<p class="summary">' + esc(L(p.summary)) + '<span class="cur blink" aria-hidden="true" style="display:inline-block;width:2px;height:1em;background:var(--blue);margin-left:3px;vertical-align:-2px"></span></p>' +
      '<div class="facts">' + p.facts.map(f => '<span class="fact">' + esc(L(f)) + '</span>').join('') + '</div>' +
      '<p class="tops-l">' + esc(t('hero.tops')) + '</p><div class="tops">' + tops + '</div>' +
      (p.pitch ? '<div class="pitch-s"><p><b>' + esc(L(p.pitch.title)) + '</b> ' + esc(L(p.pitch.short)) + '</p></div>' : '') +
      '<div class="ctas"><a class="btn primary" href="#contacto">' + esc(p.pitch ? L(p.pitch.cta) : t('hero.contact')) + ' →</a><a class="btn" href="#cv">' + esc(t('hero.cv')) + '</a></div>' +
      '</div>';
  }

  /* ---------- Trayectoria ---------- */
  function renderTimeline() {
    const f = $('#tlFilter');
    f.setAttribute('aria-label', t('sec.timeline'));
    f.innerHTML = [['all', 'f.all'], ['work', 'f.work'], ['edu', 'f.edu']].map(([k, l]) =>
      '<button type="button" class="chip" data-f="' + k + '" aria-pressed="' + (S.tl === k) + '">' + esc(t(l)) + '</button>').join('');
    $$('button', f).forEach(b => b.addEventListener('click', () => { S.tl = b.dataset.f; renderTimeline(); }));

    const items = D.timeline.filter(e => S.tl === 'all' || e.type === S.tl)
      .sort((a, b) => b.from.localeCompare(a.from));
    $('#timeline').innerHTML = items.map(e => {
      const bl = L(e.bullets) || [];
      const first = bl.slice(0, 2), rest = bl.slice(2);
      const ev = e.events && e.events.length
        ? '<details class="events"><summary>' + esc(t('events', e.events.length)) + '</summary><ul>' + e.events.map(x => '<li>' + esc(x.name) + ' <small>· ' + esc(x.place) + '</small></li>').join('') + '</ul></details>' : '';
      const tags = (e.skills || []).map(id => { const s = skillById(id); return s ? '<button type="button" class="chip" data-skill="' + id + '">' + esc(L(s.name)) + '</button>' : ''; }).join('');
      return '<li class="tl-item ' + e.type + '" id="tl-' + e.id + '">' +
        '<span class="tl-type"><b>//</b> ' + esc(t(e.type === 'edu' ? 'tl.edu' : 'tl.work')) + '</span>' +
        '<h3 class="tl-role">' + esc(L(e.role)) + '</h3>' +
        '<div class="meta"><span class="org">' + esc(e.org) + (e.orgNote ? ' <span class="muted">· ' + esc(L(e.orgNote)) + '</span>' : '') + '</span>' +
        '<span><b>' + (lang === 'es' ? 'lugar' : 'where') + ':</b> ' + esc(L(e.place)) + '</span>' +
        '<span><b>' + (lang === 'es' ? 'fechas' : 'dates') + ':</b> ' + esc(range(e)) + '</span></div>' +
        '<ul>' + first.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>' +
        (rest.length ? '<ul class="rest" hidden>' + rest.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul><button type="button" class="more-btn" aria-expanded="false">' + esc(t('more')) + ' ▾</button>' : '') +
        ev + (tags ? '<div class="tags">' + tags + '</div>' : '') + '</li>';
    }).join('');
    $$('#timeline .more-btn').forEach(b => b.addEventListener('click', () => {
      const r = b.previousElementSibling; const o = r.hidden; r.hidden = !o;
      b.setAttribute('aria-expanded', String(o)); b.textContent = t(o ? 'less' : 'more') + (o ? ' ▴' : ' ▾');
    }));
  }

  /* ---------- Proyectos ---------- */
  function statusChip(p) { return '<span class="status ' + p.status + '">' + esc(t('st.' + p.status)) + '</span>'; }
  function renderProjects() {
    const f = $('#prFilter');
    f.setAttribute('aria-label', t('sec.projects'));
    const g = D.projectGroups;
    let h = '<button type="button" class="chip" data-f="all" aria-pressed="' + (S.pr === 'all') + '">' + esc(t('p.all')) + '</button>';
    g.forEach((x, i) => {
      if (x.parent && (i === 0 || !g[i - 1].parent)) h += '<span class="sep">' + esc(L(x.parent)) + ' →</span>';
      h += '<button type="button" class="chip" data-f="' + x.id + '" aria-pressed="' + (S.pr === x.id) + '">' + esc(L(x)) + '</button>';
    });
    f.innerHTML = h;
    $$('button', f).forEach(b => b.addEventListener('click', () => { S.pr = b.dataset.f; renderProjects(); }));
    const list = D.projects.filter(p => S.pr === 'all' || p.group === S.pr);
    $('#projects').innerHTML = list.map(p => {
      const groupName = L(g.find(x => x.id === p.group));
      const cover = p.cover ? '<div class="cover"><img src="' + esc(p.cover) + '" alt="" loading="lazy"></div>' : '<div class="cover" aria-hidden="true">{ ' + esc(L(p.title)) + ' }</div>';
      return '<article class="card">' + cover + '<div class="card-b">' +
        '<div class="card-m"><span>' + esc(groupName) + ' · ' + esc(p.year) + '</span>' + statusChip(p) + '</div>' +
        '<h3 class="card-t"><a href="proyecto.html?p=' + p.id + '">' + esc(L(p.title)) + '</a></h3>' +
        '<p>' + esc(L(p.abstract)) + '</p>' +
        '<a class="btn" href="proyecto.html?p=' + p.id + '">' + esc(t('p.view')) + ' →</a></div></article>';
    }).join('');
  }

  /* ---------- CV en PDF ---------- */
  function renderPdfs() {
    $('#pdfs').innerHTML = D.cvVersions.map(v =>
      '<div class="pdf"><h3>' + esc(L(v)) + '</h3><p>' + esc(L(v.focus)) + '</p><div class="pdf-btns">' +
      '<a class="btn" href="pdf/gio-cv-' + v.id + '-es.pdf" target="_blank" rel="noopener">↓ Español</a>' +
      '<a class="btn" href="pdf/gio-cv-' + v.id + '-en.pdf" target="_blank" rel="noopener">↓ English</a></div></div>').join('');
  }

  /* ---------- Contacto ---------- */
  function phoneText() { return D.meta.phone.join(' '); }
  function waLink() { return 'https://wa.me/' + D.meta.phone.join('').replace(/\D/g, ''); }
  function contactRows(compact) {
    const m = D.meta;
    const rows = [];
    rows.push(['c.email', '<span class="mail">' + esc(m.email) + '</span>' + (compact ? '' : ' <button type="button" class="btn" data-copy="' + esc(m.email) + '">' + esc(t('copy')) + '</button> <a class="btn" href="mailto:' + esc(m.email) + '">' + esc(t('mail.write')) + '</a>')]);
    rows.push(['c.phone', '<button type="button" class="' + (compact ? 'linkbtn' : 'btn') + '" data-phone>' + esc(t('phone.show')) + '</button>']);
    ['instagram', 'linkedin', 'soundcloud'].forEach(k => {
      const l = m.links[k]; if (l) rows.push(['c.' + k, '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>']);
    });
    return rows;
  }
  function renderContact() {
    const pi = D.profile.pitch;
    $('#availability').innerHTML = (pi ? '<span class="pitch-t">' + esc(L(pi.title)) + '</span>' + L(pi.body).map(x => '<span class="pitch-p">' + esc(x) + '</span>').join('') : '') +
      '<span class="pitch-a">' + esc(L(D.profile.availability)) + '</span>';
    $('#contact').innerHTML = contactRows(false).map(([k, v]) => '<dt>' + esc(t(k)) + '</dt><dd>' + v + '</dd>').join('');
  }
  function initContactActions() {
    document.addEventListener('click', e => {
      const c = e.target.closest('[data-copy]');
      if (c) {
        const txt = c.dataset.copy;
        const done = () => { c.textContent = t('copied'); setTimeout(() => { c.textContent = t('copy'); }, 1600); };
        if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done, () => {}); else done();
      }
      const ph = e.target.closest('[data-phone]');
      if (ph) {
        const span = document.createElement('span');
        span.innerHTML = '<span class="mono">' + esc(phoneText()) + '</span> <a class="' + (ph.classList.contains('btn') ? 'btn' : '') + '" href="' + waLink() + '" target="_blank" rel="noopener">' + esc(t('phone.wa')) + '</a>';
        ph.replaceWith(span);
      }
    });
  }

  /* ---------- Pie de página ---------- */
  function renderFooter() {
    const p = D.profile, home = page === 'home' ? '' : './';
    const sec = [['#trayectoria', 'nav.timeline'], ['#proyectos', 'nav.projects'], ['#cv', 'nav.cv'], ['#contacto', 'nav.contact']];
    $('#footer').innerHTML = '<div class="foot-in">' +
      '<div><h3>// ' + esc(t('f.who')) + '</h3><p class="big">' + esc(p.name) + '</p><p>' + esc(p.fullName) + '</p><p class="muted">' + esc(L(p.say)) + '</p><p class="muted">' + esc(L(p.facts[0])) + '</p></div>' +
      '<div><h3>// ' + esc(t('f.sections')) + '</h3><ul>' + sec.map(([h, k]) => '<li><a href="' + home + h + '">' + esc(t(k)) + '</a></li>').join('') + '</ul></div>' +
      '<div><h3>// ' + esc(t('f.features')) + '</h3><ul>' +
      '<li><button type="button" class="linkbtn" data-open-skills>' + esc(t('f.search')) + '</button></li>' +
      '<li><a href="' + home + '#cv">' + esc(t('f.pdf')) + '</a></li>' +
      '<li><button type="button" class="linkbtn" data-open-lang>' + esc(t('f.lang')) + '</button></li>' +
      '<li><button type="button" class="linkbtn" data-toggle-theme>' + esc(t('f.theme')) + '</button></li></ul></div>' +
      '<div><h3>// ' + esc(t('f.contact')) + '</h3><ul>' + contactRows(true).map(([k, v]) => '<li><span class="muted mono small">' + esc(t(k)) + ':</span> ' + v + '</li>').join('') + '</ul></div>' +
      '</div><div class="foot-bottom">' + esc(t('updated')) + ': ' + esc(fmt(D.meta.updated)) + ' · © ' + new Date().getFullYear() + ' ' + esc(p.fullName) + '</div>';
    $('[data-open-lang]', $('#footer'))?.addEventListener('click', e => { e.stopPropagation(); window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }); $('#langBtn').click(); });
    $('[data-toggle-theme]', $('#footer'))?.addEventListener('click', () => $('#themeBtn').click());
    $('[data-open-skills]', $('#footer'))?.addEventListener('click', () => {
      if (page !== 'home') { location.href = './#habilidades'; return; }
      openSkills(); setTimeout(() => $('#q').focus(), 50);
    });
  }

  /* ---------- Panel lateral ---------- */
  const isMobile = () => window.matchMedia('(max-width: 1023px)').matches;
  function openSkills() {
    const layout = $('.layout');
    if (isMobile()) {
      $('#side').classList.add('open'); $('#scrim').hidden = false; $('#fab').setAttribute('aria-expanded', 'true');
    } else if (layout.classList.contains('collapsed')) { toggleCollapse(); }
  }
  function closeSheet() {
    $('#side').classList.remove('open'); $('#scrim').hidden = true; $('#fab').setAttribute('aria-expanded', 'false');
  }
  function toggleCollapse() {
    const layout = $('.layout'); const c = layout.classList.toggle('collapsed');
    const b = $('#sideToggle'); b.textContent = c ? '»' : '«';
    b.setAttribute('aria-expanded', String(!c)); b.setAttribute('aria-label', t(c ? 'side.expand' : 'side.collapse'));
    store.set('gio-side', c ? 'collapsed' : 'open');
    updateGutter();
  }
  function initSide() {
    $('#sideToggle').addEventListener('click', toggleCollapse);
    if (store.get('gio-side') === 'collapsed' && !isMobile()) toggleCollapse();
    $('#fab').addEventListener('click', () => { openSkills(); });
    $('#scrim').addEventListener('click', closeSheet);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && $('#side').classList.contains('open')) { closeSheet(); $('#fab').focus(); } });
    const q = $('#q'), areas = $('#areas'), label = $('.search');
    q.addEventListener('focus', () => { areas.hidden = false; });
    q.addEventListener('input', () => { S.q = q.value; label.classList.toggle('has-text', !!q.value); runSearch(); });
    $('#qClear').addEventListener('click', () => { q.value = ''; S.q = ''; S.areas.clear(); label.classList.remove('has-text'); renderAreas(); runSearch(); q.focus(); });
    if (location.hash === '#habilidades') { openSkills(); setTimeout(() => q.focus(), 100); }
  }
  function renderAreas() {
    $('#areas').innerHTML = D.areas.map(a => '<button type="button" class="chip" data-area="' + a.id + '" aria-pressed="' + S.areas.has(a.id) + '">' + esc(L(a)) + '</button>').join('');
    $$('#areas .chip').forEach(b => b.addEventListener('click', () => {
      const id = b.dataset.area; S.areas.has(id) ? S.areas.delete(id) : S.areas.add(id);
      b.setAttribute('aria-pressed', String(S.areas.has(id))); runSearch();
    }));
  }
  function haystack(s) {
    const parts = [];
    if (typeof s.name === 'string') parts.push(s.name); else parts.push(s.name.es, s.name.en);
    if (s.tags) { if (Array.isArray(s.tags)) parts.push(...s.tags); else parts.push(...(s.tags.es || []), ...(s.tags.en || [])); }
    (s.areas || []).forEach(id => { const a = D.areas.find(x => x.id === id); if (a) parts.push(a.es, a.en); });
    if (s.note) parts.push(s.note.es, s.note.en);
    return norm(parts.join(' | '));
  }
  function runSearch() {
    const active = S.q.trim() || S.areas.size;
    $('#qClear').hidden = !active;
    $('#results').hidden = !active; $('#carousel').hidden = !!active;
    if (!active) { startCarousel(); return; }
    stopCarousel();
    const words = norm(S.q.trim()).split(/\s+/).filter(Boolean);
    const match = s => (!S.areas.size || (s.areas || []).some(a => S.areas.has(a))) && words.every(w => haystack(s).includes(w));
    const skills = D.skills.filter(match).sort((a, b) => (b.level || 0) - (a.level || 0));
    const roles = words.length ? D.roles.filter(r => words.every(w => norm(r.name.es + ' ' + r.name.en + ' ' + r.tags.join(' ')).includes(w))) : [];
    const n = skills.length + roles.length;
    $('#results').innerHTML = '<p class="res-count">' + esc(t('res.count', n)) + '</p>' +
      (n ? skills.map(s => skillRow(s)).join('') + roles.map(r => skillRow(r, true)).join('')
        : '<p class="empty">' + esc(t('res.empty')) + ' <a href="#contacto">' + esc(t('res.write')) + '</a>.</p>');
  }

  /* ---------- Carrusel ---------- */
  function carGroup(i) {
    const g = D.carousel[i];
    const items = g.roles ? D.roles.map(r => skillRow(r, true))
      : D.skills.filter(s => (s.areas || []).some(a => g.areas.includes(a)) && s.level != null)
        .filter((s, idx, arr) => arr.indexOf(s) === idx)
        .sort((a, b) => b.level - a.level).slice(0, 6).map(s => skillRow(s));
    return items.join('');
  }
  function renderCarousel() {
    const el = $('#carousel'); const n = D.carousel.length;
    const order = Array.from({ length: n }, (_, k) => (S.car + k) % n);
    const block = i => '<div class="car-g" data-g="' + i + '"><h3><b>' + esc(L(D.carousel[i])) + '</b>: [ ]</h3><div class="car-body">' + carGroup(i) + '</div></div>';
    if (reduceMotion) {
      el.classList.add('static');
      el.innerHTML = '<div class="car-track">' + order.map(block).join('') + '</div>';
      return;
    }
    el.innerHTML = '<div class="car-h"><span class="car-pos">' + (S.car + 1) + ' / ' + n + '</span><span class="car-nav">' +
      '<button type="button" data-car="-1" aria-label="' + esc(t('car.prev')) + '">↑</button>' +
      '<button type="button" data-car="1" aria-label="' + esc(t('car.next')) + '">↓</button></span></div>' +
      '<div class="car-view"><div class="car-track">' + order.map(block).join('') + '</div></div>';
    markTop();
    $$('[data-car]', el).forEach(b => b.addEventListener('click', () => stepCarousel(+b.dataset.car)));
  }
  function markTop() {
    const track = $('#carousel .car-track'); if (!track) return;
    $$('.car-g', track).forEach((g, k) => g.classList.toggle('on', k === 0));
    const pos = $('#carousel .car-pos'); if (pos) pos.textContent = (S.car + 1) + ' / ' + D.carousel.length;
  }
  let carBusy = false;
  function stepCarousel(d) {
    const track = $('#carousel .car-track'); if (!track || carBusy) return;
    const n = D.carousel.length; S.car = (S.car + d + n) % n;
    const gap = parseFloat(getComputedStyle(track).rowGap) || 0;
    carBusy = true;
    if (d > 0) {
      const first = track.firstElementChild; const h = first.offsetHeight + gap;
      first.classList.remove('on'); if (first.nextElementSibling) first.nextElementSibling.classList.add('on');
      track.style.transition = 'transform .7s cubic-bezier(.4,0,.2,1)';
      track.style.transform = 'translateY(' + (-h) + 'px)';
      setTimeout(() => {
        track.style.transition = 'none'; track.appendChild(first); track.style.transform = 'none';
        void track.offsetHeight; carBusy = false; markTop();
      }, 720);
    } else {
      const last = track.lastElementChild; track.style.transition = 'none';
      track.insertBefore(last, track.firstElementChild);
      const h = last.offsetHeight + gap;
      track.style.transform = 'translateY(' + (-h) + 'px)'; void track.offsetHeight;
      markTop();
      track.style.transition = 'transform .7s cubic-bezier(.4,0,.2,1)'; track.style.transform = 'none';
      setTimeout(() => { track.style.transition = 'none'; carBusy = false; }, 720);
    }
  }
  function startCarousel() {
    if (reduceMotion || S.carTimer) return;
    S.carTimer = setInterval(() => { if (!S.carPaused && !document.hidden) stepCarousel(1); }, 4000);
  }
  function stopCarousel() { clearInterval(S.carTimer); S.carTimer = null; }
  function initCarousel() {
    const el = $('#carousel');
    el.addEventListener('mouseenter', () => { S.carPaused = true; });
    el.addEventListener('mouseleave', () => { S.carPaused = false; });
    el.addEventListener('focusin', () => { S.carPaused = true; });
    el.addEventListener('focusout', () => { S.carPaused = false; });
    el.addEventListener('touchstart', () => { S.carPaused = true; }, { passive: true });
  }

  /* ---------- Ventanita "Dónde lo usé" ---------- */
  let popTimer = null, popFor = null;
  function popHtml(el) {
    let name, label = '', used = [];
    if (el.dataset.skill) {
      const s = skillById(el.dataset.skill); if (!s) return null;
      name = L(s.name); label = lvl(s.level).label || L(s.note); used = s.usedIn || [];
    } else {
      const r = D.roles.find(x => x.id === el.dataset.role); if (!r) return null;
      name = L(r.name); label = L(r.years); used = r.usedIn || [];
    }
    const refs = used.map(ref).filter(Boolean);
    return '<h4><span>' + esc(name) + '</span><span class="lvl">' + esc(label) + '</span></h4><p>// ' + esc(t('used.title')) + '</p>' +
      (refs.length ? '<ul>' + refs.map(r => '<li><a href="' + esc(r.href) + '">' + esc(r.label) + '</a></li>').join('') + '</ul>' : '<span class="none">' + esc(t('used.none')) + '</span>');
  }
  function showPop(el) {
    const html = popHtml(el); if (!html) return;
    const pop = $('#pop'); pop.innerHTML = html; pop.hidden = false; popFor = el;
    const r = el.getBoundingClientRect(), pw = pop.offsetWidth, ph = pop.offsetHeight;
    const vw = document.documentElement.clientWidth, vh = window.innerHeight;
    let x = r.right + 10, y = r.top;
    if (x + pw > vw - 12) x = Math.max(12, Math.min(r.left, vw - pw - 12));
    if (x !== r.right + 10) y = r.bottom + 8;
    if (y + ph > vh - 12) y = Math.max(12, r.top - ph - 8);
    pop.style.left = x + 'px'; pop.style.top = y + 'px';
    el.setAttribute('aria-describedby', 'pop');
  }
  function hidePop() { const pop = $('#pop'); if (!pop) return; pop.hidden = true; if (popFor) popFor.removeAttribute('aria-describedby'); popFor = null; }
  function initPop() {
    const pop = $('#pop'); if (!pop) return;
    const target = e => e.target.closest && e.target.closest('[data-skill],[data-role]');
    const hoverable = window.matchMedia('(hover: hover)').matches;
    if (hoverable) {
      document.addEventListener('mouseover', e => { const el = target(e); if (el) { clearTimeout(popTimer); if (popFor !== el) showPop(el); } });
      document.addEventListener('mouseout', e => {
        const el = target(e); if (!el) return;
        if (e.relatedTarget && (pop.contains(e.relatedTarget) || el.contains(e.relatedTarget))) return;
        popTimer = setTimeout(hidePop, 180);
      });
      pop.addEventListener('mouseenter', () => clearTimeout(popTimer));
      pop.addEventListener('mouseleave', () => { popTimer = setTimeout(hidePop, 180); });
    }
    document.addEventListener('focusin', e => { const el = target(e); if (el) showPop(el); else if (!pop.contains(e.target)) hidePop(); });
    document.addEventListener('click', e => {
      const el = target(e);
      if (el) { if (popFor === el && !hoverable) hidePop(); else showPop(el); return; }
      if (!pop.contains(e.target)) hidePop();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') hidePop(); });
    window.addEventListener('scroll', hidePop, { passive: true });
    pop.addEventListener('click', e => { if (e.target.closest('a')) { hidePop(); if (isMobile() && $('#side')) closeSheet(); } });
  }

  /* ---------- Margen con números de línea ---------- */
  function updateGutter() {
    const g = $('#gutter'), m = $('#main'); if (!g || !m) return;
    const n = Math.ceil(m.scrollHeight / 26);
    if (+g.dataset.n !== n) { g.dataset.n = n; g.textContent = Array.from({ length: n }, (_, i) => i + 1).join('\n'); }
  }

  /* ---------- Página de proyecto ---------- */
  function renderProject() {
    const id = new URLSearchParams(location.search).get('p');
    const p = D.projects.find(x => x.id === id);
    const el = $('#project');
    if (!p) { el.innerHTML = '<a class="back" href="./#proyectos">' + esc(t('back')) + '</a><p>' + esc(t('notfound')) + '</p>'; return; }
    document.title = L(p.title) + ' · Gio';
    const g = D.projectGroups.find(x => x.id === p.group);
    const links = ['site', 'repo', 'video', 'instagram', 'doc'].filter(k => p.links && p.links[k])
      .map((k, i) => '<a class="btn' + (i === 0 ? ' primary' : '') + '" href="' + esc(p.links[k]) + '" target="_blank" rel="noopener">' + esc(t('l.' + k)) + ' ↗</a>').join('');
    const gallery = p.images && p.images.length
      ? '<div class="gallery">' + p.images.map((src, i) => '<button type="button" data-img="' + i + '"><img src="' + esc(src.src || src) + '" alt="' + esc(L(src.alt) || L(p.title)) + '" loading="lazy"></button>').join('') + '</div>'
      : '<div class="soon">' + esc(t('soon')) + '</div>';
    const tags = (p.skills || []).map(sid => { const s = skillById(sid); return s ? '<button type="button" class="chip" data-skill="' + sid + '">' + esc(L(s.name)) + '</button>' : ''; }).join('');
    el.innerHTML = '<a class="back" href="./#proyectos">' + esc(t('back')) + '</a>' +
      '<h1 class="p-title">' + esc(L(p.title)) + '</h1>' +
      '<div class="meta"><span><b>' + esc(t('p.role')) + ':</b> ' + esc(L(p.role)) + '</span><span><b>' + esc(t('p.year')) + ':</b> ' + esc(p.year) + '</span><span>' + esc(L(g)) + '</span>' + statusChip(p) + '</div>' +
      '<p class="lead">' + esc(L(p.abstract)) + '</p>' +
      (L(p.body) || []).map(x => '<p>' + esc(x) + '</p>').join('') +
      (links ? '<div class="p-links">' + links + '</div>' : '') +
      gallery + (tags ? '<div class="tags">' + tags + '</div>' : '');
    $$('[data-img]', el).forEach(b => b.addEventListener('click', () => openLightbox(p, +b.dataset.img)));
  }
  function openLightbox(p, i) {
    const lb = $('#lightbox'); const img = p.images[i];
    lb.innerHTML = '<img src="' + esc(img.src || img) + '" alt="' + esc(L(img.alt) || L(p.title)) + '"><button type="button" class="icon-btn" aria-label="' + esc(t('close')) + '">✕</button>';
    lb.hidden = false; const close = () => { lb.hidden = true; };
    lb.onclick = e => { if (e.target === lb || e.target.tagName === 'BUTTON') close(); };
    document.addEventListener('keydown', function k(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', k); } });
    $('button', lb).focus();
  }

  /* ---------- Render general ---------- */
  function renderAll() {
    applyStatic();
    if (page === 'home') {
      renderHero(); renderTimeline(); renderProjects(); renderPdfs(); renderContact();
      renderAreas(); renderCarousel(); runSearch();
      const st = $('#sideToggle'); if (st) st.setAttribute('aria-label', t($('.layout').classList.contains('collapsed') ? 'side.expand' : 'side.collapse'));
    } else {
      renderProject();
    }
    renderFooter();
    hidePop();
    requestAnimationFrame(updateGutter);
  }

  function boot(data) {
    D = data;
    initTheme(); initLang(); initMenu(); initPop(); initContactActions();
    if (page === 'home') { initSide(); initCarousel(); }
    renderAll();
    if (page === 'home') {
      initActiveNav();
      if (location.hash && location.hash.length > 1 && location.hash !== '#habilidades') { const target = document.getElementById(location.hash.slice(1)); if (target) target.scrollIntoView(); }
    }
    if ('ResizeObserver' in window) new ResizeObserver(updateGutter).observe($('#main'));
    window.addEventListener('resize', updateGutter);
  }

  fetch('data/cv.json', { cache: 'no-cache' })
    .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(boot)
    .catch(err => {
      const m = $('#main');
      if (m) m.insertAdjacentHTML('afterbegin', '<p class="soon">No se pudo cargar el contenido (data/cv.json): ' + esc(err.message) + '</p>');
    });
})();
