export const marketSources = {
  realtorNeighborhood:
    "https://www.realtor.com/local/market/nevada/las-vegas/peccole-ranch",
  nregPeccole:
    "https://www.nevadarealestategroup.com/blog/peccole-ranch-las-vegas-established-master-plan-guide-2026/",
  nregQueensridge:
    "https://www.nevadarealestategroup.com/blog/queensridge-gated-estates-las-vegas-luxury-guide-2026/",
  nregZip89117: "https://www.nevadarealestategroup.com/market-report/89117/",
  associationAmenities: "https://www.peccoleranchlv.com/amenities-map-overview/",
  associationTennis: "https://www.peccoleranchlv.com/tennis-courts/",
  associationClubhouse: "https://www.peccoleranchlv.com/clubhouse-rental/",
  redResalePackage:
    "https://red.nv.gov/uploadedFiles/rednvgov/Content/CIC/Program_Training/Flowcharts/what-to-include-in-a-resale-package.pdf",
  nrsGuide: "https://kouzr.com/guides/las-vegas-hoa-guide",
  sandy: "https://sandymargolin.com/communities/las-vegas/peccole-ranch/",
  zipData: "https://www.zipdatamaps.com/neighborhood/nevada/las-vegas/peccole-ranch",
  ccsd:
    "https://trans-webinfo.ccsd.net/InfoLocator/InfoLocator/Locator.aspx?OrgGuid=ORG-CCSD&ProfileGuid=CCSD-PROFILE-3",
} as const;

/** Neighborhood-level figures. As of September 2026. Not a ZIP-wide blend. */
export const septemberNeighborhood = {
  asOf: "September 2026",
  retrieved: "October 12, 2026",
  medianList: 522_475,
  medianSold: 595_000,
  pricePerSqft: 289,
  activeListings: 67,
  activeListingsMom: "down 4.35 percent from the prior month",
  activeListingsYoy: "up 18.92 percent from a year earlier",
  medianDom: 42,
  saleToList: "98 percent",
  belowAsk: "2.19 percent below asking",
  sourceName: "Realtor.com Economic Research",
  sourceUrl: marketSources.realtorNeighborhood,
} as const;

export type ClosedSale = {
  address: string;
  subdivision: string;
  listPrice: number;
  closePrice: number;
  listDate: string;
  closeDate: string;
  dom: string;
  ratio: string;
  facts: string;
  sourceLabel: string;
  sourceUrl: string;
};

export const closedSales: ClosedSale[] = [
  {
    address: "2109 Marble Gorge Drive, Las Vegas, NV 89117",
    subdivision: "Peccole Ranch",
    listPrice: 875_000,
    closePrice: 875_000,
    listDate: "August 12, 2026",
    closeDate: "September 18, 2026",
    dom: "Sources disagree, so no single DOM is shown. One index said 1 day. The list date is August 12, 2026.",
    ratio: "100 percent",
    facts: "5 bedrooms, 3,077 square feet, built 1992",
    sourceLabel: "GLVAR history via The Roland Team",
    sourceUrl:
      "https://therolandteam.com/home/2109-marble-gorge-dr-las-vegas-nv-89117-fb81fa19",
  },
  {
    address: "2005 Marble Gorge Drive, Las Vegas, NV 89117",
    subdivision: "Signature at Peccole Ranch",
    listPrice: 749_900,
    closePrice: 735_000,
    listDate: "July 31, 2026",
    closeDate: "September 15, 2026",
    dom: "11 days, reported on two IDX pages",
    ratio: "98.0 percent",
    facts: "4 bedrooms, 2,571 square feet, built 1993",
    sourceLabel: "GLVAR history via The Roland Team and JH Agents",
    sourceUrl:
      "https://therolandteam.com/home/2005-marble-gorge-dr-las-vegas-nv-89117-70aa7e7a",
  },
  {
    address: "7441 Darby Avenue, Las Vegas, NV 89117",
    subdivision: "Signature at Peccole Ranch",
    listPrice: 1_279_000,
    closePrice: 1_200_000,
    listDate: "May 18, 2026",
    closeDate: "August 31, 2026",
    dom: "78 days on the Viva Home Vegas sold page",
    ratio: "93.8 percent",
    facts: "4 bedrooms, 3,691 square feet, built 1989",
    sourceLabel: "Viva Home Vegas close record and eXp list history",
    sourceUrl:
      "https://www.vivahomevegas.com/7441-Darby-Las-Vegas-NV-89117/listing/MLS-2783701",
  },
  {
    address: "9720 Ravine Avenue, Las Vegas, NV 89117",
    subdivision: "Wellington Park at Peccole Ranch",
    listPrice: 469_000,
    closePrice: 445_000,
    listDate: "August 6, 2026",
    closeDate: "August 24, 2026",
    dom: "5 days on the Viva Home Vegas sold page",
    ratio: "94.9 percent",
    facts: "3 bedrooms, 1,321 square feet, built 1998. MLS field Age Restricted: No.",
    sourceLabel: "GLVAR history via The Roland Team and Viva Home Vegas",
    sourceUrl:
      "https://therolandteam.com/home/9720-ravine-ave-las-vegas-nv-89117-541f242b",
  },
];

export type HoaRow = {
  name: string;
  fee: string;
  gate: string;
  includes: string;
  published: string;
  sourceUrl: string;
};

export const hoaRows: HoaRow[] = [
  {
    name: "Sierra Madre, Terracina, and Pueblo",
    fee: "$50–$110 per month",
    gate: "Open",
    includes: "Common-area landscape and master governance",
    published: "September 19, 2026",
    sourceUrl: marketSources.nregPeccole,
  },
  {
    name: "Other open sub-associations",
    fee: "$80–$185 per month",
    gate: "Open",
    includes: "Landscape and sub-association reserves",
    published: "September 19, 2026",
    sourceUrl: marketSources.nregPeccole,
  },
  {
    name: "Peccole Ranch master assessment, without a gate",
    fee: "about $85–$145 per month",
    gate: "Open",
    includes: "Master-plan assessment only",
    published: "October 11, 2026",
    sourceUrl: marketSources.nregQueensridge,
  },
  {
    name: "Canyon Gate",
    fee: "$200–$285 per month",
    gate: "Guard-gated",
    includes: "Guard gate, patrol, and landscape. Golf membership is optional.",
    published: "September 19, 2026",
    sourceUrl: marketSources.nregPeccole,
  },
  {
    name: "Queensridge, combined layers",
    fee: "about $315–$585 per month",
    gate: "Guard-gated",
    includes: "Gate association, master plan, and some cul-de-sac layers",
    published: "October 11, 2026",
    sourceUrl: marketSources.nregQueensridge,
  },
  {
    name: "One Queensridge Place",
    fee: "$1,200–$2,400 per month",
    gate: "Staffed towers",
    includes: "Building service, reserves, and tower amenities",
    published: "September 19, 2026",
    sourceUrl: marketSources.nregPeccole,
  },
];

export type NeighborhoodBand = {
  name: string;
  gate: string;
  prices: string;
  note: string;
  published: string;
  sourceUrl: string;
};

export const neighborhoodBands: NeighborhoodBand[] = [
  {
    name: "Sierra Madre at Peccole Ranch",
    gate: "Open",
    prices: "$400,000–$525,000",
    note: "Single-family resale band in the guide",
    published: "September 19, 2026",
    sourceUrl: marketSources.nregPeccole,
  },
  {
    name: "Terracina at Peccole Ranch",
    gate: "Open",
    prices: "$450,000–$675,000",
    note: "Single-family resale band in the guide",
    published: "September 19, 2026",
    sourceUrl: marketSources.nregPeccole,
  },
  {
    name: "Pueblo at Peccole Ranch",
    gate: "Open",
    prices: "$500,000–$795,000",
    note: "Single-family homes on larger lots, per the guide",
    published: "September 19, 2026",
    sourceUrl: marketSources.nregPeccole,
  },
  {
    name: "Canyon Gate",
    gate: "Guard-gated",
    prices: "$700,000–$1,650,000",
    note: "Golf-course community. Membership is separate from ownership.",
    published: "September 19, 2026",
    sourceUrl: marketSources.nregPeccole,
  },
  {
    name: "Queensridge",
    gate: "Guard-gated",
    prices: "about $725,000 to more than $5 million",
    note: "987 homes. Guide describes Mediterranean, Tuscan, and traditional plans.",
    published: "October 11, 2026",
    sourceUrl: marketSources.nregQueensridge,
  },
  {
    name: "One Queensridge Place",
    gate: "Staffed towers",
    prices: "about $500,000 to more than $4 million",
    note: "Twin 18-story condominium towers, about 219 homes, completed 2008–2009.",
    published: "September 19, 2026",
    sourceUrl: marketSources.nregPeccole,
  },
];
