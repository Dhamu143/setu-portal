
import { ShieldCheck, Scale, FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-primary-100 text-lg">Last Updated: December 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 max-w-4xl -mt-8 pb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          
          <div className="prose prose-slate max-w-none">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 mb-4">
              <FileText className="text-primary-600" /> 1. Introduction
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Welcome to <strong>Artisan App</strong>. By accessing or using our mobile application and website, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service. This platform serves as a marketplace connecting Users (customers) with independent Service Providers (artisans).
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 mb-4">
              <ShieldCheck className="text-primary-600" /> 2. User Responsibilities
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-8">
              <li>You must provide accurate and complete information when creating an account.</li>
              <li>You are responsible for maintaining the confidentiality of your account and password.</li>
              <li>You agree not to use the platform for any illegal or unauthorized purpose.</li>
              <li>You must treat all artisans with respect and provide a safe working environment.</li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 mb-4">
              <Scale className="text-primary-600" /> 3. For Service Providers (Artisans)
            </h2>
            <p className="text-slate-600 mb-4">
              By registering as an Artisan, you represent and warrant that:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-8">
              <li>You have the legal right to work and provide services in your jurisdiction.</li>
              <li>You hold all necessary licenses, certifications, and insurance required for your trade.</li>
              <li>You will provide services with a high standard of quality and professionalism.</li>
              <li>You acknowledge that you are an independent contractor, not an employee of Artisan App.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Payments & Fees</h2>
            <p className="text-slate-600 mb-8">
              Payments are processed securely through our third-party payment providers. We may charge a platform fee or commission on completed jobs. All fees are transparently displayed before booking. Cancellations made within 24 hours of a scheduled job may incur a cancellation fee.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
            <p className="text-slate-600 mb-8">
              Artisan App acts solely as a connector. We are not liable for any damages, injuries, or losses arising from the services provided by independent artisans. While we vet professionals, the final engagement is between the User and the Provider.
            </p>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
              <h3 className="font-bold text-slate-900 mb-2">Contact Us</h3>
              <p className="text-slate-600">
                If you have any questions about these Terms, please contact us at <a href="mailto:support@artisanapp.com" className="text-primary-600 hover:underline">support@artisanapp.com</a>.
              </p>
            </div>
          </div>

        </div>
      </div>
   
    </main>
  );
}