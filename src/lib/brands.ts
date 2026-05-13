import automotive from "@/assets/brand-automotive.jpg";
import industries from "@/assets/brand-industries.jpg";
import insurance from "@/assets/brand-insurance.jpg";
import meltLive from "@/assets/brand-melt-live.jpg";
import meltMedia from "@/assets/brand-melt-media.jpg";
import platform from "@/assets/brand-platform.jpg";
import handy from "@/assets/brand-handy.jpg";
import ala from "@/assets/brand-ala.jpg";
import meltEdu from "@/assets/brand-melt-education.jpg";

import logoAjIndustries from "@/assets/logo-aj-industries.png";
import logoHandyBunch from "@/assets/logo-handy-bunch.jpg";
import logoOwsAutomotive from "@/assets/logo-ows-automotive.png";
import logoAjibInsurance from "@/assets/logo-ajib-insurance.png";
import logoMeltLive from "@/assets/logo-melt-live.png";
import logoMeltMedia from "@/assets/logo-melt-media.png";
import logoPlatformHealth from "@/assets/logo-platform-health.png";
import logoAlaCorporation from "@/assets/logo-ala-corporation.png";
import logoMeltEducation from "@/assets/logo-melt-education.png";

export type BrandSlug =
  | "ows-automotive"
  | "aj-industries"
  | "aj-insurance-broker"
  | "melt-live"
  | "melt-media"
  | "platform-health-club"
  | "handy-bunch"
  | "ala-corporation"
  | "melt-education";

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
      "Founded in the United States three decades ago, OWS Automotive is a leading global provider of end-to-end fleet automotive services. While the company initially offered a broad range of services, today its primary focus is on delivering sustainable solutions to government and corporate fleets. Headquartered in the UAE with operations across multiple countries, OWS Automotive combines advanced quality engineering with sustainable remanufacturing processes to set new standards for environmental responsibility and technological innovation. OWS Automotive has a proven track record with savings to the UAE Government of greater than AED 1 Billion, a significant portfolio of satisfied clients, direct relationships with tier-one automotive suppliers, and serves as an exclusive maintenance supplier to government departments.",
    services: [
      "First Response & Roadside Assistance",
      "OEM Parts Remanufacturing",
      "Complete Vehicle MRO",
      "Fleet Maintenance Services",
      "Smart Fleet Telematics Solutions",
    ],
    clients: ["Dubai Taxi Company", "RTA — Roads & Transport Authority", "Government of Ajman", "Tawazun", "Rafid", "Etimad Auto"],
    metrics: [
      { value: "30+", label: "Years Established" },
      { value: "AED 1B+", label: "Govt Savings" },
      { value: "3", label: "Countries" },
      { value: "500+", label: "Employees" },
    ],
    synergy: [
      "Feeds AJIB with motor fleet coverage opportunities",
      "Powers AJ Industries defence supply chain capabilities",
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
      "Established in 2018, AJ Industries is a joint venture between AJ Holding LLC and OWS Automotive, created to pioneer in the automotive and defence segment. The company partners with top-tier international firms to deliver spare parts and MRO services to the GHQ-UAE Armed Forces and government entities. AJ Holding LLC is a highly regarded organisation based in Ajman, UAE, established in 2000, which owns and operates a diverse range of strategically positioned subsidiaries. OWS brings an innovative approach combining sustainable remanufacturing with advanced quality engineering. Together, they have delivered proven savings of more than AED 500 million to the UAE Government.",
    services: [
      "Military Spare Parts Supply",
      "MRO for Wheeled & Tracked Vehicles",
      "Fleet Workshop Development & Advisory",
      "International OEM Partnerships",
      "Strategic JV with Etimad / Al Fahad in Abu Dhabi for UAE Armed Forces support",
    ],
    clients: ["UAE Armed Forces (GHQ)", "Tawazun", "Etimad / Al Fahad", "UAE Government Entities"],
    metrics: [
      { value: "AED 500M+", label: "Govt Savings" },
      { value: "37,000", label: "Sq Ft Distribution" },
      { value: "150+", label: "Global Suppliers" },
      { value: "2018", label: "Established" },
    ],
    synergy: [
      "Built on OWS Automotive supply chain expertise and global supplier network",
      "Facilities maintained by Handy Bunch",
    ],
  },
  {
    slug: "aj-insurance-broker",
    name: "AJIB",
    short: "AJIB",
    tagline: "Trusted Cover. Compliance First",
    category: "MOTOR, MEDICAL & LIABILITY BROKERAGE",
    color: "#4A7BD8",
    image: insurance,
    logo: logoAjibInsurance,
    description:
      "AJIB is a UAE-based insurance brokerage delivering innovative, genuine insurance solutions across motor, medical, liability, cyber and aviation lines. Built around fraud minimisation and exceeding UAE regulatory standards, AJIB serves corporate fleets, SMEs, and individuals with tailored risk-management solutions and end-to-end claims support.",
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
      "Converts OWS Automotive fleet contracts into motor coverage",
      "Insures Platform Health Club facilities and operations",
      "Covers Handy Bunch workforce under workmen's compensation",
    ],
  },
  {
    slug: "melt-live",
    name: "Melt Live",
    short: "M",
    tagline: "World-Class Live Experiences",
    category: "WORLD-CLASS EVENTS & BRAND EXPERIENCES",
    color: "#c5529d",
    image: meltLive,
    logo: logoMeltLive,
    description:
      "Melt Live is the events and live entertainment arm of MELT Global — a cultural platform co-founded by Oweis Zahran and Steve Harvey in 2021, bridging Eastern and Western creative economies through original IP, live events and media. Steve Harvey serves as Chairman, bringing global reach, cultural credibility, and decades of experience.",
    services: [
      "Original IP Festivals (FuelFest Arabia, Open Fire Food Festival)",
      "Celebrity Events & Golf Classics",
      "Government Activations & Tourism Programmes",
      "Brand Experience Production & Activations",
      "VIP & VVIP Event Programming",
    ],
    clients: ["DCT", "Sharjah Asset Management", "Miral / Yas Island", "Visit Qatar"],
    metrics: [
      { value: "20+", label: "IP Events" },
      { value: "50,000+", label: "Event Attendees" },
      { value: "2", label: "Countries" },
    ],
    synergy: [
      "All event marketing and media managed end-to-end by Melt Media",
      "Group-wide sponsorship and partnership opportunities activated across OWS Holdings verticals",
      "Event venues and facilities serviced and maintained by Handy Bunch",
    ],
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
      "Melt Media is the digital arm of MELT Global — a full-service performance marketing and digital media agency connecting brands to audiences through intelligent digital ecosystems built for performance and designed for lasting cultural impact. The agency develops platform-specific content that is both creatively compelling and strategically purposeful.",
    services: [
      "Strategy & Market Research",
      "Paid Search & Social Advertising",
      "Programmatic & Video (CTV / DOOH)",
      "SEO & Organic Growth",
      "Content Creation (Video, Photography, Creative)",
      "Influencer & Talent Management",
      "Affiliate Network Development",
      "UX & Conversion Rate Optimisation",
      "Out-of-Home Campaign Placement",
      "Measurement, Reporting & Continuous Refinement",
    ],
    clients: ["Melt Live", "OWS Holdings", "AJIB", "OWS Automotive", "Platform Health Club", "AJ Industries", "Sharjah Asset Management"],
    metrics: [
      { value: "2026", label: "Launched" },
      { value: "GCC+", label: "Coverage" },
      { value: "10+", label: "Services" },
    ],
    synergy: [
      "Central marketing and media partner across all nine OWS Holdings verticals",
      "Manages end-to-end digital strategy, paid media and content for every Melt Live event",
    ],
  },
  {
    slug: "platform-health-club",
    name: "Platform Health Club",
    short: "P",
    tagline: "Premium Wellness. Built for Performance",
    category: "PREMIUM GYM & WELLNESS",
    color: "#a3d392",
    image: platform,
    logo: logoPlatformHealth,
    description:
      "Platform Health Club is Sharjah's leading fitness and wellness destination, combining world-class gym equipment, professional personal trainers, padel courts and recovery facilities. Operated by OWS Capital in partnership with Sharjah Co-operative Society, with five locations across Sharjah and a sixth opening soon.",
    services: [
      "Personal Training (50+ certified trainers)",
      "Padel Courts",
      "Group Fitness Classes",
      "Recovery & Wellness Facilities",
      "Corporate Wellness Memberships",
      "Nutrition Corner",
    ],
    clients: ["50,000+ Clients Served", "Corporate Wellness Clients", "Sharjah Co-operative Society"],
    metrics: [
      { value: "5", label: "Open Locations" },
      { value: "50,000+", label: "Clients Served" },
      { value: "50+", label: "Trainers" },
      { value: "24/7", label: "Select Locations" },
    ],
    synergy: [
      "Facility operations and maintenance delivered by Handy Bunch across all locations",
      "Digital marketing and membership campaigns managed by Melt Media",
      "Risk management, facility insurance and workforce coverage provided by AJIB",
    ],
  },
  {
    slug: "handy-bunch",
    name: "Handy Bunch",
    short: "H",
    tagline: "Facilities. Maintained. Mastered",
    category: "FACILITY MANAGEMENT & TECHNICAL SERVICES",
    color: "#F5A524",
    image: handy,
    logo: logoHandyBunch,
    description:
      "Handy Bunch is a UAE-based facility management company delivering housekeeping, technical and renovation services for residential, commercial and light-industrial properties. As the on-the-ground operations arm of OWS Holdings, Handy Bunch ensures every group facility runs at peak performance — from health clubs to warehouses to corporate offices.",
    services: [
      "Housekeeping & Professional Cleaning",
      "Electrical & Plumbing Services",
      "AC Servicing & Air Filtration",
      "Carpentry & Renovation",
      "Annual Maintenance Contracts (AMC)",
      "Pest Control & Landscaping",
    ],
    clients: ["Platform Health Club", "AJ Industries", "OWS Automotive"],
    metrics: [
      { value: "3", label: "Service Categories" },
      { value: "AMC", label: "Flagship Offering" },
      { value: "UAE", label: "Coverage" },
    ],
    synergy: [
      "Maintains all Platform Health Club locations",
      "Services AJ Industries distribution facilities",
      "Workforce covered by AJIB workmen's compensation",
    ],
  },
  {
    slug: "ala-corporation",
    name: "ALA Corporation",
    short: "ALA",
    tagline: "Supply Chain. Engineered",
    category: "AEROSPACE & DEFENCE SUPPLY CHAIN",
    color: "#F5C518",
    image: ala,
    logo: logoAlaCorporation,
    description:
      "ALA is a global diversified supply chain integrator to the Aerospace, Defence, Rail, Space, Power Generation and High-Tech industries. Headquartered in Naples and Milan, Italy, ALA brings over 35 years of experience — offering a one-stop-shop range of products, services and high-performance engineered solutions across 10 countries and 20 locations worldwide.",
    services: [
      "Supply Chain Integration & Management",
      "Lean Logistics (JIT, DLF, Kitting)",
      "Stocking Distribution",
      "Defence MRO & Interconnection",
      "Wiring Harnesses (SCP SINTERSA)",
      "Strategic Distribution for OEMs",
      "EN 9120 Certified Quality Systems",
    ],
    clients: ["Leonardo", "Airbus", "Boeing", "Defence Primes", "Rail OEMs", "Power Generation & High-Tech Industries"],
    metrics: [
      { value: "35+", label: "Years Experience" },
      { value: "750+", label: "Employees" },
      { value: "10", label: "Countries" },
      { value: "200K+", label: "SKUs Managed" },
    ],
    synergy: [
      "Anchors UAE/MENA aerospace partnership with OWS Holdings",
      "Feeds AJ Industries defence supply chain capabilities",
    ],
  },
  {
    slug: "melt-education",
    name: "Melt Education",
    short: "ME",
    tagline: "Shaping the Future of Global Education",
    category: "EDUCATION & STUDENT DEVELOPMENT",
    color: "#7C5CFF",
    image: meltEdu,
    logo: logoMeltEducation,
    description:
      "Melt Education is a Steve Harvey company founded by Steve Harvey, Oweis Zahran and Adam Lee, dedicated to unlocking growth, expanding opportunity and supporting students worldwide. The organisation equips institutions with the systems to build student character, activate real-world learning and immerse students in new cultures through whole-student development, immersive homestays and study-abroad readiness programmes.",
    services: [
      "Inspo — Whole-Student Development",
      "SRS — Immersive Homestays (via StudentRoomStay)",
      "StayPrep — Study Abroad Readiness",
      "Melt Academy — International School Network",
      "Melt Accommodation — Homestay & Off-Campus Housing",
      "Workshops, Camps & Ongoing Programmes",
      "Institutional Partnerships",
    ],
    clients: ["Schools & Universities", "Host Families", "Cultural Partners", "Global Institutions"],
    metrics: [
      { value: "100%", label: "Compliant Homestays" },
      { value: "CPA", label: "Audited" },
      { value: "Global", label: "Footprint" },
    ],
    synergy: [
      "Shared MELT Global leadership with Melt Live and Melt Media",
      "Cultural exchange tie-ins with MENA tourism programmes via Melt Live",
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
  "Aerospace & Supply Chain",
  "Logistics & Transport",
  "Healthcare & Insurance",
  "Media & Entertainment",
  "Education & Development",
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
  "Leonardo",
  "Airbus",
];

export const HEADLINE_METRICS = [
  { value: "9", label: "Verticals" },
  { value: "6+", label: "Countries" },
  { value: "500+", label: "Employees" },
  { value: "50,000+", label: "Clients Served" },
];
