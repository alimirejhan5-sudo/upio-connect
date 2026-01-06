import { Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function SearchBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2"
    >
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Kërko biznese, shërbime..."
          className="h-12 w-full rounded-xl bg-secondary pl-12 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <Button variant="glass" size="icon" className="h-12 w-12 shrink-0 rounded-xl border-2 border-border">
        <SlidersHorizontal className="h-5 w-5" />
      </Button>
    </motion.div>
  );
}
