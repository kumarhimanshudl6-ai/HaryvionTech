import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  ArrowRight,
  Clock3,
  Code2,
  Smartphone,
  ShieldCheck,
  Headphones,
} from "lucide-react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  metric?: {
    value: string;
    label: string;
    icon: React.ReactNode;
  };
  featured?: boolean;
}

const testimonials: TestimonialProps[] = [
  {
    content:
      "Haryvion Technology India understood our requirements clearly and delivered a modern, responsive website that gave our business a much stronger digital presence.",
    author: "Business Client",
    role: "Business Owner",
    company: "India",
    metric: {
      value: "On Time",
      label: "Delivery",
      icon: <Clock3 className="h-4 w-4" />,
    },
    featured: true,
  },
  {
    content:
      "The development process was smooth from planning to launch. The team communicated clearly, understood our business needs, and delivered a practical solution.",
    author: "Project Client",
    role: "Business Director",
    company: "India",
    metric: {
      value: "Smooth",
      label: "Experience",
      icon: <Headphones className="h-4 w-4" />,
    },
  },
  {
    content:
      "We wanted a clean and easy-to-use application. Haryvion combined thoughtful UI/UX with reliable development to create a solution our customers can use comfortably.",
    author: "Technology Client",
    role: "Product Lead",
    company: "India",
    metric: {
      value: "Modern",
      label: "UI/UX",
      icon: <Code2 className="h-4 w-4" />,
    },
  },
  {
    content:
      "Their team supported us throughout development and deployment. We appreciated the technical guidance, attention to detail, and commitment to delivering quality work.",
    author: "Business Client",
    role: "Managing Director",
    company: "India",
    metric: {
      value: "Reliable",
      label: "IT Support",
      icon: <ShieldCheck className="h-4 w-4" />,
    },
  },
  {
    content:
      "Haryvion Technology India helped us turn our requirements into a scalable digital product with a clear development approach and strong technical execution.",
    author: "Product Client",
    role: "Business Owner",
    company: "India",
    metric: {
      value: "Scalable",
      label: "Solution",
      icon: <Smartphone className="h-4 w-4" />,
    },
  },
];

const TestimonialCard = ({
  content,
  author,
  role,
  company,
  metric,
  featured = false,
}: TestimonialProps) => {
  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${featured
        ? "border-blue-600 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white shadow-xl shadow-blue-600/20"
        : "border-slate-200 bg-white text-slate-900 hover:border-blue-200 hover:shadow-blue-900/10"
        }`}
    >
      {featured && (
        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/10 blur-2xl" />
      )}

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="mb-5 flex items-center justify-between">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl ${featured
              ? "bg-white/15 text-white"
              : "bg-blue-50 text-blue-600"
              }`}
          >
            <Star className="h-5 w-5 fill-current" />
          </div>

          {featured && (
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur">
              Featured Client
            </span>
          )}
        </div>

        <div className="flex-1">
          <div
            className={`mb-3 font-serif text-4xl leading-none ${featured ? "text-white/60" : "text-blue-200"
              }`}
          >
            “
          </div>

          <p
            className={`text-base leading-7 sm:text-lg ${featured ? "text-white/95" : "text-slate-700"
              }`}
          >
            {content}
          </p>

          <div
            className={`mt-2 text-right font-serif text-4xl leading-none ${featured ? "text-white/60" : "text-blue-200"
              }`}
          >
            ”
          </div>
        </div>

        <div
          className={`mt-5 flex items-center justify-between gap-4 border-t pt-5 ${featured ? "border-white/15" : "border-slate-100"
            }`}
        >
          <div className="flex min-w-0 items-center gap-3">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-bold text-sm ${featured
                ? "bg-white/15 text-white"
                : "bg-blue-50 text-blue-700"
                }`}
            >
              {getInitials(author)}
            </div>

            <div className="min-w-0">
              <h4
                className={`truncate font-semibold ${featured ? "text-white" : "text-slate-900"
                  }`}
              >
                {author}
              </h4>

              <p
                className={`truncate text-xs sm:text-sm ${featured ? "text-white/70" : "text-slate-500"
                  }`}
              >
                {role}, {company}
              </p>
            </div>
          </div>

          {metric && (
            <div
              className={`shrink-0 text-right ${featured ? "text-white" : "text-blue-600"
                }`}
            >
              <div className="flex items-center justify-end gap-1">
                {metric.icon}
                <span className="text-sm font-bold">{metric.value}</span>
              </div>
              <div
                className={`mt-0.5 text-[11px] ${featured ? "text-white/65" : "text-slate-500"
                  }`}
              >
                {metric.label}
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center gap-1">
          {[0, 1, 2, 3, 4].map((item) => (
            <Star
              key={item}
              className={`h-4 w-4 fill-current ${featured ? "text-yellow-300" : "text-yellow-400"
                }`}
            />
          ))}
          <span
            className={`ml-2 text-xs font-medium ${featured ? "text-white/70" : "text-slate-500"
              }`}
          >
            Client feedback
          </span>
        </div>
      </div>
    </article>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const elements = section.querySelectorAll(".fade-in-element");

        elements.forEach((element, index) => {
          window.setTimeout(() => {
            element.classList.add("animate-fade-in");
          }, index * 100);
        });

        observer.unobserve(section);
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 md:py-24"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-100/60 blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="pulse-chip mx-auto mb-4 inline-flex items-center opacity-0 fade-in-element">
            <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
              <Star className="h-3 w-3 fill-current" />
            </span>
            <span>Client Experiences</span>
          </div>

          <h2 className="section-title mb-4 opacity-0 fade-in-element">
            Trusted by Businesses.
            <br className="hidden sm:block" />
            <span className="text-blue-600"> Built for Results.</span>
          </h2>

          <p className="section-subtitle mx-auto max-w-2xl opacity-0 fade-in-element">
            See how Haryvion Technology India helps businesses create better
            digital experiences through dependable development, thoughtful
            design, and ongoing technology support.
          </p>
        </div>

        {/* Service Promise */}
        <div className="mb-12 grid grid-cols-1 gap-4 opacity-0 fade-in-element sm:grid-cols-3">
          <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
            <Code2 className="mb-3 h-6 w-6 text-blue-600" />
            <h3 className="font-bold text-slate-900">Quality Development</h3>
            <p className="mt-1 text-sm leading-5 text-slate-500">
              Clean, responsive and maintainable digital products.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
            <Smartphone className="mb-3 h-6 w-6 text-blue-600" />
            <h3 className="font-bold text-slate-900">Modern Technology</h3>
            <p className="mt-1 text-sm leading-5 text-slate-500">
              Web, mobile and custom software built for today&apos;s users.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
            <ShieldCheck className="mb-3 h-6 w-6 text-blue-600" />
            <h3 className="font-bold text-slate-900">Reliable Partnership</h3>
            <p className="mt-1 text-sm leading-5 text-slate-500">
              Clear communication and support from start to deployment.
            </p>
          </div>
        </div>

        {/* Testimonials Bento */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="opacity-0 fade-in-element md:col-span-2">
            <TestimonialCard {...testimonials[0]} />
          </div>

          <div className="opacity-0 fade-in-element">
            <TestimonialCard {...testimonials[1]} />
          </div>

          <div className="opacity-0 fade-in-element">
            <TestimonialCard {...testimonials[2]} />
          </div>

          <div className="opacity-0 fade-in-element">
            <TestimonialCard {...testimonials[3]} />
          </div>

          <div className="opacity-0 fade-in-element">
            <TestimonialCard {...testimonials[4]} />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center opacity-0 fade-in-element sm:mt-16">
          <p className="mb-5 text-slate-600">
            Have a digital project in mind?
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
          >
            Talk to Our Team
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
