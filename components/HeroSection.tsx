"use client"
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";

const features = [
    "Connecting skilled artisans with local customers",
    "Providing verified professional profiles instantly",
    "Promoting local service businesses",
    "Helping technicians with jobs and steady income",
    "Encouraging transparency and fair pricing",
];

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-16 pb-24">

            {/* Soft Background Blur */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-100/40 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col lg:flex-row items-center gap-14">

                    {/* LEFT CONTENT — FIRST ON MOBILE */}
                    <div className="order-1 lg:order-1 flex-1 max-w-xl text-center lg:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
                            Your Reliable <br />
                            <span className="text-primary-600">Field Artisan App</span>
                        </h1>

                        <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
                            A dedicated platform to connect you with trusted plumbers,
                            electricians, and technicians for all your home service needs.
                        </p>

                        <div className="space-y-3 mb-8 text-left">
                            {features.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle className="text-green-500 mt-1" size={18} />
                                    <span className="text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => {
                                document.getElementById("features")?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                            className="inline-flex items-center gap-2 border border-slate-300 px-6 py-3 rounded-lg font-medium text-slate-800 hover:bg-slate-100 transition"
                        >
                            Learn More <ArrowRight size={16} />
                        </button>

                    </div>

                    {/* RIGHT IMAGE — SECOND ON MOBILE */}
                    <div className="order-2 lg:order-2 flex-1 flex justify-center">
                        <div className="relative w-[220px] h-[440px] sm:w-[260px] sm:h-[500px] md:w-[300px] md:h-[560px]">
                            <Image
                                src="/p.png"
                                alt="Field Artisan App Screenshot"
                                fill
                                priority
                                className="object-contain"

                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}