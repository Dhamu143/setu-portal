import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MantraMarquee from "@/components/MantraMarquee";
import Features from "@/components/Features";
import VIPSection from "@/components/VIPSection";
import Reviews from "@/components/Reviews";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";
import ClientEffects from "@/components/ClientEffects";

export default function Home() {
  return (
    <>
      <ClientEffects />
      <Navbar />
      <Hero />
      <MantraMarquee />
      <Features />
      <VIPSection />
      <Reviews />
      <DownloadCTA />
      <Footer />
    </>
  );
}