const BASE = '/';
const BOOK = 'https://anolla.com/book/barry-art-hair';
const ANOLLA_WIDGET_LINK = 'https://anolla.com/link/a227ae45-713a-458e-91d1-e571497b8774';

let lang = localStorage.getItem('barry-language') === 'en' ? 'en' : 'bg';
const page = document.body.dataset.page;

const t = (bg, en) => lang === 'bg' ? bg : en;

const book = () => `
  <a class="book anolla-book" href="${BOOK}">
    ${t('Запази час', 'Book now')} <span>↗</span>
  </a>
`;

const icon = name => name === 'instagram'
  ? `<svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5"/>
      <circle cx="12" cy="12" r="4.2"/>
      <circle class="dot" cx="17.5" cy="6.7" r=".9"/>
    </svg>`
  : name === 'facebook'
  ? `<svg viewBox="0 0 24 24">
      <path d="M14.2 21v-8h2.8l.7-3.3h-3.5V7.6c0-1 .5-1.7 1.9-1.7H18V3.1c-.8-.1-1.7-.2-2.5-.2-2.8 0-4.7 1.7-4.7 4.8v2H8v3.3h2.8v8h3.4Z"/>
    </svg>`
  : `<svg viewBox="0 0 24 24">
      <path d="M14.4 3.2v12.2a4.6 4.6 0 1 1-4-4.5v3.2a1.7 1.7 0 1 0 1 1.6V3.2h3Z"/>
      <path d="M14.4 3.4c.7 2.8 2.4 4.3 5.2 4.6v3.1c-2.1-.1-3.9-.8-5.2-2.1"/>
    </svg>`;

const socials = () => `
  <div class="socials">
    <a href="https://instagram.com" aria-label="Instagram">${icon('instagram')}</a>
    <a href="https://facebook.com" aria-label="Facebook">${icon('facebook')}</a>
    <a href="https://tiktok.com" aria-label="TikTok">${icon('tiktok')}</a>
  </div>
`;

function shell(content) {
  const links = [
    ['home', '', 'Начало', 'Home'],
    ['about', 'about/', 'За нас', 'About'],
    ['services', 'services/', 'Услуги', 'Services'],
    ['gallery', 'gallery/', 'Галерия', 'Gallery'],
    ['contact', 'contact/', 'Контакти', 'Contact']
  ];

  return `
    <header>
      <a class="brand" href="${BASE}">
        <img src="assets/BB_luxury_monogram.png">
        <span>HAIR BY BARRY B</span>
      </a>

      <nav>
        ${links.map(([id, path, bg, en]) => `
          <a class="${page === id ? 'active' : ''}" href="${BASE + path}">
            ${t(bg, en)}
          </a>
        `).join('')}

        <div class="nav-socials">${socials()}</div>
        <div class="nav-book">${book()}</div>
      </nav>

      <div class="head-actions">
        <div class="language">
          <button data-lang="bg" class="${lang === 'bg' ? 'active' : ''}">BG</button>
          <i>/</i>
          <button data-lang="en" class="${lang === 'en' ? 'active' : ''}">EN</button>
        </div>

        <a class="book small anolla-book" href="${BOOK}">
          ${t('Запази', 'Book')} ↗
        </a>

        <button class="menu" aria-label="Menu">
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    ${content}

    <footer>
      <div>
        <p class="eyebrow">HAIR BY BARRY B</p>
        <h2>${t('Красотата е в детайла.', 'Beauty lives in the detail.')}</h2>
      </div>

      <div class="footer-info">
        <p>
          ${t(
            'София, България · Адрес предстои',
            'Sofia, Bulgaria · Address coming soon'
          )}
        </p>

        <p>+359 88 000 0000 · hello@hairbybarryb.com</p>
        ${socials()}
        <p>© 2026 Hair by Barry B</p>
      </div>
    </footer>

    <div class="mobile-book">${book()}</div>
  `;
}

function home() {
  return `
    <main>
      <section class="hero">
        <div class="glow"></div>

        <div class="monogram">
          <div class="half left">
            <img src="assets/BB_luxury_monogram.png">
          </div>
          <div class="half right">
            <img src="assets/BB_luxury_monogram.png">
          </div>
        </div>

        <div class="hero-copy">
          <p class="eyebrow">
            ${t(
              'ПЕРСОНАЛНО ХАРАКТЕРНО СТИЛНО',
              'PERSONAL DISTINCTIVE REFINED'
            )}
          </p>

          <h1>
            ${t(
              'Коса, създадена да бъде запомнена.',
              'Hair designed to be remembered.'
            )}
          </h1>

          <p>
            ${t(
              'Индивидуален подход, прецизна техника и безкомпромисно отношение към всеки детайл.',
              'An individual approach, precise technique and uncompromising attention to every detail.'
            )}
          </p>

          <div class="actions">
            ${book()}
            <a class="text-link" href="${BASE}services/">
              ${t('Разгледай услугите', 'Explore services')} →
            </a>
          </div>
        </div>
      </section>

      <section class="intro grid">
        <p class="number">01 / ${t('ЗА НАС', 'ABOUT')}</p>

        <div>
          <h2>
            ${t(
              'Майсторство без излишен шум.',
              'Craft, without the noise.'
            )}
          </h2>

          <p class="lead">
            ${t(
              'Hair by Barry B е място за съвременна красота, спокойствие и истински персонално отношение. Всяка визия започва с разговор и завършва с увереност.',
              'Hair by Barry B is a space for modern beauty, calm and genuinely personal care. Every look begins with a conversation and ends with confidence.'
            )}
          </p>

          <a class="text-link" href="${BASE}about/">
            ${t('Нашата философия', 'Our philosophy')} →
          </a>
        </div>
      </section>

      <section class="services-home">
        <div class="section-title">
          <p class="number">02 / ${t('УСЛУГИ', 'SERVICES')}</p>
          <h2>${t('Подбрани услуги', 'Signature services')}</h2>
        </div>

        ${[
          ['Дамско подстригване', 'Women’s cut', '45 €'],
          ['Цвят и балеаж', 'Colour & balayage', '95 €'],
          ['Стайлинг', 'Styling', '35 €']
        ].map((item, index) => `
          <a class="service-line" href="${BASE}services/">
            <span>0${index + 1}</span>
            <h3>${t(item[0], item[1])}</h3>
            <p>${t('от', 'from')} ${item[2]}</p>
            <b>↗</b>
          </a>
        `).join('')}
      </section>

      <section class="light gallery-home">
        <div class="section-title">
          <p class="number">03 / ${t('ГАЛЕРИЯ', 'GALLERY')}</p>
          <h2>${t('Последни визии', 'Recent work')}</h2>
        </div>

        <div class="gallery-row">${galleryCards(3)}</div>

        <a class="text-link dark" href="${BASE}gallery/">
          ${t('Виж цялата галерия', 'View full gallery')} →
        </a>
      </section>

      ${cta()}
    </main>
  `;
}

function galleryCards(count = 6) {
  const items = [
    ['bob-editorial.png', 'PRECISION'],
    ['blonde-waves-editorial.png', 'COLOUR'],
    ['updo-editorial.png', 'EDITORIAL'],
    ['blonde-waves-editorial.png', 'BALAYAGE'],
    ['bob-editorial.png', 'GLOSS'],
    ['updo-editorial.png', 'EVENT']
  ];

  return items.slice(0, count).map((item, index) => `
    <figure>
      <img src="assets/${item[0]}" alt="${item[1]}">
      <figcaption>
        <span>${item[1]}</span>
        <b>0${index + 1}</b>
      </figcaption>
    </figure>
  `).join('');
}

function cta() {
  return `
    <section class="cta">
      <p class="eyebrow">HAIR BY BARRY B</p>

      <blockquote>
        “${t(
          'Не следваме тенденциите. Превеждаме ги на твоя език.',
          'We don’t follow trends. We translate them into your language.'
        )}”
      </blockquote>

      ${book()}
    </section>
  `;
}

function pageHero(label, bg, en, description = '') {
  return `
    <section class="page-hero">
      <p class="eyebrow">${label}</p>
      <h1>${t(bg, en)}</h1>
      ${description ? `<p>${description}</p>` : ''}
    </section>
  `;
}

function about() {
  return `
    <main class="inner">
      ${pageHero(
        t('ЗА НАС', 'ABOUT US'),
        'Красивата коса започва с доверие.',
        'Beautiful hair begins with trust.'
      )}

      <section class="about-block">
        <img src="assets/bob-editorial.png">

        <div>
          <p class="number">01 / ${t('ФИЛОСОФИЯ', 'PHILOSOPHY')}</p>

          <h2>
            ${t(
              'Не просто прическа. Твоята най-добра версия.',
              'Not just a hairstyle. Your best version.'
            )}
          </h2>

          <p>
            ${t(
              'Вярваме, че добрият резултат не започва от тенденция, а от човека. Формата, цветът и текстурата се подбират така, че да работят с начина ти на живот и да изглеждат естествено твои.',
              'We believe a great result begins with the person, not a trend. Shape, colour and texture are chosen to work with your life and feel naturally yours.'
            )}
          </p>

          <p>
            ${t(
              'Текстът тук е примерен и ще бъде заменен с историята, опита и професионалната визия на Barry.',
              'This is placeholder copy and will be replaced with Barry’s story, experience and professional vision.'
            )}
          </p>

          ${book()}
        </div>
      </section>

      <section class="values">
        ${[
          ['Лично отношение', 'Personal attention'],
          ['Прецизност', 'Precision'],
          ['Качество', 'Quality']
        ].map((item, index) => `
          <article>
            <span>0${index + 1}</span>
            <h3>${t(item[0], item[1])}</h3>
            <p>
              ${t(
                'Индивидуална консултация, техника и грижа, съобразени с теб.',
                'Individual consultation, technique and care shaped around you.'
              )}
            </p>
          </article>
        `).join('')}
      </section>
    </main>
  `;
}

const groups = [
  [
    ['Дамско подстригване', 'Women’s haircut', '60 min', '45 €'],
    ['Мъжко подстригване', 'Men’s haircut', '45 min', '30 €'],
    ['Подстригване и стайлинг', 'Cut & styling', '75 min', '55 €']
  ],
  [
    ['Боядисване на корени', 'Root colour', '90 min', '65 €'],
    ['Цялостно боядисване', 'Full colour', '120 min', '85 €'],
    ['Балеаж / AirTouch', 'Balayage / AirTouch', '180 min', '150 €'],
    ['Тониране и гланц', 'Toner & gloss', '60 min', '50 €']
  ],
  [
    ['Сешоар и стайлинг', 'Blow-dry & styling', '45 min', '35 €'],
    ['Официална прическа', 'Event hair', '75 min', '75 €'],
    ['Възстановяваща терапия', 'Restorative treatment', '45 min', '40 €']
  ]
];

function services() {
  return `
    <main class="inner">
      ${pageHero(
        t('УСЛУГИ И ЦЕНИ', 'SERVICES & PRICING'),
        'Грижа, създадена за теб.',
        'Care, designed for you.',
        t(
          'Примерни услуги и цени. Финалният ценоразпис ще бъде актуализиран преди публикуване.',
          'Placeholder services and pricing. The final menu will be updated before launch.'
        )
      )}

      <section class="prices">
        ${groups.map((group, groupIndex) => `
          <div class="price-group">
            <div>
              <span>0${groupIndex + 1}</span>

              <h2>
                ${[
                  t('Подстригване', 'Cutting'),
                  t('Цвят', 'Colour'),
                  t('Стайлинг и грижа', 'Styling & care')
                ][groupIndex]}
              </h2>
            </div>

            <div>
              ${group.map(item => `
                <article>
                  <div>
                    <h3>${t(item[0], item[1])}</h3>
                    <p>${item[2]}</p>
                  </div>

                  <strong>${t('от', 'from')} ${item[3]}</strong>
                </article>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </section>

      <section class="note">
        <p>
          ${t(
            'Цената може да варира според дължината, гъстотата и желаната техника.',
            'Pricing may vary according to length, density and technique.'
          )}
        </p>

        ${book()}
      </section>
    </main>
  `;
}

function gallery() {
  return `
    <main class="inner">
      ${pageHero(
        t('ГАЛЕРИЯ', 'GALLERY'),
        'Форма. Цвят. Характер.',
        'Shape. Colour. Character.',
        t(
          'Примерни визуализации, които ще бъдат заменени с реални снимки на работата на Barry.',
          'Placeholder visuals that will be replaced with photographs of Barry’s work.'
        )
      )}

      <section class="gallery-grid">${galleryCards()}</section>
      ${cta()}
    </main>
  `;
}

function contact() {
  const openingHours = [
    [t('Понеделник', 'Monday'), t('Почивен ден', 'Closed')],
    [t('Вторник — Петък', 'Tuesday — Friday'), '10:00 — 19:00'],
    [t('Събота', 'Saturday'), '10:00 — 18:00'],
    [t('Неделя', 'Sunday'), t('Почивен ден', 'Closed')]
  ];

  return `
    <main class="inner">
      ${pageHero(
        t('КОНТАКТИ', 'CONTACT'),
        'Нека поговорим за косата ти.',
        'Let’s talk about your hair.'
      )}

      <section class="contact">
        <div class="contact-main">
          <p class="number">01 / ${t('ПОСЕТИ НИ', 'VISIT US')}</p>
          <h2>${t('София, България', 'Sofia, Bulgaria')}</h2>

          <p>
            ${t('Примерен адрес 12', '12 Placeholder Street')}<br>
            ${t('1000 София', '1000 Sofia')}
          </p>

          <a href="tel:+359880000000">+359 88 000 0000</a>
          <a href="mailto:hello@hairbybarryb.com">
            hello@hairbybarryb.com
          </a>

          ${socials()}
        </div>

        <div class="hours">
          <p class="number">02 / ${t('РАБОТНО ВРЕМЕ', 'OPENING HOURS')}</p>

          ${openingHours.map(item => `
            <div>
              <span>${item[0]}</span>
              <b>${item[1]}</b>
            </div>
          `).join('')}

          ${book()}
        </div>
      </section>

      <section class="map">
        <span>HAIR BY BARRY B · SOFIA</span>
        <b>B</b>

        <p>
          ${t(
            'Картата ще бъде добавена след потвърждение на адреса',
            'Map will be added once the address is confirmed'
          )}
        </p>
      </section>
    </main>
  `;
}

function ensureBookingDialog() {
  const existing = document.getElementById('booking-dialog');

  if (existing) {
    existing.setAttribute(
      'aria-label',
      t('Резервиране на час', 'Book an appointment')
    );

    existing.querySelector('.booking-dialog-head span').textContent =
      t('Резервирай час', 'Book an appointment');

    existing.querySelector('.booking-dialog-close').setAttribute(
      'aria-label',
      t('Затвори', 'Close')
    );

    existing.querySelector('.booking-dialog-loading p').textContent =
      t('Зареждане на резервацията…', 'Loading booking…');

    existing.querySelector('.booking-dialog-fallback').textContent =
      t('Отвори страницата за резервации', 'Open booking page');

    existing.querySelector('iframe').title =
      t('Резервиране на час чрез Anolla', 'Book an appointment with Anolla');

    return;
  }

  const style = document.createElement('style');
  style.id = 'booking-dialog-styles';

  style.textContent = `
    #booking-dialog {
      width: min(760px, calc(100% - 28px));
      height: min(820px, calc(100dvh - 28px));
      max-width: none;
      max-height: none;
      margin: auto;
      padding: 0;
      border: 1px solid rgba(217, 180, 95, .45);
      border-radius: 2px;
      background: #0a0908;
      color: #eee8dc;
      overflow: hidden;
      box-shadow: 0 28px 90px rgba(0, 0, 0, .7);
    }

    #booking-dialog::backdrop {
      background: rgba(0, 0, 0, .82);
      backdrop-filter: blur(8px);
    }

    .booking-dialog-head {
      height: 64px;
      padding: 0 18px 0 22px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(217, 180, 95, .2);
      background: #0a0908;
    }

    .booking-dialog-head span {
      font: 700 10px Arial, sans-serif;
      letter-spacing: .2em;
      text-transform: uppercase;
      color: #d9b45f;
    }

    .booking-dialog-close {
      width: 40px;
      height: 40px;
      border: 1px solid rgba(217, 180, 95, .3);
      background: transparent;
      color: #eee8dc;
      font-size: 25px;
      font-weight: 200;
      line-height: 1;
      cursor: pointer;
    }

    .booking-dialog-close:hover {
      border-color: #d9b45f;
      color: #d9b45f;
    }

    #booking-dialog iframe {
      display: block;
      width: 100%;
      border: 0;
      background: #fff;
    }

    .booking-dialog-body {
      position: relative;
      height: calc(100% - 64px);
      background: #fff;
    }

    .booking-dialog-body iframe {
      height: 100%;
    }

    .booking-dialog-loading {
      position: absolute;
      inset: 0;
      z-index: 1;
      display: grid;
      place-content: center;
      gap: 16px;
      padding: 32px;
      background: #0a0908;
      color: #eee8dc;
      text-align: center;
    }

    .booking-dialog-loading[hidden] {
      display: none;
    }

    .booking-dialog-spinner {
      width: 34px;
      height: 34px;
      margin: 0 auto;
      border: 2px solid rgba(217, 180, 95, .25);
      border-top-color: #d9b45f;
      border-radius: 50%;
      animation: booking-spin .8s linear infinite;
    }

    .booking-dialog-loading p {
      margin: 0;
      font: 700 10px Arial, sans-serif;
      letter-spacing: .18em;
      text-transform: uppercase;
    }

    .booking-dialog-fallback {
      color: #d9b45f;
      font: 700 11px Arial, sans-serif;
      letter-spacing: .08em;
      text-underline-offset: 4px;
    }

    @keyframes booking-spin {
      to { transform: rotate(360deg); }
    }

    @media (max-width: 700px) {
      #booking-dialog {
        width: 100%;
        height: 100dvh;
        border: 0;
      }

      .booking-dialog-head {
        height: 58px;
      }

      .booking-dialog-body {
        height: calc(100% - 58px);
      }
    }
  `;

  document.head.appendChild(style);

  const dialog = document.createElement('dialog');
  dialog.id = 'booking-dialog';

  dialog.setAttribute(
    'aria-label',
    t('Резервиране на час', 'Book an appointment')
  );

  dialog.innerHTML = `
    <div class="booking-dialog-head">
      <span>${t('Резервирай час', 'Book an appointment')}</span>

      <button
        class="booking-dialog-close"
        type="button"
        aria-label="${t('Затвори', 'Close')}"
      >
        ×
      </button>
    </div>

    <div class="booking-dialog-body">
      <div class="booking-dialog-loading">
        <span class="booking-dialog-spinner" aria-hidden="true"></span>
        <p>${t('Зареждане на резервацията…', 'Loading booking…')}</p>
        <a
          class="booking-dialog-fallback"
          href="${BOOK}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${t('Отвори страницата за резервации', 'Open booking page')}
        </a>
      </div>

      <iframe
        data-src="${ANOLLA_WIDGET_LINK}"
        title="${t('Резервиране на час чрез Anolla', 'Book an appointment with Anolla')}"
        allow="payment"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  `;

  dialog
    .querySelector('.booking-dialog-close')
    .addEventListener('click', () => dialog.close());

  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  document.body.appendChild(dialog);
}

function loadBookingFrame(dialog) {
  const frame = dialog.querySelector('iframe');
  const loading = dialog.querySelector('.booking-dialog-loading');

  if (!frame || frame.src) {
    return;
  }

  frame.addEventListener('load', () => {
    loading.hidden = true;
  }, { once: true });

  frame.src = frame.dataset.src;
}

function render() {
  document.documentElement.lang = lang;

  document.getElementById('app').innerHTML = shell(
    { home, about, services, gallery, contact }[page]()
  );

  ensureBookingDialog();
  bind();
}

function bind() {
  document.querySelectorAll('[data-lang]').forEach(button => {
    button.addEventListener('click', () => {
      lang = button.dataset.lang;
      localStorage.setItem('barry-language', lang);
      render();
    });
  });

  document.querySelectorAll('.anolla-book').forEach(button => {
    button.addEventListener('click', event => {
      const dialog = document.getElementById('booking-dialog');

      if (dialog?.showModal) {
        event.preventDefault();
        dialog.showModal();
        loadBookingFrame(dialog);
      }
    });
  });

  const menu = document.querySelector('.menu');
  const nav = document.querySelector('nav');

  menu.addEventListener('click', () => {
    menu.classList.toggle('open');
    nav.classList.toggle('open');
  });
}

render();
