/* ============================================
   MINNESOTA RECLAMATION PROJECT
   Application JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
  setupNavigation();
  setupMobileMenu();
  setupNewsletterForms();
  renderIssues();
  renderCases();
  renderActors();
  renderSolutions();
  renderOrganizations();
  setupModals();
  setupSmoothScroll();
}

/* === Navigation === */
function setupNavigation() {
  const nav = document.querySelector('.main-nav');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
      nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
      nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
  });
  
  // Highlight active section
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

function setupMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuBtn.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('active');
      });
    });
  }
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const navHeight = document.querySelector('.main-nav').offsetHeight;
        const targetPosition = target.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* === Newsletter Forms === */
function setupNewsletterForms() {
  const forms = document.querySelectorAll('.newsletter-form');
  
  forms.forEach(form => {
    form.addEventListener('submit', handleNewsletterSubmit);
  });
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const emailInput = form.querySelector('input[type="email"]');
  const email = emailInput.value.trim();
  
  if (!email) return;
  
  // Store in localStorage (in production, would send to backend)
  const subscribers = JSON.parse(localStorage.getItem('mrp-subscribers') || '[]');
  if (!subscribers.includes(email)) {
    subscribers.push(email);
    localStorage.setItem('mrp-subscribers', JSON.stringify(subscribers));
  }
  
  // Show confirmation
  const btn = form.querySelector('button');
  const originalText = btn.textContent;
  btn.textContent = 'Welcome aboard!';
  btn.disabled = true;
  emailInput.value = '';
  
  setTimeout(() => {
    btn.textContent = originalText;
    btn.disabled = false;
  }, 3000);
}

/* === Render Functions === */
function renderIssues() {
  const grid = document.getElementById('issues-grid');
  if (!grid || !SITE_DATA?.issues) return;
  
  grid.innerHTML = Object.entries(SITE_DATA.issues).map(([key, issue]) => `
    <div class="issue-card">
      <h3>${issue.title}</h3>
      <p>${issue.summary}</p>
      <div class="issue-tags">
        ${issue.tags.map(tag => `<span class="issue-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderCases() {
  const grid = document.getElementById('cases-grid');
  if (!grid || !SITE_DATA?.cases) return;
  
  grid.innerHTML = SITE_DATA.cases.map(c => `
    <div class="case-card">
      <div class="case-header">
        <h3>${c.title}</h3>
      </div>
      <div class="case-body">
        <p>${c.summary}</p>
        <div class="case-evaluation">
          <h4>Rubric Evaluation</h4>
          ${Object.entries(c.evaluation).map(([key, val]) => `
            <div class="evaluation-item">
              <span class="evaluation-label">${key}</span>
              <span class="evaluation-value ${val.rating}">${val.text}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderActors() {
  const grid = document.getElementById('actors-grid');
  if (!grid || !SITE_DATA?.actors) return;
  
  grid.innerHTML = SITE_DATA.actors.map(actor => `
    <div class="actor-card">
      <div class="actor-header">
        <h3>${actor.name}</h3>
        <span class="actor-role">${actor.role}</span>
      </div>
      <div class="actor-body">
        <div class="actor-record">
          <h4>Record</h4>
          <ul>
            ${actor.record.slice(0, 4).map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        ${actor.pattern ? `
          <div class="actor-record">
            <h4>Pattern</h4>
            <p style="font-size: 0.875rem; padding-left: 0;">${actor.pattern}</p>
          </div>
        ` : ''}
      </div>
    </div>
  `).join('');
}

function renderSolutions() {
  const grid = document.getElementById('solutions-grid');
  if (!grid || !SITE_DATA?.solutions) return;
  
  grid.innerHTML = SITE_DATA.solutions.domains.map(domain => `
    <div class="solution-card">
      <h3>${domain.title}</h3>
      <p>${domain.description}</p>
      <h4>Legal Pathways</h4>
      <ul>
        ${domain.legal.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <h4>Legislative Reform</h4>
      <ul>
        ${domain.legislative.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderOrganizations() {
  const grid = document.getElementById('orgs-grid');
  if (!grid || !SITE_DATA?.solutions?.organizations) return;
  
  grid.innerHTML = SITE_DATA.solutions.organizations.map(org => `
    <div class="org-card">
      <h4>${org.name}</h4>
      <p>${org.focus}</p>
      <a href="${org.url}" target="_blank">Visit Website →</a>
    </div>
  `).join('');
}

/* === Modals === */
function setupModals() {
  // Close modal on overlay click
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
  
  // Close modal on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.active').forEach(modal => {
        modal.classList.remove('active');
      });
    }
  });
}

function showFOIAModal() {
  const modal = document.getElementById('foia-modal');
  const content = document.getElementById('foia-templates');
  
  if (!SITE_DATA?.foiaTemplates) {
    content.innerHTML = '<p>Loading templates...</p>';
  } else {
    content.innerHTML = SITE_DATA.foiaTemplates.map(template => `
      <div class="foia-template" style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 0.5rem;">${template.title}</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1rem;">Send to: ${template.recipient}</p>
        <pre style="background: var(--prairie-tan); padding: 1rem; border-radius: 4px; overflow-x: auto; font-size: 0.8rem; line-height: 1.5;">${template.text}</pre>
        <button class="btn btn-outline" style="margin-top: 1rem;" onclick="copyToClipboard(\`${template.text.replace(/`/g, '\\`')}\`)">Copy Template</button>
      </div>
    `).join('');
  }
  
  modal.classList.add('active');
}

function closeFOIAModal() {
  document.getElementById('foia-modal').classList.remove('active');
}

function showContactsModal() {
  const modal = document.getElementById('contacts-modal');
  const content = document.getElementById('contacts-content');
  
  content.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <h3>Federal Representatives</h3>
      <p>Contact your U.S. Senators and Representatives:</p>
      <ul style="list-style: none; margin-top: 1rem;">
        <li style="margin-bottom: 0.5rem;"><a href="https://www.senate.gov/senators/senators-contact.htm" target="_blank">Find Your U.S. Senators →</a></li>
        <li><a href="https://www.house.gov/representatives/find-your-representative" target="_blank">Find Your U.S. Representative →</a></li>
      </ul>
    </div>
    <div style="margin-bottom: 2rem;">
      <h3>State Officials</h3>
      <ul style="list-style: none;">
        <li style="margin-bottom: 0.5rem;"><a href="https://www.leg.mn.gov/leg/legdir" target="_blank">Find Your State Legislators →</a></li>
        <li style="margin-bottom: 0.5rem;"><a href="https://mn.gov/governor/contact-us/" target="_blank">Governor's Office →</a></li>
        <li><a href="https://www.ag.state.mn.us/Office/Contactus.asp" target="_blank">Attorney General →</a></li>
      </ul>
    </div>
    <div>
      <h3>Report Fraud</h3>
      <ul style="list-style: none;">
        <li style="margin-bottom: 0.5rem;"><strong>FBI Minneapolis:</strong> (763) 569-8000</li>
        <li style="margin-bottom: 0.5rem;"><strong>HHS OIG Hotline:</strong> 1-800-HHS-TIPS</li>
        <li style="margin-bottom: 0.5rem;"><strong>USDA OIG Hotline:</strong> 1-800-424-9121</li>
        <li><strong>MN AG Office:</strong> (651) 296-3353</li>
      </ul>
    </div>
  `;
  
  modal.classList.add('active');
}

function closeContactsModal() {
  document.getElementById('contacts-modal').classList.remove('active');
}

function showPrayerModal() {
  const modal = document.getElementById('prayer-modal');
  const content = document.getElementById('prayer-content');
  
  content.innerHTML = `
    <div class="prayer-guide">
      <p style="font-style: italic; margin-bottom: 2rem;">
        "If my people who are called by my name humble themselves, and pray and seek my face 
        and turn from their wicked ways, then I will hear from heaven and will forgive their 
        sin and heal their land." — 2 Chronicles 7:14
      </p>
      
      <h3>For Leaders</h3>
      <p>Pray that Minnesota's leaders would:</p>
      <ul style="margin-bottom: 1.5rem;">
        <li>Fear God and act justly</li>
        <li>Be exposed when they do wrong</li>
        <li>Repent and turn to righteousness</li>
        <li>Be replaced by just leaders if they refuse</li>
      </ul>
      
      <h3>For Justice</h3>
      <p>Pray for:</p>
      <ul style="margin-bottom: 1.5rem;">
        <li>Truth to come to light regarding fraud and corruption</li>
        <li>Victims to receive restitution</li>
        <li>The innocent to be protected</li>
        <li>The guilty to face proportionate consequences</li>
      </ul>
      
      <h3>For Renewal</h3>
      <p>Pray for:</p>
      <ul style="margin-bottom: 1.5rem;">
        <li>The Church in Minnesota to be faithful and courageous</li>
        <li>Christians to engage in civic life with wisdom</li>
        <li>Just laws and institutions to be established</li>
        <li>A culture of life, family, and ordered liberty</li>
      </ul>
      
      <h3>For Yourself</h3>
      <p>Pray for:</p>
      <ul>
        <li>Wisdom to know how to act</li>
        <li>Courage to speak truth</li>
        <li>Perseverance in faithful work</li>
        <li>Grace to love enemies while opposing injustice</li>
      </ul>
    </div>
  `;
  
  modal.classList.add('active');
}

function closePrayerModal() {
  document.getElementById('prayer-modal').classList.remove('active');
}

/* === Utility Functions === */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}

function shareProject() {
  const url = window.location.href;
  const text = 'Minnesota Reclamation Project - Taking back what was lost. Restoring just order.';
  
  if (navigator.share) {
    navigator.share({
      title: 'Minnesota Reclamation Project',
      text: text,
      url: url
    });
  } else {
    // Fallback to Twitter
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  }
}

/* === Console Branding === */
console.log('%c★ Minnesota Reclamation Project', 'font-size: 20px; font-weight: bold; color: #d69e2e;');
console.log('%cReclaim Minnesota', 'font-size: 14px; color: #1a365d;');
