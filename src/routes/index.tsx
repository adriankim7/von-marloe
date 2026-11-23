import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/videos/hero.mp4.asset.json";
import swanCream from "@/assets/brand/swan-cream.png.asset.json";
import swanNavy from "@/assets/brand/swan-navy.png.asset.json";
import look1 from "@/assets/look1.jpg";
import look2 from "@/assets/look2.jpg";
import { Header, Footer } from "@/components/SiteChrome";
import { ProductCard } from "@/components/ProductCard";
import { BrandImage } from "@/components/BrandImage";
import { products, brandPillars } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Von Marloe — The Art of Reinvention" },
      { name: "description", content: "From Still Water. Von Marloe is a Los Angeles community-first label crafting refined leisurewear in natural fibers. Explore Chapter 01: Metanoia." },
      { property: "og:title", content: "Von Marloe — The Art of Reinvention" },
      { property: "og:description", content: "From Still Water. Refined leisurewear for the process of reinvention." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const video = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  return (
    <div>
      <section className="campaign-film relative min-h-[520px] w-full overflow-hidden bg-primary">
        <Header overlay />
        <video ref={video} src={hero.url} poster={look2} autoPlay muted={muted} loop playsInline onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} aria-label="Von Marloe From Still Water campaign film" className="absolute inset-0 h-full w-full object-cover" />
        <div className="film-shade pointer-events-none absolute inset-0" />
        <div className="absolute inset-x-0 bottom-14 z-10 flex flex-col items-center px-6 text-center text-on-media">
          <BrandImage src={swanCream.url} alt="Von Marloe Swan Emblem" className="mb-4 h-10 w-auto" />
          <h1 className="text-xs uppercase">Von Marloe — Chapter 01: Metanoia</h1>
          <p className="mt-2 font-serif text-xl italic">"From Still Water"</p>
          <Button asChild variant="link" className="mt-3 h-auto p-0 text-[10px] font-normal uppercase text-on-media"><Link to="/shop">Explore the Chapter</Link></Button>
        </div>
        <div className="absolute bottom-4 left-4 z-10 flex gap-1 text-on-media">
          <Button variant="ghost" size="icon" aria-label={muted ? "Unmute film" : "Mute film"} title={muted ? "Unmute film" : "Mute film"} onClick={() => setMuted(!muted)} className="text-inherit hover:bg-transparent hover:text-inherit hover:opacity-60">{muted ? <VolumeX strokeWidth={1} /> : <Volume2 strokeWidth={1} />}</Button>
          <Button variant="ghost" size="icon" aria-label={playing ? "Pause film" : "Play film"} title={playing ? "Pause film" : "Play film"} onClick={() => { if (!video.current) return; if (playing) video.current.pause(); else void video.current.play().catch(() => setPlaying(false)); }} className="text-inherit hover:bg-transparent hover:text-inherit hover:opacity-60">{playing ? <Pause strokeWidth={1} /> : <Play strokeWidth={1} />}</Button>
        </div>
        <Button asChild variant="ghost" size="icon" className="absolute bottom-4 right-5 z-10 text-on-media hover:bg-transparent hover:text-on-media"><a href="#brand-ethos" aria-label="Continue to the Von Marloe ethos"><ArrowDown strokeWidth={1} /></a></Button>
      </section>

      <section id="brand-ethos" className="scroll-mt-20 border-b bg-background px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow text-accent">Brand Ethos · From Still Water</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground md:text-6xl">
              A community with product.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-navy">
              Before the art of reinvention, there is reflection — and reflection only happens in still water. Von Marloe is refined leisurewear designed for that process of becoming, built to serve as a quiet badge for those evolving through experience.
            </p>
            <Link to="/about" className="eyebrow mt-8 inline-block border-b border-accent pb-1 text-accent transition-opacity hover:opacity-70">
              Read the full ethos
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 border-t pt-8 md:col-span-5 md:border-t-0 md:border-l md:pt-0 md:pl-10">
            {brandPillars.map((pillar) => (
              <div key={pillar.num}>
                <p className="font-serif text-2xl italic text-accent">{pillar.num}</p>
                <p className="mt-1 font-serif text-lg font-semibold text-foreground">{pillar.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        {[
          { img: look1, t: "Chapter 01: Metanoia", s: "A profound change of heart, mind, and character" },
          { img: look2, t: "All Natural Fibers", s: "350–450 GSM French Terry, Merino Wool & Linen" },
        ].map((c) => (
          <Link to="/shop" key={c.t} className="group relative block overflow-hidden">
            <img src={c.img} alt={c.t} width={896} height={1152} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/65 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-8 right-8 text-on-media md:left-10">
              <p className="eyebrow">{c.s}</p>
              <h2 className="mt-2 font-serif text-4xl font-semibold md:text-5xl">{c.t}</h2>
            </div>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-accent">Pre-Launch · Limited Run (100–150 Units / Style)</p>
            <h2 className="mt-2 font-serif text-5xl font-semibold">Chapter 01: Metanoia</h2>
          </div>
          <Link to="/shop" className="eyebrow text-accent underline underline-offset-4">View Chapter</Link>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((p) => <ProductCard key={p.name} p={p} />)}
        </div>
      </section>

      <section className="relative h-[78vh] min-h-[520px] overflow-hidden bg-primary">
        <video src={hero.url} poster={look1} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full scale-110 object-cover grayscale" />
        <div className="absolute inset-0 bg-overlay" />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-on-media">
          <p className="eyebrow">The Von Marloe World — Los Angeles</p>
          <p className="mt-6 max-w-3xl font-serif text-3xl italic md:text-6xl">
            "Your life is shaped not by what happens to you, but by how you evolve from it."
          </p>
          <Link to="/about" className="eyebrow mt-10 underline underline-offset-4">Enter the Journal</Link>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1400px] flex-col items-center px-6 py-20 text-center">
        <BrandImage src={swanNavy.url} alt="Von Marloe Swan Emblem" className="h-12 w-auto" />
        <p className="eyebrow mt-5 text-accent">Foundation over Hype · Quality over Noise · Process over Spotlight</p>
      </section>

      <Footer />
    </div>
  );
}
