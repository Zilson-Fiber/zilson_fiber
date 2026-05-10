export type ApplicationMaterial = "carbon" | "glass";

export type ApplicationIcon =
  | "anchor"
  | "building"
  | "car"
  | "factory"
  | "filter"
  | "plane"
  | "shield"
  | "train"
  | "wind"
  | "zap";

export type ApplicationItem = {
  slug: string;
  icon: ApplicationIcon;
  title: string;
  description: string;
  products: string[];
  detailHref?: string;
};

export type ApplicationGroup = {
  material: ApplicationMaterial;
  label: string;
  eyebrow: string;
  summary: string;
  accentClass: string;
  borderClass: string;
  bgClass: string;
  applications: ApplicationItem[];
};

export const applicationGroups: ApplicationGroup[] = [
  {
    material: "carbon",
    label: "Carbon Fiber",
    eyebrow: "Carbon Fiber Applications",
    summary:
      "Lightweight, conductive, and high-strength materials for performance-critical industries.",
    accentClass: "text-carbon-accent",
    borderClass: "border-carbon-accent",
    bgClass: "bg-cyan-50",
    applications: [
      {
        slug: "aerospace",
        icon: "plane",
        title: "Aerospace & Aviation",
        description:
          "Ultra-lightweight carbon fiber composites for structural components, interior panels, and advanced aerospace applications.",
        products: ["Carbon Fiber Surface Mat 10g", "Carbon Fiber Needled Mat", "Carbon Fiber Yarn"],
        detailHref: "/carbon-fiber/applications/aerospace",
      },
      {
        slug: "motorsport",
        icon: "car",
        title: "Motorsport & Automotive",
        description:
          "High-performance carbon fiber materials for body panels, structural reinforcement, and lightweight components.",
        products: ["Carbon-Glass Hybrid Woven Cloth", "Carbon Fiber Twill Cloth", "Carbon Fiber Plain Cloth"],
      },
      {
        slug: "new-energy",
        icon: "zap",
        title: "New Energy & Fuel Cells",
        description:
          "Advanced carbon fiber materials for hydrogen fuel cell GDL, battery separators, and energy storage systems.",
        products: ["Carbon Fiber Surface Mat 10g", "Carbon Fiber Surface Mat 20g", "Carbon-Glass Hybrid Mat"],
        detailHref: "/carbon-fiber/applications/new-energy",
      },
      {
        slug: "military-defense",
        icon: "shield",
        title: "Military & Defense",
        description:
          "Specialized carbon fiber solutions for electromagnetic shielding, ballistic protection, and stealth applications.",
        products: ["Nickel-Plated Carbon Fiber Mat", "Carbon Fiber Surface Mat 10g", "Carbon Fiber Composite Mat"],
        detailHref: "/carbon-fiber/applications/military-defense",
      },
      {
        slug: "manufacturing",
        icon: "factory",
        title: "High-end Manufacturing",
        description:
          "Premium carbon fiber materials for pultrusion processes, mold making, and advanced composite manufacturing.",
        products: ["Carbon Fiber Composite Mat", "Carbon Fiber Needled Mat", "Short Cut Carbon Fiber"],
      },
    ],
  },
  {
    material: "glass",
    label: "Glass Fiber",
    eyebrow: "Glass Fiber Applications",
    summary:
      "Cost-effective, corrosion-resistant reinforcements for energy, construction, transportation, and industrial use.",
    accentClass: "text-glass-accent",
    borderClass: "border-glass-accent",
    bgClass: "bg-emerald-50",
    applications: [
      {
        slug: "wind-energy",
        icon: "wind",
        title: "Wind Energy",
        description:
          "High-performance fiberglass reinforcements for turbine blades, nacelle covers, and structural components.",
        products: ["Biaxial Stitched Mat", "Multiaxial Stitched Mat", "Unidirectional Cloth"],
        detailHref: "/glass-fiber/applications/wind-energy",
      },
      {
        slug: "construction",
        icon: "building",
        title: "Construction & Building",
        description:
          "Durable glass fiber materials for insulation, waterproofing membranes, wall coverings, and structural reinforcement.",
        products: ["Surface Tissue Mat", "Black Tissue Facing", "Roofing Tissue Mat"],
        detailHref: "/glass-fiber/applications/construction",
      },
      {
        slug: "industrial-filtration",
        icon: "filter",
        title: "Industrial Filtration",
        description:
          "Specialized fiber materials for high-temperature filtration, chemical processing, and environmental protection.",
        products: ["Basalt Fiber Mat", "Knitted Stitched Mat", "Chopped Strand Mat"],
      },
      {
        slug: "transportation",
        icon: "train",
        title: "Transportation & Rail",
        description:
          "Lightweight composite materials for high-speed rail interiors, automotive components, and transportation infrastructure.",
        products: ["PP Core Sandwich Mat", "Composite Mat", "Woven Roving"],
      },
      {
        slug: "marine",
        icon: "anchor",
        title: "Marine & Corrosion Protection",
        description:
          "Corrosion-resistant fiberglass solutions for shipbuilding, chemical storage tanks, and marine infrastructure.",
        products: ["Woven Roving", "Chopped Strand Mat", "Surface Tissue Mat"],
      },
    ],
  },
];

export function getApplicationGroup(material: ApplicationMaterial) {
  return applicationGroups.find((group) => group.material === material) ?? applicationGroups[0];
}
