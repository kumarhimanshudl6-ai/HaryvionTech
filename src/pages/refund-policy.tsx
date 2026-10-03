import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  CreditCard,
  FileText,
  ShieldCheck,
  XCircle,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const policySections = [
  {
    icon: ShieldCheck,
    title: "Eligibility for Refunds",
    description:
      "Refunds are considered only when a service has not been delivered, materially not performed, or is canceled before substantial work begins.",
    details: [
      "Initial consultation and discovery work may be non-refundable if already completed.",
      "Project work that has begun and is in progress is usually billable up to the agreed stage.",
      "Any refund request must be raised in writing with supporting details and documentation.",
    ],
    accent: "from-emerald-500 to-teal-600",
  },
  {
    icon: CreditCard,
    title: "Payment and Billing Terms",
    description:
      "All payments are based on the agreed quotation, invoice schedule, and project milestones stated in the engagement letter.",
    details: [
      "Advance payments and milestone-based installments are non-refundable once the related scope has been initiated.",
      "Late or delayed payments may result in work suspension until the outstanding amount is cleared.",
      "Taxes and third-party charges are not refundable unless specifically stated in writing.",
    ],
    accent: "from-blue-500 to-cyan-600",
  },
  {
    icon: Clock3,
    title: "Cancellation Timeline",
    description:
      "The earlier a cancellation request is made, the faster we can assess it and apply any applicable credit or refund.",
    details: [
      "Requests made before kickoff or before a project phase begins are generally eligible for review.",
      "Requests after a phase is approved or completed are evaluated on a prorated and deliverable-based basis.",
      "Emergency or force-majeure situations may be reviewed case by case under our business policies.",
    ],
    accent: "from-violet-500 to-purple-600",
  },
  {
    icon: XCircle,
    title: "Non-Refundable Cases",
    description:
      "Certain situations are not eligible for a refund, even when the client is dissatisfied with the outcome.",
    details: [
      "Completed design, development, consulting, or support services already delivered to the agreed scope.",
      "Custom integrations, licensing, third-party subscriptions, or outsourced service costs already incurred.",
      "Chargebacks or disputes filed without first attempting resolution through our support team.",
    ],
    accent: "from-rose-500 to-red-600",
  },
];

const refundSteps = [
  "Send a written request to our support team with your invoice reference, project name, and reason for the refund request.",
  "Share the relevant timeline, deliverables, and communications so our team can review scope, delivery status, and technical progress.",
  "Our team will review the case within a reasonable timeline and communicate a final decision, any pro-rated adjustment, or refund amount.",
  "Approved refunds are processed using the original payment method or as otherwise mutually agreed in writing.",
];

const returnSections = [
  {
    title: "Return Eligibility",
    description:
      "Returns may be accepted for physical goods that are unused, in original packaging, and reported within the specified return window.",
    points: [
      "Products must be returned in saleable condition with original labels, accessories, and packaging intact.",
      "Custom-made, personalized, or specially ordered hardware may be non-returnable unless defective.",
      "Digital and custom development services are generally not returnable after approval, unless a material defect is identified.",
    ],
  },
  {
    title: "Damaged or Defective Items",
    description:
      "If the delivered item is damaged, defective, or materially different from the agreed specification, we will review the issue promptly.",
    points: [
      "Please share photos, delivery information, and a brief description of the defect as soon as possible.",
      "Replacement, repair, or credit may be offered depending on the nature of the issue and the agreed contract terms.",
      "We may request inspection before approving any return or replacement for damaged goods.",
    ],
  },
  {
    title: "Service Returns",
    description:
      "For project or service work, returns are handled through the refund and service review process rather than a standard product return flow.",
    points: [
      "If a delivered service fails to meet the agreed scope or contains critical defects, we will work on remediation first.",
      "If a material issue cannot be resolved, a credit, revision cycle, or refund may be considered under the policy terms.",
      "No returns are normally accepted for completed consulting, development, or support work that has been materially delivered and accepted.",
    ],
  },
];

const quickNotes = [
  "All refund requests are reviewed on a case-by-case basis and depend on project status, milestones completed, and the terms in the signed agreement.",
  "If a project is canceled due to a client decision after work has begun, the company may retain funds covering work already performed and any committed third-party costs.",
  "We are committed to fair handling of disputes and encourage clients to contact us before escalating a payment dispute.",
];

const RefundPolicy = () => {
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
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden"
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
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
                  <img
                    src="/star.svg"
                    alt="Haryvion Technology India"
                    className="w-3 h-3"
                  />
                </span>
                <span>Refund Policy</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl font-display font-bold mb-8 text-gray-900 opacity-0 fade-in-element animate-fade-in">
              Fair {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 font-playfair font-thin">
                Refund
              </span>
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-playfair font-thin">
                Practices
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0 fade-in-element">
              At Haryvion Technology India, we aim to provide transparent, fair,
              and professional handling of all refund requests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 opacity-0 fade-in-element">
            <div className="text-center rounded-3xl border border-blue-100 bg-white/80 backdrop-blur-sm p-8 shadow-lg shadow-blue-100/70">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Fair</div>
              <div className="text-gray-600">Case-by-case review</div>
            </div>

            <div className="text-center rounded-3xl border border-blue-100 bg-white/80 backdrop-blur-sm p-8 shadow-lg shadow-blue-100/70">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Clear</div>
              <div className="text-gray-600">Transparent eligibility rules</div>
            </div>

            <div className="text-center rounded-3xl border border-blue-100 bg-white/80 backdrop-blur-sm p-8 shadow-lg shadow-blue-100/70">
              <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BadgeCheck className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Prompt</div>
              <div className="text-gray-600">Review and communication</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {policySections.map((section, index) => {
              const IconComponent = section.icon;

              return (
                <div
                  key={section.title}
                  className="fade-in-element group rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] hover:shadow-[0_25px_70px_rgba(59,130,246,0.15)] transition-all duration-300"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${section.accent} text-white shadow-lg mb-6`}
                  >
                    <IconComponent size={28} />
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                      Policy
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
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 fade-in-element">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 mb-3">
              Returns
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Return and replacement terms
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {returnSections.map((section, index) => (
              <div
                key={section.title}
                className="fade-in-element rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-5">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-7 mb-5">{section.description}</p>
                <ul className="space-y-3">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="mt-0.5 text-emerald-500 flex-shrink-0" size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[32px] border border-slate-200 bg-slate-900 text-white p-8 sm:p-10 shadow-[0_25px_80px_rgba(15,23,42,0.22)] fade-in-element">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                <FileText className="text-blue-300" size={24} />
              </div>
              <h2 className="text-3xl font-bold">How to request a refund</h2>
            </div>

            <ol className="space-y-5 text-lg text-slate-200">
              {refundSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center mt-0.5">
                    {index + 1}
                  </div>
                  <p className="leading-8">{step}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-blue-100 transition-colors"
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
          <div className="rounded-[30px] border border-blue-100 bg-white p-8 sm:p-10 shadow-[0_20px_60px_rgba(59,130,246,0.08)] fade-in-element">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Important notes
            </h2>
            <ul className="space-y-4">
              {quickNotes.map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-3 text-gray-700 leading-7"
                >
                  <span className="mt-1.5 inline-block w-2.5 h-2.5 rounded-full bg-blue-500" />
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

export default RefundPolicy;
