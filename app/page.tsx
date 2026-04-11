import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MantraMarquee from "@/components/MantraMarquee";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";
import VipMember from "@/components/VipMember";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MantraMarquee />
      <Features />
      <VipMember />
      <Reviews />
      <DownloadCTA />
      <Footer />
    </>
  );
}
