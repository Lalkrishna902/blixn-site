"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

const values = [
  "We only work with 5 clients at a time. Full focus, no agency bloat.",
  "You get direct access to the founders, not an account manager.",
  "Results first: if we don't perform, we don't deserve the retainer.",
  "Operating globally across US, UK, Europe, and MENA markets",
];

const team = [
  { name: "Lalkrishna", role: "Co-Founder & Growth Lead",   bio: "Leads client acquisition and paid media strategy. 2+ years scaling businesses across HVAC, eCommerce, and SaaS with AI-powered systems.", initials: "LK", linkedin: "https://linkedin.com" },
  { name: "Sanskar",    role: "Co-Founder & Systems Lead",  bio: "Architects the full automation stack: CRM pipelines, AI agents, and outbound infrastructure that runs 24/7 without human intervention.",      initials: "SK", linkedin: "https://linkedin.com" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.05 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(5px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
};

export default function AboutSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="w-full py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #050505, #000)" }}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[500px]"
          style={{ background: "radial-gradient(ellipse, rgba(200,16,46,0.06) 0%, transparent 65%)" }} />
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
              <span className="text-[10px] font-semibold tracking-[0.22em] text-white/70 uppercase">About Us</span>
            </div>
            <span className="h-px w-8 bg-[#c8102e]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold text-white mb-5 leading-[1.1]">
            We're Not an Agency.{" "}
            <span className="italic bg-gradient-to-r from-[#c8102e] to-[#ff2d62] bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              We're Your Growth Partner.
            </span>
          </h2>
          <p className="text-white/45 text-base sm:text-lg max-w-2xl mx-auto">
            Blixn was built by two founders frustrated with agencies that over-promise and under-deliver. So we do things differently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <motion.p variants={itemVariants} className="text-white/55 text-[1.05rem] leading-relaxed mb-7">
              We started Blixn after seeing too many founders waste $10K+ on agencies that handed everything off to juniors. We're a lean, senior-led operation: two founders, a tight team of specialists, and one mission. Build systems that generate revenue while you sleep.
            </motion.p>
            <motion.p variants={itemVariants} className="text-white/55 text-[1.05rem] leading-relaxed mb-10">
              In 2 years, we've helped 25+ businesses across HVAC, law firms, eCommerce, and SaaS generate over $13M in tracked revenue through AI automation and performance advertising.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-3.5 mb-10">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-3">
                  <BsCheckCircleFill className="text-[#c8102e] text-sm mt-0.5 shrink-0" />
                  <p className="text-white/55 text-[0.9rem] leading-relaxed">{v}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(200,16,46,0.35)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.open("https://calendly.com/wolfwisemedia/letsmakesomemoney", "_blank")}
                className="cursor-pointer group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-semibold text-sm"
                style={{
                  background: "linear-gradient(135deg, #c8102e, #e8193a)",
                  boxShadow: "0 0 0 1px rgba(200,16,46,0.4), inset 0 1px 0 rgba(255,255,255,0.12)"
                }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              >
                Work With Us
                <motion.span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center"
                  whileHover={{ scale: 1.15, x: 1 }} transition={{ duration: 0.25 }}>
                  <FaArrowRight size={9} />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right — Team cards Double-Bezel */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="flex flex-col gap-4"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] } }}
                className="group rounded-[1.5rem] p-[1.5px]"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 60%, rgba(200,16,46,0.07) 100%)"
                }}
              >
                <div
                  className="rounded-[calc(1.5rem-1.5px)] p-6 relative overflow-hidden"
                  style={{
                    background: "rgba(8,8,8,0.88)",
                    backdropFilter: "blur(20px) saturate(150%)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)"
                  }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                    style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(200,16,46,0.06) 0%, transparent 50%)" }}
                  />
                  <div className="flex items-start gap-4 relative z-10">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(200,16,46,0.25), rgba(200,16,46,0.08))",
                        boxShadow: "0 0 0 1px rgba(200,16,46,0.2), inset 0 1px 0 rgba(255,255,255,0.1)"
                      }}
                    >
                      <span className="text-[#c8102e] font-bold">{member.initials}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <h3 className="text-white font-bold text-base">{member.name}</h3>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                          className="text-white/25 hover:text-[#c8102e] transition-colors duration-300" aria-label={`${member.name} LinkedIn`}>
                          <FaLinkedin size={15} />
                        </a>
                      </div>
                      <p className="text-[#c8102e] text-xs font-medium mb-2.5">{member.role}</p>
                      <p className="text-white/45 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Global badge */}
            <motion.div
              variants={itemVariants}
              className="rounded-[1.5rem] p-[1.5px]"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)" }}
            >
              <div className="rounded-[calc(1.5rem-1.5px)] p-5 flex items-center gap-4"
                style={{ background: "rgba(8,8,8,0.88)", backdropFilter: "blur(20px)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-base"
                  style={{ background: "rgba(255,255,255,0.04)", boxShadow: "0 0 0 1px rgba(255,255,255,0.07)" }}>
                  🌍
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Operating Globally</p>
                  <p className="text-white/35 text-xs mt-0.5">Serving clients across US · UK · Europe · MENA</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
}
