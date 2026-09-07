import React, { useState } from 'react';
import { AGENTS } from '../data';
import { PendingTask } from '../types';

interface CockpitViewProps {
  pendingTasks: PendingTask[];
  onApproveTask: (id: string) => void;
  onBackHome: () => void;
  onSelectAgent?: (agentId: string) => void;
}

export const CockpitView: React.FC<CockpitViewProps> = ({
  pendingTasks,
  onApproveTask,
  onBackHome,
  onSelectAgent
}) => {
  const [selectedDomain, setSelectedDomain] = useState('hypergrowth.io');
  const [promptInput, setPromptInput] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'agents' | 'tasks' | 'attribution'>('overview');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationLog, setSimulationLog] = useState<Array<{ text: string; color: string }>>([]);
  const [selectedAgentId, setSelectedAgentId] = useState('strategist');

  const runAgentMeshSimulation = () => {
    if (!promptInput.trim()) return;
    setIsSimulating(true);
    setSimulationLog([
      { text: '[MESH]: Ingesting campaign objective...', color: 'text-indigo-400' },
      { text: `[TARGET]: Domain ${selectedDomain}`, color: 'text-zinc-400' }
    ]);

    setTimeout(() => {
      setSimulationLog(prev => [...prev, { text: '[AGENT 1 - Strategist AI]: Analyzing market segment & 14 keyword gaps...', color: 'text-indigo-300' }]);
    }, 600);

    setTimeout(() => {
      setSimulationLog(prev => [...prev, { text: '[AGENT 2 - Content Writer AI]: Synthesizing 2 pillar briefs + email sequence...', color: 'text-emerald-300' }]);
    }, 1200);

    setTimeout(() => {
      setSimulationLog(prev => [...prev, { text: '[AGENT 3 - SEO Agent]: Generating JSON-LD entities & canonical validation...', color: 'text-rose-300' }]);
    }, 1800);

    setTimeout(() => {
      setSimulationLog(prev => [...prev, { text: '[AGENT 4 - Social Media AI]: Queueing 4 platform-specific distribution posts...', color: 'text-sky-300' }]);
    }, 2400);

    setTimeout(() => {
      setSimulationLog(prev => [
        ...prev,
        { text: '[AGENT 5 - Paid Marketing AI]: Calibrating Google & LinkedIn ad sets for target CPA...', color: 'text-amber-300' },
        { text: '✓ Multi-Agent mesh execution dispatched to Human-in-the-Loop review queue!', color: 'text-emerald-400 font-bold' }
      ]);
      setIsSimulating(false);
      setPromptInput('');
    }, 3000);
  };

  const selectedAgent = AGENTS.find(a => a.id === selectedAgentId) || AGENTS[0];

  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 pt-24 pb-20">
      {/* Cockpit Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#1A1A1A]">
        <div>
          <div className="flex items-center gap-3">
            <button 
              onClick={onBackHome}
              className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] font-sans font-medium text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F2F1EC] bg-[#FAF9F6] px-3.5 py-1.5 border border-[#1A1A1A] transition-all"
            >
              <span className="material-symbols-outlined text-[15px]">arrow_back</span>
              Back to Exhibition
            </button>
            <span className="text-[10px] uppercase font-mono tracking-widest bg-[#1A1A1A] text-[#F2F1EC] font-semibold px-2.5 py-1 flex items-center gap-1.5 border border-[#1A1A1A]">
              <span className="w-1.5 h-1.5 bg-[#FAF9F6] inline-block animate-pulse"></span> Live Operational Mesh
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] tracking-tight mt-3">
            Multi-Agent Command Cockpit
          </h1>
          <div className="w-12 h-[1px] bg-[#1A1A1A] my-2"></div>
          <p className="text-sm text-[#58554E] font-sans">Autonomous orchestration mesh for high-velocity marketing operations.</p>
        </div>

        {/* Domain and Channel Switcher */}
        <div className="flex items-center gap-2">
          <div className="bg-[#FAF9F6] border border-[#1A1A1A] px-4 py-2 text-xs font-mono text-[#1A1A1A] flex items-center gap-2">
            <span className="text-[#58554E] uppercase tracking-wider text-[10px]">Domain:</span>
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="bg-transparent font-bold focus:outline-none cursor-pointer"
            >
              <option value="hypergrowth.io">hypergrowth.io</option>
              <option value="acmecloud.ai">acmecloud.ai</option>
              <option value="fintechscale.co">fintechscale.co</option>
            </select>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 my-6 overflow-x-auto pb-1">
        {[
          { id: 'overview', label: 'Intelligence Overview', icon: 'dashboard' },
          { id: 'agents', label: 'Agent Mesh Control', icon: 'psychology' },
          { id: 'tasks', label: `Review Queue (${pendingTasks.filter(t => t.status === 'pending').length})`, icon: 'verified_user' },
          { id: 'attribution', label: 'Attribution Matrix', icon: 'insights' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.14em] font-sans font-medium whitespace-nowrap transition-all border border-[#1A1A1A] ${
              activeTab === tab.id
                ? 'bg-[#1A1A1A] text-[#F2F1EC]'
                : 'bg-[#FAF9F6] text-[#1A1A1A] hover:bg-[#E8E7E0]'
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Interactive Grid */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Prompt Dispatcher Bar */}
          <div className="bg-[#FAF9F6] border border-[#1A1A1A] p-5 space-y-3 shadow-none">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A] flex items-center gap-1.5 font-bold">
                <span className="material-symbols-outlined text-[16px]">bolt</span>
                Dispatch Directives to All 5 Agents
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#58554E]">Shared Context Protocol</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                placeholder="e.g. Initiate high-intent enterprise campaign for Q3 product launch..."
                className="flex-1 bg-[#E8E7E0]/50 border border-[#1A1A1A] px-4 py-2.5 text-xs text-[#1A1A1A] placeholder:text-[#8A8780] focus:outline-none font-sans"
                onKeyDown={(e) => e.key === 'Enter' && runAgentMeshSimulation()}
              />
              <button
                onClick={runAgentMeshSimulation}
                disabled={isSimulating || !promptInput.trim()}
                className="bg-[#1A1A1A] hover:bg-black disabled:opacity-40 text-[#F2F1EC] font-sans uppercase tracking-[0.16em] text-xs px-6 py-2.5 transition-all flex items-center justify-center gap-2 border border-[#1A1A1A]"
              >
                {isSimulating ? (
                  <>
                    <span className="material-symbols-outlined text-[16px] animate-spin">refresh</span>
                    Orchestrating...
                  </>
                ) : (
                  <>
                    <span>Execute Mesh</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </>
                )}
              </button>
            </div>

            {/* Simulation live log */}
            {simulationLog.length > 0 && (
              <div className="bg-[#121214] text-[#F2F1EC] font-mono text-xs p-4 space-y-1.5 mt-2 border border-[#1A1A1A] rounded-xs shadow-inner">
                {simulationLog.map((log, i) => (
                  <div key={i} className={`leading-relaxed ${log.color}`}>{log.text}</div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#FAF9F6] border border-[#1A1A1A] border-t-4 border-t-indigo-600 p-5">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#58554E] block">Autonomous Actions</span>
              <p className="text-3xl font-serif font-light text-[#1A1A1A] mt-1">142,890</p>
              <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-300 px-1.5 py-0.5 inline-block mt-2">↑ 38% vs prior cycle</span>
            </div>
            <div className="bg-[#FAF9F6] border border-[#1A1A1A] border-t-4 border-t-emerald-600 p-5">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#58554E] block">Agent Mesh Health</span>
              <p className="text-3xl font-serif font-light text-[#1A1A1A] mt-1">5 of 5 Live</p>
              <span className="text-[10px] font-mono font-semibold text-emerald-800 bg-emerald-100 border border-emerald-400 px-1.5 py-0.5 inline-flex items-center gap-1 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                Synchronized Memory
              </span>
            </div>
            <div className="bg-[#FAF9F6] border border-[#1A1A1A] border-t-4 border-t-rose-600 p-5">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#58554E] block">Organic AI Citations</span>
              <p className="text-3xl font-serif font-light text-[#1A1A1A] mt-1">94,210</p>
              <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-300 px-1.5 py-0.5 inline-block mt-2">↑ 127% AI Presence</span>
            </div>
            <div className="bg-[#FAF9F6] border border-[#1A1A1A] border-t-4 border-t-amber-600 p-5">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#58554E] block">Effective ROAS</span>
              <p className="text-3xl font-serif font-light text-[#1A1A1A] mt-1">4.82x</p>
              <span className="text-[10px] font-mono font-semibold text-amber-900 bg-amber-50 border border-amber-300 px-1.5 py-0.5 inline-block mt-2">Unified Multi-Channel</span>
            </div>
          </div>
        </div>
      )}

      {/* Agents Mesh Control Tab */}
      {activeTab === 'agents' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 space-y-2">
            {AGENTS.map((agent) => {
              const isSelected = selectedAgentId === agent.id;
              return (
                <button
                  key={agent.id}
                  onClick={() => setSelectedAgentId(agent.id)}
                  className={`w-full text-left p-4 border transition-all ${
                    isSelected
                      ? `${agent.theme.bg} text-white border-black shadow-sm`
                      : `bg-[#FAF9F6] text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A] hover:bg-white`
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className={`w-9 h-9 flex items-center justify-center border shadow-xs transition-transform ${
                        isSelected 
                          ? 'bg-white text-black border-white scale-105' 
                          : `${agent.theme.lightBg} ${agent.theme.text} ${agent.theme.border}`
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">{agent.icon}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-base">{agent.name}</h4>
                        <span 
                          className="w-2 h-2 rounded-full inline-block"
                          style={{ backgroundColor: agent.color }}
                        ></span>
                      </div>
                      <span className={`text-[10px] uppercase font-mono tracking-wider ${isSelected ? 'text-white/80' : 'text-[#58554E]'}`}>
                        {agent.role}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className={`md:col-span-8 bg-[#FAF9F6] border border-[#1A1A1A] border-t-4 p-6 space-y-4 shadow-xs`} style={{ borderTopColor: selectedAgent.color }}>
            <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/20">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 flex items-center justify-center text-white shadow-xs"
                  style={{ backgroundColor: selectedAgent.color }}
                >
                  <span className="material-symbols-outlined text-[20px]">{selectedAgent.icon}</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#1A1A1A]">{selectedAgent.name}</h3>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-[#58554E] mt-0.5">{selectedAgent.tagline}</p>
                </div>
              </div>
              <span 
                className="text-[10px] uppercase font-mono tracking-widest px-3 py-1 font-bold border"
                style={{
                  backgroundColor: `${selectedAgent.color}15`,
                  color: selectedAgent.color,
                  borderColor: selectedAgent.color
                }}
              >
                ● Active in Mesh
              </span>
            </div>

            <div>
              <h5 className="text-[10px] uppercase font-mono tracking-widest text-[#1A1A1A] mb-2 font-bold">Operational Capabilities</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedAgent.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#58554E] bg-white p-2.5 border border-[#1A1A1A]/15 shadow-2xs">
                    <span className="material-symbols-outlined text-[15px]" style={{ color: selectedAgent.color }}>check_circle</span>
                    {cap}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-white border border-[#1A1A1A]/20 space-y-2 shadow-2xs">
              <div className="flex items-center justify-between text-xs font-mono">
                <span 
                  className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 border"
                  style={{
                    backgroundColor: `${selectedAgent.color}15`,
                    color: selectedAgent.color,
                    borderColor: `${selectedAgent.color}40`
                  }}
                >
                  {selectedAgent.sampleOutput.type}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#58554E] font-semibold">{selectedAgent.sampleOutput.metrics}</span>
              </div>
              <h5 className="font-serif text-base text-[#1A1A1A] pt-1">{selectedAgent.sampleOutput.title}</h5>
              <p className="text-xs text-[#58554E] leading-relaxed font-sans">{selectedAgent.sampleOutput.content}</p>
              
              {onSelectAgent && (
                <div className="pt-3 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#58554E]">Operational Rigor: 99.8% Grounded</span>
                  <button
                    onClick={() => onSelectAgent(selectedAgent.id)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-white text-xs font-sans uppercase tracking-[0.14em] font-semibold transition-all hover:opacity-90 shadow-xs"
                    style={{ backgroundColor: selectedAgent.color }}
                  >
                    <span>Inspect Full {selectedAgent.name.split(' ')[0]} Page</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Pending Approvals Tab */}
      {activeTab === 'tasks' && (
        <div className="bg-[#FAF9F6] border border-[#1A1A1A] p-6 space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/20">
            <div>
              <h3 className="font-serif text-2xl text-[#1A1A1A]">Human-in-the-Loop Governance Queue</h3>
              <p className="text-xs text-[#58554E] font-sans">Review, calibrate, and authorize autonomous proposals before dispatch.</p>
            </div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-amber-800 bg-amber-50 border border-amber-300 px-3 py-1 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              {pendingTasks.filter(t => t.status === 'pending').length} Action Items Pending
            </span>
          </div>

          <div className="space-y-3">
            {pendingTasks.map((task) => {
              const matchedAgent = AGENTS.find(a => a.id === task.agentId) || AGENTS[0];
              return (
                <div key={task.id} className="p-5 bg-white border border-[#1A1A1A]/20 space-y-3 shadow-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span 
                        className="w-7 h-7 text-white flex items-center justify-center text-xs shadow-2xs"
                        style={{ backgroundColor: matchedAgent.color }}
                      >
                        <span className="material-symbols-outlined text-[15px]">{task.agentIcon}</span>
                      </span>
                      <span className="font-serif text-sm font-semibold text-[#1A1A1A]">{task.agentName}</span>
                      <span className="text-[10px] uppercase font-mono text-[#58554E]">• {task.channel}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#8A8780]">{task.timestamp}</span>
                  </div>

                  <p className="font-serif text-base text-[#1A1A1A]">{task.title}</p>
                  <p className="text-xs text-[#58554E] leading-relaxed font-sans">{task.preview}</p>

                  <div className="flex items-center justify-between pt-3 border-t border-[#1A1A1A]/15">
                    <span className="text-[11px] font-mono font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5">
                      {task.impactMetric}
                    </span>
                    {task.status === 'pending' ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onApproveTask(task.id)}
                          className="px-4 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white uppercase tracking-[0.14em] font-sans text-xs transition-colors border border-emerald-800 shadow-2xs font-semibold flex items-center gap-1.5"
                        >
                          <span className="material-symbols-outlined text-[14px]">check</span>
                          Authorize & Dispatch
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs font-mono text-emerald-700 font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">check_circle</span>
                        Authorized & Live
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Attribution Tab */}
      {activeTab === 'attribution' && (
        <div className="bg-[#FAF9F6] border border-[#1A1A1A] p-6 space-y-6">
          <div className="pb-4 border-b border-[#1A1A1A]/20">
            <h3 className="font-serif text-2xl text-[#1A1A1A]">Multi-Touch Attribution Matrix</h3>
            <p className="text-xs text-[#58554E] font-sans">Empirical correlation between autonomous agent activations and converted enterprise contract value.</p>
          </div>

          {/* Color stacked attribution bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-[#58554E]">
              <span className="uppercase tracking-wider text-[10px] font-semibold text-[#1A1A1A]">Attribution Share by Agent</span>
              <span>100% Blended Attribution</span>
            </div>
            <div className="h-6 w-full flex overflow-hidden border border-[#1A1A1A] shadow-2xs">
              <div className="bg-indigo-600 h-full flex items-center justify-center text-[10px] font-mono text-white font-bold" style={{ width: '24%' }} title="Strategist: 24%">24%</div>
              <div className="bg-emerald-600 h-full flex items-center justify-center text-[10px] font-mono text-white font-bold" style={{ width: '31%' }} title="Content Writer: 31%">31%</div>
              <div className="bg-rose-600 h-full flex items-center justify-center text-[10px] font-mono text-white font-bold" style={{ width: '18%' }} title="SEO Agent: 18%">18%</div>
              <div className="bg-sky-600 h-full flex items-center justify-center text-[10px] font-mono text-white font-bold" style={{ width: '12%' }} title="Social Media: 12%">12%</div>
              <div className="bg-amber-600 h-full flex items-center justify-center text-[10px] font-mono text-white font-bold" style={{ width: '15%' }} title="Paid Marketing: 15%">15%</div>
            </div>
          </div>

          {/* Agent contribution breakdown cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {AGENTS.map((agent) => (
              <div key={agent.id} className="bg-white border border-[#1A1A1A]/20 border-t-3 p-3 space-y-1 shadow-2xs" style={{ borderTopColor: agent.color }}>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: agent.color }}></span>
                  <span className="text-[11px] font-serif font-bold text-[#1A1A1A] truncate">{agent.name}</span>
                </div>
                <div className="text-xl font-serif text-[#1A1A1A] pt-1">
                  {agent.id === 'strategist' ? '24%' : agent.id === 'writer' ? '31%' : agent.id === 'seo' ? '18%' : agent.id === 'social' ? '12%' : '15%'}
                </div>
                <span className="text-[9px] font-mono text-[#58554E] block uppercase tracking-wider">
                  {agent.id === 'writer' ? '+42k Organic' : agent.id === 'paid' ? '5.4x ROAS' : agent.id === 'seo' ? '+280 Citations' : agent.id === 'social' ? '68k Impressions' : 'Strategic Roadmap'}
                </span>
              </div>
            ))}
          </div>

          <div className="p-6 bg-white border border-[#1A1A1A]/20 text-center space-y-2">
            <span className="material-symbols-outlined text-4xl text-indigo-600">insights</span>
            <p className="font-serif text-lg text-[#1A1A1A]">4.82x Blended ROAS Synchronized Across Channels</p>
            <div className="w-12 h-[1px] bg-[#1A1A1A] mx-auto"></div>
            <p className="text-xs text-[#58554E] max-w-md mx-auto font-sans">Every organic citation, longform essay, and media asset carries immutable cryptographic attribution telemetry.</p>
          </div>
        </div>
      )}
    </div>
  );
};
