import { motion } from "framer-motion";
import { Star, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

type AvailabilityStatus = "available" | "partial" | "booked";

interface BusinessCardProps {
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  location: string;
  distance: string;
  image: string;
  status: AvailabilityStatus;
  nextSlot?: string;
  delay?: number;
}

const statusConfig = {
  available: {
    label: "E lirë",
    className: "bg-status-available",
  },
  partial: {
    label: "Pjesërisht",
    className: "bg-status-partial",
  },
  booked: {
    label: "E zënë",
    className: "bg-status-booked",
  },
};

export function BusinessCard({
  name,
  category,
  rating,
  reviewCount,
  location,
  distance,
  image,
  status,
  nextSlot,
  delay = 0,
}: BusinessCardProps) {
  const statusInfo = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileTap={{ scale: 0.98 }}
      className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute left-3 top-3">
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold text-primary-foreground",
              statusInfo.className
            )}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-foreground" />
            {statusInfo.label}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-card/90 px-2 py-1 backdrop-blur-sm">
          <Star className="h-3 w-3 fill-accent text-accent" />
          <span className="text-xs font-semibold">{rating}</span>
          <span className="text-[10px] text-muted-foreground">({reviewCount})</span>
        </div>

        {/* Business Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="font-semibold text-primary-foreground">{name}</h3>
          <p className="text-xs text-primary-foreground/80">{category}</p>
        </div>
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span className="text-xs">{location}</span>
            <span className="text-xs">• {distance}</span>
          </div>
          {nextSlot && status !== "booked" && (
            <div className="flex items-center gap-1 text-primary">
              <Clock className="h-3.5 w-3.5" />
              <span className="text-xs font-medium">{nextSlot}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
