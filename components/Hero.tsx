"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Sparkles, ChefHat } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#120c0a] pt-24"
    >
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#4b3621]/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#d4af37]/5 blur-[150px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full text-right">
        
        {/* Left column: Text (Persian) */}
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="lg:col-span-7 flex flex-col gap-8 text-right order-2 lg:order-1"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="self-start flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-cookie-gold/20 text-cookie-gold text-xs font-sans font-semibold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>اولین و اصیل‌ترین کوکی نیویورکی در ایران </span>
          </motion.div>

          {/* Main Titles */}
          <div className="flex flex-col gap-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl sm:text-7xl font-black leading-[1.2] tracking-tight text-cookie-cream"
            >
              غول‌پیکر. مغزدار.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cookie-gold via-cookie-cream-dark to-cookie-gold animate-pulse-slow">
                ذوب در دهان!
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-base md:text-lg text-cookie-cream-dark/80 max-w-xl leading-relaxed"
            >
              سیمون طعم واقعی و جادویی کوکی‌های غول‌پیکر ۱۵۰ گرمی نیویورک را به رشت آورده است. لایه بیرونی کرپ و برشته، لایه میانی نرم و شکلاتی مذاب که با هر گاز روان می‌شود.
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.25)" }}
              whileTap={{ scale: 0.98 }}
              href="#flavors"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cookie-gold to-[#b8901c] text-cookie-dark font-sans font-bold text-sm uppercase tracking-widest shadow-xl transition-all duration-300"
            >
              <span>مشاهده طعم‌ها</span>
              <ArrowLeft className="w-4 h-4" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.03, background: "rgba(252, 249, 242, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              href="#story"
              className="flex items-center gap-2 px-8 py-4 rounded-full glass border border-cookie-cream/10 text-cookie-cream font-sans font-bold text-sm uppercase tracking-widest transition-all duration-300"
            >
              <span>داستان ما</span>
            </motion.a>
          </motion.div>

          {/* Features / Specs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="grid grid-cols-3 gap-6 pt-6 border-t border-cookie-cream/10 max-w-lg"
          >
            <div className="flex flex-col gap-1">
              <span className="font-serif text-2xl md:text-3xl font-bold text-cookie-gold">۱۵۰ گرم+</span>
              <span className="font-sans text-xs uppercase tracking-wider text-cookie-cream-dark/60">وزن هر کوکی</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-serif text-2xl md:text-3xl font-bold text-cookie-gold">۱۰۰٪</span>
              <span className="font-sans text-xs uppercase tracking-wider text-cookie-cream-dark/60">دست‌ساز و طبیعی</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-serif text-2xl md:text-3xl font-bold text-cookie-gold">رشت</span>
              <span className="font-sans text-xs uppercase tracking-wider text-cookie-cream-dark/60">پخت تازه روزانه</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right column: Image (Cookie) */}
        <motion.div
          style={{ y: yBg, scale: scaleImage }}
          className="lg:col-span-5 relative flex items-center justify-center order-1 lg:order-2"
        >
          {/* Main floating wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[450px] aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-cookie-cream/10 group cursor-pointer"
          >
            <Image
              src="/images/hero.jpg"
              alt="کوکی نیویورکی داغ و شکلات مذاب سیمون"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#120c0a] via-transparent to-transparent opacity-80 pointer-events-none" />
            
            {/* Visual overlay tag */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass border border-cookie-cream/10 flex items-center justify-between pointer-events-none translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="text-right">
                <p className="font-sans text-xs text-cookie-gold uppercase font-bold tracking-widest">کوکی برگزیده</p>
                <h3 className="font-serif text-lg md:text-xl font-bold text-cookie-cream mt-0.5">چاکلت چیپس کلاسیک نیویورکی</h3>
              </div>
              <div className="p-3 bg-cookie-gold text-cookie-dark rounded-full shrink-0">
                <ChefHat className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

          {/* Decorative floating elements */}
          <motion.div
            animate={{ 
              y: [0, -12, 0],
              rotate: [0, 8, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-6 -right-6 w-20 h-20 pointer-events-none rounded-full glass border border-cookie-gold/30 flex items-center justify-center p-2 hidden sm:flex"
          >
            <div className="text-center">
              <span className="block font-serif text-xs font-bold text-cookie-gold">داغ و مذاب</span>
              <span className="block font-sans text-[8px] uppercase font-bold text-cookie-cream-dark">HOT LAVA</span>
            </div>
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-8 -left-8 w-24 h-24 pointer-events-none rounded-full glass border border-cookie-cream/10 flex items-center justify-center p-3 hidden sm:flex"
          >
            <div className="text-center">
              <span className="block font-serif text-xs font-bold text-cookie-cream">طعم اصیل</span>
              <span className="block font-sans text-[8px] uppercase text-cookie-cream-dark/60">NY RECIPE</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
