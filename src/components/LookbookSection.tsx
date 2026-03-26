import React from 'react';
import { motion } from 'motion/react';
import { Look } from '@/src/types';
import { ArrowRight, Plus } from 'lucide-react';

interface LookbookSectionProps {
  look: Look;
  reversed?: boolean;
}

export const LookbookSection = ({ look, reversed }: LookbookSectionProps) => {
  return (
    <section className="py-32 md:py-56 overflow-hidden bg-brand-paper border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-32`}>
          
          {/* Image Side with Magazine Flair */}
          <div className="w-full lg:w-3/5 relative">
            {/* Background Decorative Number */}
            <div className={`absolute -top-20 ${reversed ? '-right-10' : '-left-10'} opacity-[0.05] select-none pointer-events-none text-brand-ink`}>
              <span className="text-[300px] font-serif font-bold leading-none">0{look.id.slice(-1)}</span>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] md:aspect-[16/11] overflow-hidden shadow-2xl border border-black/5"
            >
              <img 
                src={look.mainImage} 
                alt={look.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Interactive Hotspot */}
              <div className="absolute bottom-1/4 right-1/4">
                <motion.button 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-brand-ink border border-white/50 group/hotspot"
                >
                  <Plus className="w-5 h-5" />
                  <div className="absolute bottom-12 right-0 bg-white text-brand-ink p-4 shadow-2xl opacity-0 translate-y-2 transition-all group-hover/hotspot:opacity-100 group-hover/hotspot:translate-y-0 w-48 border border-black/5">
                    <p className="text-[9px] uppercase tracking-widest text-brand-gold font-bold mb-1">Featured Item</p>
                    <p className="text-xs font-medium mb-2">{look.products[0].name}</p>
                    <p className="text-[10px] font-serif italic text-brand-ink/50">₩{look.products[0].price.toLocaleString()}</p>
                  </div>
                </motion.button>
              </div>
            </motion.div>
            
            {/* Vertical Caption */}
            <div className={`absolute top-0 ${reversed ? '-left-12' : '-right-12'} h-full flex items-center hidden xl:flex`}>
              <p className="writing-mode-vertical text-[9px] uppercase tracking-[0.6em] text-brand-ink/20 font-bold">
                SCENE SELECTION // {look.scene}
              </p>
            </div>
          </div>

          {/* Text Side: Magazine Typography */}
          <div className="w-full lg:w-2/5">
            <motion.div
              initial={{ opacity: 0, x: reversed ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-[0.5em] text-brand-gold font-bold block">
                  {look.subtitle}
                </span>
                <h2 className="text-5xl md:text-7xl font-serif leading-[0.9] text-brand-ink">
                  {look.title.split(' ')[0]} <br />
                  <span className="italic font-light">{look.title.split(' ')[1]}</span>
                </h2>
              </div>

              <div className="w-16 h-[2px] bg-brand-gold" />

              <p className="text-brand-ink/40 leading-relaxed font-light text-lg max-w-sm">
                {look.description}
              </p>
              
              <div className="pt-6 space-y-8">
                <button className="group flex items-center gap-6 text-brand-ink">
                  <span className="text-xs uppercase tracking-[0.3em] font-bold border-b border-brand-ink pb-1 group-hover:text-brand-gold group-hover:border-brand-gold transition-all">
                    Shop the Look
                  </span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </button>
                
                {/* Product Thumbnails */}
                <div className="flex gap-4">
                  {look.products.map(product => (
                    <div key={product.id} className="group/thumb cursor-pointer">
                      <div className="w-20 h-24 bg-brand-muted overflow-hidden mb-2 border border-black/5">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover grayscale group-hover/thumb:grayscale-0 transition-all duration-500" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <p className="text-[8px] uppercase tracking-widest font-bold opacity-0 group-hover/thumb:opacity-100 transition-opacity text-brand-ink/50">
                        View Item
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
