import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LookbookSection } from './components/LookbookSection';
import { ProductCard } from './components/ProductCard';
import { ProductCarousel } from './components/ProductCarousel';
import { StoryBanner } from './components/StoryBanner';
import { StyleCuration } from './components/StyleCuration';
import { AIVision } from './components/AIVision';
import { Footer } from './components/Footer';
import { PRODUCTS, LOOKS } from './types';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-white bg-brand-paper">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Introduction Story */}
        <section className="py-32 px-6 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] uppercase tracking-[0.4em] text-brand-gold font-bold mb-6 block">
              The New Standard
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-brand-ink">
              좋은 옷을 넘어, <br />
              <span className="italic">당신의 가치를 디자인합니다.</span>
            </h2>
            <p className="text-brand-ink/60 leading-relaxed text-lg font-light">
              Brenwood는 단순히 제품을 판매하지 않습니다. <br />
              우리는 당신이 꿈꾸는 일상의 장면을 제안하고, <br />
              그 안에서 가장 빛나는 당신의 모습을 완성합니다.
            </p>
          </motion.div>
        </section>

        {/* Featured Looks (Storytelling) */}
        <LookbookSection look={LOOKS[0]} />
        <LookbookSection look={LOOKS[1]} reversed />

        {/* AI Vision Showcase - UPGRADE */}
        <AIVision />

        {/* Story Banner */}
        <StoryBanner />

        {/* Product Collection */}
        <section className="py-32 px-8 bg-white overflow-hidden">
          <div className="max-w-[1800px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold mb-6 block">
                  The 2026 Collection
                </span>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight text-brand-ink">Signature Essentials</h2>
                <p className="mt-6 text-brand-ink/40 font-light leading-relaxed">
                  브렌우드가 제안하는 20가지 시그니처 아이템. <br />
                  시간이 흘러도 변하지 않는 클래식의 가치를 당신의 옷장에 담으세요.
                </p>
              </div>
              <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-brand-ink pb-2 hover:text-brand-gold hover:border-brand-gold transition-all text-brand-ink">
                View Entire Collection
              </button>
            </div>

            <ProductCarousel products={PRODUCTS} />
          </div>
        </section>

        {/* Style Curation Section */}
        <StyleCuration />

        {/* Coordination / Buy the Look Teaser */}
        <section className="py-32 px-6 bg-brand-paper">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-brand-ink">
                Complete Your <br />
                <span className="italic text-brand-gold">Signature Look</span>
              </h2>
              <p className="text-brand-ink/40 text-lg font-light mb-12 max-w-md">
                고민할 필요 없는 완벽한 조합. <br />
                전문 큐레이터가 제안하는 코디 세트로 <br />
                당신의 스타일을 한 번에 완성하세요.
              </p>
              <button 
                onClick={() => document.getElementById('curation')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 bg-brand-ink text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-brand-gold transition-all"
              >
                스타일 큐레이션 보기
              </button>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square">
              <div className="absolute inset-0 bg-brand-muted overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=1200" 
                  alt="Coordination" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating items */}
              <div className="absolute -bottom-8 -left-8 w-48 h-64 bg-white shadow-2xl p-4 hidden md:block border border-black/5">
                <img 
                  src={PRODUCTS[2].image} 
                  alt="Item" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
