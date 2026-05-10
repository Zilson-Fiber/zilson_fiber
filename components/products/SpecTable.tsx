import { ProductSpec } from "@/types/product";

export function SpecTable({ specs }: { specs: ProductSpec[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-neutral-50">
            <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">
              Parameter
            </th>
            <th className="text-left px-4 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">
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
              <td className="px-4 py-3 text-neutral-600">
                {spec.label}
              </td>
              <td className="px-4 py-3 text-neutral-900 font-mono text-sm">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
