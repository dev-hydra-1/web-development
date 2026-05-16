// ============================================================
//  FIREBASE HELPERS
// ============================================================
async function fetchFromFirebase(key) {
  try {
    const docRef = window.doc(window.db, "website", key);
    const docSnap = await window.getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data().value || docSnap.data();
      if (Array.isArray(DEFAULTS[key]) && !Array.isArray(data)) return DEFAULTS[key];
      return data;
    }
    return DEFAULTS[key];
  } catch (e) { console.error(e); return DEFAULTS[key]; }
}

async function saveToFirebase(key, value) {
  try {
    const docRef = window.doc(window.db, "website", key);
    await window.setDoc(docRef, { value: value, updatedAt: new Date() });
    return true;
  } catch (e) { console.error(e); return false; }
}

// ============================================================
//  DEFAULT DATA (Fallback)
// ============================================================
const DEFAULTS = {
  hero: {
    name: 'محمد ناصر', title: 'Front-End Web Developer', logo: 'MN', logoImg: '', avatarImg: '',
    desc: 'متخصص في تصميم وتطوير المواقع الحديثة والسريعة والمتجاوبة لجميع الأجهزة، مع الاهتمام بالتفاصيل وتجربة المستخدم.',
    cta: 'اطلب موقعك الآن'
  },
  general: {
    footer: '© 2026 Mohamed Nasser - جميع الحقوق محفوظة'
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
  ],

  delivery: [
    { name: 'Landing Page', time: '2 - 3 أيام' },
    { name: 'بورتفوليو شخصي', time: '3 - 5 أيام' }
  ],
  portfolio: [
    { name: 'موقع مطعم', sub: 'Restaurant Website', img: '', link: '' },
    { name: 'موقع جيم', sub: 'Gym Website', img: '', link: '' }
  ],
  contact: {
    phone: '01040128359', whatsapp: '201040128359',
    facebook: 'https://facebook.com', instagram: 'https://instagram.com', telegram: 'https://t.me/MohamedNasser'
  }
};

let currentData = {}; // Global state for dynamic lists

function showToast(msg = '✓ تم الحفظ بنجاح!') {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ============================================================
//  AUTH
// ============================================================
function initAuth() {
  // Timeout to hide loader if Firebase fails to init (due to missing config)
  const loaderTimeout = setTimeout(() => {
    const loader = document.getElementById('adminLoader');
    if (loader && !loader.classList.contains('hide')) {
      console.warn("Firebase taking too long. Showing login page for preview.");
      loader.classList.add('hide');
      showLoginPage();
    }
  }, 3000);

  if (!window.auth) {
    setTimeout(initAuth, 100);
    return;
  }

  window.onAuthStateChanged(window.auth, (user) => {
    clearTimeout(loaderTimeout);
    document.getElementById('adminLoader').classList.add('hide');
    if (user) showDashboard(user);
    else showLoginPage();
  });
}

async function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const pass  = document.getElementById('password').value;
  const err   = document.getElementById('loginError');
  const btn   = e.target.querySelector('button');
  btn.disabled = true; btn.textContent = 'جاري الدخول...';
  try {
    await window.signInWithEmailAndPassword(window.auth, email, pass);
    err.style.display = 'none';
  } catch (error) {
    err.style.display = 'block'; err.textContent = '❌ خطأ: ' + error.message;
  } finally {
    btn.disabled = false; btn.textContent = 'دخول للوحة التحكم';
  }
}

function showDashboard(user) {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('dashboard').style.display = 'flex';
  document.getElementById('currentEmailDisplay').textContent = user.email;
  loadAllFields();
}

function showLoginPage() {
  document.getElementById('loginPage').style.display = 'flex';
  document.getElementById('dashboard').style.display = 'none';
}

async function logout() { await window.signOut(window.auth); location.reload(); }

// ============================================================
//  PANELS
// ============================================================
function showPanel(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('panel-' + name).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => {
    const attr = n.getAttribute('onclick');
    if (attr && attr.includes("'" + name + "'")) n.classList.add('active');
  });
  document.getElementById('sidebar').classList.remove('open');
}

// ============================================================
//  LOAD FIELDS
// ============================================================
async function loadAllFields() {
  const hero = await fetchFromFirebase('hero');
  document.getElementById('siteLogo').value  = hero.logo || 'MN';
  document.getElementById('siteLogoImgUrl').value = hero.logoImg || '';
  document.getElementById('heroAvatarUrl').value = hero.avatarImg || '';
  
  if (hero.logoImg) document.getElementById('logoPreview').style.backgroundImage = `url('${hero.logoImg}')`;
  if (hero.avatarImg) document.getElementById('avatarPreview').style.backgroundImage = `url('${hero.avatarImg}')`;

  document.getElementById('heroName').value  = hero.name;
  document.getElementById('heroTitle').value = hero.title;
  document.getElementById('heroDesc').value  = hero.desc;
  document.getElementById('heroCta').value   = hero.cta;

  const general = await fetchFromFirebase('general');
  document.getElementById('footerText').value = general.footer;

  const headers = await fetchFromFirebase('headers');

  document.getElementById('hDeliveryTitle').value = headers.delivery.title;
  document.getElementById('hDeliverySub').value   = headers.delivery.sub;
  document.getElementById('hPortfolioTitle').value = headers.portfolio.title;
  document.getElementById('hPortfolioSub').value   = headers.portfolio.sub;
  document.getElementById('hContactTitle').value = headers.contact.title;
  document.getElementById('hContactSub').value   = headers.contact.sub;
  document.getElementById('hSkillsTitle').value  = headers.skills?.title || 'اللغات والتقنيات';
  document.getElementById('hSkillsSub').value    = headers.skills?.sub || 'أدواتي في بناء المواقع الاحترافية';



  const delivery = await fetchFromFirebase('delivery');
  currentData.delivery = delivery; renderList('delivery');

  const portfolio = await fetchFromFirebase('portfolio');
  currentData.portfolio = portfolio; renderList('portfolio');

  const contact = await fetchFromFirebase('contact');
  document.getElementById('cPhone').value     = contact.phone;
  document.getElementById('cWhatsapp').value  = contact.whatsapp;
  document.getElementById('cFacebook').value  = contact.facebook;
  document.getElementById('cInstagram').value = contact.instagram;
  document.getElementById('cTelegram').value  = contact.telegram;

  const skills = await fetchFromFirebase('skills');
  currentData.skills = Array.isArray(skills) ? skills : (Array.isArray(DEFAULTS.skills) ? DEFAULTS.skills : []);
  renderList('skills');
}

// ============================================================
//  DYNAMIC LISTS
// ============================================================
function renderList(type) {
  const container = { delivery: 'tlItems', portfolio: 'portItems', skills: 'skillItems' }[type];
  const items = currentData[type] || [];
  document.getElementById(container).innerHTML = items.map((p, i) => {

    if (type === 'delivery') return `
      <div class="tl-item-edit">
        <div style="display:flex; justify-content:space-between"><h4>⏱ عنصر ${i+1}</h4><button onclick="removeItem('delivery', ${i})" style="color:var(--red); background:none; border:none; cursor:pointer">✖ حذف</button></div>
        <div class="fields-row">
          <div class="field-group"><label>الخدمة</label><input type="text" onchange="updateItem('delivery',${i},'name',this.value)" value="${p.name}"></div>
          <div class="field-group"><label>المدة</label><input type="text" onchange="updateItem('delivery',${i},'time',this.value)" value="${p.time}"></div>
        </div>
      </div>`;
    if (type === 'portfolio') return `
      <div class="port-item-edit">
        <div style="display:flex; justify-content:space-between"><h4>🖼 مشروع ${i+1}</h4><button onclick="removeItem('portfolio', ${i})" style="color:var(--red); background:none; border:none; cursor:pointer">✖ حذف</button></div>
        <div class="field-group"><label>الاسم (عربي)</label><input type="text" onchange="updateItem('portfolio',${i},'name',this.value)" value="${p.name}"></div>
        <div class="field-group"><label>الاسم (إنجليزي)</label><input type="text" onchange="updateItem('portfolio',${i},'sub',this.value)" value="${p.sub}"></div>
        <div class="field-group"><label>رابط الصورة (URL)</label><input type="text" onchange="updateItem('portfolio',${i},'img',this.value)" value="${p.img || ''}" placeholder="اتركه فارغاً للألوان الافتراضية"></div>
        <div class="field-group"><label>رابط المعاينة المباشرة (Live Link)</label><input type="text" onchange="updateItem('portfolio',${i},'link',this.value)" value="${p.link || ''}" placeholder="https://example.com"></div>
      </div>`;
    if (type === 'skills') return `
      <div class="price-item-edit">
        <div style="display:flex; justify-content:space-between"><h4>💻 مهارة ${i+1}</h4><button onclick="removeItem('skills', ${i})" style="color:var(--red); background:none; border:none; cursor:pointer">✖ حذف</button></div>
        <div class="fields-row">
          <div class="field-group"><label>اسم التقنية</label><input type="text" onchange="updateItem('skills',${i},'name',this.value)" value="${p.name}"></div>
          <div class="field-group"><label>الأيقونة (إيموجي أو URL)</label><input type="text" onchange="updateItem('skills',${i},'icon',this.value)" value="${p.icon}"></div>
        </div>
      </div>`;
  }).join('');
}

function addItem(type) {
  const defaults = { delivery: {name:'', time:''}, portfolio: {name:'', sub:'', img:'', link:''}, skills: {name:'', icon:'⭐'} };
  if (!Array.isArray(currentData[type])) currentData[type] = [];
  currentData[type].push(defaults[type]);
  renderList(type);
}

function removeItem(type, i) {
  currentData[type].splice(i, 1);
  renderList(type);
}

function updateItem(type, i, key, val) {
  currentData[type][i][key] = val;
}

// ============================================================
//  IMAGE UPLOAD
// ============================================================
function handleFileUpload(event, type) {
  const file = event.target.files[0];
  if (!file) return;
  
  // Check file size (limit to 1MB for base64 storage in Firestore)
  if (file.size > 1024 * 1024) {
    showToast('❌ حجم الصورة كبير جداً (الأقصى 1MB)');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const base64 = e.target.result;
    const urlInputId = type === 'logo' ? 'siteLogoImgUrl' : 'heroAvatarUrl';
    const previewId = type === 'logo' ? 'logoPreview' : 'avatarPreview';
    
    document.getElementById(urlInputId).value = base64;
    document.getElementById(previewId).style.backgroundImage = `url('${base64}')`;
    showToast('✓ تمت معالجة الصورة بنجاح');
  };
  reader.readAsDataURL(file);
}

// ============================================================
//  SAVE SECTIONS
// ============================================================
async function saveSection(section) {
  let data = {};
  if (section === 'hero') {
    data = {
      logo:       document.getElementById('siteLogo').value,
      logoImg:    document.getElementById('siteLogoImgUrl').value,
      avatarImg:  document.getElementById('heroAvatarUrl').value,
      name:       document.getElementById('heroName').value,
      title:      document.getElementById('heroTitle').value,
      desc:       document.getElementById('heroDesc').value,
      cta:        document.getElementById('heroCta').value
    };
  } else if (section === 'general') {
    data = { footer: document.getElementById('footerText').value };
  } else if (section === 'delivery' || section === 'portfolio' || section === 'skills') {
    data = currentData[section];
    // Also save headers for this section
    const headers = await fetchFromFirebase('headers');
    if (section === 'delivery') { headers.delivery = { title: document.getElementById('hDeliveryTitle').value, sub: document.getElementById('hDeliverySub').value }; }
    if (section === 'portfolio') { headers.portfolio = { title: document.getElementById('hPortfolioTitle').value, sub: document.getElementById('hPortfolioSub').value }; }
    if (section === 'skills') { headers.skills = { title: document.getElementById('hSkillsTitle').value, sub: document.getElementById('hSkillsSub').value }; }
    await saveToFirebase('headers', headers);
  } else if (section === 'contact') {
    data = {
      phone:     document.getElementById('cPhone').value,
      whatsapp:  document.getElementById('cWhatsapp').value,
      facebook:  document.getElementById('cFacebook').value,
      instagram: document.getElementById('cInstagram').value,
      telegram:  document.getElementById('cTelegram').value
    };
    const headers = await fetchFromFirebase('headers');
    headers.contact = { title: document.getElementById('hContactTitle').value, sub: document.getElementById('hContactSub').value };
    await saveToFirebase('headers', headers);
  }

  const ok = await saveToFirebase(section, data);
  if (ok) showToast('✓ تم الحفظ بنجاح!');
  else showToast('❌ فشل الحفظ');
}

async function saveCredentials() {
  const newEmail = document.getElementById('newEmail').value.trim();
  const newPass  = document.getElementById('newPass').value;
  const confirmPass = document.getElementById('confirmPass').value;
  const user = window.auth.currentUser;
  if (!user) return;
  if (newPass && newPass !== confirmPass) { showToast('❌ كلمة المرور غير متطابقة'); return; }
  try {
    if (newEmail && newEmail !== user.email) await window.updateEmail(user, newEmail);
    if (newPass) await window.updatePassword(user, newPass);
    showToast('✓ تم التحديث!');
  } catch (e) { showToast('❌ خطأ: ' + e.message); }
}

async function resetAll() {
  if (!confirm('سيتم حذف كل شيء والعودة للقيم الافتراضية!')) return;
  for (const key in DEFAULTS) await saveToFirebase(key, DEFAULTS[key]);
  location.reload();
}

initAuth();
