import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lock, Eye, MapPin, Database, Shield, Bell } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-orange-50">

      {/* Hero Header */}
      <div className="bg-primary-900 text-white border-b border-primary-800">
        <div className="container mx-auto px-6 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-800 text-orange-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary-700">
            <Lock size={14} />
            DATA PROTECTION
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-orange-200 text-lg max-w-2xl mx-auto">
            We value your faith and trust. This policy explains how Setu App handles your personal data.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12 relative">

          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 pl-3">Sections</p>
              {[
                { id: "collect", label: "1. Data Collection" },
                { id: "location", label: "2. Temple & Location" },
                { id: "security", label: "3. Data Security" },
              ].map((link) => (
                <a key={link.id} href={`#${link.id}`} className="block px-3 py-2 text-slate-600 hover:text-primary-600 hover:bg-orange-100 rounded-lg text-sm font-medium transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-8 max-w-4xl">

            {/* Section 1 */}
            <section id="collect" className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-orange-100 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                  <Database size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">1. Information We Collect</h2>
              </div>
              <p className="text-slate-600 mb-6">To provide accurate spiritual services, we may collect:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Profile Data", desc: "Name and profile picture for community features like Quizzes." },
                  { title: "Preferences", desc: "Your preferred deities (Ishta Devta) to personalize your feed." },
                  { title: "Device Info", desc: "Device type to optimize Audio/Video playback for Aartis." },
                  { title: "Usage Data", desc: "Which articles or mantras you access most frequently." }
                ].map((item, i) => (
                  <div key={i} className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                    <h4 className="font-bold text-primary-900 text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2 */}
            <section id="location" className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-orange-100 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                  <MapPin size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">2. Location & Temples</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Setu App uses your location data <strong>only</strong> to:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <div className="bg-blue-50 p-2 rounded-lg text-blue-600 mt-1"><Eye size={18} /></div>
                  <div>
                    <strong className="block text-slate-900">Discover Nearby Temples</strong>
                    <p className="text-slate-500 text-sm">Show you famous and local temples in your immediate vicinity.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="bg-blue-50 p-2 rounded-lg text-blue-600 mt-1"><Bell size={18} /></div>
                  <div>
                    <strong className="block text-slate-900">Accurate Panchang</strong>
                    <p className="text-slate-500 text-sm">Calculate sunrise/sunset timings (Tithi) accurately based on your geo-coordinates.</p>
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="security" className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-orange-100 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                  <Shield size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">3. Data Security</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Your faith is personal, and so is your data. We implement industry-standard security measures to protect your information. We do not sell your personal data to third parties.
              </p>
            </section>

            {/* Footer Note */}
            <div className="border-l-4 border-primary-500 pl-6 py-2">
              <p className="text-slate-500 italic">
                By using Setu App, you acknowledge that you have read this Privacy Policy.
              </p>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}