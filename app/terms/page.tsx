import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ScrollText,
  ShieldAlert,
  BookOpen,
  Scale,
  HelpCircle,
  ArrowRight,
  UserCheck,
} from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      {/* Hero Header */}
      <div className="bg-white border-b border-orange-100">
        <div className="container mx-auto px-6 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-orange-200">
            <ScrollText size={16} />
            LEGAL DOCUMENT
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Welcome to Setu Sanatan. Please read these terms to understand the rules
            regarding our spiritual content and community features.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12 relative">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 pl-3">
                Sections
              </p>
              {[
                { id: "intro", label: "1. Introduction" },
                { id: "content", label: "2. Religious Content" },
                { id: "conduct", label: "3. User Conduct" },
                { id: "disclaimer", label: "4. Disclaimer" },
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="block px-3 py-2 text-slate-600 hover:text-primary-600 hover:bg-orange-50 rounded-lg text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 space-y-8 max-w-4xl">
            {/* Section 1 */}
            <section
              id="intro"
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-orange-100 scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-100 text-primary-600 rounded-xl">
                  <Scale size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  1. Introduction
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                By accessing <strong>Setu Sanatan</strong>, you agree to these
                Terms. Setu Sanatan is a platform dedicated to providing information
                related to Hindu religion, temples, festivals, and spiritual
                literature.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="content"
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-orange-100 scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-yellow-100 text-yellow-700 rounded-xl">
                  <BookOpen size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  2. Religious Content Usage
                </h2>
              </div>
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-3">
                  <div className="mt-2 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                  <p>
                    <strong>Accuracy:</strong> While we strive to provide
                    accurate details regarding Panchang, Tithi, and Rituals,
                    regional variations in Hindu traditions exist. Users are
                    advised to verify with local priests for specific auspicious
                    timings.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="mt-2 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                  <p>
                    <strong>Copyright:</strong> The articles, original audio
                    recordings of Bhajans, and curated temple information are
                    the property of Setu Sanatan. You may not copy or redistribute
                    them for commercial purposes without permission.
                  </p>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section
              id="conduct"
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-orange-100 scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                  <UserCheck size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  3. Community Guidelines
                </h2>
              </div>
              <p className="text-slate-600 mb-4">
                Setu Sanatan encourages respectful discussion. When using our
                community features (comments, quizzes):
              </p>
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
                <ul className="space-y-3">
                  {[
                    "Do not post content that hurts religious sentiments or promotes hate speech.",
                    "Respect diverse traditions and customs within Sanatan Dharma.",
                    "Do not use the platform for political propaganda.",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <ShieldAlert size={18} className="text-primary-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Contact Box */}
            <div className="bg-primary-900 text-orange-50 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-orange-900/20">
              <div>
                <h3 className="text-white font-bold text-xl mb-1 flex items-center gap-2">
                  <HelpCircle size={20} /> Questions about Content?
                </h3>
                <p className="text-orange-200">
                  Our Dharmik editorial team is here to help.
                </p>
              </div>
              <a
                href="mailto:dharma@setuapp.com"
                className="bg-white text-primary-900 px-6 py-3 rounded-lg font-bold hover:bg-orange-50 transition flex items-center gap-2"
              >
                Contact Us <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
