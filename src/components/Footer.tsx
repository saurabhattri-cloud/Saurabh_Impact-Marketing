import React, { useState } from 'react';
import { ScreenType } from '../types';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="w-full bg-[#E8E7E0] border-t border-[#1A1A1A] mt-24">
      <div className="max-w-[1240px] mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2 space-y-4 pr-4">
            <div className="flex items-center gap-2 text-[#1A1A1A]">
              <div className="w-8 h-8 bg-[#1A1A1A] text-[#F2F1EC] flex items-center justify-center font-serif text-base">
                I
              </div>
              <span className="font-serif text-2xl tracking-tight text-[#1A1A1A]">
                Impact AI
              </span>
            </div>
            <p className="text-[#58554E] text-xs max-w-sm leading-relaxed font-sans">
              Autonomous marketing intelligence engine engineered for high-velocity enterprise organizations. Empirical attribution and algorithmic coordination.
            </p>

            <form onSubmit={handleSubscribe} className="flex items-center bg-[#FAF9F6] border border-[#1A1A1A] p-1 max-w-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={subscribed ? "✓ Subscribed to dispatches!" : "Enter executive email address"}
                className="flex-1 bg-transparent px-3 py-1.5 text-xs text-[#1A1A1A] placeholder:text-[#8A8780] focus:outline-none font-sans"
              />
              <button
                type="submit"
                className="bg-[#1A1A1A] text-[#F2F1EC] uppercase tracking-[0.14em] font-sans text-[11px] px-4 py-2 hover:bg-black transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <div className="font-mono text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-4">Architecture</div>
            <ul className="space-y-2 text-xs font-sans text-[#58554E]">
              <li onClick={() => onNavigate('agents')} className="hover:text-[#1A1A1A] transition-colors cursor-pointer">Autonomous Agents</li>
              <li onClick={() => onNavigate('cockpit')} className="hover:text-[#1A1A1A] transition-colors cursor-pointer">Attribution Matrix</li>
              <li onClick={() => onNavigate('cockpit')} className="hover:text-[#1A1A1A] transition-colors cursor-pointer">Predictive Forecasting</li>
              <li onClick={() => onNavigate('cockpit')} className="hover:text-[#1A1A1A] transition-colors cursor-pointer">Mesh Integrations</li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-4">Dispatches</div>
            <ul className="space-y-2 text-xs font-sans text-[#58554E]">
              <li onClick={() => onNavigate('blog')} className="hover:text-[#1A1A1A] transition-colors cursor-pointer">Intelligence Monograph</li>
              <li onClick={() => onNavigate('how-it-works')} className="hover:text-[#1A1A1A] transition-colors cursor-pointer">Orchestration Protocols</li>
              <li onClick={() => onNavigate('home')} className="hover:text-[#1A1A1A] transition-colors cursor-pointer">Enterprise Vignettes</li>
              <li onClick={() => onNavigate('how-it-works')} className="hover:text-[#1A1A1A] transition-colors cursor-pointer">System Documentation</li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-4">Organization</div>
            <ul className="space-y-2 text-xs font-sans text-[#58554E]">
              <li onClick={() => onNavigate('home')} className="hover:text-[#1A1A1A] transition-colors cursor-pointer">About Impact AI</li>
              <li onClick={() => onNavigate('blog')} className="hover:text-[#1A1A1A] transition-colors cursor-pointer">Fellowships & Careers</li>
              <li onClick={() => onNavigate('how-it-works')} className="hover:text-[#1A1A1A] transition-colors cursor-pointer">Cryptographic Security</li>
              <li onClick={() => onNavigate('pricing')} className="hover:text-[#1A1A1A] transition-colors cursor-pointer">Inquiries</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[#1A1A1A]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#58554E]">
          <div>© 2026 Impact AI Technologies Inc. All rights reserved.</div>
          <div className="flex items-center gap-6 text-[#1A1A1A]">
            <span className="hover:underline cursor-pointer">Privacy Charter</span>
            <span className="hover:underline cursor-pointer">Terms of Operation</span>
            <span className="hover:underline cursor-pointer flex items-center gap-1.5 font-semibold">
              <span className="w-1.5 h-1.5 bg-[#1A1A1A] inline-block"></span>
              All Mesh Nodes Nominal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
