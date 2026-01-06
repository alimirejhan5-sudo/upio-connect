import { motion } from "framer-motion";
import { Scissors, Wrench, Zap, Paintbrush, Hammer, Sparkles, TrendingUp } from "lucide-react";
import { SearchBar } from "@/components/home/SearchBar";
import { SectionHeader } from "@/components/home/SectionHeader";
import { CategoryCard } from "@/components/home/CategoryCard";
import { BusinessCard } from "@/components/home/BusinessCard";
import { PromoCard } from "@/components/home/PromoCard";

interface HomePageProps {
  onBookNow?: () => void;
}

const categories = [
  { icon: Scissors, label: "Parukeri", count: 156 },
  { icon: Sparkles, label: "Makeup", count: 89 },
  { icon: Wrench, label: "Montim", count: 234 },
  { icon: Zap, label: "Elektricist", count: 112 },
  { icon: Paintbrush, label: "Lyerje", count: 78 },
  { icon: Hammer, label: "Ndërtim", count: 167 },
];

const trendingBusinesses = [
  {
    name: "Studio Bella",
    category: "Parukeri & Makeup",
    rating: 4.9,
    reviewCount: 324,
    location: "Qendër, Shkup",
    distance: "1.2 km",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
    status: "available" as const,
    nextSlot: "14:30",
  },
  {
    name: "ProBuild Masters",
    category: "Ndërtim & Renovim",
    rating: 4.8,
    reviewCount: 189,
    location: "Aerodrom, Shkup",
    distance: "3.5 km",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
    status: "partial" as const,
    nextSlot: "Nesër 09:00",
  },
  {
    name: "ElektroPro",
    category: "Shërbime Elektrike",
    rating: 4.7,
    reviewCount: 156,
    location: "Karposh, Shkup",
    distance: "2.8 km",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop",
    status: "booked" as const,
  },
];

const promos = [
  {
    title: "Prerje + Stilim Profesional",
    business: "Studio Bella",
    discount: "30%",
    originalPrice: "€40",
    newPrice: "€28",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
    expiresIn: "2 ditë",
    isLimited: true,
  },
  {
    title: "Instalim Komplet AC",
    business: "KlimaExpert",
    discount: "25%",
    originalPrice: "€200",
    newPrice: "€150",
    image: "https://images.unsplash.com/photo-1631545806609-35d4ae440431?w=400&h=300&fit=crop",
    expiresIn: "5 ditë",
  },
  {
    title: "Makeup për Dasma",
    business: "Glamour Studio",
    discount: "20%",
    originalPrice: "€100",
    newPrice: "€80",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop",
    expiresIn: "1 javë",
  },
];

export function HomePage({ onBookNow }: HomePageProps) {
  return (
    <div className="flex flex-col gap-6 pb-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-4 pt-4"
      >
        <h1 className="text-2xl font-bold text-foreground">
          Mirësevjen në <span className="text-primary">Upio</span>
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Gjej dhe rezervo shërbimet më të mira pranë teje
        </p>
      </motion.div>

      {/* Search */}
      <div className="px-4">
        <SearchBar />
      </div>

      {/* Categories */}
      <div className="px-4">
        <SectionHeader title="Kategoritë" subtitle="Eksploro sipas llojit të shërbimit" />
        <div className="mt-3 grid grid-cols-3 gap-3">
          {categories.map((cat, index) => (
            <CategoryCard
              key={cat.label}
              icon={cat.icon}
              label={cat.label}
              count={cat.count}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Trending Businesses */}
      <div className="px-4">
        <SectionHeader
          title="Trending"
          subtitle="Bizneset më të kërkuara"
          onSeeAll={() => {}}
        />
        <div className="mt-3 flex flex-col gap-3">
          {trendingBusinesses.map((business, index) => (
            <BusinessCard
              key={business.name}
              {...business}
              delay={index * 0.1}
              onClick={onBookNow}
            />
          ))}
        </div>
      </div>

      {/* Promotions */}
      <div>
        <div className="px-4">
          <SectionHeader
            title="Oferta Speciale"
            subtitle="Zbritje ekskluzive për ty"
            onSeeAll={() => {}}
          />
        </div>
        <div className="mt-3 flex gap-3 overflow-x-auto px-4 pb-2 hide-scrollbar">
          {promos.map((promo, index) => (
            <PromoCard key={promo.title} {...promo} delay={index * 0.1} />
          ))}
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="mx-4 overflow-hidden rounded-2xl gradient-primary p-4 shadow-glow">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/20">
            <TrendingUp className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-primary-foreground">Sugjerime AI</h3>
            <p className="mt-1 text-sm text-primary-foreground/80">
              Bazuar në historinë tënde, rekomandojmë "Studio Bella" për prerjen e radhës.
            </p>
            <button className="mt-2 text-sm font-medium text-primary-foreground underline underline-offset-2">
              Shiko më shumë
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
