import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  Wifi,
  Car,
  Accessibility,
  Plus,
  Minus,
  Check,
  ChevronRight,
  Calendar,
  User,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookingDetailPageProps {
  onBack: () => void;
}

const business = {
  name: "Studio Bella",
  category: "Parukeri & Makeup",
  rating: 4.9,
  reviewCount: 324,
  location: "Qendër, Shkup",
  image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=400&fit=crop",
  amenities: [
    { icon: Wifi, label: "Wi-Fi Falas" },
    { icon: Car, label: "Parking" },
    { icon: Accessibility, label: "Akses për invalidë" },
  ],
};

const services = [
  { id: 1, name: "Prerje Flokësh", duration: "30 min", price: 15 },
  { id: 2, name: "Prerje + Stilim", duration: "45 min", price: 25 },
  { id: 3, name: "Ngjyrosje Flokësh", duration: "90 min", price: 50 },
  { id: 4, name: "Makeup Profesional", duration: "60 min", price: 40 },
];

const addons = [
  { id: 1, name: "Trajtim me Keratin", price: 20 },
  { id: 2, name: "Maskë Hidratuese", price: 10 },
  { id: 3, name: "Stilim me Tharëse", price: 8 },
];

const timeSlots = [
  { time: "09:00", available: true },
  { time: "09:30", available: true },
  { time: "10:00", available: false },
  { time: "10:30", available: false },
  { time: "11:00", available: true },
  { time: "11:30", available: true },
  { time: "14:00", available: true },
  { time: "14:30", available: false },
  { time: "15:00", available: true },
  { time: "15:30", available: true },
  { time: "16:00", available: true },
  { time: "16:30", available: false },
];

const dates = [
  { day: "Hën", date: 6, month: "Jan", available: true },
  { day: "Mar", date: 7, month: "Jan", available: true },
  { day: "Mër", date: 8, month: "Jan", available: true },
  { day: "Enj", date: 9, month: "Jan", available: false },
  { day: "Pre", date: 10, month: "Jan", available: true },
  { day: "Sht", date: 11, month: "Jan", available: true },
  { day: "Dje", date: 12, month: "Jan", available: true },
];

export function BookingDetailPage({ onBack }: BookingDetailPageProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<number[]>([]);
  const [selectedDate, setSelectedDate] = useState<number>(6);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const toggleAddon = (id: number) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let total = 0;
    if (selectedService) {
      total += services.find((s) => s.id === selectedService)?.price || 0;
    }
    selectedAddons.forEach((id) => {
      total += addons.find((a) => a.id === id)?.price || 0;
    });
    return total;
  };

  const steps = [
    { num: 1, label: "Shërbimi", icon: Calendar },
    { num: 2, label: "Data & Ora", icon: Clock },
    { num: 3, label: "Konfirmo", icon: Check },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header with Image */}
      <div className="relative h-48">
        <img
          src={business.image}
          alt={business.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
        <button
          onClick={onBack}
          className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-card/90 backdrop-blur-sm"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-xl font-bold text-primary-foreground">{business.name}</h1>
          <div className="mt-1 flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-medium text-primary-foreground">
                {business.rating}
              </span>
              <span className="text-xs text-primary-foreground/70">
                ({business.reviewCount})
              </span>
            </div>
            <div className="flex items-center gap-1 text-primary-foreground/70">
              <MapPin className="h-3.5 w-3.5" />
              <span className="text-xs">{business.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="flex gap-4 overflow-x-auto px-4 py-3 hide-scrollbar">
        {business.amenities.map((amenity) => (
          <div
            key={amenity.label}
            className="flex shrink-0 items-center gap-2 rounded-full bg-secondary px-3 py-1.5"
          >
            <amenity.icon className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium">{amenity.label}</span>
          </div>
        ))}
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between px-4 py-4">
        {steps.map((s, index) => (
          <div key={s.num} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                  step >= s.num
                    ? "gradient-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {step > s.num ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <s.icon className="h-5 w-5" />
                )}
              </div>
              <span
                className={`mt-1 text-[10px] font-medium ${
                  step >= s.num ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {s.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`mx-2 h-0.5 w-12 transition-colors ${
                  step > s.num ? "bg-primary" : "bg-secondary"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 px-4 pb-32">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h2 className="text-lg font-bold">Zgjedh Shërbimin</h2>
              <div className="space-y-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`flex w-full items-center justify-between rounded-2xl border-2 p-4 transition-colors ${
                      selectedService === service.id
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card"
                    }`}
                  >
                    <div>
                      <h3 className="font-semibold text-foreground">{service.name}</h3>
                      <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {service.duration}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-primary">€{service.price}</span>
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                          selectedService === service.id
                            ? "border-primary bg-primary"
                            : "border-muted-foreground"
                        }`}
                      >
                        {selectedService === service.id && (
                          <Check className="h-4 w-4 text-primary-foreground" />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Add-ons */}
              <h2 className="mt-6 text-lg font-bold">Shërbime Shtesë (Opsionale)</h2>
              <div className="space-y-2">
                {addons.map((addon) => (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`flex w-full items-center justify-between rounded-xl border p-3 transition-colors ${
                      selectedAddons.includes(addon.id)
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card"
                    }`}
                  >
                    <span className="font-medium">{addon.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-primary">+€{addon.price}</span>
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded ${
                          selectedAddons.includes(addon.id)
                            ? "bg-primary"
                            : "border border-muted-foreground"
                        }`}
                      >
                        {selectedAddons.includes(addon.id) && (
                          <Check className="h-3 w-3 text-primary-foreground" />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h2 className="text-lg font-bold">Zgjedh Datën</h2>
              <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
                {dates.map((d) => (
                  <button
                    key={d.date}
                    onClick={() => d.available && setSelectedDate(d.date)}
                    disabled={!d.available}
                    className={`flex shrink-0 flex-col items-center rounded-2xl p-3 transition-colors ${
                      selectedDate === d.date
                        ? "gradient-primary text-primary-foreground"
                        : d.available
                        ? "bg-card text-foreground"
                        : "bg-secondary text-muted-foreground opacity-50"
                    }`}
                  >
                    <span className="text-[10px] font-medium uppercase">{d.day}</span>
                    <span className="text-2xl font-bold">{d.date}</span>
                    <span className="text-[10px]">{d.month}</span>
                  </button>
                ))}
              </div>

              <h2 className="mt-4 text-lg font-bold">Zgjedh Orën</h2>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => slot.available && setSelectedTime(slot.time)}
                    disabled={!slot.available}
                    className={`rounded-xl py-3 text-sm font-medium transition-colors ${
                      selectedTime === slot.time
                        ? "gradient-primary text-primary-foreground shadow-glow"
                        : slot.available
                        ? "bg-card text-foreground hover:bg-secondary"
                        : "bg-secondary text-muted-foreground line-through opacity-50"
                    }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded bg-card border border-border" />
                  <span>E lirë</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded bg-secondary opacity-50" />
                  <span>E zënë</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded gradient-primary" />
                  <span>E zgjedhur</span>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h2 className="text-lg font-bold">Konfirmo Rezervimin</h2>

              <div className="rounded-2xl bg-card p-4 shadow-sm">
                <div className="flex items-center gap-3 border-b border-border pb-3">
                  <img
                    src={business.image}
                    alt={business.name}
                    className="h-14 w-14 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{business.name}</h3>
                    <p className="text-xs text-muted-foreground">{business.location}</p>
                  </div>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Shërbimi</span>
                    <span className="font-medium">
                      {services.find((s) => s.id === selectedService)?.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Data</span>
                    <span className="font-medium">
                      {dates.find((d) => d.date === selectedDate)?.day}, {selectedDate} Jan 2026
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Ora</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  {selectedAddons.length > 0 && (
                    <div className="flex items-start justify-between text-sm">
                      <span className="text-muted-foreground">Shtesa</span>
                      <div className="text-right">
                        {selectedAddons.map((id) => (
                          <p key={id} className="font-medium">
                            {addons.find((a) => a.id === id)?.name}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <span className="font-semibold">Totali</span>
                  <span className="text-xl font-bold text-primary">€{calculateTotal()}</span>
                </div>
              </div>

              {/* Payment Method */}
              <div className="rounded-2xl bg-card p-4 shadow-sm">
                <h3 className="font-semibold">Mënyra e Pagesës</h3>
                <button className="mt-3 flex w-full items-center justify-between rounded-xl border border-border p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium">**** **** **** 4532</p>
                      <p className="text-xs text-muted-foreground">Visa</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-card p-4 safe-bottom">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Totali</p>
            <p className="text-2xl font-bold text-primary">€{calculateTotal()}</p>
          </div>
          <div className="flex gap-2">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep((s) => s - 1)}>
                Prapa
              </Button>
            )}
            <Button
              onClick={() => {
                if (step < 3) setStep((s) => s + 1);
                else {
                  // Handle booking confirmation
                  onBack();
                }
              }}
              disabled={
                (step === 1 && !selectedService) ||
                (step === 2 && !selectedTime)
              }
            >
              {step === 3 ? "Konfirmo Rezervimin" : "Vazhdo"}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
