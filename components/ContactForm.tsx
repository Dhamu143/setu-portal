"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Add your API logic here
    setTimeout(() => setStatus("success"), 1500); 
  };

  if (status === "success") {
    return (
      <div className="p-8 text-center bg-leaf/10 rounded-xl border border-leaf/20">
        <h3 className="text-xl font-bold text-leaf-800">Message Sent!</h3>
        <p className="mt-2 text-neutral-600">Thank you for reaching out. We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Name</label>
          <input required type="text" className="w-full p-2 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-saffron outline-none" placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input required type="email" className="w-full p-2 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-saffron outline-none" placeholder="email@example.com" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Subject</label>
        <select className="w-full p-2 rounded-lg border border-neutral-200 outline-none">
          <option>General Inquiry</option>
          <option>App Support</option>
          <option>Partnership</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Message</label>
        <textarea required rows={4} className="w-full p-2 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-saffron outline-none" placeholder="How can we help?"></textarea>
      </div>
      <button 
        disabled={status === "sending"}
        type="submit" 
        className="w-full py-3 bg-neutral-900 text-white rounded-lg font-medium hover:bg-saffron transition-colors"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}