// WhatsApp & Email
const WA = '4917664323579';
const EMAIL = 'Ly.cars@gmx.de';

// Simple i18n
const dict = {
  ar:{
    menu_inventory:'السيارات المعروضة', menu_find:'اطلب سيارة', menu_sell:'بيع سيارتك',
    hero:'معنا بتقدر تبيع، تبدّل، أو تلاقي سيارة أحلامك. وإذا مو موجودة، مندوّر لك عليها وبنضمن أفضل عرض بالسوق مع كفالة وراحة بال.',
    explore:'استكشف الخدمات', services:'الخدمات',
    svcBuyT:'شراء — السيارات المتوفّرة', svcBuyD:'تصفّح السيارات الجاهزة الآن مع المواصفات والصور وتواصل واتساب فورًا.',
    svcFindT:'توفير — اطلب سيارتك',  svcFindD:'احكيلنا الميزانية والسنة والمواصفات. منبحث بألمانيا والاتحاد الأوروبي ومنجيب لك الأفضل.',
    svcSellT:'بيع — سيارتك',        svcSellD:'عرض سريع. ارفع الصور والتفاصيل ومنرجع لك على واتساب/إيميل.',
    viewCars:'شاهد السيارات', request:'اطلب سيارتك', sellNow:'بيع الآن',
    inv:'سيارات مميزة',
    findTitle:'اطلب سيارتك', name:'اسمك', phone:'هاتف', emailAddr:'إيميل', city:'المدينة',
    make:'الماركة', model:'الموديل', yearFrom:'سنة من', yearTo:'سنة إلى',
    budgetMin:'أقل ميزانية (€)', budgetMax:'أعلى ميزانية (€)', mileageMax:'أقصى كيلومترات (كم)',
    color:'اللون', body:'الهيكل', features:'مواصفات مهمة (بانوراما، ACC…)', window:'المدة المتوقعة للشراء', notes:'ملاحظات',
    submit:'إرسال', sellTitle:'بيع سيارتك', sell_make:'الماركة', sell_model:'الموديل', sell_year:'السنة', mileage:'الكيلومترات (كم)',
    vin:'VIN (اختياري)', condition:'الحالة', accidents:'تاريخ الحوادث', service:'تاريخ الصيانة', priceFld:'السعر المطلوب (€)', photos:'صور (حتى 10)'
  },
  en:{
    menu_inventory:'Inventory', menu_find:'Find a Car', menu_sell:'Sell Your Car',
    hero:'With us, you can sell, trade, or find your dream car. If it’s not in stock, we’ll source it — best deal, with warranty and peace of mind.',
    explore:'Explore Services', services:'Services',
    svcBuyT:'Buy — Inventory',  svcBuyD:'Browse cars available now. Specs, photos, and instant WhatsApp contact.',
    svcFindT:'Source — Find a Car', svcFindD:'Tell us your budget, year, and features. We search DE/EU for the best match.',
    svcSellT:'Sell — Your Car', svcSellD:'Get an offer fast. Upload photos & details; we reply via WhatsApp/Email.',
    viewCars:'View Cars', request:'Request a Car', sellNow:'Sell Now',
    inv:'Featured Cars',
    findTitle:'Find a Car', name:'Your Name', phone:'Phone', emailAddr:'Email', city:'City',
    make:'Make', model:'Model', yearFrom:'Year From', yearTo:'Year To',
    budgetMin:'Budget Min (€)', budgetMax:'Budget Max (€)', mileageMax:'Max Mileage (km)',
    color:'Color', body:'Body', features:'Key Features (ACC, pano…)', window:'Target Purchase Window', notes:'Notes',
    submit:'Send', sellTitle:'Sell Your Car', sell_make:'Make', sell_model:'Model', sell_year:'Year', mileage:'Mileage (km)',
    vin:'VIN (optional)', condition:'Condition', accidents:'Accident History', service:'Service History', priceFld:'Asking Price (€)', photos:'Photos (up to 10)'
  },
  de:{
    menu_inventory:'Fahrzeuge', menu_find:'Auto finden', menu_sell:'Auto verkaufen',
    hero:'Bei uns können Sie Ihr Auto verkaufen, tauschen oder Ihr Traumauto finden. Falls es nicht verfügbar ist, beschaffen wir es – zum besten Preis, mit Garantie und sorgenfreier Abwicklung.',
    explore:'Leistungen ansehen', services:'Leistungen',
    svcBuyT:'Kaufen — Fahrzeuge', svcBuyD:'Verfügbare Fahrzeuge jetzt ansehen. Daten, Fotos & WhatsApp-Kontakt.',
    svcFindT:'Beschaffung — Auto finden', svcFindD:'Budget, Baujahr, Extras nennen. Wir suchen in DE/EU die beste Option.',
    svcSellT:'Verkaufen — Ihr Auto', svcSellD:'Schnelles Angebot. Fotos & Details hochladen; Rückmeldung per WhatsApp/E-Mail.',
    viewCars:'Fahrzeuge ansehen', request:'Auto anfragen', sellNow:'Jetzt verkaufen',
    inv:'Top Fahrzeuge',
    findTitle:'Auto finden', name:'Ihr Name', phone:'Telefon', emailAddr:'E-Mail', city:'Stadt',
    make:'Marke', model:'Modell', yearFrom:'Baujahr ab', yearTo:'Baujahr bis',
    budgetMin:'Budget min (€)', budgetMax:'Budget max (€)', mileageMax:'Max. Kilometer (km)',
    color:'Farbe', body:'Karosserie', features:'Wichtige Extras (ACC, Pano…)', window:'Kaufzeitraum', notes:'Notizen',
    submit:'Senden', sellTitle:'Auto verkaufen', sell_make:'Marke', sell_model:'Modell', sell_year:'Baujahr', mileage:'Kilometerstand (km)',
    vin:'FIN (optional)', condition:'Zustand', accidents:'Unfallhistorie', service:'Servicehistorie', priceFld:'Preisvorstellung (€)', photos:'Fotos (bis 10)'
  }
};

// Sample inventory (صور حقيقية عامة من Unsplash)
const cars = [
  {
    id:'m4',
    title:'BMW M4 Competition',
    price:'€63,500',
    spec:'2019 • 41,000 km • DCT • Petrol • 510 hp',
    img:'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id:'cls',
    title:'Mercedes-Benz CLS 500',
    price:'€18,900',
    spec:'2011 • 145,000 km • Automatic • Petrol • 388 hp',
    img:'https://images.unsplash.com/photo-1542282811-943ef1a977c2?auto=format&fit=crop&w=1200&q=60'
  },
  {
    id:'rs7',
    title:'Audi RS7 Performance',
    price:'€99,900',
    spec:'2023 • 12,000 km • Automatic • Petrol • 630 hp',
    img:'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=60'
  }
];

function $(s,root=document){return root.querySelector(s)}
function $all(s,root=document){return [...root.querySelectorAll(s)]}

function renderInventory(){
  const grid = $('#inventoryGrid');
  grid.innerHTML = cars.map(c=>`
    <div class="card">
      <div class="img"><img src="${c.img}" alt="${c.title}"></div>
      <h4 class="car-title">${c.title}</h4>
      <div class="meta">
        <span class="badge">${c.price}</span>
        <button class="btn ghost" onclick="openCar('${c.id}')">${t('viewCars')}</button>
      </div>
    </div>
  `).join('');
}

function openCar(id){
  const c = cars.find(x=>x.id===id);
  $('#modalImg').src = c.img;
  $('#modalTitle').textContent = `${c.title} — ${c.price}`;
  $('#modalSpec').textContent = c.spec;
  $('#modalWa').href = waLink(`Interested in ${c.title} (${c.price})`);
  $('#modalMail').href = mailtoLink(`Interest: ${c.title}`, `Hi LY Cars,\nI'm interested in ${c.title} (${c.price}).\n`);
  $('#carModal').classList.add('show');
}
$('#closeModal').onclick = ()=> $('#carModal').classList.remove('show');
$('#modalBackdrop').onclick = ()=> $('#carModal').classList.remove('show');

function waLink(text){return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`}
function mailtoLink(subject,body){return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}

function msgFrom(form){
  const fd=new FormData(form);
  const o=Object.fromEntries(fd.entries());
  return Object.keys(o).map(k=>`${k}: ${o[k]}`).join('\n');
}

// Send buttons
$('#findSend').onclick = ()=>{
  const text = 'FIND A CAR\n'+msgFrom($('#findForm'));
  window.open(waLink(text),'_blank');
  window.location.href = mailtoLink('Find a Car request', text);
};
let photoFiles=[];
$('#photos')?.addEventListener('change', (e)=>{
  const files=[...e.target.files].slice(0,10);
  photoFiles=files;
  const prev=$('#preview'); prev.innerHTML='';
  files.forEach(f=>{
    const img=document.createElement('img');
    img.src=URL.createObjectURL(f);
    img.alt=f.name;
    prev.appendChild(img);
  });
});
$('#sellSend').onclick = ()=>{
  const text = 'SELL MY CAR\n'+msgFrom($('#sellForm'))+`\nPhotos selected: ${photoFiles.length}`;
  window.open(waLink(text),'_blank');
  window.location.href = mailtoLink('Sell my Car request', text);
};

// Drawer
const drawer = $('#drawer');
$('#menuBtn').onclick = ()=> drawer.classList.add('active');
$('#closeDrawer').onclick = ()=> drawer.classList.remove('active');
$('#drawerBackdrop').onclick = ()=> drawer.classList.remove('active');

// Lang switch
let LANG='ar';
const mapDir = {ar:'rtl', en:'ltr', de:'ltr'};
function t(key){ return dict[LANG][key] || key; }
function applyLang(){
  document.documentElement.lang = LANG;
  document.documentElement.dir  = mapDir[LANG];
  // Update all elements with data-i18n
  $all('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
}
$('#langSel').onchange = (e)=>{ LANG=e.target.value; applyLang(); renderInventory(); };

function init(){
  $('#year').textContent = new Date().getFullYear();
  applyLang();
  renderInventory();
  // Explore scroll
  $('#exploreBtn').onclick = ()=> document.getElementById('services').scrollIntoView({behavior:'smooth'});
}
document.addEventListener('DOMContentLoaded', init);
