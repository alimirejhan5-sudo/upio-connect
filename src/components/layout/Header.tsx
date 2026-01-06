import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeaderProps {
  title?: string;
  showSearch?: boolean;
  showNotifications?: boolean;
}

export function Header({ title = "Upio", showSearch = true, showNotifications = true }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 glass border-b border-border/50 safe-top">
      <div className="mx-auto max-w-md px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-primary">
              <span className="text-lg font-bold text-primary-foreground">U</span>
            </div>
            <span className="text-xl font-bold text-foreground">{title}</span>
          </motion.div>

          <div className="flex items-center gap-2">
            {showSearch && (
              <Button variant="glass" size="icon" className="rounded-xl">
                <Search className="h-5 w-5" />
              </Button>
            )}
            {showNotifications && (
              <Button variant="glass" size="icon" className="relative rounded-xl">
                <Bell className="h-5 w-5" />
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                  3
                </span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
