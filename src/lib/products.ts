import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import look1 from "@/assets/look1.jpg";
import look2 from "@/assets/look2.jpg";

export type ProductCategory = "French Terry" | "Outerwear" | "Knitwear" | "Trousers";

export interface Product {
  name: string;
  color: string;
  fabric: string;
  category: ProductCategory;
  price: number;
  img: string;
}

export const products: Product[] = [
  { name: "Still Water Crewneck", color: "Forest Olive", fabric: "420 GSM French Terry", category: "French Terry", price: 165, img: p1 },
  { name: "Metanoia Varsity Jacket", color: "Midnight Navy / Parchment", fabric: "Brushed Wool & Cotton", category: "Outerwear", price: 695, img: p2 },
  { name: "Ribbed Merino Cardigan", color: "Warm Parchment", fabric: "100% Merino Wool", category: "Knitwear", price: 280, img: p3 },
  { name: "Pleated Studio Trouser", color: "Espresso", fabric: "Cotton-Linen Blend", category: "Trousers", price: 225, img: p4 },
];

export const chapterCatalog: Product[] = [
  ...products,
  { name: "Solo Swan Knit Pullover", color: "Parchment / Navy", fabric: "100% Merino Wool", category: "Knitwear", price: 260, img: look1 },
  { name: "Long Walk Overcoat", color: "Deep Slate", fabric: "Heavyweight Wool Blend", category: "Outerwear", price: 740, img: look2 },
];

export const fabricStandards = [
  { title: "Heavyweight French Terry", detail: "350–450 GSM for structured hoodies and crewnecks." },
  { title: "100% Cotton Brushed Fleece", detail: "Soft-hand brushed interior built for cooler mornings." },
  { title: "Merino Wool & Linen", detail: "Natural fibers for elevated knitwear and warm-weather drape." },
  { title: "Tactile Hardware & Embroidery", detail: "Embroidered solo swan, debossed leather labels, and custom metal buttons." },
];

export const brandPillars = [
  { num: "01", title: "Community with Product", body: "The community is the brand. Every piece exists to serve as a quiet badge of representation for the movement." },
  { num: "02", title: "Inspiration from Real Stories", body: "Built on authentic human experiences — storytelling that brings people together across backgrounds." },
  { num: "03", title: "Embracing Reinvention", body: "Going through change is not a sign of failure; it is an artform meant to be embraced and celebrated." },
  { num: "04", title: "Evolving from Experience", body: "The past is not discarded — it is processed. We extract the lesson and use it as material for what comes next." },
];

export const brandWorlds = [
  { name: "Los Angeles", note: "Hazy gold-hour light, low-key affluence, car culture.", dot: "bg-swatch-la" },
  { name: "1990s Era", note: "Vintage sportswear silhouettes, film grain, mixtape culture.", dot: "bg-swatch-nineties" },
  { name: "Cafe Culture", note: "Third-wave coffee shops, quiet mornings, slow starts.", dot: "bg-swatch-cafe" },
  { name: "Martial Arts Studios", note: "Discipline, sweat-earned confidence, gym culture.", dot: "bg-swatch-martial" },
  { name: "Vintage Ephemera", note: "Old photographs, ticket stubs, handwritten notes.", dot: "bg-swatch-ephemera" },
  { name: "South Korea", note: "A private, understated aesthetic shared by all three founders.", dot: "bg-swatch-korea" },
];

export const eventTraits = [
  { title: "Collaborator Evolution Stories", body: "Each gathering centers on a local founder or creative's own reinvention — lived in real time.", dot: "bg-swatch-martial" },
  { title: "Local Vendors & Cafes", body: "Independent food stands and small businesses alongside Von Marloe — community commerce, not just a pop-up.", dot: "bg-swatch-cafe" },
  { title: "Community Photo Booth", body: "Our \"who you will be soon\" board captures every guest's next chapter.", dot: "bg-swatch-teal" },
  { title: "Event-Only Editions", body: "Exclusive event tote bags and community raffles — never reproduced, earned by showing up.", dot: "bg-swatch-la" },
];

export const founders = [
  { initial: "M", name: "Miles Song", role: "Co-Founder & Creative Director", bio: "Leads brand identity, creative direction, content strategy, and community from Long Beach, CA." },
  { initial: "J", name: "Jason", role: "Co-Founder — Community & Operations", bio: "Leads outreach to new heroes, community partnerships, business operations, and growth." },
  { initial: "J", name: "John", role: "Co-Founder — Fulfillment & Logistics", bio: "Heads Los Angeles studio operations, warehousing, and fulfillment across Southern California." },
];
