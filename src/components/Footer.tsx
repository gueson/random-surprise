import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bottom-0 w-full py-8 border-t border-white/10 mt-auto">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <Link
            href="/disclaimer"
            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
          >
            Disclaimer
          </Link>
          <Link
            href="/privacy"
            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
          >
            Terms of Service
          </Link>
          <Link
            href="/about"
            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
          >
            About
          </Link>
        </div>
        
        <div className="text-gray-500 text-xs space-y-2">
          <p>
            © 2024 Random Surprise. All rights reserved.
          </p>
          <p className="max-w-md mx-auto">
            Random Surprise is not responsible for the content of external websites. 
            All external links open in a new window.
          </p>
        </div>
      </div>
    </footer>
  );
}