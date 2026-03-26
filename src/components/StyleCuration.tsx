import React from 'react';
import { motion } from 'motion/react';
import { CURATIONS } from '@/src/types';
import { CheckCircle2, Lightbulb, ArrowRight } from 'lucide-react';

export const StyleCuration = () => {
  return (
    <section id="curation" className="py-32 bg-brand-paper">
      <div className="max-w-[1800px] mx-auto px-8">
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.6em] text-brand-gold font-bold mb-6 block">
            Expert Styling Guide
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-brand-ink">Style Curation</h2>
          <p className="mt-8 text-brand-ink/50 font-light max-w-2xl mx-auto leading-relaxed">
            브렌우드 디자이너가 제안하는 상황별 코디네이션 가이드. <br />
            당신의 일상을 더욱 특별하게 만드는 스타일링 팁을 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {CURATIONS.map((curation, idx) => (
            <motion.div 
              key={curation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white border border-black/5 overflow-hidden group"
            >
              {/* Image Header */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={curation.image} 
                  alt={curation.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-brand-ink text-white text-[9px] uppercase tracking-[0.3em] px-3 py-1.5 font-bold">
                    {curation.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10">
                <h3 className="text-2xl font-serif mb-4 text-brand-ink">{curation.title}</h3>
                <p className="text-brand-ink/60 text-sm font-light mb-8 leading-relaxed">
                  {curation.description}
                </p>

                {/* Tips Section */}
                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-2 text-brand-gold">
                    <Lightbulb className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Styling Tips</span>
                  </div>
                  <ul className="space-y-3">
                    {curation.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-brand-ink/70 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-brand-gold shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Coordination */}
                <div className="pt-8 border-t border-black/5">
                  <p className="text-[9px] uppercase tracking-widest font-bold text-brand-ink/40 mb-4">Recommended Items</p>
                  <div className="space-y-3">
                    {curation.coordination.map((item, i) => (
                      <div key={i} className="flex justify-between items-center group/item cursor-pointer">
                        <div>
                          <p className="text-xs font-medium text-brand-ink group-hover/item:text-brand-gold transition-colors">{item.item}</p>
                          <p className="text-[10px] text-brand-ink/40">{item.reason}</p>
                        </div>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Body Type Tip Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 bg-brand-ink p-12 md:p-20 text-white relative overflow-hidden"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold mb-6 block">
                Fit Guide
              </span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                당신의 체형에 맞는 <br />
                <span className="italic">완벽한 실루엣</span>을 찾으세요
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="space-y-4">
                  <p className="text-brand-gold text-xs font-bold uppercase tracking-widest">마른 체형</p>
                  <p className="text-sm text-white/60 font-light leading-relaxed">
                    어깨 패드가 적당히 들어간 스트럭처드 자켓을 선택하여 볼륨감을 더하세요. 밝은 컬러의 원단이 체격을 더 좋아 보이게 합니다.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-brand-gold text-xs font-bold uppercase tracking-widest">건장한 체형</p>
                  <p className="text-sm text-white/60 font-light leading-relaxed">
                    다크 네이비나 차콜 그레이 컬러로 슬림해 보이는 효과를 주되, 너무 타이트하지 않은 레귤러 핏을 권장합니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800" 
                alt="Fit Guide"
                className="w-full aspect-[4/5] object-cover brightness-75 border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          {/* Decorative background text */}
          <div className="absolute -bottom-10 -right-10 opacity-[0.03] select-none pointer-events-none">
            <span className="text-[200px] font-serif font-bold italic">BRENWOOD</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
