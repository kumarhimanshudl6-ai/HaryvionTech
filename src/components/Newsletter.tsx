import React, { useState } from "react";
// import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // if (!email) {
    //   toast({
    //     title: "Please enter your email address",
    //     variant: "destructive"
    //   });
    //   return;
    // }
    // setIsSubmitting(true);

    // // Simulate API call
    // setTimeout(() => {
    //   toast({
    //     title: "Thank you for subscribing!",
    //     description: "You'll receive updates about mvpier and MVP development insights soon."
    //   });
    //   setEmail("");
    //   setIsSubmitting(false);
    // }, 1000);
  };

  return (
    <section id="newsletter" className="bg-gradient-to-b from-white to-pulse-50 py-16">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="pulse-chip">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
                  <img src="/star.svg" alt="mvpier" className="w-3 h-3" />
                </span>
              <span>Stay Updated</span>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">
            Get MVP Insights & <span className="text-pulse-500">Startup Tips</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
            Join 500+ founders who receive our weekly insights on MVP development, 
            startup strategies, and the latest trends in rapid prototyping. Plus, get exclusive 
            access to our founder resources and case studies.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-pulse-100 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <div className="relative flex-grow">
                <input 
                  type="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  placeholder="Enter your email address" 
                  className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent text-gray-700 bg-gray-50" 
                  required 
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 whitespace-nowrap"
              >
                {isSubmitting ? "Subscribing..." : "Get MVP Insights"}
              </button>
            </form>
            
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Weekly insights</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-pulse-400 rounded-full"></span>
                <span>Founder resources</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>No spam, unsubscribe anytime</span>
              </div>
            </div>
          </div>
          
          {/* Social Proof */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-4">Trusted by founders from</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <span className="text-gray-400 font-semibold">Y Combinator</span>
              <span className="text-gray-400 font-semibold">Techstars</span>
              <span className="text-gray-400 font-semibold">500 Startups</span>
              <span className="text-gray-400 font-semibold">Antler</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;