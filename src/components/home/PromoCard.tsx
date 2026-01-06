import { motion } from "framer-motion";
import { Timer, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PromoCardProps {
  title: string;
  business: string;
  discount: string;
  originalPrice: string;
  newPrice: string;
  image: string;
  expiresIn: string;
  isLimited?: boolean;
  delay?: number;
}

export function PromoCard({
  title,
  business,
  discount,
  originalPrice,
  newPrice,
  image,
  expiresIn,
  isLimited,
  delay = 0,
}: PromoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="relative w-64 shrink-0 overflow-hidden rounded-2xl bg-card shadow-sm"
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        
        {/* Discount Badge */}
        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center rounded-full gradient-accent px-3 py-1 text-sm font-bold text-accent-foreground shadow-accent">
            -{discount}
          </span>
        </div>

        {/* Favorite Button */}
        <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-card/90 backdrop-blur-sm transition-colors hover:bg-card">
          <Heart className="h-4 w-4 text-muted-foreground" />
        </button>

        {/* Limited Badge */}
        {isLimited && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-destructive px-2 py-1 text-[10px] font-semibold text-destructive-foreground">
            <Timer className="h-3 w-3" />
            Sasi e limituar
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        <p className="text-xs text-muted-foreground">{business}</p>
        <h3 className="mt-1 font-semibold text-foreground line-clamp-1">{title}</h3>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-primary">{newPrice}</span>
            <span className="text-xs text-muted-foreground line-through">{originalPrice}</span>
          </div>
          <Button size="iconSm" variant="default" className="rounded-full">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-2 flex items-center gap-1 text-accent">
          <Timer className="h-3 w-3" />
          <span className="text-[10px] font-medium">Skadon për {expiresIn}</span>
        </div>
      </div>
    </motion.div>
  );
}
