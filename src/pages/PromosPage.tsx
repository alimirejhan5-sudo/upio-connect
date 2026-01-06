import { motion } from "framer-motion";
import { Filter, Grid, List, Timer, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const allPromos = [
  {
    id: 1,
    title: "Prerje + Stilim Profesional",
    business: "Studio Bella",
    category: "Parukeri",
    discount: "30%",
    originalPrice: "€40",
    newPrice: "€28",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
    expiresIn: "2 ditë",
    isLimited: true,
    saved: false,
  },
  {
    id: 2,
    title: "Instalim Komplet AC",
    business: "KlimaExpert",
    category: "Elektricist",
    discount: "25%",
    originalPrice: "€200",
    newPrice: "€150",
    image: "https://images.unsplash.com/photo-1631545806609-35d4ae440431?w=400&h=400&fit=crop",
    expiresIn: "5 ditë",
    isLimited: false,
    saved: true,
  },
  {
    id: 3,
    title: "Makeup për Dasma",
    business: "Glamour Studio",
    category: "Makeup",
    discount: "20%",
    originalPrice: "€100",
    newPrice: "€80",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop",
    expiresIn: "1 javë",
    isLimited: true,
    saved: false,
  },
  {
    id: 4,
    title: "Renovim Banje Komplet",
    business: "ProBuild Masters",
    category: "Ndërtim",
    discount: "15%",
    originalPrice: "€2000",
    newPrice: "€1700",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=400&fit=crop",
    expiresIn: "3 ditë",
    isLimited: false,
    saved: false,
  },
];

const categories = ["Të gjitha", "Parukeri", "Makeup", "Ndërtim", "Elektricist"];

export function PromosPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeCategory, setActiveCategory] = useState("Të gjitha");

  return (
    <div className="flex flex-col gap-4 pb-6 pt-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-4"
      >
        <h1 className="text-2xl font-bold text-foreground">Oferta & Promocione</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Zbritje ekskluzive vetëm për ty
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex items-center justify-between px-4">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors",
                activeCategory === cat
                  ? "gradient-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-4">
        <Button variant="outline" size="sm" className="gap-2">
          <Filter className="h-4 w-4" />
          Filtro
        </Button>
        <div className="flex gap-1 rounded-lg bg-secondary p-1">
          <button
            onClick={() => setViewMode("grid")}
            className={cn(
              "rounded-md p-2 transition-colors",
              viewMode === "grid" ? "bg-card shadow-sm" : "text-muted-foreground"
            )}
          >
            <Grid className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={cn(
              "rounded-md p-2 transition-colors",
              viewMode === "list" ? "bg-card shadow-sm" : "text-muted-foreground"
            )}
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Promos Grid/List */}
      <div
        className={cn(
          "px-4",
          viewMode === "grid" ? "grid grid-cols-2 gap-3" : "flex flex-col gap-3"
        )}
      >
        {allPromos.map((promo, index) => (
          <motion.div
            key={promo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "overflow-hidden rounded-2xl bg-card shadow-sm",
              viewMode === "list" && "flex"
            )}
          >
            <div
              className={cn(
                "relative",
                viewMode === "grid" ? "aspect-square" : "aspect-square w-32 shrink-0"
              )}
            >
              <img
                src={promo.image}
                alt={promo.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute left-2 top-2">
                <span className="inline-flex items-center rounded-full gradient-accent px-2 py-1 text-xs font-bold text-accent-foreground">
                  -{promo.discount}
                </span>
              </div>
              {promo.isLimited && (
                <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-destructive/90 px-2 py-0.5 text-[10px] font-medium text-destructive-foreground">
                  <Timer className="h-3 w-3" />
                  Limituar
                </div>
              )}
            </div>

            <div className={cn("flex flex-1 flex-col p-3", viewMode === "list" && "justify-center")}>
              <p className="text-[10px] text-muted-foreground">{promo.business}</p>
              <h3 className="mt-0.5 text-sm font-semibold text-foreground line-clamp-2">
                {promo.title}
              </h3>
              
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <span className="text-base font-bold text-primary">{promo.newPrice}</span>
                  <span className="ml-1 text-xs text-muted-foreground line-through">
                    {promo.originalPrice}
                  </span>
                </div>
                <div className="flex gap-1">
                  <button className={cn(
                    "rounded-full p-1.5 transition-colors",
                    promo.saved ? "bg-accent/10 text-accent" : "bg-secondary text-muted-foreground"
                  )}>
                    <Heart className={cn("h-4 w-4", promo.saved && "fill-accent")} />
                  </button>
                  <button className="rounded-full bg-secondary p-1.5 text-muted-foreground transition-colors hover:bg-secondary/80">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-2 flex items-center gap-1 text-accent">
                <Timer className="h-3 w-3" />
                <span className="text-[10px] font-medium">Skadon për {promo.expiresIn}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
