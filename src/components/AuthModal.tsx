import React, { useState } from 'react';

interface AuthModalProps {
  mode: 'signin' | 'signup';
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (email: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ mode, isOpen, onClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onSuccess(email);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-[#FAF9F6] border border-[#1A1A1A] p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-6 text-left relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#58554E] hover:text-[#1A1A1A] transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#1A1A1A] text-[#F2F1EC] flex items-center justify-center font-serif text-sm">
              I
            </div>
            <span className="font-serif tracking-wide text-lg text-[#1A1A1A]">Impact AI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A]">
            {mode === 'signup' ? 'Initiate Autonomous Mesh' : 'Access Command Console'}
          </h2>
          <div className="w-10 h-[1px] bg-[#1A1A1A]"></div>
          <p className="text-xs text-[#58554E] font-sans">
            {mode === 'signup'
              ? 'No payment credentials needed. Synchronize your agents in minutes.'
              : 'Enter authorized credentials to access your multi-agent cockpit.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {mode === 'signup' && (
            <div>
              <label className="block font-mono uppercase tracking-wider text-[#1A1A1A] mb-1 text-[10px]">Company Domain</label>
              <input
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. acme.com"
                className="w-full bg-[#E8E7E0]/50 border border-[#1A1A1A] px-3.5 py-2.5 text-[#1A1A1A] placeholder:text-[#8A8780] focus:outline-none font-sans"
              />
            </div>
          )}

          <div>
            <label className="block font-mono uppercase tracking-wider text-[#1A1A1A] mb-1 text-[10px]">Authorized Work Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@company.com"
              className="w-full bg-[#E8E7E0]/50 border border-[#1A1A1A] px-3.5 py-2.5 text-[#1A1A1A] placeholder:text-[#8A8780] focus:outline-none font-sans"
            />
          </div>

          <div>
            <label className="block font-mono uppercase tracking-wider text-[#1A1A1A] mb-1 text-[10px]">Access Token / Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-[#E8E7E0]/50 border border-[#1A1A1A] px-3.5 py-2.5 text-[#1A1A1A] placeholder:text-[#8A8780] focus:outline-none font-sans"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#1A1A1A] hover:bg-black text-[#F2F1EC] uppercase tracking-[0.16em] font-sans text-xs border border-[#1A1A1A] transition-all mt-3"
          >
            {mode === 'signup' ? 'Deploy Mesh Trial' : 'Authenticate Session'}
          </button>
        </form>

        <p className="text-[10px] font-mono text-[#8A8780] text-center">
          By continuing, you verify enterprise terms of service and autonomous governance protocols.
        </p>
      </div>
    </div>
  );
};
