import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  icon: LucideIcon;
  label: string;
  count: number;
  gradient?: string;
  delay?: number;
}

export function CategoryCard({ icon: Icon, label, count, gradient, delay = 0 }: CategoryCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "flex flex-col items-center gap-2 rounded-2xl p-4 transition-shadow hover:shadow-md",
        gradient || "bg-card"
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <span className="text-xs font-medium text-foreground">{label}</span>
      <span className="text-[10px] text-muted-foreground">{count} biznese</span>
    </motion.button>
  );
}
