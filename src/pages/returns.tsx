import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  CircleDashed,
  PackageCheck,
  PackageOpen,
  RefreshCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const returnSections = [
  {
    icon: PackageOpen,
    title: "Eligibility for Returns",
    description:
      "Returns are accepted only for eligible physical items that remain unused, in original condition, and are reported within the applicable return window.",
    details: [
      "Items must be returned with original packaging, labels, accessories, and proof of purchase.",
      "Custom-made, personalized, or specially ordered products may not be eligible unless defective or incorrect.",
      "Digital products, software, and custom development services are generally non-returnable once delivered and accepted.",
    ],
    accent: "from-indigo-500 to-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Damaged or Defective Goods",
    description:
      "If the item received is damaged, defective, or materially different from the product description, we will review it promptly and arrange resolution.",
    details: [
      "Please provide photos of the item and packaging and a short description of the issue at the earliest opportunity.",
      "Replacement, repair, or credit may be offered depending on the item type, defect, and delivery condition.",
      "We may ask for the item to be inspected before deciding on a replacement or return authorization.",
    ],
    accent: "from-emerald-500 to-teal-600",
  },
  {
    icon: Truck,
    title: "Shipping and Collection",
    description:
      "Approved returns must be packaged safely and returned in line with the instructions provided by our support team.",
    details: [
      "Customers are responsible for safe packaging and return shipping unless otherwise agreed in writing.",
      "If the return is due to a company error or defective item, we may arrange collection or reimburse eligible shipping costs.",
      "The item should be returned with the return reference number and complete delivery information.",
    ],
    accent: "from-violet-500 to-purple-600",
  },
];

const steps = [
  "Contact our support team with your order number, product details, and a brief explanation of the issue or return request.",
  "Share photos, videos, or any relevant delivery information required to confirm eligibility and assess the condition.",
  "Once approved, we will provide return instructions, address details, and the expected timeline for review and resolution.",
  "After the item is checked and approved, we will process a replacement, credit, or refund according to the applicable policy.",
];

const quickNotes = [
  "Returns are reviewed on a case-by-case basis and depend on the type of product, its condition, and the delivery timeline.",
  "For custom software, consulting, and development work, return rights are limited to service-failure or defect scenarios as defined in the service agreement.",
  "If you have a concern before returning an item, we encourage you to contact us first so we can resolve it quickly and fairly.",
];

const ReturnsPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in-element");
    elements.forEach((element, index) => {
      setTimeout(() => {
        observer.observe(element);
      }, index * 60);
    });

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50/40 relative overflow-hidden"
      ref={sectionRef}
    >
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div
                className="pulse-chip opacity-0 animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500 text-white mr-2">
                  <img
                    src="/star.svg"
                    alt="Haryvion Technology India"
                    className="w-3 h-3"
                  />
                </span>
                <span>Returns Policy</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element animate-fade-in">
              Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700 font-playfair font-thin">Returns</span>
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 font-playfair font-thin">Process</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
              We aim to make return requests clear, fair, and easy to manage for eligible items and service issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 opacity-0 fade-in-element">
            <div className="text-center rounded-3xl border border-cyan-100 bg-white/80 backdrop-blur-sm p-8 shadow-lg shadow-cyan-100/70">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <PackageCheck className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Easy</div>
              <div className="text-gray-600">Clear eligibility checks</div>
            </div>

            <div className="text-center rounded-3xl border border-cyan-100 bg-white/80 backdrop-blur-sm p-8 shadow-lg shadow-cyan-100/70">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <RefreshCcw className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Fast</div>
              <div className="text-gray-600">Prompt review and action</div>
            </div>

            <div className="text-center rounded-3xl border border-cyan-100 bg-white/80 backdrop-blur-sm p-8 shadow-lg shadow-cyan-100/70">
              <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CircleDashed className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Fair</div>
              <div className="text-gray-600">Case-by-case review</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {returnSections.map((section, index) => {
              const IconComponent = section.icon;

              return (
                <div
                  key={section.title}
                  className="fade-in-element group rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] hover:shadow-[0_25px_70px_rgba(14,165,233,0.12)] transition-all duration-300"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${section.accent} text-white shadow-lg mb-6`}
                  >
                    <IconComponent size={28} />
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
                      Returns
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-2">
                      {section.title}
                    </h2>
                  </div>

                  <p className="text-base leading-7 text-gray-600 mb-5">
                    {section.description}
                  </p>

                  <ul className="space-y-3">
                    {section.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <CheckCircle2
                          className="mt-0.5 text-emerald-500 flex-shrink-0"
                          size={18}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[32px] border border-slate-200 bg-slate-900 text-white p-8 sm:p-10 shadow-[0_25px_80px_rgba(15,23,42,0.22)] fade-in-element">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                <ArrowRight className="text-cyan-300" size={24} />
              </div>
              <h2 className="text-3xl font-bold">How to request a return</h2>
            </div>

            <ol className="space-y-5 text-lg text-slate-200">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center mt-0.5">
                    {index + 1}
                  </div>
                  <p className="leading-8">{step}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-cyan-100 transition-colors"
              >
                Contact support
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[30px] border border-cyan-100 bg-white p-8 sm:p-10 shadow-[0_20px_60px_rgba(14,165,233,0.08)] fade-in-element">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Important notes
            </h2>
            <ul className="space-y-4">
              {quickNotes.map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-3 text-gray-700 leading-7"
                >
                  <span className="mt-1.5 inline-block w-2.5 h-2.5 rounded-full bg-cyan-500" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReturnsPage;
