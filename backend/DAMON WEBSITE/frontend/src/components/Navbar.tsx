'use client';

import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { navigation } from '@/config/navigation';
import { UserRole } from '@prisma/client';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // TODO: Replace with actual auth state
  const userRole: UserRole = UserRole.CLIENT;

  const filteredNavigation = navigation.filter(
    item => !item.role || item.role.includes(userRole)
  );

  return (
    <header className="bg-gradient-to-r from-yellow-50 via-red-50 to-green-50 backdrop-blur-md border-b-2 border-gradient-to-r from-yellow-400 via-red-500 to-green-500">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="sr-only">Carib Life Media</span>
            <div className="relative">
              <img className="h-14 w-auto transition-transform duration-300 group-hover:scale-110 rounded-lg" src="/logo.webp" alt="Carib Life Media" />
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-red-100 transition-all duration-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {filteredNavigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="relative text-lg font-bold leading-6 text-gray-900 hover:text-transparent hover:bg-gradient-to-r hover:from-yellow-600 hover:via-red-600 hover:to-green-600 hover:bg-clip-text transition-all duration-300 group"
            >
              <span className="relative z-10">{item.title}</span>
              <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-6">
          {/* Glowing Contact Button */}
          <Link href="/contact" className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 animate-pulse"></div>
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300">
              <div className="absolute inset-1 rounded-full bg-white/10 backdrop-blur-sm"></div>
              <span className="relative text-white font-bold text-sm z-10">📞</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 via-red-400 to-green-400 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Contact Us
            </div>
          </Link>
          
          <Link href="/auth/signin" className="relative inline-flex items-center rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 px-6 py-3 text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
            <span className="relative z-10">Log in</span>
            <span aria-hidden="true" className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 via-red-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </nav>
      
      {/* Social Media Strip */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-yellow-400/30">
        <div className="flex animate-slide-left">
          <div className="flex items-center space-x-8 px-8 py-2 whitespace-nowrap">
            <span className="text-yellow-400 font-bold text-sm">🏝️ Follow us on social media:</span>
            <a href="https://instagram.com/cariblifemedia" className="flex items-center space-x-2 text-white hover:text-pink-400 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.013 7.794.058 7.659.103 7.524.148 7.405.232 7.286.317 7.182.429 7.094.555 7.006.681 6.935.823 6.881.98 6.826 1.137 6.79 1.309 6.774 1.494 6.758 1.679 6.75 1.874 6.75 2.08V21.92c0 .206.008.401.024.586.016.185.052.357.107.514.054.157.125.299.213.425.088.126.192.238.311.323.119.084.254.129.389.174.135.045.602.058 4.223.058s4.088-.013 4.223-.058c.135-.045.27-.09.389-.174.119-.085.223-.197.311-.323.088-.126.159-.268.213-.425.055-.157.091-.329.107-.514.016-.185.024-.38.024-.586V2.08c0-.206-.008-.401-.024-.586C17.71 1.309 17.674 1.137 17.619.98c-.054-.157-.125-.299-.213-.425-.088-.126-.192-.238-.311-.323-.119-.084-.254-.129-.389-.174C16.571.013 16.104 0 12.017 0zM12 5.838A6.162 6.162 0 105.838 12 6.162 6.162 0 0012 5.838zM12 16A4 4 0 1112 8a4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">@cariblifemedia</span>
            </a>
            <a href="https://www.youtube.com/@cariblifemedia" className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-sm font-medium">Carib Life Media</span>
            </a>
            <a href="https://facebook.com/cariblifemedia" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Carib Life Media</span>
            </a>
            <a href="https://twitter.com/cariblifemedia" className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
              <span className="text-sm font-medium">@cariblifemedia</span>
            </a>
            <span className="text-yellow-400 font-bold text-sm">🎬 Caribbean Culture • 📺 Black Excellence • 🏝️ Authentic Stories</span>
          </div>
          {/* Duplicate for seamless scrolling */}
          <div className="flex items-center space-x-8 px-8 py-2 whitespace-nowrap">
            <span className="text-yellow-400 font-bold text-sm">🏝️ Follow us on social media:</span>
            <a href="https://instagram.com/cariblifemedia" className="flex items-center space-x-2 text-white hover:text-pink-400 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.013 7.794.058 7.659.103 7.524.148 7.405.232 7.286.317 7.182.429 7.094.555 7.006.681 6.935.823 6.881.98 6.826 1.137 6.79 1.309 6.774 1.494 6.758 1.679 6.75 1.874 6.75 2.08V21.92c0 .206.008.401.024.586.016.185.052.357.107.514.054.157.125.299.213.425.088.126.192.238.311.323.119.084.254.129.389.174.135.045.602.058 4.223.058s4.088-.013 4.223-.058c.135-.045.27-.09.389-.174.119-.085.223-.197.311-.323.088-.126.159-.268.213-.425.055-.157.091-.329.107-.514.016-.185.024-.38.024-.586V2.08c0-.206-.008-.401-.024-.586C17.71 1.309 17.674 1.137 17.619.98c-.054-.157-.125-.299-.213-.425-.088-.126-.192-.238-.311-.323-.119-.084-.254-.129-.389-.174C16.571.013 16.104 0 12.017 0zM12 5.838A6.162 6.162 0 105.838 12 6.162 6.162 0 0012 5.838zM12 16A4 4 0 1112 8a4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">@cariblifemedia</span>
            </a>
            <a href="https://www.youtube.com/@cariblifemedia" className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-sm font-medium">Carib Life Media</span>
            </a>
            <a href="https://facebook.com/cariblifemedia" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Carib Life Media</span>
            </a>
            <a href="https://twitter.com/cariblifemedia" className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
              <span className="text-sm font-medium">@cariblifemedia</span>
            </a>
            <span className="text-yellow-400 font-bold text-sm">🎬 Caribbean Culture • 📺 Black Excellence • 🏝️ Authentic Stories</span>
          </div>
        </div>
      </div>
      
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-br from-yellow-50 via-red-50 to-green-50 px-6 py-6 sm:max-w-sm border-l-4 border-gradient-to-b from-yellow-400 via-red-500 to-green-500">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 group">
              <span className="sr-only">Carib Life Media</span>
              <div className="relative">
                <img className="h-12 w-auto transition-transform duration-300 group-hover:scale-110 rounded-lg" src="/logo.webp" alt="Carib Life Media" />
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-full p-2.5 text-gray-800 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-red-100 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gradient-to-r from-yellow-400 via-red-500 to-green-500/20">
              <div className="space-y-2 py-6">
                {filteredNavigation.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="-mx-3 block rounded-xl px-4 py-3 text-lg font-bold leading-7 text-gray-900 hover:bg-gradient-to-r hover:from-yellow-100 hover:via-red-100 hover:to-green-100 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-600 hover:via-red-600 hover:to-green-600 transition-all duration-300"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/auth/signin"
                  className="-mx-3 block rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 px-4 py-3 text-lg font-bold leading-7 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
