"use client";

import React from "react";
import { Instagram, ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0c0807] border-t border-cookie-cream/5 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Footer Grid (RTL layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 text-right">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2 justify-start">
              <span className="font-serif text-2xl font-extrabold tracking-wider text-cookie-cream">
                SIMONE
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-cookie-gold" />
            </div>
            <p className="font-sans text-xs text-cookie-cream-dark/60 leading-relaxed max-w-sm">
              اولین تولیدکننده کوکی‌های غول‌پیکر و مغزدار واقعی به سبک نیویورک در ایران، مستقر در شهر رشت. ما روزانه پخت می‌کنیم تا همیشه گرم و با مغز روان به دستتان برسد.
            </p>
            <div className="flex items-center gap-3 mt-2 justify-start">
              <a
                href="https://www.instagram.com/simonefood/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass-light hover:bg-cookie-gold hover:text-cookie-dark transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-serif text-sm font-bold text-cookie-cream uppercase tracking-wider">بخش‌های سایت</h4>
            <div className="flex flex-col gap-2.5 text-xs font-sans text-cookie-cream-dark/70">
              <a href="#flavors" className="hover:text-cookie-gold transition-colors">طعم‌های امضا</a>
              <a href="#story" className="hover:text-cookie-gold transition-colors">داستان ما</a>
              <a href="#bakelab" className="hover:text-cookie-gold transition-colors">آزمایشگاه کوکی</a>
              <a href="#order" className="hover:text-cookie-gold transition-colors">راهنمای سفارش</a>
              <a href="#faq" className="hover:text-cookie-gold transition-colors">سوالات متداول</a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-serif text-sm font-bold text-cookie-cream uppercase tracking-wider">کارگاه آنلاین پخت</h4>
            <div className="flex flex-col gap-3 text-xs font-sans text-cookie-cream-dark/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cookie-gold shrink-0 mt-0.5" />
                <span>رشت، گلسار، استان گیلان، ایران</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cookie-gold shrink-0" />
                <span>۰۹۱۱ ۰۰۰ ۰۰۰۰ (پشتیبانی سفارشات)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cookie-gold shrink-0" />
                <span>hello@simonefood.com</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-serif text-sm font-bold text-cookie-cream uppercase tracking-wider">ساعات کاری</h4>
            <div className="flex flex-col gap-2 text-xs font-sans text-cookie-cream-dark/70">
              <p>شنبه تا پنج‌شنبه:</p>
              <p className="font-bold text-cookie-gold">۱۰:۰۰ صبح تا ۸:۰۰ شب</p>
              <p className="mt-2">ارسال جمعه‌ها:</p>
              <p className="font-bold text-cookie-gold">۱۲:۰۰ ظهر تا ۶:۰۰ عصر</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-cookie-cream/5 mb-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] text-cookie-cream-dark/40 text-center sm:text-right">
            © {new Date().getFullYear()} سیمون فود. تمامی حقوق مادی و معنوی محفوظ است. پخته شده با عشق در شهر باران‌های نقره‌ای، رشت.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass hover:bg-cookie-cream hover:text-cookie-dark font-sans font-bold text-[10px] uppercase tracking-widest text-cookie-cream transition-all duration-300"
          >
            <span>بازگشت به بالا</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}
