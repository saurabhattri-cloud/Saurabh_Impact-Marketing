import React, { useState } from 'react';

export const ChatConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    {
      sender: 'ai',
      text: "👋 Hi! I'm the Impact AI Concierge. Tell me your website URL or marketing challenge, and I'll route it through the five specialized agents."
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    setMessages(prev => [...prev, { sender: 'user', text: query }]);
    if (!textToSend) setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "Our multi-agent mesh coordinates your content, SEO, and paid campaigns simultaneously. Let's start with a trial audit!";
      const lower = query.toLowerCase();

      if (lower.includes('context') || lower.includes('mesh') || lower.includes('share')) {
        reply = "The 5 agents share a unified semantic vector graph. When Content Strategist identifies a keyword gap, Writer drafts the copy, SEO optimizes schema tags, Social schedules distribution, and Paid tests ad copy with that exact messaging.";
      } else if (lower.includes('chatgpt') || lower.includes('difference') || lower.includes('jasper')) {
        reply = "While single-purpose tools only generate text, Impact AI executes the full marketing cycle: research, writing, on-page SEO, social scheduling, and paid ad optimization with real-time attribution feedback.";
      } else if (lower.includes('safe') || lower.includes('privacy') || lower.includes('data')) {
        reply = "Your data is strictly segregated in tenant-isolated VPCs and encrypted with AES-256. We never use your proprietary content to train public models. We are SOC 2 Type II certified.";
      } else if (lower.includes('review') || lower.includes('approval') || lower.includes('human')) {
        reply = "You retain 100% granular human-in-the-loop sign-off. Zero content, posts, or ad spend changes go live without explicit confirmation in your review queue.";
      }

      setMessages(prev => [...prev, { sender: 'ai', text: reply }]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <aside aria-label="AI Assistant" className="fixed bottom-6 right-6 z-40">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-indigo-700 hover:bg-indigo-800 text-white border border-indigo-900 py-2.5 px-4 flex items-center gap-2.5 shadow-xl transition-all rounded-xs"
      >
        <div className="w-5 h-5 bg-white text-indigo-700 flex items-center justify-center text-[10px] font-serif font-bold rounded-2xs">
          <span className="material-symbols-outlined text-[13px]">smart_toy</span>
        </div>
        <span className="font-sans uppercase tracking-[0.14em] text-xs font-semibold">Concierge</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
      </button>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 w-80 sm:w-96 bg-[#FAF9F6] border border-[#1A1A1A] p-4 shadow-2xl text-left flex flex-col max-h-[480px]">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#1A1A1A] mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-indigo-700 text-white flex items-center justify-center font-serif text-xs font-bold shadow-2xs">
                I
              </div>
              <div>
                <div className="font-serif text-sm text-[#1A1A1A] font-bold">Impact Concierge</div>
                <span className="text-[9px] uppercase font-mono tracking-widest text-emerald-700 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  Mesh Connected
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-[#58554E] hover:text-[#1A1A1A]"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          {/* Quick Prompts */}
          <div className="flex gap-1.5 overflow-x-auto pb-2 mb-2">
            {[
              "How does the agent mesh work?",
              "What about human approval?",
              "Difference from ChatGPT?"
            ].map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="whitespace-nowrap text-[10px] font-mono bg-white border border-[#1A1A1A]/20 text-[#1A1A1A] px-2.5 py-1 hover:bg-indigo-50 hover:border-indigo-400 hover:text-indigo-800 transition-colors shrink-0 shadow-2xs"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages list */}
          <div className="flex-1 overflow-y-auto space-y-2.5 text-xs pr-1 mb-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-3 text-xs leading-relaxed ${
                  m.sender === 'ai'
                    ? 'bg-white text-[#1A1A1A] border border-[#1A1A1A]/15 border-l-3 border-l-indigo-600 mr-4 font-sans shadow-2xs'
                    : 'bg-indigo-900 text-white ml-6 text-right font-sans border border-indigo-950 shadow-2xs'
                }`}
              >
                {m.text}
              </div>
            ))}
            {isTyping && (
              <div className="bg-white p-2 text-[10px] font-mono text-indigo-700 flex items-center gap-1.5 w-fit border border-indigo-200 shadow-2xs">
                <span className="material-symbols-outlined text-[13px] animate-spin">refresh</span>
                Orchestrating response...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center gap-1 bg-white p-1 border border-[#1A1A1A]/30 focus-within:border-indigo-600 transition-colors">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="bg-transparent text-xs px-2.5 py-1.5 w-full focus:outline-none text-[#1A1A1A] font-sans placeholder:text-[#8A8780]"
              placeholder="Inquire about the agent mesh..."
            />
            <button
              onClick={() => handleSend()}
              className="px-3 py-1 bg-indigo-600 text-white flex items-center justify-center shrink-0 hover:bg-indigo-700 transition-colors text-[10px] font-mono uppercase tracking-wider shadow-2xs"
            >
              <span className="material-symbols-outlined text-[14px]">send</span>
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};
