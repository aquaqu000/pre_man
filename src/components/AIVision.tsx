import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { Loader2, Sparkles } from 'lucide-react';

const VISION_PROMPTS = [
  {
    id: 1,
    prompt: 'A futuristic, high-tech luxury menswear studio with holographic displays showing suit patterns and a sleek, minimalist aesthetic.',
    title: 'Digital Tailoring',
    description: 'AI와 장인 정신의 만남. 당신의 체형을 완벽하게 분석하는 디지털 테일러링의 미래.'
  },
  {
    id: 2,
    prompt: 'A close-up of a smart fabric with glowing fiber optic threads woven into a luxury wool pinstripe pattern.',
    title: 'Smart Fabrics',
    description: '온도 조절부터 스타일 변화까지. 브렌우드가 제안하는 차세대 스마트 패브릭.'
  }
];

export const AIVision = () => {
  const [images, setImages] = useState<Record<number, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateVisionImages = async () => {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const newImages: Record<number, string> = {};
      
      try {
        for (const vision of VISION_PROMPTS) {
          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
              parts: [{ text: vision.prompt }],
            },
            config: {
              imageConfig: {
                aspectRatio: "4:3"
              }
            }
          });
          
          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              newImages[vision.id] = `data:image/png;base64,${part.inlineData.data}`;
            }
          }
        }
        setImages(newImages);
        setIsLoading(false);
      } catch (error) {
        console.error("Vision image generation failed:", error);
        setIsLoading(false);
      }
    };

    generateVisionImages();
  }, []);

  if (isLoading) return null;

  return (
    <section className="py-32 px-8 bg-brand-ink text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-brand-gold" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            BRENWOOD AI VISION 2030
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {VISION_PROMPTS.map((vision) => (
            <motion.div 
              key={vision.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-white/5 border border-white/10 group">
                {images[vision.id] ? (
                  <img 
                    src={images[vision.id]} 
                    alt={vision.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Loader2 className="w-8 h-8 animate-spin opacity-20" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-serif italic">{vision.title}</h3>
                <p className="text-white/40 font-light leading-relaxed max-w-md">
                  {vision.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
