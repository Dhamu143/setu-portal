import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";

const features = [
  "Discover popular and local temples near you",
  "Complete Hindu Panchang & Festival Calendar",
  "Read and listen to Aarti, Bhajan, and Mantras",
  "Daily Dharmik Articles and Spiritual Quizzes",
  "Connect with your Sanatan culture instantly",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 pt-16 pb-24 lg:pt-24 lg:pb-32">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-200/30 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-14">

          {/* LEFT CONTENT */}
          <div className="flex-1 max-w-2xl text-center lg:text-left z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Your Digital Bridge to <br className="hidden lg:block"/>
              <span className="text-primary-600">Sanatan Dharma</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Explore temples, celebrate festivals with the Hindu calendar, and immerse yourself in devotion with our vast library of Aartis and Mantras.
            </p>

            <div className="space-y-3 mb-10 inline-block text-left bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-orange-100">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-primary-600 flex-shrink-0" size={20} />
                  <span className="text-slate-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                 <button className="inline-flex justify-center items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-700 transition-all hover:scale-105 shadow-lg shadow-primary-600/30">
                    Download Setu App <ArrowRight size={18} />
                </button>
            </div>
          </div>

          {/* RIGHT IMAGE (Using Floating Frame) */}
          <div className="flex-1 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px] animate-float">
                {/* IMPORTANT: You need to put a screenshot of Setu App in public folder.
                   I will name it "setu-home.jpg" in the code below.
                */}
                <Image
                    src="/setu-home.jpg" 
                    alt="Setu App Home Screen"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}