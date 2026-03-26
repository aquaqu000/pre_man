import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Product } from '@/src/types';
import { ShoppingBag, Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  className?: string;
  key?: React.Key;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("group cursor-pointer", className)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-muted">
        {/* Main Image */}
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Hover Image Overlay */}
        <img 
          src={product.hoverImage} 
          alt={`${product.name} detail`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />

        {/* Quick Shop Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button className="w-14 h-14 bg-white text-brand-ink rounded-full flex items-center justify-center shadow-xl hover:bg-brand-gold hover:text-white transition-all duration-300 transform scale-90 group-hover:scale-100">
            <Plus className="w-6 h-6" />
          </button>
        </div>

        {/* Category Label */}
        <div className="absolute top-4 left-4">
          <span className="text-[8px] uppercase tracking-[0.3em] bg-white/80 backdrop-blur-sm px-2 py-1 font-bold text-brand-ink">
            {product.category}
          </span>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-medium tracking-tight text-brand-ink group-hover:text-brand-gold transition-colors">
            {product.name}
          </h3>
          <p className="text-sm font-serif italic text-brand-ink/60">
            ₩{product.price.toLocaleString()}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-1.5">
            {product.colors.map((color, idx) => (
              <div 
                key={idx}
                className="w-2 h-2 rounded-full border border-black/5"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <button className="text-[9px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-brand-ink">
            <ShoppingBag className="w-3 h-3" />
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
};
