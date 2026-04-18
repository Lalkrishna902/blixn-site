"use client";
import React, { useRef, useMemo, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const companyLogos = [
  "/asana.avif", "/instantly.avif", "/inframail.avif",
  "/highlevel.avif", "/zapier.png", "/twilio.png",
];

const Logo = memo(({ logo, index }) => (
  <motion.div
    className="inline-flex items-center justify-center h-7 px-10 mx-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 2.6 + index * 0.07, duration: 0.6 } }}
    whileHover={{ scale: 1.12, transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] } }}
  >
    <Image
      src={logo} alt="Partner logo" width={110} height={50}
      className="object-contain h-full w-full grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100"
      priority={index < 3} loading={index < 3 ? "eager" : "lazy"}
    />
  </motion.div>
));
Logo.displayName = "Logo";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.25 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

export default function LandingPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const duplicatedLogos = useMemo(() => [...companyLogos, ...companyLogos], []);

  return (
    <div id="home" className="flex flex-col overflow-hidden bg-black" ref={containerRef}>
      <section className="min-h-[100dvh] w-full flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8 pt-28 pb-36">

        {/* Ambient orbs */}
        <motion.div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: bgOpacity }}>
          <motion.div
            className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(200,16,46,0.18) 0%, transparent 65%)", filter: "blur(1px)" }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px]"
            style={{ background: "radial-gradient(ellipse, rgba(200,16,46,0.08) 0%, transparent 65%)" }} />
        </motion.div>

        {/* Subtle dot grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <motion.div
          className="text-center max-w-5xl mx-auto relative z-10 w-full"
          style={{ y }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow pill */}
          <motion.div variants={itemVariants} className="mb-8 flex items-center justify-center">
            {/* Liquid glass pill */}
            <div className="liquid-glass-pill inline-flex items-center gap-2.5 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-white/80 uppercase">
                AI Automation Company
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[2.6rem] sm:text-[3.4rem] lg:text-[4.6rem] font-bold text-white leading-[1.05] tracking-tight mb-7"
          >
            We Automate Your Business
            <br />
            <span
              className="italic font-bold bg-gradient-to-r from-[#c8102e] via-[#e8193a] to-[#ff2d62] bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              So You Can Scale It.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-[1.05rem] sm:text-[1.2rem] text-white/55 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            We build custom AI systems for lead generation, CRM automation, and outbound campaigns that run 24/7 so your team can focus on closing deals.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {/* Primary — solid red */}
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(200,16,46,0.5), 0 0 0 1px rgba(200,16,46,0.5)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open("https://calendly.com/wolfwisemedia/letsmakesomemoney", "_blank")}
              className="cursor-pointer group flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-semibold text-[0.95rem] transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, #c8102e, #e8193a)",
                boxShadow: "0 0 0 1px rgba(200,16,46,0.4), 0 4px 24px rgba(200,16,46,0.25), inset 0 1px 0 rgba(255,255,255,0.12)"
              }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            >
              Book a Free Strategy Call
              <motion.span
                className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center shrink-0"
                whileHover={{ scale: 1.15, x: 1, y: -0.5 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              >
                <FaArrowRight size={10} />
              </motion.span>
            </motion.button>

            {/* Secondary — liquid glass */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { const el = document.getElementById("services"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
              className="cursor-pointer liquid-glass-btn flex items-center gap-2 px-7 py-3.5 rounded-full text-white/80 font-medium text-[0.95rem] hover:text-white transition-colors duration-300"
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            >
              See What We Do
            </motion.button>
          </motion.div>

          {/* Liquid glass social proof strip */}
          <motion.div variants={itemVariants}>
            <div className="liquid-glass-card inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-8 px-8 py-4 rounded-2xl mx-auto">
              {[
                { value: "25+", label: "Businesses Automated" },
                { value: "$13M+", label: "Revenue Generated" },
                { value: "7-14 days", label: "To First Results" },
              ].map((stat, i) => (
                <React.Fragment key={i}>
                  <div className="text-center sm:text-left">
                    <div className="text-white font-bold text-lg leading-none">{stat.value}</div>
                    <div className="text-white/45 text-xs mt-1">{stat.label}</div>
                  </div>
                  {i < 2 && <div className="hidden sm:block h-8 w-px bg-white/10" />}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Partner logo strip */}
        <motion.div
          className="absolute bottom-0 left-0 w-full overflow-hidden py-5 border-t border-white/[0.05]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.9 } }}
        >
          <p className="text-center text-[10px] text-white/25 tracking-[0.2em] uppercase mb-4">Powered by the tools we run for you</p>
          <div className="relative flex items-center">
            <div className="flex animate-scroll-left whitespace-nowrap">
              {duplicatedLogos.map((logo, index) => (
                <Logo key={`left-${index}`} logo={logo} index={index} />
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        </motion.div>
      </section>

      <style jsx global>{`
        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
          display: inline-block;
          will-change: transform;
        }
        .animate-scroll-left:hover { animation-play-state: paused; }
      `}</style>
    </div>
  );
}
