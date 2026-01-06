import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, MoreVertical, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/home/SectionHeader";

const upcomingBookings = [
  {
    id: 1,
    business: "Studio Bella",
    service: "Prerje + Stilim",
    date: "Sot",
    time: "14:30",
    location: "Qendër, Shkup",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=100&h=100&fit=crop",
    status: "confirmed",
    countdown: "2 orë",
  },
  {
    id: 2,
    business: "ElektroPro",
    service: "Kontroll Instalimesh",
    date: "Nesër",
    time: "10:00",
    location: "Karposh, Shkup",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=100&h=100&fit=crop",
    status: "pending",
    countdown: "26 orë",
  },
];

const pastBookings = [
  {
    id: 3,
    business: "ProBuild Masters",
    service: "Renovim Banje",
    date: "15 Jan 2024",
    time: "09:00",
    location: "Aerodrom, Shkup",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=100&h=100&fit=crop",
    status: "completed",
    rating: 5,
  },
];

export function BookingsPage() {
  return (
    <div className="flex flex-col gap-6 px-4 pb-6 pt-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold text-foreground">Rezervimet</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Menaxho takimet e tua
        </p>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Sot", value: "1", color: "text-primary" },
          { label: "Këtë javë", value: "3", color: "text-accent" },
          { label: "Kompletuar", value: "24", color: "text-status-available" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center rounded-xl bg-card p-3 shadow-sm"
          >
            <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
            <span className="text-xs text-muted-foreground">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Upcoming Bookings */}
      <div>
        <SectionHeader title="Të ardhshme" />
        <div className="mt-3 flex flex-col gap-3">
          {upcomingBookings.map((booking, index) => (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-card p-4 shadow-sm"
            >
              {/* Countdown Badge */}
              <div className="absolute right-3 top-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  <Clock className="h-3 w-3" />
                  {booking.countdown}
                </span>
              </div>

              <div className="flex gap-3">
                <img
                  src={booking.image}
                  alt={booking.business}
                  className="h-16 w-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{booking.business}</h3>
                      <p className="text-sm text-muted-foreground">{booking.service}</p>
                    </div>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {booking.date}, {booking.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {booking.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status & Actions */}
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <div className="flex items-center gap-1.5">
                  {booking.status === "confirmed" ? (
                    <>
                      <CheckCircle className="h-4 w-4 text-status-available" />
                      <span className="text-xs font-medium text-status-available">Konfirmuar</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="h-4 w-4 text-status-partial" />
                      <span className="text-xs font-medium text-status-partial">Në pritje</span>
                    </>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    Ndrysho
                  </Button>
                  <Button variant="ghost" size="iconSm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Past Bookings */}
      <div>
        <SectionHeader title="Të kaluara" onSeeAll={() => {}} />
        <div className="mt-3 flex flex-col gap-3">
          {pastBookings.map((booking, index) => (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 rounded-2xl bg-card p-3 shadow-sm"
            >
              <img
                src={booking.image}
                alt={booking.business}
                className="h-14 w-14 rounded-xl object-cover opacity-70"
              />
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{booking.business}</h3>
                <p className="text-xs text-muted-foreground">{booking.service}</p>
                <p className="mt-1 text-xs text-muted-foreground">{booking.date}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xs ${i < booking.rating ? "text-accent" : "text-muted"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="text-xs text-primary">
                  Rezervo përsëri
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
