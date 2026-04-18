"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaPencilAlt, FaGlobe, FaChartLine, FaArrowRight } from "react-icons/fa";

const steps = [
  { number: "01", title: "Onboarding Call",    description: "We dive deep into your business: goals, audience, bottlenecks. By the end of this call we have a fully custom game plan ready.",                                      icon: FaUsers,      timeline: "Day 1" },
  { number: "02", title: "Strategy & Setup",   description: "Within 7 days, we build your automation stack from scratch. CRM, outbound, ads, AI agents. Every detail optimized before we go live.",                             icon: FaPencilAlt,  timeline: "Days 2 to 7" },
  { number: "03", title: "System Goes Live",   description: "We launch your system and qualified leads start flowing within days. Real results, not promises. Your pipeline becomes predictable.",                                 icon: FaGlobe,      timeline: "Days 7 to 14" },
  { number: "04", title: "Improve & Scale",    description: "We analyze data weekly, test new angles, and squeeze every drop of ROI from your campaigns. This is where good becomes exceptional.",                               icon: FaChartLine,  timeline: "Ongoing" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.05 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
};

export default function OurProcess() {
  return (
    <section id="process" className="w-full py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, rgba(200,16,46,0.07) 0%, transparent 65%)" }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#c8102e]" />
            <div className="liquid-glass-pill inline-flex items-center px-4 py-1.5 rounded-full">
              <span className="text-[10px] font-semibold tracking-[0.22em] text-white/70 uppercase">Our Process</span>
            </div>
            <span className="h-px w-8 bg-[#c8102e]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold text-white mb-5 leading-[1.1]">
            From Zero to{" "}
            <span className="italic bg-gradient-to-r from-[#c8102e] to-[#ff2d62] bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Fully Automated
            </span>
            {" "}in 2 Weeks
          </h2>
          <p className="text-white/45 text-base sm:text-lg max-w-2xl mx-auto">
            A proven 4-step methodology that turns chaotic sales ops into a predictable growth machine.
          </p>
        </motion.div>

        {/* Cards — Double-Bezel architecture */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.32, 0.72, 0, 1] } }}
              /* Outer shell */
              className="group rounded-[2rem] p-[1.5px]"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(200,16,46,0.08) 100%)"
              }}
            >
              {/* Inner core */}
              <div
                className="rounded-[calc(2rem-1.5px)] p-8 h-full relative overflow-hidden"
                style={{
                  background: "rgba(8,8,8,0.85)",
                  backdropFilter: "blur(20px) saturate(150%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 -1px 0 rgba(0,0,0,0.4)"
                }}
              >
                {/* Subtle inner glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-[calc(2rem-1.5px)] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(200,16,46,0.08) 0%, transparent 60%)" }}
                />

                {/* Step number + timeline */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[3.5rem] font-bold leading-none select-none"
                    style={{ color: "rgba(255,255,255,0.04)" }}>
                    {step.number}
                  </span>
                  <div className="liquid-glass-pill px-3 py-1.5 rounded-full">
                    <span className="text-[11px] font-medium text-[#c8102e]">{step.timeline}</span>
                  </div>
                </div>

                {/* Icon + title */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: "rgba(200,16,46,0.1)",
                      boxShadow: "0 0 0 1px rgba(200,16,46,0.2), inset 0 1px 0 rgba(255,255,255,0.08)"
                    }}
                  >
                    <step.icon className="text-[#c8102e] text-lg" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>

                <p className="text-white/50 text-[0.93rem] leading-relaxed group-hover:text-white/65 transition-colors duration-500">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <p className="text-white/40 text-sm">
            Most clients see results in{" "}
            <span className="text-white/75 font-medium">7 to 14 days.</span>
          </p>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(200,16,46,0.35)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.open("https://calendly.com/wolfwisemedia/letsmakesomemoney", "_blank")}
            className="cursor-pointer group shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-semibold text-sm"
            style={{
              background: "linear-gradient(135deg, #c8102e, #e8193a)",
              boxShadow: "0 0 0 1px rgba(200,16,46,0.4), inset 0 1px 0 rgba(255,255,255,0.12)"
            }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          >
            Start the Process
            <motion.span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center"
              whileHover={{ scale: 1.15, x: 1 }} transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}>
              <FaArrowRight size={9} />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
}
