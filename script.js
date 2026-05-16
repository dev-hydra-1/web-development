// ============================================================
//  FIREBASE HELPER
// ============================================================
async function fetchFromFirebase(key) {
  if (!window.db) {
    console.warn("Firebase not initialized yet. Using defaults.");
    return DEFAULTS[key];
  }
  try {
    const docRef = window.doc(window.db, "website", key);
    const docSnap = await window.getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data().value || docSnap.data();
      if (Array.isArray(DEFAULTS[key]) && !Array.isArray(data)) return DEFAULTS[key];
      return data;
    } else {
      console.log("No such document in Firestore! Using defaults for:", key);
      return DEFAULTS[key];
    }
  } catch (error) {
    console.error("Error fetching from Firestore:", error);
    return DEFAULTS[key];
  }
}

// Keep DEFAULTS as fallback
const DEFAULTS = {
  hero: {
    name: 'محمد ناصر', title: 'Front-End Web Developer',
    desc: 'متخصص في تصميم وتطوير المواقع الحديثة والسريعة والمتجاوبة لجميع الأجهزة، مع الاهتمام بالتفاصيل وتجربة المستخدم.',
    cta: 'اطلب موقعك الآن'
  },

  delivery: [
    { name: 'Landing Page', time: '2 - 3 أيام' },
    { name: 'بورتفوليو شخصي', time: '3 - 5 أيام' },
    { name: 'موقع شركة', time: '5 - 7 أيام' },
    { name: 'متجر إلكتروني', time: '7 - 14 يوم' },
    { name: 'تطوير / تحديث', time: 'حسب المطلوب' }
  ],
  portfolio: [
    { name: 'موقع مطعم', sub: 'Restaurant Website' },
    { name: 'موقع جيم', sub: 'Gym Website' },
    { name: 'متجر إلكتروني', sub: 'Store Website' },
    { name: 'موقع محامي', sub: 'Lawyer Website' },
    { name: 'موقع عيادة', sub: 'Clinic Website' },
    { name: 'بورتفوليو شخصي', sub: 'Portfolio Website' }
  ],
  contact: {
    phone: '01040128359', whatsapp: '201040128359',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    telegram: 'https://t.me/MohamedNasser'
  },
  headers: {

    delivery: { title: 'مدة الاستلام', sub: 'التزام بالمواعيد وجودة في التسليم' },
    portfolio: { title: 'معرض الأعمال', sub: 'أحدث مشاريعي وأعمالي' },
    contact: { title: 'التواصل', sub: 'تواصل معي الآن ونبدأ مشروعك' },
    skills: { title: 'اللغات والتقنيات', sub: 'أدواتي في بناء المواقع الاحترافية' }
  },
  skills: [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'Tailwind CSS', icon: '🌊' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Git & GitHub', icon: '📊' },
    { name: 'Responsive Design', icon: '📱' }
  ]
};

// ============================================================
//  APPLY CMS DATA TO PAGE
// ============================================================
async function applyHero() {
  const d = await fetchFromFirebase('hero');
  if (!d) return;
  const logoEl = document.querySelector('.logo');
  const navLogoImg = document.getElementById('navLogoImg');
  const navLogoText = document.getElementById('navLogoText');
  const avatarImg = document.getElementById('avatarImg');
  const avatarText = document.getElementById('avatarText');
  const nameEl = document.querySelector('.hero-name');
  const titleEl = document.querySelector('.hero-title');
  const descEl = document.querySelector('.hero-desc');
  const ctaEl = document.querySelector('.btn-cta');

  // Logo logic
  if (navLogoImg && navLogoText) {
    if (d.logoImg) {
      const tempImg = new Image();
      tempImg.onload = () => {
        navLogoImg.src = d.logoImg;
        navLogoImg.style.display = 'block';
        navLogoText.style.display = 'none';
      };
      tempImg.onerror = () => {
        navLogoImg.style.display = 'none';
        navLogoText.style.display = 'block';
      };
      tempImg.src = d.logoImg;
    } else {
      navLogoImg.style.display = 'none';
      navLogoText.style.display = 'block';
      navLogoText.innerHTML = `${d.logo || 'MN'}<span>.</span>`;
    }
  }

  // Avatar logic
  if (avatarImg && avatarText) {
    if (d.avatarImg) {
      const tempAvatar = new Image();
      tempAvatar.onload = () => {
        avatarImg.src = d.avatarImg;
        avatarImg.style.display = 'block';
        avatarText.style.display = 'none';
      };
      tempAvatar.onerror = () => {
        avatarImg.style.display = 'none';
        avatarText.style.display = 'block';
      };
      tempAvatar.src = d.avatarImg;
    } else {
      avatarImg.style.display = 'none';
      avatarText.style.display = 'block';
      const parts = (d.name || 'MN').trim().split(' ');
      avatarText.textContent = (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
    }
  }

  if (nameEl) nameEl.textContent = d.name;
  if (titleEl) titleEl.textContent = d.title;
  if (descEl) descEl.textContent = d.desc;
  if (ctaEl && d.cta) { ctaEl.childNodes[0].textContent = d.cta + ' '; }
}



async function applyDelivery() {
  const items = await fetchFromFirebase('delivery');
  const headers = await fetchFromFirebase('headers');
  if (!items || !headers) return;
  const icons = ['🚀','👤','🏢','🛒','🔧'];
  const tl = document.querySelector('.timeline');
  const head = document.querySelector('#delivery .section-header');

  if (head && headers.delivery) {
    head.querySelector('h2').textContent = headers.delivery.title;
    head.querySelector('p').textContent = headers.delivery.sub;
  }
  if (!tl || !Array.isArray(items)) return;
  tl.innerHTML = items.map((t, i) => `
    <div class="timeline-item" data-aos>
      <div class="tl-icon">${icons[i] || '📌'}</div>
      <div class="tl-content">
        <h3>${t.name}</h3>
        <span class="tl-time">${t.time}</span>
      </div>
    </div>
  `).join('');
  tl.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
}

async function applyPortfolio() {
  const items = await fetchFromFirebase('portfolio');
  const headers = await fetchFromFirebase('headers');
  if (!items || !headers) return;
  const cls = ['restaurant','gym','store','lawyer','clinic','portfolio-p'];
  const grid = document.querySelector('.portfolio-grid');
  const head = document.querySelector('#portfolio .section-header');

  if (head && headers.portfolio) {
    head.querySelector('h2').textContent = headers.portfolio.title;
    head.querySelector('p').textContent = headers.portfolio.sub;
  }
  if (!grid || !Array.isArray(items)) return;
  grid.innerHTML = items.map((p, i) => `
    <div class="port-card" data-aos>
      <div class="port-img ${cls[i] || 'restaurant'}" ${p.img ? `style="background:url('${p.img}'); background-size:cover; background-position:center"` : ''}>
        <div class="port-overlay">
          ${p.link ? `<a href="${p.link}" target="_blank" class="btn-live">معاينة</a>` : ''}
          <a href="#contact" class="btn-preview">طلب مشابه</a>
        </div>
        ${!p.img ? `<div class="port-mockup">
          <div class="mock-bar"></div>
          <div class="mock-hero"></div>
          <div class="mock-cards"></div>
        </div>` : ''}
      </div>
      <div class="port-info"><h3>${p.name}</h3><span>${p.sub}</span></div>
    </div>
  `).join('');
  grid.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
}

async function applySkills() {
  const items = await fetchFromFirebase('skills');
  const headers = await fetchFromFirebase('headers');
  if (!items || !headers) return;
  const grid = document.querySelector('#skillsGrid');
  const head = document.querySelector('#skills .section-header');

  if (head && headers.skills) {
    head.querySelector('h2').textContent = headers.skills.title;
    head.querySelector('p').textContent = headers.skills.sub;
  }
  if (!grid || !Array.isArray(items)) return;
  grid.innerHTML = items.map((s, i) => `
    <div class="skill-card" data-aos>
      <span class="skill-icon">${s.icon}</span>
      <h3>${s.name}</h3>
    </div>
  `).join('');
  grid.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
}

async function applyContact() {
  const d = await fetchFromFirebase('contact');
  const headers = await fetchFromFirebase('headers');
  if (!d || !headers) return;
  const head = document.querySelector('#contact .section-header');
  if (head && headers.contact) {
    head.querySelector('h2').textContent = headers.contact.title;
    head.querySelector('p').textContent = headers.contact.sub;
  }

  const cards = {
    phone:     { el: document.getElementById('cardPhone'), val: d.phone },
    whatsapp:  { el: document.getElementById('cardWhatsapp'), val: d.whatsapp },
    facebook:  { el: document.getElementById('cardFacebook'), val: d.facebook },
    instagram: { el: document.getElementById('cardInstagram'), val: d.instagram },
    telegram:  { el: document.getElementById('cardTelegram'), val: d.telegram }
  };

  for (const key in cards) {
    const item = cards[key];
    if (item.el) {
      if (!item.val || item.val === '#' || item.val.trim() === '') {
        item.el.style.display = 'none';
      } else {
        item.el.style.display = 'flex';
        if (key === 'phone') {
          item.el.href = 'tel:' + item.val;
          item.el.querySelector('p').textContent = item.val;
        } else if (key === 'whatsapp') {
          item.el.href = 'https://wa.me/' + item.val;
        } else {
          item.el.href = item.val;
        }
      }
    }
  }
}

async function applyGeneral() {
  const d = await fetchFromFirebase('general');
  const footerEl = document.querySelector('footer p');
  if (footerEl && d && d.footer) footerEl.textContent = d.footer;
}

// ============================================================
//  INTERSECTION OBSERVER
// ============================================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('animated'), i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

// ============================================================
//  LOADER
// ============================================================
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hide'), 600);
});

// ============================================================
//  PARTICLES
// ============================================================
(function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;--d:${4+Math.random()*6}s;--delay:${Math.random()*5}s;width:${1+Math.random()*2}px;height:${1+Math.random()*2}px;`;
    container.appendChild(p);
  }
})();

// ============================================================
//  NAVBAR
// ============================================================
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 50
    ? 'rgba(5,11,20,0.98)' : 'rgba(5,11,20,0.85)';
  scrollTopBtn.classList.toggle('show', window.scrollY > 400);
  updateActiveNav();
});

scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY  = window.scrollY + 80;
  sections.forEach(s => {
    const link = document.querySelector(`.nav-links a[href="#${s.id}"]`);
    if (link) link.classList.toggle('active', scrollY >= s.offsetTop && scrollY < s.offsetTop + s.offsetHeight);
  });
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ============================================================
//  INIT — apply CMS data
// ============================================================
async function init() {
  // Wait a bit for Firebase module to export to window if needed
  if (!window.db) {
    await new Promise(r => setTimeout(r, 100));
  }
  
  await Promise.all([
    applyHero(),

    applyDelivery(),
    applyPortfolio(),
    applySkills(),
    applyContact(),
    applyGeneral()
  ]);
}

init();
