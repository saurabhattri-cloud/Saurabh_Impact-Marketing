import React from 'react';
import { BLOG_POSTS } from '../data';

export const BlogView: React.FC = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto px-6 pt-24 pb-20 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-[10px] uppercase font-mono tracking-widest text-[#1A1A1A] bg-[#E8E7E0] px-3.5 py-1 border border-[#1A1A1A] font-semibold">
          Monographs & Research
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#1A1A1A] tracking-tight mt-2">
          Intelligence & <span className="font-serif italic font-normal">Theoretical Insights</span>
        </h1>
        <div className="w-16 h-[1px] bg-[#1A1A1A] mx-auto my-3"></div>
        <p className="text-sm text-[#58554E] font-sans">
          Technical dispatches on agentic consensus mechanics, synthetic organic citation networks, and autonomous enterprise systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            className="bg-[#FAF9F6] p-7 border border-[#1A1A1A] hover:bg-[#E8E7E0]/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className={`px-2.5 py-0.5 font-bold uppercase tracking-wider border ${
                  post.tag.toLowerCase().includes('consensus')
                    ? 'bg-indigo-50 text-indigo-700 border-indigo-300'
                    : post.tag.toLowerCase().includes('retrieval')
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                    : 'bg-amber-50 text-amber-800 border-amber-300'
                }`}>
                  {post.tag}
                </span>
                <span className="text-[#8A8780]">{post.readTime}</span>
              </div>
              <h3 className="font-serif text-xl text-[#1A1A1A] leading-snug">
                {post.title}
              </h3>
              <p className="text-xs text-[#58554E] leading-relaxed font-sans">
                {post.excerpt}
              </p>
            </div>
            <div className="pt-4 border-t border-[#1A1A1A]/20 mt-6 flex items-center justify-between text-[10px] font-mono text-[#58554E]">
              <span className="font-semibold text-[#1A1A1A]">{post.author}</span>
              <span>{post.date}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
