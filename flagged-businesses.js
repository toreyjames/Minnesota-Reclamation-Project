// Flagged Businesses Database
// Sources: DOJ indictments, court documents, investigative reports
// Status: charged, convicted, under-investigation, flagged

const flaggedBusinesses = [
  // ==========================================
  // FEEDING OUR FUTURE (FOF) - Meal Program Fraud
  // Source: DOJ USAO-MN Press Releases
  // ==========================================
  {
    name: "Feeding Our Future",
    city: "Minneapolis",
    address: "3755 Nicollet Ave S, Minneapolis, MN",
    program: "fof",
    status: "convicted",
    amount: "$250M+",
    defendants: ["Aimee Bock"],
    notes: "Central nonprofit sponsor. Aimee Bock convicted Dec 2023.",
    source: "DOJ"
  },
  {
    name: "Empire Cuisine & Market",
    city: "Shakopee",
    address: "Shakopee, MN",
    program: "fof",
    status: "charged",
    amount: "$40M+",
    defendants: ["Abdiaziz Shafii Farah"],
    notes: "Largest individual scheme. Claimed to feed 125,000+ kids.",
    source: "DOJ"
  },
  {
    name: "Safari Restaurant",
    city: "Minneapolis",
    address: "Minneapolis, MN",
    program: "fof",
    status: "charged",
    amount: "$7M+",
    defendants: ["Multiple"],
    notes: "Restaurant front for fraudulent meal claims.",
    source: "DOJ"
  },
  {
    name: "Stigma-Free Incorporated",
    city: "Minneapolis",
    address: "Minneapolis, MN",
    program: "fof",
    status: "convicted",
    amount: "$3.7M",
    defendants: ["Haji Osman Salad"],
    notes: "Convicted Feb 2024. 9 year sentence.",
    source: "DOJ"
  },
  {
    name: "ThinkTechAct Foundation",
    city: "Minneapolis",
    address: "Minneapolis, MN",
    program: "fof",
    status: "convicted",
    amount: "$5.9M",
    defendants: ["Abdulkadir Nur Salah"],
    notes: "Convicted. 12 year sentence.",
    source: "DOJ"
  },
  {
    name: "Partners in Nutrition",
    city: "Minneapolis",
    address: "Minneapolis, MN",
    program: "fof",
    status: "charged",
    amount: "$18M+",
    defendants: ["Multiple"],
    notes: "Multiple defendants charged.",
    source: "DOJ"
  },
  {
    name: "Partners in Quality Care",
    city: "St. Paul",
    address: "St. Paul, MN",
    program: "fof",
    status: "charged",
    amount: "$10M+",
    defendants: ["Qamar Ahmed Hassan"],
    notes: "Related to FOF network.",
    source: "DOJ"
  },
  {
    name: "S&S Catering",
    city: "Minneapolis",
    address: "Minneapolis, MN",
    program: "fof",
    status: "charged",
    amount: "$15M+",
    defendants: ["Multiple"],
    notes: "Catering front for fraudulent claims.",
    source: "DOJ"
  },
  {
    name: "Advance Youth Athletic Development",
    city: "Savage",
    address: "Savage, MN",
    program: "fof",
    status: "charged",
    amount: "$2M+",
    defendants: ["Multiple"],
    notes: "Youth program front.",
    source: "DOJ"
  },
  {
    name: "Brava Restaurant & Lounge",
    city: "Minneapolis",
    address: "Minneapolis, MN",
    program: "fof",
    status: "charged",
    amount: "$3M+",
    defendants: ["Multiple"],
    notes: "Restaurant used for fraudulent meal claims.",
    source: "DOJ"
  },
  
  // ==========================================
  // DAYCARE / CCAP FRAUD
  // Source: DHS investigations, Nick Shirley reports
  // ==========================================
  {
    name: "Al-Haramain Islamic Center Daycare",
    city: "Minneapolis",
    address: "Minneapolis, MN",
    program: "daycare",
    status: "flagged",
    amount: "TBD",
    defendants: [],
    notes: "Flagged in Nick Shirley investigation. Verify enrollment vs claims.",
    source: "Investigation"
  },
  {
    name: "Tawakal Express",
    city: "Minneapolis",
    address: "Minneapolis, MN",
    program: "daycare",
    status: "flagged",
    amount: "TBD",
    defendants: [],
    notes: "Multiple businesses at same address pattern.",
    source: "Investigation"
  },
  
  // ==========================================
  // HEALTHCARE / MEDICAID FRAUD
  // Source: HHS OIG, FBI investigations
  // ==========================================
  {
    name: "Various Home Health Agencies",
    city: "Minneapolis",
    address: "Multiple locations",
    program: "healthcare",
    status: "under-investigation",
    amount: "$9B (statewide estimate)",
    defendants: [],
    notes: "FBI/HHS OIG investigating widespread billing fraud. ~50% of Medicaid claims may be fraudulent.",
    source: "FBI/HHS"
  },
  
  // ==========================================
  // HOUSING FRAUD - GRIGGS-MIDWAY BUILDING
  // Source: Fox News, Yahoo News, HHS Investigation Dec 2025
  // ==========================================
  {
    name: "22 HSS Providers at Griggs-Midway Building",
    city: "St. Paul",
    address: "Griggs-Midway Building, St. Paul, MN",
    program: "housing",
    status: "under-investigation",
    amount: "$8M",
    defendants: [],
    notes: "22 FAKE companies at ONE address. All billed Medicaid for Housing Stability Services. HSS program exploded from $2.6M to $104M annually.",
    source: "HHS/Fox News Dec 2025"
  },
  {
    name: "Housing Stabilization Services Providers",
    city: "Minneapolis",
    address: "Multiple locations",
    program: "housing",
    status: "under-investigation",
    amount: "$104M+ (program total)",
    defendants: [],
    notes: "Program grew 40x from expected $2.6M to $104M. Minimal verification. Federal investigation ongoing.",
    source: "HHS Investigation"
  },
  
  // ==========================================
  // ST. CLOUD AREA
  // ==========================================
  {
    name: "Various CCAP Providers",
    city: "St. Cloud",
    address: "St. Cloud, MN",
    program: "daycare",
    status: "flagged",
    amount: "TBD",
    defendants: [],
    notes: "High concentration of flagged providers. Verify in person.",
    source: "Investigation"
  },
  
  // ==========================================
  // ROCHESTER AREA
  // ==========================================
  {
    name: "Various Healthcare Providers",
    city: "Rochester",
    address: "Rochester, MN",
    program: "healthcare",
    status: "flagged",
    amount: "TBD",
    defendants: [],
    notes: "Billing anomalies flagged. Compare to Mayo standards.",
    source: "Investigation"
  }
];

// Helper function to search businesses
function searchBusinesses(query, programFilter) {
  const q = query.toLowerCase().trim();
  
  return flaggedBusinesses.filter(biz => {
    // Filter by program
    if (programFilter !== 'all' && biz.program !== programFilter) {
      return false;
    }
    
    // If no query, show all
    if (!q) return true;
    
    // Search in name, city, address, defendants, notes
    return (
      biz.name.toLowerCase().includes(q) ||
      biz.city.toLowerCase().includes(q) ||
      biz.address.toLowerCase().includes(q) ||
      biz.defendants.some(d => d.toLowerCase().includes(q)) ||
      biz.notes.toLowerCase().includes(q)
    );
  });
}

// Get status badge class
function getStatusClass(status) {
  switch(status) {
    case 'convicted': return 'status-convicted';
    case 'charged': return 'status-charged';
    case 'under-investigation': return 'status-investigation';
    case 'flagged': return 'status-flagged';
    default: return '';
  }
}

// Get program label
function getProgramLabel(program) {
  switch(program) {
    case 'fof': return 'Feeding Our Future';
    case 'daycare': return 'Daycare / CCAP';
    case 'healthcare': return 'Healthcare / Medicaid';
    case 'housing': return 'Housing';
    default: return program;
  }
}

