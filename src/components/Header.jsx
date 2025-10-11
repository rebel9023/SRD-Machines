'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Products', href: '/products' },
    { name: 'Sitemap', href: '/sitemap' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Blog', href: '#' },
  ];

  const handleNavigation = (e, href) => {
    // Don't intercept hash links or external links
    if (href === '#' || href.startsWith('http')) return;
    
    e.preventDefault();
    setIsMenuOpen(false);
    
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      {/* Loading indicator */}
      {isPending && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E25770] via-pink-400 to-[#E25770] animate-pulse">
          <div className="h-full bg-[#E25770] animate-[shimmer_1s_ease-in-out_infinite]" 
               style={{
                 backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                 backgroundSize: '200% 100%',
                 animation: 'shimmer 1s ease-in-out infinite'
               }}
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3"
            onClick={(e) => handleNavigation(e, '/')}
          >
            <Image 
              src="/images/logo.png"
              alt="SRD Machines Logo"
              width={48}
              height={48}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  pathname === item.href
                    ? 'text-[#E25770]'
                    : 'text-gray-700 hover:text-[#E25770]'
                }`}
              >
                {item.name}
                {/* Active indicator */}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E25770] rounded-full" />
                )}
                {/* Hover indicator */}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E25770] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-gray-200">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className={`block px-4 py-2 rounded-md transition-all duration-200 ${
                    pathname === item.href
                      ? 'text-[#E25770] bg-gray-50 font-medium'
                      : 'text-gray-700 hover:text-[#E25770] hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <span className="inline-block w-1.5 h-1.5 bg-[#E25770] rounded-full ml-2" />
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;