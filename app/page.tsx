import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import DownloadSection from "@/components/DownloadSection";
import { LayoutGrid, Filter, Users, Contact, Search, Languages, BarChart3 } from "lucide-react"; // Added Languages icon

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <HeroSection />

      {/* Title Section */}
      <div className="text-center pt-24 pb-12 lg:pt-32 lg:pb-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            All Features in One App
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Get started with the Artisan App.
          </p>
        </div>
      </div>

      {/* Step 1: Language Selection (NEW) */}
      <FeatureSection
        subtitle=" Select Language"
        title="Available in Your Local Language"
        desc="we support 10 languages. Choose from English, Hindi, Gujarati, Tamil, Marathi, and more to navigate the app comfortably in your preferred regional language."
        image="/language.jpg" // Rename your screenshot to language.jpg
        icon={Languages}
      />

      {/* Step 2: Category Selection (Reversed for Zig-Zag layout) */}
      <FeatureSection
        subtitle=" Browse Categories"
        title="Select Your Service Category"
        desc="Choose from a wide range of industries including Skilled Trades, Education, Healthcare, IT, and more. We have organized everything to help you find exactly what you need."
        image="/category.jpg"
        icon={LayoutGrid}
        reverse={true}
      />

      {/* Step 3: Subcategory/Profession */}
      <FeatureSection
        subtitle=" Specific Professions"
        title="Pinpoint the Right Expert"
        desc="Drill down into specific professions. Looking for a Teacher, Professor, or a Tutor? Our detailed subcategories ensure you connect with the exact specialist for the job."
        image="/subcategory.jpg"
        icon={Filter}
      />

      {/* Step 4: Artisan Listings (Reversed) */}
      <FeatureSection
        subtitle=" Verified Listings"
        title="Browse Skilled Professionals"
        desc="View a list of verified artisans near you. Check their ratings, verification badges, and key expertise at a glance before you decide to connect."
        image="/listing.jpg"
        icon={Users}
        reverse={true}
      />

      {/* Step 5: Details Page */}
      <FeatureSection
        subtitle="Comprehensive Details"
        title="In-Depth Artisan Profiles"
        desc="Get full transparency. View availability schedules, read detailed bios, check past portfolios, and contact them directly via phone or location navigation."
        image="/details.jpg"
        icon={Contact}
      />

      {/* Step 6: Worker Registration (Reversed) */}
      <FeatureSection
        subtitle="Two Types of Users"
        title="Join as a Skilled Worker"
        desc="Our platform caters to both customers and professionals. If you are a skilled worker, simply select this option to register your services, create a profile, and start connecting with clients."
        image="/popup.jpg"
        icon={Search}
        reverse={true}
      />
      {/* Step 7: Worker Dashboard (NEW) */}
      <FeatureSection
        subtitle="Worker Dashboard"
        title="Track Your Growth & Reach"
        desc="For artisans: Access a powerful dashboard to track profile views, monitor your overall ratings, manage your portfolio, and update your business profile instantly."
        image="/dashboard.jpg" // Rename your screenshot to dashboard.jpg
        icon={BarChart3}
      />
      <DownloadSection />

    </main>
  );
}