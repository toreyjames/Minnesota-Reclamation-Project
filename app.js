/* ============================================
   MINNESOTA RECLAMATION PROJECT
   Application JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
  setupNavigation();
  setupMobileMenu();
  setupNewsletterForms();
  
  // Main sections
  renderQuickStats();
  renderForensicAnalysis();
  renderFatherBrown();
  renderKlobuchar();
  renderFiscalTimeline();
  renderSpendingLedger('all');
  renderSignalGate();
  renderDisruptionPlaybook();
  renderVictoryPlaybook();
  renderAttackLines();
  renderInvestigationRequests();
  renderCases();
  renderActors();
  
  // Fraud Agents Investigation System
  initializeFraudAgents();
  
  // Tab setups
  setupAmmoTabs();
  setupInvestigateTabs();
  setupEventTabs();
  setupPressurePoints();
  setupVictoryTabs();
  setupNetworkTabs();
  setupLedgerTabs();
  
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

/* === FORENSIC ANALYSIS === */
function renderForensicAnalysis() {
  if (!SITE_DATA?.forensicAnalysis) return;
  const fa = SITE_DATA.forensicAnalysis;

  // Core Comparison Grid
  const comparisonGrid = document.getElementById('forensic-comparison-grid');
  if (comparisonGrid) {
    const med = fa.medicaidComparison;
    const tanf = fa.tanfComparison;
    const snap = fa.snapComparison;
    const edu = fa.educationComparison;
    
    comparisonGrid.innerHTML = `
      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Program</th>
              <th>Minnesota</th>
              <th>Wisconsin</th>
              <th>MN Premium</th>
              <th>Federal Share</th>
            </tr>
          </thead>
          <tbody>
            <tr class="highlight-row">
              <td><strong>Medicaid (per enrollee)</strong></td>
              <td>$${med.currentData.minnesota.perEnrollee.toLocaleString()}</td>
              <td>$${med.currentData.wisconsin.perEnrollee.toLocaleString()}</td>
              <td class="premium-high"><strong>+67%</strong></td>
              <td>64%</td>
            </tr>
            <tr class="highlight-row">
              <td><strong>TANF Welfare (family of 3)</strong></td>
              <td>$${tanf.currentData.minnesota.maxBenefit.toLocaleString()}/mo</td>
              <td>$${tanf.currentData.wisconsin.maxBenefit.toLocaleString()}/mo</td>
              <td class="premium-high"><strong>+110%</strong></td>
              <td>~80%</td>
            </tr>
            <tr>
              <td>SNAP (per person)</td>
              <td>$${snap.currentData.minnesota.perPerson}/mo</td>
              <td>$${snap.currentData.wisconsin.perPerson}/mo</td>
              <td class="premium-low"><strong>-7%</strong></td>
              <td>100%</td>
            </tr>
            <tr>
              <td>K-12 Education (per pupil)</td>
              <td>$${edu.currentData.minnesota.perPupil.toLocaleString()}</td>
              <td>$${edu.currentData.wisconsin.perPupil.toLocaleString()}</td>
              <td class="premium-low"><strong>-7%</strong></td>
              <td>~10%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="comparison-note">
        <strong>Notice the pattern:</strong> Minnesota overspends where federal match is high (64-80%) 
        and underspends where state pays (K-12) or federal rules are strict (SNAP).
      </p>
    `;
  }

  // High/Low Spend Pattern
  const highSpend = document.getElementById('forensic-high-spend');
  const lowSpend = document.getElementById('forensic-low-spend');
  if (highSpend && fa.thePattern) {
    highSpend.innerHTML = fa.thePattern.highSpendingPrograms.map(p => `
      <li><strong>${p.program}</strong>: ${p.mnVsBenchmark} (${p.federalShare}% federal)</li>
    `).join('');
  }
  if (lowSpend && fa.thePattern) {
    lowSpend.innerHTML = fa.thePattern.lowSpendingPrograms.map(p => `
      <li><strong>${p.program}</strong>: ${p.mnVsBenchmark} (${p.federalShare}% federal)</li>
    `).join('');
  }

  // Calculation Box
  const calcBox = document.getElementById('forensic-calculation');
  if (calcBox && fa.medicaidComparison) {
    const calc = fa.medicaidComparison.calculations;
    calcBox.innerHTML = `
      <div class="calc-steps">
        <div class="calc-step">
          <span class="calc-label">MN per-enrollee spending:</span>
          <span class="calc-value">$${fa.medicaidComparison.currentData.minnesota.perEnrollee.toLocaleString()}</span>
        </div>
        <div class="calc-step">
          <span class="calc-label">WI per-enrollee spending:</span>
          <span class="calc-value">$${fa.medicaidComparison.currentData.wisconsin.perEnrollee.toLocaleString()}</span>
        </div>
        <div class="calc-step calc-highlight">
          <span class="calc-label">Gap per person per year:</span>
          <span class="calc-value">$${calc.perPersonGap.toLocaleString()}</span>
        </div>
        <div class="calc-step">
          <span class="calc-label">MN enrollment:</span>
          <span class="calc-value">${fa.medicaidComparison.currentData.minnesota.enrollment} million</span>
        </div>
        <div class="calc-step calc-highlight">
          <span class="calc-label">Annual excess (Medicaid alone):</span>
          <span class="calc-value">$${calc.annualExcess} billion</span>
        </div>
        <div class="calc-step calc-total">
          <span class="calc-label">6-Year Excess vs Wisconsin:</span>
          <span class="calc-value">$${calc.sixYearExcess} BILLION</span>
        </div>
      </div>
      <p class="calc-note">This is Medicaid alone. Add TANF, EIDBI, HSS, CCAP—the total excess grows further.</p>
    `;
  }

  // Who Pays
  const whoPays = document.getElementById('forensic-whopays');
  if (whoPays && fa.medicaidComparison) {
    const calc = fa.medicaidComparison.calculations;
    whoPays.innerHTML = `
      <div class="whopays-boxes">
        <div class="whopays-box federal">
          <div class="whopays-amount">$${calc.federalShare} billion</div>
          <div class="whopays-label">Federal Taxpayers (64%)</div>
          <div class="whopays-detail">All Americans pay for Minnesota's excess</div>
        </div>
        <div class="whopays-box state">
          <div class="whopays-amount">$${calc.stateShare} billion</div>
          <div class="whopays-label">Minnesota Taxpayers (36%)</div>
          <div class="whopays-detail">State pays the minority share</div>
        </div>
      </div>
    `;
  }

  // Political Connections
  const politics = document.getElementById('forensic-politics');
  if (politics && fa.politicalConnections) {
    const pc = fa.politicalConnections;
    politics.innerHTML = `
      <div class="politics-grid">
        <div class="politics-card">
          <h4>Donations from Fraud Defendants</h4>
          <ul>
            ${pc.donations.slice(0, 4).map(d => `
              <li><strong>${d.recipient}</strong>: $${d.amount.toLocaleString()} (${d.status})</li>
            `).join('')}
          </ul>
          <p class="politics-total">Total to DFL: <strong>$${pc.totalToDFL.toLocaleString()}+</strong></p>
        </div>
        <div class="politics-card">
          <h4>The Ellison Meeting</h4>
          <p><strong>Date:</strong> ${pc.ellisonMeeting.date}</p>
          <p><strong>Duration:</strong> ${pc.ellisonMeeting.duration}</p>
          <p><strong>Context:</strong> ${pc.ellisonMeeting.context}</p>
          <p><strong>Conflict:</strong> ${pc.ellisonMeeting.conflict}</p>
        </div>
      </div>
    `;
  }

  // Bottom Line
  const bottomLine = document.getElementById('forensic-bottomline');
  if (bottomLine && fa.bottomLine) {
    bottomLine.innerHTML = `
      <p><strong>${fa.bottomLine.summary}</strong></p>
      <p>${fa.bottomLine.coreIndictment}</p>
    `;
  }
}

/* === FATHER BROWN ANALYSIS === */
function renderFatherBrown() {
  if (!SITE_DATA?.fatherBrownAnalysis) return;
  const fb = SITE_DATA.fatherBrownAnalysis;

  // Introduction
  const intro = document.getElementById('fatherbrown-intro');
  if (intro && fb.introduction) {
    intro.innerHTML = `
      <div class="fatherbrown-method">
        <p>${fb.introduction.method}</p>
        <p class="key-insight"><strong>${fb.introduction.keyInsight}</strong></p>
        <blockquote class="chesterton-quote">${fb.introduction.chestertonQuote}</blockquote>
      </div>
    `;
  }

  // Moral Inversions
  const inversions = document.getElementById('fatherbrown-inversions');
  if (inversions && fb.theMoralInversion) {
    inversions.innerHTML = fb.theMoralInversion.inversions.map(inv => `
      <div class="inversion-card">
        <div class="inversion-header">
          <span class="traditional">${inv.traditional}</span>
          <span class="arrow">→</span>
          <span class="inverted">"${inv.inverted}"</span>
        </div>
        <p class="mechanism">${inv.mechanism}</p>
        <p class="mn-example"><strong>MN Example:</strong> ${inv.mnExample}</p>
      </div>
    `).join('');
  }

  // Enabling Beliefs
  const beliefs = document.getElementById('fatherbrown-beliefs');
  if (beliefs && fb.theEnablingBeliefs) {
    beliefs.innerHTML = fb.theEnablingBeliefs.beliefs.map(b => `
      <div class="belief-card">
        <h4 class="belief-text">${b.belief}</h4>
        <p class="fb-analysis"><strong>Father Brown's Analysis:</strong> ${b.fatherBrownAnalysis}</p>
        <p class="consequence"><strong>Consequence:</strong> ${b.consequence}</p>
      </div>
    `).join('');
  }

  // Hidden Pride
  const pride = document.getElementById('fatherbrown-pride');
  if (pride && fb.theHiddenPride) {
    pride.innerHTML = `
      <p class="pride-diagnosis">${fb.theHiddenPride.diagnosis}</p>
      <div class="pride-manifestations">
        ${fb.theHiddenPride.manifestations.map(m => `
          <div class="pride-item">
            <h5>${m.pride}</h5>
            <p class="symptom"><strong>Symptom:</strong> ${m.symptom}</p>
            <p class="example"><strong>MN:</strong> ${m.mnExample}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Moments of Choice
  const moments = document.getElementById('fatherbrown-moments');
  if (moments && fb.theMomentOfChoice) {
    moments.innerHTML = `
      ${fb.theMomentOfChoice.moments.map(m => `
        <div class="moment-card">
          <div class="moment-header">${m.moment}</div>
          <div class="moment-choices">
            <div class="right-choice">
              <span class="choice-label">Right Choice:</span>
              <span class="choice-text">${m.rightChoice}</span>
            </div>
            <div class="wrong-choice">
              <span class="choice-label">Choice Made:</span>
              <span class="choice-text">${m.choiceMade}</span>
            </div>
          </div>
          <p class="moral-failure"><strong>Moral Failure:</strong> ${m.moralFailure}</p>
        </div>
      `).join('')}
      <div class="fb-verdict">${fb.theMomentOfChoice.fatherBrownVerdict}</div>
    `;
  }

  // Systemic Sin
  const systemic = document.getElementById('fatherbrown-systemic');
  if (systemic && fb.theSystemicSin) {
    const conn = fb.theSystemicSin.theConnection;
    systemic.innerHTML = `
      <p class="systemic-diagnosis">${fb.theSystemicSin.diagnosis}</p>
      <p class="systemic-source"><strong>The Source:</strong> ${fb.theSystemicSin.theSource}</p>
      <div class="connection-grid">
        <div class="connection-item">
          <span class="conn-label">Sanctuary:</span>
          <span class="conn-logic">${conn.sanctuary}</span>
        </div>
        <div class="connection-item">
          <span class="conn-label">Fraud:</span>
          <span class="conn-logic">${conn.fraud}</span>
        </div>
        <div class="connection-item">
          <span class="conn-label">Crime:</span>
          <span class="conn-logic">${conn.crime}</span>
        </div>
        <div class="connection-item">
          <span class="conn-label">Accountability:</span>
          <span class="conn-logic">${conn.accountability}</span>
        </div>
      </div>
      <blockquote class="pauline-warning">${fb.theSystemicSin.paulineWarning}</blockquote>
    `;
  }

  // The Verdict
  const verdict = document.getElementById('fatherbrown-verdict');
  if (verdict && fb.fatherBrownVerdict) {
    const v = fb.fatherBrownVerdict;
    verdict.innerHTML = `
      <h3>${v.title}</h3>
      <p class="verdict-summary">${v.summary}</p>
      <p class="deeper-crime"><strong>The Deeper Crime:</strong> ${v.deeperCrime}</p>
      <p class="the-hope"><strong>The Hope:</strong> ${v.theHope}</p>
      <p class="final-question">${v.finalQuestion}</p>
      <blockquote class="chesterton-close">${v.chestertonClose}</blockquote>
    `;
  }

  // Questions for Klobuchar
  const questions = document.getElementById('fatherbrown-questions');
  if (questions && fb.applicationToKlobuchar) {
    questions.innerHTML = `
      <ol class="fb-questions-list">
        ${fb.applicationToKlobuchar.questions.map(q => `
          <li>${q}</li>
        `).join('')}
      </ol>
    `;
  }
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
      
      <div class="invest-actions">
        <span class="status-badge status-${req.status}">${req.status}</span>
        <button class="btn btn-small btn-primary" onclick="generateFOIAEmail('${req.id}')">Draft FOIA Request</button>
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

/* === VICTORY PLAYBOOK FUNCTIONS === */

function renderVictoryPlaybook() {
  if (!SITE_DATA?.victoryPlaybook) return;
  const vp = SITE_DATA.victoryPlaybook;
  
  // Intro
  const intro = document.getElementById('victory-intro-text');
  if (intro) intro.textContent = vp.intro;
  
  // Initial phase: Day One
  renderVictoryPhase('dayOne');
  
  // Standard
  renderVictoryStandard();
}

function renderVictoryPhase(phase) {
  const container = document.getElementById('victory-content');
  if (!container || !SITE_DATA?.victoryPlaybook) return;
  
  const vp = SITE_DATA.victoryPlaybook;
  const data = vp[phase];
  if (!data) return;
  
  let content = `
    <div class="victory-phase-header">
      <h3>${data.title}</h3>
      <p>${data.tagline}</p>
    </div>
  `;
  
  if (phase === 'dayOne' || phase === 'weekOne') {
    content += `
      <div class="victory-actions-grid">
        ${data.actions.map(action => `
          <div class="victory-action">
            <h4>${action.action}</h4>
            <p class="victory-action-why">${action.why}</p>
            ${action.legal ? `<p class="victory-action-legal">${action.legal}</p>` : ''}
            ${action.criteria ? `
              <ul class="victory-action-criteria">
                ${action.criteria.map(c => `<li>${c}</li>`).join('')}
              </ul>
            ` : ''}
            ${action.how ? `<p class="victory-action-legal">${action.how}</p>` : ''}
            ${action.who ? `<p class="victory-action-legal">${action.who}</p>` : ''}
            ${action.scope ? `<p class="victory-action-legal">${action.scope}</p>` : ''}
            ${action.standard ? `<p class="victory-action-legal">${action.standard}</p>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  } else if (phase === 'firstHundredDays') {
    content += `
      <div class="victory-priorities-grid">
        ${data.priorities.map(p => `
          <div class="victory-priority">
            <h4>${p.priority}</h4>
            <p class="victory-priority-goal">${p.goal}</p>
            <p class="victory-priority-approach"><strong>Approach:</strong> ${p.approach}</p>
            ${p.target ? `<p class="victory-priority-target"><strong>Target:</strong> ${p.target}</p>` : ''}
            <p class="victory-priority-metric"><strong>Metric:</strong> ${p.metric}</p>
          </div>
        `).join('')}
      </div>
    `;
  } else if (phase === 'legislativeSession') {
    content += `
      <div class="victory-bills-grid">
        ${data.bills.map(bill => `
          <div class="victory-bill">
            <div class="victory-bill-name">${bill.bill}</div>
            <div class="victory-bill-details">
              <p class="victory-bill-purpose">${bill.purpose}</p>
              <p class="victory-bill-key">${bill.key}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (phase === 'counterattack') {
    content += `
      <div class="victory-attacks-grid">
        ${data.attacks.map(attack => `
          <div class="victory-attack">
            <h4>${attack.attack}</h4>
            <p class="victory-attack-response"><strong>Response:</strong> ${attack.response}</p>
            <p class="victory-attack-prep"><strong>Prepare:</strong> ${attack.preparation}</p>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  container.innerHTML = content;
}

function setupVictoryTabs() {
  document.querySelectorAll('.victory-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.victory-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderVictoryPhase(tab.dataset.phase);
    });
  });
}

function renderVictoryStandard() {
  const container = document.getElementById('victory-standard');
  if (!container || !SITE_DATA?.victoryPlaybook?.bahnsensStandard) return;
  
  const std = SITE_DATA.victoryPlaybook.bahnsensStandard;
  
  container.innerHTML = `
    <h3>${std.title}</h3>
    <p class="victory-standard-principle">${std.principle}</p>
    <ul class="victory-standard-list">
      ${std.application.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <p class="victory-standard-warning">${std.warning}</p>
  `;
}

/* === FISCAL TIMELINE FUNCTIONS === */

function renderFiscalTimeline() {
  if (!SITE_DATA?.fiscalTimeline) return;
  const ft = SITE_DATA.fiscalTimeline;
  
  // Intro
  const intro = document.getElementById('fiscal-intro-text');
  if (intro) intro.textContent = ft.intro;
  
  // Chart
  renderFiscalChart();
  
  // Facts
  renderFiscalFacts();
  
  // Klobuchar table
  renderFiscalKlobuchar();
}

function renderFiscalChart() {
  const container = document.getElementById('fiscal-chart');
  if (!container || !SITE_DATA?.fiscalTimeline?.years) return;
  
  const years = SITE_DATA.fiscalTimeline.years;
  // Calculate max values dynamically from the data
  const maxSurplus = Math.max(...years.map(y => y.surplus > 0 ? y.surplus : 0));
  const maxDeficit = Math.max(...years.map(y => y.surplus < 0 ? Math.abs(y.surplus) : 0));
  const maxHeight = 200; // Max bar height in pixels
  const deficitHeight = 60; // Max deficit bar height
  
  container.innerHTML = years.map(year => {
    let height;
    if (year.surplus > 0) {
      height = (year.surplus / maxSurplus) * maxHeight;
    } else {
      height = (Math.abs(year.surplus) / maxDeficit) * deficitHeight;
    }
    height = Math.max(height, 20); // Minimum height for visibility
    
    const isDeficit = year.surplus < 0;
    const fraudClass = year.fraudActivity.toLowerCase().replace(' ', '-');
    
    return `
      <div class="fiscal-bar">
        <div class="fiscal-bar-inner ${isDeficit ? 'deficit' : ''} ${year.walzYear ? 'walz-era' : ''}" 
             style="height: ${height}px;">
          <span class="fiscal-bar-value">${year.surplus > 0 ? '$' + year.surplus + 'B' : '-$' + Math.abs(year.surplus) + 'B'}</span>
          <span class="fiscal-bar-fraud ${fraudClass}" title="Fraud: ${year.fraudActivity}"></span>
        </div>
        <span class="fiscal-bar-year">${year.year}</span>
        <span class="fiscal-bar-label">${year.label}</span>
      </div>
    `;
  }).join('');
}

function renderFiscalFacts() {
  const container = document.getElementById('fiscal-facts');
  if (!container || !SITE_DATA?.fiscalTimeline?.keyFacts) return;
  
  container.innerHTML = SITE_DATA.fiscalTimeline.keyFacts.map(fact => `
    <div class="fiscal-fact">
      <span class="fiscal-fact-number">${fact.fact}</span>
      <span class="fiscal-fact-label">${fact.context}</span>
    </div>
  `).join('');
}

function renderFiscalKlobuchar() {
  const tableContainer = document.getElementById('fiscal-klobuchar-table');
  const attackLine = document.getElementById('fiscal-attack-line');
  if (!SITE_DATA?.fiscalTimeline) return;
  
  const ft = SITE_DATA.fiscalTimeline;
  
  if (tableContainer && ft.klobucharSilence) {
    tableContainer.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Surplus</th>
            <th>Event</th>
            <th>Klobuchar</th>
          </tr>
        </thead>
        <tbody>
          ${ft.klobucharSilence.map(row => `
            <tr>
              <td>${row.year}</td>
              <td>${row.surplus}</td>
              <td>${row.event}</td>
              <td class="response-${row.response.toLowerCase().replace(' ', '-')}">${row.response}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
  
  if (attackLine && ft.attackLine) {
    attackLine.innerHTML = `"${ft.attackLine}"`;
  }
}

/* === SPENDING LEDGER FUNCTIONS === */

let currentLedgerProgram = 'all';

function renderSpendingLedger(programId = 'all') {
  currentLedgerProgram = programId;
  if (!SITE_DATA?.spendingLedger) return;
  
  renderLedgerSummary(programId);
  renderLedgerChart(programId);
  renderLedgerDetails(programId);
  renderLedgerInsight();
  renderLedgerSources();
}

function renderLedgerSummary(programId) {
  const container = document.getElementById('ledger-summary');
  if (!container || !SITE_DATA?.spendingLedger) return;
  
  const sl = SITE_DATA.spendingLedger;
  let totals;
  
  if (programId === 'all') {
    totals = sl.grandTotals;
  } else {
    const program = sl.programs.find(p => p.id === programId);
    if (!program) return;
    totals = {
      totalSpent: program.totals.spent,
      confirmedFraud: program.totals.confirmedFraud,
      suspectedFraud: program.totals.suspectedFraud,
      unverified: program.totals.unverified
    };
  }
  
  const confirmedPct = ((totals.confirmedFraud / totals.totalSpent) * 100).toFixed(1);
  const suspectedPct = ((totals.suspectedFraud / totals.totalSpent) * 100).toFixed(1);
  const atRiskPct = (((totals.confirmedFraud + totals.suspectedFraud) / totals.totalSpent) * 100).toFixed(1);
  
  container.innerHTML = `
    <div class="ledger-stat">
      <span class="ledger-stat-value total">$${formatBillions(totals.totalSpent)}</span>
      <span class="ledger-stat-label">Total Spent</span>
    </div>
    <div class="ledger-stat">
      <span class="ledger-stat-value confirmed">$${formatBillions(totals.confirmedFraud)}</span>
      <span class="ledger-stat-label">Confirmed Fraud</span>
      <span class="ledger-stat-pct">${confirmedPct}%</span>
    </div>
    <div class="ledger-stat">
      <span class="ledger-stat-value suspected">$${formatBillions(totals.suspectedFraud)}</span>
      <span class="ledger-stat-label">Suspected Fraud</span>
      <span class="ledger-stat-pct">${suspectedPct}%</span>
    </div>
    <div class="ledger-stat">
      <span class="ledger-stat-value unverified">$${formatBillions(totals.unverified)}</span>
      <span class="ledger-stat-label">Unverified</span>
      <span class="ledger-stat-pct">${atRiskPct}% at risk</span>
    </div>
  `;
}

function formatBillions(millions) {
  if (millions >= 1000) {
    return (millions / 1000).toFixed(1) + 'B';
  }
  return millions.toFixed(0) + 'M';
}

function renderLedgerChart(programId) {
  const container = document.getElementById('ledger-chart');
  if (!container || !SITE_DATA?.spendingLedger) return;
  
  const sl = SITE_DATA.spendingLedger;
  let years = [];
  let maxSpent = 0;
  
  if (programId === 'all') {
    // Aggregate all programs by year
    const yearMap = {};
    sl.programs.forEach(program => {
      program.years.forEach(y => {
        if (!yearMap[y.year]) {
          yearMap[y.year] = { year: y.year, spent: 0, confirmedFraud: 0, suspectedFraud: 0, unverified: 0, notes: [] };
        }
        yearMap[y.year].spent += y.spent;
        yearMap[y.year].confirmedFraud += y.confirmedFraud;
        yearMap[y.year].suspectedFraud += y.suspectedFraud;
        yearMap[y.year].unverified += y.unverified;
        if (y.notes) yearMap[y.year].notes.push(y.notes);
      });
    });
    years = Object.values(yearMap).sort((a, b) => a.year - b.year);
    maxSpent = Math.max(...years.map(y => y.spent));
  } else {
    const program = sl.programs.find(p => p.id === programId);
    if (!program) return;
    years = program.years;
    maxSpent = Math.max(...years.map(y => y.spent));
  }
  
  const maxHeight = 220;
  
  container.innerHTML = years.map(y => {
    const totalHeight = (y.spent / maxSpent) * maxHeight;
    const confirmedHeight = (y.confirmedFraud / y.spent) * totalHeight || 0;
    const suspectedHeight = (y.suspectedFraud / y.spent) * totalHeight || 0;
    const unverifiedHeight = (y.unverified / y.spent) * totalHeight || 0;
    const note = Array.isArray(y.notes) ? y.notes[0] || '' : y.notes || '';
    
    return `
      <div class="ledger-bar">
        <div class="ledger-bar-stack" style="height: ${totalHeight}px;">
          <div class="ledger-bar-segment confirmed-fraud" style="height: ${confirmedHeight}px;" title="Confirmed: $${y.confirmedFraud}M"></div>
          <div class="ledger-bar-segment suspected-fraud" style="height: ${suspectedHeight}px;" title="Suspected: $${y.suspectedFraud}M"></div>
          <div class="ledger-bar-segment unverified" style="height: ${unverifiedHeight}px;" title="Unverified: $${y.unverified}M">
            <span class="ledger-bar-total">$${formatBillions(y.spent)}</span>
          </div>
        </div>
        <span class="ledger-bar-year">${y.year}</span>
        <span class="ledger-bar-note">${note}</span>
      </div>
    `;
  }).join('');
}

function renderLedgerDetails(programId) {
  const container = document.getElementById('ledger-details');
  if (!container || !SITE_DATA?.spendingLedger) return;
  
  const sl = SITE_DATA.spendingLedger;
  
  if (programId === 'all') {
    container.innerHTML = sl.programs.map(program => `
      <div class="ledger-program-header">
        <span class="ledger-program-name">${program.name}</span>
        <span class="ledger-program-rate">${program.fraudRate} fraud rate</span>
      </div>
      <p class="ledger-program-desc">${program.description}</p>
      ${program.note ? `<div class="ledger-program-note">${program.note}</div>` : ''}
    `).join('<hr style="margin: var(--space-lg) 0; border: none; border-top: 1px solid rgba(26,54,93,0.1);">');
  } else {
    const program = sl.programs.find(p => p.id === programId);
    if (!program) return;
    
    container.innerHTML = `
      <div class="ledger-program-header">
        <span class="ledger-program-name">${program.name}</span>
        <span class="ledger-program-rate">${program.fraudRate} fraud rate</span>
      </div>
      <p class="ledger-program-desc">${program.description}</p>
      ${program.note ? `<div class="ledger-program-note">${program.note}</div>` : ''}
    `;
  }
}

function renderLedgerInsight() {
  const container = document.getElementById('ledger-insight');
  if (!container || !SITE_DATA?.spendingLedger) return;
  
  const sl = SITE_DATA.spendingLedger;
  
  container.innerHTML = `
    <p>${sl.keyInsight}</p>
    ${sl.attackLines.map(line => `<p class="attack-line">"${line}"</p>`).join('')}
  `;
}

function renderLedgerSources() {
  const container = document.getElementById('ledger-sources');
  if (!container || !SITE_DATA?.spendingLedger?.sources) return;
  
  container.innerHTML = SITE_DATA.spendingLedger.sources.map(src => `
    <span class="source-tag">${src.label} <span>(${src.date})</span></span>
  `).join('');
}

function setupLedgerTabs() {
  document.querySelectorAll('.ledger-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.ledger-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderSpendingLedger(tab.dataset.program);
    });
  });
}

/* === SIGNAL GATE FUNCTIONS === */

function renderSignalGate() {
  if (!SITE_DATA?.signalGate) return;
  const sg = SITE_DATA.signalGate;
  
  // Intro
  const intro = document.getElementById('signal-intro-text');
  if (intro) intro.textContent = sg.intro;
  
  // Body Count
  renderBodyCount();
  
  // Pipeline
  renderPipeline();
  
  // Network (government officials by default)
  renderNetworkMembers('government');
  
  // Legal
  renderSignalLegal();
  
  // Questions
  renderSignalQuestions();
  
  // Kill Shot
  renderKillShot();
}

function renderBodyCount() {
  const container = document.getElementById('body-count-grid');
  if (!container || !SITE_DATA?.signalGate?.bodyCount) return;
  
  container.innerHTML = SITE_DATA.signalGate.bodyCount.map(person => `
    <div class="body-count-card">
      <h4>${person.name}</h4>
      <p class="role">${person.role}</p>
      <span class="status">${person.status}</span>
      <div class="body-count-detail">
        <strong>Death:</strong> <span>${person.death}</span>
      </div>
      <div class="body-count-detail">
        <strong>Network:</strong> <span>${person.networkConnection}</span>
      </div>
      <div class="body-count-detail">
        <strong>Evidence:</strong> <span>${person.evidence}</span>
      </div>
    </div>
  `).join('');
}

function renderPipeline() {
  const container = document.getElementById('pipeline-visual');
  if (!container || !SITE_DATA?.signalGate?.rhetoricToViolence?.steps) return;
  
  container.innerHTML = SITE_DATA.signalGate.rhetoricToViolence.steps.map(step => `
    <div class="pipeline-step">
      <div class="pipeline-step-name">${step.step}</div>
      <div class="pipeline-step-actor">${step.actor}</div>
      <div class="pipeline-step-action">${step.action}</div>
    </div>
  `).join('');
}

function renderNetworkMembers(level) {
  const container = document.getElementById('network-grid');
  if (!container || !SITE_DATA?.signalGate) return;
  
  const sg = SITE_DATA.signalGate;
  const members = level === 'government' ? sg.networkMembers : sg.donorLinked;
  
  container.innerHTML = members.map(member => `
    <div class="network-member ${member.evidenceLevel.toLowerCase()}">
      <h4>${member.name}</h4>
      <p class="position">${member.position}</p>
      <p class="connection">${member.connection}</p>
      <p class="details">${member.details}</p>
      <span class="evidence-level ${member.evidenceLevel.toLowerCase().replace('-', '-')}">${member.evidenceLevel}</span>
    </div>
  `).join('');
}

function setupNetworkTabs() {
  document.querySelectorAll('.network-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.network-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderNetworkMembers(tab.dataset.level);
    });
  });
}

function renderSignalLegal() {
  const container = document.getElementById('signal-legal-grid');
  if (!container || !SITE_DATA?.signalGate?.legalExposure) return;
  
  container.innerHTML = SITE_DATA.signalGate.legalExposure.map(item => `
    <div class="legal-item">
      <div class="legal-item-charge">${item.charge}</div>
      <div class="legal-item-desc">${item.description}</div>
      <div class="legal-item-applies">${item.applies}</div>
    </div>
  `).join('');
}

function renderSignalQuestions() {
  const container = document.getElementById('signal-questions-list');
  if (!container || !SITE_DATA?.signalGate?.questions) return;
  
  container.innerHTML = SITE_DATA.signalGate.questions.map(q => `
    <div class="signal-question-item">
      <div class="signal-question-target">To ${q.target}:</div>
      <div class="signal-question-text">"${q.question}"</div>
    </div>
  `).join('');
}

function renderKillShot() {
  const container = document.getElementById('signal-killshot');
  if (!container || !SITE_DATA?.signalGate?.killShot) return;
  
  container.innerHTML = `<p>${SITE_DATA.signalGate.killShot}</p>`;
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

function generateFOIAEmail(requestId) {
  // Find the request across all investigation targets
  const allRequests = SITE_DATA?.investigationRequests;
  if (!allRequests) return;
  
  let request = null;
  for (const target of Object.values(allRequests)) {
    const found = target.find(r => r.id === requestId);
    if (found) {
      request = found;
      break;
    }
  }
  
  if (!request) return;
  
  // Determine the appropriate recipient based on the request ID
  let recipient = '';
  let agency = '';
  
  if (requestId.startsWith('klobuchar')) {
    recipient = 'foia@klobuchar.senate.gov';
    agency = 'Office of Senator Amy Klobuchar';
  } else if (requestId.startsWith('walz')) {
    recipient = 'mn.gov.info@state.mn.us';
    agency = 'Office of the Governor';
  } else if (requestId.startsWith('ellison')) {
    recipient = 'attorney.general@ag.state.mn.us';
    agency = 'Office of the Attorney General';
  } else if (requestId.startsWith('courts')) {
    recipient = 'Info.MJB@courts.state.mn.us';
    agency = 'Minnesota Judicial Branch';
  } else {
    recipient = '';
    agency = 'Appropriate Agency';
  }
  
  const subject = `Data Practices Request: ${request.title}`;
  
  const body = `To Whom It May Concern,

Pursuant to the Minnesota Government Data Practices Act (Minnesota Statutes, Chapter 13), I am requesting access to the following public government data:

REQUEST SUBJECT: ${request.title}

SPECIFIC RECORDS REQUESTED:
${request.foiaTargets.map((t, i) => `${i + 1}. ${t}`).join('\n')}

CONTEXT: ${request.question}

I am requesting these records as a member of the public exercising my right to access public government data. Please provide these records in electronic format if available.

If any portion of this request is denied, please cite the specific statutory exemption and provide any segregable portions of the requested records.

Please respond within 10 business days as required by law.

Thank you for your assistance.

Sincerely,
[Your Name]
[Your Address]
[Your Email]`;

  const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoUrl, '_self');
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

/* ============================================
   FRAUD AGENTIC INVESTIGATION SYSTEM
   ============================================ */

// Agent State Management
const agentState = {
  deployed: false,
  agents: {},
  revealedFindings: {},
  communications: [],
  discoveredConnections: [],
  phase: 'idle' // idle, deploying, investigating, cross-analysis, synthesis
};

function initializeFraudAgents() {
  if (!SITE_DATA?.fraudAgents) return;
  
  // Initialize agent states
  SITE_DATA.fraudAgents.agents.forEach(agent => {
    agentState.agents[agent.id] = {
      status: 'idle',
      progress: 0,
      findingsRevealed: 0
    };
    agentState.revealedFindings[agent.id] = [];
  });
  
  // Set up deploy button
  const deployBtn = document.getElementById('deploy-agents-btn');
  if (deployBtn) {
    deployBtn.addEventListener('click', deployAgents);
  }
  
  // Set up reset button
  const resetBtn = document.getElementById('reset-agents-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetInvestigation);
  }
}

function deployAgents() {
  if (agentState.deployed) return;
  
  agentState.deployed = true;
  agentState.phase = 'deploying';
  
  // Update deploy button
  const deployBtn = document.getElementById('deploy-agents-btn');
  if (deployBtn) {
    deployBtn.disabled = true;
    deployBtn.querySelector('.btn-text').textContent = 'Deploying...';
    deployBtn.classList.add('deploying');
  }
  
  // Show agent grid
  const gridContainer = document.getElementById('agent-grid-container');
  if (gridContainer) {
    gridContainer.style.display = 'block';
    gridContainer.classList.add('fade-in');
  }
  
  // Show communication feed
  const commContainer = document.getElementById('agent-comm-container');
  if (commContainer) {
    setTimeout(() => {
      commContainer.style.display = 'block';
      commContainer.classList.add('fade-in');
    }, 500);
  }
  
  // Render initial agent cards
  renderAgentGrid();
  
  // Add system message
  addCommunication('system', null, 'Investigation system initializing...');
  
  // Deploy agents sequentially with delays
  const agents = SITE_DATA.fraudAgents.agents;
  agents.forEach((agent, index) => {
    setTimeout(() => {
      startAgentInvestigation(agent.id);
    }, 800 + (index * 600));
  });
  
  // After all agents deployed, start cross-analysis
  setTimeout(() => {
    agentState.phase = 'cross-analysis';
    startCrossAnalysis();
  }, 800 + (agents.length * 600) + 15000); // 15 seconds of investigation per agent
}

function renderAgentGrid() {
  const grid = document.getElementById('agent-grid');
  if (!grid || !SITE_DATA?.fraudAgents?.agents) return;
  
  grid.innerHTML = SITE_DATA.fraudAgents.agents.map(agent => {
    const state = agentState.agents[agent.id] || { status: 'idle', progress: 0, findingsRevealed: 0 };
    const statusClass = state.status;
    
    return `
      <div class="agent-card ${statusClass}" data-agent-id="${agent.id}">
        <div class="agent-card-header" style="border-left: 4px solid ${agent.color};">
          <span class="agent-icon" style="background: ${agent.color};">${agent.icon}</span>
          <div class="agent-info">
            <h4 class="agent-name">${agent.name}</h4>
            <span class="agent-category">${agent.category}</span>
          </div>
          <span class="agent-status-indicator status-${state.status}"></span>
        </div>
        <div class="agent-card-body">
          <p class="agent-mission">${agent.mission}</p>
          <div class="agent-progress">
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${state.progress}%;"></div>
            </div>
            <span class="progress-text">${state.progress}%</span>
          </div>
          <div class="agent-findings-count">
            <span class="findings-revealed">${state.findingsRevealed}</span>
            <span class="findings-total">/ ${agent.findings.length} findings</span>
          </div>
        </div>
        <div class="agent-findings-list" id="findings-${agent.id}">
          <!-- Findings populated progressively -->
        </div>
      </div>
    `;
  }).join('');
}

function startAgentInvestigation(agentId) {
  const agent = SITE_DATA.fraudAgents.agents.find(a => a.id === agentId);
  if (!agent) return;
  
  // Update status
  agentState.agents[agentId].status = 'active';
  updateAgentCard(agentId);
  
  // Add deployment message
  addCommunication('deploy', agentId, `${agent.name} deployed. Mission: ${agent.mission}`);
  
  // Simulate investigation - reveal findings progressively
  const totalFindings = agent.findings.length;
  const revealInterval = 2000; // 2 seconds between findings
  
  agent.findings.forEach((finding, index) => {
    setTimeout(() => {
      revealFinding(agentId, finding, index);
      
      // Update progress
      const progress = Math.round(((index + 1) / totalFindings) * 100);
      agentState.agents[agentId].progress = progress;
      agentState.agents[agentId].findingsRevealed = index + 1;
      updateAgentCard(agentId);
      
      // If finding connects to another agent, announce it
      if (finding.connectsTo && finding.connectsTo.length > 0) {
        setTimeout(() => {
          finding.connectsTo.forEach(targetId => {
            const targetAgent = SITE_DATA.fraudAgents.agents.find(a => a.id === targetId);
            if (targetAgent) {
              addCommunication('alert', agentId, 
                `Connection detected: "${finding.text.substring(0, 50)}..." links to ${targetAgent.name}`,
                targetId
              );
            }
          });
        }, 500);
      }
      
      // Mark complete when done
      if (index === totalFindings - 1) {
        setTimeout(() => {
          agentState.agents[agentId].status = 'complete';
          updateAgentCard(agentId);
          addCommunication('complete', agentId, `${agent.name} investigation complete. ${totalFindings} findings documented.`);
        }, 500);
      }
    }, revealInterval * (index + 1));
  });
}

function revealFinding(agentId, finding, index) {
  const findingsList = document.getElementById(`findings-${agentId}`);
  if (!findingsList) return;
  
  agentState.revealedFindings[agentId].push(finding);
  
  const severityClass = finding.severity || 'normal';
  const findingEl = document.createElement('div');
  findingEl.className = `agent-finding ${severityClass} fade-in-up`;
  findingEl.innerHTML = `
    <span class="finding-type">${finding.type}</span>
    <p class="finding-text">${finding.text}</p>
    ${finding.connectsTo && finding.connectsTo.length > 0 ? 
      `<span class="finding-connection">Links to: ${finding.connectsTo.join(', ')}</span>` : ''}
  `;
  
  findingsList.appendChild(findingEl);
}

function updateAgentCard(agentId) {
  const card = document.querySelector(`.agent-card[data-agent-id="${agentId}"]`);
  if (!card) return;
  
  const state = agentState.agents[agentId];
  
  // Update status class
  card.className = `agent-card ${state.status}`;
  
  // Update progress bar
  const progressFill = card.querySelector('.progress-fill');
  const progressText = card.querySelector('.progress-text');
  if (progressFill) progressFill.style.width = `${state.progress}%`;
  if (progressText) progressText.textContent = `${state.progress}%`;
  
  // Update findings count
  const findingsRevealed = card.querySelector('.findings-revealed');
  if (findingsRevealed) findingsRevealed.textContent = state.findingsRevealed;
  
  // Update status indicator
  const indicator = card.querySelector('.agent-status-indicator');
  if (indicator) {
    indicator.className = `agent-status-indicator status-${state.status}`;
  }
}

function addCommunication(type, fromAgentId, message, toAgentId = null) {
  const commFeed = document.getElementById('agent-comm');
  if (!commFeed) return;
  
  const agent = fromAgentId ? SITE_DATA.fraudAgents.agents.find(a => a.id === fromAgentId) : null;
  const toAgent = toAgentId ? SITE_DATA.fraudAgents.agents.find(a => a.id === toAgentId) : null;
  
  const comm = {
    type,
    from: agent,
    to: toAgent,
    message,
    timestamp: new Date()
  };
  
  agentState.communications.push(comm);
  
  const commEl = document.createElement('div');
  commEl.className = `comm-message type-${type} fade-in-up`;
  
  let icon = '📡';
  if (type === 'deploy') icon = '🚀';
  if (type === 'alert') icon = '⚠️';
  if (type === 'complete') icon = '✅';
  if (type === 'connection') icon = '🔗';
  if (type === 'synthesis') icon = '🧠';
  
  commEl.innerHTML = `
    <span class="comm-icon">${icon}</span>
    <div class="comm-content">
      ${agent ? `<span class="comm-agent" style="color: ${agent.color};">${agent.name}</span>` : '<span class="comm-agent system">System</span>'}
      ${toAgent ? `<span class="comm-arrow">→</span><span class="comm-agent" style="color: ${toAgent.color};">${toAgent.name}</span>` : ''}
      <p class="comm-text">${message}</p>
    </div>
    <span class="comm-time">${formatTime(comm.timestamp)}</span>
  `;
  
  commFeed.appendChild(commEl);
  commFeed.scrollTop = commFeed.scrollHeight;
}

function formatTime(date) {
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function startCrossAnalysis() {
  // Show cross-analysis container
  const crossContainer = document.getElementById('cross-analysis-container');
  if (crossContainer) {
    crossContainer.style.display = 'block';
    crossContainer.classList.add('fade-in');
  }
  
  addCommunication('system', null, 'Initiating cross-agent analysis...');
  
  // Show shared timeline
  setTimeout(() => {
    const timelineContainer = document.getElementById('shared-timeline-container');
    if (timelineContainer) {
      timelineContainer.style.display = 'block';
      timelineContainer.classList.add('fade-in');
      renderSharedTimeline();
    }
  }, 1000);
  
  // Reveal cross-connections progressively
  const connections = SITE_DATA.fraudAgents.crossConnections;
  connections.forEach((conn, index) => {
    setTimeout(() => {
      revealCrossConnection(conn);
    }, 2000 + (index * 1500));
  });
  
  // After all connections revealed, show synthesis
  setTimeout(() => {
    agentState.phase = 'synthesis';
    showSynthesis();
  }, 2000 + (connections.length * 1500) + 2000);
}

function revealCrossConnection(connection) {
  agentState.discoveredConnections.push(connection);
  
  const crossGrid = document.getElementById('cross-analysis');
  if (!crossGrid) return;
  
  const agents = connection.agents.map(id => 
    SITE_DATA.fraudAgents.agents.find(a => a.id === id)
  ).filter(Boolean);
  
  const connEl = document.createElement('div');
  connEl.className = `cross-connection severity-${connection.severity} fade-in-up`;
  connEl.innerHTML = `
    <div class="connection-header">
      <span class="connection-type">${connection.type.replace(/_/g, ' ')}</span>
      <span class="connection-severity">${connection.severity}</span>
    </div>
    <div class="connection-agents">
      ${agents.map(a => `<span class="connected-agent" style="background: ${a.color};">${a.icon}</span>`).join('')}
    </div>
    <div class="connection-body">
      <strong>${connection.entity}</strong>
      <p>${connection.description}</p>
    </div>
  `;
  
  crossGrid.appendChild(connEl);
  
  // Add communication about the connection
  addCommunication('connection', agents[0]?.id, 
    `Cross-connection discovered: ${connection.entity} - ${connection.description}`,
    agents[1]?.id
  );
}

function renderSharedTimeline() {
  const container = document.getElementById('shared-timeline');
  if (!container || !SITE_DATA?.fraudAgents?.sharedTimeline) return;
  
  container.innerHTML = SITE_DATA.fraudAgents.sharedTimeline.map(event => {
    const agents = event.agents.map(id => 
      SITE_DATA.fraudAgents.agents.find(a => a.id === id)
    ).filter(Boolean);
    
    return `
      <div class="timeline-event">
        <div class="event-date">${event.date}</div>
        <div class="event-content">
          <p class="event-text">${event.event}</p>
          <div class="event-agents">
            ${agents.map(a => `<span class="event-agent" style="background: ${a.color};" title="${a.name}">${a.icon}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function showSynthesis() {
  // Show synthesis container
  const synthContainer = document.getElementById('agent-synthesis-container');
  if (synthContainer) {
    synthContainer.style.display = 'block';
    synthContainer.classList.add('fade-in');
  }
  
  addCommunication('synthesis', null, 'Collaborative analysis complete. Generating final synthesis...');
  
  const synthGrid = document.getElementById('agent-synthesis');
  if (!synthGrid || !SITE_DATA?.fraudAgents?.synthesisFindings) return;
  
  // Reveal synthesis findings progressively
  SITE_DATA.fraudAgents.synthesisFindings.forEach((finding, index) => {
    setTimeout(() => {
      const findingEl = document.createElement('div');
      findingEl.className = 'synthesis-finding fade-in-up';
      findingEl.innerHTML = `
        <div class="synthesis-icon">${finding.icon}</div>
        <div class="synthesis-content">
          <h4>${finding.title}</h4>
          <p>${finding.finding}</p>
          <span class="synthesis-agents">Based on: ${finding.basedOn.join(', ')}</span>
        </div>
      `;
      synthGrid.appendChild(findingEl);
    }, index * 800);
  });
  
  // Show final summary
  setTimeout(() => {
    showInvestigationSummary();
  }, SITE_DATA.fraudAgents.synthesisFindings.length * 800 + 1000);
}

function showInvestigationSummary() {
  const summaryContainer = document.getElementById('investigation-summary');
  if (!summaryContainer) return;
  
  summaryContainer.style.display = 'block';
  summaryContainer.classList.add('fade-in');
  
  const summaryStats = document.getElementById('summary-stats');
  if (summaryStats) {
    const totalFindings = Object.values(agentState.revealedFindings).flat().length;
    const totalConnections = agentState.discoveredConnections.length;
    const agentCount = Object.keys(agentState.agents).length;
    
    summaryStats.innerHTML = `
      <div class="summary-stat">
        <span class="stat-value">${agentCount}</span>
        <span class="stat-label">Agents Deployed</span>
      </div>
      <div class="summary-stat">
        <span class="stat-value">${totalFindings}</span>
        <span class="stat-label">Findings Documented</span>
      </div>
      <div class="summary-stat">
        <span class="stat-value">${totalConnections}</span>
        <span class="stat-label">Cross-Connections Found</span>
      </div>
      <div class="summary-stat">
        <span class="stat-value">$44.5B</span>
        <span class="stat-label">Excess Identified</span>
      </div>
    `;
  }
  
  addCommunication('system', null, 'Investigation complete. Review findings above or explore the detailed data.');
}

function resetInvestigation() {
  // Reset state
  agentState.deployed = false;
  agentState.communications = [];
  agentState.discoveredConnections = [];
  agentState.phase = 'idle';
  
  // Reset agent states
  Object.keys(agentState.agents).forEach(id => {
    agentState.agents[id] = {
      status: 'idle',
      progress: 0,
      findingsRevealed: 0
    };
    agentState.revealedFindings[id] = [];
  });
  
  // Hide all containers
  const containers = [
    'agent-grid-container',
    'agent-comm-container',
    'cross-analysis-container',
    'shared-timeline-container',
    'agent-synthesis-container',
    'investigation-summary'
  ];
  
  containers.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = 'none';
      el.classList.remove('fade-in');
    }
  });
  
  // Clear dynamic content
  ['agent-grid', 'agent-comm', 'cross-analysis', 'shared-timeline', 'agent-synthesis', 'summary-stats'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '';
  });
  
  // Reset deploy button
  const deployBtn = document.getElementById('deploy-agents-btn');
  if (deployBtn) {
    deployBtn.disabled = false;
    deployBtn.querySelector('.btn-text').textContent = 'Deploy All Agents';
    deployBtn.classList.remove('deploying');
  }
}

/* === Console Branding === */
console.log('%c★ Minnesota Reclamation Project', 'font-size: 20px; font-weight: bold; color: #d69e2e;');
console.log('%cReclaim Minnesota', 'font-size: 14px; color: #1a365d;');
