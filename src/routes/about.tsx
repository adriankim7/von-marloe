import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/videos/hero.mp4.asset.json";
import swanCream from "@/assets/brand/swan-cream.png.asset.json";
import look1 from "@/assets/look1.jpg";
import { Header, Footer } from "@/components/SiteChrome";
import { brandPillars, brandWorlds, eventTraits, founders } from "@/lib/products";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Journal — Von Marloe" },
      { name: "description", content: "The ethos, world inspirations, live gatherings, and founders behind Von Marloe — From Still Water." },
      { property: "og:title", content: "Journal — Von Marloe" },
      { property: "og:description", content: "From Still Water. The story, pillars, and world of Von Marloe." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <Header />
      <section className="relative h-[62vh] min-h-[420px] overflow-hidden">
        <video src={hero.url} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-overlay" />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-on-media">
          <img src={swanCream.url} alt="Von Marloe Swan Emblem" className="mb-4 h-14 w-auto" />
          <p className="eyebrow">Von Marloe Journal</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold md:text-7xl">From Still Water</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="eyebrow text-accent">Ethos & Message</p>
          <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-6xl">The Art of Reinvention.</h2>
          <p className="mt-6 max-w-lg leading-relaxed text-ink-navy">
            Before the art of reinvention, there is reflection — and reflection only happens in still water. Von Marloe is designed for that process of becoming.
          </p>
          <p className="mt-4 max-w-lg leading-relaxed text-ink-navy">
            We are a community with product, never product with community. Our garments exist as a quiet badge of representation for athletes, creatives, founders, and high-performers in pursuit of their next chapter.
          </p>
          <p className="eyebrow mt-8 text-accent">
            Ambitious · Self-Aware · Quietly Confident
          </p>
        </div>
        <img src={look1} alt="Von Marloe natural fiber knitwear" width={896} height={1152} loading="lazy" className="aspect-[4/5] w-full object-cover" />
      </section>

      <section className="border-y bg-blush/60 px-6 py-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="eyebrow text-accent">Brand Pillars</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Four Pillars of Von Marloe</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {brandPillars.map((pillar) => (
              <div key={pillar.num} className="border-t border-foreground/20 pt-6">
                <p className="font-serif text-3xl italic text-accent">{pillar.num}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-navy md:text-base">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <p className="eyebrow text-accent">Von Marloe World</p>
        <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">The Mood Library</h2>
        <p className="mt-3 font-serif text-xl italic text-ink-navy">Six cultural touchstones shaping our silhouette, pace, and perspective.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brandWorlds.map((world) => (
            <div key={world.name} className="border bg-card p-7">
              <span className={`inline-block h-4 w-4 rounded-full ${world.dot}`} aria-hidden="true" />
              <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">{world.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-navy">{world.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t bg-card px-6 py-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="eyebrow text-accent">Community Gatherings · Los Angeles</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Community First. Events Seal It.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {eventTraits.map((trait) => (
              <div key={trait.title} className="flex gap-4 border-t border-foreground/15 pt-6">
                <span className={`mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full ${trait.dot}`} aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground">{trait.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-navy">{trait.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <p className="eyebrow text-accent">Founding Team</p>
        <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Built in Southern California</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {founders.map((f) => (
            <div key={f.name} className="border-t border-foreground/20 pt-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-serif text-lg text-primary-foreground">
                  {f.initial}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground">{f.name}</h3>
                  <p className="eyebrow text-accent">{f.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-navy">{f.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
