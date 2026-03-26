import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneMissed, 
  Snowflake,
  AlertTriangle,
  PhoneCall,
  TrendingDown, 
  StarHalf, 
  Quote,
  MessageSquare, 
  Star,
  BadgeCheck, 
  Bot, 
  Database, 
  Calendar, 
  Zap,
  CheckCircle2,
  ArrowRight,
  BotIcon
} from 'lucide-react';

import ScaleProMaxLogo from './assets/scalepromax_logo_4k.png'; 

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  }, []);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUpItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white scroll-smooth" id="home">
      
      {/* 1. STICKY NAVIGATION BAR - RESPONSIVE FIX */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center shrink-0">
            <a href="#home" className="cursor-pointer">
              {/* MODIFIED: Scales logo down on mobile, keeps it big on desktop */}
              <img 
                src={ScaleProMaxLogo} 
                alt="ScaleProMax Agency Logo" 
                className="h-7 sm:h-10 md:h-16 w-auto object-contain" 
              />
            </a>
          </div>
          {/* MODIFIED: whitespace-nowrap prevents the button text from wrapping into two lines */}
          <a 
            href="tel:+15166068485" 
            className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-bold text-sm md:text-base hover:bg-gray-800 transition-colors inline-block cursor-pointer whitespace-nowrap shrink-0"
          >
            Book Free Demo
          </a>
        </div>
      </motion.nav>

      {/* 2. HERO SECTION - RESPONSIVE PADDING & TEXT */}
      <section className="pt-20 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* MODIFIED: Adjusted text size for smaller screens */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6">
              Stop Losing Customers to the Guy Down the Street.
            </h1>
            <p className="text-gray-600 text-base md:text-xl mb-8 leading-relaxed">
              We build automated systems that turn missed calls into booked appointments, generate 5-star reviews on autopilot, and organize your leads—so you can focus on actually running your business.
            </p>
            <a 
              href="tel:+15166068485" 
              className="w-full md:w-auto bg-black text-white px-8 py-4 rounded-md font-bold text-lg md:text-xl hover:bg-gray-800 transition-colors mb-4 inline-block text-center cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Book Your Free 15-Min Demo
            </a>
            <p className="text-gray-500 text-sm italic text-center md:text-left">
              No contract. No hidden fee. Cancel anytime.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative mt-8 md:mt-0"
          >
            <div className="bg-white rounded-2xl p-4 md:p-6 border border-gray-200 shadow-2xl relative z-10">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                  <MessageSquare className="text-black w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="font-bold text-sm md:text-base">New Missed Call</div>
                  <div className="text-xs md:text-sm text-gray-500">Auto-reply sent instantly</div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 md:p-4 mb-4 border border-gray-100">
                <p className="text-xs md:text-sm text-gray-500 mb-1 md:mb-2">Incoming Call: (555) 019-8372</p>
                <p className="text-sm md:text-base text-black font-medium">Missed at 2:14 PM</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 md:p-4 border border-gray-200">
                <p className="text-xs md:text-sm text-black font-bold mb-1">Automated SMS Sent (2:14 PM):</p>
                <p className="text-xs md:text-sm text-gray-700">
                  Hi! We just missed your call and we hate that. 😔
                  <br /><br />
                  Tell us how we can help and we'll make it up to you with a proper callback. — XYZ
                </p>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gray-100 blur-[80px] md:blur-[100px] rounded-full -z-10"></div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-16 md:mt-20 pt-8 md:pt-10 border-t border-gray-200"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3">
            <CheckCircle2 className="text-black w-5 h-5 md:w-6 md:h-6 shrink-0" />
            <span className="font-bold text-sm md:text-base">Zero Missed Customers</span>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-3">
            <Zap className="text-black w-5 h-5 md:w-6 md:h-6 shrink-0" />
            <span className="font-bold text-sm md:text-base">100% Done-For-You</span>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-3">
            <BotIcon className="text-black w-5 h-5 md:w-6 md:h-6 shrink-0" />
            <span className="font-bold text-sm md:text-base">24/7 AI Chatbot</span>
          </div>
        </motion.div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section id="problem" className="py-16 md:py-24 bg-white text-black px-4 md:px-6 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 variants={fadeUpItem} className="text-3xl md:text-5xl font-black text-center mb-10 md:mb-16 tracking-tight">
            You're losing money every single day<br className="hidden md:block"/> and don't even know it.
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <motion.div variants={fadeUpItem} className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="bg-gray-50 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <PhoneMissed className="w-7 h-7 md:w-8 md:h-8 text-black" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Missed Calls = Lost Jobs</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Every time you miss a call because you're busy, that customer calls your competitor. That's thousands in lost revenue.
              </p>
            </motion.div>
            <motion.div variants={fadeUpItem} className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="bg-gray-50 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Snowflake className="w-7 h-7 md:w-8 md:h-8 text-black" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Leads Going Cold</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                You pay for ads or get referrals, but nobody follows up fast enough. The lead goes cold and the money is wasted.
              </p>
            </motion.div>
            <motion.div variants={fadeUpItem} className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="bg-gray-50 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <StarHalf className="w-7 h-7 md:w-8 md:h-8 text-black" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Invisible on Google</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                No consistent 5-star reviews means you're buried on page 2. Customers only trust businesses that look like the local authority.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 4. SOLUTION SECTION */}
      <section id="system" className="py-16 md:py-24 px-4 md:px-6 bg-white border-t border-gray-100">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 variants={fadeUpItem} className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">
            Everything your business needs.<br className="hidden md:block"/>Nothing you don't.
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: MessageSquare, title: "Missed Call Text-Back", desc: "We text back every missed call in under 30 seconds so they never call your competitor." },
              { icon: Star, title: "Review Automation", desc: "Auto-request Google reviews from happy customers only, pushing you to the top of search." },
              { icon: Bot, title: "AI Chat Widget", desc: "24/7 chat on your website that answers questions and books appointments automatically." },
              { icon: Database, title: "CRM + Pipeline", desc: "All your leads, texts, emails, and calls in one place, automatically organized." },
              { icon: Calendar, title: "Appointment Booking", desc: "Customers book directly from your website, 24/7, without you lifting a finger." },
              { icon: Zap, title: "Lead Follow-Up", desc: "Automated SMS + email follow-up sequence for every new lead until they buy or opt-out." }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeUpItem}>
                <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-black mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section id="process" className="py-16 md:py-24 bg-gray-50 px-4 md:px-6 border-y border-gray-200">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUpItem} className="text-3xl md:text-4xl font-bold mb-10 md:mb-16">We handle everything. You just show up.</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-[2px] bg-gray-200 z-0"></div>
            
            {[
              { step: "01", title: "Book a Free Demo", desc: "We show you the exact system live and how it fits your specific business." },
              { step: "02", title: "We Build It All", desc: "Website, automations, CRM, all set up. You don't lift a finger." },
              { step: "03", title: "Watch It Grow", desc: "More leads, more reviews, zero manual work. Just check your calendar." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUpItem} className="relative z-10 bg-gray-50 px-4">
                <div className="text-black border border-black text-xs md:text-sm font-bold tracking-[0.2em] mb-4 bg-white inline-block px-3 py-1">STEP {item.step}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.a 
            variants={fadeUpItem}
            href="tel:+15166068485" 
            className="mt-12 md:mt-16 w-full md:w-auto bg-black text-white px-8 py-4 rounded-md font-bold text-lg md:text-xl hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Start With a Free Demo Call <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>

      {/* 6. GENUINE SOCIAL PROOF SECTION */}
      <section id="results" className="py-16 md:py-24 px-4 md:px-6 bg-white border-y border-gray-100">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUpItem} className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-black">
              Results that speak for themselves.
            </h2>
            <p className="text-gray-500 text-base md:text-lg">Real feedback from real business owners using ScaleProMax.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                text: "Honestly, I was skeptical about the '30-second text back' thing. But after seeing it <strong class='font-bold'>save a $1,200 ceramic coating job</strong> while I was under a car, I'm a believer. ScaleProMax is easily the best investment we've made this year.",
                initials: "MR", name: "Mike Rossi", biz: "Elite Auto Spa, Brooklyn", bg: "bg-black", textCol: "text-white"
              },
              {
                text: "The review automation alone is worth the price. We went from a 4.1 to a <strong class='font-bold'>4.8 rating on Google</strong> in 60 days. Our front desk is less stressed, and the AI handles basic booking questions 24/7.",
                initials: "SL", name: "Dr. Sarah Lane", biz: "Midtown Family Dental", bg: "bg-blue-100", textCol: "text-blue-600"
              },
              {
                text: "As a contractor, I'm always on-site and usually miss leads. The <strong class='font-bold'>AI Receptionist</strong> qualifies people and puts them on my calendar. I just wake up and see a full schedule of jobs. No more cold leads.",
                initials: "JT", name: "Jason T.", biz: "Precision HVAC & Plumbing", bg: "bg-gray-100", textCol: "text-gray-600"
              }
            ].map((review, i) => (
              <motion.div key={i} variants={fadeUpItem} className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 relative">
                <Quote className="absolute top-4 right-6 text-gray-50 w-10 h-10 md:w-12 md:h-12 -z-0" />
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-4 text-orange-400">
                    {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                    <span className="ml-2 text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Verified Google Review</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6 md:mb-8" dangerouslySetInnerHTML={{ __html: review.text }}></p>
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 ${review.bg} rounded-full flex items-center justify-center ${review.textCol} font-bold text-sm md:text-base shrink-0`}>{review.initials}</div>
                    <div>
                      <div className="font-bold flex items-center gap-1 text-sm md:text-base text-black">
                        {review.name} <BadgeCheck size={14} className="text-blue-500 shrink-0" />
                      </div>
                      <div className="text-gray-500 text-xs md:text-sm italic">{review.biz}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7. DEMO PREVIEW */}
      <section className="py-16 md:py-24 bg-white px-4 md:px-6 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUpItem} className="text-3xl md:text-4xl font-bold mb-4">Here's exactly what we built for a NY detailing shop.</motion.h2>
          <motion.p variants={fadeUpItem} className="text-gray-600 text-base md:text-lg mb-10 md:mb-16">This is the same system we'll build for your business in 5-7 days.</motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div variants={fadeUpItem} className="bg-white rounded-xl h-56 md:h-64 border border-gray-200 shadow-lg flex flex-col overflow-hidden">
              <div className="bg-gray-50 p-3 border-b border-gray-200 flex items-center gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-300"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-300"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-300"></div>
                <div className="text-[10px] md:text-xs text-gray-500 font-medium ml-2">CRM Pipeline</div>
              </div>
              <div className="p-3 md:p-4 flex-1 flex gap-2 bg-gray-50/50">
                <div className="flex-1 bg-white border border-gray-100 rounded p-2 shadow-sm">
                  <div className="h-1.5 md:h-2 w-1/2 bg-gray-200 rounded mb-2 md:mb-3"></div>
                  <div className="bg-gray-100 h-10 md:h-12 rounded mb-2 border border-gray-200"></div>
                  <div className="bg-gray-50 h-10 md:h-12 rounded border border-gray-100"></div>
                </div>
                <div className="flex-1 bg-white border border-gray-100 rounded p-2 shadow-sm">
                  <div className="h-1.5 md:h-2 w-1/2 bg-gray-200 rounded mb-2 md:mb-3"></div>
                  <div className="bg-gray-50 h-10 md:h-12 rounded mb-2 border border-gray-100"></div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUpItem} className="bg-white rounded-xl h-56 md:h-64 border border-gray-200 shadow-lg flex flex-col overflow-hidden">
              <div className="bg-gray-50 p-3 border-b border-gray-200 flex items-center gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-300"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-300"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-300"></div>
                <div className="text-[10px] md:text-xs text-gray-500 font-medium ml-2">Automation Builder</div>
              </div>
              <div className="p-3 md:p-4 flex-1 flex flex-col items-center justify-center gap-2 bg-gray-50/50">
                <div className="bg-white px-3 md:px-4 py-1.5 md:py-2 rounded text-[10px] md:text-xs border border-gray-200 font-medium shadow-sm">Call Status: Missed</div>
                <div className="w-px h-3 md:h-4 bg-gray-300"></div>
                <div className="bg-gray-100 px-3 md:px-4 py-1.5 md:py-2 rounded text-[10px] md:text-xs border border-gray-200 font-medium shadow-sm">Wait 0.5 mins</div>
                <div className="w-px h-3 md:h-4 bg-gray-300"></div>
                <div className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 rounded text-[10px] md:text-xs font-medium shadow-sm">Send SMS</div>
              </div>
            </motion.div>

            <motion.div variants={fadeUpItem} className="bg-white rounded-xl h-56 md:h-64 border border-gray-200 shadow-lg flex flex-col overflow-hidden relative">
               <div className="bg-gray-50 p-3 border-b border-gray-200 flex items-center justify-center">
                <div className="w-12 md:w-16 h-1 bg-gray-300 rounded-full"></div>
              </div>
              <div className="p-3 md:p-4 flex-1 flex flex-col justify-end gap-2 md:gap-3 pb-4 md:pb-6 bg-gray-50/50">
                <div className="bg-gray-200 rounded-2xl rounded-tl-sm p-2 md:p-3 max-w-[85%] md:max-w-[80%] self-start">
                  <div className="h-1.5 md:h-2 w-20 md:w-24 bg-gray-400 rounded mb-1.5 md:mb-2"></div>
                  <div className="h-1.5 md:h-2 w-28 md:w-32 bg-gray-400 rounded"></div>
                </div>
                <div className="bg-black text-white rounded-2xl rounded-tr-sm p-2 md:p-3 max-w-[90%] md:max-w-[85%] self-end shadow-sm">
                  <p className="text-[10px] md:text-xs font-medium">
                    Thanks for choosing XYZ Detailing! 
                    <br />
                    Could you take just 10 seconds to leave us a review? [Link]
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 8. THE REVENUE LEAK AUDIT */}
      <section id="audit" className="py-16 md:py-24 px-4 md:px-6 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6">
                <AlertTriangle size={14} className="md:w-4 md:h-4" /> WARNING: REVENUE LEAK DETECTED
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4 md:mb-6 text-black">
                Stop Giving Your Best Leads To The Competition.
              </h2>
              <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed">
                Every missed call is a customer who just moved on to the next person on Google. Most local businesses lose <strong className="font-bold">$2,000–$5,000 every month</strong> simply because they didn't text back in under 60 seconds.
              </p>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex gap-3 md:gap-4">
                  <div className="bg-black p-2 h-fit rounded shrink-0">
                    <TrendingDown className="text-white w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg text-black">The Inaction Cost</h4>
                    <p className="text-sm md:text-base text-gray-500">Wait another month and you'll likely lose another 15–20 high-value jobs.</p>
                  </div>
                </div>
                <div className="flex gap-3 md:gap-4">
                  <div className="bg-black p-2 h-fit rounded shrink-0">
                    <PhoneCall className="text-white w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg text-black">Immediate Recovery</h4>
                    <p className="text-sm md:text-base text-gray-500">We show you exactly how many leads you've missed this week.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-black text-white rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gray-800 rounded-full -mr-12 -mt-12 md:-mr-16 md:-mt-16 opacity-50"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Get Your Revenue Audit</h3>
                <p className="text-gray-400 mb-6 md:mb-8 text-xs md:text-sm">15 Minutes. We pull your data. We show you the leak.</p>
                
                <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-sm md:text-base">
                  <div className="flex justify-between border-b border-gray-800 pb-2">
                    <span className="text-gray-400">Consultation Fee:</span>
                    <span className="line-through text-gray-600">$149.00</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800 pb-2 font-bold">
                    <span>Today's Total:</span>
                    <span className="text-green-400">$0.00</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <a 
                    href="tel:+15166068485" 
                    className="w-full bg-white text-black font-black py-4 md:py-5 rounded-xl hover:bg-gray-200 transition-all text-lg md:text-xl shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] flex items-center justify-center gap-2 md:gap-3 cursor-pointer hover:-translate-y-1"
                  >
                    <PhoneCall size={20} className="md:w-6 md:h-6" /> Call For Free Audit
                  </a>
                </div>
                
                <p className="mt-4 md:mt-6 text-center text-[10px] md:text-xs text-gray-500">
                  No sales pitch. Just a data-driven look at your business lead flow.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-black py-12 md:py-16 px-4 md:px-6 text-white border-t border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-3 md:gap-4">
            <a href="#home" className="cursor-pointer">
              <img 
                src={ScaleProMaxLogo} 
                alt="ScaleProMax Footer Logo" 
                className="h-8 md:h-10 w-auto invert" 
              />
            </a>
            <div className="text-xs md:text-sm text-gray-500 text-center md:text-left">© 2026 ScaleProMax. All rights reserved.</div>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-xs md:text-sm font-medium text-gray-400">
            <a href="#problem" className="hover:text-white transition-colors">The Problem</a>
            <a href="#system" className="hover:text-white transition-colors">Our System</a>
            <a href="#process" className="hover:text-white transition-colors">How It Works</a>
            <a href="#results" className="hover:text-white transition-colors">Real Results</a>
            <a href="#audit" className="text-white hover:text-gray-300 transition-colors border-b border-white pb-0.5">Free Audit</a>
          </div>

        </div>
      </footer>
    </div>
  );
}