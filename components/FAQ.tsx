"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "چه چیزی کوکی‌های سبک نیویورک را متمایز می‌کند؟",
      answer: "کوکی‌های سبک نیویورک به خاطر اندازه غول‌پیکر (۱۵۰ گرم+) و بافت دوگانه جادویی‌شان معروف هستند. به جای نازک و تخت شدن، این کوکی‌ها به صورت چانه‌های کروی مرتفع فرم داده شده و در دمای بالا پخته می‌شوند. این کار باعث می‌شود لایه بیرونی کرپ و برشته، و لایه داخلی نرم، داغ و غنی از شکلات مذاب باقی بماند."
    },
    {
      question: "وزن هر کوکی سیمون چقدر است؟",
      answer: "هر کوکی سیمون قبل از قرار گرفتن در فر بین ۱۵۰ تا ۱۶۵ گرم وزن دارد. این مقدار تقریباً ۳ تا ۴ برابر سنگین‌تر و بزرگ‌تر از کوکی‌های معمولی قنادی است! کوکی‌های سیمون فوق‌العاده سیرکننده بوده و برای هدیه دادن یا به اشتراک گذاشتن عالی هستند."
    },
    {
      question: "کارگاه سیمون کجاست و آیا امکان خرید حضوری وجود دارد؟",
      answer: "کارگاه اصلی پخت ما در شهر زیبای رشت (استان گیلان) واقع شده است. در حال حاضر ما به عنوان یک کلود بیکری (کارگاه آنلاین) فعالیت می‌کنیم و تمام سفارش‌ها را به صورت روزانه و داغ پخت می‌کنیم تا بالاترین کیفیت را دریافت کنید. امکان دریافت سفارش به صورت حضوری از درب کارگاه (گلسار) نیز فراهم است."
    },
    {
      question: "آیا به شهرهای دیگر خارج از رشت هم ارسال دارید؟",
      answer: "بله، ما کوکی‌های جذاب سیمون را به سراسر شهرهای ایران ارسال می‌کنیم! برای حفظ بافت مذاب، کوکی‌ها در قوطی‌های فلزی ایزوله هوا‌بندی شده بسته‌بندی شده و با پست پیشتاز یا تیپاکس ارسال می‌شوند. پس از تحویل، کافی‌ست آن‌ها را ۳ دقیقه در فر گرم کنید تا مغز کوکی دوباره ذوب و روان شود."
    },
    {
      question: "کوکی‌ها تا چه مدت تازه می‌مانند و روش نگهداری‌شان چیست؟",
      answer: "در دمای محیط و داخل یک ظرف دربسته، کوکی‌ها تا ۴ روز کاملاً تازه، نرم و لذیذ باقی می‌مانند. اگر بخواهید آن‌ها را طولانی‌تر نگهداری کنید، می‌توانید تا یک ماه آن‌ها را فریز کنید و قبل از مصرف، در فر یا مایکروویو گرم و نوش جان کنید."
    },
    {
      question: "در پخت کوکی‌ها از چه موادی استفاده می‌کنید؟",
      answer: "کیفیت مواد اولیه اولویت شماره یک سیمون است. ما از شکلات تلخ و شیری مرغوب بلژیکی، کره فندقی محلی دست‌ساز، آرد ارگانیک اعلا و گردوهای بو داده تازه استفاده می‌کنیم. در کوکی‌های ما از هیچ‌گونه روغن صنعتی قنادی، رنگ یا مواد نگهدارنده مصنوعی استفاده نمی‌شود."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#120c0a] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-[#4b3621]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 text-cookie-gold text-xs font-sans font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>سوالی دارید؟</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-cookie-cream">
            سوالات متداول مشتریان
          </h2>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-cookie-cream/5 bg-[#1a110e]/40 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full py-6 px-6 md:px-8 text-right flex items-center justify-between gap-4 font-serif text-lg font-bold text-cookie-cream hover:text-cookie-gold transition-colors duration-300"
                >
                  <span>{faq.question}</span>
                  <div className="p-1 rounded-full bg-cookie-cream/5 text-cookie-gold shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 text-right font-sans text-sm text-cookie-cream-dark/75 leading-relaxed border-t border-cookie-cream/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
