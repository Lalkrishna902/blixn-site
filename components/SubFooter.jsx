"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

const bullets = [
  "Free 30-min strategy call",
  "No agency fluff or account managers",
  "First results in 7 to 14 days",
];

export const SubFooter = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #050505, #000)" }}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(200,16,46,0.15) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.04, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#c8102e]" />
            <div className="liquid-glass-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] animate-pulse" />
              <span className="text-[10px] font-semibold tracking-[0.22em] text-white/70 uppercase">Ready to scale?</span>
            </div>
            <span className="h-px w-8 bg-[#c8102e]" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[3.4rem] font-bold text-white leading-[1.08] mb-6">
            Stop Leaving Revenue on the Table.
            <br />
            <span className="italic bg-gradient-to-r from-[#c8102e] via-[#e8193a] to-[#ff2d62] bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Let's Build Your Growth Machine.
            </span>
          </h2>

          {/* Sub-copy */}
          <p className="text-white/45 text-base sm:text-lg max-w-xl mx-auto mb-10">
            Book a free strategy call and walk away with a custom roadmap, whether you work with us or not.
          </p>

          {/* Glass trust pills */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 flex-wrap"
          >
            {bullets.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: "rgba(255,255,255,0.04)", boxShadow: "0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.07)" }}
              >
                <BsCheckCircleFill className="text-[#c8102e] text-xs shrink-0" />
                <span className="text-white/65 text-sm">{b}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(200,16,46,0.5)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open("https://calendly.com/wolfwisemedia/letsmakesomemoney", "_blank")}
              className="cursor-pointer group inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-[0.95rem]"
              style={{
                background: "linear-gradient(135deg, #c8102e, #e8193a)",
                boxShadow: "0 0 0 1px rgba(200,16,46,0.5), 0 8px 32px rgba(200,16,46,0.25), inset 0 1px 0 rgba(255,255,255,0.15)"
              }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            >
              Book Your Free Strategy Call
              <motion.span
                className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center"
                whileHover={{ scale: 1.15, x: 1, y: -0.5 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              >
                <FaArrowRight size={12} />
              </motion.span>
            </motion.button>

            <motion.a
              href="mailto:hello@blixn.io"
              whileHover={{ scale: 1.03, color: "#fff" }}
              className="text-white/40 text-sm hover:text-white/70 transition-colors duration-300 underline underline-offset-4"
              transition={{ duration: 0.25 }}
            >
              Or email hello@blixn.io
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
