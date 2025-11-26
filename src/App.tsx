
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Antivirus from "./pages/catalog/Antivirus";
import AccessControl from "./pages/catalog/AccessControl";
import TrustedBoot from "./pages/catalog/TrustedBoot";
import Firewall from "./pages/catalog/Firewall";
import PersonalDataBasics from "./pages/info/PersonalDataBasics";
import Penalties from "./pages/info/Penalties";
import Articles from "./pages/info/Articles";
import FAQ from "./pages/info/FAQ";
import News from "./pages/info/News";
import Legislation from "./pages/info/Legislation";
import Company from "./pages/Company";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<Services />} />
          <Route path="/catalog/antivirus" element={<Antivirus />} />
          <Route path="/catalog/access-control" element={<AccessControl />} />
          <Route path="/catalog/trusted-boot" element={<TrustedBoot />} />
          <Route path="/catalog/firewall" element={<Firewall />} />
          <Route path="/info/personal-data-basics" element={<PersonalDataBasics />} />
          <Route path="/info/penalties" element={<Penalties />} />
          <Route path="/info/articles" element={<Articles />} />
          <Route path="/info/faq" element={<FAQ />} />
          <Route path="/info/news" element={<News />} />
          <Route path="/info/legislation" element={<Legislation />} />
          <Route path="/company" element={<Company />} />
          <Route path="/company/:slug" element={<Company />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;