import type { Product } from "@/lib/products";

export function ProductCard({ p }: { p: Product }) {
  return (
    <div className="group">
      <div className="overflow-hidden bg-card">
        <img src={p.img} alt={p.name} width={896} height={1152} loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="mt-3 flex flex-wrap justify-between gap-x-3 gap-y-1 text-[11px] leading-relaxed">
        <div>
          <p className="text-foreground">{p.name}</p>
          <p className="text-muted-foreground">{p.color} · {p.fabric}</p>
        </div>
        <p className="shrink-0 text-foreground">${p.price}</p>
      </div>
    </div>
  );
}
