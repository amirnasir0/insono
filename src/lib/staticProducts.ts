export interface StaticProduct {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: string;
  category: string[];
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  mrp: number | null;
  unit?: string;
}

export const STATIC_PRODUCTS: StaticProduct[] = [
  // Signia
  {
    id: "signia-1",
    title: "Signia Pure Charge&Go BCT IX",
    slug: "pure-cg-bct-ix",
    description: "Bluetooth Classic connectivity for more device compatibility",
    price: "Contact for price",
    category: ["signia", "ric", "rechargeable", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/pure-cg-bct-ix.png"
      }
    },
    mrp: 84990,
    unit: "per ear"
  },
  {
    id: "signia-2",
    title: "Signia Styletto IX",
    slug: "styletto-ix",
    description: "Slim rechargeable design with all-day comfort",
    price: "Contact for price",
    category: ["signia", "ric", "rechargeable", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/styletto-ix.png"
      }
    },
    mrp: 129990,
    unit: "per pair"
  },
  {
    id: "signia-3",
    title: "Signia Insio Charge&Go IX",
    slug: "insio-ix",
    description: "Custom-made fit for personalized comfort",
    price: "Contact for price",
    category: ["signia", "cic", "iic", "ite", "itc", "invisible", "rechargeable", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/insio-ix.png"
      }
    },
    mrp: 109990,
    unit: "per ear"
  },
  {
    id: "signia-4",
    title: "Signia Silk Charge&Go IX",
    slug: "signia-silk-charge-go-5ix-itc",
    description: "Instant-fit design with no custom mould required",
    price: "Contact for price",
    category: ["signia", "cic", "iic", "invisible", "rechargeable", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/signia-silk-charge-go-5ix-itc.png"
      }
    },
    mrp: 184990,
    unit: "per pair"
  },
  {
    id: "signia-5",
    title: "Signia Motion Charge&Go IX",
    slug: "signia-motion-ix",
    description: "Powerful behind-the-ear design for all-day comfort",
    price: "Contact for price",
    category: ["signia", "bte", "rechargeable", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/signia-motion-ix.png"
      }
    },
    mrp: 104990,
    unit: "per ear"
  },

  // Phonak
  {
    id: "phonak-1",
    title: "Phonak Audéo Sphere Infinio",
    slug: "infinio-sphere",
    description: "AI-powered speech clarity in noisy environments",
    price: "Contact for price",
    category: ["phonak", "ric", "rechargeable", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/infinio-sphere.webp"
      }
    },
    mrp: 590000,
    unit: "per pair"
  },
  {
    id: "phonak-2",
    title: "Phonak Audéo Infinio",
    slug: "phonak-audeo-infinio",
    description: "Premium rechargeable hearing with advanced connectivity",
    price: "Contact for price",
    category: ["phonak", "ric", "rechargeable", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/phonak-audeo-infinio.png"
      }
    },
    mrp: null
  },
  {
    id: "phonak-3",
    title: "Phonak Virto Infinio",
    slug: "phonak-virto-infinio",
    description: "Custom-made design for a personalized fit and comfort",
    price: "Contact for price",
    category: ["phonak", "ite", "itc", "cic", "iic", "invisible", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/phonak-virto-infinio.png"
      }
    },
    mrp: null
  },
  {
    id: "phonak-4",
    title: "Phonak CROS Infinio",
    slug: "phonak-cros-infinio",
    description: "Designed for single-sided hearing loss with seamless sound transmission",
    price: "Contact for price",
    category: ["phonak", "ric", "bte", "rechargeable", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/phonak-cros-infinio.png"
      }
    },
    mrp: null
  },
  {
    id: "phonak-5",
    title: "Phonak Naída Lumity",
    slug: "phonak-naida-lumity",
    description: "Powerful BTE performance for severe-to-profound hearing loss",
    price: "Contact for price",
    category: ["phonak", "bte", "rechargeable", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/phonak-naida-lumity.png"
      }
    },
    mrp: 175000,
    unit: "per ear"
  },

  // Widex
  {
    id: "widex-1",
    title: "Widex SmartRIC",
    slug: "smartric-widex",
    description: "Slim rechargeable design with enhanced speech focus",
    price: "Contact for price",
    category: ["widex", "ric", "rechargeable", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/smartric-widex.png"
      }
    },
    mrp: 155000,
    unit: "per ear"
  },
  {
    id: "widex-2",
    title: "Widex Moment Sheer",
    slug: "widex-moment-sheer",
    description: "PureSound technology for an ultra-natural listening experience",
    price: "Contact for price",
    category: ["widex", "ric", "rechargeable", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/widex-moment-sheer.png"
      }
    },
    mrp: 140000,
    unit: "per ear"
  },
  {
    id: "widex-3",
    title: "Widex Moment",
    slug: "widex-moment",
    description: "ZeroDelay technology for fast and natural sound processing",
    price: "Contact for price",
    category: ["widex", "ric", "bte", "cic", "ite", "itc", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/widex-moment.png"
      }
    },
    mrp: 140000,
    unit: "per ear"
  },
  {
    id: "widex-4",
    title: "Widex Magnify",
    slug: "widex-magnify",
    description: "Advanced technology for clearer speech and better listening comfort",
    price: "Contact for price",
    category: ["widex", "ric", "bte", "cic", "ite", "itc", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/widex-magnify.png"
      }
    },
    mrp: 59990,
    unit: "per ear"
  },
  {
    id: "widex-5",
    title: "Widex Allure",
    slug: "widex-allure",
    description: "Advanced sound technology for naturally clear hearing",
    price: "Contact for price",
    category: ["widex", "ric", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/widex-allure.png"
      }
    },
    mrp: null
  },

  // Oticon
  {
    id: "oticon-1",
    title: "Oticon Intent",
    slug: "oticon-intent",
    description: "Personalized hearing support with 4D Sensor technology",
    price: "Contact for price",
    category: ["oticon", "ric", "rechargeable", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/oticon-intent.png"
      }
    },
    mrp: 80000,
    unit: "per ear"
  },
  {
    id: "oticon-2",
    title: "Oticon Zeal",
    slug: "oticon-zeal",
    description: "Discreet in-the-ear design with advanced connectivity",
    price: "Contact for price",
    category: ["oticon", "ite", "itc", "cic", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/oticon-zeal.png"
      }
    },
    mrp: null
  },
  {
    id: "oticon-3",
    title: "Oticon Real",
    slug: "oticon-real",
    description: "BrainHearing technology for clearer and more natural sound",
    price: "Contact for price",
    category: ["oticon", "ric", "rechargeable", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/oticon-real.png"
      }
    },
    mrp: null
  },
  {
    id: "oticon-4",
    title: "Oticon Own",
    slug: "oticon-own",
    description: "Custom-made design for a personalized and comfortable fit",
    price: "Contact for price",
    category: ["oticon", "cic", "iic", "ite", "itc", "invisible", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/oticon-own.png"
      }
    },
    mrp: 175000,
    unit: "per ear"
  },
  {
    id: "oticon-5",
    title: "Oticon Verit",
    slug: "oticon-verit",
    description: "Premium sound performance with reliable connectivity",
    price: "Contact for price",
    category: ["oticon", "ric", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/oticon-verit.png"
      }
    },
    mrp: null
  },

  // Starkey
  {
    id: "starkey-1",
    title: "Starkey Edge AI",
    slug: "starkey-edge-ai",
    description: "AI-powered sound processing for clearer speech in noise",
    price: "Contact for price",
    category: ["starkey", "ric", "rechargeable", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/starkey-edge-ai.png"
      }
    },
    mrp: null
  },
  {
    id: "starkey-2",
    title: "Starkey Genesis AI",
    slug: "starkey-genesis-ai",
    description: "Neuro Sound Technology for a more natural listening experience",
    price: "Contact for price",
    category: ["starkey", "ric", "bte", "ite", "itc", "cic", "iic", "rechargeable", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/starkey-genesis-ai.png"
      }
    },
    mrp: null
  },
  {
    id: "starkey-3",
    title: "Starkey Signature Series",
    slug: "starkey-signature-series",
    description: "Custom-made design for a discreet and personalized fit",
    price: "Contact for price",
    category: ["starkey", "cic", "iic", "invisible", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/starkey-signature-series.png"
      }
    },
    mrp: null
  },
  {
    id: "starkey-4",
    title: "Starkey G Series AI",
    slug: "starkey-g-series-ai",
    description: "Smart hearing technology with advanced connectivity",
    price: "Contact for price",
    category: ["starkey", "ric", "rechargeable", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/starkey-g-series-ai.png"
      }
    },
    mrp: null
  },
  {
    id: "starkey-5",
    title: "Starkey Omega AI",
    slug: "starkey-omega-ai",
    description: "Advanced AI-powered hearing with all-day rechargeable performance",
    price: "Contact for price",
    category: ["starkey", "bte", "ric", "rechargeable", "bluetooth"],
    featuredImage: {
      node: {
        sourceUrl: "/products/starkey-omega-ai.png"
      }
    },
    mrp: null
  }
];
