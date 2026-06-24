import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Flavors from "@/components/Flavors";
import BakeStory from "@/components/BakeStory";
import InteractiveCookieBuilder from "@/components/InteractiveCookieBuilder";
import SocialWall from "@/components/SocialWall";
import OrderSection from "@/components/OrderSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#120c0a] text-[#fcf9f2] selection:bg-[#d4af37] selection:text-[#120c0a] font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Flavors />
        <BakeStory />
        <InteractiveCookieBuilder />
        <SocialWall />
        <OrderSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

