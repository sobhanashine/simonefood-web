"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Flame, Weight, Check, RefreshCw } from "lucide-react";

interface Base {
  id: string;
  name: string;
  weight: number;
  gooey: number;
  price: number;
  image: string;
  color: string; // fallback color
}

interface Filling {
  id: string;
  name: string;
  weight: number;
  gooey: number;
  price: number;
  image: string;
  color: string; // fallback color
}

interface Topping {
  id: string;
  name: string;
  weight: number;
  price: number;
  color: string;
}

export default function InteractiveCookieBuilder() {
  const bases: Base[] = [
    { 
      id: "brown_butter", 
      name: "خمیر کره فندقی کلاسیک", 
      weight: 120, 
      gooey: 3, 
      price: 95000, 
      image: "/images/cookie_base_classic.jpg",
      color: "#8d6e63" 
    },
    { 
      id: "red_velvet", 
      name: "خمیر کاکائویی ردولوت مخملی", 
      weight: 120, 
      gooey: 3.5, 
      price: 105000, 
      image: "/images/cookie_base_redvelvet.jpg",
      color: "#b71c1c" 
    },
    { 
      id: "chocolate_cocoa", 
      name: "خمیر دبل چاکلت فوق تیره", 
      weight: 120, 
      gooey: 3, 
      price: 105000, 
      image: "/images/cookie_base_doublechoco.jpg",
      color: "#3e2723" 
    },
  ];

  const fillings: Filling[] = [
    { 
      id: "nutella", 
      name: "هسته روان نوتلا اصلی", 
      weight: 30, 
      gooey: 5, 
      price: 35000, 
      image: "/images/cookie_filling_nutella.jpg",
      color: "#4e342e" 
    },
    { 
      id: "pistachio", 
      name: "هسته کرم پسته خالص ایرانی", 
      weight: 35, 
      gooey: 4.8, 
      price: 55000, 
      image: "/images/cookie_filling_pistachio.jpg",
      color: "#7cb342" 
    },
    { 
      id: "biscoff", 
      name: "هسته کرم بیسکویت لوتوس", 
      weight: 30, 
      gooey: 4.5, 
      price: 40000, 
      image: "/images/cookie_filling_biscoff.jpg",
      color: "#e5a93b" 
    },
    { 
      id: "caramel", 
      name: "هسته تافی کارامل نمکی", 
      weight: 25, 
      gooey: 4.7, 
      price: 30000, 
      image: "/images/cookie_filling_caramel.jpg",
      color: "#f57c00" 
    },
  ];

  const toppings: Topping[] = [
    { id: "dark_chips", name: "شکلات تلخ بلژیکی", weight: 15, price: 15000, color: "#212121" },
    { id: "walnuts", name: "گردوی برشته شده ایرانی", weight: 15, price: 20000, color: "#c7a75c" },
    { id: "biscoff_crumbs", name: "خرده‌های بیسکویت لوتوس", weight: 10, price: 10000, color: "#d7ccc8" },
    { id: "white_drizzle", name: "سوس شکلات سفید غلیظ", weight: 8, price: 12000, color: "#f5f5f5" },
  ];

  const [selectedBase, setSelectedBase] = useState<Base>(bases[0]);
  const [selectedFilling, setSelectedFilling] = useState<Filling | null>(null);
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  const [customCookieName, setCustomCookieName] = useState("کوکی سفارشی سیمون");
  const [isBaked, setIsBaked] = useState(false);

  const addTopping = (topping: Topping) => {
    if (selectedToppings.length >= 3) return; 
    if (selectedToppings.some((t) => t.id === topping.id)) return;
    setSelectedToppings([...selectedToppings, topping]);
  };

  const removeTopping = (toppingId: string) => {
    setSelectedToppings(selectedToppings.filter((t) => t.id !== toppingId));
  };

  // Calculate totals
  const totalWeight = selectedBase.weight + (selectedFilling?.weight || 0) + selectedToppings.reduce((sum, t) => sum + t.weight, 0);
  const totalPrice = selectedBase.price + (selectedFilling?.price || 0) + selectedToppings.reduce((sum, t) => sum + t.price, 0);
  
  // Calculate average gooeyness
  const totalItemsCount = 1 + (selectedFilling ? 1 : 0);
  const rawGooeySum = selectedBase.gooey + (selectedFilling?.gooey || 0);
  const averageGooeyness = Math.min(5, Number((rawGooeySum / totalItemsCount).toFixed(1)));

  // Format currency in Tomans
  const formatTomans = (num: number) => {
    return num.toLocaleString("fa-IR") + " تومان";
  };

  const handleBake = () => {
    setIsBaked(true);
    setTimeout(() => {
      setIsBaked(false);
    }, 3000);
  };

  // Determine current active preview image
  const currentPreviewImage = selectedFilling ? selectedFilling.image : selectedBase.image;

  return (
    <section id="bakelab" className="py-24 bg-[#1a110e] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#d4af37]/2 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 text-cookie-gold text-xs font-sans font-bold uppercase tracking-widest mb-3">
            <Cookie className="w-4 h-4" />
            <span>آزمایشگاه پخت آنلاین سیمون</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-cookie-cream">
            کوکی شخصی‌سازی شده واقعی
          </h2>
          <p className="font-sans text-cookie-cream-dark/70 mt-4 leading-relaxed">
            ترکیبات محبوب خود را انتخاب کنید و تصویر نهایی کوکی دست‌ساز خود را بلافاصله با کیفیت بالا مشاهده کنید.
          </p>
        </div>

        {/* Builder Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Right panel: Customizer Options (RTL Layout) */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-right bg-[#120c0a]/60 border border-cookie-cream/5 p-6 md:p-8 rounded-3xl backdrop-blur-md order-2 lg:order-1">
            
            {/* Step 1: Base Dough */}
            <div>
              <span className="font-sans text-xs font-bold text-cookie-gold uppercase tracking-widest block mb-4">
                ۱. طعم خمیر پایه کوکی (۱۲۰ گرم)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {bases.map((base) => (
                  <button
                    key={base.id}
                    onClick={() => setSelectedBase(base)}
                    className={`p-4 rounded-xl border text-right flex flex-col justify-between transition-all duration-300 ${
                      selectedBase.id === base.id
                        ? "border-cookie-gold bg-cookie-gold/5 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                        : "border-cookie-cream/10 bg-transparent hover:border-cookie-cream/30"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: base.color }} />
                      <span className="font-serif text-sm font-bold text-cookie-cream">{base.name.split(" ")[1]}</span>
                    </div>
                    <span className="font-sans text-xs text-cookie-cream-dark/70 mt-2 block">{base.name}</span>
                    <span className="font-sans text-xs font-bold text-cookie-gold mt-4">{formatTomans(base.price)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Molten Core Filling */}
            <div>
              <span className="font-sans text-xs font-bold text-cookie-gold uppercase tracking-widest block mb-4 flex justify-between items-center">
                <span>۲. افزودن مغز روان و ذوب‌شونده (اختیاری)</span>
                {selectedFilling && (
                  <button
                    onClick={() => setSelectedFilling(null)}
                    className="text-[10px] text-red-400 hover:text-red-300 font-bold uppercase tracking-wider transition-colors flex items-center gap-1"
                  >
                    <RefreshCw className="w-2.5 h-2.5" />
                    حذف مغز
                  </button>
                )}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fillings.map((filling) => (
                  <button
                    key={filling.id}
                    onClick={() => setSelectedFilling(filling)}
                    className={`p-4 rounded-xl border text-right flex items-start gap-4 transition-all duration-300 ${
                      selectedFilling?.id === filling.id
                        ? "border-cookie-gold bg-cookie-gold/5 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                        : "border-cookie-cream/10 bg-transparent hover:border-cookie-cream/30"
                    }`}
                  >
                    <div className="w-4 h-4 rounded-full mt-1 shrink-0" style={{ backgroundColor: filling.color }} />
                    <div className="flex-1">
                      <h4 className="font-serif text-sm font-bold text-cookie-cream">{filling.name}</h4>
                      <p className="font-sans text-[11px] text-cookie-cream-dark/60 mt-1">وزن: +{filling.weight} گرم | شاخص روان بودن: {filling.gooey}/۵</p>
                      <span className="font-sans text-xs font-bold text-cookie-gold mt-2 block">+{formatTomans(filling.price)}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Gourmet Toppings */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-sans text-xs font-bold text-cookie-gold uppercase tracking-widest">
                  ۳. انتخاب تاپینگ‌های روی کوکی (حداکثر ۳ مورد)
                </span>
                <span className="font-sans text-[10px] text-cookie-cream-dark/60">
                  {selectedToppings.length} از ۳ انتخاب شده
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {toppings.map((topping) => {
                  const isSelected = selectedToppings.some((t) => t.id === topping.id);
                  return (
                    <button
                      key={topping.id}
                      onClick={() => (isSelected ? removeTopping(topping.id) : addTopping(topping))}
                      disabled={!isSelected && selectedToppings.length >= 3}
                      className={`p-4 rounded-xl border text-right flex items-center justify-between transition-all duration-300 ${
                        isSelected
                          ? "border-cookie-gold bg-cookie-gold/5"
                          : selectedToppings.length >= 3
                          ? "opacity-40 border-cookie-cream/5 cursor-not-allowed"
                          : "border-cookie-cream/10 bg-transparent hover:border-cookie-cream/30"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: topping.color }} />
                        <div>
                          <h4 className="font-serif text-sm font-bold text-cookie-cream">{topping.name}</h4>
                          <p className="font-sans text-[11px] text-cookie-cream-dark/60">+{topping.weight} گرم</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {isSelected && <Check className="w-3 h-3 text-cookie-gold" />}
                        <span className="font-sans text-xs font-bold text-cookie-gold">
                          {isSelected ? "انتخاب شده" : `+${formatTomans(topping.price)}`}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Left panel: Visual Preview & Live Calculations (RTL Layout) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-b from-[#1c120f] to-[#120c0a] border border-cookie-cream/10 p-6 md:p-8 rounded-3xl relative overflow-hidden order-1 lg:order-2 min-h-[500px]">
            
            {/* Visualizer Header */}
            <div className="text-right z-10">
              <input
                type="text"
                value={customCookieName}
                onChange={(e) => setCustomCookieName(e.target.value)}
                className="bg-transparent border-b border-cookie-cream/10 focus:border-cookie-gold text-2xl font-serif font-bold text-cookie-cream outline-none pb-1 w-full text-right"
                placeholder="نام کوکی شما"
                maxLength={25}
              />
              <span className="font-sans text-[10px] text-cookie-gold uppercase font-bold tracking-widest block mt-1">
                پیش‌نمایش زنده در کارگاه کوکی
              </span>
            </div>

            {/* Interactive Realistic Visual View */}
            <div className="relative w-full aspect-square my-6 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isBaked && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#120c0a]/90 z-20 flex flex-col items-center justify-center rounded-2xl"
                  >
                    <Flame className="w-12 h-12 text-cookie-gold animate-bounce" />
                    <span className="font-serif text-lg font-bold text-cookie-cream mt-3">در حال پخت در فر سیمون...</span>
                    <span className="font-sans text-xs text-cookie-cream-dark/50 mt-1">کوکی در دمای ۱۸۰ درجه پخته می‌شود</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Realistic Cookie Display Plate */}
              <div className="relative w-[85%] h-[85%] rounded-full bg-black/40 border border-cookie-cream/5 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPreviewImage}
                    initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.9, opacity: 0, rotate: 5 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-[92%] h-[92%] rounded-full overflow-hidden"
                  >
                    <Image
                      src={currentPreviewImage}
                      alt={customCookieName}
                      fill
                      sizes="(max-w-768px) 100vw, 500px"
                      className="object-cover rounded-full select-none"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Toppings visual badge indicators floating over the image */}
                <div className="absolute inset-0 pointer-events-none z-10">
                  <AnimatePresence>
                    {selectedToppings.map((top, idx) => {
                      // Position badges elegantly around the perimeter of the circular cookie
                      const positions = [
                        { top: "15%", right: "15%" },
                        { bottom: "20%", left: "12%" },
                        { top: "60%", right: "8%" },
                      ];
                      const pos = positions[idx] || { top: "50%", left: "50%" };
                      
                      return (
                        <motion.div
                          key={top.id}
                          initial={{ scale: 0, opacity: 0, y: 10 }}
                          animate={{ scale: 1, opacity: 1, y: 0 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 200, delay: idx * 0.05 }}
                          className="absolute glass border border-cookie-cream/10 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg backdrop-blur-md"
                          style={pos}
                        >
                          <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: top.color }} />
                          <span className="font-sans text-[10px] text-cookie-cream-dark font-medium">{top.name}</span>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>

              {/* Decorative glows */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cookie-gold/5 blur-2xl rounded-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cookie-gold/5 blur-2xl rounded-full" />
            </div>

            {/* Calculations & Metrics Panel */}
            <div className="z-10 bg-[#120c0a]/80 border border-cookie-cream/5 rounded-2xl p-4 flex flex-col gap-4 text-right">
              
              {/* Stat metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cookie-gold/10 text-cookie-gold rounded-lg">
                    <Weight className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] uppercase font-bold text-cookie-cream-dark/60 block">وزن کل کوکی</span>
                    <span className="font-serif text-lg font-bold text-cookie-cream">{totalWeight} گرم</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cookie-gold/10 text-cookie-gold rounded-lg">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] uppercase font-bold text-cookie-cream-dark/60 block">روان بودن مرکز</span>
                    <span className="font-serif text-lg font-bold text-cookie-cream">{averageGooeyness} از ۵</span>
                  </div>
                </div>
              </div>

              {/* Price Calculation */}
              <div className="pt-3 border-t border-cookie-cream/10 flex items-center justify-between">
                <div>
                  <span className="font-sans text-[10px] uppercase font-bold text-cookie-cream-dark/60 block">قیمت تخمینی کل</span>
                  <span className="font-sans text-[10px] text-cookie-cream-dark/40">(خمیر پایه + کرم مرکز + تاپینگ‌ها)</span>
                </div>
                <span className="font-serif text-xl font-bold text-cookie-gold">
                  {formatTomans(totalPrice)}
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 mt-6 z-10">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBake}
                className="flex-1 py-4 bg-cookie-gold text-cookie-dark font-sans font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4" />
                <span>شبیه‌سازی پخت کوکی</span>
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/989110000000?text=سلام%20سیمون!%20من%20یک%20کوکی%20اختصاصی%20در%20سایت%20طراحی%20کردم%3A%20خمیر%20پایه%3A%20${selectedBase.name}%2C%20مغز%20مذاب%3A%20${selectedFilling?.name || "بدون مغز"}%2C%20تاپینگ‌ها%3A%20${selectedToppings.map(t => t.name).join("%2C%20")}.%20لطفا%20این%20را%20برایم%20بپزید!`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 glass hover:bg-cookie-cream hover:text-cookie-dark rounded-xl font-sans font-bold text-xs uppercase tracking-widest text-cookie-cream transition-all duration-300 flex items-center justify-center"
              >
                ثبت سفارش در واتس‌اپ
              </motion.a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
