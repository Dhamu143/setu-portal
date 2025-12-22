import { Lock, Eye, MapPin } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-400 text-lg">Effective Date: December 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 max-w-4xl -mt-8 pb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              At <strong>Artisan App</strong>, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our mobile application and website to connect with service professionals.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 mb-4">
              <Eye className="text-blue-600" /> 1. Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-slate-600 mb-8">
              <li><strong>Personal Identity:</strong> Name, email address, phone number, and profile picture.</li>
              <li><strong>Location Data:</strong> We collect precise geolocation data to connect you with nearby artisans or to help artisans find your service location.</li>
              <li><strong>Transaction Data:</strong> Details about payments, service history, and bookings.</li>
              <li><strong>Device Information:</strong> IP address, device type, and operating system for security and optimization.</li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 mb-4">
              <MapPin className="text-blue-600" /> 2. How We Use Your Location
            </h2>
            <p className="text-slate-600 mb-8">
              As a field service platform, location is core to our functionality. We use your location to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-8">
              <li>Show you plumbers, electricians, and technicians in your immediate vicinity.</li>
              <li>Calculate accurate travel fees (if applicable).</li>
              <li>Allow artisans to navigate to your service address efficiently.</li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 mb-4">
              <Lock className="text-blue-600" /> 3. Data Sharing & Security
            </h2>
            <p className="text-slate-600 mb-4">
              We do not sell your personal data. We only share information in the following limited circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-8">
              <li><strong>With Artisans:</strong> Your address and contact info are shared only after you confirm a booking.</li>
              <li><strong>Service Providers:</strong> Payment processors (e.g., Stripe, Razorpay) and cloud hosting services.</li>
              <li><strong>Legal Requirements:</strong> If required by law or to protect our rights.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Your Rights</h2>
            <p className="text-slate-600 mb-8">
              You have the right to access, correct, or delete your personal data. You can manage your preferences within the app settings or contact our support team to request account deletion.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
              <h3 className="font-bold text-slate-900 mb-2">Privacy Officer</h3>
              <p className="text-slate-600">
                For privacy-related concerns, please reach out to our Data Protection Officer at <a href="mailto:privacy@artisanapp.com" className="text-blue-600 hover:underline">privacy@artisanapp.com</a>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}