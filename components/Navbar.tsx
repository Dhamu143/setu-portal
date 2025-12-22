'use client';

import Link from "next/link";
import { Menu, X, Sunrise } from "lucide-react"; // Using Sunrise icon for spiritual feel
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white/90 backdrop-blur-md py-4 border-b border-orange-100 sticky top-0 z-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-12">

                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="bg-primary-600 text-white p-2 rounded-xl group-hover:bg-primary-700 transition shadow-lg shadow-orange-200">
                            <Sunrise size={24} fill="currentColor" strokeWidth={1.5} />
                        </div>
                        <span className="text-2xl font-extrabold text-slate-800 tracking-tight">
                            Setu<span className="text-primary-600">App</span>
                        </span>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-600 hover:bg-orange-50 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex gap-2">
                            {/* Reusing the Google Play Badge Component */}
                            <GooglePlayBadge />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

function GooglePlayBadge() {
    return (
        <a href="https://play.google.com/store/apps/details?id=com.setu.godapp&hl=en"
            target="_blank"
            className="flex items-center cursor-pointer hover:opacity-90 transition-opacity">
            <svg width="135" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
                <rect x="0.5" y="0.5" width="119" height="39" rx="5.5" fill="black"></rect>
                <rect x="0.5" y="0.5" width="119" height="39" rx="5.5" stroke="black"></rect>
                <path d="M17.8 19.4L8 30C8 30 8 30 8 30C8.3 31.1 9.4 32 10.6 32C11.1 32 11.5 31.8 11.9 31.6L12 31.6L22.9 25.1L17.8 19.4Z" fill="#EA4335"></path>
                <path d="M27.6 17.6L27.6 17.6L22.9 14.8L17.5 19.7L22.9 25.1L27.6 22.3C28.4 21.9 29 21 29 20C29 19 28.4 18.1 27.6 17.6Z" fill="#FBBC04"></path>
                <path d="M8 9.9C8 10.2 8 10.4 8 10.6V29.3C8 29.5 8 29.7 8 30L18.1 19.7L8 9.9Z" fill="#4285F4"></path>
                <path d="M17.8 19.9L22.9 14.8L11.9 8.3C11.5 8.1 11.1 8 10.6 8C9.4 8 8.3 8.8 8 9.9C8 9.9 8 9.9 8 9.9L17.8 19.9Z" fill="#34A853"></path>
                <path d="M43.6 11.7C43.6 12.7 43.3 13.5 42.7 14.1C42 14.8 41.1 15.1 40 15.1C39 15.1 38.1 14.8 37.4 14C36.7 13.3 36.3 12.4 36.3 11.4C36.3 10.3 36.7 9.4 37.4 8.7C38.1 8 39 7.6 40 7.6C40.6 7.6 41.1 7.7 41.5 7.9C42 8.1 42.4 8.4 42.7 8.7L42 9.4C41.8 9.1 41.5 8.9 41.2 8.7C40.8 8.6 40.4 8.5 40 8.5C39.3 8.5 38.6 8.8 38.1 9.3C37.5 9.9 37.3 10.6 37.3 11.4C37.3 12.2 37.5 12.9 38.1 13.4C38.6 14 39.3 14.2 40 14.2C40.8 14.2 41.3 14 41.8 13.6C42.3 13.2 42.6 12.7 42.6 12H40V11.1H43.5C43.5 11.3 43.6 11.5 43.6 11.7ZM48.9 7.8V8.7H45.6V10.9H48.5V11.8H45.6V14.1H48.9V15H44.7V7.8H48.9ZM52.5 8.7V15H51.6V8.7H49.6V7.8H54.5V8.7H52.5ZM58.6 15H57.7V7.8H58.6V15ZM62.5 8.7V15H61.6V8.7H59.6V7.8H64.5V8.7H62.5ZM74.5 11.4C74.5 12.4 74.1 13.3 73.4 14C72.7 14.8 71.8 15.1 70.8 15.1C69.8 15.1 68.9 14.8 68.2 14C67.5 13.3 67.1 12.4 67.1 11.4C67.1 10.3 67.5 9.4 68.2 8.7C68.9 8 69.8 7.6 70.8 7.6C71.8 7.6 72.7 8 73.4 8.7C74.1 9.4 74.5 10.3 74.5 11.4ZM68.1 11.4C68.1 12.2 68.3 12.9 68.8 13.4C69.4 14 70 14.2 70.8 14.2C71.6 14.2 72.2 14 72.7 13.4C73.3 12.9 73.5 12.2 73.5 11.4C73.5 10.5 73.3 9.9 72.7 9.3C72.2 8.8 71.6 8.5 70.8 8.5C70 8.5 69.4 8.8 68.8 9.3C68.3 9.9 68.1 10.5 68.1 11.4ZM76.5 15H75.6V7.8H76.7L80.2 13.4H80.2L80.2 12V7.8H81.1V15H80.1L76.5 9.1H76.4L76.5 10.5V15Z" fill="white"></path>
                <path d="M93.5 31.4H95.1V20.3H93.5V31.4ZM108.1 24.3L106.3 29.1H106.2L104.3 24.3H102.5L105.4 31L103.8 34.7H105.5L110 24.3H108.1ZM98.9 30.1C98.4 30.1 97.6 29.8 97.6 29.2C97.6 28.3 98.6 28 99.4 28C100.1 28 100.4 28.2 100.8 28.4C100.7 29.4 99.8 30.1 98.9 30.1ZM99.1 24.1C97.9 24.1 96.7 24.6 96.2 25.8L97.6 26.4C97.9 25.8 98.5 25.6 99.1 25.6C100 25.6 100.8 26.1 100.8 27V27.1C100.5 26.9 99.9 26.7 99.1 26.7C97.6 26.7 96 27.5 96 29.1C96 30.6 97.3 31.6 98.7 31.6C99.8 31.6 100.4 31.1 100.8 30.5H100.8V31.3H102.4V27.1C102.4 25.2 101 24.1 99.1 24.1ZM89 25.7H86.7V21.9H89C90.2 21.9 90.9 22.9 90.9 23.8C90.9 24.6 90.2 25.7 89 25.7ZM89 20.3H85.1V31.4H86.7V27.2H89C90.8 27.2 92.6 25.9 92.6 23.8C92.6 21.7 90.8 20.3 89 20.3ZM67.7 30.1C66.6 30.1 65.6 29.2 65.6 27.9C65.6 26.5 66.6 25.6 67.7 25.6C68.8 25.6 69.7 26.5 69.7 27.9C69.7 29.2 68.8 30.1 67.7 30.1ZM69.6 24.9H69.5C69.2 24.5 68.5 24.1 67.6 24.1C65.7 24.1 64 25.7 64 27.9C64 30 65.7 31.6 67.6 31.6C68.5 31.6 69.2 31.2 69.5 30.7H69.6V31.3C69.6 32.7 68.8 33.5 67.6 33.5C66.6 33.5 66 32.8 65.7 32.1L64.3 32.7C64.7 33.7 65.8 35 67.6 35C69.5 35 71.1 33.8 71.1 31V24.3H69.6V24.9ZM72.3 31.4H73.9V20.3H72.3V31.4ZM76.3 27.7C76.2 26.3 77.4 25.5 78.2 25.5C78.9 25.5 79.4 25.9 79.6 26.3L76.3 27.7ZM81.3 26.5C81 25.6 80.1 24.1 78.2 24.1C76.3 24.1 74.7 25.6 74.7 27.8C74.7 29.9 76.2 31.6 78.4 31.6C80.1 31.6 81 30.5 81.4 29.9L80.2 29.1C79.8 29.7 79.2 30.1 78.4 30.1C77.5 30.1 76.9 29.7 76.6 29L81.5 26.9L81.3 26.5ZM41.8 25.2V26.8H45.6C45.5 27.7 45.2 28.4 44.7 28.8C44.2 29.4 43.3 30 41.8 30C39.5 30 37.7 28.1 37.7 25.8C37.7 23.4 39.5 21.5 41.8 21.5C43.1 21.5 44 22 44.6 22.7L45.8 21.6C44.8 20.6 43.6 20 41.8 20C38.6 20 36 22.6 36 25.8C36 29 38.6 31.6 41.8 31.6C43.5 31.6 44.8 31 45.8 30C46.9 28.9 47.2 27.4 47.2 26.2C47.2 25.9 47.2 25.5 47.1 25.2H41.8ZM51.5 30.1C50.3 30.1 49.4 29.2 49.4 27.8C49.4 26.5 50.3 25.6 51.5 25.6C52.6 25.6 53.6 26.5 53.6 27.8C53.6 29.2 52.6 30.1 51.5 30.1ZM51.5 24.1C49.4 24.1 47.7 25.7 47.7 27.8C47.7 30 49.4 31.6 51.5 31.6C53.5 31.6 55.2 30 55.2 27.8C55.2 25.7 53.5 24.1 51.5 24.1ZM59.6 30.1C58.5 30.1 57.5 29.2 57.5 27.8C57.5 26.5 58.5 25.6 59.6 25.6C60.7 25.6 61.7 26.5 61.7 27.8C61.7 29.2 60.7 30.1 59.6 30.1ZM59.6 24.1C57.5 24.1 55.9 25.7 55.9 27.8C55.9 30 57.5 31.6 59.6 31.6C61.7 31.6 63.3 30 63.3 27.8C63.3 25.7 61.7 24.1 59.6 24.1Z" fill="white"></path>
            </svg>
        </a>
    )
}