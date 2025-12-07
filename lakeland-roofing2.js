import React, { useState, useEffect } from 'react';
import { Star, Phone, Play, ChevronDown, CheckCircle, AlertTriangle, Wrench, ShieldCheck } from 'lucide-react';

const App = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    // Smooth scroll behavior for all anchor links
    const handleSmoothScroll = (e) => {
      const target = document.querySelector('#final-cta-section');
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    };

    // Add smooth scroll to all CTA buttons
    const ctaButtons = document.querySelectorAll('button:not(.faq-toggle):not([type="submit"])');
    ctaButtons.forEach(button => {
      if (button.textContent.includes('Estimate') || 
          button.textContent.includes('Quote') || 
          button.textContent.includes('CTA') ||
          button.textContent.includes('Peace of Mind') ||
          button.textContent.includes('Confidence') ||
          button.textContent.includes('Today')) {
        button.addEventListener('click', handleSmoothScroll);
      }
    });

    return () => {
      ctaButtons.forEach(button => {
        if (button.textContent.includes('Estimate') || 
            button.textContent.includes('Quote') || 
            button.textContent.includes('CTA') ||
            button.textContent.includes('Peace of Mind') ||
            button.textContent.includes('Confidence') ||
            button.textContent.includes('Today')) {
          button.removeEventListener('click', handleSmoothScroll);
        }
      });
    };
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Pre-testimonials (exactly 3)
  const preTestimonials = [
    {
      quote: "Outstanding Service from a Truly Reliable Family-owned Company! Their excellent communication kept us informed every step of the way.",
      name: "Jonathan"
    },
    {
      quote: "Lakeland roofing did a perfect job on our house and garage. Everything was picked up and clean. Not one plant was damaged in my flower gardens.",
      name: "Rich and Bonnie Hill"
    },
    {
      quote: "Brad and his team did an amazing job on our boathouse. The job site was so clean it took me a while to realize they had been there.",
      name: "Tim Olip"
    }
  ];

  // More testimonials (minimum 6)
  const moreTestimonials = [
    {
      quote: "Reshingled our roof in one day and it looks great. Very professional and well done work and cost.",
      name: "Peter Thompson",
      credential: "Homeowner"
    },
    {
      quote: "Within less than 2 hours I received an email from Brad wanting to schedule an appointment. By Tuesday, he had my roofing estimate completed. They completed the new roof by 12 noon.",
      name: "Mark Ross",
      credential: "Verified Customer"
    },
    {
      quote: "Brad and Todd were quick to respond to make temporary repairs after trees fell during a windstorm. They followed up with permanent repairs and did a great job.",
      name: "Bill Hucker",
      credential: "Homeowner"
    },
    {
      quote: "Lakeland did a great job with our new roof. Brad and his team were great at communicating and did a nice job. We love the new roof.",
      name: "Dan Macleod",
      credential: "Homeowner"
    },
    {
      quote: "Brad and crew arrived when scheduled and completed our roof project ahead of schedule. Competitive pricing and excellent communication throughout.",
      name: "Michelle & Kurt Veldhuizen",
      credential: "Homeowners"
    },
    {
      quote: "Knowing that Lakeland Roofing has been in business since 1975 and has served over 8,000 homes with such consistent excellence speaks volumes about their integrity.",
      name: "Jonathan",
      credential: "Long-time Customer"
    }
  ];

  const faqs = [
    {
      question: "How quickly can I get a roofing estimate?",
      answer: "We provide detailed, itemized roofing estimates within 48 hours of your initial contact. Our team responds to inquiries within 2 hours during business hours."
    },
    {
      question: "What's included in your roofing warranty?",
      answer: "We offer comprehensive 10-year workmanship warranties on all installations, plus manufacturer warranties on materials (typically 25-50 years). Our warranties are transferable to new homeowners."
    },
    {
      question: "How long does a typical roof replacement take?",
      answer: "Most residential roof replacements are completed in 1-2 days. We coordinate material delivery and crew scheduling to minimize disruption to your daily life."
    },
    {
      question: "Do you handle insurance claims for storm damage?",
      answer: "Yes, we work directly with your insurance company to handle storm damage claims. Our team includes experienced insurance coordinators who ensure you receive proper coverage for repairs."
    },
    {
      question: "Are you licensed and insured in Wisconsin?",
      answer: "Absolutely. We're fully licensed, bonded, and insured in Wisconsin with over 50 years of experience serving the Northwoods region since 1975."
    },
    {
      question: "What roofing materials do you offer?",
      answer: "We specialize in premium asphalt shingles from top manufacturers like GAF, Owens Corning, and CertainTeed, plus metal roofing options for enhanced durability and longevity."
    }
  ];

  const valueProps = [
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      headline: "Transparent Pricing",
      description: "Itemized quotes showing every material and labor cost. No hidden fees or surprise charges. What we quote is what you pay."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      headline: "Guaranteed Workmanship",
      description: "10-year warranty on all installations backed by our 50+ years of experience. We stand behind every roof we install."
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      headline: "Expert Installation",
      description: "Certified installers using proper techniques and premium materials. Your roof is only as good as its installation."
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      headline: "Direct Communication",
      description: "Work directly with Brad and our experienced team. No sales reps or middlemen—just honest, professional service."
    }
  ];

  return (
    <div className="font-sans">
      {/* SECTION 1: TOP BAR */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl text-gray-900">Lakeland Roofing</span>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 smooth-scroll-cta">
            Schedule Free Estimate
          </button>
        </div>
      </div>

      {/* SECTION 2: HERO SECTION */}
      <div className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-lg">4.9 Star Rating Based on 50+ Verified Reviews • Serving Minocqua Since 1975</p>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Minocqua&apos;s Most Trusted Roofing Specialists — Rated 4.9/5 by 50+ Homeowners
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We've protected over 8,000 homes in the Northwoods with expert roof installations, repairs, and restorations. 
                Fully licensed, insured, and backed by industry-leading warranties.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:transform hover:-translate-y-1 smooth-scroll-cta">
                Request Your Free Quote Today →
              </button>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
                <span className="text-gray-500">Professional Roofing Team Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: PR FEATURE / CREDIBILITY BAR */}
      <div className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-2xl font-bold text-gray-900 mb-8">As Featured In & Trusted By</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="text-gray-400 hover:text-gray-600 transition-colors">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-12 flex items-center justify-center">
                  <span className="text-xs">Logo {i+1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 4: PRE-TESTIMONIALS */}
      <div className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {preTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-gray-900 font-medium">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 5: BUYER OBJECTION HANDLER */}
      <div className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
            </div>
            <div className="lg:col-span-3">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us? Eliminating Your Risk.</h2>
              <p className="text-gray-600 mb-8 text-lg">
                In an industry filled with fly-by-night contractors, Lakeland Roofing stands apart with 50 years of 
                proven reliability, transparent communication, and quality workmanship that lasts.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <AlertTriangle className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">"Why now?"</h3>
                    <p className="text-gray-600">Winter is coming to Minocqua. A compromised roof can lead to devastating ice dam damage and interior water intrusion. 
                    Our team responds within hours, not days, to prevent costly emergency repairs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">"Why this?"</h3>
                    <p className="text-gray-600">We're family-owned since 1975 with over 8,000 completed projects. Unlike national franchises, 
                    you work directly with experienced local professionals who live in your community.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <ShieldCheck className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">"Is this for me?"</h3>
                    <p className="text-gray-600">Whether you need emergency storm repairs, routine maintenance, or complete roof replacement, 
                    our comprehensive services are designed for Northwoods homeowners who value quality and peace of mind.</p>
                  </div>
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-8 shadow-md hover:shadow-lg transition-all duration-200 smooth-scroll-cta">
                Get Peace of Mind Today
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 6: MORE TESTIMONIALS */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Don't Just Take Our Word For It: Verified Reviews
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {moreTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="text-gray-900 font-semibold">{testimonial.name} ({testimonial.credential})</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 7: VALUE STACK SECTION */}
      <div className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            The 4 Pillars of a Roof Done Right
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 space-y-8">
              <div className="flex items-start space-x-4">
                {valueProps[0].icon}
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{valueProps[0].headline}</h3>
                  <p className="text-gray-600">{valueProps[0].description}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                {valueProps[1].icon}
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{valueProps[1].headline}</h3>
                  <p className="text-gray-600">{valueProps[1].description}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 flex items-center justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
                <span className="text-gray-500">Roof Installation Process</span>
              </div>
            </div>
            <div className="lg:col-span-1 space-y-8">
              <div className="flex items-start space-x-4">
                {valueProps[2].icon}
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{valueProps[2].headline}</h3>
                  <p className="text-gray-600">{valueProps[2].description}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                {valueProps[3].icon}
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{valueProps[3].headline}</h3>
                  <p className="text-gray-600">{valueProps[3].description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-200 smooth-scroll-cta">
              Start Your Project with Confidence
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 8: BEFORE & AFTER SECTION */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Quality You Can See: The Lakeland Roofing Transformation
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                <span className="font-bold text-red-600">BEFORE: Worn & Damaged Roof</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Worn, Leaking, and Unreliable</h3>
              <p className="text-gray-600">
                Old asphalt shingles with curling edges, missing granules, and visible storm damage. 
                Multiple leak points causing interior water stains and potential structural damage. 
                No warranty protection leaving homeowners vulnerable to future issues.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <span className="font-bold text-green-600">AFTER: Premium Roof Installation</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sealed, Durable, and Warrantied</h3>
              <p className="text-gray-600">
                Brand new premium shingles with proper ice and water shield underlayment. 
                Complete tear-off and disposal of old materials with thorough site cleanup. 
                Backed by 10-year workmanship warranty and manufacturer material warranty.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-200 smooth-scroll-cta">
              Request Your Free Quote Today
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 9: VIDEO TESTIMONIAL SECTION */}
      <div className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Client Video Reviews: Why 'Done Right' Matters
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Hear directly from satisfied homeowners about the Lakeland Roofing difference—transparency, precision, and lasting results.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center relative">
                  <Play className="w-16 h-16 text-white bg-red-600 rounded-full p-4 absolute" />
                </div>
                <p className="text-center text-gray-600 mt-4">Click to watch the full testimonial (3:24 min)</p>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                They Delivered Exactly What They Promised
              </h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "Brad and his team completed our entire roof replacement in just one day, 
                and the quality of work was exceptional. <strong>They cleaned up every single nail and piece of debris</strong>, 
                leaving our property better than they found it. The communication throughout the process was outstanding—
                we always knew what to expect and when."
              </p>
              <p className="text-gray-900 font-semibold mb-4">— Robert and Jean W., Verified Customer</p>
              <p className="text-gray-600 font-medium">Video Testimonial</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 10: FAQ SECTION */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Common Questions & Warranty Clarity
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Addressing the important details on estimates, warranties, and process.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <button
                  className="w-full text-left p-6 flex justify-between items-center faq-toggle"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-lg text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 11: FINAL CTA SECTION */}
      <div id="final-cta-section" className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready for a Roof That is Truly Done Right?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Schedule your <strong>free, zero-obligation estimate</strong> today. 
                We guarantee transparent pricing and quality work, every time.
              </p>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-green-600" />
                <a href="tel:+17153562408" className="text-2xl font-bold text-gray-900 hover:text-green-600 transition-colors">
                  Call Us Directly: (715) 356-2408
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get Your Free Estimate</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(715) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Property Address & Service Needed</label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="123 Main St, Minocqua, WI 54548&#10;Roof replacement needed due to storm damage..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Schedule Free Estimate Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 12: FOOTER */}
      <div className="bg-gray-100 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <span className="font-bold text-2xl text-gray-900">Lakeland Roofing</span>
            </div>
          </div>
          <div className="border-t border-gray-300 my-8"></div>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 sm:mb-0">
              © 2025. Lakeland Roofing. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Cookies Settings</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
