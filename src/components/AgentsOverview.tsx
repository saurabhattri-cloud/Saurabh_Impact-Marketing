import React, { useState } from 'react';
import { AGENTS } from '../data';
import { AgentInfo } from '../types';

interface AgentsOverviewProps {
  onSelectAgent: (agentId: string) => void;
  onLaunchCockpit: () => void;
  onStartTrial: () => void;
}

export const AgentsOverview: React.FC<AgentsOverviewProps> = ({
  onSelectAgent,
  onLaunchCockpit,
  onStartTrial
}) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'strategy' | 'editorial' | 'growth' | 'social' | 'search'>('all');
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  const filteredAgents = AGENTS.filter(agent => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'strategy') return agent.id === 'strategist';
    if (filterCategory === 'editorial') return agent.id === 'writer';
    if (filterCategory === 'growth') return agent.id === 'paid';
    if (filterCategory === 'social') return agent.id === 'social';
    if (filterCategory === 'search') return agent.id === 'seo';
    return true;
  });

  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 pt-28 pb-24 text-left">
      {/* Top Breadcrumb & Status */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1A1A1A]">
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-[#58554E] uppercase tracking-wider">System Architecture</span>
          <span className="text-[#8A8780]">/</span>
          <span className="text-[#1A1A1A] font-bold uppercase tracking-wider">Multi-Agent Swarm</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-300 text-[11px] font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            5 of 5 Agents Live & Synchronized
          </span>
          <button
            onClick={onLaunchCockpit}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#1A1A1A] text-[#F2F1EC] text-[11px] font-sans uppercase tracking-[0.14em] font-medium hover:bg-black transition-colors"
          >
            <span className="material-symbols-outlined text-[14px]">tune</span>
            Open Command Cockpit
          </button>
        </div>
      </div>

      {/* Hero Header Section */}
      <div className="py-12 border-b border-[#1A1A1A]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF9F6] border border-[#1A1A1A] text-[#1A1A1A] text-[10px] uppercase tracking-[0.2em] font-sans font-bold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Autonomous Specialized Intelligence
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-[#1A1A1A] tracking-tight leading-[1.08]">
            Five Specialized Agents. <br />
            <span className="font-serif italic font-normal text-indigo-700">One Shared Brain.</span>
          </h1>

          <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-600 via-emerald-600 to-amber-600"></div>

          <p className="text-base sm:text-lg text-[#58554E] font-sans leading-relaxed">
            Unlike disjointed point tools that require constant prompt engineering, Impact AI deploys five autonomous agents purpose-built for distinct marketing disciplines. Each agent shares real-time context, entity graphs, and attribution signals.
          </p>
        </div>

        {/* Multi-Agent Mesh Interactive Architecture Visualizer */}
        <div className="mt-10 p-6 sm:p-8 bg-[#FAF9F6] border border-[#1A1A1A] shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#1A1A1A]/20">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#8A8780] block font-semibold">Shared Semantic Vector Topology</span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] mt-0.5">Bi-Directional Mesh Coordination Protocol</h3>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#58554E]">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Shared Memory
              <span className="text-[#8A8780]">•</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Zero Hallucination Guardrails
              <span className="text-[#8A8780]">•</span>
              <span className="w-2 h-2 rounded-full bg-amber-500"></span> Human-in-the-Loop Sign-off
            </div>
          </div>

          {/* Connected Network Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 pt-6">
            {AGENTS.map((agent, index) => {
              const isHovered = hoveredAgent === agent.id;
              return (
                <div
                  key={agent.id}
                  onMouseEnter={() => setHoveredAgent(agent.id)}
                  onMouseLeave={() => setHoveredAgent(null)}
                  onClick={() => onSelectAgent(agent.id)}
                  className={`p-4 border transition-all cursor-pointer relative overflow-hidden group bg-white ${
                    isHovered
                      ? 'shadow-md scale-[1.02] border-[#1A1A1A]'
                      : 'border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                  }`}
                  style={{
                    borderTop: `4px solid ${agent.color}`
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-8 h-8 rounded-xs text-white flex items-center justify-center text-sm shadow-2xs transition-transform group-hover:scale-110"
                      style={{ backgroundColor: agent.color }}
                    >
                      <span className="material-symbols-outlined text-[18px]">{agent.icon}</span>
                    </div>
                    <span className="text-[9px] font-mono uppercase font-bold text-[#8A8780]">Node 0{index + 1}</span>
                  </div>

                  <h4 className="font-serif text-sm font-bold text-[#1A1A1A] group-hover:text-black line-clamp-1">
                    {agent.name.split(' ')[0]} {agent.name.split(' ')[1]}
                  </h4>
                  <p className="text-[10px] font-mono text-[#58554E] mt-0.5 line-clamp-1">{agent.role.split(' ')[0]} AI</p>

                  <div className="mt-3 pt-2.5 border-t border-[#1A1A1A]/10 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Online
                    </span>
                    <span className="text-[#1A1A1A] font-semibold group-hover:underline flex items-center">
                      View
                      <span className="material-symbols-outlined text-[13px]">chevron_right</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-3 bg-[#E8E7E0]/60 border border-[#1A1A1A]/20 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#58554E] gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-indigo-600 text-[16px]">sync_alt</span>
              <span>Vector Sync Latency: <strong className="text-[#1A1A1A]">18ms</strong> between all 5 agent nodes</span>
            </div>
            <div className="text-[11px] text-[#1A1A1A] font-semibold">
              Click any node above to inspect its dedicated command console
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 my-8">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-mono text-[#58554E] uppercase tracking-wider mr-2 hidden sm:inline">Filter Discipline:</span>
          {[
            { id: 'all', label: 'All 5 Agents' },
            { id: 'strategy', label: 'Strategy AI', color: '#6366F1' },
            { id: 'editorial', label: 'Writing AI', color: '#059669' },
            { id: 'growth', label: 'Paid Marketing AI', color: '#D97706' },
            { id: 'social', label: 'Social Media AI', color: '#0284C7' },
            { id: 'search', label: 'SEO Agent', color: '#E11D48' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilterCategory(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-sans uppercase tracking-[0.14em] font-medium border transition-all flex items-center gap-1.5 ${
                filterCategory === tab.id
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-semibold'
                  : 'bg-[#FAF9F6] text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A] hover:bg-white'
              }`}
            >
              {tab.color && (
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tab.color }}></span>
              )}
              {tab.label}
            </button>
          ))}
        </div>

        <span className="text-xs font-mono text-[#58554E]">
          Showing {filteredAgents.length} of 5 Active Agents
        </span>
      </div>

      {/* Agents Rich Gallery Cards */}
      <div className="space-y-8">
        {filteredAgents.map((agent, index) => {
          return (
            <div
              key={agent.id}
              className="bg-[#FAF9F6] border-2 border-[#1A1A1A] p-6 sm:p-8 hover:bg-white transition-all shadow-xs relative overflow-hidden group"
            >
              {/* Colorful Top Border Accent Banner */}
              <div
                className="absolute top-0 left-0 right-0 h-2"
                style={{ backgroundColor: agent.color }}
              ></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Column 1: Identity, Role, Description */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 text-white flex items-center justify-center text-xl shadow-xs"
                      style={{ backgroundColor: agent.color }}
                    >
                      <span className="material-symbols-outlined text-[26px]">{agent.icon}</span>
                    </div>

                    <span
                      className={`text-[10px] uppercase font-mono tracking-wider font-bold px-2.5 py-1 border ${agent.theme.badgeBg} ${agent.theme.badgeText} ${agent.theme.badgeBorder}`}
                    >
                      {agent.role}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] tracking-tight group-hover:text-black">
                      {agent.name}
                    </h2>
                    <p className="text-[11px] font-mono uppercase tracking-widest text-[#58554E] mt-1">
                      {agent.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-[#58554E] leading-relaxed font-sans">
                    {agent.description}
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <button
                      onClick={() => onSelectAgent(agent.id)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-white text-xs font-sans uppercase tracking-[0.16em] font-semibold border transition-all active:scale-95 shadow-xs"
                      style={{ backgroundColor: agent.color, borderColor: agent.color }}
                    >
                      <span>Open Agent Detailed Page</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>

                    <button
                      onClick={() => onSelectAgent(agent.id)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-[#FAF9F6] hover:bg-[#E8E7E0] text-[#1A1A1A] text-xs font-sans uppercase tracking-[0.14em] font-medium border border-[#1A1A1A] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[15px]">terminal</span>
                      <span>Try Live Console</span>
                    </button>
                  </div>
                </div>

                {/* Column 2: Live Performance Metrics & Workflows */}
                <div className="lg:col-span-4 space-y-4">
                  <h4 className="text-[11px] uppercase font-mono tracking-wider text-[#1A1A1A] font-bold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]" style={{ color: agent.color }}>speed</span>
                    Operational Metrics
                  </h4>

                  <div className="grid grid-cols-2 gap-2.5">
                    {agent.metrics.map((metric, mi) => (
                      <div key={mi} className="p-3 bg-white border border-[#1A1A1A]/20 shadow-2xs">
                        <div className="flex items-center justify-between text-xs text-[#58554E]">
                          <span className="text-[10px] font-mono uppercase tracking-wider truncate">{metric.label}</span>
                          <span className="material-symbols-outlined text-[14px]" style={{ color: agent.color }}>{metric.icon}</span>
                        </div>
                        <p className="text-xl font-serif text-[#1A1A1A] font-medium mt-1">{metric.value}</p>
                        <span className="text-[9px] font-mono text-emerald-700 font-semibold block truncate">{metric.trend}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-[11px] uppercase font-mono tracking-wider text-[#1A1A1A] font-bold pt-2 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]" style={{ color: agent.color }}>account_tree</span>
                    Autonomous Pipeline
                  </h4>

                  <div className="space-y-1.5">
                    {agent.workflows.slice(0, 2).map((w, wi) => (
                      <div key={wi} className="p-2.5 bg-white border border-[#1A1A1A]/15 text-xs">
                        <div className="flex items-center gap-2 font-mono font-semibold text-[#1A1A1A]">
                          <span
                            className="w-4 h-4 rounded-full text-white text-[9px] flex items-center justify-center font-bold"
                            style={{ backgroundColor: agent.color }}
                          >
                            {w.stepNumber}
                          </span>
                          <span>{w.title}</span>
                        </div>
                        <p className="text-[11px] text-[#58554E] mt-1 pl-6 line-clamp-1">{w.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 3: Sample Deliverable & Connected Integrations */}
                <div className="lg:col-span-4 space-y-4">
                  <h4 className="text-[11px] uppercase font-mono tracking-wider text-[#1A1A1A] font-bold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]" style={{ color: agent.color }}>verified_user</span>
                    Sample Output Specimen
                  </h4>

                  <div className="p-4 bg-white border border-[#1A1A1A]/20 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span
                        className="text-[10px] uppercase font-bold px-2 py-0.5 border"
                        style={{
                          backgroundColor: `${agent.color}15`,
                          color: agent.color,
                          borderColor: `${agent.color}40`
                        }}
                      >
                        {agent.sampleOutput.type}
                      </span>
                      <span className="text-[10px] text-emerald-800 font-semibold">{agent.sampleOutput.metrics}</span>
                    </div>

                    <h5 className="font-serif text-base text-[#1A1A1A] font-medium pt-1">
                      {agent.sampleOutput.title}
                    </h5>

                    <p className="text-xs text-[#58554E] leading-relaxed font-sans line-clamp-3">
                      {agent.sampleOutput.content}
                    </p>

                    <div className="pt-2 border-t border-[#1A1A1A]/15 flex items-center justify-between text-[11px] font-mono text-[#58554E]">
                      <span>Human Review: Ready</span>
                      <span
                        onClick={() => onSelectAgent(agent.id)}
                        className="font-bold hover:underline cursor-pointer flex items-center gap-0.5"
                        style={{ color: agent.color }}
                      >
                        Inspect Artifact
                        <span className="material-symbols-outlined text-[13px]">open_in_new</span>
                      </span>
                    </div>
                  </div>

                  <h4 className="text-[11px] uppercase font-mono tracking-wider text-[#1A1A1A] font-bold pt-1 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]" style={{ color: agent.color }}>hub</span>
                    Connected Tool Matrix
                  </h4>

                  <div className="flex flex-wrap gap-1.5">
                    {agent.integrations.map((tool, ti) => (
                      <span
                        key={ti}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-[#1A1A1A]/20 text-[10px] font-mono text-[#1A1A1A]"
                      >
                        <span className="material-symbols-outlined text-[12px]" style={{ color: agent.color }}>{tool.icon}</span>
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Global Bottom High-Conviction Banner */}
      <div className="mt-16 bg-[#1A1A1A] text-[#F2F1EC] p-8 sm:p-12 border border-[#1A1A1A] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Unified Multi-Agent Orchestration
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif">Deploy All Five Agents to Your Brand</h3>
          <p className="text-xs sm:text-sm text-[#D1D0C9] font-sans leading-relaxed">
            Begin with a 14-day zero-risk trial. Connect your CMS, search console, and ad accounts to experience compounding marketing velocity.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <button
            onClick={onStartTrial}
            className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-sans uppercase tracking-[0.16em] text-xs font-semibold border border-emerald-500 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Activate 5 Agents Free</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
          <button
            onClick={onLaunchCockpit}
            className="w-full sm:w-auto px-6 py-3.5 bg-transparent hover:bg-white/10 text-[#F2F1EC] font-sans uppercase tracking-[0.16em] text-xs font-medium border border-white/30 transition-colors flex items-center justify-center gap-2"
          >
            <span>Simulate in Cockpit</span>
            <span className="material-symbols-outlined text-[16px]">tune</span>
          </button>
        </div>
      </div>
    </div>
  );
};
