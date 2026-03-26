import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductCarouselProps {
  products: Product[];
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsToShow = 5;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 1000); // 1-second interval as requested
    return () => clearInterval(timer);
  }, [isAutoPlaying, products.length]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="relative group">
      <div className="overflow-hidden px-4">
        <motion.div 
          className="flex gap-8"
          animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 20,
            duration: 0.8 
          }}
          style={{ width: `${(products.length / itemsToShow) * 100}%` }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-full">
              <ProductCard product={product} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Controls */}
      <button 
        onClick={prev}
        className="absolute left-[-60px] top-1/2 -translate-y-1/2 p-4 text-brand-ink/30 hover:text-brand-ink transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>
      <button 
        onClick={next}
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 p-4 text-brand-ink/30 hover:text-brand-ink transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-12">
        {products.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(idx);
            }}
            className={`h-1 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-8 bg-brand-ink' : 'w-2 bg-brand-ink/10'}`}
          />
        ))}
      </div>
    </div>
  );
};
