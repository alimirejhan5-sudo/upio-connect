import { motion } from "framer-motion";
import { MapPin, Navigation, Layers, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BusinessCard } from "@/components/home/BusinessCard";

const nearbyBusinesses = [
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
    name: "ElektroPro",
    category: "Shërbime Elektrike",
    rating: 4.7,
    reviewCount: 156,
    location: "Karposh, Shkup",
    distance: "2.8 km",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop",
    status: "partial" as const,
    nextSlot: "16:00",
  },
];

export function MapPage() {
  const [selectedBusiness, setSelectedBusiness] = useState<typeof nearbyBusinesses[0] | null>(null);

  return (
    <div className="relative h-[calc(100vh-140px)]">
      {/* Map Background - Placeholder */}
      <div className="absolute inset-0 bg-secondary">
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="h-10 w-10 text-primary" />
            </div>
            <p className="mt-4 text-lg font-medium text-foreground">Harta Interaktive</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Shiko bizneset pranë teje në hartë
            </p>
          </div>
        </div>

        {/* Fake Map Pins */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute left-[30%] top-[35%]"
        >
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary shadow-glow">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 gradient-primary" />
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute right-[25%] top-[45%]"
        >
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-status-partial shadow-md">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-status-partial" />
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute left-[50%] top-[60%]"
        >
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-status-booked shadow-md">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-status-booked" />
          </div>
        </motion.div>
      </div>

      {/* Search Overlay */}
      <div className="absolute left-4 right-4 top-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Kërko në hartë..."
            className="h-12 w-full rounded-xl bg-card pl-12 pr-4 text-sm shadow-md placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute right-4 top-20 flex flex-col gap-2">
        <Button variant="glass" size="icon" className="h-10 w-10 rounded-xl bg-card shadow-md">
          <Layers className="h-5 w-5" />
        </Button>
        <Button variant="glass" size="icon" className="h-10 w-10 rounded-xl bg-card shadow-md">
          <Navigation className="h-5 w-5" />
        </Button>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 rounded-xl bg-card p-3 shadow-md">
        <p className="mb-2 text-xs font-medium text-foreground">Legjenda</p>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-status-available" />
            <span className="text-[10px] text-muted-foreground">E lirë</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-status-partial" />
            <span className="text-[10px] text-muted-foreground">Pjesërisht</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-status-booked" />
            <span className="text-[10px] text-muted-foreground">E zënë</span>
          </div>
        </div>
      </div>

      {/* Bottom Sheet - Nearby Businesses */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="absolute bottom-0 left-0 right-0 rounded-t-3xl bg-card px-4 pb-6 pt-4 shadow-lg"
      >
        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-muted" />
        <h3 className="mb-3 font-semibold text-foreground">Pranë Teje</h3>
        <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
          {nearbyBusinesses.map((business) => (
            <div key={business.name} className="w-72 shrink-0">
              <BusinessCard {...business} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
