import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://randomsurprise.com';

export const metadata: Metadata = {
  title: 'Your Adventure Stats - Track Your Browsing History',
  description: 'View your Random Surprise statistics including total clicks, visit history, and favorite categories. Track your web exploration journey with detailed browsing statistics.',
  keywords: [
    'browsing statistics',
    'website visit history',
    'personal browsing tracker',
    'random surprise stats',
    'click statistics',
    'web exploration tracker',
    'browsing history',
  ],
  openGraph: {
    title: 'Your Adventure Stats',
    description: 'View your Random Surprise statistics including total clicks and visit history.',
    url: `${BASE_URL}/stats`,
  },
  twitter: {
    title: 'Your Adventure Stats',
    description: 'View your Random Surprise statistics including total clicks and visit history.',
  },
};

export default function StatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}