import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-700 px-8 py-6",
      isScrolled ? "glass-nav py-4" : "bg-transparent"
    )}>
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-5 h-5 text-brand-ink" />
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-12 text-[9px] uppercase tracking-[0.4em] font-bold text-brand-ink">
          <a href="#" className="hover:text-brand-gold transition-colors">Collection</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Lookbook</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Editorial</a>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-xl md:text-2xl font-serif tracking-[0.2em] font-semibold text-brand-ink">
            BRENWOOD
          </h1>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 md:space-x-8 text-brand-ink">
          <button className="p-2 hover:text-brand-gold transition-colors hidden md:block">
            <Search className="w-4 h-4" />
          </button>
          <button className="p-2 hover:text-brand-gold transition-colors hidden md:block">
            <User className="w-4 h-4" />
          </button>
          <button className="p-2 hover:text-brand-gold transition-colors relative">
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-brand-gold rounded-full" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-paper z-[60] p-12 flex flex-col"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-serif tracking-widest">BRENWOOD</h2>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="mt-20 space-y-10">
              {['Collection', 'Lookbook', 'Editorial', 'About', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="block text-3xl font-serif hover:italic transition-all tracking-tight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
