'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { client } = useTheme();
  const { navigation, business } = client;
  const pathname = usePathname();

  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-[0_2px_24px_rgba(0,0,0,0.07)]' : ''
      }`}
    >
      <div className="flex items-center justify-between px-6 sm:px-10 lg:px-14 py-3">
        {/* Logo — shrinks on scroll */}
        <Link href="/" className="flex-shrink-0">
          <div
            className={`relative transition-all duration-300 ${
              isScrolled ? 'h-[4.5rem] w-[220px]' : 'h-24 w-[300px]'
            }`}
          >
            <Image
              src={business.logo}
              alt={business.name}
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav — right aligned */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base font-bold tracking-widest uppercase transition-colors ${
                pathname === item.href
                  ? 'text-prussian'
                  : 'text-ink hover:text-[#B21F36]'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-white px-6 py-2.5 rounded-lg text-base font-bold tracking-widest uppercase transition-all"
            style={{ backgroundColor: '#B21F36' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#8e1828'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#B21F36'}
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden p-2 text-ink"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-prussian flex flex-col px-8 pt-8 pb-12"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="flex items-center justify-between mb-14">
              <div className="relative h-10 w-[120px]">
                <Image
                  src={business.logo}
                  alt={business.name}
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col gap-8 flex-1">
              {navigation.main.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white text-2xl font-semibold hover:text-sky transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-block bg-sky text-white px-8 py-3 rounded-lg font-semibold text-lg"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
