import React from 'react';
import { ScreenType } from '../types';

interface NavbarProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenSignIn: () => void;
  onOpenTryFree: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  onOpenSignIn,
  onOpenTryFree
}) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F2F1EC]/90 backdrop-blur-md border-b border-[#1A1A1A]">
      <div className="h-20 max-w-[1240px] mx-auto px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-2.5 text-[#1A1A1A] group focus:outline-none"
          >
            <div className="w-8 h-8 bg-indigo-700 text-white flex items-center justify-center font-serif text-sm font-bold tracking-tighter shadow-xs">
              I.
            </div>
            <span className="font-serif text-2xl tracking-tight text-[#1A1A1A]">
              Impact<span className="font-serif italic font-normal ml-1 text-indigo-700">AI</span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1.5">
            {[
              { id: 'home', label: 'Overview' },
              { id: 'cockpit', label: 'Live Cockpit', isLive: true },
              { id: 'agents', label: 'Autonomous Agents' },
              { id: 'how-it-works', label: 'Architecture' },
              { id: 'pricing', label: 'Exhibition & Pricing' },
              { id: 'blog', label: 'Chronicle' }
            ].map((item) => {
              const active = currentScreen === item.id || (item.id === 'agents' && currentScreen === 'agent-detail');
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as ScreenType)}
                  className={`uppercase tracking-[0.16em] text-[11px] transition-all py-1.5 px-3 font-sans flex items-center gap-1.5 ${
                    active
                      ? 'text-[#F2F1EC] bg-[#1A1A1A] font-semibold'
                      : 'text-[#58554E] hover:text-[#1A1A1A] hover:bg-[#E8E7E0]'
                  }`}
                >
                  {item.isLive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenSignIn}
            className="uppercase tracking-[0.15em] text-[11px] font-sans font-medium text-[#1A1A1A] hover:text-indigo-700 transition-colors px-2 py-1"
          >
            Sign In
          </button>
          <button
            onClick={onOpenTryFree}
            className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white uppercase tracking-[0.16em] text-[11px] font-sans font-medium px-5 py-2.5 border border-indigo-700 transition-all active:scale-95 shadow-xs"
          >
            Try Free
          </button>
          <div className="w-8 h-8 border border-[#1A1A1A] bg-[#E8E7E0] flex items-center justify-center text-[#1A1A1A] text-xs">
            <span className="material-symbols-outlined text-[17px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
};
