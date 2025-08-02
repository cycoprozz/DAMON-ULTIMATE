import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pattern-overlay">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-red-500/10 to-green-500/10"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img className="h-12 w-auto mr-4 rounded-lg" src="/logo.webp" alt="Carib Life Media" />
              <div>
                <h3 className="text-xl font-bold display-font bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 bg-clip-text text-transparent">
                  Carib Life Media™
                </h3>
                <p className="text-sm text-gray-300">Authentic Caribbean Culture</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md font-medium">
              Premier full-service television production and media company dedicated to curating a rich tapestry of <span className="text-yellow-400 font-bold">Black cultural programming</span>.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com/cariblifemedia" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.013 7.794.058 7.659.103 7.524.148 7.405.232 7.286.317 7.182.429 7.094.555 7.006.681 6.935.823 6.881.98 6.826 1.137 6.79 1.309 6.774 1.494 6.758 1.679 6.75 1.874 6.75 2.08V21.92c0 .206.008.401.024.586.016.185.052.357.107.514.054.157.125.299.213.425.088.126.192.238.311.323.119.084.254.129.389.174.135.045.602.058 4.223.058s4.088-.013 4.223-.058c.135-.045.27-.09.389-.174.119-.085.223-.197.311-.323.088-.126.159-.268.213-.425.055-.157.091-.329.107-.514.016-.185.024-.38.024-.586V2.08c0-.206-.008-.401-.024-.586C17.71 1.309 17.674 1.137 17.619.98c-.054-.157-.125-.299-.213-.425-.088-.126-.192-.238-.311-.323-.119-.084-.254-.129-.389-.174C16.571.013 16.104 0 12.017 0zM12 5.838A6.162 6.162 0 105.838 12 6.162 6.162 0 0012 5.838zM12 16A4 4 0 1112 8a4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@cariblifemedia" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                <span className="sr-only">YouTube</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://facebook.com/cariblifemedia" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com/cariblifemedia" className="text-gray-400 hover:text-blue-300 transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 display-font text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium">
                  Our Productions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Productions */}
          <div>
            <h3 className="text-lg font-bold mb-4 display-font text-red-400">Our Shows</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">
                  🏝️ Carib Life ATL
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium">
                  🎶 Countdown
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium">
                  ⭐ Exclusives
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gradient-to-r from-yellow-400/20 via-red-500/20 to-green-500/20 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
              <Link href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm font-medium">
                Terms of Service
              </Link>
              <span className="text-gray-400 text-sm">|</span>
              <span className="text-gray-400 text-sm font-medium">
                📧 info@cariblifemedia.com
              </span>
              <span className="text-gray-400 text-sm font-medium">
                📞 240-244-9427
              </span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400 mb-2">
                Founded in 2019 by <span className="text-yellow-400 font-bold">Damon "Bware" Vanzant</span>
              </p>
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Carib Life Media™. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
