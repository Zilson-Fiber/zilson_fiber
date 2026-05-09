import { ProductCategory } from "@/types/product";

export const carbonFiberCategories: ProductCategory[] = [
  {
    slug: "carbon-fiber-mat",
    name: "Carbon Fiber Mat",
    description:
      "High-performance carbon fiber mats with excellent conductivity, thermal resistance, and corrosion resistance. Carbon content exceeds 90%, suitable for military, fuel cell, and industrial applications.",
    image: "/images/carbon-fiber/05-carbon-fiber-mat/01-carbon-surface-mat-10g/10g-carbon-surface-mat-01.jpg",
    products: [
      {
        slug: "surface-mat-10g",
        name: "Carbon Fiber Surface Mat 10g",
        description:
          "Ultra-thin 10g/m² carbon fiber surface mat with superior conductivity and thermal performance. Ideal for military applications and fuel cell components.",
        features: [
          "Ultra-lightweight at 10g/m²",
          "Excellent electrical conductivity",
          "Superior thermal conductivity",
          "Corrosion resistant",
        ],
        specs: [
          { label: "Weight", value: "10 g/m²" },
          { label: "Material", value: "Carbon Fiber" },
          { label: "Function", value: "Conductive, Thermal" },
          { label: "Application", value: "Military, Fuel Cells" },
        ],
        applications: ["Military & Defense", "Fuel Cells", "Aerospace"],
        images: [
          "/images/carbon-fiber/05-carbon-fiber-mat/01-carbon-surface-mat-10g/10g-carbon-surface-mat-01.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/01-carbon-surface-mat-10g/10g-carbon-surface-mat-02.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/01-carbon-surface-mat-10g/10g-carbon-surface-mat-03.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/01-carbon-surface-mat-10g/10g-carbon-surface-mat-04.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/01-carbon-surface-mat-10g/10g-carbon-surface-mat-05.jpg",
        ],
        category: "carbon-fiber-mat",
      },
      {
        slug: "surface-mat-20g",
        name: "Carbon Fiber Surface Mat 20g",
        description:
          "20g/m² carbon fiber surface mat designed for electric heating applications, wind turbine molds, and fuel cell outer wrapping.",
        features: [
          "Optimized for electric heating",
          "Wind turbine mold compatible",
          "Excellent conductivity",
          "Fuel cell grade quality",
        ],
        specs: [
          { label: "Weight", value: "20 g/m²" },
          { label: "Material", value: "Carbon Fiber" },
          { label: "Function", value: "Conductive" },
          { label: "Application", value: "FRP, Electric Heating, Wind Molds" },
        ],
        applications: ["Wind Energy", "Electric Heating", "Fuel Cells"],
        images: [
          "/images/carbon-fiber/05-carbon-fiber-mat/02-carbon-surface-mat-20g/20g-carbon-surface-mat-01.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/02-carbon-surface-mat-20g/20g-carbon-surface-mat-02.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/02-carbon-surface-mat-20g/20g-carbon-surface-mat-03.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/02-carbon-surface-mat-20g/20g-carbon-surface-mat-04.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/02-carbon-surface-mat-20g/20g-carbon-surface-mat-05.jpg",
        ],
        category: "carbon-fiber-mat",
      },
      {
        slug: "nickel-plated-mat",
        name: "Nickel-Plated Carbon Fiber Mat",
        description:
          "30g/m² nickel-plated carbon fiber mat providing superior electromagnetic shielding. Designed for military and defense applications requiring EMI protection.",
        features: [
          "Electromagnetic shielding",
          "Nickel-plated surface",
          "Military grade quality",
          "EMI/RFI protection",
        ],
        specs: [
          { label: "Weight", value: "30 g/m²" },
          { label: "Material", value: "Carbon Fiber + Nickel Plating" },
          { label: "Function", value: "EMI Shielding" },
          { label: "Application", value: "Military, Defense" },
        ],
        applications: ["Military & Defense", "Electronics", "Aerospace"],
        images: [
          "/images/carbon-fiber/05-carbon-fiber-mat/03-nickel-plated-carbon-mat/30g-nickel-plated-carbon-mat-02.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/03-nickel-plated-carbon-mat/30g-nickel-plated-carbon-mat-04.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/03-nickel-plated-carbon-mat/30g-nickel-plated-carbon-mat-05.jpg",
        ],
        category: "carbon-fiber-mat",
      },
      {
        slug: "carbon-glass-hybrid",
        name: "Carbon-Glass Hybrid Mat",
        description:
          "30g/m² carbon-glass hybrid mat combining the conductivity of carbon fiber with the cost-effectiveness of glass fiber. Ideal for electric heating and wind energy applications.",
        features: [
          "Carbon-glass hybrid structure",
          "Cost-effective conductivity",
          "Electric heating compatible",
          "Wind energy applications",
        ],
        specs: [
          { label: "Weight", value: "30 g/m²" },
          { label: "Material", value: "Carbon Fiber + Glass Fiber" },
          { label: "Function", value: "Conductive" },
          { label: "Application", value: "Electric Heating, Wind Energy" },
        ],
        applications: ["Wind Energy", "Electric Heating", "FRP"],
        images: [
          "/images/carbon-fiber/05-carbon-fiber-mat/04-carbon-glass-hybrid-mat/30g-carbon-glass-hybrid-mat-01.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/04-carbon-glass-hybrid-mat/30g-carbon-glass-hybrid-mat-02.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/04-carbon-glass-hybrid-mat/30g-carbon-glass-hybrid-mat-03.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/04-carbon-glass-hybrid-mat/30g-carbon-glass-hybrid-mat-04.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/04-carbon-glass-hybrid-mat/30g-carbon-glass-hybrid-mat-05.jpg",
        ],
        category: "carbon-fiber-mat",
      },
      {
        slug: "composite-mat",
        name: "Carbon Fiber Composite Mat",
        description:
          "300-320g/m² carbon fiber composite mat with excellent conductivity and corrosion resistance. Specifically designed for pultrusion processes.",
        features: [
          "Pultrusion process optimized",
          "High conductivity",
          "Corrosion resistant",
          "Available in 300g and 320g",
        ],
        specs: [
          { label: "Weight", value: "300g / 320g (280g+20g)" },
          { label: "Material", value: "Carbon Fiber Composite" },
          { label: "Function", value: "Conductive, Corrosion Resistant" },
          { label: "Application", value: "Pultrusion Process" },
        ],
        applications: ["Industrial Manufacturing", "Pultrusion", "Chemical"],
        images: [
          "/images/carbon-fiber/05-carbon-fiber-mat/05-carbon-composite-mat/carbon-composite-mat-01.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/05-carbon-composite-mat/carbon-composite-mat-02.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/05-carbon-composite-mat/carbon-composite-mat-03.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/05-carbon-composite-mat/carbon-composite-mat-04.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/05-carbon-composite-mat/carbon-composite-mat-05.jpg",
        ],
        category: "carbon-fiber-mat",
      },
      {
        slug: "needled-mat",
        name: "Carbon Fiber Needled Mat",
        description:
          "350g/m² high-strength carbon fiber needled mat with superior mechanical properties and electrical conductivity. Manufactured through needle-punching process for enhanced fiber entanglement.",
        features: [
          "High mechanical strength",
          "Needle-punched structure",
          "Excellent conductivity",
          "350g/m² weight",
        ],
        specs: [
          { label: "Weight", value: "350 g/m²" },
          { label: "Material", value: "Carbon Fiber" },
          { label: "Function", value: "High Strength, Conductive" },
          { label: "Process", value: "Needle Punching" },
        ],
        applications: ["High-strength Components", "Conductive Applications"],
        images: [
          "/images/carbon-fiber/05-carbon-fiber-mat/06-carbon-needled-mat/carbon-needled-mat-01.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/06-carbon-needled-mat/carbon-needled-mat-02.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/06-carbon-needled-mat/carbon-needled-mat-03.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/06-carbon-needled-mat/carbon-needled-mat-04.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/06-carbon-needled-mat/carbon-needled-mat-05.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/06-carbon-needled-mat/carbon-needled-mat-06.jpg",
          "/images/carbon-fiber/05-carbon-fiber-mat/06-carbon-needled-mat/carbon-needled-mat-07.jpg",
        ],
        category: "carbon-fiber-mat",
      },
    ],
  },
  {
    slug: "carbon-fiber-cloth",
    name: "Carbon Fiber Cloth",
    description:
      "High-modulus carbon fiber woven fabrics for structural reinforcement, carbon fiber products, and automotive applications. Available in various weave patterns.",
    image: "/images/carbon-fiber/06-carbon-fiber-cloth/01-carbon-glass-hybrid-cloth/carbon-glass-hybrid-cloth-01.jpg",
    products: [
      {
        slug: "hybrid-woven-cloth",
        name: "Carbon-Glass Hybrid Woven Cloth",
        description:
          "200-240g/m² carbon-glass hybrid woven cloth combining high modulus with cost efficiency. Suitable for carbon fiber products and decorative applications.",
        features: [
          "Carbon-glass hybrid weave",
          "High modulus (T300)",
          "200-240g/m² options",
          "Decorative finish available",
        ],
        specs: [
          { label: "Weight", value: "200g / 240g" },
          { label: "Material", value: "Carbon + Glass Fiber" },
          { label: "Strength", value: "T300" },
          { label: "Application", value: "Carbon Fiber Products" },
        ],
        applications: ["Carbon Fiber Products", "Automotive", "Decoration"],
        images: [
          "/images/carbon-fiber/06-carbon-fiber-cloth/01-carbon-glass-hybrid-cloth/carbon-glass-hybrid-cloth-01.jpg",
          "/images/carbon-fiber/06-carbon-fiber-cloth/01-carbon-glass-hybrid-cloth/carbon-glass-hybrid-cloth-02.jpg",
          "/images/carbon-fiber/06-carbon-fiber-cloth/01-carbon-glass-hybrid-cloth/carbon-glass-hybrid-cloth-03.jpg",
          "/images/carbon-fiber/06-carbon-fiber-cloth/01-carbon-glass-hybrid-cloth/carbon-glass-hybrid-cloth-04.jpg",
          "/images/carbon-fiber/06-carbon-fiber-cloth/01-carbon-glass-hybrid-cloth/carbon-glass-hybrid-cloth-05.jpg",
        ],
        category: "carbon-fiber-cloth",
      },
      {
        slug: "twill-cloth",
        name: "Carbon Fiber Twill Cloth",
        description:
          "200g/m² carbon fiber twill weave cloth with T300 grade strength. Classic 2x2 twill pattern provides excellent drapeability and aesthetic finish.",
        features: [
          "2x2 twill weave pattern",
          "T300 grade carbon fiber",
          "Excellent drapeability",
          "Premium surface finish",
        ],
        specs: [
          { label: "Weight", value: "200 g/m²" },
          { label: "Weave", value: "2x2 Twill" },
          { label: "Strength", value: "T300" },
          { label: "Application", value: "Structural Reinforcement, Automotive" },
        ],
        applications: ["Automotive", "Structural Reinforcement", "Sports Equipment"],
        images: [
          "/images/carbon-fiber/06-carbon-fiber-cloth/01-carbon-glass-hybrid-cloth/carbon-glass-hybrid-cloth-01.jpg",
        ],
        category: "carbon-fiber-cloth",
      },
      {
        slug: "plain-cloth",
        name: "Carbon Fiber Plain Cloth",
        description:
          "200g/m² carbon fiber plain weave cloth with T300 grade. Balanced structure provides equal strength in both directions, ideal for flat panel applications.",
        features: [
          "Plain weave pattern",
          "T300 grade carbon fiber",
          "Balanced bi-directional strength",
          "Flat panel optimized",
        ],
        specs: [
          { label: "Weight", value: "200 g/m²" },
          { label: "Weave", value: "Plain" },
          { label: "Strength", value: "T300" },
          { label: "Application", value: "Carbon Fiber Products, Automotive" },
        ],
        applications: ["Automotive", "Carbon Fiber Products", "Construction"],
        images: [
          "/images/carbon-fiber/06-carbon-fiber-cloth/01-carbon-glass-hybrid-cloth/carbon-glass-hybrid-cloth-02.jpg",
        ],
        category: "carbon-fiber-cloth",
      },
    ],
  },
  {
    slug: "carbon-fiber-raw",
    name: "Carbon Fiber Raw Materials",
    description:
      "Carbon fiber raw materials including short-cut fiber, powder, and yarn for reinforcement, conductivity enhancement, and composite manufacturing.",
    image: "/images/carbon-fiber/05-carbon-fiber-mat/06-carbon-needled-mat/carbon-needled-mat-01.jpg",
    products: [
      {
        slug: "short-cut-fiber",
        name: "Short Cut Carbon Fiber",
        description:
          "Mechanically cut carbon fiber filaments for reinforced modified plastics, construction, electric heating, shielding materials, and new energy applications.",
        features: [
          "Uniform dispersion",
          "Lightweight and high strength",
          "Excellent conductivity",
          "High wave absorption",
        ],
        specs: [
          { label: "Material", value: "Carbon Fiber Filament" },
          { label: "Process", value: "Mechanical Cutting" },
          { label: "Properties", value: "Conductive, High Modulus" },
          { label: "Application", value: "Modified Plastics, Shielding" },
        ],
        applications: ["Modified Plastics", "Construction", "Shielding"],
        images: [
          "/images/carbon-fiber/05-carbon-fiber-mat/06-carbon-needled-mat/carbon-needled-mat-01.jpg",
        ],
        category: "carbon-fiber-raw",
      },
      {
        slug: "carbon-powder",
        name: "Carbon Fiber Powder",
        description:
          "Ground carbon fiber powder (milled carbon fiber) for use as high-performance composite filler. Retains excellent properties of carbon fiber in powder form.",
        features: [
          "Large specific surface area",
          "Easy resin wetting",
          "Reinforcement filler",
          "Thermal and electrical conductivity",
        ],
        specs: [
          { label: "Material", value: "Ground Carbon Fiber" },
          { label: "Color", value: "Black-gray" },
          { label: "Properties", value: "Reinforcing, Conductive, Wear-resistant" },
          { label: "Application", value: "Thermoplastic/Thermoset Resins" },
        ],
        applications: ["Plastics Reinforcement", "Wear Resistance", "Conductivity"],
        images: [
          "/images/carbon-fiber/05-carbon-fiber-mat/05-carbon-composite-mat/carbon-composite-mat-01.jpg",
        ],
        category: "carbon-fiber-raw",
      },
      {
        slug: "carbon-yarn",
        name: "Carbon Fiber Yarn",
        description:
          "Carbon fiber yarn spun from short carbon fibers, available in T300 3K/6K and T700 12K specifications. Used for structural reinforcement, textile, and conductive applications.",
        features: [
          "T300 and T700 grades available",
          "3K, 6K, 12K specifications",
          "Structural reinforcement",
          "Anti-corrosion properties",
        ],
        specs: [
          { label: "Material", value: "Carbon Fiber" },
          { label: "Grades", value: "T300 3K/6K, T700 12K" },
          { label: "Weight", value: "20kg/roll" },
          { label: "Application", value: "Structural Reinforcement, Textile" },
        ],
        applications: ["Construction Reinforcement", "Textile", "Conductive"],
        images: [
          "/images/carbon-fiber/05-carbon-fiber-mat/06-carbon-needled-mat/carbon-needled-mat-02.jpg",
        ],
        category: "carbon-fiber-raw",
      },
    ],
  },
];
