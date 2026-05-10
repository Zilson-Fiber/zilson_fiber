import Link from "next/link";
import {
  Anchor,
  ArrowRight,
  Building2,
  Car,
  Factory,
  Filter,
  Plane,
  Shield,
  Train,
  Wind,
  Zap,
} from "lucide-react";
import {
  applicationGroups,
  getApplicationGroup,
  type ApplicationIcon,
  type ApplicationMaterial,
} from "@/data/applications";

const icons: Record<ApplicationIcon, React.ComponentType<{ className?: string }>> = {
  anchor: Anchor,
  building: Building2,
  car: Car,
  factory: Factory,
  filter: Filter,
  plane: Plane,
  shield: Shield,
  train: Train,
  wind: Wind,
  zap: Zap,
};

const materialUrls: Record<ApplicationMaterial, string> = {
  carbon: "/applications",
  glass: "/applications/glass",
};

type ApplicationsPageContentProps = {
  selectedMaterial: ApplicationMaterial;
};

export function ApplicationsPageContent({
  selectedMaterial,
}: ApplicationsPageContentProps) {
  const selectedGroup = getApplicationGroup(selectedMaterial);

  return (
    <>
      <section className="pt-36 pb-12">
        <div className="container-wide">
          <p className="type-caption text-neutral-400">Applications</p>
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-10 lg:gap-16 items-end">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900 max-w-3xl">
                Choose a Material, Then Explore the Right Industrial Use Cases
              </h1>
              <p className="text-neutral-500 mt-5 max-w-2xl leading-relaxed">
                Carbon fiber and glass fiber solve different engineering problems.
                Start with the material family, then review the industries,
                recommended products, and available solution paths.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {applicationGroups.map((group) => {
                const isActive = group.material === selectedMaterial;
                return (
                  <Link
                    key={group.material}
                    href={materialUrls[group.material]}
                    className={`rounded-lg border p-4 transition-colors ${
                      isActive
                        ? `${group.borderClass} ${group.bgClass}`
                        : "border-neutral-100 bg-white hover:border-neutral-200"
                    }`}
                  >
                    <span className={`type-caption ${group.accentClass}`}>
                      {group.label}
                    </span>
                    <span className="mt-3 block text-sm text-neutral-500 leading-relaxed">
                      {group.applications.length} application fields
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className={`type-caption ${selectedGroup.accentClass}`}>
                {selectedGroup.eyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mt-3">
                {selectedGroup.label}
              </h2>
              <p className="text-neutral-500 mt-3 max-w-xl leading-relaxed">
                {selectedGroup.summary}
              </p>
            </div>
            <Link
              href={
                selectedMaterial === "carbon"
                  ? "/carbon-fiber/products"
                  : "/glass-fiber/products"
              }
              className={`inline-flex items-center gap-2 text-sm font-medium ${selectedGroup.accentClass} hover:text-neutral-900 transition-colors`}
            >
              Browse related products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {selectedGroup.applications.map((application) => {
              const Icon = icons[application.icon];
              const href = application.detailHref ?? "/contact";
              return (
                <Link
                  key={application.slug}
                  href={href}
                  className="group block rounded-lg border border-neutral-100 bg-white p-6 sm:p-7 hover:border-neutral-200 transition-colors"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-lg border border-neutral-100 bg-neutral-50 flex items-center justify-center flex-shrink-0">
                      <Icon className={`w-5 h-5 ${selectedGroup.accentClass}`} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-neutral-900">
                        {application.title}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                        {application.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {application.products.map((product) => (
                          <span
                            key={product}
                            className="rounded-full border border-neutral-100 bg-neutral-50 px-3 py-1 text-xs text-neutral-600"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                      <span className={`mt-5 inline-flex items-center gap-1 text-xs font-medium ${selectedGroup.accentClass} group-hover:text-neutral-900 transition-colors`}>
                        {application.detailHref
                          ? "View application details"
                          : "Request application guidance"}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
