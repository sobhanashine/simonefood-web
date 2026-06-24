"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, Info, X } from "lucide-react";

interface Flavor {
  id: string;
  name: string;
  persianName: string;
  description: string;
  longDescription: string;
  image: string;
  colorClass: string;
  tag: string;
  ingredients: string[];
  stats: {
    sweetness: number; // out of 5
    gooeyness: number; // out of 5
    chocolate: number; // out of 5
    crunch: number; // out of 5
  };
}

export default function Flavors() {
  const [selectedFlavor, setSelectedFlavor] = useState<Flavor | null>(null);

  const flavors: Flavor[] = [
    {
      id: "classic",
      name: "Classic NY Chocolate Chip",
      persianName: "کلاسیک چاکلت چیپس نیویورکی",
      description: "تکه‌های شکلات بلژیکی تاریک و شیری، گردوی توست شده و پرک نمک دریایی مالدون.",
      longDescription: "کوکی امضای ما که آغازگر همه‌چیز بود. بر اساس دستورالعمل افسانه‌ای نیویورک، خمیر ۱۵۰ گرمی را با حرارت بالا می‌پزیم تا پوسته طلایی بسیار ترد و مغزی داغ، نرم و پر از شکلات ذوب‌شده به دست آورید. طعم کره فندقی با گردوی ترد و نمک دریایی پرک، ترکیبی بی‌نظیر می‌سازد.",
      image: "/images/hero.jpg",
      colorClass: "from-[#c5a880]/20 to-[#4b3621]/40 border-cookie-gold/30",
      tag: "پرفروش‌ترین",
      ingredients: ["شکلات تلخ ۵۴٪ بلژیکی", "شکلات شیری ۳۳٪ بلژیکی", "گردوی توست‌شده ایرانی", "کره فندقی دست‌ساز", "نمک پرک مالدون"],
      stats: { sweetness: 3.5, gooeyness: 4, chocolate: 5, crunch: 3 }
    },
    {
      id: "pistachio",
      name: "Pistachio Dream",
      persianName: "رویای پسته و شکلات سفید",
      description: "کرم پسته ۱۰۰٪ خالص ایرانی، شکلات سفید بلژیکی و خرده‌های پسته تازه جنگلی.",
      longDescription: "یک تلفیق شرقی لوکس روی ساختار اصیل کوکی‌های نیویورک. خمیر این کوکی با پسته تازه برشته‌شده ترکیب شده و با شکلات سفید پر می‌شود. در میان آن، مغز مذاب و روان کرم پسته خالص قرار دارد که با اولین برش جاری می‌شود. ساخته‌شده برای عاشقان واقعی پسته.",
      image: "/images/pistachio.jpg",
      colorClass: "from-[#769f52]/20 to-[#2c3d1e]/40 border-cookie-pistachio/30",
      tag: "پیشنهاد سرآشپز",
      ingredients: ["کرم پسته ۱۰۰٪ خالص ایرانی", "شکلات سفید بلژیکی اعلا", "مغز پسته کوهی برشته‌شده", "آرد ارگانیک فرانسوی", "عصاره وانیل ماداگاسکار"],
      stats: { sweetness: 3, gooeyness: 4.8, chocolate: 2, crunch: 4 }
    },
    {
      id: "redvelvet",
      name: "Red Velvet Nutella",
      persianName: "ردولوت با مغز نوتلای داغ",
      description: "خمیر کاکائویی قرمز مخملی، شکلات سفید و مغز فوق‌العاده روان نوتلای اصلی.",
      longDescription: "جذاب، چشم‌نواز و عمیقاً لذت‌بخش. خمیر قرمز مخملی با عطر کاکائو و تکه‌های شکلات سفید ترکیب شده و درون آن را با نوتلای روان پر می‌کنیم. تضاد بین پوسته نرم ردولوت و نوتلای داغ جاری در مغز آن، طعمی بهشتی می‌سازد.",
      image: "/images/red_velvet.jpg",
      colorClass: "from-[#9e2a2b]/20 to-[#4a1213]/40 border-cookie-redvelvet/30",
      tag: "شیرین و غنی",
      ingredients: ["شکلات فندقی نوتلا اصلی", "پودر کاکائوی داچ‌پروسس", "تکه‌های شکلات سفید مرغوب", "پودر پنیر خامه‌ای لوکس", "عصاره باترمیلک طبیعی"],
      stats: { sweetness: 4.5, gooeyness: 5, chocolate: 4.5, crunch: 2 }
    },
    {
      id: "lotus",
      name: "Lotus Biscoff Lava",
      persianName: "کرم بیسکویت لوتوس کارامل",
      description: "مغز روان کرم لوتوس بیسکوف، خرده‌های بیسکویت اسپکولوس و سس کارامل دست‌ساز.",
      longDescription: "تداعی‌گر کارامل کاراملیزه در قالب کوکی. خمیر طلایی ما با ادویه دارچین سیلان و پودر بیسکویت لوتوس ورز داده می‌شود. در مرکز آن کرم لوتوس روان داغ جریان دارد که روی آن یک بیسکویت لوتوس کامل و خطوطی از سس تافی کارامل دست‌ساز ریخته می‌شود.",
      image: "/images/lotus.jpg",
      colorClass: "from-[#c08244]/20 to-[#5c3c1e]/40 border-cookie-biscoff/30",
      tag: "محبوب دل‌ها",
      ingredients: ["کرم بیسکویت لوتوس اصلی", "بیسکویت لوتوس اسپکولوس", "سس کارامل نمکی دست‌ساز سیمون", "شکر قهوه‌ای کاراملی", "دارچین سیلان درجه یک"],
      stats: { sweetness: 4, gooeyness: 4.5, chocolate: 1, crunch: 4 }
    }
  ];

  const statLabels: Record<string, string> = {
    sweetness: "میزان شیرینی",
    gooeyness: "غلظت مغز مذاب",
    chocolate: "تراکم شکلات",
    crunch: "میزان تردی لایه بیرونی"
  };

  return (
    <section id="flavors" className="py-24 bg-[#1a110e] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-[#d4af37]/2.5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#4b3621]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-right">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-cookie-gold text-xs font-sans font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>پخت تازه و داغ روزانه در رشت</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-cookie-cream">
              طعم‌های منحصربه‌فرد ما
            </h2>
            <p className="font-sans text-cookie-cream-dark/70 mt-4 leading-relaxed">
              هر یک از کوکی‌های ما بیش از ۱۵۰ گرم وزن دارد و به صورت دستی با استفاده از مرغوب‌ترین شکلات‌های بلژیکی، کره فندقی دست‌ساز و پسته‌های اعلای ایرانی پخته می‌شود.
            </p>
          </div>
          <span className="font-serif text-lg italic text-cookie-gold self-start md:self-end">
            * هشدار: خطر اعتیاد شدید به کوکی‌ها!
          </span>
        </div>

        {/* Flavors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`rounded-3xl border p-6 flex flex-col justify-between bg-gradient-to-b ${flavor.colorClass} transition-all duration-300 relative group overflow-hidden`}
            >
              <div>
                {/* Image Showcase */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 shadow-inner border border-cookie-cream/5">
                  <Image
                    src={flavor.image}
                    alt={flavor.persianName}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                  
                  {/* Hover Quick view icon */}
                  <button 
                    onClick={() => setSelectedFlavor(flavor)}
                    className="absolute bottom-4 left-4 p-3 rounded-full glass hover:bg-cookie-gold hover:text-cookie-dark transition-all duration-300 shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  
                  {/* Tag */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full glass border border-cookie-cream/10 font-sans text-[10px] font-bold uppercase tracking-widest text-cookie-cream">
                    {flavor.tag}
                  </span>
                </div>

                {/* Info */}
                <div className="text-right">
                  <h3 className="font-serif text-xl font-bold text-cookie-cream mt-1 mb-2 group-hover:text-cookie-gold transition-colors duration-300">
                    {flavor.persianName}
                  </h3>
                  <p className="font-sans text-sm text-cookie-cream-dark/70 leading-relaxed">
                    {flavor.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => setSelectedFlavor(flavor)}
                className="mt-6 w-full py-3 rounded-xl glass hover:bg-cookie-cream hover:text-cookie-dark font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Info className="w-3.5 h-3.5" />
                <span>مشاهده ترکیبات و جزئیات</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Overlay Modal */}
      <AnimatePresence>
        {selectedFlavor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#120c0a]/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-[#1a110e] border border-cookie-cream/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-12 relative flex flex-col md:flex-row gap-8 md:gap-12 text-right"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedFlavor(null)}
                className="absolute top-6 left-6 p-2 rounded-full glass hover:bg-cookie-gold hover:text-cookie-dark transition-colors duration-300 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left side: Large Image */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border border-cookie-cream/10">
                  <Image
                    src={selectedFlavor.image}
                    alt={selectedFlavor.persianName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-between items-center px-2">
                  <span className="font-serif italic text-sm text-cookie-gold">{selectedFlavor.tag}</span>
                  <span className="font-sans text-xs uppercase tracking-wider text-cookie-cream-dark/50">وزن کوکی: ۱۵۰ تا ۱۶۵ گرم</span>
                </div>
              </div>

              {/* Right side: Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-between gap-6">
                <div>
                  <span className="font-serif text-xs text-cookie-gold font-bold">{selectedFlavor.name}</span>
                  <h3 className="font-serif text-3xl font-extrabold text-cookie-cream mt-1.5 mb-4">
                    {selectedFlavor.persianName}
                  </h3>
                  <p className="font-sans text-sm text-cookie-cream-dark/80 leading-relaxed mb-6">
                    {selectedFlavor.longDescription}
                  </p>

                  {/* Ingredients Tags */}
                  <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-cookie-cream mb-3">
                    مواد اولیه لوکس و اعلا
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedFlavor.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="px-3 py-1.5 rounded-lg bg-cookie-cream/5 border border-cookie-cream/5 font-sans text-xs text-cookie-cream-dark"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>

                  {/* Flavor Metrics */}
                  <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-cookie-cream mb-4">
                    پروفایل طعم کوکی
                  </h4>
                  <div className="flex flex-col gap-3">
                    {Object.entries(selectedFlavor.stats).map(([statName, val]) => (
                      <div key={statName} className="flex items-center justify-between text-xs font-sans">
                        <span className="text-cookie-cream-dark/70 tracking-wide w-28">
                          {statLabels[statName] || statName}
                        </span>
                        <div className="flex-1 max-w-xs h-1.5 bg-cookie-cream/10 rounded-full overflow-hidden mr-4">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(val / 5) * 100}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-cookie-gold to-[#b8901c] rounded-full"
                          />
                        </div>
                        <span className="w-8 text-left font-bold text-cookie-gold ml-2">{val} از ۵</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-cookie-cream/10 flex gap-4">
                  <a
                    href="#order"
                    onClick={() => setSelectedFlavor(null)}
                    className="flex-1 py-3.5 text-center rounded-xl bg-cookie-gold hover:bg-[#b8901c] text-cookie-dark font-sans font-bold text-xs uppercase tracking-widest transition-colors duration-300"
                  >
                    سفارش آنلاین کوکی
                  </a>
                  <button
                    onClick={() => setSelectedFlavor(null)}
                    className="flex-1 py-3.5 text-center rounded-xl glass hover:bg-cookie-cream/5 font-sans font-bold text-xs uppercase tracking-widest text-cookie-cream transition-colors duration-300"
                  >
                    بستن جزئیات
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
