export interface Product {
  id: string;
  handle: string;
  title: string;
  shortTitle: string;
  category: string;
  badge: string;
  price: string;
  tagline: string;
  description: string;
  highlights: string[];
  lengths: string[];
  images: string[];
  storeUrl: string;
  amazonUrl: string;
  specs: {
    bandwidth: string;
    resolution: string;
    connector: string;
    outerDiameter: string;
    coreConstruction: string;
    jacketRating: string;
    audioSupport: string;
    powerConsumption: string;
    conduitPullFriendly: string;
  };
}

export interface NewsItem {
  id: number;
  slug: string;
  date: string;
  title: string;
  category: 'Awards' | 'Product Releases' | 'Certifications' | 'Video Reviews';
  excerpt: string;
  content: string;
  image?: string;
  youtubeId?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  category: string;
  validity: string;
  file: string;
  summary: string;
}

export interface ReviewItem {
  author: string;
  role: string;
  cable: string;
  quote: string;
  source: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'P01',
    handle: 'ruipro-8k-gen4ak-detachable-full-fiber-armored-hdmi-cable',
    title: 'RUIPRO 8K Detachable Full Fiber Optic Armored HDMI 2.1 Cable',
    shortTitle: '8K Gen4AK Detachable Armored HDMI',
    category: 'HDMI Cables',
    badge: 'Detachable Armored Flagship',
    price: '.42',
    tagline: 'Slim detachable micro-HDMI head engineered to pull easily through tight conduits.',
    description: 'RUIPRO Gen4AK combines pure optical signal transmission with an ultra-rugged stainless steel armored spiral sheath and detachable connector heads. Designed specifically for long in-wall installations where standard HDMI plugs cannot pass through conduits.',
    highlights: [
      'Compatible with HDMI 2.1 standard (48Gbps data rate)',
      'Detachable connector ends pass through 3/4-inch (20mm) conduits with ease',
      'Stainless steel spiral armor delivers crush, kink, and rodent protection',
      'Supports 8K@60Hz, 4K@120Hz, Dynamic HDR, eARC, VRR, ALLM, QFT',
      'Ultra-low power consumption under 250mW, no external power required'
    ],
    lengths: ['3m (10ft)', '5m (16ft)', '10m (33ft)', '15m (50ft)', '20m (65ft)', '30m (100ft)', '50m (165ft)', '100m (328ft)'],
    images: [
      '/images/products/ruipro-8k-gen4ak-detachable-full-fiber-armored-hdmi-cable/image_1.jpg',
      '/images/products/ruipro-8k-gen4ak-detachable-full-fiber-armored-hdmi-cable/image_2.jpg',
      '/images/products/ruipro-8k-gen4ak-detachable-full-fiber-armored-hdmi-cable/image_3.jpg',
      '/images/products/ruipro-8k-gen4ak-detachable-full-fiber-armored-hdmi-cable/image_4.jpg'
    ],
    storeUrl: 'https://ruipro.store/collections/all/products/ruipro-8k-gen4ak-detachable-full-fiber-armored-hdmi-cable',
    amazonUrl: 'https://www.amazon.com/dp/B0BTGG3GTF?th=1',
    specs: {
      bandwidth: '48Gbps (12Gbps x 4 Channels)',
      resolution: 'Up to 8K@60Hz, 4K@120Hz, 10K@30Hz',
      connector: 'Detachable HDMI Type A with Micro HDMI sub-connector',
      outerDiameter: '4.8mm armored profile (12.5mm pull head diameter)',
      coreConstruction: '4-core pure OM3 optical fiber plus 7-core copper auxiliary',
      jacketRating: 'Flexible TPE with internal stainless steel spiral armor',
      audioSupport: 'Enhanced Audio Return Channel (eARC), Dolby Atmos, DTS:X',
      powerConsumption: 'Under 250mW (powered directly from source HDMI pin 18)',
      conduitPullFriendly: 'Yes, protective pulling capsule included in packaging'
    }
  },
  {
    id: 'P02',
    handle: 'ruipro-8k-armored-full-fiber-optic-hdmi-2-1-cable',
    title: 'RUIPRO 8K Armored Full Fiber Optic HDMI 2.1 Cable',
    shortTitle: '8K Armored Pure Fiber HDMI 2.1',
    category: 'HDMI Cables',
    badge: 'Heavy-Duty Steel Armor',
    price: '.99',
    tagline: 'Crush-proof stainless steel armored optical cable for extreme durability.',
    description: 'Built for rigorous environments including rental staging, active gaming desks, and crawl spaces. Features an inner continuous spiral steel wrap protecting the internal optical glass fibers from crushing or severe pinching.',
    highlights: [
      'Uncompressed 48Gbps HDMI 2.1 specification support',
      'Stainless steel armored layer resists up to 200kg of compression force',
      'Zero EMI and RFI interference from adjacent power cables',
      'Supports 4K@120Hz gaming, VRR, ALLM, and 12-bit RGB 4:4:4 color',
      'Directional color-coded zinc alloy connector housings'
    ],
    lengths: ['2m (6.6ft)', '3m (10ft)', '5m (16ft)', '7.6m (25ft)', '10m (33ft)', '15m (50ft)', '20m (65ft)', '30m (100ft)'],
    images: [
      '/images/products/ruipro-8k-armored-full-fiber-optic-hdmi-2-1-cable/image_1.jpg',
      '/images/products/ruipro-8k-armored-full-fiber-optic-hdmi-2-1-cable/image_2.jpg',
      '/images/products/ruipro-8k-armored-full-fiber-optic-hdmi-2-1-cable/image_3.jpg',
      '/images/products/ruipro-8k-armored-full-fiber-optic-hdmi-2-1-cable/image_4.jpg'
    ],
    storeUrl: 'https://ruipro.store/collections/all/products/ruipro-8k-armored-full-fiber-optic-hdmi-2-1-cable',
    amazonUrl: 'https://www.amazon.com/dp/B0BTGG3GTF?th=1',
    specs: {
      bandwidth: '48Gbps full bandwidth',
      resolution: '8K@60Hz, 4K@120Hz, 4K@144Hz',
      connector: 'Standard HDMI Type A Male to Male (Gold Plated)',
      outerDiameter: '4.8mm',
      coreConstruction: '4 optical fiber cores with stainless steel armored sleeve',
      jacketRating: 'High-flexibility PVC jacket over steel layer',
      audioSupport: 'eARC, ARC, 32 audio channels, Dolby TrueHD',
      powerConsumption: '< 250mW',
      conduitPullFriendly: 'Standard pull (fits 1-inch conduits)'
    }
  },
  {
    id: 'P03',
    handle: '8k-detachable-full-fiber-optic-armored-displayport-cable',
    title: 'RUIPRO 8K Detachable Full Fiber Optic Armored DisplayPort 1.4 Cable',
    shortTitle: '8K Detachable Armored DisplayPort 1.4',
    category: 'DisplayPort Cables',
    badge: '32.4Gbps Esports Grade',
    price: '.99',
    tagline: 'High refresh rate DisplayPort optical cable with detachable pull heads.',
    description: 'Designed for high-end PC gaming battle stations, simulation cockpits, and multi-monitor workstations. Transmits full DisplayPort 1.4 HBR3 bandwidth over long distances with zero latency and zero frame drops.',
    highlights: [
      'DisplayPort 1.4 compliant with 32.4Gbps aggregate bandwidth',
      'Supports 8K@60Hz, 4K@144Hz, 4K@240Hz, and 2K@360Hz refresh rates',
      'Detachable connector system allows effortless in-wall routing',
      'Supports DSC 1.2, HDR, HDCP 2.2, and FreeSync / G-Sync compatible',
      'Armored stainless steel core protects against chair wheel rolls and twists'
    ],
    lengths: ['3m (10ft)', '5m (16ft)', '10m (33ft)', '15m (50ft)', '20m (65ft)', '30m (100ft)', '50m (165ft)'],
    images: [
      '/images/products/8k-detachable-full-fiber-optic-armored-displayport-cable/image_1.jpg',
      '/images/products/8k-detachable-full-fiber-optic-armored-displayport-cable/image_2.jpg',
      '/images/products/8k-detachable-full-fiber-optic-armored-displayport-cable/image_3.jpg',
      '/images/products/8k-detachable-full-fiber-optic-armored-displayport-cable/image_4.jpg'
    ],
    storeUrl: 'https://ruipro.store/collections/all/products/8k-detachable-full-fiber-optic-armored-displayport-cable',
    amazonUrl: 'https://www.amazon.com/dp/B0BTGG3GTF?th=1',
    specs: {
      bandwidth: '32.4Gbps (HBR3)',
      resolution: '8K@60Hz, 4K@144Hz/240Hz, 1440p@360Hz',
      connector: 'DisplayPort Male with detachable quick-lock shell',
      outerDiameter: '4.8mm armored',
      coreConstruction: 'OM3 Multimode Optical Fiber with steel armor wrap',
      jacketRating: 'High-tensile PVC',
      audioSupport: '8-channel LPCM, high-resolution audio pass-through',
      powerConsumption: '< 200mW',
      conduitPullFriendly: 'Yes, detachable module with pulling cap'
    }
  },
  {
    id: 'P04',
    handle: '8k-displayport-to-hdmi-detachable-modules',
    title: 'RUIPRO 8K Full Fiber Optic DisplayPort to HDMI Detachable Modules',
    shortTitle: 'DP to HDMI Detachable Modules',
    category: 'Modules & Extenders',
    badge: 'Modular Cross-Platform',
    price: '.99',
    tagline: 'Interchangeable optical connector modules for versatile AV conversions.',
    description: 'Transform your RUIPRO optical cable system across interface standards. These detachable modular transceiver heads convert DisplayPort source signals into HDMI display inputs with active signal regeneration.',
    highlights: [
      'Modular snap-fit connection to RUIPRO detachable trunk cables',
      'Converts DisplayPort 1.4 source to HDMI 2.1 display seamlessly',
      'Supports high resolution up to 8K@60Hz and 4K@120Hz',
      'Direct metallic locking mechanism prevents accidental disconnects',
      'Enables modular upgrades without pulling new cables through walls'
    ],
    lengths: ['Modular Head Pair (Tx and Rx)'],
    images: [
      '/images/products/8k-displayport-to-hdmi-detachable-modules/image_1.jpg',
      '/images/products/8k-displayport-to-hdmi-detachable-modules/image_2.jpg',
      '/images/products/8k-displayport-to-hdmi-detachable-modules/image_3.jpg',
      '/images/products/8k-displayport-to-hdmi-detachable-modules/image_4.jpg'
    ],
    storeUrl: 'https://ruipro.store/collections/all/products/8k-displayport-to-hdmi-detachable-modules',
    amazonUrl: 'https://www.amazon.com/dp/B0BTGG3GTF?th=1',
    specs: {
      bandwidth: 'Up to 48Gbps adaptive',
      resolution: '8K@60Hz, 4K@120Hz',
      connector: 'DisplayPort 1.4 Source (Tx) to HDMI 2.1 Display (Rx)',
      outerDiameter: 'Module interface size: 14mm x 18mm',
      coreConstruction: 'Optoelectronic active conversion circuitry',
      jacketRating: 'Precision CNC aluminum alloy housing',
      audioSupport: 'Dolby Atmos, DTS:X, 7.1 surround sound',
      powerConsumption: '< 300mW',
      conduitPullFriendly: 'Connects after cable is pulled'
    }
  },
  {
    id: 'P05',
    handle: 'ruipro-mpo-female-to-female-fiber-optic-cable-7-core-type-a-om3-multimode',
    title: 'RUIPRO MPO Female to Female Full Fiber Optic Armored Cable 7-Core OM3',
    shortTitle: 'MPO 7-Core OM3 Trunk Cable',
    category: 'Bulk Fiber & Accessories',
    badge: 'Pure Optical Backbone',
    price: '.99',
    tagline: 'Future-proof optical backbone for enterprise and residential AV distribution.',
    description: 'The definitive optical trunk cable for modern architectural installations. Terminated with ultra-compact MPO connectors that mate directly with RUIPRO detachable HDMI and DisplayPort modules or wall plates.',
    highlights: [
      '7-core OM3 multimode fiber construction (Type A polarity)',
      'Armored steel outer sheath ensures zero degradation in walls or underground',
      'Pull diameter under 12mm fits standard 16mm/20mm electrical conduits',
      'Supports bandwidth beyond 100Gbps for next-generation AV formats',
      'Zero copper conductors inside trunk prevents ground loops and electrical surges'
    ],
    lengths: ['5m (16ft)', '10m (33ft)', '15m (50ft)', '20m (65ft)', '30m (100ft)', '50m (165ft)', '100m (328ft)'],
    images: [
      '/images/products/ruipro-mpo-female-to-female-fiber-optic-cable-7-core-type-a-om3-multimode/image_1.jpg',
      '/images/products/ruipro-mpo-female-to-female-fiber-optic-cable-7-core-type-a-om3-multimode/image_2.jpg',
      '/images/products/ruipro-mpo-female-to-female-fiber-optic-cable-7-core-type-a-om3-multimode/image_3.jpg',
      '/images/products/ruipro-mpo-female-to-female-fiber-optic-cable-7-core-type-a-om3-multimode/image_4.jpg'
    ],
    storeUrl: 'https://ruipro.store/collections/all/products/ruipro-mpo-female-to-female-fiber-optic-cable-7-core-type-a-om3-multimode',
    amazonUrl: 'https://www.amazon.com/dp/B0BTGG3GTF?th=1',
    specs: {
      bandwidth: '100Gbps+ optical capacity',
      resolution: 'Protocol agnostic (determined by transceiver modules)',
      connector: 'MPO Female to MPO Female (7-Core active)',
      outerDiameter: '4.8mm stainless steel armored',
      coreConstruction: 'Corning OM3 50/125um multimode optical fiber',
      jacketRating: 'LSZH (Low Smoke Zero Halogen) / Armored',
      audioSupport: 'Full digital bitstream support',
      powerConsumption: '0mW (passive optical glass)',
      conduitPullFriendly: 'Ultra-easy pull with compact MPO capsule'
    }
  },
  {
    id: 'P06',
    handle: 'keystone-wall-plate-with-mpo-coupler',
    title: 'RUIPRO Keystone Wall Plate with MPO Coupler',
    shortTitle: 'MPO Architectural Wall Plate',
    category: 'Bulk Fiber & Accessories',
    badge: 'Clean Wall Finish',
    price: '.99',
    tagline: 'Professional architectural finish for in-wall optical cable terminations.',
    description: 'Provide an elegant, clean finish for in-wall fiber optic runs in luxury home theaters, meeting rooms, and studio patch bays. Features high-grade MPO optical couplers in a standard single-gang keystone wall plate.',
    highlights: [
      'Standard single-gang decorative wall plate form factor',
      'Integrated precision ceramic sleeve MPO fiber coupler',
      'Clean low-profile architectural design in crisp white',
      'Eliminates dangling cables and wall conduit openings',
      'Compatible with RUIPRO detachable fiber systems and patch cables'
    ],
    lengths: ['Standard Single Gang', 'Double Gang Options Available'],
    images: [
      '/images/products/keystone-wall-plate-with-mpo-coupler/image_1.jpg',
      '/images/products/keystone-wall-plate-with-mpo-coupler/image_2.jpg',
      '/images/products/keystone-wall-plate-with-mpo-coupler/image_3.jpg',
      '/images/products/keystone-wall-plate-with-mpo-coupler/image_4.jpg'
    ],
    storeUrl: 'https://ruipro.store/collections/all/products/keystone-wall-plate-with-mpo-coupler',
    amazonUrl: 'https://www.amazon.com/dp/B0BTGG3GTF?th=1',
    specs: {
      bandwidth: 'Passive optical pass-through (>100Gbps)',
      resolution: 'Native source resolution',
      connector: 'MPO Female Front to MPO Female Back Coupler',
      outerDiameter: 'Fits standard US single gang wall box',
      coreConstruction: 'High-durability ABS faceplate with precision coupler',
      jacketRating: 'Flame retardant UL94V-0',
      audioSupport: 'Full pass-through',
      powerConsumption: '0mW passive',
      conduitPullFriendly: 'Terminates in-wall conduit runs cleanly'
    }
  },
  {
    id: 'P07',
    handle: '8k-hdmi-fiber-cable-cl2-rated',
    title: 'RUIPRO 8K Fiber Optic HDMI Cable CL2 Rated 48Gbps',
    shortTitle: '8K HDMI Fiber Cable CL2 Rated',
    category: 'HDMI Cables',
    badge: 'Building Code Certified CL2',
    price: '.99',
    tagline: 'In-wall fire code safety certified optical HDMI cable.',
    description: 'Engineered specifically to satisfy national electrical and building safety codes for in-wall installations. The CL2-rated jacket formulation provides verified flame resistance and low smoke emission without compromising optical flexibility.',
    highlights: [
      'CL2 rated for safe in-wall residential and commercial installation',
      'Full 48Gbps bandwidth supporting uncompressed 8K@60Hz and 4K@120Hz',
      'Flexible tight bend radius allows smooth 90-degree corner routing',
      'Full support for eARC, Dynamic HDR, Dolby Vision, and HDR10+',
      'Directional zinc alloy plugs with anti-corrosion gold-plated pins'
    ],
    lengths: ['5m (16ft)', '10m (33ft)', '15m (50ft)', '20m (65ft)', '30m (100ft)', '50m (165ft)'],
    images: [
      '/images/products/8k-hdmi-fiber-cable-cl2-rated/image_1.jpg',
      '/images/products/8k-hdmi-fiber-cable-cl2-rated/image_2.jpg',
      '/images/products/8k-hdmi-fiber-cable-cl2-rated/image_3.jpg',
      '/images/products/8k-hdmi-fiber-cable-cl2-rated/image_4.jpg'
    ],
    storeUrl: 'https://ruipro.store/collections/all/products/8k-hdmi-fiber-cable-cl2-rated',
    amazonUrl: 'https://www.amazon.com/dp/B0BTGG3GTF?th=1',
    specs: {
      bandwidth: '48Gbps HDMI 2.1 Standard',
      resolution: '8K@60Hz, 4K@120Hz',
      connector: 'HDMI Type A Male to Male',
      outerDiameter: '4.8mm slim profile',
      coreConstruction: '4-core OM3 optical fiber plus 7-core copper auxiliary',
      jacketRating: 'CL2 In-Wall Flame Retardant Rated',
      audioSupport: 'Enhanced Audio Return Channel (eARC), Dolby Atmos',
      powerConsumption: '< 250mW',
      conduitPullFriendly: 'Flexible routing for residential wall cavities'
    }
  },
  {
    id: 'P08',
    handle: '8k-hdmi-fiber-cable',
    title: 'RUIPRO 8K Fiber Optic HDMI Cable 48Gbps Standard Series',
    shortTitle: '8K HDMI Fiber Cable Standard',
    category: 'HDMI Cables',
    badge: 'Ultra-Flexible Best Seller',
    price: '.99',
    tagline: 'The world-renowned flexible optical HDMI cable for home theaters.',
    description: 'The standard-bearer that established RUIPRO as an enthusiast favorite on AV forums worldwide. Delivers uncompromising 48Gbps video and audio transmission across runs up to 300 meters with unprecedented cable flexibility.',
    highlights: [
      'Uncompressed 48Gbps optical transmission for 8K video',
      'Ultra-thin 4.8mm outer diameter with extraordinary flexibility',
      'Immune to radio frequency and electromagnetic interference',
      'Tested and acclaimed by enthusiast AV publications and forum users',
      'Zero signal latency for precision gaming and live broadcast'
    ],
    lengths: ['2m (6.6ft)', '3m (10ft)', '5m (16ft)', '10m (33ft)', '15m (50ft)', '20m (65ft)', '30m (100ft)', '50m (165ft)'],
    images: [
      '/images/products/8k-hdmi-fiber-cable/image_1.jpg',
      '/images/products/8k-hdmi-fiber-cable/image_2.jpg',
      '/images/products/8k-hdmi-fiber-cable/image_3.jpg',
      '/images/products/8k-hdmi-fiber-cable/image_4.jpg'
    ],
    storeUrl: 'https://ruipro.store/collections/all/products/8k-hdmi-fiber-cable',
    amazonUrl: 'https://www.amazon.com/dp/B0BTGG3GTF?th=1',
    specs: {
      bandwidth: '48Gbps HDMI 2.1',
      resolution: '8K@60Hz, 4K@120Hz, 4K@144Hz',
      connector: 'HDMI Type A Male to Male (Gold Plated Contacts)',
      outerDiameter: '4.8mm ultra-slim',
      coreConstruction: '4-core multimode optical fiber with copper auxiliary',
      jacketRating: 'High-grade flexible PVC',
      audioSupport: 'eARC, ARC, 32-channel audio pass-through',
      powerConsumption: '< 250mW',
      conduitPullFriendly: 'Fits standard cable pass-throughs'
    }
  },
  {
    id: 'P09',
    handle: 'ruipro-8k-fiber-hdmi-cable-48gbps-certified',
    title: 'RUIPRO 8K Fiber Optic HDMI 2.1b Cable 48Gbps Certified',
    shortTitle: '8K Fiber HDMI Cable 48Gbps ATC Certified',
    category: 'HDMI Cables',
    badge: 'HDMI Forum ATC Certified',
    price: '.99',
    tagline: 'Officially certified by HDMI Forum Authorized Test Centers.',
    description: 'Backed by official HDMI Forum ATC test certifications across multiple lengths (7.6m, 10m, and 15m). Guaranteed to comply with every facet of the HDMI 2.1b Ultra High Speed specification, including low EMI emissions.',
    highlights: [
      'Official HDMI Forum Authorized Test Center (ATC) certification',
      'Verified 48Gbps uncompressed transmission up to 15m and beyond',
      'Comprehensive compliance with eARC, VRR, ALLM, and QMS',
      'Engineered by SUNIIN TECHNOLOGY with proprietary optical transceivers',
      'Includes verifiable HDMI Forum holographic verification QR label'
    ],
    lengths: ['7.6m (25ft)', '10m (33ft)', '15m (50ft)', '20m (65ft)', '30m (100ft)'],
    images: [
      '/images/products/ruipro-8k-fiber-hdmi-cable-48gbps-certified/image_1.jpg',
      '/images/products/ruipro-8k-fiber-hdmi-cable-48gbps-certified/image_2.jpg',
      '/images/products/ruipro-8k-fiber-hdmi-cable-48gbps-certified/image_3.jpg',
      '/images/products/ruipro-8k-fiber-hdmi-cable-48gbps-certified/image_4.jpg'
    ],
    storeUrl: 'https://ruipro.store/collections/all/products/ruipro-8k-fiber-hdmi-cable-48gbps-certified',
    amazonUrl: 'https://www.amazon.com/dp/B0BTGG3GTF?th=1',
    specs: {
      bandwidth: '48Gbps HDMI 2.1b Ultra High Speed',
      resolution: '8K@60Hz, 4K@120Hz uncompressed',
      connector: 'Certified HDMI Type A Male to Male with QR verification label',
      outerDiameter: '4.8mm',
      coreConstruction: '4-core high-bandwidth optical glass plus 7 copper wires',
      jacketRating: 'RoHS and CE certified premium compound',
      audioSupport: 'eARC with uncompressed 24-bit 192kHz multi-channel audio',
      powerConsumption: '< 250mW',
      conduitPullFriendly: 'Standard flexible routing'
    }
  }
];

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    image: '/images/banners/01_banner-detachable-dp_2000x821_v2.png',
    title: '8K Detachable DisplayPort 1.4',
    subtitle: 'Ultra-High Refresh Gaming Without Limits',
    description: 'Conduit-friendly optical architecture transmitting 32.4Gbps for esports, sim racing, and dual-monitor workstations.',
    ctaText: 'Explore DisplayPort Cables',
    ctaLink: '/products?category=DisplayPort+Cables'
  },
  {
    id: 'slide-2',
    image: '/images/banners/02_banner-detachable-hdmi_2000x821.png',
    title: '8K Gen4AK Detachable Armored HDMI',
    subtitle: 'Conduit-Friendly 8K In-Wall Installations',
    description: 'Slim detachable heads pull through tight 3/4-inch conduits effortlessly while stainless steel spiral armor protects your run.',
    ctaText: 'Explore Detachable HDMI',
    ctaLink: '/products/ruipro-8k-gen4ak-detachable-full-fiber-armored-hdmi-cable'
  },
  {
    id: 'slide-3',
    image: '/images/banners/03_banner-conference-room_2000x821.png',
    title: 'Commercial Boardroom & AV Integration',
    subtitle: 'Zero Signal Degradation Over 300 Meters',
    description: 'Deliver crisp 4K/8K corporate presentations, video walls, and medical imaging with total immunity to electromagnetic noise.',
    ctaText: 'Commercial Solutions',
    ctaLink: '/about'
  },
  {
    id: 'slide-4',
    image: '/images/banners/04_banner-hdmi-2-1-gaming_2000x821.png',
    title: 'Next-Gen Console & PC Gaming',
    subtitle: 'Uncompressed 48Gbps 4K@120Hz & 8K@60Hz',
    description: 'Instant response times with zero lag, VRR, ALLM, and full 12-bit RGB 4:4:4 color depth for PS5, Xbox Series X, and RTX 40-Series.',
    ctaText: 'Shop Gaming Range',
    ctaLink: '/products'
  },
  {
    id: 'slide-5',
    image: '/images/banners/05_banner-home-theater-pure-light_2000x821.png',
    title: 'Home Theater Pure Light Transmission',
    subtitle: 'Dolby Vision & Dolby Atmos True Reproduction',
    description: 'Experience laser projectors and OLED screens exactly as directors intended, even when equipment racks are 50 to 100 feet away.',
    ctaText: 'Home Theater Range',
    ctaLink: '/products'
  },
  {
    id: 'slide-6',
    image: '/images/banners/06_banner-dp-1-4-gaming_2000x821.png',
    title: 'DisplayPort 1.4 Heavy-Duty Armored',
    subtitle: 'Ruggedized Optical Performance',
    description: 'Crush-proof stainless steel armor built for high-demand tournament and production environments.',
    ctaText: 'View Catalog',
    ctaLink: '/products'
  }
];

export const TRUST_METRICS = [
  { value: '11+', label: 'Years Of Establishment' },
  { value: '37+', label: 'Total Dedicated Employees' },
  { value: '39+', label: 'International Distributors' },
  { value: '315,000+', label: 'Cumulative Global Users' }
];

export const REVIEWS: ReviewItem[] = [
  {
    author: 'Wiley Hodges',
    role: 'Home Theater Enthusiast',
    cable: '15m RUIPRO Fiber HDMI Cable',
    source: 'Verified Customer Review',
    quote: 'Heres the solution to my deluxe problem. I have a lovely LG 55 OLED tv, and my AV equipment is about 30 feet away in a closet, due to a campaign against wires. I wanted to view 4K and Dolby Vision from my Apple TV 4K. Alas, my existing HDMI extender solution wasnt even good for 4K/60. This cable delivers. Its flexible enough that it was relatively easy to route through walls and floor holes. It delivers the 18.2Gbps and 48Gbps data rate you need with zero flicker.'
  },
  {
    author: 'Rob Lewis',
    role: 'Audiophile & AV Reviewer',
    cable: '10m RUIPRO Fiber Cable',
    source: 'AV Forum Benchmark',
    quote: 'I ran the 10m Ruipro cable around the room to give it a good run. Changed all of the Oppo player settings so that it would run at max bandwidth, and the Ruipro passed with flying colours. The final test was Billy Lynns Long Halftime Walk 4K UHD which runs at 60FPS, and again the Ruipro had absolutely no issues. Best solution on the market.'
  },
  {
    author: 'OLED Forum Community Member',
    role: 'Custom AV Installer',
    cable: '50ft RUIPRO Optical Cable',
    source: 'Enthusiast Forum Feedback',
    quote: 'Took a chance and ordered 50ft HDMI with ethernet. Always had problems with traditional copper cables marking certified for long distances. Bought 4 Ruipro fiber cables and ran them across the room. What a difference. Everything works and not a single screen flicker. You get what you pay for.'
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'HDMI Forum ATC Testing Confirmation (15m)',
    category: 'HDMI 2.1 ATC Certification',
    validity: 'Model SNAOC21V101A (15 Meters)',
    file: '/docs/certificates/HDMI-Forum-ATC-SNAOC21V101A-15m.pdf.pdf',
    summary: 'Official Authorized Test Center (ATC) laboratory test report confirming uncompressed 48Gbps compliance at 15 meters length.'
  },
  {
    id: 'cert-2',
    title: 'HDMI Forum ATC Testing Confirmation (10m)',
    category: 'HDMI 2.1 ATC Certification',
    validity: 'Model SNAOC21V101A (10 Meters)',
    file: '/docs/certificates/HDMI-Forum-ATC-SNAOC21V101A-10m.pdf.pdf',
    summary: 'ATC test confirmation certifying full bandwidth, low EMI interference, and eARC support on 10m cable runs.'
  },
  {
    id: 'cert-3',
    title: 'HDMI Forum ATC Testing Confirmation (7.6m)',
    category: 'HDMI 2.1 ATC Certification',
    validity: 'Model SNAOC21V101A (7.6 Meters)',
    file: '/docs/certificates/HDMI-Forum-ATC-SNAOC21V101A-7.6m.pdf.pdf',
    summary: 'Official ATC test confirmation for 7.6m (25ft) cable meeting full Ultra High Speed HDMI 2.1 specifications.'
  },
  {
    id: 'cert-4',
    title: 'SUNIIN Official HDMI Adopter Agreement',
    category: 'HDMI Licensing',
    validity: 'Valid through July 30, 2027',
    file: '/docs/certificates/SUNIIN-HDMI-Adopter-2026-2027.pdf.pdf',
    summary: 'Official HDMI licensing agreement issued under parent corporation SUNIIN TECHNOLOGY CO., LIMITED.'
  },
  {
    id: 'cert-5',
    title: 'CE-EMC Compliance Certificate',
    category: 'European Electromagnetic Compatibility',
    validity: 'SNAOC21V101A Series',
    file: '/docs/certificates/CE-EMC-SNAOC21V101A-Series.pdf.pdf',
    summary: 'Confirms that optical transceivers operate within stringent European electromagnetic radiation thresholds.'
  },
  {
    id: 'cert-6',
    title: 'RoHS Environmental Safety Certificate',
    category: 'Hazardous Substances Compliance',
    validity: 'SNAOC21V101A Series',
    file: '/docs/certificates/RoHS-SNAOC21V101A-Series.pdf.pdf',
    summary: 'Guarantees lead-free, non-toxic manufacturing in full compliance with European RoHS directives.'
  },
  {
    id: 'cert-7',
    title: 'POPs-SCCP Chemical Test Report',
    category: 'Chemical Safety Reference',
    validity: 'SNAOC21V101A Series',
    file: '/docs/certificates/POPs-SCCP-Test-Report-SNAOC21V101A-Series.pdf.pdf',
    summary: 'Supplementary laboratory chemical safety certification verifying absence of short-chain chlorinated paraffins.'
  }
];

export const NEWS_ARTICLES: NewsItem[] = [
  {
    id: 1,
    slug: 'ezyhd-highest-sales-distributor-award-2022',
    date: 'January 10th, 2026',
    title: 'EZYHD Wins Ruipro Highest Sales Distributor Award for 2022',
    category: 'Awards',
    excerpt: 'For the fourth consecutive year, EZYHD has led all international distributors in sales and customer service across Australia and New Zealand.',
    content: 'EZYHD won the Ruipro Highest Sales of all Distributors Award and broke all sales records again in 2022 with strong marketing and customer service throughout Oceania. This marks the fourth year running that EZYHD has led the field in worldwide sales after winning in 2019, 2020, and 2021. RUIPRO extends its sincere appreciation to the entire EZYHD team for their dedication to customer excellence and optical innovation.',
    image: '/images/news/01.jpg'
  },
  {
    id: 2,
    slug: 'ruipro-hdmi-2-1-aoc-passed-atc-testing-10m-7-6m',
    date: 'August 14th, 2022',
    title: 'RUIPRO HDMI 2.1 AOC Cable 10m & 7.6m Passed HDMI Forum ATC Testing',
    category: 'Certifications',
    excerpt: 'Following rigorous laboratory testing, RUIPRO 10m and 7.6m active optical cables have officially received HDMI Forum ATC certification.',
    content: 'Following extensive engineering optimization, RUIPRO HDMI 2.1 AOC cables in 10m and 7.6m lengths have officially passed the HDMI Forum Authorized Test Center (ATC) testing. This milestone reinforces RUIPRO as an industry leader in certified Ultra High Speed connectivity, delivering uncompressed 48Gbps signal integrity across long distances.',
    image: '/images/news/02.jpg'
  },
  {
    id: 3,
    slug: 'ruipro-8k-gen4ak-hdmi-2-1-cable-released',
    date: 'February 25th, 2022',
    title: 'RUIPRO 8K GEN4/AK Full Fiber Armored HDMI Cable Released',
    category: 'Product Releases',
    excerpt: 'Announcing our latest flagship Gen4AK detachable armored cable featuring pure optical architecture and 48Gbps throughput.',
    content: 'RUIPRO has officially released the RUIPRO 8K GEN4/AK full fiber armored HDMI cable. This flagship product combines a detachable connector system that fits narrow conduits with stainless steel armor for unmatched physical protection. It meets all requirements of HDMI 2.1, including uncompressed 8K@60Hz, 4K@120Hz, eARC, and transmission distances up to 300 meters.',
    image: '/images/news/03.jpg'
  },
  {
    id: 4,
    slug: 'ezyhd-highest-sales-award-2021',
    date: 'January 5th, 2022',
    title: 'EZYHD Wins the Ruipro Highest Sales of all Distributors Award in 2021',
    category: 'Awards',
    excerpt: 'EZYHD breaks records again with outstanding technical support and customer satisfaction across Oceania.',
    content: 'EZYHD has won the Ruipro Highest Sales of all Distributors Award for 2021. This is the third year running that EZYHD has led the field in worldwide sales. Their unmatched technical support and proactive advice have made RUIPRO the brand of choice for home theaters throughout Australia and New Zealand.',
    image: '/images/news/04,08.webp'
  },
  {
    id: 5,
    slug: 'ruipro-hdmi-2-1-aoc-15m-passed-atc-testing',
    date: 'September 14th, 2021',
    title: 'RUIPRO HDMI 2.1 AOC Cable 15m Passed HDMI Forum ATC Testing',
    category: 'Certifications',
    excerpt: 'RUIPRO R&D team achieves official HDMI Forum ATC certification for 15-meter optical cable runs.',
    content: 'After extensive work from the RUIPRO R&D engineering team, our 15m HDMI 2.1 AOC cable has passed HDMI Forum ATC testing. As one of the premier optical cable brands globally, this independent laboratory certificate proves the uncompromising quality, low EMI, and uncompressed 48Gbps transmission of our long-distance fiber optic cables.',
    image: '/images/news/05.jpg'
  },
  {
    id: 6,
    slug: 'ruipro-8k-gen3c-version-48gbps-released',
    date: 'February 12th, 2021',
    title: 'RUIPRO Released 8K GEN3/C Version 48Gbps Cable',
    category: 'Product Releases',
    excerpt: 'Support for NVIDIA 3080/3090 GPUs, LG OLED TVs, PS5, and Xbox Series X with full 4K@120Hz 12-bit RGB 4:4:4.',
    content: 'RUIPRO released the 8K GEN3/C version supporting 48Gbps, 4K@120Hz, Dynamic HDR, VRR, and 12-bit RGB 4:4:4 color. Designed specifically to resolve compatibility hurdles with NVIDIA RTX 3080/3090 GPUs, LG CX/C9 OLED displays, and next-generation gaming consoles.',
    image: '/images/news/06.jpg'
  },
  {
    id: 7,
    slug: 'ruipro-certified-hdmi-2-1-copper-cable',
    date: 'January 20th, 2021',
    title: 'RUIPRO Certified HDMI 2.1 Copper Cable Series Announced',
    category: 'Product Releases',
    excerpt: 'High-bandwidth certified copper cables in 1m, 2m, 3m, and 5m lengths for short-run desktop and rack connections.',
    content: 'RUIPRO is fast becoming a favorite HDMI cable choice for home theater enthusiasts. We have added Certified HDMI 2.1 Copper Cables to our range. Suitable for high-bandwidth 8K transmission and 4K@120Hz gaming over short distances (1m to 5m), featuring alloy shells and exceptionally low EMI interference.',
    image: '/images/news/14.jpg'
  },
  {
    id: 8,
    slug: 'ezyhd-won-highest-sales-award-2020',
    date: 'December 23rd, 2020',
    title: 'EZYHD Won the Ruipro Highest Sales Distributor Award for 2020',
    category: 'Awards',
    excerpt: 'Australia distributor EZYHD sets record-breaking sales volumes for RUIPRO optical cables.',
    content: 'EZYHD has won the Ruipro Annual Distributor Award for 2020 with the highest sales volume of all global distributors. We thank the EZYHD team for their tireless advocacy of fiber optic technology and exceptional customer guidance.',
    image: '/images/news/04,08.webp'
  },
  {
    id: 9,
    slug: 'best-hdmi-cables-ps5-xbox-video-review',
    date: 'November 28th, 2020',
    title: 'Best HDMI Cables for PS5 & Xbox! RUIPRO 8K/4K HDMI 2.1 Fiber Review',
    category: 'Video Reviews',
    excerpt: 'Independent gaming hardware video testing RUIPRO optical cables on PlayStation 5 and Xbox Series X.',
    content: 'In-depth video analysis and speed benchmark testing the RUIPRO 8K/4K HDMI 2.1 Fiber Optic cable with next-gen PlayStation 5 and Xbox Series X consoles. Demonstrates zero input lag, full 4K@120Hz operation, and HDR stability.',
    youtubeId: '78TtbTkGr1E'
  },
  {
    id: 10,
    slug: 'ezyhd-won-best-distributor-2019',
    date: 'November 9th, 2019',
    title: 'EZYHD Won the Best Distributor of 2019 Award',
    category: 'Awards',
    excerpt: 'Recognizing outstanding dedication to customer service and technical excellence in Oceania.',
    content: 'EZYHD led the field of distributors worldwide in sales in 2019, following their victory in 2018. A trusted distributor with enthusiastic recommendations across Australia and New Zealand.',
    image: '/images/news/10,15.jpg'
  },
  {
    id: 11,
    slug: 'ultimate-hdmi-cable-ruipro-review-unboxing',
    date: 'June 29th, 2019',
    title: 'The Ultimate HDMI Cable? Ruipro Review & Unboxing',
    category: 'Video Reviews',
    excerpt: 'Comprehensive unboxing and real-world signal testing over long distances.',
    content: 'A comprehensive video review examining cable construction, connector tolerances, and picture quality benchmarks over long distance runs.',
    youtubeId: '2OpmTQCEjsQ'
  },
  {
    id: 12,
    slug: 'ruipro-4k-fiber-hdmi-review-picture-quality',
    date: 'April 9th, 2019',
    title: 'Ruipro 4K Fiber HDMI Review - Best Picture Quality?',
    category: 'Video Reviews',
    excerpt: 'Evaluating optical transmission purity against conventional copper HDMI cables.',
    content: 'Detailed laboratory evaluation demonstrating signal clarity and zero bit-error rates of RUIPRO active optical cables on high-end 4K HDR displays.',
    youtubeId: 'UDi7-Yd9wUQ'
  },
  {
    id: 13,
    slug: 'winner-for-highest-sales-in-2018',
    date: 'January 24th, 2019',
    title: 'The Winner for the Highest Sales in 2018 Announced',
    category: 'Awards',
    excerpt: 'EZYHD recognized for exceptional market leadership in Australia.',
    content: 'As the winner for highest sales of all Ruipro distributors worldwide in 2018, EZYHD has demonstrated astounding market penetration across Australia due to cable quality and professional advice.',
    image: '/images/news/Rui-Award12-17-12-17-14-42-52-300x216.png'
  },
  {
    id: 14,
    slug: 'ruipro-8k-fiber-hdmi-cable-released-2019',
    date: 'January 11th, 2019',
    title: 'RUIPRO 8K Fiber HDMI Cable Released in January 2019',
    category: 'Product Releases',
    excerpt: 'Pioneering early 8K fiber optic technology for ultra-high-definition future-proofing.',
    content: 'RUIPRO officially released the RUIPRO 8K Fiber HDMI Cable in January 2019, pioneering long-distance optical bandwidth for the emerging 8K ecosystem.',
    image: '/images/news/14.jpg'
  },
  {
    id: 15,
    slug: 'recipient-of-2018-highest-sales-award',
    date: 'December 27th, 2018',
    title: 'The Recipient of 2018 Highest Sales Award Worldwide',
    category: 'Awards',
    excerpt: 'EZYHD honors mark the establishment of RUIPRO brand leadership in Oceania.',
    content: 'The recipient of this years highest sales award worldwide goes to EZYHD, our Ruipro distributor in Australia and NZ. We thank them for their mighty sales effort.',
    image: '/images/news/10,15.jpg'
  },
  {
    id: 16,
    slug: 'ruipro-4k-fiber-hdmi-cable-unboxing-long-solution',
    date: 'July 1st, 2018',
    title: 'RUIPRO 4K Fiber HDMI Cable Unboxing: The Long Cable Solution!',
    category: 'Video Reviews',
    excerpt: 'Practical demonstration of installing optical cables in ceiling cavities and long runs.',
    content: 'Hands-on unboxing and installation walkthrough demonstrating how RUIPRO active optical cables resolve distance limitations in custom home theaters.',
    youtubeId: 'XoCwExeosx8'
  },
  {
    id: 17,
    slug: 'test-cable-hdmi-2-0-ruipro-12-metros',
    date: 'May 22nd, 2018',
    title: 'TEST Cable HDMI 2.0 RUIPRO 12 Metros 4K 60Hz Croma 4:4:4 Prueba Superada!',
    category: 'Video Reviews',
    excerpt: 'Spanish language laboratory stress-test of RUIPRO 12m optical cable under full 4:4:4 chroma load.',
    content: 'Comprehensive testing in Spanish showcasing flawless 4K 60Hz 4:4:4 chroma transmission over 12 meters with zero frame artifacts or sparkle errors.',
    youtubeId: '0aRDNsuUKXY'
  }
];

export const APPLICATIONS = [
  {
    id: 'app-1',
    title: 'High-End Home Theaters',
    description: 'Connect 4K/8K projectors and OLED displays to distant equipment racks with zero signal flicker and full Dolby Atmos reproduction.',
    image: '/images/application/home theater.jpg'
  },
  {
    id: 'app-2',
    title: 'Commercial Boardrooms & AV',
    description: 'Reliable long-distance optical routing across conference rooms, auditoriums, and video walls with zero interference.',
    image: '/images/application/conference.jpg'
  },
  {
    id: 'app-3',
    title: 'Broadcast & Production Studios',
    description: 'Zero frame dropping, uncompressed 12-bit color transmission, and rugged armored protection for demanding live studio environments.',
    image: '/images/application/studio.jpg'
  },
  {
    id: 'app-4',
    title: 'Medical Visualization & Command Centers',
    description: 'Immunity to high electromagnetic fields in medical imaging suites and surgical displays where signal fidelity is critical.',
    image: '/images/application/Medical scene.jpg'
  }
];

export const DISTRIBUTORS = [
  {
    region: 'Mainland China, Hong Kong & Macao',
    distributor: 'Guangzhou Kejun Technology Co., Ltd. (广州市可君科技有限公司)',
    contactPerson: 'Official Authorized Distributor',
    phone: '13602763839 (Tel / WeChat)',
    email: 'gztopsound@hotmail.com',
    notice: 'Customers in Mainland China, Hong Kong, and Macao must purchase through Guangzhou Kejun Technology for regional warranty and technical support. Direct online orders from ruipro.com or Amazon are not eligible for warranty in these territories.'
  },
  {
    region: 'Australia & New Zealand',
    distributor: 'EZYHD Australia',
    contactPerson: 'Official National Distributor (Four-Time Annual Sales Award Winner)',
    website: 'https://www.ruipro.com/contact-us/',
    notes: 'Providing sales, stock, and local technical advice across Australia and New Zealand.'
  },
  {
    region: 'United States & Americas',
    distributor: 'RUIPRO Direct / SUNIIN Technology US',
    address: '101 Convention Center Dr Ste 900, Las Vegas, NV 89109',
    phone: '+86 182 6783 3801 (WhatsApp Business)',
    email: 'support@ruipro.com',
    storeUrl: 'https://ruipro.store/'
  },
  {
    region: 'Europe (Spain, Italy, Finland) & International',
    distributor: 'RUIPRO International Distribution Network',
    contactPerson: 'Global Channel Partner Management',
    email: 'support@ruipro.com',
    notes: 'Direct distributor inquiries for Spain, Italy, Finland, Israel, Brazil, and Paraguay are handled through our central portal.'
  }
];
