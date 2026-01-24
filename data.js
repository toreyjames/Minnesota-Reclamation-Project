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
    }
  ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SITE_DATA };
}
