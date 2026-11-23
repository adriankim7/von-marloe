import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/SiteChrome";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { chapterCatalog, fabricStandards, type ProductCategory } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Chapter 01: Metanoia — Von Marloe" },
      { name: "description", content: "Explore Chapter 01: Metanoia by Von Marloe. Limited natural-fiber leisurewear crafted in heavyweight French terry, merino wool, and cotton blends." },
      { property: "og:title", content: "Chapter 01: Metanoia — Von Marloe" },
      { property: "og:description", content: "Limited natural-fiber leisurewear for the process of reinvention." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Shop,
});

const categories: Array<"All" | ProductCategory> = ["All", "French Terry", "Outerwear", "Knitwear", "Trousers"];

function Shop() {
  const [selected, setSelected] = useState<"All" | ProductCategory>("All");
  const visible = selected === "All"
    ? chapterCatalog
    : chapterCatalog.filter((p) => p.category === selected);

  return (
    <div>
      <Header />
      <section className="mx-auto grid max-w-[1800px] gap-8 px-4 py-8 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8 md:px-6">
        <aside>
          <div>
            <p className="text-[10px] uppercase text-muted-foreground">Chapter 01 · Pre-Launch</p>
            <h1 className="mt-3 text-sm font-medium uppercase">Metanoia</h1>
            <p className="mt-4 text-xs leading-relaxed text-ink-navy">
              A profound change of heart, mind, and character. Every Von Marloe chapter releases in small runs of 100–150 units per style across 2–3 tonal colorways.
            </p>
          </div>
        <nav aria-label="Collection categories" className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t pt-5 md:flex-col md:items-start md:gap-1">
          {categories.map((c) => (
            <Button
              variant="ghost"
              key={c}
              type="button"
              onClick={() => setSelected(c)}
              aria-pressed={selected === c}
              className={`h-8 justify-start rounded-none px-0 text-[11px] font-normal uppercase hover:bg-transparent ${selected === c ? "text-accent underline underline-offset-4" : "text-muted-foreground hover:text-foreground"}`}
            >
              {c === "All" ? "Shop All" : c}
            </Button>
          ))}
        </nav>
        <p className="mt-8 hidden text-[10px] leading-relaxed text-muted-foreground md:block">From Still Water<br />The Art of Reinvention<br />Los Angeles, CA</p>
        </aside>
        <div>
          <div className="mb-5 flex justify-between border-b pb-3 text-[10px] uppercase text-muted-foreground"><span>{selected === "All" ? "All Pieces" : selected}</span><span>{visible.length} Pieces · All Natural Fibers</span></div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-9 lg:grid-cols-3">
          {visible.map((p) => <ProductCard key={p.name} p={p} />)}
        </div>
        </div>
      </section>

      <section className="border-t bg-blush/55 px-6 py-20">
        <div className="mx-auto max-w-[1600px]">
          <p className="eyebrow text-accent">Materials & Tactile Direction</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">All Natural Fibers. Physical Craft.</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {fabricStandards.map((item) => (
              <div key={item.title} className="border-t border-foreground/20 pt-5">
                <h3 className="font-serif text-2xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-navy">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
