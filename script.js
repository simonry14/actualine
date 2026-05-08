document.getElementById('year').textContent = new Date().getFullYear();
const progress = document.getElementById('scrollProgress');
const nav = document.getElementById('nav');
const counterText = document.getElementById('counterText');
const counterLabel = document.getElementById('counterLabel');
const counterEl = document.getElementById('sectionCounter');
const sections = [
  {id:'about',label:'ABOUT',n:'01'},
  {id:'services',label:'SERVICES',n:'02'},
  {id:'process',label:'PROCESS',n:'03',dark:true},
  {id:'capabilities',label:'CAPABILITIES',n:'04'},
  {id:'featured',label:'WORK',n:'05',dark:true},
  {id:'why',label:'WHY US',n:'06'},
  {id:'team',label:'TEAM',n:'07'},
  {id:'clients',label:'CLIENTS',n:'08'},
  {id:'testimonials',label:'VOICES',n:'09',dark:true},
  {id:'contact',label:'CONTACT',n:'10'}
];
function onScroll(){
  const h = document.documentElement;
  const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
  progress.style.width = (scrolled * 100) + '%';
  if (h.scrollTop > 60) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
  let active = null;
  for (const s of sections) {
    const el = document.getElementById(s.id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) { active = s; break; }
  }
  if (active) {
    counterText.textContent = active.n + ' / 10';
    counterLabel.textContent = active.label;
    if (active.dark) counterEl.classList.add('dark'); else counterEl.classList.remove('dark');
  } else if (h.scrollTop < 200) {
    counterText.textContent = '00 / 10';
    counterLabel.textContent = 'INTRO';
    counterEl.classList.remove('dark');
  }
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();
const reveals = document.querySelectorAll('.section, .trust-strip, #featured');
reveals.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }});
}, {threshold:0.06});
reveals.forEach(el => io.observe(el));
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const links = ['About','Services','Process','Capabilities','Work','Team','Contact'];
    const ids = ['about','services','process','capabilities','featured','team','contact'];
    const choice = prompt('Navigate to:\n\n' + links.map((l,i) => (i+1)+'. '+l).join('\n') + '\n\nEnter number:');
    const idx = parseInt(choice) - 1;
    if (!isNaN(idx) && ids[idx]) document.getElementById(ids[idx]).scrollIntoView({behavior:'smooth'});
  });
}
