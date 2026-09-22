import { MessageSquare, LayoutDashboard, Code, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      num: 1,
      title: "Consultation",
      desc: "We understand your business goals and challenges through detailed discussions.",
      icon: MessageSquare,
    },
    {
      num: 2,
      title: "Planning",
      desc: "We create a comprehensive strategy and roadmap tailored to your needs.",
      icon: LayoutDashboard,
    },
    {
      num: 3,
      title: "Development",
      desc: "Our expert team builds your solution using cutting-edge technologies.",
      icon: Code,
    },
    {
      num: 4,
      title: "Launch & Support",
      desc: "We deploy your solution and provide ongoing support for success.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      {/* Tiny decorative dots matching screenshot */}
      <div className="absolute top-32 left-1/4 w-2 h-2 rounded-full bg-purple-500" />
      <div className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-purple-200" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 text-blue-800 text-sm font-semibold mb-6">
            <span className="text-blue-600">⚙️</span> HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1E40AF]">
            Our Simple 4-Step Process
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative animate-on-scroll">

          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-slate-100 -z-10" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative flex flex-col items-center text-center group bg-white rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                {/* Circle Icon */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-[#1E40AF] rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10" />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold border-[3px] border-white shadow-sm">
                    {step.num}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;