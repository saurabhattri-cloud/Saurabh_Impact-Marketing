import React, { useState } from 'react';
import { AGENTS } from '../data';
import { AgentInfo, PendingTask } from '../types';

interface AgentDetailPageProps {
  agentId: string;
  onSelectAgent: (agentId: string) => void;
  onBackToOverview: () => void;
  onAddTaskToQueue: (task: PendingTask) => void;
  onNavigateToCockpit: () => void;
}

export const AgentDetailPage: React.FC<AgentDetailPageProps> = ({
  agentId,
  onSelectAgent,
  onBackToOverview,
  onAddTaskToQueue,
  onNavigateToCockpit
}) => {
  const currentAgent = AGENTS.find(a => a.id === agentId) || AGENTS[0];

  const [activeTab, setActiveTab] = useState<'console' | 'pipeline' | 'guardrails' | 'integrations' | 'artifacts'>('console');
  const [selectedPresetId, setSelectedPresetId] = useState<string>(currentAgent.interactiveDemo.presets[0]?.id || '');
  const [customPrompt, setCustomPrompt] = useState<string>('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionLog, setExecutionLog] = useState<string[]>([]);
  const [liveOutput, setLiveOutput] = useState<any>(currentAgent.interactiveDemo.presets[0]?.expectedOutput || null);
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Guardrail settings state
  const [autonomyMode, setAutonomyMode] = useState<'strict' | 'hybrid' | 'autonomous'>('strict');
  const [toneSelection, setToneSelection] = useState<'authoritative' | 'conversational' | 'technical'>('authoritative');
  const [creativityLevel, setCreativityLevel] = useState<number>(35);
  const [groundingStrictness, setGroundingStrictness] = useState<boolean>(true);
  const [savedGuardrailsToast, setSavedGuardrailsToast] = useState(false);

  // Integrations local state
  const [integrationStatuses, setIntegrationStatuses] = useState<Record<string, boolean>>({
    'Google Search Console': true,
    'Google Search Console API': true,
    'Ahrefs API': true,
    'Semrush Enterprise': true,
    'Notion Workspace': true,
    'Webflow CMS': true,
    'WordPress VIP': true,
    'Ghost CMS': true,
    'Google Docs API': true,
    'Google Ads API': true,
    'Meta Marketing API': true,
    'LinkedIn Campaign Manager': true,
    'Google Analytics 4': true,
    'Stripe Billing Webhooks': true,
    'LinkedIn Marketing Developer API': true,
    'X / Twitter API v2': true,
    'Meta Graph API (Instagram/FB)': true,
    'Slack Notifications': true,
    'Google Indexing API': true,
    'Cloudflare / Edge Workers': true,
    'Screaming Frog Engine': true,
    'Perplexity / AI Engine Monitor': true
  });

  // Selected preset change
  const handleSelectPreset = (presetId: string) => {
    setSelectedPresetId(presetId);
    const preset = currentAgent.interactiveDemo.presets.find(p => p.id === presetId);
    if (preset) {
      setCustomPrompt(preset.prompt);
      setLiveOutput(preset.expectedOutput);
      setExecutionLog([]);
    }
  };

  // Run execution simulation
  const handleRunConsole = () => {
    const textToRun = customPrompt.trim() || currentAgent.interactiveDemo.presets[0]?.prompt;
    if (!textToRun) return;

    setIsExecuting(true);
    setExecutionLog([
      `[INGESTION]: Loading brand tone vectors for ${currentAgent.name}...`,
      `[CONTEXT]: Cross-referencing shared marketing vector mesh...`
    ]);

    setTimeout(() => {
      setExecutionLog(prev => [
        ...prev,
        `[PARAM]: Autonomy: ${autonomyMode.toUpperCase()} | Tone: ${toneSelection.toUpperCase()}`,
        `[EXEC]: Synthesizing high-conviction output for: "${textToRun.slice(0, 45)}..."`
      ]);
    }, 600);

    setTimeout(() => {
      setExecutionLog(prev => [
        ...prev,
        `[VALIDATION]: Checking citation entities & style guide rules...`,
        `✓ Artifact generated and verified against brand guardrails!`
      ]);
      setIsExecuting(false);

      // Set output based on preset or custom
      const matchedPreset = currentAgent.interactiveDemo.presets.find(p => p.id === selectedPresetId);
      if (matchedPreset) {
        setLiveOutput(matchedPreset.expectedOutput);
      } else {
        setLiveOutput({
          title: `Autonomous ${currentAgent.role.split(' ')[0]} Specimen`,
          summary: `Synthesized tailored deliverable based on objective: "${textToRun}". Fully aligned with ${toneSelection} tone.`,
          details: [
            `Primary directive processed across 5-agent mesh with 0 errors.`,
            `Cross-referenced against competitor benchmarks and high-intent intent graphs.`,
            `Ready for one-click deployment or queue authorization.`
          ],
          metrics: `Target Impact: High Yield • Quality Confidence: 99.2%`,
          actionLabel: `Queue for Approval`
        });
      }
    }, 1400);
  };

  // Push to Review Queue
  const handleDispatchToQueue = () => {
    if (!liveOutput) return;
    const newTask: PendingTask = {
      id: `task-${Date.now()}`,
      agentId: currentAgent.id,
      agentName: currentAgent.name,
      agentIcon: currentAgent.icon,
      title: liveOutput.title,
      channel: currentAgent.role,
      timestamp: 'Just now',
      preview: liveOutput.summary,
      status: 'pending',
      impactMetric: liveOutput.metrics || 'High Strategic Impact'
    };
    onAddTaskToQueue(newTask);
  };

  const handleCopyText = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const handleSaveGuardrails = () => {
    setSavedGuardrailsToast(true);
    setTimeout(() => setSavedGuardrailsToast(false), 3000);
  };

  const toggleIntegration = (name: string) => {
    setIntegrationStatuses(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 pt-24 pb-24 text-left">
      {/* Toast Alert for Copy or Guardrails */}
      {copiedNotification && (
        <div className="fixed top-24 right-6 z-50 bg-[#1A1A1A] text-white text-xs font-mono px-4 py-2.5 shadow-2xl flex items-center gap-2 border border-white/20">
          <span className="material-symbols-outlined text-emerald-400 text-[16px]">content_copy</span>
          Copied artifact to clipboard!
        </div>
      )}

      {savedGuardrailsToast && (
        <div className="fixed top-24 right-6 z-50 bg-emerald-900 text-emerald-100 text-xs font-mono px-4 py-2.5 shadow-2xl flex items-center gap-2 border border-emerald-500">
          <span className="material-symbols-outlined text-emerald-300 text-[16px]">verified</span>
          Brand guardrails saved & calibrated across swarm!
        </div>
      )}

      {/* Top Header & Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#1A1A1A]">
        <div className="flex items-center gap-2 text-xs font-mono">
          <button
            onClick={onBackToOverview}
            className="text-[#58554E] hover:text-[#1A1A1A] uppercase tracking-wider flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[15px]">arrow_back</span>
            Autonomous Agents
          </button>
          <span className="text-[#8A8780]">/</span>
          <span className="font-bold text-[#1A1A1A] uppercase tracking-wider">{currentAgent.name}</span>
        </div>

        {/* Global Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onBackToOverview}
            className="px-3 py-1.5 bg-[#FAF9F6] hover:bg-[#E8E7E0] border border-[#1A1A1A] text-xs font-sans uppercase tracking-[0.14em] font-medium text-[#1A1A1A] flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[14px]">grid_view</span>
            View All 5 Agents
          </button>
          <button
            onClick={onNavigateToCockpit}
            className="px-3.5 py-1.5 bg-[#1A1A1A] hover:bg-black text-white text-xs font-sans uppercase tracking-[0.14em] font-medium border border-[#1A1A1A] flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[14px]">tune</span>
            Command Cockpit
          </button>
        </div>
      </div>

      {/* Fast Agent Switcher Tab Bar */}
      <div className="py-4 border-b border-[#1A1A1A] overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max">
          <span className="text-[11px] font-mono text-[#58554E] uppercase tracking-wider mr-2 font-bold flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">swap_horiz</span>
            Switch Agent:
          </span>
          {AGENTS.map((agent) => {
            const isActive = agent.id === currentAgent.id;
            return (
              <button
                key={agent.id}
                onClick={() => onSelectAgent(agent.id)}
                className={`px-3 py-1.5 text-xs font-sans uppercase tracking-[0.14em] font-medium border transition-all flex items-center gap-2 ${
                  isActive
                    ? 'text-white border-[#1A1A1A] shadow-xs'
                    : 'bg-[#FAF9F6] text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A] hover:bg-white'
                }`}
                style={{
                  backgroundColor: isActive ? agent.color : undefined
                }}
              >
                <span className="material-symbols-outlined text-[14px]">{agent.icon}</span>
                <span>{agent.name}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Agent Detail Hero Banner */}
      <div className="my-8 bg-[#FAF9F6] border-2 border-[#1A1A1A] p-6 sm:p-8 relative overflow-hidden shadow-xs">
        {/* Top Signature Color Bar */}
        <div
          className="absolute top-0 left-0 right-0 h-2.5"
          style={{ backgroundColor: currentAgent.color }}
        ></div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4 sm:gap-5">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 text-white flex items-center justify-center text-3xl sm:text-4xl shrink-0 shadow-md"
              style={{ backgroundColor: currentAgent.color }}
            >
              <span className="material-symbols-outlined text-[36px] sm:text-[44px]">{currentAgent.icon}</span>
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`text-[10px] uppercase font-mono tracking-wider font-bold px-2.5 py-0.5 border ${currentAgent.theme.badgeBg} ${currentAgent.theme.badgeText} ${currentAgent.theme.badgeBorder}`}
                >
                  {currentAgent.role}
                </span>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-300 text-[10px] font-mono font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active in Mesh
                </span>

                <span className="text-[10px] font-mono text-[#8A8780] hidden sm:inline">
                  SOC-2 Type II Certified
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1A1A] tracking-tight">
                {currentAgent.name}
              </h1>

              <p className="text-sm sm:text-base text-[#58554E] font-sans max-w-2xl leading-relaxed">
                {currentAgent.tagline} — {currentAgent.description}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
            <button
              onClick={() => setActiveTab('console')}
              className="px-6 py-3 text-white text-xs font-sans uppercase tracking-[0.16em] font-bold border transition-all active:scale-95 flex items-center justify-center gap-2 shadow-xs"
              style={{ backgroundColor: currentAgent.color, borderColor: currentAgent.color }}
            >
              <span className="material-symbols-outlined text-[16px]">play_arrow</span>
              <span>Test in Console</span>
            </button>
            <button
              onClick={handleDispatchToQueue}
              className="px-6 py-2.5 bg-[#FAF9F6] hover:bg-[#E8E7E0] border border-[#1A1A1A] text-xs font-sans uppercase tracking-[0.14em] font-semibold text-[#1A1A1A] flex items-center justify-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">send</span>
              <span>Dispatch Sample Task</span>
            </button>
          </div>
        </div>

        {/* 4 Performance Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-[#1A1A1A]/20">
          {currentAgent.metrics.map((metric, idx) => (
            <div key={idx} className="p-4 bg-white border border-[#1A1A1A]/20 shadow-2xs">
              <div className="flex items-center justify-between text-xs text-[#58554E]">
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">{metric.label}</span>
                <span className="material-symbols-outlined text-[16px]" style={{ color: currentAgent.color }}>{metric.icon}</span>
              </div>
              <p className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-light mt-1">{metric.value}</p>
              <div className="flex items-center justify-between mt-1 text-[10px] font-mono">
                <span className="text-[#8A8780] truncate">{metric.sub}</span>
                <span className="text-emerald-700 font-bold ml-1 shrink-0">{metric.trend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Internal Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-[#1A1A1A] mb-8 overflow-x-auto pb-0.5">
        {[
          { id: 'console', label: 'Interactive Console', icon: 'terminal' },
          { id: 'pipeline', label: 'Architecture & Pipeline', icon: 'account_tree' },
          { id: 'guardrails', label: 'Guardrails & Voice Tuning', icon: 'tune' },
          { id: 'integrations', label: `Connected Tools (${currentAgent.integrations.length})`, icon: 'hub' },
          { id: 'artifacts', label: `Deliverable Archive (${currentAgent.artifacts.length})`, icon: 'folder_copy' }
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 sm:px-5 py-3 text-xs uppercase tracking-[0.14em] font-sans font-semibold border-b-2 transition-all whitespace-nowrap ${
                isActive
                  ? 'text-[#1A1A1A] border-[#1A1A1A] bg-[#FAF9F6]'
                  : 'text-[#58554E] border-transparent hover:text-[#1A1A1A] hover:bg-[#E8E7E0]/50'
              }`}
              style={{
                borderBottomColor: isActive ? currentAgent.color : 'transparent'
              }}
            >
              <span className="material-symbols-outlined text-[16px]" style={{ color: isActive ? currentAgent.color : undefined }}>
                {tab.icon}
              </span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: INTERACTIVE LIVE CONSOLE */}
      {activeTab === 'console' && (
        <div className="space-y-6">
          {/* Preset Chips & Input Bar */}
          <div className="bg-[#FAF9F6] border-2 border-[#1A1A1A] p-6 space-y-4 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#1A1A1A]/20">
              <div>
                <h3 className="font-serif text-xl text-[#1A1A1A]">Agent Direct Testing Console</h3>
                <p className="text-xs text-[#58554E] font-sans">
                  Execute directives directly on {currentAgent.name} to view instant autonomous synthesis.
                </p>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 bg-white border border-[#1A1A1A]/30 text-[#1A1A1A] font-semibold">
                Model: Enterprise Gemini Flash 2.0
              </span>
            </div>

            {/* Presets List */}
            <div>
              <span className="text-[10px] uppercase font-mono text-[#58554E] tracking-wider block mb-2 font-bold">
                Recommended Execution Scenarios:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentAgent.interactiveDemo.presets.map((preset) => {
                  const isSelected = selectedPresetId === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => handleSelectPreset(preset.id)}
                      className={`px-3 py-1.5 text-xs font-sans border transition-all text-left flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-semibold'
                          : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[14px]" style={{ color: isSelected ? '#fff' : currentAgent.color }}>
                        auto_awesome
                      </span>
                      <span>{preset.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Prompt Input Box */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-[#1A1A1A] font-bold block">
                Custom Directive or Target Scenario:
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <textarea
                  rows={2}
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  placeholder={currentAgent.interactiveDemo.placeholder}
                  className="flex-1 bg-white border border-[#1A1A1A] p-3 text-xs text-[#1A1A1A] placeholder:text-[#8A8780] focus:outline-none font-sans resize-none"
                />
                <button
                  onClick={handleRunConsole}
                  disabled={isExecuting}
                  className="sm:w-48 text-white font-sans uppercase tracking-[0.16em] text-xs font-bold px-6 py-3 transition-all flex items-center justify-center gap-2 border disabled:opacity-50"
                  style={{ backgroundColor: currentAgent.color, borderColor: currentAgent.color }}
                >
                  {isExecuting ? (
                    <>
                      <span className="material-symbols-outlined text-[16px] animate-spin">refresh</span>
                      Executing...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[16px]">bolt</span>
                      Run Synthesis
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Live execution telemetry terminal */}
            {executionLog.length > 0 && (
              <div className="bg-[#121214] text-[#F2F1EC] font-mono text-xs p-4 space-y-1.5 border border-[#1A1A1A] rounded-xs shadow-inner">
                {executionLog.map((log, idx) => (
                  <div key={idx} className="leading-relaxed text-zinc-300">
                    <span className="text-emerald-400 mr-1.5">❯</span>
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Generated Artifact Display */}
          {liveOutput && (
            <div className="bg-white border-2 border-[#1A1A1A] p-6 sm:p-8 space-y-6 shadow-xs relative">
              {/* Colored header line */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: currentAgent.color }}
              ></div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#1A1A1A]/20">
                <div>
                  <span
                    className="text-[10px] uppercase font-mono tracking-wider font-bold px-2 py-0.5 border"
                    style={{
                      backgroundColor: `${currentAgent.color}15`,
                      color: currentAgent.color,
                      borderColor: `${currentAgent.color}40`
                    }}
                  >
                    Verified Deliverable Specimen
                  </span>
                  <h4 className="font-serif text-2xl text-[#1A1A1A] mt-1.5">{liveOutput.title}</h4>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyText(JSON.stringify(liveOutput, null, 2))}
                    className="px-3 py-1.5 bg-[#FAF9F6] hover:bg-[#E8E7E0] border border-[#1A1A1A] text-xs font-mono text-[#1A1A1A] flex items-center gap-1.5 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[14px]">content_copy</span>
                    Copy Specimen
                  </button>
                  <button
                    onClick={handleDispatchToQueue}
                    className="px-4 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-sans uppercase tracking-[0.14em] font-semibold border border-emerald-800 shadow-2xs flex items-center gap-1.5 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[14px]">send</span>
                    Send to Review Queue
                  </button>
                </div>
              </div>

              {/* Summary */}
              <div className="p-4 bg-[#FAF9F6] border border-[#1A1A1A]/20">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#58554E] block font-semibold mb-1">Executive Summary</span>
                <p className="text-sm text-[#1A1A1A] font-sans leading-relaxed">{liveOutput.summary}</p>
              </div>

              {/* Output Details */}
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#58554E] block font-semibold">Structured Synthesis Breakdown:</span>
                <div className="space-y-2">
                  {liveOutput.details?.map((detail: string, i: number) => (
                    <div key={i} className="p-3.5 bg-white border border-[#1A1A1A]/15 flex items-start gap-3 shadow-2xs">
                      <span
                        className="w-5 h-5 rounded-full text-white text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold"
                        style={{ backgroundColor: currentAgent.color }}
                      >
                        {i + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-[#1A1A1A] font-sans leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Pill & Channel Verification */}
              <div className="p-4 bg-emerald-50 border border-emerald-300 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-700 text-[18px]">verified</span>
                  <span className="text-xs font-mono font-semibold text-emerald-950">{liveOutput.metrics}</span>
                </div>
                <div className="text-[10px] font-mono text-emerald-800 uppercase tracking-wider">
                  Channel Readiness: 100% Validated
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: ARCHITECTURE & PIPELINE */}
      {activeTab === 'pipeline' && (
        <div className="space-y-8">
          {/* Agent Manifesto */}
          <div className="bg-[#FAF9F6] border-2 border-[#1A1A1A] p-6 sm:p-8 space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#58554E] font-bold block">
              Discipline Manifesto
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A]">
              Architectural Mission of {currentAgent.name}
            </h3>
            <div className="w-16 h-[2px]" style={{ backgroundColor: currentAgent.color }}></div>
            <p className="text-base text-[#58554E] font-sans leading-relaxed">
              {currentAgent.fullManifesto}
            </p>
          </div>

          {/* Step-by-Step Autonomous Workflow */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-2xl text-[#1A1A1A]">Autonomous Execution Pipeline</h4>
              <span className="text-xs font-mono text-[#58554E]">4-Stage Sequential Loop</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentAgent.workflows.map((wf) => (
                <div key={wf.stepNumber} className="bg-white border-2 border-[#1A1A1A] p-5 space-y-3 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span
                      className="w-8 h-8 text-white font-mono text-xs font-bold flex items-center justify-center shadow-xs"
                      style={{ backgroundColor: currentAgent.color }}
                    >
                      0{wf.stepNumber}
                    </span>
                    <span className="text-[10px] uppercase font-mono text-[#8A8780] font-semibold">Stage {wf.stepNumber} of 4</span>
                  </div>

                  <h5 className="font-serif text-lg text-[#1A1A1A]">{wf.title}</h5>
                  <p className="text-xs text-[#58554E] font-sans leading-relaxed">{wf.description}</p>

                  <div className="pt-3 border-t border-[#1A1A1A]/15 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#8A8780]">Output Artifact:</span>
                    <span className="text-[#1A1A1A] font-semibold truncate ml-1">{wf.outputArtifact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full Capabilities Matrix */}
          <div className="bg-[#FAF9F6] border border-[#1A1A1A] p-6 space-y-4">
            <h4 className="font-serif text-xl text-[#1A1A1A]">Registered Domain Competencies</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {currentAgent.capabilities.map((cap, i) => (
                <div key={i} className="p-3 bg-white border border-[#1A1A1A]/20 flex items-center gap-2.5 shadow-2xs">
                  <span className="material-symbols-outlined text-[18px]" style={{ color: currentAgent.color }}>check_circle</span>
                  <span className="text-xs text-[#1A1A1A] font-sans font-medium">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: GUARDRAILS & BRAND VOICE TUNING */}
      {activeTab === 'guardrails' && (
        <div className="bg-[#FAF9F6] border-2 border-[#1A1A1A] p-6 sm:p-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1A1A1A]/20">
            <div>
              <h3 className="font-serif text-2xl text-[#1A1A1A]">Brand Voice & Autonomy Guardrails</h3>
              <p className="text-xs text-[#58554E] font-sans">
                Set boundaries, confidence thresholds, and review gates specifically for {currentAgent.name}.
              </p>
            </div>
            <button
              onClick={handleSaveGuardrails}
              className="px-6 py-2.5 text-white font-sans uppercase tracking-[0.16em] text-xs font-bold border shadow-xs transition-transform active:scale-95"
              style={{ backgroundColor: currentAgent.color, borderColor: currentAgent.color }}
            >
              Save Brand Calibration
            </button>
          </div>

          {/* Autonomy Mode Selector */}
          <div className="space-y-3">
            <label className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] font-bold block">
              Autonomy & Approval Protocol
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                {
                  id: 'strict',
                  title: '100% Human Sign-Off (Default)',
                  desc: 'Every drafted piece, ad variation, or schema injection must be explicitly authorized in Cockpit.'
                },
                {
                  id: 'hybrid',
                  title: 'Confidence-Threshold Hybrid',
                  desc: 'Minor edits (>98% confidence) auto-deploy; high-impact changes hold for review.'
                },
                {
                  id: 'autonomous',
                  title: 'Autonomous Swarm Pilot',
                  desc: 'Continuous real-time optimization with post-dispatch audit logging.'
                }
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setAutonomyMode(opt.id as any)}
                  className={`p-4 border cursor-pointer transition-all ${
                    autonomyMode === opt.id
                      ? 'bg-white border-[#1A1A1A] shadow-sm'
                      : 'bg-[#FAF9F6] border-[#1A1A1A]/20 hover:border-[#1A1A1A]/60'
                  }`}
                  style={{
                    borderTop: autonomyMode === opt.id ? `3px solid ${currentAgent.color}` : undefined
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif text-sm font-bold text-[#1A1A1A]">{opt.title}</span>
                    <span className="material-symbols-outlined text-[16px]" style={{ color: autonomyMode === opt.id ? currentAgent.color : '#8A8780' }}>
                      {autonomyMode === opt.id ? 'radio_button_checked' : 'radio_button_unchecked'}
                    </span>
                  </div>
                  <p className="text-xs text-[#58554E] font-sans leading-relaxed">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tone of Voice Tuning */}
          <div className="space-y-3">
            <label className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] font-bold block">
              Editorial Tone Calibration
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'authoritative', label: 'Authoritative & Editorial', sub: 'High conviction, data-dense, journalistic' },
                { id: 'conversational', label: 'Conversational & Relatable', sub: 'Engaging storytelling, accessible language' },
                { id: 'technical', label: 'Technical & Academic', sub: 'Deep architectural rigor, formal citations' }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setToneSelection(t.id as any)}
                  className={`p-3.5 text-left border transition-all ${
                    toneSelection === t.id
                      ? 'bg-white border-[#1A1A1A] shadow-xs'
                      : 'bg-white/60 border-[#1A1A1A]/20 hover:border-[#1A1A1A]/50'
                  }`}
                  style={{
                    borderLeft: toneSelection === t.id ? `4px solid ${currentAgent.color}` : undefined
                  }}
                >
                  <span className="text-xs font-serif font-bold text-[#1A1A1A] block">{t.label}</span>
                  <span className="text-[11px] text-[#58554E] font-sans mt-0.5 block">{t.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Slider & Toggle Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#1A1A1A]/20">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#1A1A1A] uppercase">Creativity vs. Strictness Index</span>
                <span className="font-bold" style={{ color: currentAgent.color }}>{creativityLevel}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="80"
                value={creativityLevel}
                onChange={(e) => setCreativityLevel(Number(e.target.value))}
                className="w-full accent-indigo-700 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#8A8780]">
                <span>Deterministic (10%)</span>
                <span>Balanced (40%)</span>
                <span>Exploratory (80%)</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-[#1A1A1A] font-bold block">
                Verification Safeguards
              </span>
              <div className="p-3 bg-white border border-[#1A1A1A]/20 flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-[#1A1A1A] block">Zero Hallucination Grounding</span>
                  <span className="text-[10px] text-[#58554E] block">Requires verified external citations</span>
                </div>
                <button
                  onClick={() => setGroundingStrictness(!groundingStrictness)}
                  className={`w-11 h-6 flex items-center transition-colors px-0.5 ${groundingStrictness ? 'bg-emerald-600' : 'bg-zinc-300'}`}
                >
                  <div className={`w-5 h-5 bg-white shadow-xs transition-transform ${groundingStrictness ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: CONNECTED TOOLS & INTEGRATIONS */}
      {activeTab === 'integrations' && (
        <div className="space-y-6">
          <div className="bg-[#FAF9F6] border-2 border-[#1A1A1A] p-6 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1A1A1A]/20">
              <div>
                <h3 className="font-serif text-2xl text-[#1A1A1A]">Connected Tool Mesh</h3>
                <p className="text-xs text-[#58554E] font-sans">
                  External APIs, databases, and CMS pipelines integrated directly into {currentAgent.name}.
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-300 px-3 py-1 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Real-Time Synchronous Sync
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {currentAgent.integrations.map((tool) => {
                const isConnected = integrationStatuses[tool.name] ?? (tool.status === 'connected');
                return (
                  <div
                    key={tool.name}
                    className="p-5 bg-white border border-[#1A1A1A]/20 flex items-center justify-between gap-4 shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 text-white flex items-center justify-center shadow-xs"
                        style={{ backgroundColor: currentAgent.color }}
                      >
                        <span className="material-symbols-outlined text-[20px]">{tool.icon}</span>
                      </div>
                      <div>
                        <h5 className="font-serif text-base text-[#1A1A1A] font-medium">{tool.name}</h5>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-[#58554E]">
                          <span>{tool.category}</span>
                          <span>•</span>
                          <span className="text-emerald-700">Latency: {tool.latency}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleIntegration(tool.name)}
                      className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider font-semibold border transition-all ${
                        isConnected
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-rose-50 hover:text-rose-800 hover:border-rose-300'
                          : 'bg-zinc-100 text-zinc-600 border-zinc-300 hover:bg-emerald-50 hover:text-emerald-800'
                      }`}
                    >
                      {isConnected ? 'Connected' : 'Connect'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: DELIVERABLE ARCHIVE */}
      {activeTab === 'artifacts' && (
        <div className="space-y-6">
          <div className="bg-[#FAF9F6] border-2 border-[#1A1A1A] p-6 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1A1A1A]/20">
              <div>
                <h3 className="font-serif text-2xl text-[#1A1A1A]">Deliverable Archive & Audit History</h3>
                <p className="text-xs text-[#58554E] font-sans">
                  Recently generated strategic assets authored and indexed by {currentAgent.name}.
                </p>
              </div>
              <span className="text-xs font-mono text-[#58554E]">
                {currentAgent.artifacts.length} Verified Deliverables
              </span>
            </div>

            <div className="space-y-3 pt-2">
              {currentAgent.artifacts.map((art) => (
                <div
                  key={art.id}
                  className="p-5 bg-white border border-[#1A1A1A]/20 space-y-2.5 shadow-xs hover:border-[#1A1A1A] transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 border"
                        style={{
                          backgroundColor: `${currentAgent.color}15`,
                          color: currentAgent.color,
                          borderColor: `${currentAgent.color}40`
                        }}
                      >
                        {art.badge}
                      </span>
                      <span className="text-[11px] font-mono text-[#8A8780]">{art.type}</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-[#58554E]">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.readTimeOrSize}</span>
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-semibold">
                        {art.status}
                      </span>
                    </div>
                  </div>

                  <h5 className="font-serif text-lg text-[#1A1A1A] font-medium">{art.title}</h5>
                  <p className="text-xs text-[#58554E] font-sans leading-relaxed">{art.summary}</p>

                  <div className="pt-2 border-t border-[#1A1A1A]/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-700 font-semibold">Attribution: Cryptographically Verified</span>
                    <button
                      onClick={() => handleCopyText(`${art.title}\n${art.summary}`)}
                      className="text-[#1A1A1A] font-bold hover:underline flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[14px]">file_download</span>
                      Export Artifact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
