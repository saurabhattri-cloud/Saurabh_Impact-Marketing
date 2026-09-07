import React, { useState } from 'react';
import { HOW_IT_WORKS_STEPS, AGENTS } from '../data';

export const HowItWorksView: React.FC<{ onLaunchTrial: () => void }> = ({ onLaunchTrial }) => {
  const [activeStep, setActiveStep] = useState(1);
  const activeAgent = AGENTS[activeStep - 1] || AGENTS[0];

  return (
    <div className="w-full max-w-[1240px] mx-auto px-6 pt-24 pb-20 space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-[10px] uppercase font-mono tracking-widest text-[#1A1A1A] bg-[#E8E7E0] px-3.5 py-1 border border-[#1A1A1A] font-semibold">
          Orchestration Protocol
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#1A1A1A] tracking-tight mt-2">
          How Five Specialized Agents <span className="font-serif italic font-normal">Execute in Concert</span>
        </h1>
        <div className="w-16 h-[1px] bg-[#1A1A1A] mx-auto my-3"></div>
        <p className="text-sm text-[#58554E] font-sans">
          Unlike disjointed software tools, every agent shares context in real time. Observe how a single brief translates into full-funnel deployment.
        </p>
      </div>

      {/* Interactive Step Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {HOW_IT_WORKS_STEPS.map((step, idx) => {
          const isSelected = activeStep === step.step;
          const agent = AGENTS[idx] || AGENTS[0];
          return (
            <button
              key={step.step}
              onClick={() => setActiveStep(step.step)}
              className={`p-5 border text-left transition-all relative ${
                isSelected
                  ? `${agent.theme.bg} text-white border-black shadow-md`
                  : `bg-[#FAF9F6] text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A] hover:bg-white`
              }`}
            >
              <div 
                className={`w-7 h-7 font-mono font-bold flex items-center justify-center text-xs mb-3 border shadow-2xs ${
                  isSelected ? 'bg-white text-black border-white' : `${agent.theme.lightBg} ${agent.theme.text} ${agent.theme.border}`
                }`}
              >
                0{step.step}
              </div>
              <span className={`text-[10px] font-mono uppercase tracking-wider block mb-1 font-semibold ${
                isSelected ? 'text-white/80' : agent.theme.text
              }`}>
                {step.agent}
              </span>
              <h4 className="font-serif text-base mb-1">{step.title}</h4>
              <p className={`text-xs font-sans leading-relaxed ${
                isSelected ? 'text-white/80' : 'text-[#58554E]'
              }`}>{step.description}</p>
            </button>
          );
        })}
      </div>

      {/* Deep Dive on Active Step */}
      <div 
        className="bg-[#FAF9F6] p-8 border border-[#1A1A1A] border-t-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xs"
        style={{ borderTopColor: activeAgent.color }}
      >
        <div className="md:col-span-6 space-y-4">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-mono uppercase tracking-wider border font-bold"
            style={{
              backgroundColor: `${activeAgent.color}15`,
              color: activeAgent.color,
              borderColor: activeAgent.color
            }}
          >
            <span>Stage 0{activeStep} Protocol</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A]">
            {HOW_IT_WORKS_STEPS[activeStep - 1].title} with <span className="font-serif italic font-normal" style={{ color: activeAgent.color }}>{HOW_IT_WORKS_STEPS[activeStep - 1].agent}</span>
          </h3>
          <div className="w-12 h-[1px] bg-[#1A1A1A]"></div>
          <p className="text-sm text-[#58554E] leading-relaxed font-sans">
            {HOW_IT_WORKS_STEPS[activeStep - 1].description}
          </p>
          <div className="pt-2">
            <button
              onClick={onLaunchTrial}
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#F2F1EC] font-sans uppercase tracking-[0.16em] text-xs px-6 py-3 border border-[#1A1A1A] hover:bg-black transition-all"
            >
              <span>Test workflow in Cockpit</span>
              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="md:col-span-6 bg-[#121214] text-[#F2F1EC] p-6 border border-[#1A1A1A] font-mono text-xs space-y-2 rounded-xs shadow-inner">
          <div className="flex items-center justify-between pb-2 border-b border-[#F2F1EC]/20 text-[#8A8780]">
            <span className="text-[10px] uppercase tracking-wider">Orchestration Trace: Step 0{activeStep}</span>
            <span className="font-bold flex items-center gap-1.5" style={{ color: activeAgent.color }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ backgroundColor: activeAgent.color }}></span>
              Synchronized
            </span>
          </div>
          <p className="text-[#8A8780] font-mono">// Context vector ingested from shared mesh layer</p>
          <p className="font-mono" style={{ color: activeAgent.color }}>
            agent.execute({`{ domain: "hypergrowth.io", phase: ${activeStep}, agent: "${activeAgent.id}" }`})
          </p>
          <p className="text-emerald-400 font-mono">↳ Dispatched telemetry token to Stage 0{(activeStep % 5) + 1}</p>
        </div>
      </div>
    </div>
  );
};
