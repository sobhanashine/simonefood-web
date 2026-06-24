"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Instagram, ExternalLink } from "lucide-react";

interface Post {
  id: number;
  image: string;
  likes: string;
  comments: string;
  caption: string;
  captionEn: string;
}

export default function SocialWall() {
  const posts: Post[] = [
    {
      id: 1,
      image: "/images/hero.jpg",
      likes: "۱،۲۴۵",
      comments: "۱۴۲",
      caption: "پخت هر روز صبح گرم و تازه در رشت  طعم اصیل کوکی نیویورکی با شکلات بلژیکی و گردو.",
      captionEn: "Daily hot and fresh baking in Rasht. Authentic NY cookie taste with Belgian chocolate & walnuts."
    },
    {
      id: 2,
      image: "/images/pistachio.jpg",
      likes: "۹۸۲",
      comments: "۸۴",
      caption: "ترکیب بهشتی کرم پسته ایرانی ۱۰۰٪ خالص و شکلات سفید بلژیکی  طعمی که هیچ‌وقت فراموش نمی‌کنید.",
      captionEn: "Heavenly combination of 100% pure Iranian pistachio cream & Belgian white chocolate."
    },
    {
      id: 3,
      image: "/images/red_velvet.jpg",
      likes: "۱،۴۳۲",
      comments: "۲۱۰",
      caption: "مغز نوتلای مذاب و خمیر مخملی ردولوت  با سیمون طعم واقعی نوتلا رو حس کن.",
      captionEn: "Molten Nutella core & velvety red velvet dough. Feel the real taste of Nutella with Simone."
    },
    {
      id: 4,
      image: "/images/lotus.jpg",
      likes: "۱،۱۱۰",
      comments: "۹۸",
      caption: "طرفدارای لوتوس کجان؟  کرم بیسکویت لوتوس داخل خمیر ترد و جذاب کاراملی.",
      captionEn: "Where are the Lotus Biscoff fans? Lotus cream inside a crunchy, caramelized cookie."
    },
    {
      id: 5,
      image: "/images/cookie_box.jpg",
      likes: "۸۶۵",
      comments: "۶۲",
      caption: "باکس‌های جدید لوکس سیمون رسید  بهترین هدیه برای کسانی که دوستشون دارید.",
      captionEn: "Simone's new luxury boxes have arrived. The best gift for those you love."
    },
    {
      id: 6,
      image: "/images/baking_process.jpg",
      likes: "۱،۵۳۰",
      comments: "۱۸۹",
      caption: "کیفیت مواد اولیه اولویت اول سیمونه. شکلات بلژیکی درجه یک و کره حیوانی خالص ",
      captionEn: "Quality of ingredients is Simone's top priority. Premium Belgian chocolate & pure butter."
    }
  ];

  return (
    <section className="py-24 bg-[#120c0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#4b3621]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-[#d4af37]/2.5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Profile Card Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-16 p-6 md:p-8 rounded-3xl glass border border-cookie-cream/5 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-right"
        >
          {/* Avatar wrapper */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full p-1 bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600">
            <div className="w-full h-full rounded-full bg-[#120c0a] p-1 flex items-center justify-center overflow-hidden relative">
              <div className="w-full h-full rounded-full bg-cookie-gold/20 flex items-center justify-center text-cookie-gold font-serif text-3xl font-extrabold">
                S
              </div>
            </div>
            {/* Instagram badge icon */}
            <div className="absolute -bottom-1 -left-1 bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 p-1.5 rounded-full text-white">
              <Instagram className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Profile details */}
          <div className="flex-1 flex flex-col justify-between gap-4 w-full text-center md:text-right">
            <div>
              <div className="flex flex-col md:flex-row md:items-center gap-3 justify-center md:justify-start">
                <h3 className="font-serif text-2xl font-black text-cookie-cream">simonefood</h3>
                <div className="flex items-center justify-center gap-4 text-xs font-sans text-cookie-cream-dark/60 mt-1 md:mt-0" dir="ltr">
                  <span><strong>48</strong> پست‌ها</span>
                  <span><strong>3,134</strong> دنبال‌کننده</span>
                  <span><strong>93</strong> دنبال‌شونده</span>
                </div>
              </div>
              
              <h4 className="font-sans text-sm font-semibold text-cookie-gold mt-2">SIMONE | سیمون</h4>
              
              {/* Bio */}
              <div className="font-sans text-xs text-cookie-cream-dark/80 mt-2 leading-relaxed flex flex-col gap-1 items-center md:items-start">
                <span className="flex items-center gap-1.5">
                   اولین تولیدکننده کوکی‌های نیویورکی در کشور
                </span>
                <span className="flex items-center gap-1.5">
                   اینجا هستیم تا عشقمون به غذا رو با شما به اشتراک بذاریم
                </span>
                <span className="text-cookie-gold font-semibold"> رشت، گیلان</span>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.instagram.com/simonefood/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-yellow-600 via-red-600 to-purple-600 hover:from-yellow-500 hover:to-purple-500 text-white font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg"
              >
                <span>دنبال کردن در اینستاگرام</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Instagram Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/simonefood/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-cookie-cream/5 group shadow-lg"
            >
              <Image
                src={post.image}
                alt={`Instagram Post ${post.id}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Instagram overlay details */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10 text-right">
                
                {/* Stats */}
                <div className="flex items-center gap-6 justify-end text-cookie-cream" dir="ltr">
                  <div className="flex items-center gap-1.5 font-sans text-sm font-bold">
                    <Heart className="w-4 h-4 fill-cookie-cream" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-sans text-sm font-bold">
                    <MessageCircle className="w-4 h-4 fill-cookie-cream" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                {/* Caption details */}
                <div className="border-t border-cookie-cream/10 pt-4 flex flex-col gap-2">
                  {/* Persian text (Right aligned) */}
                  <p className="font-sans text-xs text-cookie-cream/90 leading-relaxed font-medium">
                    {post.caption}
                  </p>
                  {/* English text (Left aligned) */}
                  <p className="font-sans text-[10px] text-cookie-cream-dark/50 leading-relaxed text-left" dir="ltr">
                    {post.captionEn}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
