import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Building2,
  Calendar,
  TrendingUp,
  Settings,
  Shield,
  Bell,
  Globe,
  Database,
  CreditCard,
  MessageSquare,
  BarChart3,
  Search,
  MoreVertical,
  Check,
  X,
  Edit,
  Trash2,
  Eye,
  ChevronRight,
  AlertTriangle,
  Activity,
  DollarSign,
  UserPlus,
  Store,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Përdorues Total", value: "12,847", change: "+12%", icon: Users, color: "text-primary" },
  { label: "Biznese Aktive", value: "1,234", change: "+8%", icon: Building2, color: "text-accent" },
  { label: "Rezervime Sot", value: "847", change: "+23%", icon: Calendar, color: "text-status-available" },
  { label: "Të Ardhura", value: "€24.5K", change: "+15%", icon: DollarSign, color: "text-status-partial" },
];

const recentUsers = [
  { id: 1, name: "Ema Hoxha", email: "ema@email.com", role: "customer", status: "active", avatar: "E", joined: "2 orë më parë" },
  { id: 2, name: "Arben Krasniqi", email: "arben@business.com", role: "business", status: "pending", avatar: "A", joined: "5 orë më parë" },
  { id: 3, name: "Luna Berisha", email: "luna@email.com", role: "customer", status: "active", avatar: "L", joined: "1 ditë më parë" },
  { id: 4, name: "Driton Morina", email: "driton@salon.com", role: "business", status: "suspended", avatar: "D", joined: "2 ditë më parë" },
];

const recentBusinesses = [
  { id: 1, name: "Studio Bella", category: "Parukeri", status: "approved", owner: "Ana M.", bookings: 156, rating: 4.9 },
  { id: 2, name: "ProBuild Masters", category: "Ndërtim", status: "pending", owner: "Besart K.", bookings: 0, rating: 0 },
  { id: 3, name: "ElektroPro", category: "Elektricist", status: "approved", owner: "Faton R.", bookings: 89, rating: 4.7 },
];

const adminMenuItems = [
  { id: "overview", icon: BarChart3, label: "Përmbledhje" },
  { id: "users", icon: Users, label: "Përdoruesit" },
  { id: "businesses", icon: Building2, label: "Bizneset" },
  { id: "bookings", icon: Calendar, label: "Rezervimet" },
  { id: "payments", icon: CreditCard, label: "Pagesat" },
  { id: "reviews", icon: MessageSquare, label: "Vlerësimet" },
  { id: "notifications", icon: Bell, label: "Njoftimet" },
  { id: "languages", icon: Globe, label: "Gjuhët" },
  { id: "security", icon: Shield, label: "Siguria" },
  { id: "settings", icon: Settings, label: "Cilësimet" },
];

const systemAlerts = [
  { type: "warning", message: "5 biznese presin aprovim", time: "5 min" },
  { type: "error", message: "3 ankesa të pa-trajtuara", time: "1 orë" },
  { type: "info", message: "Backup i fundit: Sot 03:00", time: "5 orë" },
];

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex min-h-screen flex-col bg-background pb-6">
      {/* Admin Header */}
      <div className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="mx-auto max-w-md px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive">
                <Shield className="h-5 w-5 text-destructive-foreground" />
              </div>
              <div>
                <h1 className="font-bold text-foreground">Super Admin</h1>
                <p className="text-[10px] text-muted-foreground">God Mode</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="iconSm" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
                  8
                </span>
              </Button>
              <Button variant="ghost" size="iconSm">
                <Activity className="h-5 w-5 text-status-available" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation Pills */}
      <div className="flex gap-2 overflow-x-auto px-4 py-3 hide-scrollbar">
        {adminMenuItems.slice(0, 6).map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors",
              activeTab === item.id
                ? "gradient-primary text-primary-foreground shadow-glow"
                : "bg-secondary text-secondary-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </button>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 px-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl bg-card p-4 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <stat.icon className={cn("h-5 w-5", stat.color)} />
              <span className="rounded-full bg-status-available/10 px-2 py-0.5 text-[10px] font-medium text-status-available">
                {stat.change}
              </span>
            </div>
            <p className="mt-2 text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* System Alerts */}
      <div className="mt-4 px-4">
        <h2 className="mb-2 text-sm font-semibold text-foreground">Alarme Sistemi</h2>
        <div className="space-y-2">
          {systemAlerts.map((alert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "flex items-center justify-between rounded-xl p-3",
                alert.type === "error" && "bg-destructive/10",
                alert.type === "warning" && "bg-status-partial/10",
                alert.type === "info" && "bg-primary/10"
              )}
            >
              <div className="flex items-center gap-3">
                <AlertTriangle
                  className={cn(
                    "h-4 w-4",
                    alert.type === "error" && "text-destructive",
                    alert.type === "warning" && "text-status-partial",
                    alert.type === "info" && "text-primary"
                  )}
                />
                <span className="text-sm text-foreground">{alert.message}</span>
              </div>
              <span className="text-xs text-muted-foreground">{alert.time}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="mt-4 px-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Kërko përdorues, biznese, rezervime..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-12 w-full rounded-xl bg-secondary pl-12 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Recent Users Section */}
      <div className="mt-4 px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">Përdorues të Fundit</h2>
          <button className="flex items-center gap-1 text-xs font-medium text-primary">
            Shiko të gjithë
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-3 space-y-2">
          {recentUsers.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-between rounded-xl bg-card p-3 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-primary-foreground",
                    user.role === "business" ? "gradient-accent" : "gradient-primary"
                  )}
                >
                  {user.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-foreground">{user.name}</p>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-medium",
                        user.status === "active" && "bg-status-available/10 text-status-available",
                        user.status === "pending" && "bg-status-partial/10 text-status-partial",
                        user.status === "suspended" && "bg-destructive/10 text-destructive"
                      )}
                    >
                      {user.status === "active" && "Aktiv"}
                      {user.status === "pending" && "Në pritje"}
                      {user.status === "suspended" && "Pezulluar"}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="iconSm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="iconSm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="iconSm" className="text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Businesses Section */}
      <div className="mt-4 px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">Biznese të Fundit</h2>
          <button className="flex items-center gap-1 text-xs font-medium text-primary">
            Shiko të gjitha
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-3 space-y-2">
          {recentBusinesses.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl bg-card p-3 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                    <Store className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-foreground">{business.name}</p>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[10px] font-medium",
                          business.status === "approved" && "bg-status-available/10 text-status-available",
                          business.status === "pending" && "bg-status-partial/10 text-status-partial"
                        )}
                      >
                        {business.status === "approved" && "Aprovuar"}
                        {business.status === "pending" && "Në pritje"}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {business.category} • {business.owner}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-foreground">{business.bookings}</p>
                  <p className="text-[10px] text-muted-foreground">rezervime</p>
                </div>
              </div>

              {business.status === "pending" && (
                <div className="mt-3 flex gap-2 border-t border-border pt-3">
                  <Button size="sm" className="flex-1 gap-1">
                    <Check className="h-4 w-4" />
                    Aprovo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 gap-1 border-destructive text-destructive">
                    <X className="h-4 w-4" />
                    Refuzo
                  </Button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-4 px-4">
        <h2 className="mb-3 text-sm font-semibold text-foreground">Veprime të Shpejta</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: UserPlus, label: "Shto Përdorues", color: "bg-primary/10 text-primary" },
            { icon: Store, label: "Shto Biznes", color: "bg-accent/10 text-accent" },
            { icon: Database, label: "Backup Tani", color: "bg-status-available/10 text-status-available" },
            { icon: Globe, label: "Menaxho Gjuhët", color: "bg-status-partial/10 text-status-partial" },
          ].map((action, index) => (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl", action.color)}>
                <action.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-foreground">{action.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Activity Chart Placeholder */}
      <div className="mt-4 px-4">
        <div className="rounded-2xl bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-foreground">Aktiviteti Javor</h2>
            <Button variant="ghost" size="sm" className="text-xs">
              Shiko raport
            </Button>
          </div>
          <div className="mt-4 flex h-32 items-end justify-between gap-2">
            {["Hën", "Mar", "Mër", "Enj", "Pre", "Sht", "Dje"].map((day, index) => {
              const height = [60, 80, 45, 90, 70, 100, 55][index];
              return (
                <div key={day} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-lg gradient-primary transition-all"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-[10px] text-muted-foreground">{day}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
