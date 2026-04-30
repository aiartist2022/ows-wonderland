import automotive from "@/assets/brand-automotive.jpg";
import industries from "@/assets/brand-industries.jpg";
import insurance from "@/assets/brand-insurance.jpg";
import meltLive from "@/assets/brand-melt-live.jpg";
import meltMedia from "@/assets/brand-melt-media.jpg";
import platform from "@/assets/brand-platform.jpg";
import handy from "@/assets/brand-handy.jpg";

import logoAjIndustries from "@/assets/logo-aj-industries.png";
import logoHandyBunch from "@/assets/logo-handy-bunch.jpg";
import logoOwsAutomotive from "@/assets/logo-ows-automotive.png";
import logoAjibInsurance from "@/assets/logo-ajib-insurance.png";
import logoMeltLive from "@/assets/logo-melt-live.png";
import logoMeltMedia from "@/assets/logo-melt-media.png";
import logoPlatformHealth from "@/assets/logo-platform-health.png";

export type BrandSlug =
  | "ows-automotive"
  | "aj-industries"
  | "aj-insurance-broker"
  | "melt-live"
  | "melt-media"
  | "platform-health-club"
  | "handy-bunch";

export interface Brand {
  slug: BrandSlug;
  name: string;
  short: string;
  tagline: string;
  category: string;
  color: string;
  image: string;
  logo?: string;
  description: string;
  services: string[];
  clients: string[];
  metrics: { label: string; value: string }[];
  synergy: string[];
}

export const BRANDS: Brand[] = [
  {
    slug: "ows-automotive",
    name: "OWS Automotive",
    short: "OWS",
    tagline: "The Brand You Can Trust",
    category: "FLEET MRO, PARTS & SMART FLEET",
    color: "#E11D2E",
    image: automotive,
    logo: logoOwsAutomotive,
    description:
      "A leading global provider of end-to-end fleet automotive services. Headquartered in Sharjah with operations across 14 countries, ~3,000 employees and revenues approaching US$800M.",
    services: [
      "Fleet Maintenance & MRO",
      "OEM Parts Distribution",
      "OEM Re-manufacturing",
      "Smart Fleet Telematics",
      "Logistics & Engineering",
      "Fleet Consultancy",
    ],
    clients: ["Dubai Taxi Company", "RTA", "Government of Ajman", "Tawazun", "Rafid", "Etimad Auto"],
    metrics: [
      { value: "14", label: "Countries" },
      { value: "3,000", label: "Employees" },
      { value: "$800M", label: "Revenue" },
      { value: "30+", label: "Years" },
    ],
    synergy: [
      "Feeds AJ Insurance with motor fleet coverage",
      "Powers AJ Industries defence supply chain",
    ],
  },
  {
    slug: "aj-industries",
    name: "AJ Industries",
    short: "AJ",
    tagline: "Defence & Industrial Excellence",
    category: "DEFENCE & INDUSTRIAL (JV)",
    color: "#C9A24A",
    image: industries,
    logo: logoAjIndustries,
    description:
      "A defence and industrial joint venture between AJ Holding LLC and OWS Automotive, delivering spare parts, MRO services and automotive solutions to the UAE Armed Forces (GHQ) and government entities.",
    services: [
      "Military Spare Parts Supply",
      "MRO for Wheeled & Tracked Vehicles",
      "Fleet Workshop Development",
      "International OEM Partnerships",
    ],
    clients: ["UAE Armed Forces (GHQ)", "Tawazun", "UAE Government Entities"],
    metrics: [
      { value: "AED 500M+", label: "Government Savings" },
      { value: "37,000", label: "Sq Ft Distribution" },
      { value: "150+", label: "Global Suppliers" },
      { value: "2018", label: "Established" },
    ],
    synergy: ["Built on OWS Automotive supply chain expertise"],
  },
  {
    slug: "aj-insurance-broker",
    name: "AJ Insurance Broker",
    short: "AJ",
    tagline: "Trusted Cover. Compliance First.",
    category: "MOTOR, MEDICAL & LIABILITY BROKERAGE",
    color: "#4A7BD8",
    image: insurance,
    logo: logoAjibInsurance,
    description:
      "A UAE-based insurance brokerage delivering innovative, genuine insurance solutions across motor, medical, liability, cyber and aviation lines — built around fraud minimisation and exceeding UAE regulatory standards.",
    services: [
      "Motor & Fleet Insurance",
      "Group Medical Insurance",
      "Public Liability",
      "Workmen's Compensation",
      "Cyber Insurance",
      "Aviation Insurance",
    ],
    clients: ["DTC Motor Fleet", "Etisalat / e&", "Transport Authority Ajman", "TXI Ajman", "AIMS Medical Group"],
    metrics: [
      { value: "6", label: "Insurance Lines" },
      { value: "100%", label: "UAE Compliant" },
      { value: "10+", label: "Major Clients" },
    ],
    synergy: [
      "Converts OWS Automotive fleet contracts to motor coverage",
      "Insures Platform Health Club facilities",
    ],
  },
  {
    slug: "melt-live",
    name: "Melt Live",
    short: "M",
    tagline: "World-Class Live Experiences",
    category: "WORLD-CLASS EVENTS & BRAND EXPERIENCES",
    color: "#B14CFF",
    image: meltLive,
    logo: logoMeltLive,
    description:
      "A joint venture between OWS Capital and Steve Harvey Global, bridging Western and Eastern business cultures through original IP festivals, A-list celebrity experiences and government programmes across MENA.",
    services: [
      "Original IP Festivals (OFFF, FuelFest)",
      "Celebrity Golf Classics",
      "Government Activations",
      "Brand Experience Production",
    ],
    clients: ["ADMO", "Visit Qatar", "Miral / Yas Island", "MENA Tourism Boards"],
    metrics: [
      { value: "5+", label: "Years Operating" },
      { value: "30+", label: "Major Projects" },
      { value: "Billions", label: "Global Eyeballs" },
    ],
    synergy: ["Amplified digitally by Melt Media", "Co-branded wellness with Platform"],
  },
  {
    slug: "melt-media",
    name: "Melt Media",
    short: "M",
    tagline: "Performance. Powered by Culture.",
    category: "PERFORMANCE MARKETING & DIGITAL MEDIA",
    color: "#2DD4D4",
    image: meltMedia,
    logo: logoMeltMedia,
    description:
      "A full-service performance marketing and digital media agency — co-founded by Steve Harvey, Oweis Zahran and Claire Romano. Combines performance data, creative content and AI-powered tech to build digital ecosystems for brands.",
    services: [
      "Paid Search & Social",
      "Programmatic & Video (CTV/DOOH)",
      "SEO & Organic Growth",
      "Content Creation",
      "Lead Generation",
      "Measurement & CRO",
    ],
    clients: ["MELT Live Events", "OWS Holdings Portfolio", "Cultural Brands"],
    metrics: [
      { value: "8+", label: "AI Platforms" },
      { value: "2026", label: "Launched Dubai" },
      { value: "MENA", label: "Coverage" },
    ],
    synergy: [
      "Amplifies every Melt Live event",
      "Drives lead generation across all 7 verticals",
    ],
  },
  {
    slug: "platform-health-club",
    name: "Platform Health Club",
    short: "P",
    tagline: "Premium Wellness. Built for Performance.",
    category: "PREMIUM GYM & CORPORATE WELLNESS",
    color: "#4ADE80",
    image: platform,
    logo: logoPlatformHealth,
    description:
      "Sharjah's first integrated premium health club — combining world-class gym facilities, padel courts, personal training, nutrition and recovery. Operated by OWS Capital with Sharjah Co-operative Society.",
    services: [
      "Personal Training (50+ Trainers)",
      "Padel Courts (Spanish Pro Dive)",
      "Group Fitness Classes",
      "Recovery & Wellness",
      "Corporate Memberships",
    ],
    clients: ["10,000+ Active Members", "Corporate Wellness Clients", "Sharjah Co-operative Society"],
    metrics: [
      { value: "6", label: "Locations" },
      { value: "10,000+", label: "Members" },
      { value: "50+", label: "Trainers" },
    ],
    synergy: [
      "Maintained by Handy Bunch facility services",
      "Wellness packages sold via Melt Media",
    ],
  },
  {
    slug: "handy-bunch",
    name: "Handy Bunch",
    short: "H",
    tagline: "Facilities. Maintained. Mastered.",
    category: "FACILITY MANAGEMENT & TECHNICAL SERVICES",
    color: "#F5A524",
    image: handy,
    logo: logoHandyBunch,
    description:
      "A UAE-based facility management company delivering housekeeping, technical, and renovation services for residential, commercial, and light industrial properties — the on-the-ground operations arm of OWS Holdings.",
    services: [
      "Housekeeping & Cleaning",
      "Electrical & Plumbing",
      "AC & Air Filtration",
      "Carpentry & Renovation",
      "Annual Maintenance Contracts",
      "Pest Control & Landscaping",
    ],
    clients: ["Platform Health Club (6 sites)", "AJ Industries Warehouses", "Corporate Office Clients"],
    metrics: [
      { value: "3", label: "Service Categories" },
      { value: "AMC", label: "Flagship Offering" },
      { value: "UAE", label: "Coverage" },
    ],
    synergy: [
      "Maintains all Platform Health Club locations",
      "Services AJ Industries facilities",
    ],
  },
];

export const PILLARS = [
  {
    title: "Single-Relationship Simplicity",
    body: "One trusted partner across automotive, insurance, media, events, wellness and FM — reducing procurement complexity.",
  },
  {
    title: "Government-Grade Trust",
    body: "Proven track record with UAE government entities — RTA, Government of Ajman, Tourism Departments, transport authorities.",
  },
  {
    title: "Integrated Cross-Vertical Value",
    body: "Every business unit creates introductions for the others — a fleet contract unlocks insurance, media, wellness and facilities.",
  },
  {
    title: "Regional MENA Reach",
    body: "Deep presence across Dubai, Sharjah, Abu Dhabi and Ajman; regional networks in Qatar, Bahrain and beyond.",
  },
  {
    title: "Innovation-Led Delivery",
    body: "Technology, talent and creativity driving smarter, faster and future-ready solutions.",
  },
];

export const INDUSTRIES = [
  "Automotive",
  "Defence & Government",
  "Logistics & Transport",
  "Healthcare & Insurance",
  "Media & Entertainment",
  "Fitness & Wellness",
  "Facilities & Infrastructure",
];

export const TRUSTED_BY = [
  "RTA — Roads & Transport Authority",
  "DTC — Dubai Taxi Company",
  "Government of Ajman",
  "Tawazun",
  "ADMO",
  "Transport Authority Ajman",
  "UAE Armed Forces (GHQ)",
  "Etisalat / e&",
  "Visit Qatar",
  "Miral / Yas Island",
  "Sharjah Co-op Society",
  "AIMS Medical Group",
];

export const HEADLINE_METRICS = [
  { value: "7", label: "Verticals" },
  { value: "14", label: "Countries" },
  { value: "3,000+", label: "Employees" },
  { value: "10,000+", label: "Wellness Members" },
];
