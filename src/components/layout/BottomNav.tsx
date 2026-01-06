import { Home, Calendar, Tag, MapPin, User } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "home", icon: Home, label: "Kryefaqja" },
  { id: "bookings", icon: Calendar, label: "Rezervime" },
  { id: "promos", icon: Tag, label: "Oferta" },
  { id: "map", icon: MapPin, label: "Harta" },
  { id: "profile", icon: User, label: "Profili" },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-border/50 safe-bottom">
      <div className="mx-auto max-w-md">
        <div className="flex items-center justify-around py-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="relative flex flex-col items-center gap-1 px-4 py-2 transition-colors"
              >
                <div className="relative">
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -inset-2 rounded-xl gradient-primary opacity-20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon
                    className={cn(
                      "relative h-6 w-6 transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                  />
                </div>
                <span
                  className={cn(
                    "text-[10px] font-medium transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
