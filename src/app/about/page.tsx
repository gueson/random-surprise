import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://randomsurprise.com';

export const metadata: Metadata = {
  title: 'About Random Surprise - Learn About Our Curation Process',
  description: 'Learn about Random Surprise and how we curate safe, interesting websites for you to discover. Explore our mission, safety practices, and commitment to quality web content.',
  keywords: [
    'about random website',
    'website curation',
    'safe web exploration',
    'curated links',
    'random surprise about',
    'how we curate websites',
    'website safety',
    'curated content platform',
  ],
  openGraph: {
    title: 'About Random Surprise - Learn About Our Curation Process',
    description: 'Learn about Random Surprise and how we curate safe, interesting websites for you to discover.',
    url: `${BASE_URL}/about`,
  },
  twitter: {
    title: 'About Random Surprise',
    description: 'Learn about Random Surprise and how we curate safe, interesting websites for you to discover.',
  },
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 mb-6">
          About Random Surprise
        </h1>
        
        <div className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            Random Surprise is your gateway to the unexplored corners of the internet. In a world where algorithms dictate what you see, we bring back the joy of serendipitous discovery.
          </p>
          
          <p className="text-lg leading-relaxed">
            With just one click, you'll be transported to a random website from our curated collection. Whether it's a quirky art project, a fascinating blog, or an interactive game, every click is a new adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="glass-effect p-6 rounded-2xl">
            <div className="text-4xl mb-4">🔮</div>
            <h2 className="text-lg font-semibold text-white mb-2">Curated Content</h2>
            <p className="text-sm text-gray-400">All websites are carefully reviewed and approved to ensure quality and safety.</p>
          </div>
          
          <div className="glass-effect p-6 rounded-2xl">
            <div className="text-4xl mb-4">⚡</div>
            <h2 className="text-lg font-semibold text-white mb-2">Instant Fun</h2>
            <p className="text-sm text-gray-400">No sign-ups, no ads, just click and explore.</p>
          </div>
          
          <div className="glass-effect p-6 rounded-2xl">
            <div className="text-4xl mb-4">🌍</div>
            <h2 className="text-lg font-semibold text-white mb-2">Global Discovery</h2>
            <p className="text-sm text-gray-400">Discover websites from all around the world.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="glass-effect p-6 rounded-2xl">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-lg font-semibold text-white mb-2">Smart Filtering</h2>
            <p className="text-sm text-gray-400">Filter websites by category - Fun, Tech, News, Comics, and more!</p>
          </div>
          
          <div className="glass-effect p-6 rounded-2xl">
            <div className="text-4xl mb-4">📜</div>
            <h2 className="text-lg font-semibold text-white mb-2">Visit History</h2>
            <p className="text-sm text-gray-400">Keep track of your adventures and revisit favorite sites.</p>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-2xl mt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Safety First</h2>
          <div className="space-y-3 text-sm text-gray-400">
            <p>• All websites are manually reviewed by our team before being added to the collection</p>
            <p>• We maintain an ongoing review process to ensure content remains appropriate</p>
            <p>• Users can report inappropriate content for immediate review</p>
            <p>• Websites open in a new tab, keeping you safe on our site</p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Back to Adventure
          </Link>
        </div>
      </div>
    </div>
  );
}