import React from 'react';
import { motion } from 'motion/react';

export const StoryBanner = () => {
  return (
    <section className="relative py-32 bg-brand-ink text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&q=80&w=2000" 
          alt="Fabric texture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif italic mb-8 leading-snug">
            "편안함이 스타일이 되는 순간, <br />
            과하지 않아 더 멋있는 당신을 만납니다."
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mb-8" />
          <p className="text-[11px] uppercase tracking-[0.5em] opacity-60">
            Brenwood Philosophy
          </p>
        </motion.div>
      </div>
    </section>
  );
};
