'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { getRandomWebsite, getCategories, categoryLabels, categoryIcons, type WebsiteCategory, type Website } from '@/data/websites';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface VisitRecord {
  id: string;
  url: string;
  name: string;
  category: WebsiteCategory;
  timestamp: string;
}

interface FloatingBall {
  id: string;
  width: number;
  height: number;
  left: number;
  top: number;
  animationDelay: number;
  animationDuration: number;
}

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const [lastVisit, setLastVisit] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<WebsiteCategory | 'all'>('all');
  const [showCategories, setShowCategories] = useState(false);
  const [visitHistory, setVisitHistory] = useState<VisitRecord[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [recentSite, setRecentSite] = useState<Website | null>(null);
  const [floatingBalls, setFloatingBalls] = useState<FloatingBall[]>([]);

  useEffect(() => {
    const savedCount = localStorage.getItem('clickCount');
    const savedLastVisit = localStorage.getItem('lastVisit');
    const savedHistory = localStorage.getItem('visitHistory');
    
    if (savedCount) setClickCount(parseInt(savedCount, 10));
    if (savedLastVisit) setLastVisit(savedLastVisit);
    if (savedHistory) setVisitHistory(JSON.parse(savedHistory));
  }, []);

  useEffect(() => {
    const balls = Array.from({ length: 8 }, () => ({
      id: Math.random().toString(36).substr(2, 9),
      width: Math.random() * 80 + 40,
      height: Math.random() * 80 + 40,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: Math.random() * 3 + 3,
    }));
    setFloatingBalls(balls);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (isAnimating) return;

    setIsAnimating(true);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple: Ripple = {
      id: Date.now(),
      x,
      y,
    };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    setTimeout(() => {
      const category = selectedCategory === 'all' ? undefined : selectedCategory;
      const randomSite = getRandomWebsite(category);
      setRecentSite(randomSite);
      
      setClickCount((prev) => {
        const newCount = prev + 1;
        localStorage.setItem('clickCount', newCount.toString());
        return newCount;
      });
      
      const now = new Date();
      const timestamp = now.toLocaleString();
      localStorage.setItem('lastVisit', timestamp);
      setLastVisit(timestamp);

      const newVisit: VisitRecord = {
        id: Date.now().toString(),
        url: randomSite.url,
        name: randomSite.name,
        category: randomSite.category,
        timestamp: now.toISOString(),
      };
      
      const updatedHistory = [newVisit, ...visitHistory].slice(0, 10);
      setVisitHistory(updatedHistory);
      localStorage.setItem('visitHistory', JSON.stringify(updatedHistory));

      window.open(randomSite.url, '_blank');
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, selectedCategory, visitHistory]);

  const clearHistory = () => {
    localStorage.removeItem('visitHistory');
    setVisitHistory([]);
  };

  const categories = getCategories();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingBalls.map((ball) => (
          <div
            key={ball.id}
            className="absolute rounded-full bg-primary-500/5 float-animation"
            style={{
              width: `${ball.width}px`,
              height: `${ball.height}px`,
              left: `${ball.left}%`,
              top: `${ball.top}%`,
              animationDelay: `${ball.animationDelay}s`,
              animationDuration: `${ball.animationDuration}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute top-4 right-4 flex items-center gap-4 z-20">
        <button
          onClick={() => setShowCategories(!showCategories)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            showCategories || selectedCategory !== 'all'
              ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
              : 'text-gray-400 hover:text-white hover:bg-white/10'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          Filter
        </button>
        <button
          onClick={() => setShowHistory(!showHistory)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            showHistory ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50' : 'text-gray-400 hover:text-white hover:bg-white/10'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          History ({visitHistory.length})
        </button>
        <Link
          href="/stats"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-300"
        >
          Stats
        </Link>
      </div>

      {showCategories && (
        <div className="absolute top-16 right-4 z-30 glass-effect p-4 rounded-2xl min-w-[200px]">
          <div className="text-sm text-gray-400 mb-3">Filter by category:</div>
          <div className="space-y-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                selectedCategory === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-300 hover:bg-white/10'
              }`}
            >
              <span>🎲</span>
              <span>All Categories</span>
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <span>{categoryIcons[category]}</span>
                <span>{categoryLabels[category]}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {showHistory && (
        <div className="absolute top-16 right-4 z-30 glass-effect p-4 rounded-2xl min-w-[280px] max-h-[400px] overflow-y-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-400">Recent Visits:</span>
            {visitHistory.length > 0 && (
              <button
                onClick={clearHistory}
                className="text-xs text-red-400 hover:text-red-300 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
          {visitHistory.length === 0 ? (
            <div className="text-sm text-gray-500 text-center py-4">
              No visit history yet.
            </div>
          ) : (
            <div className="space-y-2">
              {visitHistory.map((visit) => (
                <a
                  key={visit.id}
                  href={visit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-all group"
                >
                  <span className="text-sm">{categoryIcons[visit.category]}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white truncate group-hover:text-primary-300 transition-colors">
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
          )}
        </div>
      )}

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 mb-4 tracking-tight">
            Random Surprise
          </h1>
          <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
            Click the button and discover a random website.
            <br />
            <span className="text-primary-300">You never know what you'll find.</span>
          </p>
        </div>

        {selectedCategory !== 'all' && (
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 rounded-full">
            <span>{categoryIcons[selectedCategory]}</span>
            <span className="text-sm text-primary-300 font-medium">
              Filter: {categoryLabels[selectedCategory]}
            </span>
            <button
              onClick={() => setSelectedCategory('all')}
              className="ml-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        <div className="flex flex-col items-center">
          <button
            onClick={handleClick}
            disabled={isAnimating}
            className="group relative px-10 py-4 md:px-14 md:py-5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden disabled:cursor-not-allowed disabled:opacity-70"
          >
            {ripples.map((ripple) => (
              <span
                key={ripple.id}
                className="absolute rounded-full bg-white/30 ripple-effect"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: 20,
                  height: 20,
                  marginLeft: -10,
                  marginTop: -10,
                }}
              />
            ))}

            <span className="relative z-10 text-white font-black text-base md:text-lg tracking-widest">
              CLICK TO EXPLORE
            </span>
          </button>

          {recentSite && (
            <div className="mt-8 glass-effect px-6 py-4 rounded-2xl">
              <div className="text-sm text-gray-400 mb-1">Last visited:</div>
              <a
                href={recentSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-300 transition-colors"
              >
                <span className="font-semibold">{recentSite.name}</span>
                <svg className="inline w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <div className="glass-effect px-4 py-2 rounded-full">
            <span className="text-primary-400 font-semibold">{clickCount}</span>
            <span className="ml-1">adventures</span>
          </div>
          {lastVisit && (
            <div className="glass-effect px-4 py-2 rounded-full">
              <span className="text-purple-400 font-semibold">Last:</span>
              <span className="ml-1">{lastVisit}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}