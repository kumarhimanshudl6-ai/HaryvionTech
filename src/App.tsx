import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "@/components/About";
import Services from "@/components/Services";
import Certificates from "./pages/Certificates";
import Mission from "./pages/Mission";
import Fintech from "./pages/Fintech";
import FintechDevelopment from "./pages/FintechDevelopment";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import DigitalMarketing from "./pages/DigitalMarketing";
import CustomSoftware from "./pages/CustomSoftware";
import Team from "./pages/Team";
import Portfolio from "./pages/Portfolio";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Culture from "./pages/Culture";
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

import WebDevelopment from "./pages/WebDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import ReactNextjs from "./pages/ReactNextjs";
import MernStack from "./pages/MernStack";
import EcommerceDevelopment from "./pages/EcommerceDevelopment";
import ErpCrmSolutions from "./pages/ErpCrmSolutions";
import UiUxDesign from "./pages/UiUxDesign";

import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ScrollRestoration from "./components/ScrollRestoration";

const App = () => (
  <BrowserRouter>
    <ScrollRestoration />

    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/services" element={<Services />} />
      <Route path="/fintech" element={<Fintech />} />
      <Route
        path="/fintech-development"
        element={<FintechDevelopment />}
      />
      <Route
        path="/software-development"
        element={<SoftwareDevelopment />}
      />
      <Route path="/team" element={<Team />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/culture" element={<Culture />} />

      {/* Blog */}
      <Route path="/blog" element={<Blog />} />

      {/* Other Pages */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />

      {/* Cloud & Infrastructure */}
      <Route
        path="/services/vps-servers"
        element={<VPSServers />}
      />
      <Route
        path="/services/dedicated-servers"
        element={<DedicatedServers />}
      />
      <Route
        path="/services/cloud-compute"
        element={<CloudCompute />}
      />
      <Route
        path="/services/cloud-storage"
        element={<CloudStorage />}
      />
      <Route
        path="/services/web-hosting"
        element={<WebHosting />}
      />
      <Route
        path="/services/backup-recovery"
        element={<BackupRecovery />}
      />
      <Route
        path="/services/server-management"
        element={<ServerManagement />}
      />

      {/* Software Development Services */}
      <Route
        path="/services/web-development"
        element={<WebDevelopment />}
      />
      <Route
        path="/services/mobile-app-development"
        element={<MobileAppDevelopment />}
      />
      <Route
        path="/services/digital-marketing"
        element={<DigitalMarketing />}
      />
      <Route
        path="/services/react-nextjs"
        element={<ReactNextjs />}
      />
      <Route
        path="/services/mern-stack"
        element={<MernStack />}
      />
      <Route
        path="/services/ecommerce-development"
        element={<EcommerceDevelopment />}
      />
      <Route
        path="/services/erp-crm-solutions"
        element={<ErpCrmSolutions />}
      />
      <Route
        path="/services/ui-ux-design"
        element={<UiUxDesign />}
      />

      {/* Custom Software */}
      <Route
        path="/custom-software"
        element={<CustomSoftware />}
      />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>

    <ScrollToTop />
  </BrowserRouter>
);

export default App;