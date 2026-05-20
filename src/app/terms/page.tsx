import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.random-surprise.online';

export const metadata: Metadata = {
  title: 'Terms of Service - User Agreement and Terms',
  description: 'Read our terms of service and user agreement. By using Random Surprise, you agree to our terms and conditions. Learn about our service rules, intellectual property rights, and user responsibilities.',
  keywords: [
    'terms of service',
    'terms and conditions',
    'user agreement',
    'website terms',
    'service terms',
    'user responsibilities',
    'terms of use',
    'legal terms',
  ],
  openGraph: {
    title: 'Terms of Service - User Agreement',
    description: 'Read our terms of service and user agreement.',
    url: `${BASE_URL}/terms`,
  },
  twitter: {
    title: 'Terms of Service',
    description: 'Read our terms of service and user agreement.',
  },
};

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 mb-6">
            Terms of Service
          </h1>

          <div className="glass-effect p-8 rounded-2xl text-left space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By using Random Surprise ("we", "us", "our") website and services, you agree to 
                be bound by these Terms of Service. If you do not agree with these terms, please 
                do not use our service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Use of Service</h2>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  • You must be at least 13 years old to use our service.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  • You agree to use our service for lawful purposes only.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  • You agree not to misuse or interfere with our service.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  • You are responsible for your interactions with external websites accessed through our service.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">External Links</h2>
              <p className="text-gray-300 leading-relaxed">
                Our service provides links to external websites. These links are provided for your 
                convenience and do not imply endorsement. We are not responsible for the content 
                or practices of external websites.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                All content on Random Surprise, including but not limited to text, graphics, logos, 
                and software, is the property of Random Surprise or its licensors and is protected 
                by intellectual property laws. You may not reproduce, distribute, or modify any 
                content without our permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Disclaimer of Warranties</h2>
              <p className="text-gray-300 leading-relaxed">
                Random Surprise is provided "as is" and "as available" without warranties of any kind, 
                express or implied. We do not warrant that our service will be uninterrupted or error-free.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                Random Surprise shall not be liable for any direct, indirect, incidental, consequential, 
                or punitive damages arising from your use of our service or access to external websites.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Indemnification</h2>
              <p className="text-gray-300 leading-relaxed">
                You agree to indemnify and hold harmless Random Surprise, its owners, operators, 
                and affiliates from any claims, liabilities, damages, costs, or expenses arising 
                from your use of our service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update these Terms of Service from time to time. We will notify you of any changes 
                by posting the new terms on this page. Your continued use of our service after any changes 
                constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                We may terminate or suspend your access to our service at any time, without notice, 
                for any reason, including but not limited to violation of these terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the 
                laws of the State of California, United States, without regard to its conflict of law principles.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at 
                support@random-surprise.online.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}