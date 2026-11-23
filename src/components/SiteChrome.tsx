import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import wordmarkCream from "@/assets/brand/wordmark-cream.png.asset.json";
import wordmarkNavy from "@/assets/brand/wordmark-navy.png.asset.json";
import swanCream from "@/assets/brand/swan-cream.png.asset.json";
import wordmarkStudiosCream from "@/assets/brand/wordmark-studios-cream.png.asset.json";

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [clock, setClock] = useState("From Still Water");
  useEffect(() => {
    const update = () => setClock(new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles", weekday: "long", month: "long", day: "numeric", year: "numeric",
      hour: "2-digit", minute: "2-digit", timeZoneName: "short",
    }).format(new Date()));
    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);
  const tone = overlay ? "text-on-media" : "text-foreground border-b";
  const wordmark = overlay ? wordmarkCream.url : wordmarkNavy.url;
  return (
    <header className={`${overlay ? "absolute" : "sticky bg-background"} top-0 z-30 w-full ${tone}`}>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-3 md:px-6">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu" className="justify-self-start text-inherit hover:bg-transparent hover:text-inherit hover:opacity-60"><Menu strokeWidth={1} /></Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[85%] overflow-y-auto px-8 pt-14 sm:max-w-[420px]">
            <SheetTitle><img src={wordmarkNavy.url} alt="VON MARLOE" className="h-4 w-auto" /></SheetTitle>
            <SheetDescription className="mt-5 text-xs">Los Angeles · From Still Water</SheetDescription>
            <nav className="mt-12 space-y-7" aria-label="Main navigation">
              <Link to="/shop" onClick={() => setOpen(false)} className="flex items-center justify-between text-sm uppercase">Shop All <ArrowUpRight size={16} /></Link>
              <Link to="/shop" onClick={() => setOpen(false)} className="block text-sm uppercase">Chapter 01: Metanoia</Link>
              <div className="border-t pt-7">
                <Link to="/about" onClick={() => setOpen(false)} className="flex items-center justify-between text-sm uppercase">Journal & Community <ArrowUpRight size={16} /></Link>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">The Art of Reinvention</p>
              </div>
              <Link to="/" onClick={() => setOpen(false)} className="block text-xs text-muted-foreground">From Still Water — The Film</Link>
            </nav>
            <img src={swanCream.url} alt="" className="mt-20 h-14 w-auto bg-primary p-2" />
            <p className="mt-5 text-xs text-muted-foreground">Chapter 01 · Pre-Launch · Natural Fibers Only</p>
          </SheetContent>
        </Sheet>
        <Link to="/" className="flex justify-center" aria-label="Von Marloe Home">
          <img src={wordmark} alt="VON MARLOE" className="h-3 w-auto sm:h-3.5" />
        </Link>
        <div className="flex items-center justify-end gap-5 text-[11px] uppercase">
          <Link to="/about" className="hidden transition-opacity hover:opacity-60 sm:inline">Journal</Link>
          <Link to="/shop" className="transition-opacity hover:opacity-60">Shop</Link>
        </div>
      </div>
      {overlay && <p className="px-4 pb-4 text-center text-[9px] sm:text-[10px]">Los Angeles, CA | {clock}</p>}
    </header>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;
    setJoined(true);
    setEmail("");
  };

  return (
    <footer className="border-t bg-background px-6 py-12 text-foreground">
      <section aria-labelledby="newsletter-heading" className="mx-auto mb-12 flex max-w-[1600px] flex-col justify-between gap-8 border-b pb-12 md:flex-row md:items-center">
        <div>
          <p className="eyebrow text-muted-foreground">Von Marloe · Los Angeles</p>
          <h2 id="newsletter-heading" className="mt-3 font-serif text-3xl sm:text-4xl">Stay in the Chapter</h2>
          <p className="mt-3 text-sm text-muted-foreground">New chapters, collection releases, and community gatherings.</p>
        </div>
        <div className="w-full md:max-w-md">
          <form className="flex items-center gap-3 border-b border-foreground" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setJoined(false); }}
              placeholder="Your email address"
              aria-label="Email address"
              className="min-w-0 flex-1 bg-transparent py-4 text-sm text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
            <Button type="submit" variant="ghost" className="shrink-0 gap-3 px-2 text-xs uppercase">Sign up <ArrowRight size={16} strokeWidth={1} /></Button>
          </form>
          {joined && <p role="status" className="mt-3 text-xs text-muted-foreground">Email signup is coming soon. Please check back before Chapter 01 launches.</p>}
        </div>
      </section>
      <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 bg-primary p-4"><img src={swanCream.url} alt="Von Marloe Swan Emblem" className="h-8 w-auto" />
            <img src={wordmarkStudiosCream.url} alt="VON MARLOE STUDIOS" className="h-4 w-auto" /></div>
          </div>
          <p className="mt-6 font-serif text-2xl italic">
            "From Still Water" — The Art of Reinvention
          </p>
        </div>
        <ul className="space-y-3 text-xs text-muted-foreground">
          <li><Link to="/shop" className="hover:text-foreground">Chapter 01: Metanoia</Link></li>
          <li><Link to="/about" className="hover:text-foreground">Our Ethos</Link></li>
          <li><Link to="/about" className="hover:text-foreground">Live Events</Link></li>
        </ul>
        <ul className="space-y-3 text-xs text-muted-foreground">
          <li>Los Angeles, CA</li>
          <li>Natural Fibers Only</li>
          <li>Pre-Launch</li>
        </ul>
      </div>
      <p className="mx-auto mt-12 max-w-[1600px] border-t pt-6 text-[10px] text-muted-foreground">
        © 2026 Von Marloe — Los Angeles · Refined leisurewear for the process of reinvention
      </p>
    </footer>
  );
}
