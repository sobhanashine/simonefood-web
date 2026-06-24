"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChefHat, Flame, Heart, Sparkles, Scale, RefreshCw } from "lucide-react";

export default function BakeStory() {
  const steps = [
    {
      icon: <Scale className="w-5 h-5" />,
      title: "وزن غول‌پیکر ۱۵۰ گرمی",
      desc: "برخلاف کوکی‌های تخت و نازک معمولی، کوکی‌های سیمون به صورت کروی و سنگین فرم داده می‌شوند تا رطوبت، گرما و مواد مغزی در مرکز کوکی حبس شود.",
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "استراحت و عمل‌آوری ۲۴ ساعته",
      desc: "خمیر کوکی‌ها به مدت ۲۴ ساعت در دمای سرد استراحت می‌کند تا کره کاراملی‌شده (کره فندقی) و شکر کاملاً هیدراته شوند و طعم عمیق تافی و کارامل ایجاد شود.",
    },
    {
      icon: <Flame className="w-5 h-5" />,
      title: "پخت شوک با حرارت بالا",
      desc: "پخت کوکی‌ها در دمای فوق‌العاده بالا باعث می‌شود لایه بیرونی فوراً سفت و برشته شود، در حالی که مرکز خمیری شکلاتی و داغ به صورت کاملاً مذاب حفظ می‌شود.",
    },
  ];

  return (
    <section id="story" className="py-24 bg-[#120c0a] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#4b3621]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-[#d4af37]/2.5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Right Side: Story Details (RTL flow) */}
        <div className="lg:col-span-6 text-right flex flex-col gap-6 order-2 lg:order-1">
          <div className="flex items-center gap-2 text-cookie-gold text-xs font-sans font-bold uppercase tracking-widest justify-start">
            <ChefHat className="w-4 h-4" />
            <span>هنر قنادی و پخت اصیل</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-cookie-cream leading-tight">
            داستان افسانه‌ای <br />
            کوکی‌های نیویورکی در رشت
          </h2>

          <p className="font-sans text-cookie-cream-dark/80 text-base leading-relaxed mt-2">
            در سال ۱۴۰۳، سیمون در شهر زیبای باران‌های نقره‌ای، رشت پا به عرصه گذاشت. هدف ما ساده اما چالش‌برانگیز بود: تولید اولین کوکی‌های واقعی، غول‌پیکر و مغزدار به سبک نیویورک در ایران. ما می‌خواستیم تجربه‌ای از طعم و بافت خلق کنیم که نظیر نداشته باشد.
          </p>

          <p className="font-sans text-cookie-cream-dark/70 text-sm leading-relaxed">
            پخت کوکی‌های ما نیاز به مهندسی آشپزی دقیقی دارد. ما ابتدا کره طبیعی را تا دمای کاراملی شدن داغ می‌کنیم تا عطر فندقی بگیرد، گردوهای تازه ایرانی را بو می‌دهیم تا اسانس طبیعی‌شان آزاد شود و از ترکیب انحصاری شکلات‌های مرغوب بلژیکی استفاده می‌کنیم. هر کوکی دانه‌دانه با دست چانه شده، شب را استراحت می‌کند و صبح زود پخته می‌شود.
          </p>

          {/* Core values */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-cookie-cream/10 mt-4 text-right">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-cookie-gold/10 text-cookie-gold shrink-0 mt-1">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-cookie-cream">پخته شده با عشق</h4>
                <p className="font-sans text-xs text-cookie-cream-dark/60 mt-1">چانه شده دستی روزانه در دسته‌های کوچک.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-cookie-gold/10 text-cookie-gold shrink-0 mt-1">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-cookie-cream">مواد اولیه طبیعی</h4>
                <p className="font-sans text-xs text-cookie-cream-dark/60 mt-1">بدون مواد نگهدارنده، رنگ‌ها یا روغن‌های مضر.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Left Side: Visual Process Grid (RTL flow) */}
        <div className="lg:col-span-6 flex flex-col gap-6 w-full order-1 lg:order-2">
          <div className="font-serif italic text-lg text-cookie-gold border-r-2 border-cookie-gold pr-4 py-1 mb-2 text-right">
            &ldquo;چه چیزی کوکی سیمون را از دیگران متمایز می‌کند؟&rdquo;
          </div>

          <div className="flex flex-col gap-4">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-6 rounded-2xl glass-light border border-cookie-cream/5 flex gap-5 items-start hover:border-cookie-gold/20 transition-all duration-300 group text-right"
              >
                <div className="p-3.5 rounded-xl bg-cookie-cream/5 text-cookie-gold group-hover:bg-cookie-gold group-hover:text-cookie-dark transition-all duration-300 shrink-0">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-cookie-cream group-hover:text-cookie-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-cookie-cream-dark/70 leading-relaxed mt-1.5">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
