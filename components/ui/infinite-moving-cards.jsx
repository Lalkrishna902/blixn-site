"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      Array.from(scrollerRef.current.children).forEach((item) => {
        scrollerRef.current.appendChild(item.cloneNode(true));
      });
      containerRef.current.style.setProperty("--animation-direction", direction === "left" ? "forwards" : "reverse");
      containerRef.current.style.setProperty("--animation-duration", { fast: "20s", normal: "40s", slow: "80s" }[speed] || "40s");
      setStart(true);
    }
  }, []);

  return (
    <section className={`w-full ${className}`}>
      <div ref={containerRef} className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <motion.ul
          ref={scrollerRef}
          className={`flex min-w-full gap-5 py-4 w-max ${start ? "animate-scroll" : ""} ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        >
          {items.map((item, idx) => (
            <motion.li
              key={idx}
              className="group relative w-[320px] md:w-[400px] shrink-0"
              whileHover={{ y: -5, transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] } }}
            >
              {/* Double-bezel card */}
              <div
                className="rounded-[1.75rem] p-[1.5px] h-full"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(200,16,46,0.07) 100%)" }}
              >
                <div
                  className="rounded-[calc(1.75rem-1.5px)] p-7 h-full relative overflow-hidden flex flex-col"
                  style={{
                    background: "rgba(6,6,6,0.9)",
                    backdropFilter: "blur(20px) saturate(150%)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)"
                  }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                    style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(200,16,46,0.07) 0%, transparent 55%)" }} />

                  {/* Stars */}
                  <div className="flex gap-1 mb-5 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[#c8102e] text-xs" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="flex-grow text-white/50 text-sm leading-relaxed mb-5 group-hover:text-white/65 transition-colors duration-500 relative z-10">
                    "{item.quote}"
                  </p>

                  {/* Metric chip */}
                  {item.metric && (
                    <div className="mb-5 relative z-10">
                      <span
                        className="inline-block text-[11px] px-3 py-1.5 rounded-full text-[#c8102e] font-semibold"
                        style={{ background: "rgba(200,16,46,0.08)", boxShadow: "0 0 0 1px rgba(200,16,46,0.2)" }}
                      >
                        {item.metric}
                      </span>
                    </div>
                  )}

                  {/* Author */}
                  <div
                    className="flex items-center gap-3 pt-4 relative z-10"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(200,16,46,0.3), rgba(200,16,46,0.08))",
                        boxShadow: "0 0 0 1px rgba(200,16,46,0.2)"
                      }}
                    >
                      <span className="text-[#c8102e] font-bold text-xs">{item.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{item.name}</p>
                      <p className="text-white/35 text-xs">{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 1.25rem)); }
        }
        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
        }
      `}</style>
    </section>
  );
};
