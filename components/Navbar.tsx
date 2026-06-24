"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "طعم‌ها", href: "#flavors" },
    { name: "داستان ما", href: "#story" },
    { name: "آزمایشگاه کوکی", href: "#bakelab" },
    { name: "راهنمای سفارش", href: "#order" },
    { name: "سوالات متداول", href: "#faq" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass py-4 shadow-xl" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="font-serif text-2xl md:text-3xl font-extrabold tracking-wider text-cookie-cream group-hover:text-cookie-gold transition-colors duration-300"
            >
              SIMONE
            </motion.span>
            <div className="w-1.5 h-1.5 rounded-full bg-cookie-gold animate-pulse-slow" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium tracking-wide text-cookie-cream-dark hover:text-cookie-gold transition-colors duration-300 relative py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-cookie-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/simonefood/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass-light hover:bg-cookie-gold hover:text-cookie-dark transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#order"
              className="px-6 py-2.5 rounded-full bg-cookie-gold text-cookie-dark font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300"
            >
              سفارش آنلاین
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <a
              href="https://www.instagram.com/simonefood/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-light"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full glass text-cookie-cream hover:text-cookie-gold transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] z-40 bg-[#120c0a]/95 backdrop-blur-lg md:hidden flex flex-col justify-between py-12 px-8 border-t border-cookie-cream/5"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-3xl font-bold tracking-wide text-cookie-cream hover:text-cookie-gold transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4 items-center">
              <div className="w-12 h-px bg-cookie-gold/30" />
              <motion.a
                whileTap={{ scale: 0.95 }}
                href="#order"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 rounded-full bg-cookie-gold text-cookie-dark font-sans font-bold text-center uppercase tracking-widest text-sm shadow-lg"
              >
                سفارش از طریق واتس‌اپ / اینستاگرام
              </motion.a>
              <span className="text-xs text-cookie-cream-dark/50">کارگاه پخت رشت</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
