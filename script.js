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
const teamData = {
  david: {
    name: 'David Ssemakula',
    role: 'Principal Architect',
    category: 'Architecture & Design',
    photo: 'https://images.unsplash.com/photo-1642257834579-eee89ff3e9fd',
    bio: 'David heads the design studio at Actualine, leading the architectural output across the full portfolio. He brings a rigorous approach to context-sensitive design — balancing climate-responsive form with the practical demands of construction in Uganda\'s built environment. His work spans residential estates, commercial complexes, and institutional buildings across the country.',
    qualifications: ['B.Arch, Makerere University', 'M.Arch (Design), University of Cape Town', 'ARB Registered Architect'],
    specialisations: ['Concept & schematic design', 'Detailed design & documentation', 'Sustainable & passive design strategies', 'Institutional & commercial buildings'],
    projects: ['NCHE Annex Building, Kyambogo — Lead Architect', 'Residential estate design, Entebbe Road', 'Commercial office complex, Kampala CBD']
  },
  james: {
    name: 'James Oryema',
    role: 'Structural Engineer',
    category: 'Civil & Structural Engineering',
    photo: 'https://images.unsplash.com/photo-1668752600261-e56e7f3780b6',
    bio: 'James leads the structural engineering function at Actualine, delivering designs from foundations to roof for buildings across Uganda. He combines rigorous analytical practice with site-level pragmatism — ensuring every structure is technically sound, constructable within local supply chains, and compliant with Ugandan and international codes.',
    qualifications: ['BSc Civil Engineering, Makerere University', 'MSc Structural Engineering, University of Nairobi', 'UIPE Registered Engineer'],
    specialisations: ['Structural analysis & design', 'Foundation & geotechnical engineering', 'Reinforced concrete & steel structures', 'Construction supervision'],
    projects: ['NCHE Annex Building — Structural Design', 'UETCL Head Office — Phase 2 Supervision', 'Industrial warehouse structures, Kampala Industrial Park']
  },
  grace: {
    name: 'Grace Akello',
    role: 'Senior Quantity Surveyor',
    category: 'Quantity Surveying',
    photo: 'https://images.unsplash.com/photo-1758613654538-5f353b10f93e',
    bio: 'Grace manages the cost and contract function at Actualine — producing accurate estimates, tender documents, and Bills of Quantities that keep projects within budget and contractors accountable. Her work spans residential, commercial, and infrastructure projects across Uganda, with expertise in both pre-contract cost planning and post-contract financial management.',
    qualifications: ['BSc Quantity Surveying, Makerere University', 'RICS Associate Member (ARICS)', 'QSRB Registered Quantity Surveyor'],
    specialisations: ['Cost planning & estimating', 'Bills of Quantities preparation', 'Tender documentation & analysis', 'Value engineering & cost control'],
    projects: ['Bank of Uganda HQ Renovation — Lead QS', 'UETCL Head Office — Phase 1 Cost Plan', 'Multiple residential & commercial schemes, Kampala']
  },
  sarah: {
    name: 'Sarah Nakato',
    role: 'Senior Project Manager',
    category: 'Project Management',
    photo: 'https://images.unsplash.com/photo-1739300293504-234817eead52',
    bio: 'Sarah leads project delivery across Actualine\'s portfolio — coordinating architects, engineers, quantity surveyors, and contractors from inception to commissioning. She has managed complex projects ranging from institutional facilities to commercial developments across Uganda and the wider East African region, with a consistent record of on-time, on-budget delivery.',
    qualifications: ['BSc Civil Engineering, Makerere University', 'PMP Certified — Project Management Institute', 'UIPE Registered Member'],
    specialisations: ['Construction programming & scheduling', 'Procurement & tendering management', 'Multi-disciplinary team coordination', 'Risk management & client reporting'],
    projects: ['NCHE Annex Building — Programme Lead', 'Bank of Uganda HQ Renovation — Project Coordinator', 'UETCL Head Office — End-to-End Delivery']
  }
};

document.querySelectorAll('.team-card[data-member]').forEach(card => {
  card.addEventListener('click', () => openCvModal(card.dataset.member));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCvModal(card.dataset.member); }
  });
});

function openCvModal(id) {
  const m = teamData[id];
  if (!m) return;
  document.getElementById('cvModalInner').innerHTML = `
    <div class="cv-photo"><img src="${m.photo}?w=600&q=80&auto=format&fit=crop&crop=faces" alt="${m.name}"></div>
    <div class="cv-content">
      <div class="cv-tag">${m.category}</div>
      <h2 class="cv-name">${m.name}</h2>
      <div class="cv-role-title">${m.role}</div>
      <p class="cv-bio">${m.bio}</p>
      <div class="cv-details-grid">
        <div>
          <span class="cv-label">Qualifications</span>
          <ul>${m.qualifications.map(q => `<li>${q}</li>`).join('')}</ul>
        </div>
        <div>
          <span class="cv-label">Specialisations</span>
          <ul>${m.specialisations.map(s => `<li>${s}</li>`).join('')}</ul>
        </div>
      </div>
      <div>
        <span class="cv-label">Key Projects</span>
        <ul>${m.projects.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>
    </div>
  `;
  const modal = document.getElementById('cvModal');
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.cv-modal-close').focus();
}

function closeCvModal() {
  document.getElementById('cvModal').setAttribute('hidden', '');
  document.body.style.overflow = '';
}

document.getElementById('cvModal').addEventListener('click', e => {
  if (e.target.classList.contains('cv-modal-backdrop') || e.target.classList.contains('cv-modal-close')) closeCvModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCvModal(); });

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
