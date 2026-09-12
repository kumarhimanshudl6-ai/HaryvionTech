import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import VPSServers from "./pages/VPSServers";
import DedicatedServers from "./pages/DedicatedServers";
import CloudCompute from "./pages/CloudCompute";
import CloudStorage from "./pages/CloudStorage";
import WebHosting from "./pages/WebHosting";
import BackupRecovery from "./pages/BackupRecovery";
import ServerManagement from "./pages/ServerManagement";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ScrollRestoration from "./components/ScrollRestoration";
import WebDevelopment from "./pages/WebDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import ReactNextjs from "./pages/ReactNextjs";
import MernStack from "./pages/MernStack";
import EcommerceDevelopment from "./pages/EcommerceDevelopment";
import ErpCrmSolutions from "./pages/ErpCrmSolutions";
import UiUxDesign from "./pages/UiUxDesign"

const App = () => (
  <BrowserRouter>
    <ScrollRestoration />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/team" element={<Team />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />

      {/* Cloud & Infrastructure Service Pages */}
      <Route path="/services/vps-servers" element={<VPSServers />} />
      <Route path="/services/dedicated-servers" element={<DedicatedServers />} />
      <Route path="/services/cloud-compute" element={<CloudCompute />} />
      <Route path="/services/cloud-storage" element={<CloudStorage />} />
      <Route path="/services/web-hosting" element={<WebHosting />} />
      <Route path="/services/backup-recovery" element={<BackupRecovery />} />
      <Route path="/services/server-management" element={<ServerManagement />} />
      <Route path="/services/web-development" element={<WebDevelopment />} />
      <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
      <Route path="/services/react-nextjs" element={<ReactNextjs />} />
      <Route path="/services/mern-stack" element={<MernStack />} />
      <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
      <Route path="/services/erp-crm-solutions" element={<ErpCrmSolutions />} />
      <Route path="/services/ui-ux-design" element={<UiUxDesign />} />

      {/* ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <ScrollToTop />
  </BrowserRouter>
);

export default App;