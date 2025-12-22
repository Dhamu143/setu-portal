import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface FeatureProps {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
    icon: LucideIcon;
    reverse?: boolean;
}

export default function FeatureSection({
    title,
    subtitle,
    desc,
    image,
    icon: Icon,
    reverse,
}: FeatureProps) {
    return (
        <section
            id="features"
            className="py-24 lg:py-16 border-b border-slate-50 last:border-0 bg-white overflow-hidden scroll-mt-24"
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div
                    className={`flex flex-col gap-16 lg:gap-32 items-center ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                        }`}
                >
                    {/* Text Side */}
                    <div className="flex-1 text-center lg:text-left w-full">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2.5 rounded-2xl font-bold text-sm mb-8">
                            <div className="p-1 bg-blue-200 rounded-full">
                                <Icon size={14} strokeWidth={3} />
                            </div>
                            {subtitle}
                        </div>

                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">
                            {title}
                        </h2>

                        <p className="text-lg md:text-xl text-slate-500 max-w-lg mx-auto lg:mx-0">
                            {desc}
                        </p>
                    </div>

                    {/* Image Side */}
                    <div className="flex-1 relative flex justify-center w-full">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-slate-50 rounded-full blur-3xl -z-10" />

                        <div className="relative w-[300px] h-[530px] md:w-[320px] md:h-[560px]">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
