import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.random-surprise.online';

export const metadata: Metadata = {
  title: 'Disclaimer - Third-Party Links and Content Disclaimer',
  description: 'Read our complete disclaimer regarding third-party website links. Random Surprise provides links to external websites and is not responsible for the content, accuracy, or reliability of external sites.',
  keywords: [
    'disclaimer',
    'third-party links disclaimer',
    'external website disclaimer',
    'content disclaimer',
    'website liability',
    'external links policy',
    'link disclaimer',
  ],
  openGraph: {
    title: 'Disclaimer - Third-Party Links',
    description: 'Read our complete disclaimer regarding third-party website links.',
    url: `${BASE_URL}/disclaimer`,
  },
  twitter: {
    title: 'Disclaimer',
    description: 'Read our complete disclaimer regarding third-party website links.',
  },
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 mb-6">
            Disclaimer
          </h1>

          <div className="glass-effect p-8 rounded-2xl text-left space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">External Website Links</h2>
              <p className="text-gray-300 leading-relaxed">
                Random Surprise provides links to external websites as a service to our users. 
                These links are for informational purposes only and do not constitute an endorsement 
                or recommendation of the content, products, or services offered on those websites.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Third-Party Content Responsibility</h2>
              <p className="text-gray-300 leading-relaxed">
                Random Surprise is not responsible for the content, accuracy, completeness, 
                timeliness, or reliability of any information provided on external websites. 
                We do not endorse or guarantee the quality, safety, or legality of any content 
                found on third-party sites.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">User Discretion Advised</h2>
              <p className="text-gray-300 leading-relaxed">
                Users access external websites at their own risk. Random Surprise encourages 
                users to exercise caution and discretion when visiting external sites. 
                We recommend reviewing the privacy policies and terms of service of any 
                third-party website before providing personal information or engaging in 
                any transactions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Changes to External Content</h2>
              <p className="text-gray-300 leading-relaxed">
                External websites may change their content, policies, or availability at any time 
                without notice. Random Surprise makes reasonable efforts to ensure that all 
                linked websites are reputable and safe, but we cannot guarantee that links 
                will remain active or that content will remain appropriate.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                In no event shall Random Surprise be liable for any damages, losses, or harm 
                arising from the use of or reliance on external websites accessed through our 
                service. This includes, but is not limited to, direct, indirect, incidental, 
                consequential, or punitive damages.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Indemnification</h2>
              <p className="text-gray-300 leading-relaxed">
                Users agree to indemnify and hold harmless Random Surprise, its owners, 
                operators, and affiliates from any claims, liabilities, damages, costs, or 
                expenses arising from their use of external websites accessed through our service.
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