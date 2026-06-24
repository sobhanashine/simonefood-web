"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Truck, HelpCircle, MessageSquare, CheckCircle } from "lucide-react";

export default function OrderSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    flavors: "Classic NY Chocolate Chip",
    quantity: "4 Cookies (1 Box)",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Construct WhatsApp message URL in Persian
    const message = `سلام سیمون فود! درخواست ثبت سفارش جدید دارم:
نام و نام‌خانوادگی: ${formData.name}
شماره تماس: ${formData.phone}
آدرس تحویل: ${formData.address || "تحویل حضوری در کارگاه"}
طعم انتخابی: ${formData.flavors}
تعداد/باکس: ${formData.quantity}
توضیحات خاص: ${formData.notes || "ندارد"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/989110000000?text=${encodedMessage}`;
    
    // Redirect after delay
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setSubmitted(false);
    }, 2000);
  };

  const steps = [
    {
      icon: <HelpCircle className="w-5 h-5" />,
      title: "۱. انتخاب کوکی‌ها",
      desc: "تعداد و طعم‌های دلخواه خود را برای جعبه‌های تکی، ۴ تایی یا ۶ تایی انتخاب کنید.",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "۲. ثبت مشخصات",
      desc: "فرم سفارش را پر کنید تا جزئیات به صورت خودکار به واتس‌اپ کارگاه ارسال شود.",
    },
    {
      icon: <Truck className="w-5 h-5" />,
      title: "۳. ارسال داغ و سریع",
      desc: "در رشت، سفارش‌ها بلافاصله پس از پخت، با پیک تپسی یا اسنپ کاملاً داغ ارسال می‌شوند.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "۴. ارسال به کل کشور",
      desc: "خارج از رشت؟ ارسال با پست پیشتاز در بسته‌بندی‌های فلزی ایزوله برای حفظ بافت مذاب.",
    },
  ];

  return (
    <section id="order" className="py-24 bg-[#1a110e] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#4b3621]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Right Side: Delivery Details (RTL flow) */}
        <div className="lg:col-span-6 text-right flex flex-col gap-8 order-2 lg:order-1">
          <div>
            <span className="font-sans text-xs font-bold text-cookie-gold uppercase tracking-widest block mb-3">
              نحوه ارسال و راهنمای سفارش
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-cookie-cream leading-tight">
              پخت اختصاصی، <br />
              تحویل داغ و کاراملی
            </h2>
            <p className="font-sans text-cookie-cream-dark/70 mt-4 leading-relaxed">
              ما در سیمون کوکی‌ها را فقط به صورت سفارشی پخت می‌کنیم تا همیشه گرم و روان به دست شما برسند. برای تجربه بافت اصلی نیویورکی با مغز شکلات جاری، مراحل ساده سفارش را طی کنید.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-right">
            {steps.map((step) => (
              <div 
                key={step.title}
                className="p-5 rounded-2xl glass-light border border-cookie-cream/5 flex flex-col gap-3"
              >
                <div className="p-2.5 rounded-lg bg-cookie-gold/10 text-cookie-gold self-start">
                  {step.icon}
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-cookie-cream">{step.title}</h4>
                  <p className="font-sans text-xs text-cookie-cream-dark/60 mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-cookie-gold/5 border border-cookie-gold/20 text-right">
            <h5 className="font-serif text-sm font-bold text-cookie-gold uppercase tracking-wider"> روش گرم کردن مجدد کوکی:</h5>
            <p className="font-sans text-xs text-cookie-cream-dark/80 mt-1 leading-relaxed">
              برای جاری شدن دوباره چاکلت چیپس‌ها و کرم فندقی در مغز کوکی، آن را به مدت ۱۰ تا ۱۵ ثانیه در مایکروویو قرار دهید، یا در فر از پیش گرم شده با دمای ۱۷۰ درجه سانتی‌گراد به مدت ۲ تا ۳ دقیقه حرارت دهید.
            </p>
          </div>
        </div>

        {/* Left Side: Quick order Form (RTL flow) */}
        <div className="lg:col-span-6 w-full relative order-1 lg:order-2">
          <div className="bg-[#120c0a]/60 border border-cookie-cream/5 p-6 md:p-8 rounded-3xl backdrop-blur-md relative overflow-hidden shadow-2xl">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 text-right"
                >
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-cookie-cream">ثبت نهایی و پیش‌فاکتور</h3>
                    <p className="font-sans text-xs text-cookie-cream-dark/50 mt-1">با ثبت این فرم، فاکتور نهایی صادر شده و برای تایید به واتس‌اپ کارگاه هدایت می‌شوید.</p>
                  </div>

                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[10px] uppercase font-bold text-cookie-cream-dark/60">نام و نام‌خانوادگی</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="مانند: سبحان"
                      className="px-4 py-3 rounded-xl bg-cookie-cream/5 border border-cookie-cream/10 focus:border-cookie-gold text-cookie-cream outline-none font-sans text-sm transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[10px] uppercase font-bold text-cookie-cream-dark/60">شماره تماس (ترجیحاً دارای واتس‌اپ)</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="مانند: 09111234567"
                      className="px-4 py-3 rounded-xl bg-cookie-cream/5 border border-cookie-cream/10 focus:border-cookie-gold text-cookie-cream outline-none font-sans text-sm transition-all text-left"
                      dir="ltr"
                    />
                  </div>

                  {/* Delivery Address */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[10px] uppercase font-bold text-cookie-cream-dark/60">آدرس تحویل (در صورت تمایل به تحویل حضوری، خالی بگذارید)</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="مانند: رشت، گلسار، خیابان..."
                      className="px-4 py-3 rounded-xl bg-cookie-cream/5 border border-cookie-cream/10 focus:border-cookie-gold text-cookie-cream outline-none font-sans text-sm transition-all"
                    />
                  </div>

                  {/* Flavors Select */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[10px] uppercase font-bold text-cookie-cream-dark/60">طعم کوکی انتخابی</label>
                      <select
                        value={formData.flavors}
                        onChange={(e) => setFormData({ ...formData, flavors: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-[#120c0a] border border-cookie-cream/10 focus:border-cookie-gold text-cookie-cream outline-none font-sans text-sm transition-all"
                      >
                        <option value="Classic NY Chocolate Chip">چاکلت چیپس کلاسیک</option>
                        <option value="Pistachio Dream">رویای پسته و شکلات سفید</option>
                        <option value="Red Velvet Nutella">ردولوت با مغز نوتلا</option>
                        <option value="Lotus Biscoff Lava">لوتوس بیسکوف کارامل</option>
                        <option value="Assorted Mix">باکس ترکیبی از همه طعم‌ها</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[10px] uppercase font-bold text-cookie-cream-dark/60">تعداد کوکی / اندازه جعبه</label>
                      <select
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="px-4 py-3 rounded-xl bg-[#120c0a] border border-cookie-cream/10 focus:border-cookie-gold text-cookie-cream outline-none font-sans text-sm transition-all"
                      >
                        <option value="1 Cookie (Trial)">۱ عدد کوکی تکی</option>
                        <option value="4 Cookies (Small Box)">باکس ۴ تایی کوکی</option>
                        <option value="6 Cookies (Large Box)">باکس ۶ تایی کوکی</option>
                        <option value="12 Cookies (Party Box)">باکس ۱۲ تایی کوکی</option>
                      </select>
                    </div>
                  </div>

                  {/* Custom Notes */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[10px] uppercase font-bold text-cookie-cream-dark/60">توضیحات سفارش یا متن تبریک هدیه</label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="هرگونه یادداشت یا درخواست خاصی دارید بنویسید..."
                      className="px-4 py-3 rounded-xl bg-cookie-cream/5 border border-cookie-cream/10 focus:border-cookie-gold text-cookie-cream outline-none font-sans text-sm transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 mt-2 bg-cookie-gold hover:bg-[#b8901c] text-cookie-dark font-sans font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                  >
                    <span>ارسال مشخصات به واتس‌اپ</span>
                    <Send className="w-3.5 h-3.5" />
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="py-12 flex flex-col items-center justify-center text-center gap-4 min-h-[450px]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.1 }}
                    className="p-4 bg-cookie-gold/10 text-cookie-gold rounded-full"
                  >
                    <CheckCircle className="w-16 h-16" />
                  </motion.div>
                  <h3 className="font-serif text-2xl font-bold text-cookie-cream mt-2">اتصال به درگاه واتس‌اپ</h3>
                  <p className="font-sans text-sm text-cookie-cream-dark/70 max-w-sm">
                    سفارش شما با موفقیت ثبت شد. در حال حاضر به چت کارگاه سیمون متصل می‌شوید تا فاکتور سفارش شما تایید نهایی شود.
                  </p>
                  <span className="font-sans text-xs text-cookie-gold mt-4 animate-pulse">در حال انتقال...</span>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
