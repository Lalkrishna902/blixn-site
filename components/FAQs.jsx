"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "What services does blixN offer?",             answer: "blixN specializes in AI-powered lead generation and appointment booking systems. We help businesses automate their sales processes, generate qualified leads, and book appointments with potential clients using advanced AI technology." },
  { question: "How long does it take to start getting results?", answer: "Most clients see qualified leads and booked appointments in the first 7 to 14 days after launch. Our full system setup takes 3 to 5 business days, depending on niche and ad approvals." },
  { question: "Do you provide support after launch?",        answer: "Yes. We offer end-to-end ongoing support via Slack. This includes reporting, optimization, creative refreshes, and any adjustments you need. You're not left hanging." },
  { question: "What platforms/tools do you use?",           answer: "We use a mix of tools like GoHighLevel, Instantly, Twilio, Zapier, Meta Ads Manager, Google Ads, and custom AI agents. But don't worry: you don't have to touch any of that. We build the full backend for you." },
  { question: "How do I book a call?",                       answer: "Click the 'Book a Strategy Call' button anywhere on the page, pick a time that works for you, and we'll take care of the rest. If you have any issues, reach out to hello@blixn.io." },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="w-full py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #000, #050505)" }}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px]"
          style={{ background: "radial-gradient(ellipse, rgba(200,16,46,0.06) 0%, transparent 65%)" }} />
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#c8102e]" />
            <div className="liquid-glass-pill inline-flex items-center px-4 py-1.5 rounded-full">
              <span className="text-[10px] font-semibold tracking-[0.22em] text-white/70 uppercase">FAQs</span>
            </div>
            <span className="h-px w-8 bg-[#c8102e]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold text-white mb-4 leading-[1.1]">
            Frequently Asked{" "}
            <span className="italic bg-gradient-to-r from-[#c8102e] to-[#ff2d62] bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Questions
            </span>
          </h2>
          <p className="text-white/45 text-base max-w-xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </motion.div>

        {/* Accordion — Double-Bezel items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl p-[1.5px]"
              style={{
                background: activeIndex === index
                  ? "linear-gradient(135deg, rgba(200,16,46,0.35) 0%, rgba(200,16,46,0.08) 50%, rgba(255,255,255,0.04) 100%)"
                  : "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                transition: "background 0.4s ease"
              }}
            >
              <div
                className="rounded-[calc(1rem-1.5px)] overflow-hidden"
                style={{
                  background: activeIndex === index ? "rgba(14,4,6,0.95)" : "rgba(6,6,6,0.9)",
                  backdropFilter: "blur(20px) saturate(150%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                  transition: "background 0.4s ease"
                }}
              >
                <motion.button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center cursor-pointer"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.01)" }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-semibold text-white text-[0.95rem] pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      size={18}
                      className="transition-colors duration-300"
                      style={{ color: activeIndex === index ? "#c8102e" : "rgba(255,255,255,0.35)" }}
                    />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1, transition: { height: { duration: 0.45, ease: [0.04, 0.62, 0.23, 0.98] }, opacity: { duration: 0.3, delay: 0.1 } } }}
                      exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }, opacity: { duration: 0.2 } } }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="h-px w-full mb-4"
                          style={{ background: "linear-gradient(to right, rgba(200,16,46,0.2), rgba(255,255,255,0.05))" }} />
                        <p className="text-white/55 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
};

export default FAQs;
