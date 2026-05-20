'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { categoryIcons, categoryLabels, type WebsiteCategory } from '@/data/websites';

interface VisitRecord {
  id: string;
  url: string;
  name: string;
  category: WebsiteCategory;
  timestamp: string;
}

export default function Stats() {
  const [clickCount, setClickCount] = useState(0);
  const [visitHistory, setVisitHistory] = useState<VisitRecord[]>([]);

  useEffect(() => {
    const savedCount = localStorage.getItem('clickCount');
    const savedHistory = localStorage.getItem('visitHistory');
    
    if (savedCount) setClickCount(parseInt(savedCount, 10));
    if (savedHistory) setVisitHistory(JSON.parse(savedHistory));
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('clickCount');
    localStorage.removeItem('visitHistory');
    localStorage.removeItem('lastVisit');
    setClickCount(0);
    setVisitHistory([]);
  };

  const getCategoryStats = () => {
    const stats: Record<WebsiteCategory, number> = {} as Record<WebsiteCategory, number>;
    visitHistory.forEach(visit => {
      stats[visit.category] = (stats[visit.category] || 0) + 1;
    });
    return stats;
  };

  const categoryStats = getCategoryStats();
  const topCategory = Object.entries(categoryStats).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 mb-6">
          Your Adventure Stats
        </h1>

        <div className="glass-effect p-8 rounded-3xl mb-8">
          <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400 mb-4">
            {clickCount}
          </div>
          <p className="text-gray-300 text-lg">Total adventures started</p>
        </div>

        {topCategory && (
          <div className="glass-effect p-6 rounded-2xl mb-8">
            <h2 className="text-lg font-semibold text-white mb-4">Favorite Category</h2>
            <div className="flex items-center justify-center gap-3">
              <span className="text-4xl">{categoryIcons[topCategory[0] as WebsiteCategory]}</span>
              <div className="text-left">
                <div className="text-white font-semibold">
                  {categoryLabels[topCategory[0] as WebsiteCategory]}
                </div>
                <div className="text-gray-400 text-sm">
                  Visited {topCategory[1]} time{topCategory[1] > 1 ? 's' : ''}
                </div>
              </div>
            </div>
          </div>
        )}

        {visitHistory.length > 0 && (
          <div className="glass-effect p-6 rounded-2xl mb-8">
            <h2 className="text-lg font-semibold text-white mb-4">Recent Adventures</h2>
            <div className="space-y-2 max-h-[300px] overflow-y-auto">
              {visitHistory.slice(-10).reverse().map((visit, index) => (
                <a
                  key={visit.id}
                  href={visit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-all group"
                >
                  <span className="text-lg">{categoryIcons[visit.category]}</span>
                  <div className="flex-1 text-left">
                    <div className="text-white font-medium group-hover:text-primary-300 transition-colors">
                      {visit.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(visit.timestamp).toLocaleString()}
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        )}

        {visitHistory.length === 0 && (
          <div className="glass-effect p-8 rounded-2xl mb-8">
            <div className="text-4xl mb-4">🎒</div>
            <p className="text-gray-400">No adventures yet! Click the button on the home page to start exploring.</p>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Back to Adventure
          </Link>
          
          {clickCount > 0 && (
            <button
              onClick={clearHistory}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full text-white font-semibold transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear Stats
            </button>
          )}
        </div>
      </div>
    </div>
  );
}