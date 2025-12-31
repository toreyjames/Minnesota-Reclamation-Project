// Suspect Businesses Database
// Organized by city for easy citizen verification
// Red flags: COVID-era registration, high payments, same owner patterns, residential addresses

const suspectBusinesses = [
  // ==========================================
  // MINNEAPOLIS
  // ==========================================
  {
    name: "Feeding Our Future",
    address: "3755 Nicollet Ave S",
    city: "Minneapolis",
    type: "Meal Program",
    status: "CONVICTED",
    amount: "$250M+",
    flags: ["Central hub for fraud", "Aimee Bock convicted"],
    source: "DOJ"
  },
  {
    name: "Empire Cuisine & Market",
    address: "Shakopee area",
    city: "Minneapolis",
    type: "Meal Program",
    status: "CHARGED",
    amount: "$40M+",
    flags: ["Claimed 125,000+ kids fed", "Largest individual scheme"],
    source: "DOJ"
  },
  {
    name: "Safari Restaurant",
    address: "Minneapolis",
    city: "Minneapolis",
    type: "Meal Program",
    status: "CHARGED",
    amount: "$7M+",
    flags: ["Restaurant front", "Fake meal claims"],
    source: "DOJ"
  },
  {
    name: "Stigma-Free Inc",
    address: "Minneapolis",
    city: "Minneapolis",
    type: "Meal Program",
    status: "CONVICTED",
    amount: "$3.7M",
    flags: ["9 year sentence"],
    source: "DOJ"
  },
  {
    name: "ThinkTechAct Foundation",
    address: "Minneapolis",
    city: "Minneapolis",
    type: "Meal Program",
    status: "CONVICTED",
    amount: "$5.9M",
    flags: ["12 year sentence"],
    source: "DOJ"
  },
  {
    name: "Partners in Nutrition",
    address: "Minneapolis",
    city: "Minneapolis",
    type: "Meal Program",
    status: "CHARGED",
    amount: "$18M+",
    flags: ["Multiple defendants"],
    source: "DOJ"
  },
  {
    name: "S&S Catering",
    address: "Minneapolis",
    city: "Minneapolis",
    type: "Meal Program",
    status: "CHARGED",
    amount: "$15M+",
    flags: ["Catering front"],
    source: "DOJ"
  },
  {
    name: "Brava Restaurant & Lounge",
    address: "Minneapolis",
    city: "Minneapolis",
    type: "Meal Program",
    status: "CHARGED",
    amount: "$3M+",
    flags: ["Restaurant front"],
    source: "DOJ"
  },
  {
    name: "Multiple Daycare Providers",
    address: "Various - Cedar-Riverside area",
    city: "Minneapolis",
    type: "Daycare",
    status: "FLAGGED",
    amount: "TBD",
    flags: ["High concentration", "Verify in person", "Check for kids"],
    source: "Investigation"
  },
  {
    name: "Multiple Healthcare Providers",
    address: "Various - Lake Street corridor",
    city: "Minneapolis",
    type: "Healthcare",
    status: "UNDER INVESTIGATION",
    amount: "Part of $9B",
    flags: ["Medicaid billing anomalies", "Verify clinic exists"],
    source: "FBI/HHS"
  },

  // ==========================================
  // ST. PAUL
  // ==========================================
  {
    name: "Partners in Quality Care",
    address: "St. Paul",
    city: "St. Paul",
    type: "Meal Program",
    status: "CHARGED",
    amount: "$10M+",
    flags: ["FOF network"],
    source: "DOJ"
  },
  {
    name: "22 HSS Providers - Griggs-Midway Building",
    address: "Griggs-Midway Building",
    city: "St. Paul",
    type: "Housing",
    status: "UNDER INVESTIGATION",
    amount: "$8M",
    flags: ["22 FAKE companies at ONE address", "All billed Medicaid"],
    source: "HHS/Fox News Dec 2025"
  },
  {
    name: "Various CCAP Providers",
    address: "East Side",
    city: "St. Paul",
    type: "Daycare",
    status: "FLAGGED",
    amount: "TBD",
    flags: ["High concentration", "Verify enrollment"],
    source: "Investigation"
  },

  // ==========================================
  // ST. CLOUD
  // ==========================================
  {
    name: "Multiple Daycare Centers",
    address: "Various - Downtown/South Side",
    city: "St. Cloud",
    type: "Daycare",
    status: "FLAGGED",
    amount: "TBD",
    flags: ["Somali community cluster", "Verify kids present", "Check business hours"],
    source: "Investigation"
  },
  {
    name: "Home-based Daycares",
    address: "Various residential",
    city: "St. Cloud",
    type: "Daycare",
    status: "FLAGGED",
    amount: "TBD",
    flags: ["Residential addresses", "Claims 10+ kids", "Verify capacity"],
    source: "Investigation"
  },
  {
    name: "Healthcare Clinics",
    address: "Division Street area",
    city: "St. Cloud",
    type: "Healthcare",
    status: "FLAGGED",
    amount: "TBD",
    flags: ["Medicaid-heavy billing", "Verify clinic hours"],
    source: "Investigation"
  },

  // ==========================================
  // ROCHESTER
  // ==========================================
  {
    name: "Various Healthcare Providers",
    address: "Various - outside Mayo campus",
    city: "Rochester",
    type: "Healthcare",
    status: "FLAGGED",
    amount: "TBD",
    flags: ["Compare to Mayo standards", "Billing anomalies"],
    source: "Investigation"
  },
  {
    name: "Home Health Agencies",
    address: "Various",
    city: "Rochester",
    type: "Healthcare",
    status: "FLAGGED",
    amount: "TBD",
    flags: ["Personal care services", "Verify patients exist"],
    source: "Investigation"
  },

  // ==========================================
  // DULUTH
  // ==========================================
  {
    name: "Various Daycare Providers",
    address: "Central Hillside",
    city: "Duluth",
    type: "Daycare",
    status: "FLAGGED",
    amount: "TBD",
    flags: ["Refugee resettlement area", "Verify enrollment"],
    source: "Investigation"
  },

  // ==========================================
  // WILLMAR
  // ==========================================
  {
    name: "Various Providers",
    address: "Various",
    city: "Willmar",
    type: "Daycare",
    status: "FLAGGED",
    amount: "TBD",
    flags: ["Growing immigrant community", "Verify in person"],
    source: "Investigation"
  },

  // ==========================================
  // FARIBAULT
  // ==========================================
  {
    name: "Various Providers",
    address: "Various",
    city: "Faribault",
    type: "Daycare",
    status: "FLAGGED",
    amount: "TBD",
    flags: ["Somali community", "Verify enrollment"],
    source: "Investigation"
  },

  // ==========================================
  // SAVAGE / SHAKOPEE
  // ==========================================
  {
    name: "Advance Youth Athletic Development",
    address: "Savage",
    city: "Savage",
    type: "Meal Program",
    status: "CHARGED",
    amount: "$2M+",
    flags: ["Youth program front"],
    source: "DOJ"
  },

  // ==========================================
  // STATEWIDE PATTERNS
  // ==========================================
  {
    name: "Housing Stabilization Services",
    address: "Statewide",
    city: "Statewide",
    type: "Housing",
    status: "UNDER INVESTIGATION",
    amount: "$104M+ total",
    flags: ["Program grew 40x", "Minimal verification", "Same owner patterns"],
    source: "HHS Investigation"
  }
];

// Search by area
function searchByArea(city) {
  const searchCity = city.toLowerCase().trim();
  
  // Handle "statewide" entries specially
  let results = suspectBusinesses.filter(biz => {
    const bizCity = biz.city.toLowerCase();
    return bizCity.includes(searchCity) || 
           searchCity.includes(bizCity) ||
           bizCity === 'statewide';
  });
  
  // Sort: convicted first, then charged, then others
  const statusOrder = { 'CONVICTED': 0, 'CHARGED': 1, 'UNDER INVESTIGATION': 2, 'FLAGGED': 3 };
  results.sort((a, b) => (statusOrder[a.status] || 4) - (statusOrder[b.status] || 4));
  
  return results;
}

// Get all unique cities
function getAllCities() {
  const cities = [...new Set(suspectBusinesses.map(b => b.city))];
  return cities.filter(c => c !== 'Statewide').sort();
}

// Get status color
function getStatusColor(status) {
  switch(status) {
    case 'CONVICTED': return '#ef4444';
    case 'CHARGED': return '#f97316';
    case 'UNDER INVESTIGATION': return '#eab308';
    case 'FLAGGED': return '#3b82f6';
    default: return '#6b7280';
  }
}
