/* ============================================
   MINNESOTA RECLAMATION PROJECT
   Application JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
  setupNavigation();
  setupMobileMenu();
  setupNewsletterForms();
  
  // New ammo depot sections
  renderQuickStats();
  renderKlobuchar();
  renderDisruptionPlaybook();
  renderAttackLines();
  renderTwoTieredJustice();
  renderTimeline();
  renderInvestigationRequests();
  setupAmmoTabs();
  setupInvestigateTabs();
  setupEventTabs();
  setupPressurePoints();
  
  // Original sections
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

/* === NEW AMMO DEPOT RENDER FUNCTIONS === */

function renderQuickStats() {
  const container = document.getElementById('quick-stats');
  if (!container || !SITE_DATA?.quickStats) return;
  
  container.innerHTML = SITE_DATA.quickStats.slice(0, 4).map(stat => `
    <div class="stat-item">
      <span class="stat-number">${stat.number}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `).join('');
}

function renderKlobuchar() {
  if (!SITE_DATA?.klobuchar) return;
  const k = SITE_DATA.klobuchar;
  
  // Summary
  const summary = document.getElementById('klobuchar-summary');
  if (summary) summary.innerHTML = k.summary;
  
  // Silence Tracker
  const tracker = document.getElementById('silence-tracker');
  if (tracker) {
    tracker.innerHTML = `
      <table class="silence-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Issue</th>
            <th>Response</th>
          </tr>
        </thead>
        <tbody>
          ${k.silenceTracker.map(item => `
            <tr>
              <td>${item.date}</td>
              <td>${item.issue}</td>
              <td class="response-${item.response.toLowerCase()}">${item.response}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
  
  // Direct Questions
  const questions = document.getElementById('direct-questions');
  if (questions) {
    questions.innerHTML = k.directQuestions.map(q => `
      <div class="question-item">
        <span class="question-number">${q.id}</span>
        <div class="question-content">
          <p class="question-text">${q.question}</p>
          <p class="question-context">${q.context}</p>
        </div>
        <button class="btn-copy-small" onclick="copyToClipboard('${q.question.replace(/'/g, "\\'")}')">Copy</button>
      </div>
    `).join('');
  }
  
  // Attack Lines
  const attackLines = document.getElementById('klobuchar-attack-lines');
  if (attackLines) {
    attackLines.innerHTML = k.attackLines.map(line => `
      <div class="attack-line-card">
        <p class="attack-line-text">"${line.line}"</p>
        <div class="attack-line-meta">
          <span class="attack-format">${line.format}</span>
          <button class="btn-copy-small" onclick="copyToClipboard('${line.line.replace(/'/g, "\\'")}')">Copy</button>
        </div>
      </div>
    `).join('');
  }
  
  // Challenge
  const challenge = document.getElementById('klobuchar-challenge-text');
  if (challenge) challenge.innerHTML = k.theChallenge;
}

function renderAttackLines() {
  if (!SITE_DATA?.attackLines) return;
  
  // 30-second indictment
  const indictment = document.getElementById('thirty-second-indictment');
  if (indictment) indictment.innerHTML = SITE_DATA.attackLines.thirtySecondIndictment;
  
  // Initial render by issue (fraud)
  renderAmmoByIssue('fraud');
  renderAmmoByAudience('suburbanMoms');
}

function renderAmmoByIssue(issue) {
  const container = document.getElementById('ammo-by-issue');
  if (!container || !SITE_DATA?.attackLines?.byIssue?.[issue]) return;
  
  container.innerHTML = SITE_DATA.attackLines.byIssue[issue].map(line => `
    <div class="ammo-line">
      <p class="ammo-text">"${line.line}"</p>
      <div class="ammo-meta">
        <span class="ammo-format">${line.format}</span>
        <button class="btn-copy-small" onclick="copyToClipboard('${line.line.replace(/'/g, "\\'")}')">Copy</button>
      </div>
    </div>
  `).join('');
}

function renderAmmoByAudience(audience) {
  const container = document.getElementById('ammo-by-audience');
  if (!container || !SITE_DATA?.attackLines?.byAudience?.[audience]) return;
  
  container.innerHTML = SITE_DATA.attackLines.byAudience[audience].map(line => `
    <div class="ammo-line">
      <p class="ammo-text">"${line.line}"</p>
      <div class="ammo-meta">
        <span class="ammo-issue">${line.issue}</span>
        <button class="btn-copy-small" onclick="copyToClipboard('${line.line.replace(/'/g, "\\'")}')">Copy</button>
      </div>
    </div>
  `).join('');
}

function setupAmmoTabs() {
  // Issue tabs
  document.querySelectorAll('.ammo-by-issue .ammo-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.ammo-by-issue .ammo-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderAmmoByIssue(tab.dataset.issue);
    });
  });
  
  // Audience tabs
  document.querySelectorAll('.ammo-by-audience .ammo-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.ammo-by-audience .ammo-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderAmmoByAudience(tab.dataset.audience);
    });
  });
}

function renderTwoTieredJustice() {
  const container = document.getElementById('two-tiered-grid');
  if (!container || !SITE_DATA?.twoTieredJustice) return;
  
  container.innerHTML = SITE_DATA.twoTieredJustice.map(item => `
    <div class="two-tiered-card">
      <div class="two-tiered-comparison">
        <div class="case-a">
          <span class="case-label">Case A</span>
          <p class="case-desc">${item.caseA.description}</p>
          <p class="case-outcome">${item.caseA.outcome}</p>
        </div>
        <div class="case-vs">vs</div>
        <div class="case-b">
          <span class="case-label">Case B</span>
          <p class="case-desc">${item.caseB.description}</p>
          <p class="case-outcome">${item.caseB.outcome}</p>
        </div>
      </div>
      <div class="disparity-analysis">
        <p class="disparity"><strong>Disparity:</strong> ${item.disparity}</p>
        <p class="pattern"><strong>Pattern:</strong> ${item.pattern}</p>
      </div>
    </div>
  `).join('');
}

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container || !SITE_DATA?.timeline) return;
  
  container.innerHTML = `
    <div class="timeline">
      ${SITE_DATA.timeline.map((event, i) => `
        <div class="timeline-item ${event.category}">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-date">${event.date}</span>
            <p class="timeline-event">${event.event}</p>
            <span class="timeline-actor">${event.actor}</span>
            <div class="timeline-klobuchar">
              <span class="klobuchar-label">Klobuchar:</span>
              <span class="klobuchar-response ${event.klobucharResponse.toLowerCase()}">${event.klobucharResponse}</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderInvestigationRequests() {
  // Initial render for Klobuchar
  renderInvestigateTarget('klobuchar');
  
  // Render submit findings
  const submitInfo = document.getElementById('submit-findings-info');
  if (submitInfo && SITE_DATA?.investigationRequests?.submitFindings) {
    const sf = SITE_DATA.investigationRequests.submitFindings;
    submitInfo.innerHTML = `
      <p>${sf.instructions}</p>
      <ul>
        ${sf.whatToInclude.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
  }
}

function renderInvestigateTarget(target) {
  const container = document.getElementById('investigate-content');
  if (!container || !SITE_DATA?.investigationRequests) return;
  
  let requests;
  if (target === 'journalists') {
    const jr = SITE_DATA.investigationRequests.forJournalists;
    container.innerHTML = `
      <div class="journalist-section">
        <h4>Story Pitches</h4>
        ${jr.storyPitches.map(pitch => `
          <div class="story-pitch">
            <h5>${pitch.headline}</h5>
            <p><strong>Angle:</strong> ${pitch.angle}</p>
            <p><strong>Sources:</strong> ${pitch.sources}</p>
          </div>
        `).join('')}
        
        <h4>Key Media Contacts</h4>
        <div class="media-contacts">
          ${jr.keyContacts.map(c => `
            <div class="contact-item">
              <strong>${c.outlet}</strong>
              <span>${c.beat}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    return;
  }
  
  requests = SITE_DATA.investigationRequests[target];
  if (!requests) return;
  
  container.innerHTML = requests.map(req => `
    <div class="investigation-card">
      <h4>${req.title}</h4>
      <p class="invest-question"><strong>The Question:</strong> ${req.question}</p>
      <p class="invest-why"><strong>Why It Matters:</strong> ${req.whyItMatters}</p>
      
      <div class="invest-foia">
        <h5>FOIA Targets:</h5>
        <ul>
          ${req.foiaTargets.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
      
      <div class="invest-story">
        <strong>Story Angle:</strong> ${req.storyAngle}
      </div>
      
      <div class="invest-status">
        <span class="status-badge status-${req.status}">${req.status}</span>
      </div>
    </div>
  `).join('');
}

function setupInvestigateTabs() {
  document.querySelectorAll('.investigate-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.investigate-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderInvestigateTarget(tab.dataset.target);
    });
  });
}

/* === DISRUPTION PLAYBOOK FUNCTIONS === */

function renderDisruptionPlaybook() {
  if (!SITE_DATA?.disruptionPlaybook) return;
  const dp = SITE_DATA.disruptionPlaybook;
  
  // Intro
  const intro = document.getElementById('disrupt-intro-text');
  if (intro) intro.textContent = dp.intro;
  
  // Gameplan
  renderGameplan();
  
  // Pressure Points
  renderPressurePoints();
  
  // Event Tactics (initial: townHalls)
  renderEventTactics('townHalls');
  
  // CTA
  renderDisruptCTA();
}

function renderGameplan() {
  const container = document.getElementById('gameplan-grid');
  if (!container || !SITE_DATA?.disruptionPlaybook?.gameplan) return;
  
  container.innerHTML = SITE_DATA.disruptionPlaybook.gameplan.map(move => `
    <div class="gameplan-card">
      <div class="gameplan-header">
        <div class="gameplan-their-move">
          <h4>Their Move</h4>
          <p>${move.theirMove}</p>
        </div>
        <div class="gameplan-our-counter">
          <h4>Our Counter</h4>
          <p>${move.ourCounter}</p>
        </div>
      </div>
      <div class="gameplan-body">
        <div class="gameplan-script">
          "${move.theirScript}"
        </div>
        <p class="gameplan-why"><strong>Why they do it:</strong> ${move.whyTheyDoIt}</p>
        <div class="gameplan-tactics">
          <h5>Counter Tactics</h5>
          <ul>
            ${move.counterTactics.map(tactic => `<li>${tactic}</li>`).join('')}
          </ul>
        </div>
        <div class="gameplan-trap">
          <strong>The Trap</strong>
          <p>${move.trap}</p>
        </div>
        <span class="gameplan-hashtag">${move.hashtag}</span>
      </div>
    </div>
  `).join('');
}

function renderPressurePoints() {
  const container = document.getElementById('pressure-points-list');
  if (!container || !SITE_DATA?.disruptionPlaybook?.pressurePoints) return;
  
  container.innerHTML = SITE_DATA.disruptionPlaybook.pressurePoints.map(point => `
    <div class="pressure-point" data-id="${point.id}">
      <div class="pressure-point-header">
        <span class="pressure-question">${point.question}</span>
        <span class="pressure-toggle">+</span>
      </div>
      <div class="pressure-point-body">
        <div class="pressure-detail pressure-trap">
          <div class="pressure-detail-label">Why It's a Trap</div>
          <div class="pressure-detail-content">${point.whyItsATrap}</div>
        </div>
        <div class="pressure-detail pressure-dodge">
          <div class="pressure-detail-label">Their Likely Dodge</div>
          <div class="pressure-detail-content">"${point.likelyDodge}"</div>
        </div>
        <div class="pressure-detail pressure-followup">
          <div class="pressure-detail-label">Your Follow-Up</div>
          <div class="pressure-detail-content">"${point.followUp}"</div>
        </div>
        <div class="pressure-detail">
          <div class="pressure-detail-label">Best Setting</div>
          <div class="pressure-detail-content">${point.setting}</div>
        </div>
        <div class="pressure-detail">
          <div class="pressure-detail-label">How to Document</div>
          <div class="pressure-detail-content">${point.documentHow}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function setupPressurePoints() {
  document.querySelectorAll('.pressure-point-header').forEach(header => {
    header.addEventListener('click', () => {
      const point = header.closest('.pressure-point');
      point.classList.toggle('expanded');
    });
  });
}

function renderEventTactics(venue) {
  const container = document.getElementById('event-content');
  if (!container || !SITE_DATA?.disruptionPlaybook?.eventTactics?.[venue]) return;
  
  const et = SITE_DATA.disruptionPlaybook.eventTactics[venue];
  
  container.innerHTML = `
    <h4 class="event-venue-title">${et.title}</h4>
    <p class="event-venue-objective"><strong>Objective:</strong> ${et.objective}</p>
    <div class="event-tactics-list">
      ${et.tactics.map(tactic => `
        <div class="event-tactic">
          <div class="event-tactic-name">${tactic.tactic}</div>
          <p class="event-tactic-details">${tactic.details}</p>
        </div>
      `).join('')}
    </div>
    ${et.postEvent ? `
      <div class="event-post-event">
        <strong>After the Event:</strong> ${et.postEvent}
      </div>
    ` : ''}
    ${et.dailyOps ? `
      <div class="event-daily-ops">
        <strong>Daily Operations:</strong> ${et.dailyOps}
      </div>
    ` : ''}
  `;
}

function setupEventTabs() {
  document.querySelectorAll('.event-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.event-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderEventTactics(tab.dataset.venue);
    });
  });
}

function renderDisruptCTA() {
  const container = document.getElementById('disrupt-cta');
  if (!container || !SITE_DATA?.disruptionPlaybook?.callToAction) return;
  
  const cta = SITE_DATA.disruptionPlaybook.callToAction;
  
  container.innerHTML = `
    <h3>${cta.title}</h3>
    <p>${cta.message}</p>
    <div class="disrupt-actions">
      ${cta.actions.map(action => `
        <div class="disrupt-action-item">
          <strong>${action.action}</strong>
          <p>${action.details}</p>
        </div>
      `).join('')}
    </div>
    <div class="disrupt-report-back">
      ${cta.reportBack}
    </div>
  `;
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
