// ============================================================
//  DEFAULTS (Fallback data — used when Firebase has no data)
// ============================================================
const DEFAULTS = {
  hero: {
    name: 'Hydra',
    title: 'Creative Front-End Developer',
    eyebrow: 'بورتفوليو شخصي جاهز للتعاون',
    desc: 'أبني واجهات ويب جريئة وسريعة تجمع بين هوية بصرية قوية، حركة محسوبة، وكود منظم يجعل التجربة تبدو مميزة من أول تفاعل.',
    cta: 'ابدأ تعاونك معي',
    stat1Val: '+30', stat1Label: 'تجربة واجهة مصممة',
    stat2Val: '95+', stat2Label: 'هدف أداء وتجربة',
    stat3Val: 'RTL', stat3Label: 'واجهات عربية متقنة',
    logoImg: 'img/logo.png',
    avatarImg: 'img/logo.png',
    logo: 'Hydra'
  },
  about: {
    tag: 'عني',
    title: 'أنا Hydra',
    sub: 'مطور واجهات يهتم بأن يشعر الموقع كأنه منتج حقيقي، لا مجرد صفحة جميلة.',
    bio: 'أصمم وأطور واجهات ويب ذات شخصية واضحة: بداية من الفكرة والهوية، مرورا بالتفاعل والحركة، وصولا لكود نظيف قابل للتوسع. هدفي أن يرى العميل موقعا سريع التحميل، واضح الرسالة، ومقنع بصريا.',
    stat1Num: '+3', stat1Label: 'سنوات خبرة',
    stat2Num: '+30', stat2Label: 'مشروع منجز',
    stat3Num: '100%', stat3Label: 'رضا العملاء',
    values: [
      'هوية قوية قبل أي مؤثر بصري',
      'حركة تخدم الرسالة ولا تسرق الانتباه',
      'كود نظيف يسهل تطويره بعد التسليم',
      'تجربة عربية RTL بنفس جودة الواجهات العالمية'
    ]
  },
  services: {
    tag: 'الخدمات',
    title: 'ما الذي أبنيه؟',
    sub: 'واجهات ومواقع شخصية وتجارية بتصميم مخصص، أداء سريع، وتجربة قابلة للإدارة.',
    items: [
      {
        title: 'Landing Page مميزة',
        desc: 'صفحة هبوط ذات رسالة واضحة وحركة جذابة تقود الزائر لاتخاذ القرار بدون تشتيت.',
        features: ['Hero قوي', 'CTA واضح', 'أداء سريع'],
        icon: 'landing'
      },
      {
        title: 'بورتفوليو شخصي',
        desc: 'موقع يعرض شخصيتك وأعمالك بطريقة منظمة ومقنعة، مع مساحة لدراسات الحالة والإنجازات.',
        features: ['هوية شخصية', 'Case Studies', 'سهل التحديث'],
        icon: 'portfolio'
      },
      {
        title: 'واجهة شركة أو منتج',
        desc: 'واجهة تسويقية أو تعريفية تعرض المنتج أو الخدمة بمنطق واضح وثقة بصرية عالية.',
        features: ['أقسام تحويل', 'لوحة تحكم CMS', 'SEO On-Page'],
        icon: 'business'
      },
      {
        title: 'تحسين الأداء والسيو',
        desc: 'تحسين سرعة وتجربة موقع قائم مع تنظيف الواجهة وتقليل التعقيد البصري والتقني.',
        features: ['Core Web Vitals', 'ضغط الأصول', 'تنظيف UX'],
        icon: 'seo'
      }
    ]
  },
  headers: {
    delivery: { title: 'كيف يتحول المشروع لواجهة حقيقية؟', sub: 'خطوات قصيرة وواضحة من الفكرة إلى نسخة جاهزة للنشر.' },
    portfolio: { title: 'دراسات حالة مصممة', sub: 'نماذج واجهات توضح طريقة التفكير، النتيجة، ومستوى العناية بالتفاصيل.' },
    contact:  { title: 'جاهز نبدأ؟', sub: 'أرسل فكرة موقعك أو رابط مشروعك الحالي، ونحدد أفضل شكل للتطوير.' },
    skills:   { title: 'Stack أستخدمه بوعي', sub: 'أدوات بسيطة وقوية لبناء واجهات سريعة، متجاوبة، وقابلة للإدارة.' }
  },
  skills: [
    { name: 'HTML5',           icon: 'html' },
    { name: 'CSS3',            icon: 'css' },
    { name: 'JavaScript',      icon: 'js' },
    { name: 'React.js',        icon: 'react' },
    { name: 'Bootstrap',       icon: 'bootstrap' },
    { name: 'Tailwind CSS',    icon: 'tailwind' },
    { name: 'Firebase',        icon: 'firebase' },
    { name: 'Git & GitHub',    icon: 'git' },
    { name: 'Responsive',      icon: 'responsive' }
  ],
  delivery: [
    { name: 'Landing Page',    time: '2 - 3 أيام' },
    { name: 'بورتفوليو شخصي',  time: '3 - 5 أيام' },
    { name: 'موقع شركة',       time: '5 - 7 أيام' },
    { name: 'متجر إلكتروني',   time: '7 - 14 يوم' },
    { name: 'تطوير / تحديث',   time: 'حسب المطلوب' }
  ],
  portfolio: [
    { name: 'واجهة مطعم فاخر', sub: 'Restaurant Experience', img: '', link: '', category: 'Hospitality', summary: 'حجز سريع، منيو واضح، وصور واجهة مصممة لفتح الشهية من أول شاشة.', outcome: 'تحويل الزائر من التصفح للحجز', tags: ['RTL', 'Booking', 'Menu'], accent: '#00b4d8', featured: true },
    { name: 'هوية جيم رقمية', sub: 'Fitness Landing', img: '', link: '', category: 'Fitness', summary: 'واجهة قوية بإيقاع بصري سريع تعرض الاشتراكات، المدربين، وبرامج التمرين.', outcome: 'إبراز الطاقة والثقة', tags: ['Motion', 'Plans', 'CTA'], accent: '#34d399' },
    { name: 'متجر إلكتروني مصغر', sub: 'Commerce UI', img: '', link: '', category: 'E-commerce', summary: 'تصميم متجر خفيف يركز على المنتج، السعر، والثقة قبل الدفع.', outcome: 'رحلة شراء أبسط', tags: ['Products', 'Checkout', 'Trust'], accent: '#fbbf24' },
    { name: 'موقع محامي احترافي', sub: 'Legal Profile', img: '', link: '', category: 'Professional', summary: 'واجهة هادئة تبني الثقة عبر الخبرة، الخدمات، وطرق التواصل السريعة.', outcome: 'مصداقية أعلى للعميل', tags: ['Trust', 'Content', 'SEO'], accent: '#60a5fa' },
    { name: 'واجهة عيادة طبية', sub: 'Clinic Website', img: '', link: '', category: 'Healthcare', summary: 'تجربة واضحة لحجز موعد، عرض التخصصات، والإجابة على أسئلة المريض.', outcome: 'تقليل الاحتكاك قبل الحجز', tags: ['Booking', 'FAQ', 'Mobile'], accent: '#00f5ff' },
    { name: 'بورتفوليو شخصي', sub: 'Personal Brand', img: '', link: '', category: 'Portfolio', summary: 'عرض مهارات وأعمال الشخص في قصة واحدة واضحة تقنع العميل بسرعة.', outcome: 'هوية شخصية قابلة للتذكر', tags: ['Brand', 'Cases', 'Contact'], accent: '#8b5cf6' }
  ],
  faq: {
    tag: 'FAQ',
    title: 'أسئلة شائعة',
    sub: 'إجابات واضحة على أكثر الأسئلة اللي بيسألها العملاء قبل ما يبدأوا.',
    items: [
      {
        q: 'إيه اللي بيميزك عن غيرك؟',
        a: 'بجمع بين التصميم الجمالي والكود النظيف السريع، مع الالتزام التام بالمواعيد وضمان تجربة مستخدم واضحة ومريحة. مش بشتغل على قوالب جاهزة بنسبة كبيرة — كل مشروع بيتصمم من الصفر بمنهجية محددة.'
      },
      {
        q: 'هل ممكن أعدل على الموقع بعد التسليم؟',
        a: 'أيوه، بقدم فترة دعم مجاني بعد التسليم للإصلاحات والتعديلات الصغيرة. وفي حالة التعديلات الكبيرة بنتفاهم على تفاصيلها ووقتها.'
      },
      {
        q: 'إيه التقنيات اللي بستخدمها؟',
        a: 'بشتغل بـ HTML5, CSS3, JavaScript وReact.js للواجهات الأمامية، مع Firebase لقواعد البيانات وتسجيل الدخول، وتصميم متجاوب كامل بدون اعتماد على قوالب.'
      },
      {
        q: 'إيه المدة الزمنية لتنفيذ موقعي؟',
        a: 'بتفاوت حسب نوع الموقع: Landing Page من يومين لـ 3، والبورتفوليو من 3 لـ 5 أيام، وموقع الشركة من 5 لـ 7 أيام. المتجر الإلكتروني بياخد من أسبوع لأسبوعين.'
      },
      {
        q: 'كيف يتم التواصل والمتابعة أثناء التنفيذ؟',
        a: 'بتتواصل معايا عبر واتساب أو تيليجرام وبحدثك على كل مرحلة من مراحل العمل. بخليك تشوف الموقع أونلاين قبل ما يتسلم لو محتاج تعديلات.'
      },
      {
        q: 'هل الموقع بيكون ظاهر على جوجل؟',
        a: 'أيوه، بطبق أساسيات الـ SEO (العناوين، الوصف، سرعة التحميل، الهيكل) في كل المشاريع. الظهور الأعلى في النتائج بيحتاج استراتيجية محتوى إضافية.'
      }
    ]
  },
  contact: {
    phone: '01040128359',
    whatsapp: '201040128359',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    telegram: 'https://t.me/MohamedNasser'
  },
  general: {
    footer: '© 2026 Hydra — جميع الحقوق محفوظة'
  }
};

// ============================================================
//  FIREBASE HELPER
// ============================================================
async function fetchFromFirebase(key) {
  if (!window.db) {
    console.warn('Firebase not ready. Using defaults for:', key);
    return DEFAULTS[key];
  }
  try {
    const docRef = window.doc(window.db, 'website', key);
    const docSnap = await window.getDoc(docRef);
    if (docSnap.exists()) {
      const raw = docSnap.data();
      const data = raw.value !== undefined ? raw.value : raw;
      if (Array.isArray(DEFAULTS[key]) && !Array.isArray(data)) return DEFAULTS[key];
      return data;
    }
    return DEFAULTS[key];
  } catch (err) {
    console.error('Firestore error:', err);
    return DEFAULTS[key];
  }
}

// ============================================================
//  SVG ICON MAPS
// ============================================================
const SKILL_ICONS = {
  html:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  css:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0M6.3 17.7a8 8 0 0 1 0-11.4M17.7 17.7a8 8 0 0 0 0-11.4"/></svg>`,
  js:         `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  react:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.5"/><path d="M12 5C14.8 5 20 8.1 20 12S14.8 19 12 19 4 15.9 4 12 9.2 5 12 5Z"/><path d="M7.7 7.7C5.5 11 5.5 13 7.7 16.3M16.3 7.7C18.5 11 18.5 13 16.3 16.3"/></svg>`,
  bootstrap:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 7h5a2.5 2.5 0 1 1 0 5H7V7z"/><path d="M7 12h6a2.5 2.5 0 1 1 0 5H7v-5z"/></svg>`,
  tailwind:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-4.97 0-8 2.5-8 6.25 0 3.75 2 6.25 6 6.25 4 0 6 2.5 6 6.25 0 3.75-3.03 6.25-8 6.25m8-18.75C18 5.5 20 8 20 11.75 20 15.5 18 18 14 18"/></svg>`,
  firebase:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20L9 4l4 8 3-5 4 13L4 20z"/></svg>`,
  git:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>`,
  responsive: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  default:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>`
};

const SERVICE_ICONS = {
  landing:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  portfolio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`,
  business:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  seo:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  default:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
};

const DELIVERY_ICONS = [
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
];

const PORT_CLASSES = ['p-restaurant','p-gym','p-store','p-lawyer','p-clinic','p-portfolio'];

// ============================================================
//  INTERSECTION OBSERVER (AOS)
// ============================================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('animated'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

function observeAll() {
  document.querySelectorAll('[data-aos]:not(.animated)').forEach(el => observer.observe(el));
}

// ============================================================
//  APPLY: HERO
// ============================================================
async function applyHero() {
  const d = await fetchFromFirebase('hero');
  if (!d) return;

  // Logo
  const navLogoImg  = document.getElementById('navLogoImg');
  const navLogoText = document.getElementById('navLogoText');
  const avatarImg   = document.getElementById('avatarImg');
  const avatarText  = document.getElementById('avatarText');

  const logoText = (d.logo && d.logo !== 'MN') ? d.logo : DEFAULTS.hero.logo;

  if (navLogoImg && navLogoText) {
    const logoUrl = 'img/logo.png';
    navLogoImg.onload = () => {
      navLogoImg.style.display = 'block';
      navLogoText.style.display = 'none';
    };
    navLogoImg.onerror = () => {
      navLogoImg.style.display = 'none';
      navLogoText.style.display = 'block';
      navLogoText.textContent = `${logoText}.`;
    };
    navLogoImg.src = logoUrl;
  }

  // Avatar
  if (avatarImg && avatarText) {
    const avUrl = 'img/logo.png';
    const avText = (d.logo && d.logo !== 'MN') ? d.logo : DEFAULTS.hero.logo;
    avatarImg.onload = () => {
      avatarImg.style.display = 'block';
      avatarText.style.display = 'none';
    };
    avatarImg.onerror = () => {
      avatarImg.style.display = 'none';
      avatarText.style.display = 'block';
      avatarText.textContent = avText;
    };
    avatarImg.src = avUrl;
  }

  const nameVal  = (d.name && d.name.trim()  && d.name  !== 'Mohamed Nasser') ? d.name  : DEFAULTS.hero.name;
  const titleVal = freshValue(d.title, DEFAULTS.hero.title, ['Web Designer & Developer', 'Front-End Web Developer', 'Front-End Developer']);
  const descVal  = freshValue(d.desc, DEFAULTS.hero.desc, ['أصمم وأطور مواقع حديثة وسريعة ومتجاوبة', 'متخصص في تصميم وتطوير']);

  setText('heroEyebrow',  freshValue(d.eyebrow, DEFAULTS.hero.eyebrow, ['متاح للمشاريع الجديدة']));
  setText('heroName',     nameVal);
  setText('heroTitle',    titleVal);
  setText('heroDesc',     descVal);

  const ctaEl = document.getElementById('heroCta');
  if (ctaEl) {
    const ctaText = freshValue(d.cta, DEFAULTS.hero.cta, ['اطلب موقعك الآن']);
    ctaEl.childNodes[0].textContent = ctaText + ' ';
  }

  setText('stat1Val',   freshValue(d.stat1Val, DEFAULTS.hero.stat1Val, ['+20']));
  setText('stat1Label', freshValue(d.stat1Label, DEFAULTS.hero.stat1Label, ['واجهة جاهزة للتطوير']));
  setText('stat2Val',   freshValue(d.stat2Val, DEFAULTS.hero.stat2Val, ['100%']));
  setText('stat2Label', freshValue(d.stat2Label, DEFAULTS.hero.stat2Label, ['متوافق مع الموبايل']));
  setText('stat3Val',   freshValue(d.stat3Val, DEFAULTS.hero.stat3Val, ['SEO']));
  setText('stat3Label', freshValue(d.stat3Label, DEFAULTS.hero.stat3Label, ['أساسيات ظهور منظمة']));
}

// ============================================================
//  APPLY: ABOUT
// ============================================================
async function applyAbout() {
  const d = await fetchFromFirebase('about');
  if (!d) return;

  const bioVal = (d.bio && !d.bio.includes('محمد ناصر')) ? d.bio : DEFAULTS.about.bio;

  setText('aboutTag',      d.tag   || DEFAULTS.about.tag);
  setText('aboutTitle',    freshValue(d.title, DEFAULTS.about.title, ['من أنا؟']));
  setText('aboutSub',      freshValue(d.sub, DEFAULTS.about.sub, ['شغوف بالتفاصيل والجمال البصري']));
  setText('aboutBio',      bioVal);
  setText('aboutStat1Num', d.stat1Num   || DEFAULTS.about.stat1Num);
  setText('aboutStat1Label', d.stat1Label || DEFAULTS.about.stat1Label);
  setText('aboutStat2Num', d.stat2Num   || DEFAULTS.about.stat2Num);
  setText('aboutStat2Label', d.stat2Label || DEFAULTS.about.stat2Label);
  setText('aboutStat3Num', d.stat3Num   || DEFAULTS.about.stat3Num);
  setText('aboutStat3Label', d.stat3Label || DEFAULTS.about.stat3Label);

  const valList = document.getElementById('aboutValuesList');
  if (valList && Array.isArray(d.values)) {
    valList.innerHTML = d.values.map(v => `
      <li>
        <span class="values-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
        </span>
        <span>${escapeHTML(v)}</span>
      </li>
    `).join('');
  }
}

// ============================================================
//  APPLY: SERVICES
// ============================================================
async function applyServices() {
  const d = await fetchFromFirebase('services');
  if (!d) return;

  setText('servicesTag',   d.tag   || DEFAULTS.services.tag);
  setText('servicesTitle', freshValue(d.title, DEFAULTS.services.title, ['ماذا أقدم لك؟']));
  setText('servicesSub',   freshValue(d.sub, DEFAULTS.services.sub, ['خدمات تطوير ويب متكاملة']));

  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  const sourceItems = d.items || DEFAULTS.services.items;
  const hasLegacyServices = Array.isArray(sourceItems) && sourceItems.some(item => ['Landing Page احترافية', 'موقع شركة أو متجر'].includes(item.title));
  const items = hasLegacyServices ? DEFAULTS.services.items : sourceItems;
  grid.innerHTML = items.map(svc => `
    <div class="service-card" data-aos>
      <div class="service-icon">
        ${SERVICE_ICONS[svc.icon] || SERVICE_ICONS.default}
      </div>
      <h3>${escapeHTML(svc.title)}</h3>
      <p>${escapeHTML(svc.desc)}</p>
      ${svc.features && svc.features.length ? `
        <ul class="service-features">
          ${svc.features.map(f => `<li>${escapeHTML(f)}</li>`).join('')}
        </ul>
      ` : ''}
    </div>
  `).join('');
  observeAll();
}

// ============================================================
//  APPLY: DELIVERY TIMELINE
// ============================================================
async function applyDelivery() {
  const items   = await fetchFromFirebase('delivery');
  const headers = await fetchFromFirebase('headers');
  if (!items || !headers) return;

  setText('deliveryTitle', freshValue(headers.delivery?.title, DEFAULTS.headers.delivery.title, ['خطة عمل واضحة']));
  setText('deliverySub',   freshValue(headers.delivery?.sub, DEFAULTS.headers.delivery.sub, ['كل مرحلة لها نتيجة ملموسة']));

  const tl = document.getElementById('deliveryTimeline');
  if (!tl || !Array.isArray(items)) return;
  tl.innerHTML = items.map((t, i) => `
    <div class="timeline-item" data-aos>
      <div class="tl-icon">${DELIVERY_ICONS[i] || DELIVERY_ICONS[0]}</div>
      <div class="tl-content">
        <h3>${escapeHTML(t.name)}</h3>
        <span class="tl-time">${escapeHTML(t.time)}</span>
      </div>
    </div>
  `).join('');
  observeAll();
}

// ============================================================
//  APPLY: SKILLS
// ============================================================
async function applySkills() {
  const items   = await fetchFromFirebase('skills');
  const headers = await fetchFromFirebase('headers');
  if (!items || !headers) return;

  setText('skillsTitle', freshValue(headers.skills?.title, DEFAULTS.headers.skills.title, ['الأدوات والتقنيات']));
  setText('skillsSub',   freshValue(headers.skills?.sub, DEFAULTS.headers.skills.sub, ['أدوات مناسبة لبناء مواقع ثابتة']));

  const grid = document.getElementById('skillsGrid');
  if (!grid || !Array.isArray(items)) return;
  grid.innerHTML = items.map(s => `
    <div class="skill-card" data-aos>
      <div class="skill-icon">${SKILL_ICONS[s.icon] || SKILL_ICONS.default}</div>
      <h3>${escapeHTML(s.name)}</h3>
    </div>
  `).join('');
  observeAll();
}

// ============================================================
//  APPLY: PORTFOLIO
// ============================================================
async function applyPortfolio() {
  const items   = await fetchFromFirebase('portfolio');
  const headers = await fetchFromFirebase('headers');
  if (!items || !headers) return;

  setText('portfolioTitle', freshValue(headers.portfolio?.title, DEFAULTS.headers.portfolio.title, ['نماذج أعمال', 'معرض الأعمال']));
  setText('portfolioSub',   freshValue(headers.portfolio?.sub, DEFAULTS.headers.portfolio.sub, ['أفكار قابلة للتنفيذ', 'أحدث مشاريعي وأعمالي']));

  const grid = document.getElementById('portfolioGrid');
  if (!grid || !Array.isArray(items)) return;
  const normalizedItems = items.map((p, i) => (!p.category && !p.summary && DEFAULTS.portfolio[i]) ? {
    ...DEFAULTS.portfolio[i],
    img: p.img || '',
    link: p.link || ''
  } : p);
  grid.innerHTML = normalizedItems.map((p, i) => {
    const img = safeAssetUrl(p.img);
    const liveUrl = safeHttpUrl(p.link);
    const tags = Array.isArray(p.tags) ? p.tags : [];
    const accent = safeColor(p.accent) || DEFAULTS.portfolio[i]?.accent || '#00b4d8';
    const featured = p.featured || i === 0;
    return `
    <div class="port-card ${featured ? 'featured' : ''}" data-aos style="--case-accent:${accent}">
      <div class="port-img ${PORT_CLASSES[i] || 'p-restaurant'}"
           ${img ? `style="background-image:linear-gradient(rgba(5,8,14,0.28), rgba(5,8,14,0.78)), url('${img}');"` : ''}>
        <div class="port-overlay">
          ${liveUrl ? `<a href="${liveUrl}" target="_blank" rel="noopener" class="btn-live">معاينة مباشرة</a>` : ''}
          <a href="#contact" class="btn-preview">طلب مشابه</a>
        </div>
        ${!img ? `
          <div class="port-mockup">
            <div class="mock-bar"></div>
            <div class="mock-hero">
              <span></span><strong></strong>
            </div>
            <div class="mock-cards"><div></div><div></div><div></div></div>
          </div>
        ` : ''}
      </div>
      <div class="port-info">
        <div class="case-kicker">${escapeHTML(p.category || 'Case Study')}</div>
        <h3>${escapeHTML(p.name)}</h3>
        <span>${escapeHTML(p.sub)}</span>
        <p>${escapeHTML(p.summary || DEFAULTS.portfolio[i]?.summary || 'واجهة مصممة بعناية لتقديم تجربة واضحة وسريعة ومقنعة.')}</p>
        <div class="case-outcome">${escapeHTML(p.outcome || DEFAULTS.portfolio[i]?.outcome || 'تجربة أوضح للزائر')}</div>
        ${tags.length ? `<div class="case-tags">${tags.slice(0, 4).map(tag => `<b>${escapeHTML(tag)}</b>`).join('')}</div>` : ''}
      </div>
    </div>
  `;
  }).join('');
  observeAll();
}

// ============================================================
//  APPLY: FAQ
// ============================================================
async function applyFaq() {
  const d = await fetchFromFirebase('faq');
  if (!d) return;

  setText('faqTitle', d.title || DEFAULTS.faq.title);
  setText('faqSub',   d.sub   || DEFAULTS.faq.sub);

  const list = document.getElementById('faqList');
  if (!list) return;
  const items = d.items || DEFAULTS.faq.items;
  list.innerHTML = items.map((item, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-question" onclick="toggleFaq(${i})" aria-expanded="false">
        <span>${escapeHTML(item.q)}</span>
        <span class="faq-chevron">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </span>
      </button>
      <div class="faq-answer" id="faq-answer-${i}">
        <div class="faq-answer-inner">${escapeHTML(item.a)}</div>
      </div>
    </div>
  `).join('');
}

function toggleFaq(index) {
  const item   = document.getElementById(`faq-${index}`);
  const answer = document.getElementById(`faq-answer-${index}`);
  const btn    = item.querySelector('.faq-question');
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-item.open').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-answer').style.maxHeight = '0';
    el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
  });

  if (!isOpen) {
    item.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
    btn.setAttribute('aria-expanded', 'true');
  }
}

// ============================================================
//  APPLY: CONTACT
// ============================================================
async function applyContact() {
  const d       = await fetchFromFirebase('contact');
  const headers = await fetchFromFirebase('headers');
  if (!d || !headers) return;

  setText('contactTitle', freshValue(headers.contact?.title, DEFAULTS.headers.contact.title, ['ابدأ مشروعك الآن']));
  setText('contactSub',   freshValue(headers.contact?.sub, DEFAULTS.headers.contact.sub, ['اختار طريقة التواصل المناسبة']));

  const cards = {
    phone:     { el: 'cardPhone',     val: d.phone,     type: 'phone' },
    whatsapp:  { el: 'cardWhatsapp',  val: d.whatsapp,  type: 'wa' },
    facebook:  { el: 'cardFacebook',  val: d.facebook,  type: 'url' },
    instagram: { el: 'cardInstagram', val: d.instagram, type: 'url' },
    telegram:  { el: 'cardTelegram',  val: d.telegram,  type: 'url' }
  };

  for (const [key, { el, val, type }] of Object.entries(cards)) {
    const cardEl = document.getElementById(el);
    if (!cardEl) continue;
    if (!val || val === '#' || !val.trim()) {
      cardEl.style.display = 'none';
      continue;
    }
    cardEl.style.display = '';
    if (type === 'phone') {
      const cleaned = val.replace(/[^\d+]/g, '');
      cardEl.href = 'tel:' + cleaned;
      const p = cardEl.querySelector('#phoneDisplay');
      if (p) p.textContent = val;
    }
    else if (type === 'wa') cardEl.href = 'https://wa.me/' + val.replace(/\D/g, '');
    else {
      const url = safeHttpUrl(val);
      if (url) cardEl.href = url;
      else cardEl.style.display = 'none';
    }
  }
}

// ============================================================
//  APPLY: GENERAL (footer)
// ============================================================
async function applyGeneral() {
  const d = await fetchFromFirebase('general');
  if (d && d.footer) setText('footerText', d.footer);
}

// ============================================================
//  UTILITY
// ============================================================
function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value !== undefined && value !== null) el.textContent = value;
}

function freshValue(value, fallback, legacyNeedles = []) {
  const text = String(value || '').trim();
  if (!text) return fallback;
  return legacyNeedles.some(needle => text.includes(needle)) ? fallback : text;
}

function escapeHTML(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function safeHttpUrl(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  try {
    const url = new URL(raw, window.location.href);
    return ['http:', 'https:', 'mailto:', 'tel:'].includes(url.protocol) ? escapeHTML(url.href) : '';
  } catch {
    return '';
  }
}

function safeAssetUrl(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  if (raw.startsWith('data:image/')) return raw.replace(/'/g, '%27').replace(/"/g, '%22');
  if (/^(img|assets)\//i.test(raw) && !raw.includes('..')) return escapeHTML(raw.replace(/'/g, '%27').replace(/"/g, '%22'));
  return safeHttpUrl(raw);
}

function safeColor(value) {
  const raw = String(value || '').trim();
  return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(raw) ? raw : '';
}

// ============================================================
//  PARTICLES
// ============================================================
(function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 35; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const isIndigo = Math.random() > 0.5;
    p.style.cssText = `
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      --d:${5 + Math.random()*7}s;
      --delay:-${Math.random()*7}s;
      width:${1 + Math.random()*2}px;
      height:${1 + Math.random()*2}px;
      background:${isIndigo ? '#6366f1' : '#38bdf8'};
      opacity:${0.2 + Math.random()*0.5};
    `;
    container.appendChild(p);
  }
})();

// ============================================================
//  NAVBAR
// ============================================================
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  scrollTopBtn.classList.toggle('show', window.scrollY > 400);
  updateActiveNav();
}, { passive: true });

scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}));

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY  = window.scrollY + 90;
  sections.forEach(s => {
    const link = document.querySelector(`.nav-links a[href="#${s.id}"]`);
    if (link) {
      link.classList.toggle('active', scrollY >= s.offsetTop && scrollY < s.offsetTop + s.offsetHeight);
    }
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ============================================================
//  BENTO CARD — mouse-tracking glow
// ============================================================
document.addEventListener('mousemove', e => {
  document.querySelectorAll('.bento-card').forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
    const y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
    card.style.setProperty('--mx', x + '%');
    card.style.setProperty('--my', y + '%');
  });
});

// ============================================================
//  LOADER
// ============================================================
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hide');
  }, 500);
});

// ============================================================
//  INIT
// ============================================================
async function init() {
  if (!window.db) await new Promise(r => setTimeout(r, 120));
  await Promise.all([
    applyHero(),
    applyAbout(),
    applyServices(),
    applyDelivery(),
    applySkills(),
    applyPortfolio(),
    applyFaq(),
    applyContact(),
    applyGeneral()
  ]);
  observeAll();
}

init();
