import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Index from "./pages/Index"; // Убеждаемся, что импорт корректен
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutAndrey from "./pages/AboutAndrey";
import StreamSchedule from "./pages/StreamSchedule";
import CommunityRules from "./pages/CommunityRules";
import TechSetup from "./pages/TechSetup";
import SupportSubscription from "./pages/SupportSubscription";
import InteractiveFeatures from "./pages/InteractiveFeatures";
import ContactsSocials from "./pages/ContactsSocials";
import HighlightsGallery from "./pages/HighlightsGallery";

const queryClient = new QueryClient();

const App = () => {
  const [isTheaterMode, setIsTheaterMode] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            {!isTheaterMode && <Navbar />}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index isTheaterMode={isTheaterMode} setIsTheaterMode={setIsTheaterMode} />} />
                <Route path="/about" element={<AboutAndrey />} />
                <Route path="/schedule" element={<StreamSchedule />} />
                <Route path="/rules" element={<CommunityRules />} />
                <Route path="/setup" element={<TechSetup />} />
                <Route path="/support" element={<SupportSubscription />} />
                <Route path="/features" element={<InteractiveFeatures />} />
                <Route path="/contacts" element={<ContactsSocials />} />
                <Route path="/highlights" element={<HighlightsGallery />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            {!isTheaterMode && <Footer />}
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;