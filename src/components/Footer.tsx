import React from 'react';
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif tracking-widest">BRENWOOD</h2>
            <p className="text-sm text-black/50 leading-relaxed max-w-xs">
              프리미엄 남성 라이프스타일 브랜드. <br />
              우리는 옷을 넘어 당신의 가치를 디자인합니다.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
              <Facebook className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
              <Youtube className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-bold mb-8">Shop</h4>
            <ul className="space-y-4 text-sm text-black/60">
              <li><a href="#" className="hover:text-black transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Lookbook</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-bold mb-8">Support</h4>
            <ul className="space-y-4 text-sm text-black/60">
              <li><a href="#" className="hover:text-black transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-bold mb-8">Newsletter</h4>
            <p className="text-sm text-black/50 mb-6">
              신제품 소식과 특별한 혜택을 가장 먼저 만나보세요.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full border-b border-black/20 pb-2 text-sm focus:border-black outline-none transition-colors"
              />
              <button className="absolute right-0 bottom-2">
                <Mail className="w-4 h-4 opacity-40" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-black/30">
            © 2026 BRENWOOD PREMIUM. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-black/30">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
