import { useState } from 'react';
import { ScreenType, PendingTask } from './types';
import { AGENTS, INITIAL_PENDING_TASKS, FAQS, COMPARISON_ROWS, HOW_IT_WORKS_STEPS } from './data';
import { Navbar } from './components/Navbar';
import { HeroBrowserCockpit } from './components/HeroBrowserCockpit';
import { CockpitView } from './components/CockpitView';
import { PricingView } from './components/PricingView';
import { HowItWorksView } from './components/HowItWorksView';
import { BlogView } from './components/BlogView';
import { ChatConcierge } from './components/ChatConcierge';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';
import { AgentsOverview } from './components/AgentsOverview';
import { AgentDetailPage } from './components/AgentDetailPage';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [selectedAgentId, setSelectedAgentId] = useState<string>('strategist');
  const [pendingTasks, setPendingTasks] = useState<PendingTask[]>(INITIAL_PENDING_TASKS);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'signin' | 'signup' }>({
    isOpen: false,
    mode: 'signup'
  });
  const [activeToast, setActiveToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setActiveToast(msg);
    setTimeout(() => setActiveToast(null), 3000);
  };

  const handleOpenAgentDetail = (agentId: string) => {
    setSelectedAgentId(agentId);
    setCurrentScreen('agent-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddTaskToQueue = (task: PendingTask) => {
    setPendingTasks(prev => [task, ...prev]);
    showToast(`Task "${task.title}" added to Review Queue!`);
  };

  const handleApproveTask = (id: string) => {
    setPendingTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, status: 'approved' } : t))
    );
    showToast('Task approved and deployed to marketing channel!');
  };

  const handleRejectTask = (id: string) => {
    setPendingTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, status: 'rejected' } : t))
    );
    showToast('Task returned to agent for revision.');
  };

  return (
    <div className="min-h-screen bg-[#F2F1EC] text-[#1A1A1A] flex flex-col selection:bg-[#1A1A1A] selection:text-[#F2F1EC]">
      {/* Toast Alert */}
      {activeToast && (
        <div className="fixed top-24 right-6 z-50 bg-[#1A1A1A] text-[#F2F1EC] text-xs font-mono px-4 py-2.5 shadow-2xl flex items-center gap-2 border border-[#1A1A1A]">
          <span className="material-symbols-outlined text-[#F2F1EC] text-[16px]">check_circle</span>
          {activeToast}
        </div>
      )}

      {/* Global Navbar */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={(screen) => {
          setCurrentScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSignIn={() => setAuthModal({ isOpen: true, mode: 'signin' })}
        onOpenTryFree={() => setAuthModal({ isOpen: true, mode: 'signup' })}
      />

      {/* Auth Modal */}
      <AuthModal
        mode={authModal.mode}
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        onSuccess={(email) => {
          showToast(`Account confirmed for ${email}`);
          setCurrentScreen('cockpit');
        }}
      />

      {/* Screen Views */}
      <main className="flex-1">
        {currentScreen === 'cockpit' ? (
          <CockpitView
            pendingTasks={pendingTasks}
            onApproveTask={handleApproveTask}
            onBackHome={() => setCurrentScreen('home')}
            onSelectAgent={handleOpenAgentDetail}
          />
        ) : currentScreen === 'agents' ? (
          <AgentsOverview
            onSelectAgent={handleOpenAgentDetail}
            onLaunchCockpit={() => setCurrentScreen('cockpit')}
            onStartTrial={() => setAuthModal({ isOpen: true, mode: 'signup' })}
          />
        ) : currentScreen === 'agent-detail' ? (
          <AgentDetailPage
            agentId={selectedAgentId}
            onSelectAgent={handleOpenAgentDetail}
            onBackToOverview={() => setCurrentScreen('agents')}
            onAddTaskToQueue={handleAddTaskToQueue}
            onNavigateToCockpit={() => setCurrentScreen('cockpit')}
          />
        ) : currentScreen === 'pricing' ? (
          <PricingView onGetStarted={() => setAuthModal({ isOpen: true, mode: 'signup' })} />
        ) : currentScreen === 'how-it-works' ? (
          <HowItWorksView onLaunchTrial={() => setCurrentScreen('cockpit')} />
        ) : currentScreen === 'blog' ? (
          <BlogView />
        ) : (
          /* HOME LANDING SCREEN */
          <div className="flex flex-col w-full">
            {/* Top Subtle Announcement Badge */}
            <section className="w-full flex justify-center pt-28 pb-4 px-4 relative">
              <div 
                onClick={() => setCurrentScreen('agents')}
                className="inline-flex items-center gap-2.5 bg-[#FAF9F6] border border-[#1A1A1A] px-4 py-1.5 shadow-sm hover:border-indigo-600 transition-all cursor-pointer group"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-[#1A1A1A]">
                  Impact AI 2.0 Specimen Released
                </span>
                <span className="text-[#8A8780]">|</span>
                <span className="text-[10px] uppercase tracking-[0.16em] font-sans font-medium text-indigo-700 group-hover:underline flex items-center gap-1">
                  Explore 5 Multi-Agents
                  <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                </span>
              </div>
            </section>

            {/* Hero Section in Artistic Flair Style */}
            <section className="w-full max-w-[1240px] mx-auto px-6 pt-4 pb-16 flex flex-col items-center text-center relative">
              <div className="absolute top-0 right-10 text-[140px] font-serif font-black text-[#1A1A1A]/[0.03] select-none pointer-events-none hidden md:block">
                042
              </div>

              <span className="text-[10px] uppercase font-sans tracking-[0.3em] font-medium text-[#58554E] mb-3">
                COLLECTION NO. 042 / AUTONOMOUS MARKETING ENGINE
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-serif text-[#1A1A1A] max-w-4xl tracking-tight leading-[1.08] mb-4">
                Your entire digital marketing team —{' '}
                <span className="font-serif italic font-normal">powered by AI</span>, guided by your expertise.
              </h1>

              <div className="w-16 h-[1px] bg-[#1A1A1A] my-4"></div>

              <p className="text-base sm:text-lg text-[#58554E] max-w-2xl mx-auto mb-8 leading-relaxed font-sans">
                Five specialized AI agents orchestrate strategy, longform content, semantic SEO, social distribution, and paid media — delivering compounding output with total governance.
              </p>

              {/* Action Buttons & Features Pill */}
              <div className="w-full max-w-2xl mx-auto mb-12 flex flex-col items-center gap-4">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                  <button
                    onClick={() => setAuthModal({ isOpen: true, mode: 'signup' })}
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1A1A1A] text-[#F2F1EC] uppercase tracking-[0.16em] text-xs font-sans font-medium px-8 py-3.5 hover:bg-black border border-[#1A1A1A] transition-all active:scale-95 gap-2"
                  >
                    <span>Start Free Trial</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>

                  <button
                    onClick={() => setCurrentScreen('cockpit')}
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F2F1EC] uppercase tracking-[0.16em] text-xs font-sans font-medium px-8 py-3.5 transition-all flex items-center gap-2"
                  >
                    <span>Explore Interactive Cockpit</span>
                    <span className="material-symbols-outlined text-[16px]">play_circle</span>
                  </button>
                </div>

                <div className="w-full bg-[#FAF9F6] border border-[#1A1A1A] py-2.5 px-4 flex items-center justify-center shadow-xs">
                  <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A] whitespace-nowrap overflow-x-auto">
                    <span className="flex items-center gap-1.5 font-semibold text-indigo-700">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block animate-pulse"></span> Multi-Agent Mesh
                    </span>
                    <span className="text-[#8A8780]">•</span>
                    <span className="flex items-center gap-1.5 font-medium text-amber-700">
                      <span className="material-symbols-outlined text-[15px] text-amber-600">bolt</span> Instant Citations & Search
                    </span>
                    <span className="text-[#8A8780]">•</span>
                    <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                      <span className="material-symbols-outlined text-[15px] text-emerald-600">insights</span> Unified Attribution
                    </span>
                    <span className="text-[#8A8780]">•</span>
                    <span className="flex items-center gap-1.5 font-medium text-sky-700">
                      <span className="material-symbols-outlined text-[15px] text-sky-600">verified</span> SOC-2 Certified
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Browser Frame Mockup */}
              <HeroBrowserCockpit
                onOpenFullCockpit={() => setCurrentScreen('cockpit')}
                pendingTasks={pendingTasks}
                onApproveTask={handleApproveTask}
                onRejectTask={handleRejectTask}
              />
            </section>

            {/* Social Proof & Trusted By Logos Section */}
            <section className="w-full border-y border-[#1A1A1A] bg-[#E8E7E0] py-8 px-6">
              <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <p className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#58554E] font-semibold">Exhibition Proven</p>
                  <p className="font-serif text-lg text-[#1A1A1A]">Trusted by scale-ups, publishing houses & modern brands</p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-8 opacity-85">
                  <div className="flex items-center gap-1.5 font-serif tracking-widest text-[#1A1A1A] text-sm font-semibold">
                    HYPERFLOW.
                  </div>
                  <div className="flex items-center gap-1.5 font-serif italic text-[#1A1A1A] text-sm">
                    Kinetic Labs
                  </div>
                  <div className="flex items-center gap-1.5 font-serif tracking-wider text-[#1A1A1A] text-sm font-semibold">
                    NEXUS B2B
                  </div>
                  <div className="flex items-center gap-1.5 font-serif italic text-[#1A1A1A] text-sm">
                    Elevate Group
                  </div>
                  <div className="flex items-center gap-1.5 font-serif tracking-widest text-[#1A1A1A] text-sm font-semibold">
                    METRICX
                  </div>
                </div>
              </div>
            </section>

            {/* The Problem You Know Too Well Section */}
            <section className="w-full max-w-[1240px] mx-auto px-6 py-20 border-b border-[#1A1A1A]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-5 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8E7E0] border border-[#1A1A1A] text-[#1A1A1A] text-[10px] uppercase tracking-[0.2em] font-sans font-semibold">
                    <span className="material-symbols-outlined text-[14px]">warning</span> The Fragmented Reality
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] tracking-tight">
                    The Problem You Know <span className="font-serif italic font-normal">Too Well</span>
                  </h2>
                  <div className="w-12 h-[1px] bg-[#1A1A1A]"></div>
                  <p className="text-base text-[#58554E] leading-relaxed font-sans">
                    Your team is stretched thin. You are juggling fragmented point solutions that lack memory. Strategy lives in one tool, content in another, analytics in a third. Nothing connects.
                  </p>
                  <p className="text-sm text-[#58554E] leading-relaxed font-sans">
                    Impact AI flips this operational burden. Autonomous agents execute coordinated initiatives while your leadership focuses on vision and strategy.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setCurrentScreen('how-it-works')}
                      className="inline-flex items-center gap-2 text-[#1A1A1A] font-sans uppercase tracking-[0.16em] text-xs font-semibold hover:opacity-70 border-b border-[#1A1A1A] pb-0.5"
                    >
                      See how the orchestration works
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>

                {/* 65% Stat Feature Card */}
                <div className="lg:col-span-6">
                  <div className="bg-[#FAF9F6] p-8 border border-[#1A1A1A] relative overflow-hidden text-left shadow-none">
                    <div className="relative z-10 space-y-4">
                      <span className="text-7xl font-serif font-light text-[#1A1A1A] block tracking-tight leading-none">65%</span>
                      <h3 className="text-xl font-serif text-[#1A1A1A]">
                        of marketing time is absorbed by execution and manual routine.
                      </h3>
                      <p className="text-xs sm:text-sm text-[#58554E] leading-relaxed">
                        Not strategy, not creative direction, and not growth. Five autonomous agents eliminate this operational tax through unified context and shared data.
                      </p>
                      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#1A1A1A]">
                        <div className="p-4 bg-rose-50/80 border border-rose-200">
                          <span className="text-[10px] uppercase tracking-wider text-rose-800 font-bold flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block"></span>
                            Without Impact AI
                          </span>
                          <span className="text-base font-serif text-rose-950 mt-1 block font-medium">12+ Siloed Tools</span>
                          <span className="text-[11px] font-mono text-rose-700/80">Zero shared memory</span>
                        </div>
                        <div className="p-4 bg-emerald-950 text-emerald-50 border border-emerald-900 shadow-xs">
                          <span className="text-[10px] uppercase tracking-wider text-emerald-300 font-bold flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                            With Impact AI
                          </span>
                          <span className="text-base font-serif text-white mt-1 block font-medium">1 Unified Engine</span>
                          <span className="text-[11px] font-mono text-emerald-300/90">Autonomous mesh</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Five Agents Showcase */}
            <section className="w-full bg-[#E8E7E0] py-20 border-b border-[#1A1A1A]">
              <div className="max-w-[1240px] mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF9F6] border border-[#1A1A1A] text-[#1A1A1A] text-[10px] uppercase tracking-[0.2em] font-sans font-semibold mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span> Complete Marketing Mesh
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] tracking-tight mb-3">
                    Five Agents. One Platform. <span className="font-serif italic font-normal">Every Discipline.</span>
                  </h2>
                  <div className="w-16 h-[1px] bg-[#1A1A1A] mx-auto mb-4"></div>
                  <p className="text-base text-[#58554E] font-sans">
                    Each agent is purpose-built for a specific marketing discipline, yet they all share data and insights to deliver coordinated results.
                  </p>
                </div>

                {/* Modular Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                  {AGENTS.map((agent) => (
                    <div
                      key={agent.id}
                      className="bg-[#FAF9F6] p-6 border border-[#1A1A1A] hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group relative overflow-hidden"
                    >
                      {/* Top colored accent bar */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1"
                        style={{ backgroundColor: agent.color }}
                      ></div>

                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className="w-10 h-10 text-white flex items-center justify-center shadow-xs"
                            style={{ backgroundColor: agent.color }}
                          >
                            <span className="material-symbols-outlined text-[22px]">{agent.icon}</span>
                          </div>
                          <span
                            className={`text-[10px] uppercase font-mono tracking-wider font-semibold px-2 py-0.5 border ${agent.theme.badgeBg} ${agent.theme.badgeText} ${agent.theme.badgeBorder}`}
                          >
                            {agent.role.split(' ')[0]} AI
                          </span>
                        </div>

                        <h3 className="text-xl font-serif text-[#1A1A1A] mb-0.5 group-hover:text-black transition-colors">{agent.name}</h3>
                        <p className="text-[10px] uppercase font-mono tracking-widest text-[#58554E] mb-3">{agent.tagline}</p>
                        <p className="text-xs text-[#58554E] leading-relaxed mb-4 font-sans">
                          {agent.description}
                        </p>
                        <ul className="space-y-2 border-t border-[#1A1A1A]/20 pt-4 mb-6">
                          {agent.capabilities.map((cap, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-[#58554E]">
                              <span className="material-symbols-outlined text-[15px]" style={{ color: agent.color }}>check</span>
                              {cap}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        onClick={() => handleOpenAgentDetail(agent.id)}
                        className="inline-flex items-center justify-between text-[#1A1A1A] font-sans uppercase tracking-[0.16em] text-[11px] font-semibold group-hover:opacity-70 transition-opacity pt-3 border-t border-[#1A1A1A]"
                      >
                        <span>Inspect {agent.name.split(' ')[0]} Detailed Page</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                  ))}

                  {/* Sixth Card: Human-in-the-Loop Governance */}
                  <div className="bg-[#FAF9F6] p-6 border border-[#1A1A1A] flex flex-col justify-between relative overflow-hidden hover:shadow-lg transition-all">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-amber-600"></div>
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-amber-600 text-white flex items-center justify-center shadow-xs">
                          <span className="material-symbols-outlined text-[22px]">all_inclusive</span>
                        </div>
                        <span className="text-[10px] uppercase font-mono tracking-wider font-semibold px-2 py-0.5 border bg-amber-100 text-amber-900 border-amber-300">
                          100% Oversight
                        </span>
                      </div>
                      <h3 className="text-xl font-serif text-[#1A1A1A] mb-0.5">Human-in-the-Loop</h3>
                      <p className="text-[10px] uppercase font-mono tracking-widest text-[#58554E] mb-3">You Lead. AI Executes.</p>
                      <p className="text-xs text-[#58554E] leading-relaxed mb-4 font-sans">
                        Every agent shares context, so your content strategy informs your SEO, your social media amplifies your blog posts, and your paid campaigns target what is actually converting.
                      </p>
                      <div className="p-3.5 bg-amber-50/70 border border-amber-200 space-y-2 mb-4">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-amber-950 font-mono text-[11px] uppercase tracking-wider font-semibold">Approval Workflow</span>
                          <span className="text-amber-900 font-mono font-bold text-xs">100% Granular</span>
                        </div>
                        <div className="w-full bg-white h-2 border border-amber-200 overflow-hidden">
                          <div className="bg-amber-600 h-full w-4/5"></div>
                        </div>
                        <span className="text-[10px] text-amber-800 font-medium block">Zero automatic publishing without explicit verification</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setCurrentScreen('cockpit')}
                      className="inline-flex items-center justify-between text-[#1A1A1A] font-sans uppercase tracking-[0.16em] text-[11px] font-medium pt-3 border-t border-[#1A1A1A] hover:opacity-70"
                    >
                      <span>Governance Protocol</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* How They Work Together: Coordinated Product Launch Flow */}
            <section className="w-full max-w-[1240px] mx-auto px-6 py-20 border-b border-[#1A1A1A]">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#58554E] font-semibold">Exhibition Protocol</span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] tracking-tight mt-1 mb-2">
                  How They Work <span className="font-serif italic font-normal">Together</span>
                </h2>
                <div className="w-12 h-[1px] bg-[#1A1A1A] mx-auto my-3"></div>
                <p className="text-base text-[#58554E] font-sans">
                  Every agent shares context and builds on the others' output. Here is a coordinated launch with Impact AI.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-left">
                {HOW_IT_WORKS_STEPS.map((step, idx) => {
                  const stepColors = [
                    { bg: 'bg-indigo-600', text: 'text-indigo-700', border: 'border-t-indigo-500' },
                    { bg: 'bg-emerald-600', text: 'text-emerald-700', border: 'border-t-emerald-500' },
                    { bg: 'bg-rose-600', text: 'text-rose-700', border: 'border-t-rose-500' },
                    { bg: 'bg-sky-600', text: 'text-sky-700', border: 'border-t-sky-500' },
                    { bg: 'bg-amber-600', text: 'text-amber-700', border: 'border-t-amber-500' },
                  ];
                  const c = stepColors[idx % stepColors.length];
                  return (
                    <div
                      key={step.step}
                      className={`bg-[#FAF9F6] p-5 border border-[#1A1A1A] border-t-4 ${c.border} flex flex-col justify-between hover:bg-white hover:shadow-md transition-all group`}
                    >
                      <div>
                        <div className={`w-7 h-7 ${c.bg} text-white font-mono text-xs font-bold flex items-center justify-center mb-3 shadow-xs`}>
                          {step.step}
                        </div>
                        <span className={`text-[10px] font-mono ${c.text} uppercase tracking-wider font-semibold block mb-1`}>
                          {step.agent}
                        </span>
                        <h3 className="font-serif text-base text-[#1A1A1A] mb-2 font-medium">{step.title}</h3>
                        <p className="text-xs text-[#58554E] leading-relaxed font-sans">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Comparison Table */}
            <section className="w-full bg-[#E8E7E0] py-16 border-b border-[#1A1A1A]">
              <div className="max-w-[1240px] mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] tracking-tight">
                    What Sets Impact AI <span className="font-serif italic font-normal">Apart</span>
                  </h2>
                  <p className="text-sm text-[#58554E] mt-1 font-sans">
                    Not another single-purpose text prompt generator. An architectural marketing ecosystem.
                  </p>
                </div>

                <div className="max-w-3xl mx-auto bg-[#FAF9F6] border border-[#1A1A1A] overflow-hidden text-left shadow-xs">
                  <div className="grid grid-cols-12 bg-[#FAF9F6] px-6 py-4 text-xs font-mono uppercase tracking-wider text-[#1A1A1A] border-b border-[#1A1A1A]">
                    <div className="col-span-6 font-bold">Capability</div>
                    <div className="col-span-3 text-center text-[#58554E]">Traditional AI Tools</div>
                    <div className="col-span-3 text-center text-indigo-900 font-bold bg-indigo-50/70 py-1 border-x border-indigo-200">Impact AI</div>
                  </div>

                  <div className="divide-y divide-[#1A1A1A]/15 text-xs">
                    {COMPARISON_ROWS.map((row, idx) => (
                      <div key={idx} className="grid grid-cols-12 px-6 py-3.5 items-center hover:bg-white transition-colors">
                        <div className="col-span-6 font-medium text-[#1A1A1A]">{row.capability}</div>
                        <div className="col-span-3 text-center text-[#8A8780] font-mono text-[11px]">{row.traditional}</div>
                        <div className="col-span-3 text-center font-bold flex justify-center bg-indigo-50/30 py-2 border-x border-indigo-100/60">
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300">
                            <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Quantitative Results Metric Banner */}
            <section className="w-full max-w-[1240px] mx-auto px-6 py-20 border-b border-[#1A1A1A]">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] tracking-tight">
                  Documented <span className="font-serif italic font-normal">Outcomes</span>
                </h2>
                <div className="w-12 h-[1px] bg-[#1A1A1A] mx-auto my-3"></div>
                <p className="text-sm text-[#58554E] font-sans">
                  Real outcomes from teams utilizing Impact AI to compound their marketing velocity.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-[#FAF9F6] p-6 border border-[#1A1A1A] border-t-4 border-t-emerald-600 text-center hover:bg-white transition-all shadow-xs">
                  <span className="text-4xl sm:text-5xl font-serif font-light text-emerald-700 block leading-tight">10x</span>
                  <span className="font-sans uppercase tracking-wider text-[11px] font-bold text-[#1A1A1A] block mt-1">Content Output</span>
                  <p className="text-xs text-[#58554E] mt-2">Produce 10x more publication-grade content without expanding headcount</p>
                </div>
                <div className="bg-[#FAF9F6] p-6 border border-[#1A1A1A] border-t-4 border-t-amber-600 text-center hover:bg-white transition-all shadow-xs">
                  <span className="text-4xl sm:text-5xl font-serif font-light text-amber-700 block leading-tight">65%</span>
                  <span className="font-sans uppercase tracking-wider text-[11px] font-bold text-[#1A1A1A] block mt-1">Less Manual Labor</span>
                  <p className="text-xs text-[#58554E] mt-2">Shift from manual production to strategic creative direction</p>
                </div>
                <div className="bg-[#FAF9F6] p-6 border border-[#1A1A1A] border-t-4 border-t-sky-600 text-center hover:bg-white transition-all shadow-xs">
                  <span className="text-4xl sm:text-5xl font-serif font-light text-sky-700 block leading-tight">3x</span>
                  <span className="font-sans uppercase tracking-wider text-[11px] font-bold text-[#1A1A1A] block mt-1">Faster Launches</span>
                  <p className="text-xs text-[#58554E] mt-2">From concept synthesis to multi-channel deployment in hours</p>
                </div>
                <div className="bg-[#FAF9F6] p-6 border border-[#1A1A1A] border-t-4 border-t-indigo-600 text-center hover:bg-white transition-all shadow-xs">
                  <span className="text-4xl sm:text-5xl font-serif font-light text-indigo-700 block leading-tight">40%</span>
                  <span className="font-sans uppercase tracking-wider text-[11px] font-bold text-[#1A1A1A] block mt-1">Organic Traffic</span>
                  <p className="text-xs text-[#58554E] mt-2">Rank on search results and citation answers across AI engines</p>
                </div>
                <div className="col-span-2 lg:col-span-1 bg-[#FAF9F6] p-6 border border-[#1A1A1A] border-t-4 border-t-rose-600 text-center hover:bg-white transition-all shadow-xs">
                  <span className="text-4xl sm:text-5xl font-serif font-light text-rose-700 block leading-tight">5</span>
                  <span className="font-sans uppercase tracking-wider text-[11px] font-bold text-[#1A1A1A] block mt-1">Disciplines, 1 Screen</span>
                  <p className="text-xs text-[#58554E] mt-2">Unified multi-agent autonomous command center</p>
                </div>
              </div>
            </section>

            {/* Interactive Accordion FAQ Section */}
            <section className="w-full bg-[#E8E7E0] py-20 border-b border-[#1A1A1A]">
              <div className="max-w-[840px] mx-auto px-6">
                <div className="text-center mb-10">
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] tracking-tight">
                    Frequently Answered <span className="font-serif italic font-normal">Inquiries</span>
                  </h2>
                  <div className="w-12 h-[1px] bg-[#1A1A1A] mx-auto my-3"></div>
                  <p className="text-sm text-[#58554E] font-sans">
                    Everything you need to know regarding autonomous marketing agents.
                  </p>
                </div>

                <div className="space-y-3 text-left">
                  {FAQS.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div key={idx} className="bg-[#FAF9F6] border border-[#1A1A1A]">
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between text-sm sm:text-base font-serif text-[#1A1A1A] hover:opacity-75 transition-opacity"
                        >
                          <span>{faq.question}</span>
                          <span className={`material-symbols-outlined text-[#1A1A1A] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                            expand_more
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-5 text-[#58554E] text-xs sm:text-sm leading-relaxed border-t border-[#1A1A1A]/20 pt-3 font-sans">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Final High-Conversion Banner */}
            <section className="w-full max-w-[1240px] mx-auto px-6 py-20">
              <div className="bg-[#FAF9F6] border-2 border-[#1A1A1A] p-8 md:p-14 text-center relative overflow-hidden">
                <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                  <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1A1A] tracking-tight leading-tight">
                    Start with one agent.{' '}
                    <span className="font-serif italic font-normal">Scale to five</span> when ready.
                  </h2>
                  <div className="w-16 h-[1px] bg-[#1A1A1A] mx-auto my-2"></div>
                  <p className="text-sm sm:text-base text-[#58554E] font-sans">
                    No payment details required. Experience tangible multi-channel results in your first week.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => setAuthModal({ isOpen: true, mode: 'signup' })}
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1A1A1A] text-[#F2F1EC] uppercase tracking-[0.16em] text-xs font-sans font-medium px-8 py-3.5 hover:bg-black border border-[#1A1A1A] transition-all gap-2"
                    >
                      <span>Get Started Free</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                    <button
                      onClick={() => setCurrentScreen('pricing')}
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-[#1A1A1A] text-[#1A1A1A] uppercase tracking-[0.16em] text-xs font-sans font-medium px-6 py-3.5 hover:bg-[#E8E7E0] transition-all"
                    >
                      View Pricing
                    </button>
                    <button
                      onClick={() => alert("Our curatorial team is available at solutions@impactai.io or via the Concierge below.")}
                      className="w-full sm:w-auto inline-flex items-center justify-center text-[#58554E] hover:text-[#1A1A1A] uppercase tracking-[0.16em] text-xs font-sans font-medium px-4 py-3.5 transition-colors"
                    >
                      Talk to Us
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Floating Interactive Chat Concierge */}
      <ChatConcierge />

      {/* Footer */}
      <Footer onNavigate={(s) => {
        setCurrentScreen(s);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />
    </div>
  );
}
