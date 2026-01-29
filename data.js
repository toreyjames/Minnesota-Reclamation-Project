/* ============================================
   MINNESOTA RECLAMATION PROJECT
   Site Data
   ============================================ */

const SITE_DATA = {
  meta: {
    lastUpdated: '2026-01-24',
    version: '1.0.0'
  },

  /* === Issues === */
  issues: {
    fraud: {
      title: 'Fraud & Oversight Failure',
      summary: 'Up to $9 billion in potential Medicaid, childcare, and food program fraud. State agencies ignored warnings. Zero officials fired. Federal intervention required.',
      tags: ['$9B+ potential fraud', 'FOF scandal', 'Nick Shirley', 'Dr. Oz investigation'],
      statutes: ['Minn. Stat. § 609.52 (Theft)', 'Federal wire fraud', 'RICO'],
      evaluation: {
        moralWrong: 'Real theft and fraud—clear biblical wrongs',
        stateResponse: 'Inadequate oversight, no accountability for enablers',
        federalResponse: 'Justified intervention given state failure'
      }
    },
    sanctuary: {
      title: 'Sanctuary & Immigration',
      summary: 'Minnesota refuses ICE detainers, shields dangerous offenders, and officials use inflammatory rhetoric ("ICE get out," "Gestapo") while being subpoenaed for potential obstruction.',
      tags: ['ICE detainers', 'Cities Church', 'Walz/Frey subpoenas', 'FACE Act'],
      statutes: ['8 U.S.C. § 1373', 'FACE Act', '4th/10th Amendment issues'],
      evaluation: {
        moralWrong: 'Mixed—detainer non-cooperation may be defensible; shielding dangerous offenders is not',
        stateResponse: 'Inflammatory rhetoric, non-cooperation, possible obstruction',
        federalResponse: 'Justified where state fails to punish real crimes'
      }
    },
    crime: {
      title: 'Crime & Enforcement Failure',
      summary: 'Carjackings spiked 400% post-2020. Catch-and-release policies. Police demoralization after "defund" push. Victims unprotected while wrongdoers walk free.',
      tags: ['Carjacking surge', 'Catch-and-release', 'Post-Floyd policing', 'Victim abandonment'],
      statutes: ['Minn. Stat. § 609 (Criminal Code)', 'Sentencing Guidelines'],
      evaluation: {
        moralWrong: 'Real crimes going unpunished—failure of the sword (Rom 13)',
        stateResponse: 'Under-prosecution, police retreat, victims neglected',
        federalResponse: 'Limited jurisdiction; primarily a state failure'
      }
    },
    life: {
      title: 'Life & Family Issues',
      summary: 'Minnesota codified abortion as a "fundamental right" with no limits. Became a "trans refuge" state blocking other states\' parental protections. Christian values suppressed.',
      tags: ['Abortion "fundamental right"', 'Trans refuge law', 'Parental rights', 'Religious liberty'],
      statutes: ['Minn. Stat. § 145.409', 'H.F. 146 (Trans Refuge)'],
      evaluation: {
        moralWrong: 'Abortion is taking innocent life; trans interventions on minors cause irreversible harm',
        stateResponse: 'Active promotion and legal protection of these practices',
        federalResponse: 'Constitutional challenges possible; legislative reform needed'
      }
    },
    elections: {
      title: 'Election Integrity',
      summary: 'Automatic voter registration, felon voting restored immediately upon release, driver\'s licenses for undocumented—creating pathways for ineligible voting.',
      tags: ['Auto registration', 'Felon voting', 'DL for All', 'Voter roll concerns'],
      statutes: ['Minn. Stat. § 201 (Elections)', 'H.F. 28 (Restore the Vote)'],
      evaluation: {
        moralWrong: 'Diluting lawful citizens\' votes is a form of fraud',
        stateResponse: 'Expanding eligibility without verification safeguards',
        federalResponse: 'Citizenship verification suits, legislative reform'
      }
    },
    courts: {
      title: 'Courts & Judicial System',
      summary: 'Minnesota\'s judiciary operates as an institutional enforcer of progressive policy. Walz appointed 60%+ of sitting judges. Prosecutors decline cases. Bail reform releases repeat offenders. Courts blocked fraud investigations. The "social justice legal framework" is administered here.',
      tags: ['Walz judges', 'Prosecutorial discretion', 'Bail reform', 'FOF lawsuit win', 'Hennepin County'],
      statutes: ['Minn. Stat. § 480 (Court Organization)', 'Minn. R. Crim. P. 6.02 (Bail)', 'Minn. Stat. § 388 (County Attorneys)'],
      evaluation: {
        moralWrong: 'Selective enforcement and two-tiered justice—partiality forbidden by Scripture',
        stateResponse: 'Systematic leniency for favored groups, aggressive prosecution of disfavored',
        federalResponse: 'Limited jurisdiction over state courts; civil rights suits possible'
      }
    }
  },

  /* === Cases === */
  cases: [
    {
      id: 'cities-church',
      title: 'Cities Church Protest',
      summary: 'Protesters disrupted worship at Cities Church (Jan 2026) targeting a pastor who is an ICE official. Three arrested under federal FACE Act. Magistrate later released them. State brought no charges.',
      facts: [
        'Protesters entered during worship service',
        'Disrupted preaching, refused to leave',
        'Federal charges under FACE Act (protecting religious worship)',
        'State/local: no charges brought',
        'Magistrate ordered release; critics called it "activist"'
      ],
      evaluation: {
        'Moral Wrong': { text: 'Yes—disruption of worship is a real wrong', rating: 'positive' },
        'State Response': { text: 'Failure—no charges for clear disruption', rating: 'negative' },
        'Federal Response': { text: 'Justified but possibly disproportionate (FACE felony for non-violent disruption)', rating: 'mixed' },
        'Just Response': { text: 'Local trespass/disruption charges with modest penalty', rating: 'positive' }
      },
      legalPath: 'State should bring proportionate local charges. Church has civil remedies. Federal FACE may be overkill for non-violent disruption.'
    },
    {
      id: 'fof-oversight',
      title: 'Feeding Our Future Oversight Failure',
      summary: 'The largest pandemic fraud in U.S. history ($250M+). MDE received 30+ complaints and FBI warnings but continued payments. Zero officials fired despite state audit finding "lax oversight."',
      facts: [
        '$250M+ stolen from child nutrition programs',
        'MDE received FBI warning in January 2021',
        '30+ internal complaints ignored',
        'FOF sued MDE when they tried to pause—and won',
        '78 defendants charged, 50+ convicted',
        'Zero state officials fired'
      ],
      evaluation: {
        'Moral Wrong': { text: 'Yes—massive theft from children\'s programs', rating: 'positive' },
        'State Response': { text: 'Dereliction—ignored warnings, enabled fraud, no accountability', rating: 'negative' },
        'Federal Response': { text: 'Appropriate—prosecuted fraudsters', rating: 'positive' },
        'Missing': { text: 'Prosecution/accountability for state officials who enabled it', rating: 'negative' }
      },
      legalPath: 'FOIA for internal communications. Legislative hearings. Possible civil RICO if knowing participation can be proven. Taxpayer suits for misuse of funds.'
    },
    {
      id: 'walz-frey-subpoenas',
      title: 'Walz/Frey DOJ Subpoenas',
      summary: 'DOJ subpoenaed Gov. Walz, Mayor Frey, AG Ellison, and others for potential obstruction of immigration enforcement based on their public statements and policies.',
      facts: [
        'Walz compared ICE to "modern-day Gestapo"',
        'Frey said "ICE, get the f*** out of Minneapolis"',
        'DOJ investigating potential conspiracy to obstruct federal enforcement',
        'Officials claim it\'s political weaponization'
      ],
      evaluation: {
        'Moral Wrong': { text: 'Inflammatory speech is sinful but not clearly criminal incitement', rating: 'mixed' },
        'State Response': { text: 'Irresponsible rhetoric, but policy disagreement ≠ crime', rating: 'mixed' },
        'Federal Response': { text: 'Overreach unless specific incitement to crimes can be proven', rating: 'negative' },
        'Just Response': { text: 'Political accountability, not criminal prosecution (absent more evidence)', rating: 'positive' }
      },
      legalPath: 'Monitor for evidence of actual incitement or obstruction. Distinguish policy disagreement from crime. Political accountability through elections.'
    },
    {
      id: 'nick-shirley',
      title: 'Nick Shirley Daycare Investigation',
      summary: 'YouTuber Nick Shirley visited ~10 daycare centers, attempted to enroll a child, and was refused at almost all of them—despite these centers receiving millions in state childcare funds.',
      facts: [
        'Visited centers during business hours with enrollment request',
        'Almost all refused to enroll children',
        'Centers receiving $1-2M+ annually in state funds',
        'State said "no fraud found" after inspections',
        'One center (Quality Learning Center) closed immediately after video',
        'Walz called Shirley "white supremacist" and "far right"'
      ],
      evaluation: {
        'Moral Wrong': { text: 'If centers refuse enrollment while billing for childcare, that\'s fraud', rating: 'positive' },
        'State Response': { text: 'Defensive—"no fraud found" despite suspicious behavior', rating: 'negative' },
        'Federal Response': { text: 'Appropriate investigation; funding freeze', rating: 'positive' },
        'The Shield': { text: 'Calling critics "racist" to deflect accountability', rating: 'negative' }
      },
      legalPath: 'File specific complaints with DCYF. Demand enrollment verification audits. Support federal investigation. Document the "racist shield" pattern.'
    },
    {
      id: 'fof-v-mde',
      title: 'Feeding Our Future v. MDE (2021)',
      summary: 'When MDE finally tried to pause payments to FOF in early 2021, FOF sued—and won. Ramsey County Judge John Guthmann ordered MDE to continue payments. Fraud continued for months.',
      facts: [
        'January 2021: FBI warned MDE about suspected fraud',
        'MDE attempted to suspend/pause payments to FOF',
        'FOF sued MDE in Ramsey County District Court',
        'Judge John Guthmann ruled in FOF\'s favor',
        'Temporary restraining order forced continued payments',
        'Payments continued for months while fraud expanded',
        'By the time FBI raided in January 2022, $250M+ was stolen',
        'Guthmann: Walz appointee (2019)'
      ],
      evaluation: {
        'Moral Wrong': { text: 'Court enabled ongoing fraud after FBI warning', rating: 'negative' },
        'Judicial Decision': { text: 'Prioritized procedural claims over fraud prevention', rating: 'negative' },
        'Systemic Failure': { text: 'Agency tried to act; court blocked it', rating: 'negative' },
        'Pattern': { text: 'Walz appointee ruling in favor of entity later convicted of massive fraud', rating: 'negative' }
      },
      legalPath: 'FOIA for all court filings and MDE communications. Judicial conduct review. Document appointment-to-ruling pipeline.'
    },
    {
      id: 'hennepin-bail-patterns',
      title: 'Hennepin County Bail & Release Patterns',
      summary: 'Hennepin County (Minneapolis) has systematically released repeat violent offenders on low or no bail, leading to documented reoffending. Carjackers released and rearrested. Assault suspects freed to reoffend.',
      facts: [
        'Post-2020: Bail "reform" policies emphasized release',
        'Multiple documented cases of violent reoffenders released on low bail',
        '2022-2024: Carjacking suspects released, rearrested for new carjackings',
        'Judges cite "least restrictive conditions" standard',
        'County Attorney Mary Moriarty: declined to prosecute many cases',
        'Carjackings up 400%+ from 2019 baseline',
        'Victims testify offenders were out on bail for prior crimes'
      ],
      evaluation: {
        'Moral Wrong': { text: 'Real crimes, real victims—offenders walk free', rating: 'positive' },
        'Judicial Pattern': { text: 'Systematic prioritization of offender "equity" over victim safety', rating: 'negative' },
        'Prosecutorial Failure': { text: 'County Attorney declines cases, enabling revolving door', rating: 'negative' },
        'Framework': { text: 'Forward-looking "rehabilitation" model replacing backward-looking desert', rating: 'negative' }
      },
      legalPath: 'Document specific cases with names/dates. Victim advocacy. Support recall of county attorney. Legislative bail reform.'
    },
    {
      id: 'moriarty-declinations',
      title: 'County Attorney Mary Moriarty Declinations',
      summary: 'Hennepin County Attorney Mary Moriarty (elected 2022) has declined to prosecute numerous cases, including violent crimes and repeat offenders, citing "prosecutorial discretion" and "equity."',
      facts: [
        'Elected 2022 with progressive prosecutor platform',
        'Declined to prosecute cases involving juveniles for carjacking',
        'Reduced charges in multiple violent crime cases',
        'Office policy: consider "collateral consequences" (immigration, employment)',
        'Staff exodus: experienced prosecutors leaving office',
        'Public defenders: now complaining about case handling',
        'Police demoralization: "Why make arrests if no prosecution?"'
      ],
      evaluation: {
        'Moral Wrong': { text: 'Victims denied justice; wrongdoers face no consequences', rating: 'positive' },
        'State Response': { text: 'County attorney actively refuses core function', rating: 'negative' },
        'Systemic Impact': { text: 'Police retreat, crime rises, victims abandoned', rating: 'negative' },
        'Framework': { text: 'Managerial "equity" replacing ministerial justice', rating: 'negative' }
      },
      legalPath: 'Document declination patterns with data. Victim complaints to state AG. Support recall efforts. Legislative oversight of prosecutorial standards.'
    },
    {
      id: 'sanctuary-court-rulings',
      title: 'Courts & Sanctuary Policy Enforcement',
      summary: 'Minnesota courts have upheld and enabled sanctuary policies, refusing to honor ICE detainers, blocking cooperation with federal immigration enforcement, and ruling against transparency.',
      facts: [
        'AG Ellison opinion (2017): Counties cannot hold for ICE detainers',
        'Hennepin/Ramsey County policies: release before ICE notification',
        'Courts upheld "sanctuary" ordinances against state challenges',
        'Minneapolis PD prohibited from immigration enforcement cooperation',
        'State courts refused to compel cooperation with federal warrants',
        'Pattern: federal judicial warrants vs. civil detainers distinction used as loophole'
      ],
      evaluation: {
        'Legal Question': { text: 'Detainers vs. judicial warrants—genuine legal distinction', rating: 'mixed' },
        'Pattern': { text: 'Courts consistently rule to minimize federal cooperation', rating: 'negative' },
        'Consequence': { text: 'Dangerous offenders released rather than transferred to ICE', rating: 'negative' },
        'Framework': { text: 'Sanctuary as judicial policy, not just executive discretion', rating: 'negative' }
      },
      legalPath: 'Federal preemption litigation. Document specific dangerous releases. Congressional testimony. State legislative reform.'
    },
    {
      id: 'cities-church-magistrate',
      title: 'Cities Church Magistrate Decision',
      summary: 'After federal authorities arrested three protesters under the FACE Act for disrupting worship at Cities Church, Magistrate Judge Becky Thorson ordered their release. Critics called it an "activist" decision.',
      facts: [
        'January 2026: Protesters disrupted worship service',
        'Federal charges under FACE Act (18 U.S.C. § 248)',
        'Magistrate Becky Thorson: ordered release pending trial',
        'DOJ objected, calling defendants flight risks',
        'Thorson: Obama appointee (2015)',
        'Decision cited "non-violent" nature despite felony charges',
        'Pattern: different treatment than January 6 defendants'
      ],
      evaluation: {
        'Moral Wrong': { text: 'Disrupting worship is wrong, but non-violent', rating: 'mixed' },
        'Proportionality': { text: 'FACE Act felony may be disproportionate; release may be appropriate', rating: 'mixed' },
        'Pattern Question': { text: 'Would same release be granted to pro-life protesters?', rating: 'negative' },
        'Framework': { text: 'Selective application of "non-violent" standard', rating: 'negative' }
      },
      legalPath: 'Monitor case for disparate treatment evidence. Document parallel cases with different outcomes. Congressional oversight of FACE enforcement.'
    },
    {
      id: 'walz-judicial-appointments',
      title: 'Walz Judicial Appointment Pattern',
      summary: 'Governor Walz appointed 60%+ of Minnesota\'s sitting judges during his tenure. The Commission on Judicial Selection, which recommends candidates, has been stacked with progressive attorneys and activists.',
      facts: [
        '2019-2024: Walz appointed 180+ judges',
        'Commission on Judicial Selection: Walz-appointed members',
        'Pattern: appointees from progressive legal organizations',
        'Former public defenders overrepresented in appointments',
        'Prosecutors underrepresented in appointments',
        'No apparent "balance" requirement',
        'Result: judiciary now ideologically aligned with Walz agenda'
      ],
      evaluation: {
        'Legal': { text: 'Governor has appointment authority—this is legal', rating: 'mixed' },
        'Pattern': { text: 'Systematic ideological capture of judiciary', rating: 'negative' },
        'Consequence': { text: 'Rulings align with progressive framework across issues', rating: 'negative' },
        'Long-term Impact': { text: 'Even after Walz, these judges serve for decades', rating: 'negative' }
      },
      legalPath: 'Document appointment-to-ruling patterns. Support judicial election reform. Judicial conduct complaints where warranted. Legislative oversight of commission.'
    }
  ],

  /* === Actors === */
  actors: [
    {
      id: 'walz',
      name: 'Tim Walz',
      role: 'Governor (outgoing)',
      record: [
        'Appointed all commissioners who oversaw fraud-enabling agencies',
        'Extended emergency powers 19+ times',
        'Zero officials fired despite $9B+ fraud exposure',
        'Called Nick Shirley "white supremacist" for exposing fraud',
        'Compared ICE to "modern-day Gestapo"',
        'Signed abortion "fundamental right" law',
        'Signed trans refuge law',
        'Dropped reelection bid amid scandal'
      ],
      pattern: 'Use identity politics to deflect accountability; advance anti-Christian agenda; protect insiders',
      pressurePoints: ['Legislative subpoenas', 'FOIA for briefing docs', 'Federal cooperation demands', 'Congressional testimony']
    },
    {
      id: 'ellison',
      name: 'Keith Ellison',
      role: 'Attorney General',
      record: [
        'No state charges in FOF fraud—only federal',
        'Met with FOF defendants in December 2021 (leaked audio)',
        'Received campaign donations from FOF-connected individuals',
        'Suing Trump administration over gender-affirming care',
        'Defending trans refuge law in court',
        'Issued opinion blocking ICE detainer cooperation',
        'Won dismissal of pro-life legal challenges'
      ],
      pattern: 'Weaponize AG office for ideological agenda; protect fraud network; obstruct federal enforcement',
      pressurePoints: ['Bar complaints (if warranted)', 'FOIA for FOF communications', 'Election accountability', 'Federal investigation cooperation']
    },
    {
      id: 'klobuchar',
      name: 'Amy Klobuchar',
      role: 'Senator / Gubernatorial Candidate',
      record: [
        'Filed paperwork Jan 22, 2026 to run for governor',
        'Stood with Walz on abortion: "This is no longer a drill"',
        'Called Minnesota "center of America\'s heartbreak"—blamed Trump',
        'No public break with Walz on any major policy',
        'Would represent continuity of the same agenda'
      ],
      pattern: 'Same policies, different face; the revolving door continues',
      pressurePoints: ['Demand positions on fraud accountability', 'Oversight reform', 'Sanctuary policies', 'Life issues']
    },
    {
      id: 'frey',
      name: 'Jacob Frey',
      role: 'Minneapolis Mayor',
      record: [
        '"ICE, get the f*** out of Minneapolis" (Jan 2026)',
        'Called ICE presence "terrorizing" residents',
        'Sanctuary policies in Minneapolis',
        'Subpoenaed by DOJ for potential obstruction',
        'Led city during carjacking surge and post-Floyd chaos'
      ],
      pattern: 'Inflammatory rhetoric; non-cooperation with federal law; protect political base',
      pressurePoints: ['City council pressure', 'Recall mechanisms', 'Civil suits for policy harms', 'Federal investigation']
    },
    {
      id: 'commissioners',
      name: 'Agency Commissioners',
      role: 'DHS, MDE, DCYF',
      record: [
        'Jodi Harpstead (DHS): Oversaw Medicaid/childcare with massive fraud',
        'Heather Mueller (MDE, departed): Received FBI warnings, continued FOF payments',
        'Tikki Brown (DCYF): Oversaw childcare amid fraud allegations',
        'All appointed by Walz',
        'None held accountable for oversight failures'
      ],
      pattern: 'Appointed by Walz, enabled fraud through weak oversight, no consequences',
      pressurePoints: ['Administrative complaints', 'Legislative testimony demands', 'Personnel records FOIA']
    },
    {
      id: 'moriarty',
      name: 'Mary Moriarty',
      role: 'Hennepin County Attorney',
      record: [
        'Elected 2022 on progressive prosecutor platform',
        'Former chief public defender—career on defense side',
        'Declined to prosecute numerous violent crime cases',
        'Policy: consider "collateral consequences" before charging',
        'Staff exodus of experienced prosecutors',
        'Carjacking prosecutions dropped despite 400% crime surge',
        'Charges reduced in multiple high-profile violent cases',
        'Public statements prioritizing "equity" over public safety'
      ],
      pattern: 'Progressive prosecutor model: decline/reduce charges, prioritize offender outcomes over victim justice',
      pressurePoints: ['Recall campaign', 'Declination data FOIA', 'Victim advocacy', 'Legislative oversight of prosecutorial standards']
    },
    {
      id: 'guthmann',
      name: 'Judge John Guthmann',
      role: 'Ramsey County District Judge',
      record: [
        'Walz appointee (2019)',
        'Ruled in favor of Feeding Our Future v. MDE',
        'Ordered MDE to continue payments despite fraud warnings',
        'Decision enabled months of additional fraud',
        '$250M+ stolen by the time FBI intervened',
        'Prioritized procedural claims over fraud prevention'
      ],
      pattern: 'Walz appointee whose ruling directly enabled largest pandemic fraud in U.S. history',
      pressurePoints: ['Judicial conduct review', 'FOIA for case communications', 'Document ruling-to-outcome pipeline']
    },
    {
      id: 'lisi',
      name: 'Chief Justice Natalie Hudson',
      role: 'Minnesota Supreme Court Chief Justice',
      record: [
        'Appointed by Mark Dayton (2015), elevated to Chief by Walz (2023)',
        'First Black woman as MN Supreme Court Chief Justice',
        'Led court during pandemic emergency order extensions',
        'Oversaw implementation of bail "reform" policies',
        'Court ruled to expand mail voting, registration',
        'Progressive judicial philosophy'
      ],
      pattern: 'Dayton/Walz judiciary leadership; progressive judicial philosophy shapes entire court system',
      pressurePoints: ['Court administration records', 'Rule-making process participation', 'Legislative oversight']
    },
    {
      id: 'judicial-commission',
      name: 'Commission on Judicial Selection',
      role: 'Recommends Judicial Candidates',
      record: [
        'Members appointed by Governor, Supreme Court, and Bar Association',
        'Walz appointed majority of current members',
        'Pattern: recommends candidates from progressive legal orgs',
        'Former public defenders heavily represented',
        'Prosecutors underrepresented in recommendations',
        'No ideological balance requirement',
        'Pipeline for progressive capture of judiciary'
      ],
      pattern: 'Governor-controlled commission ensures ideological alignment in judicial appointments',
      pressurePoints: ['Commission membership FOIA', 'Recommendation pattern analysis', 'Legislative reform of selection process']
    },
    {
      id: 'thorson',
      name: 'Magistrate Becky Thorson',
      role: 'U.S. Magistrate Judge, District of Minnesota',
      record: [
        'Obama appointee (2015)',
        'Released Cities Church FACE Act defendants',
        'Overruled DOJ objections on flight risk',
        'Cited "non-violent" nature despite felony charges',
        'Pattern: different standard than applied to J6 defendants?'
      ],
      pattern: 'Federal magistrate whose release decisions align with progressive priorities',
      pressurePoints: ['Compare to parallel cases', 'Congressional oversight', 'Judicial conduct if warranted']
    },
    {
      id: 'hennepin-bench',
      name: 'Hennepin County District Judges',
      role: 'Criminal Division Bench',
      record: [
        'Majority Walz appointees (post-2019)',
        'Systematic low/no bail for violent offenders',
        '"Least restrictive conditions" interpreted broadly',
        'Repeat offenders released to reoffend',
        'Pattern: victim safety secondary to offender liberty',
        'Key judges: track individual bail/release patterns'
      ],
      pattern: 'County bench implements catch-and-release as judicial policy, not just prosecutorial discretion',
      pressurePoints: ['Judicial retention elections', 'Bail decision data', 'Victim testimony at hearings', 'Legislative bail reform']
    }
  ],

  /* === Solutions === */
  solutions: {
    domains: [
      {
        title: 'Fraud & Oversight',
        description: 'Hold enablers accountable, reform oversight, recover stolen funds.',
        legal: [
          'Civil RICO analysis (requires proving knowing participation)',
          'Taxpayer standing lawsuits for misuse of public funds',
          'Administrative complaints to HHS OIG, CMS',
          'Criminal referrals with documented evidence'
        ],
        legislative: [
          'Mandatory audit triggers when billing exceeds thresholds',
          'Whistleblower protections for state employees',
          'Commissioner accountability requirements',
          'Third-party oversight for high-risk programs'
        ]
      },
      {
        title: 'Sanctuary & Immigration',
        description: 'Restore cooperation with valid federal warrants while respecting jurisdictional limits.',
        legal: [
          'Federal preemption arguments where state obstructs',
          'Citizen complaints to DHS for non-cooperation',
          'Support federal litigation as amicus or witness',
          'Challenge specific sanctuary policies in court'
        ],
        legislative: [
          'Require cooperation with judicial warrants (not just civil detainers)',
          'Transparent reporting on released dangerous offenders',
          'Liability for officials who shield violent criminals'
        ]
      },
      {
        title: 'Crime & Enforcement',
        description: 'Restore prosecution of crimes, support police, protect victims.',
        legal: [
          'Victim advocacy when prosecutors fail to act',
          'Recall mechanisms for non-prosecuting officials',
          'Civil suits for pattern of non-enforcement',
          'Private prosecution where Minnesota allows'
        ],
        legislative: [
          'Mandatory prosecution for violent crimes',
          'Victim notification and participation rights',
          'Police funding and recruitment support',
          'Sentencing reform to ensure proportionate punishment'
        ]
      },
      {
        title: 'Life & Family',
        description: 'Protect life, parental rights, and religious liberty.',
        legal: [
          'Constitutional challenges to abortion/trans laws',
          'Parental rights litigation (trans refuge law)',
          'Conscience protection for medical professionals',
          'Religious liberty defense for churches and schools'
        ],
        legislative: [
          'Parental consent requirements for medical interventions',
          'Gestational limits on abortion',
          'Conscience protection statutes',
          'Religious liberty restoration'
        ]
      },
      {
        title: 'Election Integrity',
        description: 'Ensure only eligible citizens vote and votes are counted accurately.',
        legal: [
          'Voter roll challenges for improper registrations',
          'Citizenship verification litigation',
          'Election integrity suits (with standing and evidence)',
          'Administrative complaints for irregularities'
        ],
        legislative: [
          'Voter ID requirements',
          'Citizenship verification at registration',
          'Same-day registration limits or verification',
          'Transparent audit processes'
        ]
      },
      {
        title: 'Courts & Judicial Reform',
        description: 'Break the progressive capture of Minnesota\'s judiciary. Restore impartial justice.',
        legal: [
          'Judicial conduct complaints for bias/pattern decisions',
          'Appeals of manifestly unjust rulings',
          'Federal civil rights suits for denial of equal protection',
          'Victim rights litigation when prosecutors fail',
          'Mandamus actions to compel prosecution',
          'Bail reform litigation for public safety'
        ],
        legislative: [
          'Reform Commission on Judicial Selection (add balance requirements)',
          'Judicial retention elections with real accountability',
          'Prosecutorial standards: require prosecution of violent crimes',
          'Bail reform: public safety as primary factor',
          'Victim notification and participation rights',
          'Data transparency: publish bail/release/reoffense rates',
          'County attorney recall procedures',
          'Require prosecutors to report declination reasons'
        ]
      }
    ],
    organizations: [
      {
        name: 'Alliance Defending Freedom',
        focus: 'Religious liberty, life, parental rights',
        url: 'https://adflegal.org'
      },
      {
        name: 'First Liberty Institute',
        focus: 'Religious freedom cases',
        url: 'https://firstliberty.org'
      },
      {
        name: 'Thomas More Society',
        focus: 'Pro-life legal defense',
        url: 'https://thomasmoresociety.org'
      },
      {
        name: 'Liberty Counsel',
        focus: 'Religious liberty litigation',
        url: 'https://lc.org'
      },
      {
        name: 'Pacific Justice Institute',
        focus: 'Religious freedom, parental rights',
        url: 'https://pacificjustice.org'
      }
    ]
  },

  /* === FOIA Templates === */
  foiaTemplates: [
    {
      title: 'Governor\'s Office - Fraud Briefings',
      recipient: 'Office of Governor Tim Walz',
      text: `Minnesota Government Data Practices Act Request

TO: Data Practices Office
    Office of the Governor of Minnesota
    130 State Capitol
    75 Rev. Dr. Martin Luther King Jr. Blvd.
    St. Paul, MN 55155

FROM: [Your Name]
DATE: [Date]

Pursuant to the Minnesota Government Data Practices Act (Minn. Stat. Ch. 13), I request copies of the following public government data:

1. All briefings to the Governor's office regarding fraud in state-administered programs (2020-2026), including:
   - Feeding Our Future
   - Child Care Assistance Program
   - Medicaid provider fraud
   - Housing Stabilization Services

2. Communications between Governor's office and:
   - MDE Commissioners (Mueller, current)
   - DHS Commissioner Harpstead
   - Attorney General Ellison
   - Federal agencies (FBI, HHS, DOJ)

3. Any recommendations regarding personnel actions following audit findings.

4. Decision documents regarding oversight reforms.

Please respond within 10 business days as required by law.

[Your Name]
[Your Address]
[Your Email]
[Your Phone]`
    },
    {
      title: 'Attorney General - FOF Communications',
      recipient: 'Office of Attorney General Keith Ellison',
      text: `Minnesota Government Data Practices Act Request

TO: Data Practices Office
    Office of the Minnesota Attorney General
    445 Minnesota Street, Suite 1400
    St. Paul, MN 55101

FROM: [Your Name]
DATE: [Date]

Pursuant to the Minnesota Government Data Practices Act, I request copies of the following public government data:

1. Records of the December 2021 meeting between AG Ellison and representatives of Feeding Our Future, including:
   - Meeting notes, attendee lists, recordings
   - Follow-up communications

2. Communications between AG's office and MDE regarding Feeding Our Future (2020-2022)

3. Decision documents regarding state prosecution of FOF defendants (why federal only, no state charges?)

4. Campaign contribution records from FOF-connected individuals and any refund documentation

5. AG office involvement in investigating:
   - Daycare/CCAP fraud
   - Medicaid provider fraud
   - Housing Stabilization Services fraud

Please respond within 10 business days as required by law.

[Your Name]
[Your Address]
[Your Email]
[Your Phone]`
    },
    {
      title: 'DHS - Provider Oversight',
      recipient: 'Minnesota Department of Human Services',
      text: `Minnesota Government Data Practices Act Request

TO: Data Practices Office
    Minnesota Department of Human Services
    PO Box 64998
    St. Paul, MN 55164-0998

FROM: [Your Name]
DATE: [Date]

Pursuant to the Minnesota Government Data Practices Act, I request copies of the following public government data:

CHILD CARE ASSISTANCE PROGRAM (CCAP):
1. Provider approval/denial records (2019-2026)
2. Site visit logs and inspection reports
3. Complaints received about daycare providers
4. List of providers flagged for concerns but still active

MEDICAID / HEALTHCARE:
5. Provider billing audit results (2020-2026)
6. Any waivers of verification requirements during COVID
7. List of providers under investigation or flagged

HOUSING STABILIZATION SERVICES:
8. Provider approval records (2019-2026)
9. Client verification procedures
10. Complaints received about housing providers

Please respond within 10 business days as required by law.

[Your Name]
[Your Address]
[Your Email]
[Your Phone]`
    },
    {
      title: 'Commission on Judicial Selection - Appointments',
      recipient: 'Commission on Judicial Selection / Governor\'s Office',
      text: `Minnesota Government Data Practices Act Request

TO: Data Practices Office
    Commission on Judicial Selection
    c/o State Court Administrator's Office
    25 Rev. Dr. Martin Luther King Jr. Blvd.
    St. Paul, MN 55155

    AND

    Office of the Governor
    130 State Capitol
    75 Rev. Dr. Martin Luther King Jr. Blvd.
    St. Paul, MN 55155

FROM: [Your Name]
DATE: [Date]

Pursuant to the Minnesota Government Data Practices Act (Minn. Stat. Ch. 13), I request copies of the following public government data:

JUDICIAL SELECTION COMMISSION:
1. Current membership roster and appointment dates for Commission on Judicial Selection
2. All applications received for judicial vacancies (2019-2026)
3. Commission recommendations for each vacancy (2019-2026)
4. Meeting minutes and deliberation records
5. Criteria used to evaluate candidates
6. Any communications between Commission members and Governor's office regarding candidates

GOVERNOR'S JUDICIAL APPOINTMENTS:
7. Complete list of all judicial appointments by Gov. Walz (2019-2024)
8. Professional background of each appointee (prior employment, organizational affiliations)
9. Any vetting documents or background materials used in selection
10. Communications regarding judicial selection criteria or priorities

Please respond within 10 business days as required by law.

[Your Name]
[Your Address]
[Your Email]
[Your Phone]`
    },
    {
      title: 'Hennepin County Attorney - Prosecution Data',
      recipient: 'Hennepin County Attorney\'s Office',
      text: `Minnesota Government Data Practices Act Request

TO: Data Practices Office
    Hennepin County Attorney's Office
    C-2000 Government Center
    300 South 6th Street
    Minneapolis, MN 55487

FROM: [Your Name]
DATE: [Date]

Pursuant to the Minnesota Government Data Practices Act (Minn. Stat. Ch. 13), I request copies of the following public government data:

PROSECUTION STATISTICS (2022-2026):
1. Total cases referred by law enforcement, by crime category
2. Total cases charged, by crime category
3. Total cases declined for prosecution, by crime category
4. Reasons documented for declinations (aggregated data)
5. Charge reductions from initial referral to final charging decision
6. Plea bargain rates and typical reductions by crime category

VIOLENT CRIME SPECIFIC:
7. Carjacking referrals, charges, declinations, and outcomes
8. Assault referrals, charges, declinations, and outcomes
9. Cases involving repeat offenders (prior conviction/pending charges)
10. Cases where defendant reoffended while awaiting trial

POLICY DOCUMENTS:
11. Current charging guidelines/standards
12. Any directives regarding "collateral consequences" considerations
13. Any directives regarding immigration status considerations
14. Policies regarding juvenile charging decisions

Please provide data in spreadsheet format where applicable.

Please respond within 10 business days as required by law.

[Your Name]
[Your Address]
[Your Email]
[Your Phone]`
    },
    {
      title: 'District Court - Bail & Release Data',
      recipient: 'Minnesota Judicial Branch / Hennepin County District Court',
      text: `Minnesota Government Data Practices Act Request

TO: Data Practices Office
    Minnesota Judicial Branch
    25 Rev. Dr. Martin Luther King Jr. Blvd.
    St. Paul, MN 55155

    AND

    Hennepin County District Court
    300 South 6th Street
    Minneapolis, MN 55487

FROM: [Your Name]
DATE: [Date]

Pursuant to the Minnesota Government Data Practices Act (Minn. Stat. Ch. 13), I request copies of the following public government data:

BAIL & PRETRIAL RELEASE (2020-2026):
1. Total bail/release hearings by crime category
2. Release rates by crime category (released vs. detained)
3. Bail amounts set by crime category
4. Releases on recognizance vs. bail by crime category
5. Conditions of release typically imposed

REOFFENSE DATA:
6. Number of defendants who reoffended while on pretrial release
7. Nature of reoffenses (same crime category, violent crime, etc.)
8. Number of defendants with prior failures to appear
9. Outcomes for defendants with prior failures to appear

JUDGE-SPECIFIC DATA (if available):
10. Bail/release decisions by individual judge
11. Reoffense rates for defendants released by each judge

POLICY DOCUMENTS:
12. Current bail guidelines or policies
13. Any directives implementing "bail reform"
14. Training materials on pretrial release decisions

Please provide data in spreadsheet format where applicable.

Please respond within 10 business days as required by law.

[Your Name]
[Your Address]
[Your Email]
[Your Phone]`
    }
  ],

  /* === KLOBUCHAR ACCOUNTABILITY CENTER === */
  klobuchar: {
    name: 'Amy Klobuchar',
    role: 'Senator / Gubernatorial Candidate',
    tagline: 'Same Machine. Different Face.',
    summary: 'Amy Klobuchar filed to run for governor on January 22, 2026. She has not criticized Walz, Ellison, or any aspect of the fraud, crime surge, or sanctuary policies. Her silence is strategic—and complicit.',
    
    silenceTracker: [
      { date: 'Jan 2021', issue: 'FBI warns MDE about FOF fraud', opportunity: 'Senior MN Senator could demand briefing', response: 'Silence' },
      { date: 'Jan 2022', issue: 'FBI raids FOF - largest pandemic fraud', opportunity: 'National news story in her state', response: 'Silence' },
      { date: '2022-2024', issue: '78 FOF defendants charged, 50+ convicted', opportunity: 'Could demand state accountability', response: 'Silence' },
      { date: '2023', issue: 'Zero state officials fired after fraud', opportunity: 'Could call for accountability', response: 'Silence' },
      { date: 'Jan 2025', issue: 'Nick Shirley daycare videos go viral', opportunity: 'Could support investigation or denounce Walz attack', response: 'Silence' },
      { date: 'Jan 2025', issue: 'Walz calls Shirley "white supremacist"', opportunity: 'Could denounce smear of fraud investigator', response: 'Silence' },
      { date: 'Jan 2026', issue: 'Walz "Gestapo" comment on ICE', opportunity: 'Could distance from inflammatory rhetoric', response: 'Silence' },
      { date: 'Jan 2026', issue: 'DOJ subpoenas MN officials', opportunity: 'Her colleagues subpoenaed', response: 'Silence' },
      { date: 'Jan 2026', issue: 'Cities Church FACE Act arrests', opportunity: 'Federal action in MN', response: 'Silence' },
      { date: 'Jan 2026', issue: 'Carjacking surge continues', opportunity: 'Could address public safety', response: 'Silence' },
      { date: 'Jan 2026', issue: 'Moriarty declination policies', opportunity: 'Could take position on prosecution', response: 'Silence' }
    ],
    
    directQuestions: [
      { id: 1, question: 'Do you believe any state officials should have been fired over the FOF fraud?', context: '$250M+ stolen, zero accountability' },
      { id: 2, question: 'Do you support AG Ellison despite his meetings with FOF defendants?', context: 'December 2021 meeting, campaign donations' },
      { id: 3, question: 'Do you support Mary Moriarty\'s prosecutorial policies in Hennepin County?', context: 'Declining violent crime cases' },
      { id: 4, question: 'Was Governor Walz right to call Nick Shirley a white supremacist?', context: 'For exposing daycare fraud' },
      { id: 5, question: 'Do you support Minneapolis\'s sanctuary policies?', context: 'Frey: "ICE get the f*** out"' },
      { id: 6, question: 'Should Judge Guthmann face any accountability for ordering payments to continue to FOF?', context: 'Walz appointee enabled fraud' },
      { id: 7, question: 'Will you fire agency commissioners who oversaw the fraud if elected?', context: 'Harpstead, Brown still employed' },
      { id: 8, question: 'Do you support bail reform that releases repeat violent offenders?', context: 'Carjackings up 400%' },
      { id: 9, question: 'Will you reform the Commission on Judicial Selection?', context: '60%+ judges are Walz appointees' },
      { id: 10, question: 'Do you support the "trans refuge" law that blocks other states\' parental protections?', context: 'H.F. 146' }
    ],
    
    attackLines: [
      {
        id: 'silence-complicity',
        line: 'Amy Klobuchar was Minnesota\'s senator while $250 million was stolen from kids. She said nothing. That\'s not fresh start—that\'s complicity.',
        format: 'tweet',
        source: 'FOF fraud timeline',
        tags: ['fraud', 'accountability']
      },
      {
        id: 'same-machine',
        line: 'Walz is done. Ellison is compromised. So they bring in Klobuchar—same party, same donors, same policies, same silence. It\'s not change. It\'s rotation.',
        format: 'stump',
        source: 'Machine analysis',
        tags: ['machine', 'continuity']
      },
      {
        id: 'wont-answer',
        line: 'Amy Klobuchar won\'t answer basic questions: Should anyone be fired for the fraud? Was Walz right to call investigators racist? If she won\'t say now, she won\'t act later.',
        format: 'debate',
        source: 'Direct questions',
        tags: ['accountability', 'questions']
      },
      {
        id: 'senator-silence',
        line: 'The FBI was investigating massive fraud in her state. She\'s a U.S. Senator. Where was she? What did she know? Why didn\'t she demand answers?',
        format: 'ad',
        source: 'FBI timeline',
        tags: ['fraud', 'oversight']
      },
      {
        id: 'victims-silence',
        line: 'Children lost meals. Families lost childcare. Carjacking victims lost safety. Amy Klobuchar lost her voice. Now she wants a promotion?',
        format: 'emotional',
        source: 'Victim impact',
        tags: ['victims', 'accountability']
      }
    ],
    
    positions: {
      abortion: { position: 'Stood with Walz: "This is no longer a drill"', rating: 'aligned' },
      transRefuge: { position: 'No public statement', rating: 'silent' },
      fraud: { position: 'No public statement', rating: 'silent' },
      sanctuary: { position: 'No public statement', rating: 'silent' },
      crime: { position: 'No public statement', rating: 'silent' },
      courts: { position: 'No public statement', rating: 'silent' }
    },
    
    theChallenge: 'Ask Amy Klobuchar these questions at every town hall, press conference, and debate. Document her answers—or her silence. Make the silence strategy expensive.'
  },

  /* === ATTACK LINES / MESSAGING TOOLKIT === */
  attackLines: {
    byIssue: {
      fraud: [
        { line: 'They stole $250 million from kids\' lunch programs. Nobody got fired. Why?', format: 'tweet' },
        { line: 'The FBI warned them in January 2021. They kept paying until January 2022. That\'s not a mistake—that\'s negligence. Or worse.', format: 'stump' },
        { line: 'If you or I stole $10,000, we\'d go to prison. They stole $250 million from kids and nobody lost their job. That\'s not a system—it\'s a club.', format: 'working-class' }
      ],
      crime: [
        { line: 'When you release someone who carjacked a grandmother, and he does it again the next week—whose side are you on?', format: 'debate' },
        { line: 'Carjackings up 400%. Prosecutors declining cases. Offenders out before victims get home from the hospital. This isn\'t reform—it\'s abandonment.', format: 'stump' },
        { line: 'The carjacker gets released. The victim gets a case number. The prosecutor gets a pass. Where\'s the justice?', format: 'tweet' }
      ],
      sanctuary: [
        { line: 'The mayor told federal agents to "get the f*** out." The governor called them "Gestapo." This isn\'t policy disagreement—it\'s obstruction.', format: 'stump' },
        { line: 'They say they want safety. But when dangerous offenders are released rather than transferred to ICE, who\'s safer?', format: 'debate' },
        { line: 'Sanctuary for criminals. Silence for victims. That\'s their priority.', format: 'tweet' }
      ],
      courts: [
        { line: 'Walz appointed 60% of the judges. His judge ordered payments to continue to FOF. Then $250 million was stolen. Coincidence?', format: 'stump' },
        { line: 'The judge who enabled the fraud is still on the bench. The fraudsters are in prison. The enablers got promoted.', format: 'debate' },
        { line: 'It\'s not a justice system. It\'s a protection system—for the machine.', format: 'tweet' }
      ],
      accountability: [
        { line: 'Zero officials fired. Zero. After the largest pandemic fraud in American history. If that\'s not a cover-up, what would be?', format: 'universal' },
        { line: 'They call fraud investigators racist to avoid investigating fraud. That\'s not fighting racism—that\'s using racism as a shield.', format: 'stump' },
        { line: 'The question isn\'t left vs. right. It\'s insiders vs. everyone else. And the insiders always protect their own.', format: 'populist' }
      ]
    },
    
    byAudience: {
      suburbanMoms: [
        { line: 'They released someone charged with carjacking three times. He\'s still out there. This isn\'t justice reform—it\'s abandonment of public safety.', issue: 'crime' },
        { line: 'Your children\'s lunch money was stolen. The people who were supposed to protect it kept their jobs. The people who exposed it were called racist.', issue: 'fraud' }
      ],
      workingClass: [
        { line: 'If you or I stole from our employer, we\'d be fired and prosecuted. They stole billions from taxpayers and got promoted. That\'s the system.', issue: 'fraud' },
        { line: 'When you work hard and play by the rules, and the criminals get released while you pay the taxes—that\'s not a system that works for you.', issue: 'crime' }
      ],
      moderates: [
        { line: 'This isn\'t about ideology. It\'s about competence and accountability. The FBI warned them. They kept paying. Nobody was fired. That\'s failure.', issue: 'fraud' },
        { line: 'You can believe in criminal justice reform and still believe victims deserve justice. These policies abandoned both.', issue: 'crime' }
      ],
      disillusionedProgressives: [
        { line: 'They say they protect the vulnerable. But when childcare money gets stolen, who suffers? Kids. When carjackers get released, who suffers? Working people in their own neighborhoods.', issue: 'fraud' },
        { line: 'If the system protects insiders and abandons the people it claims to serve—what\'s progressive about that?', issue: 'accountability' }
      ]
    },
    
    thirtySecondIndictment: 'They stole $250 million from kids\' lunch programs. The FBI warned them, and they kept paying anyway. Nobody got fired. The governor called the guy who exposed it a white supremacist instead of thanking him. Carjackers get released and carjack again—same week. The mayor told federal agents to "get the f*** out." This isn\'t about ideology. It\'s about a machine that protects its own and abandons everyone else. We\'re documenting it. We\'re exposing it. And we\'re going to end it.'
  },

  /* === INVESTIGATION REQUESTS === */
  investigationRequests: {
    klobuchar: [
      {
        id: 'klobuchar-fof-knowledge',
        title: 'What Did Klobuchar Know About FOF Fraud?',
        question: 'As senior Minnesota Senator, was Klobuchar briefed by FBI/DOJ on the largest pandemic fraud in her state?',
        whyItMatters: 'If she knew and said nothing, that\'s complicity. If she didn\'t know, why not? Either way, it\'s disqualifying.',
        foiaTargets: [
          'Senate office correspondence with FBI, DOJ, HHS regarding MN fraud (2021-2022)',
          'Any briefing documents or constituent complaints forwarded to federal agencies',
          'Communications with Walz administration regarding fraud concerns'
        ],
        storyAngle: 'Did Klobuchar ignore warnings about the largest fraud in her state?',
        journalistContacts: ['Local investigative reporters', 'National political press'],
        status: 'open'
      },
      {
        id: 'klobuchar-machine-connections',
        title: 'Klobuchar\'s Connections to the Machine',
        question: 'What are Klobuchar\'s financial and staffing connections to Walz, Ellison, and FOF-connected individuals?',
        whyItMatters: 'Follow the money. If she\'s funded by the machine, she won\'t reform it.',
        foiaTargets: [
          'FEC records: campaign contributions from FOF-connected individuals or entities',
          'State records: contributions from Walz, Ellison, or their networks',
          'Joint fundraising agreements or coordination'
        ],
        storyAngle: 'Follow the money - is Klobuchar funded by the machine she won\'t criticize?',
        journalistContacts: ['Campaign finance reporters', 'Local political press'],
        status: 'open'
      },
      {
        id: 'klobuchar-staff-overlap',
        title: 'Staff Overlap / Revolving Door',
        question: 'What staff have moved between Klobuchar\'s office and Walz/Ellison administrations?',
        whyItMatters: 'Same people, same machine. The revolving door perpetuates the problem.',
        foiaTargets: [
          'Staff directories and employment histories',
          'Shared consultants, vendors, donors across campaigns',
          'Post-government employment of key staffers'
        ],
        storyAngle: 'The revolving door - same people, same machine',
        journalistContacts: ['Political reporters', 'Government accountability organizations'],
        status: 'open'
      },
      {
        id: 'klobuchar-senate-record',
        title: 'Senate Record on Relevant Issues',
        question: 'How has Klobuchar voted on immigration enforcement, fraud prevention, and related issues?',
        whyItMatters: 'Her Senate votes reveal her actual priorities, not just her silence.',
        foiaTargets: [
          'Voting record on immigration enforcement funding',
          'Votes on fraud prevention measures',
          'Public statements on "progressive prosecutor" movement',
          'Any intervention when MN agencies were under federal investigation'
        ],
        storyAngle: 'Klobuchar\'s Senate record vs. her governor campaign promises',
        journalistContacts: ['Congressional reporters', 'Policy analysts'],
        status: 'open'
      }
    ],
    
    walz: [
      {
        id: 'walz-fraud-briefings',
        title: 'Governor\'s Fraud Briefings',
        question: 'What did Walz know about fraud in state programs, and when did he know it?',
        whyItMatters: 'If he was briefed and didn\'t act, that\'s dereliction. If he wasn\'t briefed, why not?',
        foiaTargets: [
          'All briefings regarding FOF, CCAP, Medicaid fraud (2020-2024)',
          'Communications with FBI, HHS, DOJ',
          'Decision documents on personnel actions (or lack thereof)'
        ],
        storyAngle: 'The timeline of what Walz knew and when',
        journalistContacts: ['State capitol reporters', 'Investigative teams'],
        status: 'open'
      },
      {
        id: 'walz-judicial-appointments',
        title: 'Judicial Appointment Process',
        question: 'How were judges selected, and what criteria were used?',
        whyItMatters: 'Pattern of ideological capture. Guthmann ruling for FOF is the tip of the iceberg.',
        foiaTargets: [
          'Commission on Judicial Selection recommendations',
          'Governor\'s office communications about appointments',
          'Vetting documents for appointees',
          'Professional backgrounds of all appointees'
        ],
        storyAngle: 'How Walz captured the judiciary',
        journalistContacts: ['Legal affairs reporters', 'Court watchers'],
        status: 'open'
      },
      {
        id: 'walz-shirley-response',
        title: 'Walz Response to Fraud Exposure',
        question: 'Who decided to call Nick Shirley a "white supremacist" and on what basis?',
        whyItMatters: 'The "racist shield" in action. Attack the messenger, protect the fraud.',
        foiaTargets: [
          'Communications about Shirley investigation/videos',
          'Decision process for governor\'s public statement',
          'Any follow-up investigation based on Shirley\'s findings'
        ],
        storyAngle: 'How they attacked the fraud investigator instead of investigating the fraud',
        journalistContacts: ['Media critics', 'Local investigative reporters'],
        status: 'open'
      }
    ],
    
    ellison: [
      {
        id: 'ellison-fof-meeting',
        title: 'December 2021 FOF Meeting',
        question: 'What was discussed at Ellison\'s meeting with FOF defendants, and why was it held?',
        whyItMatters: 'The AG met with people later convicted of massive fraud. Why?',
        foiaTargets: [
          'Meeting notes, attendee lists, recordings',
          'Follow-up communications',
          'Any official action taken after the meeting'
        ],
        storyAngle: 'Why did the AG meet with fraud defendants?',
        journalistContacts: ['Investigative reporters', 'Legal affairs reporters'],
        status: 'open'
      },
      {
        id: 'ellison-campaign-donations',
        title: 'FOF-Connected Campaign Donations',
        question: 'Did Ellison receive campaign donations from FOF-connected individuals?',
        whyItMatters: 'Pay to play? Donations from fraud network to the AG who didn\'t prosecute.',
        foiaTargets: [
          'Campaign contribution records from FOF-connected individuals',
          'Any refund documentation',
          'Timeline of donations vs. investigation timeline'
        ],
        storyAngle: 'Follow the money to the AG\'s office',
        journalistContacts: ['Campaign finance reporters', 'Investigative teams'],
        status: 'open'
      },
      {
        id: 'ellison-prosecution-decision',
        title: 'Why No State Charges?',
        question: 'Why did Ellison\'s office bring no state charges in FOF—leaving it entirely to federal prosecutors?',
        whyItMatters: 'The AG\'s job is to prosecute state crimes. Fraud is a state crime. Why federal only?',
        foiaTargets: [
          'Decision documents regarding state prosecution',
          'Communications with federal prosecutors',
          'Any internal recommendations that were overruled'
        ],
        storyAngle: 'The AG who wouldn\'t prosecute the biggest fraud in state history',
        journalistContacts: ['Legal affairs reporters', 'Federal court reporters'],
        status: 'open'
      },
      {
        id: 'ellison-sanctuary-opinions',
        title: 'Sanctuary Policy Legal Opinions',
        question: 'What legal analysis supports Ellison\'s opinion that counties cannot cooperate with ICE?',
        whyItMatters: 'The AG opinion became the legal basis for sanctuary policies statewide.',
        foiaTargets: [
          'Internal legal memos supporting the opinion',
          'Any contrary views from staff',
          'Communications with county attorneys about implementation'
        ],
        storyAngle: 'How the AG created legal cover for sanctuary policies',
        journalistContacts: ['Immigration reporters', 'Legal analysts'],
        status: 'open'
      }
    ],
    
    courts: [
      {
        id: 'courts-bail-data',
        title: 'Bail Decision Patterns',
        question: 'Which judges release the most repeat offenders, and what are the reoffense rates?',
        whyItMatters: 'Identify the specific judges implementing catch-and-release.',
        foiaTargets: [
          'Bail/release decisions by individual judge',
          'Reoffense rates for defendants released by each judge',
          'Comparison of bail set vs. release conditions'
        ],
        storyAngle: 'The judges who keep releasing violent offenders',
        journalistContacts: ['Court reporters', 'Crime reporters'],
        status: 'open'
      },
      {
        id: 'courts-moriarty-declinations',
        title: 'Prosecution Declination Data',
        question: 'How many cases is Moriarty declining, and what are the patterns?',
        whyItMatters: 'Quantify the non-prosecution policy with hard data.',
        foiaTargets: [
          'Cases referred vs. charged vs. declined by crime category',
          'Reasons for declinations',
          'Reoffense data for declined cases'
        ],
        storyAngle: 'The prosecutor who won\'t prosecute',
        journalistContacts: ['Crime reporters', 'Data journalists'],
        status: 'open'
      },
      {
        id: 'courts-guthmann-fof',
        title: 'FOF v. MDE Case Files',
        question: 'What was the full record in Judge Guthmann\'s decision to order continued payments?',
        whyItMatters: 'Document exactly how the court enabled the fraud.',
        foiaTargets: [
          'Complete case filings',
          'MDE\'s fraud evidence submitted to court',
          'Guthmann\'s reasoning in detail',
          'Any communications about the case'
        ],
        storyAngle: 'How a judge enabled the largest pandemic fraud',
        journalistContacts: ['Court reporters', 'Investigative teams'],
        status: 'open'
      }
    ],
    
    forJournalists: {
      storyPitches: [
        {
          headline: 'The Silence Strategy: Klobuchar\'s Refusal to Address Minnesota\'s Fraud Crisis',
          angle: 'Document every opportunity she had to comment and didn\'t',
          sources: 'Silence tracker, public records, campaign events'
        },
        {
          headline: 'Follow the Money: Campaign Finance Connections Across the Minnesota Machine',
          angle: 'Map the donor networks connecting Walz, Ellison, Klobuchar, and FOF-connected individuals',
          sources: 'FEC records, state campaign finance, FOIA responses'
        },
        {
          headline: 'The Judge Who Enabled America\'s Largest Pandemic Fraud',
          angle: 'Deep dive on Guthmann\'s decision and its consequences',
          sources: 'Court records, FOF timeline, judicial appointment records'
        },
        {
          headline: 'Catch and Release: Which Judges Keep Letting Violent Offenders Go?',
          angle: 'Data-driven analysis of bail decisions by judge',
          sources: 'Court records, bail data FOIA, reoffense statistics'
        },
        {
          headline: 'The AG and the Fraudsters: Inside Ellison\'s December 2021 Meeting',
          angle: 'What happened at that meeting and why',
          sources: 'FOIA responses, meeting attendees, timeline'
        }
      ],
      
      keyContacts: [
        { outlet: 'Star Tribune', beat: 'State politics, investigations' },
        { outlet: 'Pioneer Press', beat: 'Government accountability' },
        { outlet: 'Alpha News', beat: 'Conservative investigative' },
        { outlet: 'MPR News', beat: 'State government' },
        { outlet: 'KSTP', beat: 'Investigative unit' },
        { outlet: 'Fox 9', beat: 'Investigators' },
        { outlet: 'National Review', beat: 'State/local politics' },
        { outlet: 'Daily Caller', beat: 'Investigations' },
        { outlet: 'Free Beacon', beat: 'Government accountability' }
      ]
    },
    
    submitFindings: {
      instructions: 'Filed a FOIA? Got a response? Found something? Report it here so we can add it to the record.',
      email: '[submissions@mnreclamation.org]',
      form: '[Google Form link]',
      whatToInclude: [
        'Copy of your request',
        'Copy of the response',
        'Any documents received',
        'Your analysis of what it shows'
      ]
    }
  },

  /* === TIMELINE === */
  timeline: [
    { date: '2019', event: 'Walz begins judicial appointments', actor: 'Walz', category: 'courts', klobucharResponse: 'N/A' },
    { date: 'Mar 2020', event: 'COVID pandemic begins; oversight relaxed', actor: 'State agencies', category: 'fraud', klobucharResponse: 'Silence' },
    { date: 'Jan 2021', event: 'FBI warns MDE about FOF fraud', actor: 'FBI', category: 'fraud', klobucharResponse: 'Silence' },
    { date: 'Feb 2021', event: 'MDE attempts to pause FOF payments', actor: 'MDE', category: 'fraud', klobucharResponse: 'Silence' },
    { date: 'Mar 2021', event: 'FOF sues MDE; Judge Guthmann (Walz appointee) rules for FOF', actor: 'Guthmann', category: 'courts', klobucharResponse: 'Silence' },
    { date: 'Mar-Dec 2021', event: 'Payments continue while fraud expands', actor: 'MDE', category: 'fraud', klobucharResponse: 'Silence' },
    { date: 'Dec 2021', event: 'AG Ellison meets with FOF defendants', actor: 'Ellison', category: 'fraud', klobucharResponse: 'Silence' },
    { date: 'Jan 2022', event: 'FBI raids FOF; $250M+ stolen', actor: 'FBI', category: 'fraud', klobucharResponse: 'Silence' },
    { date: '2022', event: 'Moriarty elected Hennepin County Attorney', actor: 'Moriarty', category: 'courts', klobucharResponse: 'Silence' },
    { date: '2022-2024', event: 'FOF trials: 78 charged, 50+ convicted', actor: 'DOJ', category: 'fraud', klobucharResponse: 'Silence' },
    { date: '2022-2024', event: 'Carjackings surge 400%+', actor: 'Minneapolis', category: 'crime', klobucharResponse: 'Silence' },
    { date: '2023', event: 'State audit finds "lax oversight"', actor: 'Auditor', category: 'fraud', klobucharResponse: 'Silence' },
    { date: '2023', event: 'Zero state officials fired', actor: 'Walz', category: 'fraud', klobucharResponse: 'Silence' },
    { date: 'Jan 2025', event: 'Nick Shirley daycare videos go viral', actor: 'Shirley', category: 'fraud', klobucharResponse: 'Silence' },
    { date: 'Jan 2025', event: 'Walz calls Shirley "white supremacist"', actor: 'Walz', category: 'fraud', klobucharResponse: 'Silence' },
    { date: 'Jan 2026', event: 'Klobuchar files for governor', actor: 'Klobuchar', category: 'politics', klobucharResponse: 'Running' },
    { date: 'Jan 2026', event: 'Walz calls ICE "Gestapo"', actor: 'Walz', category: 'sanctuary', klobucharResponse: 'Silence' },
    { date: 'Jan 2026', event: 'Frey: "ICE get the f*** out"', actor: 'Frey', category: 'sanctuary', klobucharResponse: 'Silence' },
    { date: 'Jan 2026', event: 'DOJ subpoenas MN officials', actor: 'DOJ', category: 'sanctuary', klobucharResponse: 'Silence' },
    { date: 'Jan 2026', event: 'Cities Church FACE Act arrests', actor: 'DOJ', category: 'sanctuary', klobucharResponse: 'Silence' }
  ],

  /* === TWO-TIERED JUSTICE TRACKER === */
  twoTieredJustice: [
    {
      caseA: { description: 'J6 trespasser', outcome: '4+ years federal prison', source: 'DOJ press releases' },
      caseB: { description: 'Cities Church disruptor', outcome: 'Released same day by magistrate', source: 'Jan 2026 reports' },
      disparity: 'Same category (disruption/trespass), vastly different treatment',
      pattern: 'Political identity determines punishment'
    },
    {
      caseA: { description: 'Pro-life protester (FACE Act)', outcome: 'Federal felony charges, prison time', source: 'DOJ prosecutions 2022-2024' },
      caseB: { description: 'Antifa/BLM property destruction', outcome: 'Charges dropped or minimal penalties', source: 'Portland, Minneapolis 2020' },
      disparity: 'Violent property destruction treated more leniently than non-violent protest',
      pattern: 'Favored causes get leniency'
    },
    {
      caseA: { description: 'Nick Shirley (fraud investigator)', outcome: 'Called "white supremacist" by governor', source: 'Walz statement Jan 2025' },
      caseB: { description: 'FOF fraudsters', outcome: 'AG met with them before indictment', source: 'Ellison meeting Dec 2021' },
      disparity: 'Fraud exposer attacked; fraud perpetrators got AG meeting',
      pattern: '"Racist" shield protects the machine'
    },
    {
      caseA: { description: 'Repeat carjacker', outcome: 'Released on low bail, reoffended', source: 'Hennepin County records' },
      caseB: { description: 'First-time offender (non-violent)', outcome: 'Often held longer on higher bail', source: 'Bail data patterns' },
      disparity: 'Violent repeat offenders treated more leniently than non-violent first-timers',
      pattern: '"Equity" means favoring offenders'
    },
    {
      caseA: { description: 'State official who enabled $250M fraud', outcome: 'Still employed, no charges', source: 'MDE, DHS employment records' },
      caseB: { description: 'Individual fraudster', outcome: 'Federal prosecution, prison', source: 'FOF convictions' },
      disparity: 'Street-level criminals prosecuted; enablers protected',
      pattern: 'Machine protects its own'
    }
  ],

  /* === QUICK STATS === */
  quickStats: [
    { number: '$250M+', label: 'Stolen from children\'s programs (FOF)', source: 'DOJ indictments' },
    { number: '$9B+', label: 'Total suspected fraud across programs', source: 'Federal estimates' },
    { number: '0', label: 'State officials fired', source: 'State employment records' },
    { number: '78', label: 'FOF defendants charged', source: 'DOJ' },
    { number: '0', label: 'State prosecutions of enablers', source: 'AG records' },
    { number: '400%', label: 'Carjacking increase since 2019', source: 'Minneapolis PD data' },
    { number: '60%+', label: 'Judges appointed by Walz', source: 'Judicial appointments' },
    { number: '180+', label: 'Walz judicial appointments', source: 'Governor\'s office' },
    { number: '11+', label: 'Klobuchar silence instances documented', source: 'This tracker' }
  ],

  /* === DISRUPTION PLAYBOOK === */
  disruptionPlaybook: {
    title: 'Disrupt the Playbook',
    subtitle: 'Anticipate. Flank. Force a Response.',
    intro: 'Klobuchar\'s strategy is to run out the clock with vague promises and strategic silence. Here\'s how to break that strategy.',

    /* Their Gameplan + Our Counter */
    gameplan: [
      {
        id: 'distance-walz',
        theirMove: 'Distance from Walz',
        theirScript: '"I wasn\'t governor. I was in Washington fighting for Minnesota."',
        whyTheyDoIt: 'Avoid owning the fraud, crime surge, and sanctuary chaos under Walz',
        ourCounter: 'Tie her to what she didn\'t oppose',
        counterTactics: [
          '"You were Minnesota\'s senior Senator. The FBI investigated the largest fraud in your state. What did you do?"',
          '"Name one Walz policy you opposed. One judge you questioned. One official you said should be fired."',
          '"You want to run Minnesota but won\'t answer for Minnesota. That\'s not distance—that\'s complicity."'
        ],
        trap: 'If she criticizes Walz, she fractures her base. If she defends him, she owns his record.',
        hashtag: '#SameTeamAmy'
      },
      {
        id: 'pivot-federal',
        theirMove: 'Pivot to Federal Record',
        theirScript: '"Look at my Senate work—bipartisan, effective, getting things done."',
        whyTheyDoIt: 'Redirect to comfortable territory away from state failures',
        ourCounter: 'Force her back to Minnesota',
        counterTactics: [
          '"You\'re running for GOVERNOR. Answer for MINNESOTA."',
          '"What\'s your Senate record on fraud prevention? Immigration enforcement? Did you vote to defund ICE?"',
          '"If your federal record is so strong, why didn\'t you stop the largest pandemic fraud from happening in your state?"'
        ],
        trap: 'Her federal record includes votes her base likes but moderates don\'t. Make her own them.',
        hashtag: '#AnswerForMinnesota'
      },
      {
        id: 'vague-reform',
        theirMove: 'Vague Reform Promises',
        theirScript: '"I\'ll bring accountability. I\'ll clean things up. Fresh start for Minnesota."',
        whyTheyDoIt: 'Sound like change without committing to anything specific',
        ourCounter: 'Demand specifics',
        counterTactics: [
          '"Name ONE official you\'ll fire on day one."',
          '"Name ONE policy you\'ll reverse."',
          '"Name ONE judge whose appointment you oppose."',
          '"If you can\'t name names, you\'re not promising change—you\'re promising more of the same."'
        ],
        trap: 'Specifics create enemies. Vagueness exposes her as empty.',
        hashtag: '#NameNames'
      },
      {
        id: 'attack-opponent',
        theirMove: 'Attack the Opponent',
        theirScript: '"My opponent is extreme / dangerous / divisive. This election is about stopping them."',
        whyTheyDoIt: 'Deflect from her record by making the race about the other candidate',
        ourCounter: 'Refuse the deflection',
        counterTactics: [
          '"You\'re deflecting. $250 million stolen from kids. Yes or no—will you prosecute the enablers?"',
          '"We\'re talking about YOUR record. YOUR silence. YOUR party\'s failures. Answer the question."',
          '"You\'ve been in office for decades. What have YOU done? This isn\'t about your opponent—it\'s about you."'
        ],
        trap: 'Every deflection reinforces that she can\'t defend her own record.',
        hashtag: '#AnswerTheQuestion'
      },
      {
        id: 'invoke-victims',
        theirMove: 'Invoke Victims / Co-opt Compassion',
        theirScript: '"I care about victims. I\'ve spent my career fighting for families."',
        whyTheyDoIt: 'Claim the moral high ground without accountability',
        ourCounter: 'Turn it back with specifics',
        counterTactics: [
          '"Where were you when carjacking victims were terrorized and their attackers released?"',
          '"Name ONE time you spoke up for FOF victims—the kids who lost meals."',
          '"Caring is easy. Action is hard. What did you DO?"',
          '"The victims are on our side. They\'re the ones your silence abandoned."'
        ],
        trap: 'Real victims and their families become the most powerful counter-witnesses.',
        hashtag: '#WhereWereYou'
      },
      {
        id: 'unity-healing',
        theirMove: 'Call for Unity / Healing',
        theirScript: '"Minnesota is divided. We need to come together, not point fingers."',
        whyTheyDoIt: 'Reframe accountability as "divisiveness"',
        ourCounter: 'Accountability before unity',
        counterTactics: [
          '"Unity without accountability is a cover-up."',
          '"You can\'t heal what you won\'t acknowledge. Name the problem."',
          '"Victims don\'t want unity with the people who abandoned them. They want justice."',
          '"\'Unity\' is what insiders say when they want outsiders to stop asking questions."'
        ],
        trap: 'The unity plea sounds hollow when you won\'t name what went wrong.',
        hashtag: '#AccountabilityFirst'
      }
    ],

    /* Pressure Points */
    pressurePoints: [
      {
        id: 'silence-question',
        question: 'You filed on January 22. Since then, name ONE criticism of Walz, Ellison, or the fraud.',
        whyItsATrap: 'She can\'t answer without either breaking from her allies or owning their record.',
        likelyDodge: '"I\'m focused on the future" / "I\'m running my own race"',
        followUp: '"That\'s not an answer. You want to lead Minnesota—take a position on Minnesota."',
        setting: 'Any public forum',
        documentHow: 'Record response. Clip the non-answer. Timestamp the silence.'
      },
      {
        id: 'prosecution-question',
        question: 'Will you commit to prosecuting state officials who enabled the FOF fraud?',
        whyItsATrap: 'A "yes" threatens her allies. A "no" makes her complicit. A dodge looks weak.',
        likelyDodge: '"I\'ll let the justice system work" / "I won\'t prejudge"',
        followUp: '"78 fraudsters prosecuted. Zero enablers. That IS the justice system working—for insiders."',
        setting: 'Town hall, debate, press scrum',
        documentHow: 'Get the exact words. Compare to her "tough on crime" Senate rhetoric.'
      },
      {
        id: 'appointment-question',
        question: 'Will you keep or replace the judge who ordered payments to continue to FOF?',
        whyItsATrap: 'Forces her to take a position on judicial accountability—which her base opposes.',
        likelyDodge: '"I respect judicial independence" / "I won\'t comment on individual judges"',
        followUp: '"So the judge who enabled $250M fraud keeps his job. That\'s your position?"',
        setting: 'Legal affairs interview, editorial board',
        documentHow: 'Contrast with any statements about "accountability" or "reform"'
      },
      {
        id: 'sanctuary-question',
        question: 'Yes or no: Will you end sanctuary policies on day one?',
        whyItsATrap: 'Binary question with no room for nuance. Either answer costs her.',
        likelyDodge: '"It\'s complicated" / "We need comprehensive reform"',
        followUp: '"Yes or no. The mayor said \'get the f*** out\' to federal agents. Do you agree?"',
        setting: 'Debate, press conference',
        documentHow: 'The dodge IS the story. Clip it. Loop it.'
      },
      {
        id: 'shirley-question',
        question: 'Was Governor Walz right to call Nick Shirley a white supremacist?',
        whyItsATrap: 'Defending Walz = defending the racist shield. Breaking from Walz = fractures base.',
        likelyDodge: '"I don\'t know all the details" / "I won\'t comment on the governor\'s statements"',
        followUp: '"A YouTuber exposed fraud your party enabled. Your governor called him racist. Do you agree—yes or no?"',
        setting: 'Press scrum, debate',
        documentHow: 'This is a character test. Her answer reveals everything.'
      },
      {
        id: 'moriarty-question',
        question: 'Do you support County Attorney Moriarty\'s prosecution policies?',
        whyItsATrap: 'Progressive prosecutor is popular with her base, toxic with moderates and victims.',
        likelyDodge: '"Local decisions should be made locally" / "I respect prosecutorial discretion"',
        followUp: '"Carjackings up 400%. Prosecutors declining cases. Is that the discretion you support?"',
        setting: 'Crime-focused forum, victim advocacy event',
        documentHow: 'Get victim advocates to ask. Their presence makes the dodge worse.'
      },
      {
        id: 'fire-question',
        question: 'Name one official you\'ll fire on day one.',
        whyItsATrap: 'Specificity creates enemies. Vagueness exposes emptiness.',
        likelyDodge: '"I\'ll evaluate everyone" / "I\'ll bring in my own team"',
        followUp: '"You\'ve had years to evaluate. Name one name. Or admit nothing changes."',
        setting: 'Town hall, editorial board',
        documentHow: 'The inability to name names becomes the story.'
      }
    ],

    /* Event Tactics */
    eventTactics: {
      townHalls: {
        title: 'Town Hall Operations',
        objective: 'Get her on record. Document non-answers. Create clips.',
        tactics: [
          {
            tactic: 'Arrive Early, Position Strategically',
            details: 'First 3 rows if open seating. Near aisle if assigned. You need to be seen and called on.'
          },
          {
            tactic: 'Coordinate Questions',
            details: 'Don\'t all ask the same question. Assign different pressure points to different people. Sequential pressure.'
          },
          {
            tactic: 'Record Everything',
            details: 'Multiple angles. Phone in pocket as backup. Livestream if possible—harder to edit later.'
          },
          {
            tactic: 'Ask Clean Questions',
            details: 'Short. Direct. Yes/no when possible. Don\'t give speeches—ask questions that expose her.'
          },
          {
            tactic: 'Follow Up on Dodges',
            details: 'If she dodges, have a second person ready: "She didn\'t answer. I\'ll ask again: [repeat question]."'
          },
          {
            tactic: 'Document the Atmosphere',
            details: 'If they screen questions, refuse entry, or cut mics—document that too. The suppression is the story.'
          }
        ],
        postEvent: 'Clip immediately. Post with context. Tag local media. Create the news cycle.'
      },
      debates: {
        title: 'Debate Pressure',
        objective: 'Force moderators to ask real questions. Fill the gap when they don\'t.',
        tactics: [
          {
            tactic: 'Pre-Debate Pressure',
            details: 'Publicly call on moderators to ask specific questions. Create expectation. If they don\'t ask, that\'s a story.'
          },
          {
            tactic: 'Crowd Signs',
            details: 'If visible seating: "$250M" / "Zero Fired" / "Name Names" / "#WhereWereYou" — Simple. Readable on camera.'
          },
          {
            tactic: 'Live-Tweet the Dodges',
            details: 'Real-time fact-checking. "She was asked about FOF. She pivoted to her Senate record. She won\'t answer."'
          },
          {
            tactic: 'Post-Debate Spin Room',
            details: 'If accessible: ask her directly. If not: ask her surrogates. "Why won\'t she name one official to fire?"'
          },
          {
            tactic: 'Rapid Response Clips',
            details: 'Clip the worst answers within minutes. Post before her team can spin. First narrative wins.'
          }
        ],
        postEvent: 'Compile a "What She Wouldn\'t Answer" thread. Make the silence the story.'
      },
      pressEvents: {
        title: 'Press Event Disruption',
        objective: 'Force reporters to ask hard questions. Create news when they won\'t.',
        tactics: [
          {
            tactic: 'FOIA Timing',
            details: 'Time FOIA releases to her events. Drop documents morning-of to force reporter questions.'
          },
          {
            tactic: 'Reporter Briefings',
            details: 'Brief friendly reporters before her events. Give them the questions and the context.'
          },
          {
            tactic: 'Press Scrum Questions',
            details: 'If you can\'t get in: position at exit. Shout questions. Her non-response is content.'
          },
          {
            tactic: 'Track the Reporters',
            details: 'Note which reporters ask hard questions and which don\'t. Praise the former publicly. Pressure the latter.'
          },
          {
            tactic: 'Create Alternative Coverage',
            details: 'If mainstream won\'t cover: create your own. Citizen journalism. Document and publish.'
          }
        ],
        postEvent: 'Compare her event claims to documented facts. Publish discrepancies immediately.'
      },
      social: {
        title: 'Social Media Warfare',
        objective: 'Control the narrative. Amplify pressure. Force response cycles.',
        tactics: [
          {
            tactic: 'Clip Factory',
            details: 'Every dodge, every non-answer becomes a clip. Under 60 seconds. Captioned. Shareable.'
          },
          {
            tactic: 'Hashtag Discipline',
            details: 'Use consistent hashtags: #SameTeamAmy #NameNames #WhereWereYou #AnswerForMinnesota. Build recognition.'
          },
          {
            tactic: 'Quote Tweet Her',
            details: 'When she posts vague promises, quote tweet with specific questions. Make her comments section the battleground.'
          },
          {
            tactic: 'Silence Counter',
            details: 'Running count: "Day X since Klobuchar announced. Still zero criticism of Walz, Ellison, or the fraud."'
          },
          {
            tactic: 'Surrogate Tracking',
            details: 'Her surrogates will defend her. Quote them. Ask them the questions she won\'t answer.'
          },
          {
            tactic: 'Response Forcing',
            details: 'If she or her team responds to anything, that\'s a win. Engagement validates the attack. Silence validates the silence narrative.'
          }
        ],
        dailyOps: 'Morning: attack line of the day. Afternoon: clip or document drop. Evening: compile the day\'s non-answers.'
      }
    },

    /* Call to Action */
    callToAction: {
      title: 'Join the Disruption',
      message: 'This playbook only works if people use it. Every town hall needs questioners. Every debate needs fact-checkers. Every press event needs pressure.',
      actions: [
        { action: 'Attend her events', details: 'Use the town hall tactics. Record everything.' },
        { action: 'Ask the pressure point questions', details: 'Pick one. Ask it. Document the answer.' },
        { action: 'Create and share clips', details: 'The dodge IS the content. Clip it. Post it. Tag us.' },
        { action: 'File FOIAs', details: 'Use our templates. Report findings back.' },
        { action: 'Brief local journalists', details: 'Share this playbook. Give them the questions.' }
      ],
      reportBack: 'Got a clip? A non-answer? A document? Report it: [submissions@mnreclamation.org]'
    }
  }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SITE_DATA };
}
