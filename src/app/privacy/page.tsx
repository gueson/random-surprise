import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://randomsurprise.com';

export const metadata: Metadata = {
  title: 'Privacy Policy - Data Protection and Privacy Practices',
  description: 'Read our comprehensive privacy policy. Learn how Random Surprise collects, uses, and protects your data. We are committed to GDPR compliance, CCPA compliance, and transparent data practices.',
  keywords: [
    'privacy policy',
    'data protection',
    'cookie policy',
    'privacy practices',
    'data collection',
    'GDPR privacy',
    'CCPA privacy',
    'user privacy',
    'data security',
    'privacy rights',
  ],
  openGraph: {
    title: 'Privacy Policy - Data Protection',
    description: 'Read our comprehensive privacy policy. Learn how we collect, use, and protect your data.',
    url: `${BASE_URL}/privacy`,
  },
  twitter: {
    title: 'Privacy Policy',
    description: 'Read our comprehensive privacy policy.',
  },
};

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 mb-6">
            Privacy Policy
          </h1>

          <div className="glass-effect p-8 rounded-2xl text-left space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Random Surprise ("we", "us", "our") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your personal 
                information when you use our website and services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  <strong>Local Storage Data:</strong> We use browser local storage to store 
                  non-identifiable information such as your click count, visit history, and 
                  last visit timestamp. This data is stored locally on your device and is not 
                  transmitted to our servers.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Usage Data:</strong> We may collect anonymous usage statistics to 
                  improve our service. This data does not include personal identifiers.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  • To provide and maintain our service
                </p>
                <p className="text-gray-300 leading-relaxed">
                  • To improve user experience
                </p>
                <p className="text-gray-300 leading-relaxed">
                  • To track user interactions (anonymously)
                </p>
                <p className="text-gray-300 leading-relaxed">
                  • To personalize content and recommendations
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Data Storage</h2>
              <p className="text-gray-300 leading-relaxed">
                All user-specific data is stored locally on your device using browser local storage. 
                We do not store personal data on our servers. You can clear this data at any time 
                by clearing your browser's local storage or using the "Clear Stats" feature on our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may use third-party services such as Google Analytics or advertising 
                platforms. These services may collect information about your use of our website 
                through cookies and other tracking technologies. Please review their privacy policies 
                for more information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Cookies</h2>
              <p className="text-gray-300 leading-relaxed">
                We use cookies to enhance your experience on our website. You can control cookies 
                through your browser settings. Disabling cookies may affect the functionality of our service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Your Rights</h2>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  <strong>Access:</strong> You can access the data stored in your browser's local storage.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Deletion:</strong> You can delete your data at any time by clearing your browser 
                  storage or using our "Clear Stats" feature.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Opt-Out:</strong> You can opt out of analytics tracking by disabling cookies in your browser.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our service is not intended for children under the age of 13. We do not knowingly 
                collect personal information from children under 13. If we become aware that we have 
                collected such information, we will take steps to delete it.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page. You are advised to review this Privacy 
                Policy periodically for any changes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at 
                privacy@randomsurprise.com.
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