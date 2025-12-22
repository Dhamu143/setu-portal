import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection"; // Assumes you have this generic component
import DownloadSection from "@/components/DownloadSection"; // Assumes you have this generic component
import { MapPin, Calendar, Music, BrainCircuit } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <HeroSection />

      {/* Title Section */}
      <div className="text-center pt-24 pb-12 lg:pt-32 lg:pb-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Explore the Divine
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Setu App brings the complete Hindu spiritual experience to your fingertips.
          </p>
        </div>
      </div>

      {/* Feature 1: Temples */}
      <FeatureSection
        subtitle="Divine Destinations"
        title="Discover Famous & Local Temples"
        desc="Explore detailed information about famous pilgrimage sites and discover hidden local temples near you. Get history, timings, and location details in one click."
        image="/temple-screen.jpg" // Place a screenshot of temple list here
        icon={MapPin}
      />

      {/* Feature 2: Calendar (Reversed) */}
      <FeatureSection
        subtitle="Panchang & Festivals"
        title="Complete Hindu Calendar"
        desc="Never miss an auspicious moment. Get daily Panchang, Tithi, and notifications for all major Hindu festivals like Diwali, Holi, and Navratri."
        image="/calendar-screen.jpg" // Place a screenshot of calendar here
        icon={Calendar}
        reverse={true}
      />

      {/* Feature 3: Spiritual Library */}
      <FeatureSection
        subtitle="Mantra, Aarti & Bhajan"
        title="Immerse in Devotion"
        desc="A vast library of spiritual content. Read and listen to God stories, daily Mantras, Aartis, Stutis, and Slokas. Find inner peace anytime, anywhere."
        image="/spiritual-screen.jpg" // Place a screenshot of aarti/mantra here
        icon={Music}
      />

      {/* Feature 4: Articles & Quiz (Reversed) */}
      <FeatureSection
        subtitle="Knowledge & Quiz"
        title="Learn & Test Your Knowledge"
        desc="Read fascinating articles about Sanatan Dharma and challenge yourself with quizzes based on what you read. Enhance your spiritual knowledge playfully."
        image="/quiz-screen.jpg" // Place a screenshot of quiz/article here
        icon={BrainCircuit}
        reverse={true}
      />

      <DownloadSection />

    </main>
  );
}