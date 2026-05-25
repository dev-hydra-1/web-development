// ============================================================
//  DEFAULT DATA — mirrors script.js DEFAULTS
// ============================================================
const DEFAULTS = {
  hero: {
    name:'Hydra', title:'Creative Front-End Developer', logo:'Hydra', logoImg:'img/logo.png', avatarImg:'img/logo.png',
    eyebrow:'بورتفوليو شخصي جاهز للتعاون',
    desc:'أبني واجهات ويب جريئة وسريعة تجمع بين هوية بصرية قوية، حركة محسوبة، وكود منظم يجعل التجربة تبدو مميزة من أول تفاعل.',
    cta:'ابدأ تعاونك معي',
    stat1Val:'+30', stat1Label:'تجربة واجهة مصممة',
    stat2Val:'95+', stat2Label:'هدف أداء وتجربة',
    stat3Val:'RTL',  stat3Label:'واجهات عربية متقنة'
  },
  general: { footer:'© 2026 Hydra — جميع الحقوق محفوظة' },
  about: {
    tag:'عني', title:'أنا Hydra', sub:'مطور واجهات يهتم بأن يشعر الموقع كأنه منتج حقيقي، لا مجرد صفحة جميلة.',
    bio:'أصمم وأطور واجهات ويب ذات شخصية واضحة: بداية من الفكرة والهوية، مرورا بالتفاعل والحركة، وصولا لكود نظيف قابل للتوسع.',
    stat1Num:'+3', stat1Label:'سنوات خبرة',
    stat2Num:'+30', stat2Label:'مشروع منجز',
    stat3Num:'100%', stat3Label:'رضا العملاء',
    values:['هوية قوية قبل أي مؤثر بصري','حركة تخدم الرسالة ولا تسرق الانتباه','كود نظيف يسهل تطويره بعد التسليم','تجربة عربية RTL بنفس جودة الواجهات العالمية']
  },
  services: {
    tag:'الخدمات', title:'ما الذي أبنيه؟', sub:'واجهات ومواقع شخصية وتجارية بتصميم مخصص، أداء سريع، وتجربة قابلة للإدارة.',
    items:[
      {title:'Landing Page احترافية', desc:'صفحة هبوط سريعة ومتجاوبة.', features:['تصميم مخصص','سرعة عالية','متوافق مع الأجهزة'], icon:'landing'},
      {title:'بورتفوليو شخصي', desc:'موقع شخصي يعرضك باحترافية.', features:['تصميم يعكس شخصيتك','سيو محسَّن','سهل التحديث'], icon:'portfolio'},
      {title:'موقع شركة أو متجر', desc:'موقع كامل مع لوحة تحكم.', features:['CMS كامل','متعدد الصفحات','تحسين محركات البحث'], icon:'business'},
      {title:'تحسين الأداء والسيو', desc:'تحليل وتحسين موقعك الحالي.', features:['Core Web Vitals','ضغط الأصول','SEO On-Page'], icon:'seo'}
    ]
  },
  headers: {
    delivery:{title:'كيف يتحول المشروع لواجهة حقيقية؟', sub:'خطوات قصيرة وواضحة من الفكرة إلى نسخة جاهزة للنشر.'},
    portfolio:{title:'دراسات حالة مصممة', sub:'نماذج واجهات توضح طريقة التفكير، النتيجة، ومستوى العناية بالتفاصيل.'},
    contact:{title:'جاهز نبدأ؟', sub:'أرسل فكرة موقعك أو رابط مشروعك الحالي، ونحدد أفضل شكل للتطوير.'},
    skills:{title:'Stack أستخدمه بوعي', sub:'أدوات بسيطة وقوية لبناء واجهات سريعة، متجاوبة، وقابلة للإدارة.'}
  },
  skills:[
    {name:'HTML5',icon:'html'},{name:'CSS3',icon:'css'},{name:'JavaScript',icon:'js'},
    {name:'React.js',icon:'react'},{name:'Bootstrap',icon:'bootstrap'},{name:'Tailwind CSS',icon:'tailwind'},
    {name:'Firebase',icon:'firebase'},{name:'Git & GitHub',icon:'git'},{name:'Responsive',icon:'responsive'}
  ],
  delivery:[
    {name:'Landing Page',time:'2 - 3 أيام'},{name:'بورتفوليو شخصي',time:'3 - 5 أيام'},
    {name:'موقع شركة',time:'5 - 7 أيام'},{name:'متجر إلكتروني',time:'7 - 14 يوم'},
    {name:'تطوير / تحديث',time:'حسب المطلوب'}
  ],
  portfolio:[
    {name:'واجهة مطعم فاخر',sub:'Restaurant Experience',img:'',link:'',category:'Hospitality',summary:'حجز سريع، منيو واضح، وصور واجهة مصممة لفتح الشهية من أول شاشة.',outcome:'تحويل الزائر من التصفح للحجز',tags:['RTL','Booking','Menu'],accent:'#00b4d8',featured:true},
    {name:'هوية جيم رقمية',sub:'Fitness Landing',img:'',link:'',category:'Fitness',summary:'واجهة قوية بإيقاع بصري سريع تعرض الاشتراكات، المدربين، وبرامج التمرين.',outcome:'إبراز الطاقة والثقة',tags:['Motion','Plans','CTA'],accent:'#34d399'},
    {name:'متجر إلكتروني مصغر',sub:'Commerce UI',img:'',link:'',category:'E-commerce',summary:'تصميم متجر خفيف يركز على المنتج، السعر، والثقة قبل الدفع.',outcome:'رحلة شراء أبسط',tags:['Products','Checkout','Trust'],accent:'#fbbf24'},
    {name:'موقع محامي احترافي',sub:'Legal Profile',img:'',link:'',category:'Professional',summary:'واجهة هادئة تبني الثقة عبر الخبرة، الخدمات، وطرق التواصل السريعة.',outcome:'مصداقية أعلى للعميل',tags:['Trust','Content','SEO'],accent:'#60a5fa'},
    {name:'واجهة عيادة طبية',sub:'Clinic Website',img:'',link:'',category:'Healthcare',summary:'تجربة واضحة لحجز موعد، عرض التخصصات، والإجابة على أسئلة المريض.',outcome:'تقليل الاحتكاك قبل الحجز',tags:['Booking','FAQ','Mobile'],accent:'#00f5ff'},
    {name:'بورتفوليو شخصي',sub:'Personal Brand',img:'',link:'',category:'Portfolio',summary:'عرض مهارات وأعمال الشخص في قصة واحدة واضحة تقنع العميل بسرعة.',outcome:'هوية شخصية قابلة للتذكر',tags:['Brand','Cases','Contact'],accent:'#8b5cf6'}
  ],
  faq:{
    tag:'FAQ', title:'أسئلة شائعة', sub:'إجابات واضحة على أكثر الأسئلة.',
    items:[
      {q:'إيه اللي بيميزك عن غيرك؟',a:'بجمع بين التصميم الجمالي والكود النظيف السريع مع الالتزام بالمواعيد وضمان تجربة مستخدم ممتازة.'},
      {q:'هل ممكن أعدل على الموقع بعد التسليم؟',a:'أيوه، بقدم فترة دعم مجاني بعد التسليم للإصلاحات والتعديلات الصغيرة.'},
      {q:'إيه التقنيات اللي بستخدمها؟',a:'HTML5, CSS3, JavaScript, React.js, Firebase, وتصميم متجاوب كامل.'},
      {q:'إيه المدة الزمنية لتنفيذ موقعي؟',a:'Landing Page 2-3 أيام، بورتفوليو 3-5، شركة 5-7، متجر 7-14 يوم.'},
      {q:'كيف يتم التواصل أثناء التنفيذ؟',a:'عبر واتساب أو تيليجرام مع تحديثات منتظمة على كل مرحلة.'},
      {q:'هل الموقع بيكون ظاهر على جوجل؟',a:'أيوه، بطبق أساسيات الـ SEO في كل المشاريع.'}
    ]
  },
  contact:{phone:'01040128359',whatsapp:'201040128359',facebook:'https://facebook.com',instagram:'https://instagram.com',telegram:'https://t.me/MohamedNasser'}
};

// Global mutable state for dynamic lists
let currentData = {};

// ============================================================
//  FIREBASE HELPERS
// ============================================================
async function fetchFromFirebase(key) {
  try {
    const docRef  = window.doc(window.db, 'website', key);
    const docSnap = await window.getDoc(docRef);
    if (docSnap.exists()) {
      const raw  = docSnap.data();
      const data = (raw.value !== undefined) ? raw.value : raw;
      if (Array.isArray(DEFAULTS[key]) && !Array.isArray(data)) return DEFAULTS[key];
      return data;
    }
    return DEFAULTS[key];
  } catch(e) { console.error(e); return DEFAULTS[key]; }
}

async function saveToFirebase(key, value) {
  try {
    const docRef = window.doc(window.db, 'website', key);
    await window.setDoc(docRef, { value, updatedAt: new Date() });
    return true;
  } catch(e) { console.error(e); return false; }
}

// ============================================================
//  TOAST
// ============================================================
function showToast(msg = 'تم الحفظ بنجاح!', isError = false) {
  const t   = document.getElementById('toast');
  const dot = t.querySelector('.toast-dot');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.toggle('error', isError);
  if (dot) dot.style.background = isError ? 'var(--rose)' : 'var(--emerald)';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ============================================================
//  AUTH
// ============================================================
function initAuth() {
  const timeout = setTimeout(() => {
    const l = document.getElementById('adminLoader');
    if (l && !l.classList.contains('hide')) { l.classList.add('hide'); showLoginPage(); }
  }, 4000);

  if (!window.auth) { setTimeout(initAuth, 150); return; }

  window.onAuthStateChanged(window.auth, user => {
    clearTimeout(timeout);
    setTimeout(() => document.getElementById('adminLoader').classList.add('hide'), 400);
    if (user) showDashboard(user);
    else showLoginPage();
  });
}

async function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const pass  = document.getElementById('password').value;
  const errEl = document.getElementById('loginError');
  const btn   = e.target.querySelector('button');
  btn.disabled = true; btn.textContent = 'جاري التحقق…';
  try {
    await window.signInWithEmailAndPassword(window.auth, email, pass);
    errEl.style.display = 'none';
  } catch(err) {
    errEl.style.display = 'block';
    errEl.textContent = '❌ ' + (err.code === 'auth/wrong-password' ? 'كلمة المرور غلط' : err.code === 'auth/user-not-found' ? 'البريد غير مسجل' : err.message);
  } finally {
    btn.disabled = false; btn.textContent = 'دخول للوحة التحكم';
  }
}

function showDashboard(user) {
  document.getElementById('loginPage').style.display  = 'none';
  document.getElementById('dashboard').style.display  = 'flex';
  const ced = document.getElementById('currentEmailDisplay');
  if (ced) ced.textContent = user.email;
  loadAllFields();
}

function showLoginPage() {
  document.getElementById('loginPage').style.display  = 'flex';
  document.getElementById('dashboard').style.display  = 'none';
}

async function logout() { await window.signOut(window.auth); location.reload(); }

// ============================================================
//  PANELS
// ============================================================
function showPanel(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  if (panel) panel.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => {
    if (n.getAttribute('onclick')?.includes(`'${name}'`)) n.classList.add('active');
  });
  document.getElementById('sidebar')?.classList.remove('open');
}

// ============================================================
//  LOAD ALL FIELDS
// ============================================================
async function loadAllFields() {
  // HERO
  const hero = await fetchFromFirebase('hero');
  setVal('siteLogo',       hero.logo      || 'MN');
  setVal('siteLogoImgUrl', hero.logoImg   || '');
  setVal('heroAvatarUrl',  hero.avatarImg || '');
  setVal('heroName',       hero.name);
  setVal('heroTitle',      hero.title);
  setVal('heroEyebrow',    hero.eyebrow  || DEFAULTS.hero.eyebrow);
  setVal('heroDesc',       hero.desc);
  setVal('heroCta',        hero.cta);
  setVal('heroStat1Val',   hero.stat1Val   || DEFAULTS.hero.stat1Val);
  setVal('heroStat1Label', hero.stat1Label || DEFAULTS.hero.stat1Label);
  setVal('heroStat2Val',   hero.stat2Val   || DEFAULTS.hero.stat2Val);
  setVal('heroStat2Label', hero.stat2Label || DEFAULTS.hero.stat2Label);
  setVal('heroStat3Val',   hero.stat3Val   || DEFAULTS.hero.stat3Val);
  setVal('heroStat3Label', hero.stat3Label || DEFAULTS.hero.stat3Label);
  setPreview('logoPreview',   hero.logoImg || DEFAULTS.hero.logoImg || 'img/logo.png');
  setPreview('avatarPreview', hero.avatarImg || DEFAULTS.hero.avatarImg || 'img/logo.png');

  // GENERAL
  const gen = await fetchFromFirebase('general');
  setVal('footerText', gen.footer);

  // ABOUT
  const about = await fetchFromFirebase('about');
  setVal('aboutTitle',    about.title     || DEFAULTS.about.title);
  setVal('aboutSub',      about.sub       || DEFAULTS.about.sub);
  setVal('aboutBio',      about.bio       || DEFAULTS.about.bio);
  setVal('aboutStat1Num', about.stat1Num  || DEFAULTS.about.stat1Num);
  setVal('aboutStat1Label',about.stat1Label|| DEFAULTS.about.stat1Label);
  setVal('aboutStat2Num', about.stat2Num  || DEFAULTS.about.stat2Num);
  setVal('aboutStat2Label',about.stat2Label|| DEFAULTS.about.stat2Label);
  setVal('aboutStat3Num', about.stat3Num  || DEFAULTS.about.stat3Num);
  setVal('aboutStat3Label',about.stat3Label|| DEFAULTS.about.stat3Label);
  currentData.values = Array.isArray(about.values) ? [...about.values] : [...DEFAULTS.about.values];
  renderValues();

  // SERVICES
  const svc = await fetchFromFirebase('services');
  setVal('servicesTitle', svc.title || DEFAULTS.services.title);
  setVal('servicesSub',   svc.sub   || DEFAULTS.services.sub);
  currentData.services = Array.isArray(svc.items) ? JSON.parse(JSON.stringify(svc.items)) : JSON.parse(JSON.stringify(DEFAULTS.services.items));
  renderList('services');
  updateStat('statServices', currentData.services.length);

  // HEADERS
  const headers = await fetchFromFirebase('headers');
  setVal('hDeliveryTitle',  headers.delivery?.title  || DEFAULTS.headers.delivery.title);
  setVal('hDeliverySub',    headers.delivery?.sub    || DEFAULTS.headers.delivery.sub);
  setVal('hPortfolioTitle', headers.portfolio?.title || DEFAULTS.headers.portfolio.title);
  setVal('hPortfolioSub',   headers.portfolio?.sub   || DEFAULTS.headers.portfolio.sub);
  setVal('hContactTitle',   headers.contact?.title   || DEFAULTS.headers.contact.title);
  setVal('hContactSub',     headers.contact?.sub     || DEFAULTS.headers.contact.sub);
  setVal('hSkillsTitle',    headers.skills?.title    || DEFAULTS.headers.skills.title);
  setVal('hSkillsSub',      headers.skills?.sub      || DEFAULTS.headers.skills.sub);

  // DELIVERY
  const delivery = await fetchFromFirebase('delivery');
  currentData.delivery = Array.isArray(delivery) ? [...delivery] : [...DEFAULTS.delivery];
  renderList('delivery');

  // SKILLS
  const skills = await fetchFromFirebase('skills');
  currentData.skills = Array.isArray(skills) ? [...skills] : [...DEFAULTS.skills];
  renderList('skills');

  // PORTFOLIO
  const portfolio = await fetchFromFirebase('portfolio');
  currentData.portfolio = Array.isArray(portfolio) ? JSON.parse(JSON.stringify(portfolio)) : JSON.parse(JSON.stringify(DEFAULTS.portfolio));
  renderList('portfolio');
  updateStat('statProjects', currentData.portfolio.length);

  // FAQ
  const faq = await fetchFromFirebase('faq');
  setVal('faqTitle', faq.title || DEFAULTS.faq.title);
  setVal('faqSub',   faq.sub   || DEFAULTS.faq.sub);
  currentData.faq = Array.isArray(faq.items) ? JSON.parse(JSON.stringify(faq.items)) : JSON.parse(JSON.stringify(DEFAULTS.faq.items));
  renderList('faq');
  updateStat('statFaq', currentData.faq.length);

  // CONTACT
  const contact = await fetchFromFirebase('contact');
  setVal('cPhone',     contact.phone);
  setVal('cWhatsapp',  contact.whatsapp);
  setVal('cFacebook',  contact.facebook);
  setVal('cInstagram', contact.instagram);
  setVal('cTelegram',  contact.telegram);
}

function setVal(id, val) { const el = document.getElementById(id); if (el && val != null) el.value = val; }
function setPreview(id, url) { const el = document.getElementById(id); if (el && url) { el.style.backgroundImage = `url('${url}')`; el.textContent = ''; } }
function updateStat(id, val) { const el = document.getElementById(id); if (el) el.textContent = val; }

// ============================================================
//  RENDER DYNAMIC LISTS
// ============================================================
function renderList(type) {
  const containers = { delivery:'tlItems', portfolio:'portItems', skills:'skillItems', services:'servicesAdmin', faq:'faqItems' };
  const el = document.getElementById(containers[type]);
  if (!el) return;
  const items = currentData[type] || [];

  if (type === 'delivery') {
    el.innerHTML = items.map((p,i) => `
      <div class="list-item-edit">
        <div class="list-item-head">
          <h4>المرحلة ${i+1}</h4>
          <button class="del-btn" onclick="removeItem('delivery',${i})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
            حذف
          </button>
        </div>
        <div class="fields-row">
          <div class="field-group"><label>اسم الخدمة</label><input type="text" onchange="updateItem('delivery',${i},'name',this.value)" value="${esc(p.name)}"></div>
          <div class="field-group"><label>المدة</label><input type="text" onchange="updateItem('delivery',${i},'time',this.value)" value="${esc(p.time)}"></div>
        </div>
      </div>
    `).join('');
  }

  else if (type === 'portfolio') {
    el.innerHTML = items.map((p,i) => `
      <div class="list-item-edit">
        <div class="list-item-head">
          <h4>مشروع ${i+1}</h4>
          <button class="del-btn" onclick="removeItem('portfolio',${i})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
            حذف
          </button>
        </div>
        <div class="field-group"><label>الاسم (عربي)</label><input type="text" onchange="updateItem('portfolio',${i},'name',this.value)" value="${esc(p.name)}"></div>
        <div class="field-group"><label>الاسم (إنجليزي)</label><input type="text" onchange="updateItem('portfolio',${i},'sub',this.value)" value="${esc(p.sub)}"></div>
        <div class="fields-row">
          <div class="field-group"><label>التصنيف</label><input type="text" onchange="updateItem('portfolio',${i},'category',this.value)" value="${esc(p.category||'Case Study')}" placeholder="Portfolio / E-commerce"></div>
          <div class="field-group"><label>لون التمييز</label><input type="text" onchange="updateItem('portfolio',${i},'accent',this.value)" value="${esc(p.accent||'#00b4d8')}" placeholder="#00b4d8"></div>
        </div>
        <div class="field-group"><label>ملخص دراسة الحالة</label><textarea onchange="updateItem('portfolio',${i},'summary',this.value)" style="min-height:74px">${esc(p.summary||'')}</textarea></div>
        <div class="field-group"><label>النتيجة / القيمة</label><input type="text" onchange="updateItem('portfolio',${i},'outcome',this.value)" value="${esc(p.outcome||'')}" placeholder="مثلا: تحويل الزائر من التصفح للحجز"></div>
        <div class="field-group">
          <label>Tags (كل سطر = Tag)</label>
          <textarea onchange="updateItem('portfolio',${i},'tags',this.value.split('\\n').map(x=>x.trim()).filter(Boolean))" style="min-height:74px">${(Array.isArray(p.tags)?p.tags:[]).join('\n')}</textarea>
        </div>
        <label class="inline-check"><input type="checkbox" onchange="updateItem('portfolio',${i},'featured',this.checked)" ${p.featured?'checked':''}> مشروع مميز بحجم أكبر</label>
        <div class="field-group"><label>رابط الصورة (اتركه فارغاً للألوان الافتراضية)</label><input type="text" onchange="updateItem('portfolio',${i},'img',this.value)" value="${esc(p.img||'')}"></div>
        <div class="field-group"><label>رابط المعاينة المباشرة</label><input type="text" onchange="updateItem('portfolio',${i},'link',this.value)" value="${esc(p.link||'')}" placeholder="https://..."></div>
      </div>
    `).join('');
  }

  else if (type === 'skills') {
    el.innerHTML = items.map((p,i) => `
      <div class="list-item-edit">
        <div class="list-item-head">
          <h4>تقنية ${i+1}</h4>
          <button class="del-btn" onclick="removeItem('skills',${i})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
            حذف
          </button>
        </div>
        <div class="fields-row">
          <div class="field-group"><label>الاسم</label><input type="text" onchange="updateItem('skills',${i},'name',this.value)" value="${esc(p.name)}"></div>
          <div class="field-group">
            <label>الأيقونة (اختر من القائمة)</label>
            <select onchange="updateItem('skills',${i},'icon',this.value)">
              ${['html','css','js','react','bootstrap','tailwind','firebase','git','responsive','default'].map(ic => `<option value="${ic}" ${p.icon===ic?'selected':''}>${ic}</option>`).join('')}
            </select>
          </div>
        </div>
      </div>
    `).join('');
  }

  else if (type === 'services') {
    el.innerHTML = items.map((p,i) => `
      <div class="list-item-edit" style="margin-bottom:14px">
        <div class="list-item-head">
          <h4>خدمة ${i+1}</h4>
          <button class="del-btn" onclick="removeItem('services',${i})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
            حذف
          </button>
        </div>
        <div class="fields-row">
          <div class="field-group"><label>عنوان الخدمة</label><input type="text" onchange="updateItem('services',${i},'title',this.value)" value="${esc(p.title)}"></div>
          <div class="field-group">
            <label>أيقونة</label>
            <select onchange="updateItem('services',${i},'icon',this.value)">
              ${['landing','portfolio','business','seo','default'].map(ic => `<option value="${ic}" ${p.icon===ic?'selected':''}>${ic}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="field-group"><label>الوصف</label><textarea onchange="updateItem('services',${i},'desc',this.value)" style="min-height:70px">${esc(p.desc)}</textarea></div>
        <div class="field-group">
          <label>المميزات (كل سطر = ميزة)</label>
          <textarea onchange="updateItem('services',${i},'features',this.value.split('\\n').filter(x=>x.trim()))" style="min-height:70px">${(p.features||[]).join('\n')}</textarea>
        </div>
      </div>
    `).join('');
  }

  else if (type === 'faq') {
    el.innerHTML = items.map((p,i) => `
      <div class="list-item-edit">
        <div class="list-item-head">
          <h4>سؤال ${i+1}</h4>
          <button class="del-btn" onclick="removeItem('faq',${i})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
            حذف
          </button>
        </div>
        <div class="field-group"><label>السؤال</label><input type="text" onchange="updateItem('faq',${i},'q',this.value)" value="${esc(p.q)}"></div>
        <div class="field-group"><label>الإجابة</label><textarea onchange="updateItem('faq',${i},'a',this.value)">${esc(p.a)}</textarea></div>
      </div>
    `).join('');
    updateStat('statFaq', items.length);
  }
}

// ============================================================
//  ABOUT VALUES
// ============================================================
function renderValues() {
  const el = document.getElementById('valuesAdmin');
  if (!el) return;
  const vals = currentData.values || [];
  el.innerHTML = vals.map((v,i) => `
    <div class="values-admin-item">
      <input type="text" value="${esc(v)}" onchange="currentData.values[${i}]=this.value" placeholder="اكتب قيمة…">
      <button class="del-btn" onclick="removeValue(${i})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  `).join('');
}

function addValue() {
  if (!Array.isArray(currentData.values)) currentData.values = [];
  currentData.values.push('');
  renderValues();
}

function removeValue(i) { currentData.values.splice(i,1); renderValues(); }

// ============================================================
//  GENERIC LIST OPERATIONS
// ============================================================
function addItem(type) {
  const defs = {
    delivery:  {name:'',time:''},
    portfolio: {name:'',sub:'',img:'',link:'',category:'Case Study',summary:'',outcome:'',tags:[],accent:'#00b4d8',featured:false},
    skills:    {name:'',icon:'html'},
    services:  {title:'',desc:'',features:[],icon:'default'},
    faq:       {q:'',a:''}
  };
  if (!Array.isArray(currentData[type])) currentData[type] = [];
  currentData[type].push({...defs[type]});
  renderList(type);
}

function removeItem(type, i) {
  currentData[type].splice(i,1);
  renderList(type);
}

function updateItem(type, i, key, val) {
  if (currentData[type] && currentData[type][i] !== undefined) {
    currentData[type][i][key] = val;
  }
}

// ============================================================
//  IMAGE UPLOAD
// ============================================================
function handleFileUpload(event, type) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      const maxDim = 400;
      let width = img.width;
      let height = img.height;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }
      
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      
      const compressedB64 = canvas.toDataURL('image/jpeg', 0.75);
      
      const urlId = type === 'logo' ? 'siteLogoImgUrl' : 'heroAvatarUrl';
      const preId = type === 'logo' ? 'logoPreview'    : 'avatarPreview';
      const el = document.getElementById(urlId);
      if (el) el.value = compressedB64;
      setPreview(preId, compressedB64);
      showToast('تمت معالجة وضغط الصورة بنجاح');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// ============================================================
//  SAVE SECTIONS
// ============================================================
async function saveSection(section) {
  let data = {};
  let ok = false;

  if (section === 'hero') {
    data = {
      logo:       getVal('siteLogo'),
      logoImg:    getVal('siteLogoImgUrl'),
      avatarImg:  getVal('heroAvatarUrl'),
      name:       getVal('heroName'),
      title:      getVal('heroTitle'),
      eyebrow:    getVal('heroEyebrow'),
      desc:       getVal('heroDesc'),
      cta:        getVal('heroCta'),
      stat1Val:   getVal('heroStat1Val'),   stat1Label: getVal('heroStat1Label'),
      stat2Val:   getVal('heroStat2Val'),   stat2Label: getVal('heroStat2Label'),
      stat3Val:   getVal('heroStat3Val'),   stat3Label: getVal('heroStat3Label')
    };
    ok = await saveToFirebase('hero', data);
  }

  else if (section === 'general') {
    ok = await saveToFirebase('general', { footer: getVal('footerText') });
  }

  else if (section === 'about') {
    // Capture any unsaved textarea values from DOM
    document.querySelectorAll('#valuesAdmin .values-admin-item input').forEach((inp, i) => {
      if (currentData.values) currentData.values[i] = inp.value;
    });
    data = {
      tag:        DEFAULTS.about.tag,
      title:      getVal('aboutTitle'),
      sub:        getVal('aboutSub'),
      bio:        getVal('aboutBio'),
      stat1Num:   getVal('aboutStat1Num'),   stat1Label: getVal('aboutStat1Label'),
      stat2Num:   getVal('aboutStat2Num'),   stat2Label: getVal('aboutStat2Label'),
      stat3Num:   getVal('aboutStat3Num'),   stat3Label: getVal('aboutStat3Label'),
      values:     currentData.values || []
    };
    ok = await saveToFirebase('about', data);
  }

  else if (section === 'services') {
    const svcData = { tag: DEFAULTS.services.tag, title: getVal('servicesTitle'), sub: getVal('servicesSub'), items: currentData.services || [] };
    ok = await saveToFirebase('services', svcData);
    updateStat('statServices', (currentData.services||[]).length);
  }

  else if (section === 'delivery') {
    ok = await saveToFirebase('delivery', currentData.delivery || []);
    const headers = await fetchFromFirebase('headers');
    headers.delivery = { title: getVal('hDeliveryTitle'), sub: getVal('hDeliverySub') };
    await saveToFirebase('headers', headers);
  }

  else if (section === 'skills') {
    ok = await saveToFirebase('skills', currentData.skills || []);
    const headers = await fetchFromFirebase('headers');
    headers.skills = { title: getVal('hSkillsTitle'), sub: getVal('hSkillsSub') };
    await saveToFirebase('headers', headers);
  }

  else if (section === 'portfolio') {
    ok = await saveToFirebase('portfolio', currentData.portfolio || []);
    const headers = await fetchFromFirebase('headers');
    headers.portfolio = { title: getVal('hPortfolioTitle'), sub: getVal('hPortfolioSub') };
    await saveToFirebase('headers', headers);
    updateStat('statProjects', (currentData.portfolio||[]).length);
  }

  else if (section === 'faq') {
    const faqData = { tag: DEFAULTS.faq.tag, title: getVal('faqTitle'), sub: getVal('faqSub'), items: currentData.faq || [] };
    ok = await saveToFirebase('faq', faqData);
    updateStat('statFaq', (currentData.faq||[]).length);
  }

  else if (section === 'contact') {
    data = {
      phone:     getVal('cPhone'),
      whatsapp:  getVal('cWhatsapp'),
      facebook:  getVal('cFacebook'),
      instagram: getVal('cInstagram'),
      telegram:  getVal('cTelegram')
    };
    ok = await saveToFirebase('contact', data);
    const headers = await fetchFromFirebase('headers');
    headers.contact = { title: getVal('hContactTitle'), sub: getVal('hContactSub') };
    await saveToFirebase('headers', headers);
  }

  if (ok) showToast('تم الحفظ بنجاح!');
  else     showToast('حدث خطأ أثناء الحفظ!', true);
}

// ============================================================
//  CREDENTIALS
// ============================================================
async function saveCredentials() {
  const newEmail = getVal('newEmail').trim();
  const newPass  = getVal('newPass');
  const confPass = getVal('confirmPass');
  const user = window.auth.currentUser;
  if (!user) return;
  if (newPass && newPass !== confPass) { showToast('كلمة المرور غير متطابقة!', true); return; }
  try {
    if (newEmail && newEmail !== user.email) await window.updateEmail(user, newEmail);
    if (newPass) await window.updatePassword(user, newPass);
    showToast('تم تحديث بيانات الدخول!');
  } catch(e) { showToast('خطأ: ' + e.message, true); }
}

// ============================================================
//  RESET
// ============================================================
async function resetAll() {
  if (!confirm('تحذير: سيتم حذف كل التعديلات والرجوع للبيانات الافتراضية. هل أنت متأكد؟')) return;
  const keys = ['hero','general','about','services','headers','skills','delivery','portfolio','faq','contact'];
  for (const k of keys) { if (DEFAULTS[k]) await saveToFirebase(k, DEFAULTS[k]); }
  showToast('تم إعادة الضبط! جاري التحميل…');
  setTimeout(() => location.reload(), 1500);
}

// ============================================================
//  UTILS
// ============================================================
function getVal(id) { const el = document.getElementById(id); return el ? el.value : ''; }
function esc(s) { return String(s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// ============================================================
//  BOOT
// ============================================================
initAuth();
