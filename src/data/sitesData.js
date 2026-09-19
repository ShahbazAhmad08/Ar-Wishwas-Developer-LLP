// Central Dynamic Data Store for Ar Wishwas Developer LLP
// Edit this file to update any project, contact, or pricing without touching UI code!

export const COMPANY_INFO = {
  name: "Ar Wishwas Developer LLP",
  shortName: "Ar Wishwas",
  tagline: "Trust • Commitment • Growth",
  hindiTagline: "Prayagraj & Kaushambi Me Aapke Sapno Ka Aashiyana – 100% Verified Gated Society Plots",
  phone: "+91 98765 43210",
  phoneRaw: "9876543210",
  whatsapp: "919876543210",
  email: "info@arwishwas.com",
  officeAddress: "Corporate Office: 2nd Floor, Civil Lines, Near High Court, Prayagraj, UP - 211001",
  branchAddress: "Site HQ: Main Highway Road, Near Manjhanpur, Kaushambi, UP",
  stats: {
    happyFamilies: "850+",
    plotsDelivered: "1,200+",
    acresDeveloped: "90+ Acres",
    bankApprovals: "100%",
    yearsExperience: "12+ Years",
    rating: "4.9 / 5.0"
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    whatsapp: "https://wa.me/919876543210"
  }
};

export const BANK_PARTNERS = [
  { name: "State Bank of India", badge: "SBI Approved", rate: "8.40%" },
  { name: "HDFC Bank", badge: "HDFC Loan Ready", rate: "8.50%" },
  { name: "Punjab National Bank", badge: "PNB Approved", rate: "8.45%" },
  { name: "Bank of Baroda", badge: "BOB Pre-Sanctioned", rate: "8.55%" },
  { name: "ICICI Bank", badge: "ICICI Tie-up", rate: "8.75%" }
];

export const CORE_AMENITIES = [
  {
    id: "entrance",
    icon: "ShieldCheck",
    title: "VIP Entrance Gate",
    desc: "Grand security arch with boom barrier, guard security cabin & CCTV monitoring."
  },
  {
    id: "roads",
    icon: "Road",
    title: "30ft & 40ft Interlocking Roads",
    desc: "Heavy-duty concrete paver blocks with clean curb sides and easy vehicle turnaround."
  },
  {
    id: "lights",
    icon: "Lightbulb",
    title: "Street Lights & Electricity",
    desc: "Dedicated transformers, underground cables, and energy-efficient LED street lighting."
  },
  {
    id: "water",
    icon: "Droplet",
    title: "24/7 Water & Nali System",
    desc: "Covered pucca drainage (nali) system and centralized deep submersible borewell line."
  },
  {
    id: "boundary",
    icon: "Wall",
    title: "Gated Boundary Colony",
    desc: "Full 7-foot external security boundary wall around the complete layout for 100% safety."
  },
  {
    id: "finance",
    icon: "Landmark",
    title: "Instant Bank Finance",
    desc: "Pre-approved plot loans with SBI, HDFC & PNB with up to 80% financing assistance."
  },
  {
    id: "park",
    icon: "Trees",
    title: "Lush Green Parks & Open Space",
    desc: "Landscaped green area, jogging track, kids play zone, and sacred temple space."
  },
  {
    id: "registry",
    icon: "FileCheck",
    title: "Immediate Registry & Dakhil Kharij",
    desc: "100% Clear Title, 143 Section approved, instant registry on complete payment."
  }
];

// Helper to generate realistic interactive plot grids for each site
const generatePlotMatrix = (siteId, totalPlots, soldCount, bookedCount, basePricePerSqYd) => {
  const plots = [];
  const standardSizes = [100, 120, 150, 200, 250]; // in sq. yards
  const facings = ["East Facing", "North Facing", "Corner / Two Side Open", "West Facing", "Park Facing"];
  
  for (let i = 1; i <= totalPlots; i++) {
    let status = "available";
    if (i <= soldCount) {
      status = "sold";
    } else if (i <= soldCount + bookedCount) {
      status = "booked";
    }

    const size = standardSizes[(i * 3) % standardSizes.length];
    const facing = facings[i % facings.length];
    const isCorner = facing.includes("Corner");
    const pricePerSqYd = isCorner ? basePricePerSqYd * 1.08 : basePricePerSqYd;
    const totalPrice = Math.round(size * pricePerSqYd);

    plots.push({
      plotNo: `${siteId.toUpperCase().slice(0, 3)}-${String(i).padStart(3, '0')}`,
      number: i,
      sizeSqYd: size,
      sizeSqFt: size * 9,
      dimensions: size === 100 ? "25' × 36'" : size === 150 ? "30' × 45'" : size === 200 ? "35' × 51'" : "40' × 56'",
      facing,
      status, // 'available' | 'sold' | 'booked'
      pricePerSqYd: Math.round(pricePerSqYd),
      totalPrice,
      siteId
    });
  }
  return plots;
};

export const SITES_DATA = [
  {
    id: "wishwas-green-city",
    name: "Wishwas Green City",
    locationCategory: "Prayagraj",
    subLocation: "Near Bamrauli Airport, Prayagraj",
    pricePerSqYd: 8500,
    priceDisplay: "₹ 8,500 / sq.yd",
    sqFtPriceDisplay: "₹ 944 / sq.ft",
    tagline: "Ultra-Modern Airport Corridor Living",
    badge: "Fast Selling • Airport View",
    bannerImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Just 3 km from Bamrauli Airport (Prayagraj Civil Enclave)",
      "40 ft Main Entrance Road & 30 ft Internal Paver Roads",
      "SBI & PNB Bank Loan Assistance Available",
      "100% Freehold Land with Instant Registry & Dakhil Kharij"
    ],
    distances: [
      { place: "Bamrauli Airport", dist: "3.2 km", time: "6 mins", icon: "Plane" },
      { place: "Subedarganj Railway Station", dist: "5.8 km", time: "11 mins", icon: "Train" },
      { place: "Prayagraj Junction", dist: "8.5 km", time: "18 mins", icon: "TrainTrack" },
      { place: "High Court & Civil Lines", dist: "7.9 km", time: "16 mins", icon: "Building" },
      { place: "Army Hospital / Military Hospital", dist: "4.0 km", time: "8 mins", icon: "Hospital" },
      { place: "St. Joseph's / DPS School", dist: "1.2 km", time: "3 mins", icon: "GraduationCap" }
    ],
    plotsSummary: {
      total: 54,
      sold: 38,
      booked: 5,
      available: 11
    },
    plots: generatePlotMatrix("wishwas-green-city", 54, 38, 5, 8500),
    layoutDescription: "East and North facing premium residential plots strategically situated on a 40-foot main dividing boulevard with green belt plantation."
  },
  {
    id: "wishwas-royal-enclave",
    name: "Wishwas Royal Enclave",
    locationCategory: "Prayagraj",
    subLocation: "Jhalwa Road, Near IIIT & Medical Hub, Prayagraj",
    pricePerSqYd: 11200,
    priceDisplay: "₹ 11,200 / sq.yd",
    sqFtPriceDisplay: "₹ 1,244 / sq.ft",
    tagline: "VIP Gated Society for High Class Living",
    badge: "Premium Luxury • IIIT Hub",
    bannerImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Walking distance from IIIT Allahabad & United Medicity",
      "Complete 8ft Security Boundary with 24x7 Armed Guard & CCTV",
      "Underground Drainage & Concealed Electrification",
      "100% Non-Agricultural (143) Cleared Plot Land"
    ],
    distances: [
      { place: "IIIT Allahabad", dist: "1.5 km", time: "3 mins", icon: "GraduationCap" },
      { place: "United Medicity Hospital", dist: "2.4 km", time: "5 mins", icon: "Hospital" },
      { place: "Prayagraj Junction", dist: "7.0 km", time: "14 mins", icon: "Train" },
      { place: "Bamrauli Airport", dist: "5.5 km", time: "10 mins", icon: "Plane" },
      { place: "Dhoomanganj Market", dist: "3.5 km", time: "7 mins", icon: "Building" }
    ],
    plotsSummary: {
      total: 44,
      sold: 26,
      booked: 6,
      available: 12
    },
    plots: generatePlotMatrix("wishwas-royal-enclave", 44, 26, 6, 11200),
    layoutDescription: "Exclusive 44-plot boutique enclave designed for high-ranking officers, doctors, and professionals wanting tranquil luxury living."
  },
  {
    id: "wishwas-eco-park",
    name: "Wishwas Eco Park",
    locationCategory: "Kaushambi",
    subLocation: "Manjhanpur Main Highway Road, Kaushambi",
    pricePerSqYd: 6000,
    priceDisplay: "₹ 6,000 / sq.yd",
    sqFtPriceDisplay: "₹ 667 / sq.ft",
    tagline: "Eco-Friendly Gated Township with Commercial Front",
    badge: "High ROI • 25 Acre Township",
    bannerImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Direct Main Highway Facing with High-Value Commercial Front Plots",
      "Centrally Landscaped 1.5 Acre Green Park with Gazebo & Kids Swings",
      "Immediate Possession with Demarcated Pillars & Boundary",
      "Bank Finance Assistance up to 75% of Total Valuation"
    ],
    distances: [
      { place: "Manjhanpur District HQ", dist: "3.0 km", time: "5 mins", icon: "Building" },
      { place: "District Hospital Kaushambi", dist: "2.2 km", time: "4 mins", icon: "Hospital" },
      { place: "Bharwari Railway Station", dist: "13.5 km", time: "22 mins", icon: "Train" },
      { place: "Prayagraj Ring Road Bypass", dist: "19.0 km", time: "25 mins", icon: "Car" },
      { place: "St. Peter's Inter College", dist: "800 m", time: "2 mins", icon: "GraduationCap" }
    ],
    plotsSummary: {
      total: 68,
      sold: 40,
      booked: 8,
      available: 20
    },
    plots: generatePlotMatrix("wishwas-eco-park", 68, 40, 8, 6000),
    layoutDescription: "Grand township featuring central avenue, 35-foot arterial roads, commercial showroom plots on the front, and peaceful residential lanes."
  },
  {
    id: "wishwas-smart-township",
    name: "Wishwas Smart Township",
    locationCategory: "Kaushambi",
    subLocation: "Bharwari Railway Junction Road, Kaushambi",
    pricePerSqYd: 5500,
    priceDisplay: "₹ 5,500 / sq.yd",
    sqFtPriceDisplay: "₹ 611 / sq.ft",
    tagline: "Pocket-Friendly Investment Near Rapid Transit",
    badge: "Budget Friendly • Near Station",
    bannerImage: "https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Just 2.5 km from Bharwari Railway Station (Direct trains to Kanpur/Delhi)",
      "High Growth Corridor connecting GT Road NH-19 to Manjhanpur",
      "Concrete Interlocking Roads, Electric Poles & Street Drainage",
      "Plot sizes starting from 100 sq.yd (Affordable down payments)"
    ],
    distances: [
      { place: "Bharwari Railway Station", dist: "2.5 km", time: "5 mins", icon: "Train" },
      { place: "GT Road (NH-19)", dist: "4.2 km", time: "8 mins", icon: "Car" },
      { place: "Community Health Centre", dist: "1.8 km", time: "4 mins", icon: "Hospital" },
      { place: "Bhavans Public School", dist: "1.0 km", time: "2 mins", icon: "GraduationCap" },
      { place: "Prayagraj Suburbs", dist: "32 km", time: "40 mins", icon: "Plane" }
    ],
    plotsSummary: {
      total: 36,
      sold: 25,
      booked: 4,
      available: 7
    },
    plots: generatePlotMatrix("wishwas-smart-township", 36, 25, 4, 5500),
    layoutDescription: "Ideal for early-stage investors and end-users wanting quick capital appreciation with zero maintenance overheads."
  },
  {
    id: "wishwas-residency",
    name: "Wishwas Residency",
    locationCategory: "Kaushambi",
    subLocation: "Saini National Highway (NH-19 Touch), Kaushambi",
    pricePerSqYd: 7200,
    priceDisplay: "₹ 7,200 / sq.yd",
    sqFtPriceDisplay: "₹ 800 / sq.ft",
    tagline: "National Highway Touch Commercial & Residential Plots",
    badge: "Highway Touch • Fast Appreciation",
    bannerImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Zero-distance direct approach from Kanpur-Prayagraj 6-lane NH-19",
      "Ideal for Hotels, Godowns, Commercial Showrooms & Gated Villas",
      "Immediate Registry with Dakhil-Kharij Guarantee on Paper",
      "Heavy commercial vehicle access with 45ft Entrance Boulevard"
    ],
    distances: [
      { place: "National Highway (NH-19)", dist: "0 km (Direct Touch)", time: "0 mins", icon: "Car" },
      { place: "Sirathu Railway Station", dist: "7.5 km", time: "12 mins", icon: "Train" },
      { place: "Saini Bus Stand", dist: "1.5 km", time: "3 mins", icon: "Building" },
      { place: "Chhatrapati Shahu Ji Hospital", dist: "2.5 km", time: "5 mins", icon: "Hospital" },
      { place: "Prayagraj Junction", dist: "48 km", time: "50 mins", icon: "TrainTrack" }
    ],
    plotsSummary: {
      total: 48,
      sold: 30,
      booked: 5,
      available: 13
    },
    plots: generatePlotMatrix("wishwas-residency", 48, 30, 5, 7200),
    layoutDescription: "Strategic highway development offering immense capital multiplier effect driven by UP state industrial expressway logistics."
  }
];

export const ROI_DATA = {
  currentGrowthRateConservative: 14, // 14% annual
  currentGrowthRateOptimistic: 24, // 24% annual
  growthDrivers: [
    {
      title: "Mahakumbh & Prayagraj Expansion",
      desc: "Massive ₹25,000+ Cr state infrastructure infusion, widening roads, smart lighting, and riverfront beautification."
    },
    {
      title: "Bamrauli Civil Airport Expansion",
      desc: "New international standard terminal driving sky-high residential plot demand within a 10 km radius."
    },
    {
      title: "Prayagraj Outer Ring Road & Bypass",
      desc: "Seamless connectivity directly linking Kaushambi NH-19 to Prayagraj, Varanasi, and Lucknow."
    },
    {
      title: "100% Registry & Dakhil Kharij Security",
      desc: "Clear legal papers assure worry-free double-digit annual appreciation with easy resale liquidity."
    }
  ]
};

export const TESTIMONIALS = [
  {
    name: "Er. Alok Srivastava",
    role: "Senior Engineer, Railways",
    site: "Wishwas Green City, Prayagraj",
    review: "Maine Wishwas Green City me 150 sq.yd ka plot liya tha. Registry aur Dakhil Kharij bilkul smooth tha. 30ft interlocking road aur boundary ban chuki hai. Very happy with Ar Wishwas Developer team!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Dr. Rajeshwar Tripathi",
    role: "Medical Practitioner",
    site: "Wishwas Royal Enclave, Jhalwa",
    review: "Jhalwa IIIT ke paas peaceful gated colony dhoondh raha tha. Ar Wishwas ne bank finance karwaya aur rate bhi genuine tha. Plot par turant kabza mila. Inka commitment 100% sachha hai.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Sunil Kumar Patel",
    role: "Business Owner",
    site: "Wishwas Residency, Kaushambi NH-19",
    review: "Highway touch plot lene ka mera decision best nikla. Ek saal ke andar hi plot ki value 30% badh chuki hai. LLP company hone ki wajah se poora paperwork clean aur transparent hai.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  }
];
