import { ProductCategory } from "@/types/product";

export const glassFiberCategories: ProductCategory[] = [
  {
    slug: "tissue-mat",
    name: "Fiberglass Tissue Mat (Veil)",
    description:
      "Wet-process fiberglass tissue mats with fire-retardant, anti-corrosion, crack-resistant, water-resistant, and air-permeable properties.",
    image: "/images/glass-fiber/01-fiberglass-tissue-mat/01-surface-tissue/50g-blue-surface-tissue-01.jpg",
    products: [
      {
        slug: "surface-tissue",
        name: "Fiberglass Surface Tissue Mat",
        description:
          "Surface tissue mat with uniform fiber distribution, smooth surface, and fast resin penetration. Available in winding and hand-laid series for FRP products.",
        features: [
          "Uniform fiber distribution",
          "Fast resin penetration",
          "Smooth surface finish",
          "Winding and hand-laid series",
        ],
        specs: [
          { label: "Weight", value: "10g / 30g / 50g / 300g" },
          { label: "Process", value: "Wet-laid" },
          { label: "Binder", value: "PVA / Polyester" },
          { label: "Application", value: "FRP Surface Layer" },
        ],
        applications: ["FRP Products", "Pipe Winding", "Hand Lay-up"],
        images: [
          "/images/glass-fiber/01-fiberglass-tissue-mat/01-surface-tissue/50g-blue-surface-tissue-01.jpg",
          "/images/glass-fiber/01-fiberglass-tissue-mat/01-surface-tissue/50g-blue-surface-tissue-02.jpg",
          "/images/glass-fiber/01-fiberglass-tissue-mat/01-surface-tissue/50g-blue-surface-tissue-03.jpg",
          "/images/glass-fiber/01-fiberglass-tissue-mat/01-surface-tissue/300g-white-surface-tissue-01.jpg",
          "/images/glass-fiber/01-fiberglass-tissue-mat/01-surface-tissue/300g-white-surface-tissue-02.jpg",
        ],
        category: "tissue-mat",
      },
      {
        slug: "black-tissue",
        name: "Black Fiberglass Tissue Facing",
        description:
          "Black fiberglass tissue with flame retardancy, antibacterial properties, and sound absorption. Used for sound barriers, HVAC insulation, and ceiling panels.",
        features: [
          "Flame retardant",
          "Antibacterial & mildew resistant",
          "Sound absorption",
          "Non-fading black color",
        ],
        specs: [
          { label: "Weight", value: "50g / 60g / 65g / 80g" },
          { label: "Color", value: "Black" },
          { label: "Function", value: "Sound Absorption, Insulation" },
          { label: "Application", value: "Sound Barriers, HVAC, Ceilings" },
        ],
        applications: ["Sound Barriers", "HVAC Insulation", "Ceiling Panels"],
        images: [
          "/images/glass-fiber/01-fiberglass-tissue-mat/02-black-tissue/65g-black-tissue-01.jpg",
          "/images/glass-fiber/01-fiberglass-tissue-mat/02-black-tissue/65g-black-tissue-02.jpg",
          "/images/glass-fiber/01-fiberglass-tissue-mat/02-black-tissue/65g-black-tissue-03.jpg",
          "/images/glass-fiber/01-fiberglass-tissue-mat/02-black-tissue/65g-black-tissue-04.jpg",
          "/images/glass-fiber/01-fiberglass-tissue-mat/02-black-tissue/65g-black-tissue-05.jpg",
        ],
        category: "tissue-mat",
      },
      {
        slug: "colored-tissue",
        name: "Colored Fiberglass Tissue Mat",
        description:
          "Customizable colored fiberglass tissue mat available in various colors. Ideal for decorative applications and specialized industrial uses.",
        features: [
          "Custom color options",
          "Decorative finish",
          "Same performance as standard tissue",
          "Various weights available",
        ],
        specs: [
          { label: "Weight", value: "Customizable" },
          { label: "Color", value: "Custom (Yellow, Blue, Green, etc.)" },
          { label: "Process", value: "Wet-laid" },
          { label: "Application", value: "Decorative, Industrial" },
        ],
        applications: ["Decorative Panels", "Industrial", "Custom Projects"],
        images: [
          "/images/glass-fiber/01-fiberglass-tissue-mat/03-colored-tissue/80g-yellow-tissue-01.jpg",
          "/images/glass-fiber/01-fiberglass-tissue-mat/03-colored-tissue/80g-yellow-tissue-02.jpg",
          "/images/glass-fiber/01-fiberglass-tissue-mat/03-colored-tissue/80g-yellow-tissue-03.jpg",
          "/images/glass-fiber/01-fiberglass-tissue-mat/03-colored-tissue/80g-yellow-tissue-04.jpg",
          "/images/glass-fiber/01-fiberglass-tissue-mat/03-colored-tissue/80g-yellow-tissue-05.jpg",
        ],
        category: "tissue-mat",
      },
      {
        slug: "rotor-paper",
        name: "Glass Fiber Paper for Zeolite Rotor",
        description:
          "Specialized glass fiber paper designed as the substrate for molecular sieve zeolite rotors used in dehumidification and VOC treatment systems.",
        features: [
          "Zeolite rotor substrate",
          "High temperature resistant",
          "Precise thickness control",
          "PVA bonded",
        ],
        specs: [
          { label: "Weight", value: "Custom" },
          { label: "Binder", value: "PVA" },
          { label: "Function", value: "Rotor Substrate" },
          { label: "Application", value: "Dehumidification, VOC Treatment" },
        ],
        applications: ["Dehumidification", "VOC Treatment", "Air Purification"],
        images: [
          "/images/glass-fiber/01-fiberglass-tissue-mat/04-rotor-paper/pva-zeolite-rotor-paper-01.jpg",
          "/images/glass-fiber/01-fiberglass-tissue-mat/04-rotor-paper/pva-zeolite-rotor-paper-02.jpg",
          "/images/glass-fiber/01-fiberglass-tissue-mat/04-rotor-paper/pva-zeolite-rotor-paper-03.jpg",
          "/images/glass-fiber/01-fiberglass-tissue-mat/04-rotor-paper/pva-zeolite-rotor-paper-04.jpg",
          "/images/glass-fiber/01-fiberglass-tissue-mat/04-rotor-paper/pva-zeolite-rotor-paper-05.jpg",
        ],
        category: "tissue-mat",
      },
    ],
  },
  {
    slug: "fiberglass-cloth",
    name: "Fiberglass Cloth",
    description:
      "Woven fiberglass fabrics for hand lay-up, wind energy, FRP, and electronic board applications. Available in plain, twill, unidirectional, and multiaxial weaves.",
    image: "/images/glass-fiber/02-fiberglass-cloth/01-plain-weave/200g-plain-weave-cloth-01.jpg",
    products: [
      {
        slug: "plain-weave",
        name: "Plain Weave Fiberglass Cloth",
        description:
          "Standard plain weave fiberglass cloth in 200g/400g/600g weights. E-glass, alkali-free composition for FRP, electronics, and board applications.",
        features: [
          "E-glass alkali-free",
          "Multiple weight options",
          "Balanced strength",
          "Versatile applications",
        ],
        specs: [
          { label: "Weight", value: "200g / 400g / 600g" },
          { label: "Weave", value: "Plain" },
          { label: "Composition", value: "E-glass, Alkali-free" },
          { label: "Application", value: "FRP, Electronics, Board" },
        ],
        applications: ["FRP Products", "Electronics", "Board Materials"],
        images: [
          "/images/glass-fiber/02-fiberglass-cloth/01-plain-weave/200g-plain-weave-cloth-01.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/01-plain-weave/200g-plain-weave-cloth-02.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/01-plain-weave/200g-plain-weave-cloth-03.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/01-plain-weave/200g-plain-weave-cloth-04.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/01-plain-weave/200g-plain-weave-cloth-05.jpg",
        ],
        category: "fiberglass-cloth",
      },
      {
        slug: "twill-weave",
        name: "Twill Weave Fiberglass Cloth",
        description:
          "Twill weave fiberglass cloth with superior drapeability and aesthetic finish. Ideal for complex mold shapes and decorative applications.",
        features: [
          "Excellent drapeability",
          "Aesthetic twill pattern",
          "Complex mold compatible",
          "Custom weights available",
        ],
        specs: [
          { label: "Weight", value: "Customizable" },
          { label: "Weave", value: "Twill" },
          { label: "Composition", value: "E-glass, Alkali-free" },
          { label: "Application", value: "FRP, Decorative" },
        ],
        applications: ["FRP Products", "Decorative", "Complex Molds"],
        images: [
          "/images/glass-fiber/02-fiberglass-cloth/02-twill-weave/twill-weave-black-01.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/02-twill-weave/twill-weave-black-02.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/02-twill-weave/twill-weave-black-03.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/02-twill-weave/twill-weave-black-04.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/02-twill-weave/twill-weave-black-05.jpg",
        ],
        category: "fiberglass-cloth",
      },
      {
        slug: "colored-cloth",
        name: "Colored Fiberglass Cloth",
        description:
          "210g+ colored fiberglass cloth with customizable colors and weights. Designed for interior decoration and soft-cover applications.",
        features: [
          "Custom color options",
          "Decoration grade",
          "Soft texture",
          "210g+ weight range",
        ],
        specs: [
          { label: "Weight", value: "210g+" },
          { label: "Color", value: "Custom (Blue, Red, etc.)" },
          { label: "Composition", value: "E-glass, Alkali-free" },
          { label: "Application", value: "Interior Decoration" },
        ],
        applications: ["Interior Decoration", "Soft Cover", "Wall Panels"],
        images: [
          "/images/glass-fiber/02-fiberglass-cloth/03-colored-cloth/210g-blue-fiberglass-cloth-01.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/03-colored-cloth/210g-blue-fiberglass-cloth-02.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/03-colored-cloth/210g-blue-fiberglass-cloth-03.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/03-colored-cloth/210g-blue-fiberglass-cloth-04.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/03-colored-cloth/210g-blue-fiberglass-cloth-05.jpg",
        ],
        category: "fiberglass-cloth",
      },
      {
        slug: "unidirectional",
        name: "Unidirectional Fiberglass Cloth",
        description:
          "275g/m² unidirectional fiberglass cloth with fibers aligned in one direction for maximum strength along the primary load path. Used in wind energy and FRP.",
        features: [
          "Unidirectional fiber alignment",
          "Maximum single-axis strength",
          "Wind energy grade",
          "275g/m² standard weight",
        ],
        specs: [
          { label: "Weight", value: "275 g/m²" },
          { label: "Weave", value: "Unidirectional" },
          { label: "Composition", value: "E-glass, Alkali-free" },
          { label: "Application", value: "Wind Energy, FRP" },
        ],
        applications: ["Wind Energy", "FRP", "Structural"],
        images: [
          "/images/glass-fiber/02-fiberglass-cloth/04-unidirectional/275g-unidirectional-cloth-01.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/04-unidirectional/275g-unidirectional-cloth-02.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/04-unidirectional/275g-unidirectional-cloth-03.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/04-unidirectional/275g-unidirectional-cloth-04.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/04-unidirectional/275g-unidirectional-cloth-05.jpg",
        ],
        category: "fiberglass-cloth",
      },
      {
        slug: "multiaxial",
        name: "Multiaxial Fiberglass Fabric",
        description:
          "300g/m² multiaxial (±45°) fiberglass fabric for wind turbine nacelle covers. A-grade alkali-free construction for demanding structural applications.",
        features: [
          "±45° biaxial orientation",
          "A-grade alkali-free",
          "Wind turbine grade",
          "High shear strength",
        ],
        specs: [
          { label: "Weight", value: "300 g/m²" },
          { label: "Orientation", value: "±45°" },
          { label: "Composition", value: "A-grade, Alkali-free" },
          { label: "Application", value: "Wind Turbine Nacelle" },
        ],
        applications: ["Wind Energy", "Nacelle Covers", "Structural"],
        images: [
          "/images/glass-fiber/02-fiberglass-cloth/05-multiaxial/300g-biaxial-45-cloth-01.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/05-multiaxial/300g-biaxial-45-cloth-02.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/05-multiaxial/300g-biaxial-45-cloth-03.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/05-multiaxial/300g-biaxial-45-cloth-04.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/05-multiaxial/300g-biaxial-45-cloth-05.jpg",
        ],
        category: "fiberglass-cloth",
      },
      {
        slug: "woven-roving",
        name: "Woven Roving",
        description:
          "400g/m² woven roving for heavy-duty FRP applications. Provides high glass content and excellent mechanical properties for thick laminate construction.",
        features: [
          "Heavy-duty 400g/m²",
          "High glass content",
          "Thick laminate construction",
          "Excellent wet-out",
        ],
        specs: [
          { label: "Weight", value: "400 g/m²" },
          { label: "Weave", value: "Plain (Roving)" },
          { label: "Composition", value: "E-glass" },
          { label: "Application", value: "Heavy-duty FRP" },
        ],
        applications: ["Marine", "Tanks", "Heavy FRP"],
        images: [
          "/images/glass-fiber/02-fiberglass-cloth/06-woven-roving/400g-woven-roving-01.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/06-woven-roving/400g-woven-roving-02.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/06-woven-roving/400g-woven-roving-03.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/06-woven-roving/400g-woven-roving-04.jpg",
          "/images/glass-fiber/02-fiberglass-cloth/06-woven-roving/400g-woven-roving-05.jpg",
        ],
        category: "fiberglass-cloth",
      },
    ],
  },
];
