import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Check, ShoppingCart, ShieldCheck, Headphones, Server, Wrench, ArrowRight } from "lucide-react";

const products = [
  { id: "domain-setup", name: "Domain & DNS Setup", price: 199, category: "Setup", description: "Professional domain, DNS and basic email configuration.", icon: Wrench },
  { id: "website-amc-basic", name: "Website AMC — Basic", price: 499, period: "/month", category: "AMC", description: "Routine updates, backups and basic technical support.", icon: ShieldCheck },
  { id: "hosting-starter", name: "Starter Web Hosting", price: 149, period: "/month", category: "Hosting", description: "10 GB SSD hosting with SSL, cPanel and weekly backups.", icon: Server },
  { id: "backup-amc", name: "Backup & Recovery AMC", price: 999, period: "/month", category: "AMC", description: "Scheduled backups, restore assistance and monitoring.", icon: ShieldCheck },
  { id: "security-amc", name: "Website Security AMC", price: 1499, period: "/month", category: "AMC", description: "Security checks, malware monitoring and hardening support.", icon: ShieldCheck },
  { id: "server-management", name: "Server Management AMC", price: 2499, period: "/month", category: "AMC", description: "Server monitoring, updates and routine administration.", icon: Wrench },
  { id: "cloud-starter", name: "Cloud Compute Starter", price: 299, period: "/month", category: "Cloud", description: "Entry cloud compute for small applications and websites.", icon: Server },
  { id: "support-priority", name: "Priority Technical Support", price: 4999, category: "Support", description: "Priority support package for urgent website and server issues.", icon: Headphones },
  { id: "business-website", name: "Business Website", price: 14999, category: "Development", description: "Responsive business website with essential SEO setup.", icon: ArrowRight },
  { id: "corporate-website", name: "Corporate Website", price: 34999, category: "Development", description: "Multi-page corporate website with custom UI and CMS.", icon: ArrowRight },
  { id: "ecommerce-starter", name: "E-commerce Starter", price: 29999, category: "Development", description: "Starter online store with product catalog and checkout-ready structure.", icon: ShoppingCart },
  { id: "react-nextjs", name: "React / Next.js Development", price: 24999, category: "Development", description: "Production-ready React or Next.js development package.", icon: ArrowRight },
  { id: "dedicated-entry", name: "Dedicated Server — Entry", price: 8999, period: "/month", category: "Infrastructure", description: "Dedicated server plan for resource-intensive workloads.", icon: Server },
  { id: "managed-infrastructure", name: "Managed Infrastructure AMC", price: 9999, period: "/month", category: "AMC", description: "Monitoring, patching, backups and infrastructure administration.", icon: ShieldCheck },
  { id: "premium-web", name: "Premium Web Application", price: 49999, category: "Development", description: "Custom web application package up to the ₹50,000 checkout tier.", icon: ArrowRight },
];

const categories = ["All", "AMC", "Hosting", "Cloud", "Infrastructure", "Development", "Support", "Setup"];

const formatINR = (value: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);

export default function Store() {
  const { addItem } = useCart();
  const [category, setCategory] = useState("All");
  const filtered = category === "All" ? products : products.filter(p => p.category === category);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/20 to-white">
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">HARYVION STORE</span>
            <h1 className="mt-5 text-4xl sm:text-6xl font-bold text-gray-900">Services & Products</h1>
            <p className="mt-4 text-gray-600 text-lg">Choose a service, add it to your cart, and continue to a simple checkout.</p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-3 mb-8 justify-center">
            {categories.map(item => (
              <button key={item} onClick={() => setCategory(item)} className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition ${category === item ? "bg-purple-600 text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-purple-300"}`}>
                {item}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map(product => {
              const Icon = product.icon;
              return (
                <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition p-5 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-5"><Icon size={23} /></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-600">{product.category}</span>
                  <h2 className="text-lg font-bold text-gray-900 mt-2">{product.name}</h2>
                  <p className="text-sm text-gray-500 mt-2 flex-grow">{product.description}</p>
                  <div className="mt-5 flex items-end gap-1">
                    <span className="text-2xl font-bold text-gray-900">{formatINR(product.price)}</span>
                    {product.period && <span className="text-sm text-gray-500 mb-1">{product.period}</span>}
                  </div>
                  <button onClick={() => addItem(product)} className="mt-5 w-full py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 flex items-center justify-center gap-2">
                    <ShoppingCart size={17} /> Add to Cart
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-3xl bg-gray-950 text-white p-7 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Ready to checkout?</h2>
              <p className="text-gray-300 mt-1">Review quantities, enter your details and place your order.</p>
            </div>
            <Link to="/cart" className="px-6 py-3 rounded-xl bg-white text-gray-950 font-bold hover:bg-gray-100">View Cart</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
