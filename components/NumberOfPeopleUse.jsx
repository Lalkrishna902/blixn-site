"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const stats = [
  { number: 25, suffix: "+",  label: "Businesses Automated",  description: "Across HVAC, Law, eCommerce & SaaS" },
  { number: 2,  suffix: "+",  label: "Years Operating",        description: "Globally trusted, senior-led" },
  { number: 7,  suffix: "+",  label: "Team Specialists",       description: "Senior-led, no juniors on your account" },
  { number: 13, suffix: "M+", label: "Revenue Generated",      description: "In tracked client revenue" },
];

const AnimatedCounter = ({ value, suffix, isInView }) => {
  const nodeRef = useRef(null);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(value);
    const duration = 1800;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { start = end; clearInterval(timer); }
      if (nodeRef.current) nodeRef.current.textContent = Math.floor(start) + suffix;
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value, suffix]);
  return <span ref={nodeRef}>0{suffix}</span>;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
};

export default function NumberOfPeopleUse() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => { if (isInView) controls.start("visible"); }, [isInView, controls]);

  return (
    <section className="relative w-full py-28 overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px]"
          style={{ background: "radial-gradient(ellipse, rgba(200,16,46,0.07) 0%, transparent 65%)" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } } }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#c8102e]" />
            <div className="liquid-glass-pill inline-flex items-center px-4 py-1.5 rounded-full">
              <span className="text-[10px] font-semibold tracking-[0.22em] text-white/70 uppercase">Results</span>
            </div>
            <span className="h-px w-8 bg-[#c8102e]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold text-white mb-4 leading-[1.1]">
            Numbers That{" "}
            <span className="italic bg-gradient-to-r from-[#c8102e] to-[#ff2d62] bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Speak for Themselves
            </span>
          </h2>
          <p className="text-white/45 text-base sm:text-lg max-w-xl mx-auto">
            2 years in, 25+ clients scaled, $13M+ in tracked revenue. And we're just getting started.
          </p>
        </motion.div>

        {/* Stats — Double-Bezel grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] } }}
              className="group rounded-[1.75rem] p-[1.5px]"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 60%, rgba(200,16,46,0.06) 100%)"
              }}
            >
              <div
                className="rounded-[calc(1.75rem-1.5px)] p-7 text-center relative overflow-hidden"
                style={{
                  background: "rgba(6,6,6,0.9)",
                  backdropFilter: "blur(20px) saturate(150%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)"
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(200,16,46,0.07) 0%, transparent 55%)" }}
                />
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#c8102e] to-[#ff2d62] bg-clip-text text-transparent mb-2 tabular-nums relative z-10">
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} isInView={isInView} />
                </div>
                <p className="text-white font-semibold text-sm mb-1.5 relative z-10">{stat.label}</p>
                <p className="text-white/35 text-xs leading-relaxed relative z-10">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
}
