"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    { name: "Home", href: "home" },
    { name: "Services", href: "services" },
    { name: "Process", href: "process" },
    { name: "About", href: "about" },
    { name: "FAQs", href: "faq" },
  ];

  const scrollToSection = useCallback((id) => {
    if (!id) return;
    const element = document.getElementById(id);
    const navHeight = 80;
    if (element) window.scrollTo({ top: element.offsetTop - navHeight, behavior: "smooth" });
  }, []);

  const handleLinkClick = useCallback((href) => {
    setIsOpen(false);
    setTimeout(() => { scrollToSection(href); setActiveLink(href); }, 300);
  }, [scrollToSection]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sections = document.querySelectorAll("section[id], div[id]");
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.clientHeight;
        if (window.scrollY >= top - 200 && window.scrollY < top + height - 200) {
          setActiveLink(section.id);
        }
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating island nav */}
      <motion.nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
      >
        {/* The glass pill */}
        <motion.div
          className="relative flex items-center gap-1 px-2 py-2 rounded-full"
          animate={{
            backdropFilter: isScrolled ? "blur(24px) saturate(180%)" : "blur(16px) saturate(160%)",
            backgroundColor: isScrolled ? "rgba(0,0,0,0.72)" : "rgba(0,0,0,0.55)",
            boxShadow: isScrolled
              ? "0 0 0 1px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)"
              : "0 0 0 1px rgba(255,255,255,0.07), 0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          style={{ backdropFilter: "blur(16px) saturate(160%)" }}
        >
          {/* Logo */}
          <motion.a
            href="/"
            onClick={(e) => { e.preventDefault(); handleLinkClick("home"); }}
            aria-label="Blixn home"
            className="flex items-center pl-3 pr-4 mr-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
          >
            <Image src="/logo.png" alt="Blixn" width={160} height={55} className="w-auto object-contain" style={{ height: "55px" }} priority />
          </motion.a>

          {/* Divider */}
          <div className="hidden lg:block h-4 w-px bg-white/10 mr-1" />

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {links.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 cursor-pointer"
                style={{ color: activeLink === link.href ? "#fff" : "rgba(255,255,255,0.55)" }}
                whileHover={{ color: "#fff" }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
              >
                {activeLink === link.href && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1px rgba(255,255,255,0.06)"
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden lg:block h-4 w-px bg-white/10 mx-1" />

          {/* CTA — Button-in-Button pattern */}
          <motion.button
            onClick={() => window.open("https://calendly.com/wolfwisemedia/letsmakesomemoney", "_blank")}
            aria-label="Book a strategy call"
            className="hidden lg:flex cursor-pointer items-center gap-2 pl-5 pr-2 py-2 rounded-full font-semibold text-sm text-white mr-1"
            style={{
              background: "linear-gradient(135deg, #c8102e, #e8193a)",
              boxShadow: "0 0 0 1px rgba(200,16,46,0.4), inset 0 1px 0 rgba(255,255,255,0.12)"
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
          >
            Book a Call
            {/* Button-in-Button icon */}
            <motion.span
              className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center"
              whileHover={{ scale: 1.1, x: 1, y: -0.5 }}
              transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            >
              <FaArrowRight size={10} />
            </motion.span>
          </motion.button>

          {/* Mobile hamburger */}
          <motion.button
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full mx-1 cursor-pointer"
            style={{ background: "rgba(255,255,255,0.06)" }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative w-4 h-4">
              <motion.span
                className="absolute left-0 w-full h-0.5 bg-white rounded-full"
                animate={{ top: isOpen ? "50%" : "25%", rotate: isOpen ? 45 : 0, y: isOpen ? "-50%" : 0 }}
                transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              />
              <motion.span
                className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-white rounded-full"
                animate={{ opacity: isOpen ? 0 : 1, scaleX: isOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 w-full h-0.5 bg-white rounded-full"
                animate={{ bottom: isOpen ? "50%" : "25%", rotate: isOpen ? -45 : 0, y: isOpen ? "50%" : 0 }}
                transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              />
            </div>
          </motion.button>
        </motion.div>
      </motion.nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ backdropFilter: "blur(40px) saturate(180%)", backgroundColor: "rgba(0,0,0,0.88)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="flex flex-col items-center gap-3 w-full max-w-xs px-6">
              {links.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="w-full text-center py-4 text-2xl font-semibold rounded-2xl cursor-pointer transition-colors"
                  style={{
                    color: activeLink === link.href ? "#fff" : "rgba(255,255,255,0.5)",
                    background: activeLink === link.href ? "rgba(255,255,255,0.06)" : "transparent",
                    boxShadow: activeLink === link.href ? "inset 0 1px 0 rgba(255,255,255,0.1)" : "none"
                  }}
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ color: "#fff", scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.name}
                </motion.button>
              ))}

              <motion.button
                onClick={() => window.open("https://calendly.com/wolfwisemedia/letsmakesomemoney", "_blank")}
                className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full text-white font-bold text-base cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #c8102e, #e8193a)",
                  boxShadow: "0 0 0 1px rgba(200,16,46,0.4), inset 0 1px 0 rgba(255,255,255,0.12)"
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.05 + links.length * 0.07 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Book a Strategy Call
                <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                  <FaArrowRight size={10} />
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
