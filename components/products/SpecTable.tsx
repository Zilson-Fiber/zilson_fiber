import { ProductSpec } from "@/types/product";

export function SpecTable({ specs }: { specs: ProductSpec[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-neutral-50">
            <th className="text-left px-4 py-3 font-semibold text-neutral-700">
              Parameter
            </th>
            <th className="text-left px-4 py-3 font-semibold text-neutral-700">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, i) => (
            <tr
              key={spec.label}
              className={i % 2 === 0 ? "bg-white" : "bg-neutral-50/50"}
            >
              <td className="px-4 py-3 text-neutral-600 font-medium">
                {spec.label}
              </td>
              <td className="px-4 py-3 text-neutral-800 font-mono text-sm">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
