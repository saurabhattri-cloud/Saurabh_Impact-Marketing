import React, { useState } from 'react';

export const PricingView: React.FC<{ onGetStarted: () => void }> = ({ onGetStarted }) => {
  const [teamSize, setTeamSize] = useState(5);
  const [monthlySpend, setMonthlySpend] = useState(15000);

  // ROI math
  const hoursSavedPerWeek = teamSize * 16;
  const annualTimeSavedDollars = Math.round(hoursSavedPerWeek * 52 * 55);
  const annualPlatformCost = 9480; // $790 * 12
  const netSavings = annualTimeSavedDollars - annualPlatformCost;

  return (
    <div className="w-full max-w-[1240px] mx-auto px-6 pt-24 pb-20 space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-[10px] uppercase font-mono tracking-widest text-[#1A1A1A] bg-[#E8E7E0] px-3.5 py-1 border border-[#1A1A1A] font-semibold">
          Transparent Tiers
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#1A1A1A] tracking-tight mt-2">
          Start with one agent. <span className="font-serif italic font-normal">Scale to five</span> when ready.
        </h1>
        <div className="w-16 h-[1px] bg-[#1A1A1A] mx-auto my-3"></div>
        <p className="text-sm text-[#58554E] font-sans">
          14-day trial across all models. No payment credentials required. Cancel with zero friction.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tier 1 */}
        <div className="bg-[#FAF9F6] p-8 border border-[#1A1A1A] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#58554E]">Tier 01</span>
              <h3 className="font-serif text-2xl text-[#1A1A1A] mt-1">Single Agent</h3>
              <p className="text-xs text-[#58554E] mt-1 font-sans">Ideal for focused creators and boutique agencies.</p>
            </div>
            <div className="flex items-baseline gap-1 pt-2">
              <span className="text-4xl font-serif font-light text-[#1A1A1A]">$290</span>
              <span className="text-xs font-mono text-[#58554E]">/ month</span>
            </div>
            <ul className="space-y-2.5 text-xs text-[#58554E] pt-4 border-t border-[#1A1A1A]/20">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#1A1A1A] text-[16px]">check</span> Any 1 autonomous agent of choice</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#1A1A1A] text-[16px]">check</span> Up to 50 publication drafts / month</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#1A1A1A] text-[16px]">check</span> 1 connected brand tone model</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#1A1A1A] text-[16px]">check</span> Human-in-the-loop governance queue</li>
            </ul>
          </div>
          <button
            onClick={onGetStarted}
            className="w-full py-3 border border-[#1A1A1A] text-xs uppercase tracking-[0.16em] font-sans font-medium text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F2F1EC] transition-all"
          >
            Start Free Trial
          </button>
        </div>

        {/* Tier 2: Popular */}
        <div className="bg-[#18181B] text-[#F2F1EC] p-8 border-2 border-indigo-600 relative flex flex-col justify-between space-y-6 shadow-xl">
          <span className="absolute -top-3.5 right-6 bg-indigo-600 text-white border border-indigo-700 text-[10px] font-mono font-bold px-3 py-0.5 uppercase tracking-widest shadow-xs">
            Recommended
          </span>
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-300 font-semibold">Tier 02</span>
              <h3 className="font-serif text-2xl text-white mt-1">Multi-Agent Mesh</h3>
              <p className="text-xs text-zinc-300 mt-1 font-sans">Full synchronization across all 5 marketing disciplines.</p>
            </div>
            <div className="flex items-baseline gap-1 pt-2">
              <span className="text-4xl font-serif font-light text-white">$790</span>
              <span className="text-xs font-mono text-zinc-400">/ month</span>
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-200 pt-4 border-t border-zinc-700">
              <li className="flex items-center gap-2 font-medium"><span className="material-symbols-outlined text-emerald-400 text-[16px]">check_circle</span> All 5 autonomous agents synchronized</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-400 text-[16px]">check_circle</span> Unlimited multi-agent actions</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-400 text-[16px]">check_circle</span> Live attribution & ROI telemetry</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-400 text-[16px]">check_circle</span> Multi-channel paid calibration</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-400 text-[16px]">check_circle</span> SOC-2 certified data governance</li>
            </ul>
          </div>
          <button
            onClick={onGetStarted}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white border border-indigo-500 text-xs uppercase tracking-[0.16em] font-sans font-semibold transition-all shadow-md active:scale-95"
          >
            Get Started Free
          </button>
        </div>

        {/* Tier 3: Enterprise */}
        <div className="bg-[#FAF9F6] p-8 border border-[#1A1A1A] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#58554E]">Tier 03</span>
              <h3 className="font-serif text-2xl text-[#1A1A1A] mt-1">Enterprise Curated</h3>
              <p className="text-xs text-[#58554E] mt-1 font-sans">Dedicated VPC, private fine-tuning, and SLA guarantees.</p>
            </div>
            <div className="flex items-baseline gap-1 pt-2">
              <span className="text-4xl font-serif font-light text-[#1A1A1A]">Bespoke</span>
            </div>
            <ul className="space-y-2.5 text-xs text-[#58554E] pt-4 border-t border-[#1A1A1A]/20">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#1A1A1A] text-[16px]">check</span> Dedicated on-prem or VPC isolation</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#1A1A1A] text-[16px]">check</span> Fine-tuning on corporate archives</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#1A1A1A] text-[16px]">check</span> Dedicated AI Systems Architect</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#1A1A1A] text-[16px]">check</span> Custom CRM & data warehouse pipes</li>
            </ul>
          </div>
          <button
            onClick={onGetStarted}
            className="w-full py-3 border border-[#1A1A1A] text-xs uppercase tracking-[0.16em] font-sans font-medium text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F2F1EC] transition-all"
          >
            Contact Solutions Team
          </button>
        </div>
      </div>

      {/* Interactive ROI Calculator */}
      <div className="bg-[#FAF9F6] p-8 border border-[#1A1A1A] space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="text-2xl font-serif text-[#1A1A1A]">Operational ROI Matrix</h3>
          <p className="text-xs text-[#58554E] font-sans">Quantify your organization's annual efficiency gain by automating 65% of execution overhead.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs font-mono text-[#1A1A1A] mb-2">
                <span className="uppercase tracking-wider">Marketing Team Count:</span>
                <span className="font-bold">{teamSize} Specialists</span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-[#1A1A1A] mb-2">
                <span className="uppercase tracking-wider">Monthly Media Budget:</span>
                <span className="font-bold text-amber-700">${monthlySpend.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="2000"
                max="100000"
                step="1000"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-[#FAF9F6] p-6 border-2 border-[#1A1A1A] space-y-4 shadow-sm">
            <div className="flex items-baseline justify-between border-b border-[#1A1A1A]/20 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#58554E]">Hours Reclaimed / Mo:</span>
              <span className="text-2xl font-serif text-indigo-700 font-bold">{(hoursSavedPerWeek * 4.2).toFixed(0)} hrs</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-[#1A1A1A]/20 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#58554E]">Estimated Annual Value:</span>
              <span className="text-3xl font-serif font-bold text-emerald-700">${netSavings.toLocaleString()}</span>
            </div>
            <p className="text-[10px] font-mono text-[#8A8780] text-center">Calculated at blended $55/hr enterprise marketing talent cost.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
