import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { HomePage } from "@/pages/HomePage";
import { BookingsPage } from "@/pages/BookingsPage";
import { PromosPage } from "@/pages/PromosPage";
import { MapPage } from "@/pages/MapPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderPage = () => {
    switch (activeTab) {
      case "home":
        return <HomePage />;
      case "bookings":
        return <BookingsPage />;
      case "promos":
        return <PromosPage />;
      case "map":
        return <MapPage />;
      case "profile":
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case "home":
        return "Upio";
      case "bookings":
        return "Rezervimet";
      case "promos":
        return "Oferta";
      case "map":
        return "Harta";
      case "profile":
        return "Profili";
      default:
        return "Upio";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Container */}
      <div className="mx-auto max-w-md">
        <Header 
          title={getTitle()} 
          showSearch={activeTab === "home"}
          showNotifications={activeTab !== "map"}
        />
        
        <main className="pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
};

export default Index;
