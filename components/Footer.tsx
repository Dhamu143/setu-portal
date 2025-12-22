import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Sunrise } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary-900 text-orange-100 py-16 border-t border-orange-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-white text-primary-600 p-2 rounded-xl">
                                <Sunrise size={24} fill="currentColor" />
                            </div>
                            <span className="text-2xl font-extrabold text-white tracking-tight">Setu App</span>
                        </div>
                        <p className="mb-8 max-w-sm text-orange-200 leading-relaxed">
                            Your digital bridge to Sanatan Dharma. Discover temples, celebrate festivals, and immerse yourself in daily devotion with Setu.
                        </p>
                        <div className="flex gap-5">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                <Link key={i} href="#" className="bg-orange-800 p-2 rounded-lg hover:bg-white hover:text-primary-600 transition-all">
                                    <Icon size={20} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    {/* <div>
                        <h3 className="text-white font-bold text-lg mb-6">Explore</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="hover:text-white hover:underline transition">Temples Near Me</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline transition">Hindu Calendar</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline transition">Daily Panchang</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline transition">Aarti & Bhajans</Link></li>
                        </ul>
                    </div> */}

                    {/* Legal */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Legal</h3>
                        <ul className="space-y-3">
                            <li><Link href="/terms" className="hover:text-white hover:underline transition">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="hover:text-white hover:underline transition">Privacy Policy</Link></li>
                            {/* <li><Link href="#" className="hover:text-white hover:underline transition">Content Guidelines</Link></li> */}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-orange-800 pt-8 text-center text-sm text-orange-300">
                    <p>&copy; {new Date().getFullYear()} Setu App. Dedicated to Sanatan Dharma.</p>
                </div>
            </div>
        </footer>
    );
}