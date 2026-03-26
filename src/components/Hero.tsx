import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const SLIDES_CONFIG = [
  {
    id: 1,
    prompt: 'A cinematic, high-end luxury menswear store interior with minimalist design, soft lighting, and premium suits on display.',
    title: 'The New Classic',
    subtitle: '부드러운 하루를 입다',
    tag: 'Editorial 01'
  },
  {
    id: 2,
    prompt: 'A stylish man in a tailored charcoal suit walking through a modern architectural space, editorial fashion photography style.',
    title: 'Morning Ritual',
    subtitle: '가장 나다운 시간의 기록',
    tag: 'Editorial 02'
  },
  {
    id: 3,
    prompt: 'A close-up of a high-quality navy blue wool suit fabric with a Brenwood logo subtly embossed on a silver button.',
    title: 'Urban Promenade',
    subtitle: '도시를 유영하는 감각',
    tag: 'Editorial 03'
  },
  {
    id: 4,
    prompt: 'A minimalist luxury watch and leather belt on a white marble surface, soft morning light, high fashion accessory shot.',
    title: 'Spring Essence',
    subtitle: '봄의 무게를 덜어내다',
    tag: 'Editorial 04'
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [images, setImages] = useState<Record<number, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateImages = async () => {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const newImages: Record<number, string> = {};
      
      try {
        for (const slide of SLIDES_CONFIG) {
          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
              parts: [{ text: slide.prompt }],
            },
            config: {
              imageConfig: {
                aspectRatio: "16:9"
              }
            }
          });
          
          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              newImages[slide.id] = `data:image/png;base64,${part.inlineData.data}`;
            }
          }
        }
        setImages(newImages);
        setIsLoading(false);
      } catch (error) {
        console.error("Image generation failed:", error);
        // Fallback to Unsplash if generation fails
        const fallbacks: Record<number, string> = {
          1: 'https://images.unsplash.com/photo-1618333244970-f21084924a0e?auto=format&fit=crop&q=80&w=1600',
          2: 'https://images.unsplash.com/photo-1550246140-5119ae4790b8?auto=format&fit=crop&q=80&w=1600',
          3: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=1600',
          4: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&q=80&w=1600'
        };
        setImages(fallbacks);
        setIsLoading(false);
      }
    };

    generateImages();
  }, []);

  useEffect(() => {
    if (isLoading) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % SLIDES_CONFIG.length);
    }, 5000); // 5-second interval for better viewing
    return () => clearInterval(timer);
  }, [isLoading]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % SLIDES_CONFIG.length);
  };
  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + SLIDES_CONFIG.length) % SLIDES_CONFIG.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-brand-paper text-brand-ink">
        <Loader2 className="w-12 h-12 animate-spin mb-4 opacity-20" />
        <p className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">
          Curating Brenwood Heritage...
        </p>
      </div>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-paper">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          className="absolute inset-0"
        >
          <img 
            src={images[SLIDES_CONFIG[currentSlide].id]} 
            alt={SLIDES_CONFIG[currentSlide].title}
            className="w-full h-full object-cover grayscale-[10%] brightness-[0.9]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative h-full max-w-7xl mx-auto px-8 md:px-20 flex flex-col justify-center z-10 text-white">
        <motion.div
          key={`content-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] mb-6 block text-brand-gold font-bold">
            {SLIDES_CONFIG[currentSlide].tag}
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8 tracking-tight">
            {SLIDES_CONFIG[currentSlide].title} <br />
            <span className="italic font-light text-3xl md:text-5xl block mt-4 opacity-90">
              {SLIDES_CONFIG[currentSlide].subtitle}
            </span>
          </h2>
          
          <div className="flex items-center gap-8 mt-12">
            <button className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold">
              <span>Explore Collection</span>
              <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center group-hover:bg-white group-hover:text-brand-ink transition-all duration-500">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 right-12 flex items-center gap-6 z-20">
        <div className="flex items-center gap-2 mr-8">
          {SLIDES_CONFIG.map((_, idx) => (
            <div 
              key={idx}
              className={`h-[2px] transition-all duration-500 ${idx === currentSlide ? 'w-12 bg-white' : 'w-4 bg-white/30'}`}
            />
          ))}
        </div>
        <button onClick={prevSlide} className="p-2 text-white/50 hover:text-white transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="p-2 text-white/50 hover:text-white transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Vertical Brand Label */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden lg:block z-20">
        <p className="writing-mode-vertical text-[9px] uppercase tracking-[0.8em] text-white/30 font-medium">
          BRENWOOD PREMIUM EDITORIAL // 2026
        </p>
      </div>
    </section>
  );
};
