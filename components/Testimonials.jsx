"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { motion, useInView } from "framer-motion";

export default function Testimonials() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      id="testimonials"
      ref={ref}
      className="relative overflow-hidden py-24"
      style={{ background: "linear-gradient(to bottom, #050505, #000000)" }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[400px] bg-[#c8102e]/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#c8102e]" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[#c8102e] uppercase">Testimonials</span>
            <span className="h-px w-8 bg-[#c8102e]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Real Businesses,{" "}
            <span
              className="italic bg-gradient-to-r from-[#c8102e] to-[#ff2d62] bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Real Results.
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            From 3 leads a week to 30. From revenue plateaus to first six-figure months. Here's what our clients say.
          </p>
        </motion.div>

        {/* Testimonials slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I was skeptical. We've tried agencies before, and they just threw Facebook ads at us. Sanskar and his co-founder actually built a full system: lead capture, follow-up, automations. We've been booking more trial sessions in the last month than we did all of last quarter.",
    name: "Mike R.",
    title: "Owner, IronCore Fitness",
    metric: "3× more bookings in 30 days",
  },
  {
    quote: "Their email and ad strategies doubled our ROAS in under 30 days. But more than that: they communicated everything, kept us in the loop, and gave us clarity like we'd never had before with any agency.",
    name: "Jessica L.",
    title: "Founder, WildAura Skincare",
    metric: "2× ROAS in under 30 days",
  },
  {
    quote: "We were getting maybe 3 to 4 leads a week, mostly referrals. Blix Media came in, set up our outbound and paid campaigns, and now we're averaging 25 to 30 qualified leads a week. No fluff. Just results.",
    name: "Chris D.",
    title: "Co-Owner, ArcticAir Pros (HVAC)",
    metric: "3 leads/wk to 25+ leads/wk",
  },
  {
    quote:
      "It wasn't just ads. It was positioning, copy, funnel, follow-up... everything. It felt like they were part of my team. My calendar has been full, and I'm scaling my offer now. Wouldn't have been possible without them.",
    name: "Natasha P.",
    title: "Online Coach, LevelUp Performance",
    metric: "Fully booked calendar",
  },
  {
    quote:
      "They came in, cleaned up our CRM, built a new funnel, and plugged in AI follow-ups. Everything just clicked. We hit our first six-figure month within 8 weeks of working together. Absolute pros.",
    name: "Ankit S.",
    title: "Co-founder, Aura Interiors",
    metric: "First six-figure month in 8 weeks",
  },
];
