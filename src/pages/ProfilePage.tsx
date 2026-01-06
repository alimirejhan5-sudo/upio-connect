import { motion } from "framer-motion";
import {
  User,
  Settings,
  CreditCard,
  Bell,
  Globe,
  HelpCircle,
  LogOut,
  ChevronRight,
  Star,
  Calendar,
  Heart,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfilePageProps {
  onAdminToggle?: () => void;
}

const menuItems = [
  {
    section: "Llogaria",
    items: [
      { icon: User, label: "Të dhënat personale", badge: null },
      { icon: CreditCard, label: "Pagesat & Faturat", badge: null },
      { icon: Bell, label: "Njoftimet", badge: "3" },
      { icon: Heart, label: "Të preferuarat", badge: "12" },
    ],
  },
  {
    section: "Preferencat",
    items: [
      { icon: Globe, label: "Gjuha", badge: "Shqip" },
      { icon: Shield, label: "Privatësia & Siguria", badge: null },
      { icon: Settings, label: "Cilësimet", badge: null },
    ],
  },
  {
    section: "Ndihmë",
    items: [
      { icon: HelpCircle, label: "Qendra e ndihmës", badge: null },
    ],
  },
];

const stats = [
  { icon: Calendar, value: "24", label: "Rezervime" },
  { icon: Star, value: "4.8", label: "Vlerësim" },
  { icon: Heart, value: "12", label: "Preferuar" },
];

export function ProfilePage({ onAdminToggle }: ProfilePageProps) {
  return (
    <div className="flex flex-col gap-6 pb-6 pt-4">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-4"
      >
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl gradient-primary text-3xl font-bold text-primary-foreground shadow-glow">
              E
            </div>
            <button className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-card shadow-md">
              <Settings className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Ema Hoxha</h1>
            <p className="text-sm text-muted-foreground">ema.hoxha@email.com</p>
            <span className="mt-1 inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              Anëtar Premium
            </span>
          </div>
        </div>
      </motion.div>

      {/* Admin Mode Button */}
      {onAdminToggle && (
        <div className="px-4">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={onAdminToggle}
            className="flex w-full items-center justify-between rounded-2xl bg-gradient-to-r from-destructive/10 to-destructive/5 p-4 border border-destructive/20"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive">
                <Shield className="h-5 w-5 text-destructive-foreground" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Super Admin</p>
                <p className="text-xs text-muted-foreground">Menaxho platformën</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-destructive" />
          </motion.button>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 px-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center rounded-2xl bg-card p-4 shadow-sm"
          >
            <stat.icon className="h-5 w-5 text-primary" />
            <span className="mt-2 text-xl font-bold text-foreground">{stat.value}</span>
            <span className="text-xs text-muted-foreground">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Menu Sections */}
      <div className="flex flex-col gap-6 px-4">
        {menuItems.map((section, sectionIndex) => (
          <motion.div
            key={section.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.1 }}
          >
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {section.section}
            </h2>
            <div className="overflow-hidden rounded-2xl bg-card shadow-sm">
              {section.items.map((item) => (
                <button
                  key={item.label}
                  className="flex w-full items-center justify-between border-b border-border/50 p-4 transition-colors hover:bg-secondary/50 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary">
                      <item.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                        {item.badge}
                      </span>
                    )}
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Logout Button */}
      <div className="px-4">
        <Button variant="outline" className="w-full gap-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
          <LogOut className="h-4 w-4" />
          Dilni nga llogaria
        </Button>
      </div>

      {/* Version */}
      <p className="text-center text-xs text-muted-foreground">
        Upio v1.0.0
      </p>
    </div>
  );
}
