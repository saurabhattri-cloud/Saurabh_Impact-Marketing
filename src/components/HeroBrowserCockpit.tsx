import React, { useState } from 'react';
import { PendingTask } from '../types';

interface HeroBrowserCockpitProps {
  onOpenFullCockpit: () => void;
  pendingTasks: PendingTask[];
  onApproveTask: (id: string) => void;
  onRejectTask: (id: string) => void;
}

export const HeroBrowserCockpit: React.FC<HeroBrowserCockpitProps> = ({
  onOpenFullCockpit,
  pendingTasks,
  onApproveTask
}) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'agents' | 'content' | 'paid' | 'roi'>('dashboard');
  const [timeRange, setTimeRange] = useState('Last 30 Days');
  const [selectedDomain, setSelectedDomain] = useState('hypergrowth.io');
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  return (
    <div className="w-full bg-[#E8E7E0] p-3 border border-[#1A1A1A] shadow-[0_20px_40px_rgba(26,26,26,0.12)] relative overflow-hidden">
      {/* Browser Top Shell */}
      <div className="bg-[#F2F1EC] border border-[#1A1A1A] overflow-hidden">
        {/* Top Title Bar */}
        <div className="h-12 bg-[#E8E7E0] border-b border-[#1A1A1A] px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] inline-block shadow-2xs"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] inline-block shadow-2xs"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block shadow-2xs"></span>
            <span className="text-[10px] font-mono text-[#58554E] uppercase tracking-widest ml-2">SPECIMEN NO. 084</span>
          </div>

          {/* Faux URL pill */}
          <div 
            onClick={onOpenFullCockpit}
            className="bg-[#F2F1EC] border border-[#1A1A1A] px-4 py-1 text-[11px] font-mono text-[#1A1A1A] flex items-center gap-2 shadow-none w-84 justify-center cursor-pointer hover:bg-[#1A1A1A] hover:text-[#F2F1EC] transition-colors group"
            title="Click to expand Interactive Cockpit"
          >
            <span className="material-symbols-outlined text-[13px] text-emerald-600 group-hover:text-emerald-400">lock</span>
            <span>app.impactai.io/exhibition</span>
            <span className="text-[#8A8780] text-xs">/live</span>
            <span className="text-[9px] bg-emerald-700 text-white px-1.5 py-0.2 font-mono uppercase tracking-wider">LIVE</span>
          </div>

          <div className="flex items-center gap-2 text-[#1A1A1A]">
            <button 
              onClick={onOpenFullCockpit}
              className="p-1 hover:text-indigo-600 transition-colors"
              title="Expand Fullscreen Cockpit"
            >
              <span className="material-symbols-outlined text-[18px]">open_in_full</span>
            </button>
            <button 
              onClick={() => alert("Simulation refreshed. Agent synchronization active.")}
              className="p-1 hover:text-indigo-600 transition-colors"
              title="Sync Agent Mesh"
            >
              <span className="material-symbols-outlined text-[18px]">refresh</span>
            </button>
          </div>
        </div>

        {/* Inner Veritas-Style Dashboard Grid */}
        <div className="grid grid-cols-12 min-h-[520px] text-left">
          {/* Mini Sidebar */}
          <div className="col-span-12 md:col-span-3 lg:col-span-2 bg-[#E8E7E0] border-r border-[#1A1A1A] p-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 px-1 py-1 border-b border-[#1A1A1A]/20 pb-3">
                <div className="w-6 h-6 bg-[#1A1A1A] text-[#F2F1EC] flex items-center justify-center font-serif text-xs font-bold">I.</div>
                <span className="font-serif text-base text-[#1A1A1A] tracking-tight">Impact<span className="font-serif italic ml-1">Cockpit</span></span>
              </div>

              <nav className="space-y-1">
                {[
                  { id: 'dashboard', label: 'Telemetry', icon: 'dashboard' },
                  { id: 'agents', label: '5 Active Agents', icon: 'psychology' },
                  { id: 'content', label: 'Content Hub', icon: 'auto_stories' },
                  { id: 'paid', label: 'Paid Campaigns', icon: 'ads_click' },
                  { id: 'roi', label: 'Attribution ROI', icon: 'query_stats' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-[11px] uppercase tracking-[0.14em] font-sans font-medium transition-colors border ${
                      activeTab === item.id
                        ? 'bg-[#1A1A1A] border-[#1A1A1A] text-[#F2F1EC]'
                        : 'border-transparent text-[#58554E] hover:text-[#1A1A1A] hover:bg-[#D1D0C9]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Agent Mesh Sync Badge */}
            <div className="bg-[#FAF9F6] p-3 border border-[#1A1A1A]">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-[#1A1A1A]">Agent Mesh</span>
                <span className="w-1.5 h-1.5 bg-[#1A1A1A] animate-ping"></span>
              </div>
              <p className="text-[11px] text-[#58554E] leading-snug">5 Autonomous agents actively synchronized across 12 channels.</p>
            </div>
          </div>

          {/* Main Dashboard Workspace */}
          <div className="col-span-12 md:col-span-9 lg:col-span-10 p-6 bg-[#F2F1EC] space-y-5">
            {/* Top Controls Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#1A1A1A]">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="font-serif text-xl sm:text-2xl text-[#1A1A1A]">Autonomous Intelligence <span className="font-serif italic font-normal">Console</span></h2>
                  <span className="border border-[#1A1A1A] bg-[#E8E7E0] text-[#1A1A1A] text-[10px] uppercase tracking-[0.2em] px-2.5 py-0.5 font-sans font-medium">
                    Live Orchestration
                  </span>
                </div>
                <p className="text-xs text-[#58554E] mt-0.5">Continuous multi-agent execution, semantic AI citations, and unified attribution.</p>
              </div>

              {/* Time & Domain Filter */}
              <div className="flex items-center gap-2 flex-wrap">
                <select
                  value={selectedDomain}
                  onChange={(e) => setSelectedDomain(e.target.value)}
                  className="bg-[#FAF9F6] border border-[#1A1A1A] px-3 py-1 text-xs font-mono text-[#1A1A1A] focus:outline-none cursor-pointer"
                >
                  <option value="hypergrowth.io">Domain: hypergrowth.io</option>
                  <option value="acmecloud.ai">Domain: acmecloud.ai</option>
                  <option value="nexustech.co">Domain: nexustech.co</option>
                </select>

                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="bg-[#FAF9F6] border border-[#1A1A1A] px-3 py-1 text-xs font-mono text-[#58554E] focus:outline-none cursor-pointer"
                >
                  <option value="Last 7 Days">Last 7 Days</option>
                  <option value="Last 30 Days">Last 30 Days</option>
                  <option value="Last 90 Days">Last 90 Days</option>
                  <option value="Year to Date">Year to Date</option>
                </select>
              </div>
            </div>

            {/* KPI Metric Pill Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-[#FAF9F6] border border-[#1A1A1A] border-t-4 border-t-indigo-600 p-4 relative">
                <div className="flex items-center justify-between text-[#58554E] mb-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium">Actions</span>
                  <span className="material-symbols-outlined text-[16px] text-indigo-600">bolt</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-serif text-[#1A1A1A]">142.8k</span>
                  <span className="text-[10px] font-mono border border-emerald-300 bg-emerald-50 text-emerald-800 font-semibold px-1 py-0.2">↑ 38%</span>
                </div>
                <span className="text-[10px] text-[#8A8780] mt-1 block uppercase tracking-wider">Executed across 5 agents</span>
              </div>

              <div className="bg-[#FAF9F6] border border-[#1A1A1A] border-t-4 border-t-emerald-600 p-4 relative">
                <div className="flex items-center justify-between text-[#58554E] mb-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium">Active Mesh</span>
                  <span className="material-symbols-outlined text-[16px] text-emerald-600">smart_toy</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-serif text-[#1A1A1A]">5 / 5</span>
                  <span className="text-[10px] font-mono border border-emerald-600 bg-emerald-600 text-white font-bold px-1.5 py-0.2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    ONLINE
                  </span>
                </div>
                <span className="text-[10px] text-[#8A8780] mt-1 block uppercase tracking-wider">Context synced in real time</span>
              </div>

              <div className="bg-[#FAF9F6] border border-[#1A1A1A] border-t-4 border-t-rose-600 p-4 relative">
                <div className="flex items-center justify-between text-[#58554E] mb-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium">Traffic Reach</span>
                  <span className="material-symbols-outlined text-[16px] text-rose-600">trending_up</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-serif text-[#1A1A1A]">94.2k</span>
                  <span className="text-[10px] font-mono border border-emerald-300 bg-emerald-50 text-emerald-800 font-semibold px-1 py-0.2">↑ 127%</span>
                </div>
                <span className="text-[10px] text-[#8A8780] mt-1 block uppercase tracking-wider">+42 keyword clusters ranked</span>
              </div>

              <div className="bg-[#FAF9F6] border border-[#1A1A1A] border-t-4 border-t-amber-600 p-4 relative">
                <div className="flex items-center justify-between text-[#58554E] mb-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium">Effective ROAS</span>
                  <span className="material-symbols-outlined text-[16px] text-amber-600">monetization_on</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-serif text-[#1A1A1A]">4.8x</span>
                  <span className="text-[10px] font-mono border border-amber-300 bg-amber-50 text-amber-900 font-semibold px-1 py-0.2">↑ 2.4x</span>
                </div>
                <span className="text-[10px] text-[#8A8780] mt-1 block uppercase tracking-wider">Paid AI bid optimization</span>
              </div>
            </div>

            {/* Main Interactive Chart & Live Agent Feed Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Left Chart Area */}
              <div className="lg:col-span-8 bg-[#FAF9F6] border border-[#1A1A1A] p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="font-serif text-base text-[#1A1A1A]">Attribution & Autonomous Production</span>
                    <p className="text-xs text-[#58554E]">Comparing organic citation growth vs. manual velocity baseline</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1.5 font-bold text-indigo-700 uppercase tracking-wider text-[10px]">
                      <span className="w-2.5 h-2.5 bg-indigo-600 rounded-2xs inline-block"></span> Impact AI Mesh
                    </span>
                    <span className="flex items-center gap-1.5 text-[#8A8780] uppercase tracking-wider text-[10px]">
                      <span className="w-2.5 h-2.5 border border-[#8A8780] inline-block"></span> Legacy Single Tools
                    </span>
                  </div>
                </div>

                {/* Custom Inline SVG Chart */}
                <div className="w-full h-44 relative my-1">
                  <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 540 180">
                    <line stroke="#E8E7E0" strokeDasharray="3 3" x1="0" x2="540" y1="40" y2="40"></line>
                    <line stroke="#E8E7E0" strokeDasharray="3 3" x1="0" x2="540" y1="90" y2="90"></line>
                    <line stroke="#E8E7E0" strokeDasharray="3 3" x1="0" x2="540" y1="140" y2="140"></line>
                    <defs>
                      <linearGradient id="heroGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#6366F1" stopOpacity="0.22"></stop>
                        <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0"></stop>
                      </linearGradient>
                    </defs>
                    <path d="M0,150 C80,140 140,115 220,95 C300,75 380,45 460,30 C500,20 520,18 540,15 L540,180 L0,180 Z" fill="url(#heroGradient)"></path>
                    <path d="M0,155 C90,152 180,148 270,142 C360,136 450,130 540,126" stroke="#94A3B8" strokeLinecap="round" strokeWidth="1.5" strokeDasharray="4 3"></path>
                    <path d="M0,150 C80,140 140,115 220,95 C300,75 380,45 460,30 C500,20 520,18 540,15" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2.5"></path>
                    <circle cx="460" cy="30" fill="#6366F1" opacity="0.4" r="7" className="animate-ping"></circle>
                    <circle cx="460" cy="30" fill="#4F46E5" r="4.5" stroke="#FFFFFF" strokeWidth="1.5"></circle>
                  </svg>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-[#8A8780] pt-2 border-t border-[#1A1A1A]/20">
                  <span>W01: Ingestion</span>
                  <span>W02: Synthesis</span>
                  <span>W03: Multi-Channel Lift</span>
                  <span className="text-[#1A1A1A] font-bold">W04: Autonomous 10x</span>
                </div>
              </div>

              {/* Right Agent Live Action Feed */}
              <div className="lg:col-span-4 bg-[#FAF9F6] border border-[#1A1A1A] p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 border-b border-[#1A1A1A]/20 pb-2">
                    <span className="font-serif text-sm text-[#1A1A1A]">Agent Action Stream</span>
                    <span className="text-[9px] bg-[#1A1A1A] text-[#F2F1EC] uppercase tracking-widest px-2 py-0.5">Online</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    {/* Event 1 - Writer */}
                    <div className="p-2.5 bg-[#F2F1EC] border border-[#1A1A1A]/20 border-l-3 border-l-emerald-600 flex items-start gap-2.5 hover:border-[#1A1A1A] transition-colors">
                      <div className="w-6 h-6 bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <span className="material-symbols-outlined text-[13px]">stylus_note</span>
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-emerald-800">Content Writer AI</span>
                          <span className="text-[10px] font-mono text-[#8A8780]">2m ago</span>
                        </div>
                        <p className="text-[#58554E] text-[11px] truncate">Drafted 4 pillar guides matching brand tone</p>
                      </div>
                    </div>

                    {/* Event 2 - SEO */}
                    <div className="p-2.5 bg-[#F2F1EC] border border-[#1A1A1A]/20 border-l-3 border-l-rose-600 flex items-start gap-2.5 hover:border-[#1A1A1A] transition-colors">
                      <div className="w-6 h-6 bg-rose-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <span className="material-symbols-outlined text-[13px]">manage_search</span>
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-rose-800">SEO Agent</span>
                          <span className="text-[10px] font-mono text-[#8A8780]">7m ago</span>
                        </div>
                        <p className="text-[#58554E] text-[11px] truncate">Optimized meta schemas for 28 pages</p>
                      </div>
                    </div>

                    {/* Event 3 - Paid */}
                    <div className="p-2.5 bg-[#F2F1EC] border border-[#1A1A1A]/20 border-l-3 border-l-amber-600 flex items-start gap-2.5 hover:border-[#1A1A1A] transition-colors">
                      <div className="w-6 h-6 bg-amber-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <span className="material-symbols-outlined text-[13px]">campaign</span>
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-amber-800">Paid Marketing AI</span>
                          <span className="text-[10px] font-mono text-[#8A8780]">14m ago</span>
                        </div>
                        <p className="text-[#58554E] text-[11px] truncate">Reallocated budget to top-converting Google ad set</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1A1A1A] flex items-center justify-between text-xs text-[#58554E]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    <span>Governance: <strong>{pendingTasks.filter(t => t.status === 'pending').length} pending</strong></span>
                  </span>
                  <button 
                    onClick={() => setReviewModalOpen(true)}
                    className="text-indigo-700 font-semibold underline uppercase tracking-wider text-[11px] hover:text-indigo-900"
                  >
                    Review Queue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {reviewModalOpen && (
        <div className="absolute inset-0 bg-[#1A1A1A]/50 backdrop-blur-sm z-30 flex items-center justify-center p-4">
          <div className="bg-[#F2F1EC] border-2 border-[#1A1A1A] p-6 max-w-lg w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#1A1A1A]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-600">verified_user</span>
                <h3 className="font-serif text-lg text-[#1A1A1A]">Human-in-the-Loop Approval Queue</h3>
              </div>
              <button 
                onClick={() => setReviewModalOpen(false)}
                className="text-[#58554E] hover:text-[#1A1A1A]"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
              {pendingTasks.map((t) => (
                <div key={t.id} className="p-3 bg-[#FAF9F6] border border-[#1A1A1A] space-y-2 text-left shadow-xs">
                  <div className="flex items-center justify-between text-xs">
                    <span className="uppercase tracking-widest text-[10px] font-mono font-bold text-indigo-700">{t.agentName}</span>
                    <span className="font-mono text-[10px] text-[#8A8780]">{t.timestamp}</span>
                  </div>
                  <p className="text-sm font-serif font-medium text-[#1A1A1A]">{t.title}</p>
                  <p className="text-xs text-[#58554E]">{t.preview}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-[#1A1A1A]/20">
                    <span className="text-[11px] font-mono text-emerald-800 font-medium">{t.impactMetric}</span>
                    {t.status === 'pending' ? (
                      <button 
                        onClick={() => onApproveTask(t.id)}
                        className="px-3 py-1 bg-emerald-700 text-white text-[10px] font-semibold uppercase tracking-wider hover:bg-emerald-800 transition-colors shadow-2xs"
                      >
                        Approve
                      </button>
                    ) : (
                      <span className="text-xs font-mono font-bold text-emerald-700 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span> Approved
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button 
                onClick={() => setReviewModalOpen(false)}
                className="px-5 py-2 bg-[#1A1A1A] text-[#F2F1EC] text-xs uppercase tracking-widest hover:bg-black transition-colors"
              >
                Close Queue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
