"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { BsRobot, BsFunnel, BsMegaphone, BsEnvelopeAt, BsDiagram3, BsGraphUpArrow } from "react-icons/bs";

const services = [
  { icon: BsFunnel,        title: "Lead Generation Systems",  description: "Multi-channel outbound pipelines that fill your calendar with qualified prospects. No manual work required.",                        tags: ["Instantly", "Inframail", "LinkedIn"] },
  { icon: BsDiagram3,      title: "CRM Setup & Automation",   description: "We build your full GoHighLevel backend: pipelines, automations, follow-ups, and reporting. Done for you.",                           tags: ["GoHighLevel", "Zapier", "Twilio"] },
  { icon: BsMegaphone,     title: "Paid Ads Management",      description: "Performance-driven Meta and Google campaigns that generate predictable ROI, managed end-to-end by our team.",                         tags: ["Meta Ads", "Google Ads", "Retargeting"] },
  { icon: BsRobot,         title: "AI Chatbot Integration",   description: "Custom AI agents that qualify leads, answer objections, and book calls. Even while you sleep.",                                       tags: ["Custom AI", "24/7 Active", "Auto-qualify"] },
  { icon: BsEnvelopeAt,    title: "Email Outreach Automation", description: "Hyper-personalized cold email campaigns at scale, with inbox warming, deliverability management, and A/B testing built in.",        tags: ["Cold Email", "Personalization", "Deliverability"] },
  { icon: BsGraphUpArrow,  title: "Growth & Scaling Systems", description: "Data-driven optimization loops that compound results. We analyze, iterate, and scale what's working every week.",                     tags: ["Weekly Reports", "A/B Testing", "Scale"] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
};

export const OurServices = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="w-full py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #000, #050505)" }}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[450px]"
          style={{ background: "radial-gradient(ellipse, rgba(200,16,46,0.07) 0%, transparent 65%)" }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#c8102e]" />
            <div className="liquid-glass-pill inline-flex items-center px-4 py-1.5 rounded-full">
              <span className="text-[10px] font-semibold tracking-[0.22em] text-white/70 uppercase">Services</span>
            </div>
            <span className="h-px w-8 bg-[#c8102e]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold text-white mb-5 leading-[1.1]">
            Everything You Need to{" "}
            <span className="italic bg-gradient-to-r from-[#c8102e] to-[#ff2d62] bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Scale.
            </span>
          </h2>
          <p className="text-white/45 text-base sm:text-lg max-w-2xl mx-auto">
            We don't sell retainers. We build systems that run your growth engine. Pick what you need or let us design the full stack.
          </p>
        </motion.div>

        {/* Cards — Double-Bezel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -7, transition: { duration: 0.35, ease: [0.32, 0.72, 0, 1] } }}
              /* Outer shell */
              className="group rounded-[2rem] p-[1.5px] cursor-default"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 50%, rgba(200,16,46,0.06) 100%)"
              }}
            >
              {/* Inner core */}
              <div
                className="rounded-[calc(2rem-1.5px)] p-7 h-full relative overflow-hidden"
                style={{
                  background: "rgba(6,6,6,0.9)",
                  backdropFilter: "blur(20px) saturate(150%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)"
                }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-[calc(2rem-1.5px)] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(200,16,46,0.07) 0%, transparent 55%)" }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: "rgba(200,16,46,0.08)",
                    boxShadow: "0 0 0 1px rgba(200,16,46,0.18), inset 0 1px 0 rgba(255,255,255,0.08)"
                  }}
                >
                  <service.icon className="text-[#c8102e] text-xl" />
                </div>

                <h3 className="text-[1.05rem] font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-5 group-hover:text-white/60 transition-colors duration-500">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] px-2.5 py-1 rounded-full text-white/40"
                      style={{ background: "rgba(255,255,255,0.04)", boxShadow: "0 0 0 1px rgba(255,255,255,0.07)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 text-center"
        >
          <p className="text-white/35 text-sm mb-5">Not sure which service fits? We'll figure it out together.</p>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(200,16,46,0.35)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.open("https://calendly.com/wolfwisemedia/letsmakesomemoney", "_blank")}
            className="cursor-pointer group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-semibold text-sm"
            style={{
              background: "linear-gradient(135deg, #c8102e, #e8193a)",
              boxShadow: "0 0 0 1px rgba(200,16,46,0.4), inset 0 1px 0 rgba(255,255,255,0.12)"
            }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          >
            Get a Custom Game Plan
            <motion.span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center"
              whileHover={{ scale: 1.15, x: 1 }} transition={{ duration: 0.25 }}>
              <FaArrowRight size={9} />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
};
