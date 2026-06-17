import React, { useState } from 'react';
import { AI_VISIBILITY_FEATURES } from '../data/solutionsData';
import { Bot, Sparkles, Search, MessageSquare, Compass, Network, ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQ_ITEMS = [
  {
    id: 'faq-aeo-geo',
    question: "What are AEO & GEO and why do they matter more than traditional SEO?",
    answer: "Traditional SEO focuses on optimizing for Google's index to rank list of blue search results. AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) optimize for how dynamic AI platforms (such as OpenAI ChatGPT, Google Gemini, and Perplexity AI) extract, synthesize, and cite business brands inside natural language solutions. By embedding semantic structures, microdata schemas, and cross-platform entity references, ROSKYRO makes your business recommended by AI bots."
  },
  {
    id: 'faq-architecture',
    question: "How does Website Architecture Tuning prepare my site for AI crawlers?",
    answer: "AI scraping agents do not browse websites like human visitors. They read raw structured entity feeds, RDF data, and deep microdata tables. Our specialized Website Architecture Tuning equips your codebase with high-fidelity JSON-LD schemas and semantic layout elements, which allow LLM models to accurately parse your locations, reviews, trust credentials, and pricing metrics."
  },
  {
    id: 'faq-reputation',
    question: "How does local Google Business Optimization feed into AI search graphs?",
    answer: "A key variable that ChatGPT and search agents examine is third-party validation and review frequency. Under our Google Business Optimization framework, we build high-velocity real-time feedback loops. This star response velocity builds confidence within dynamic vector search databases, ensuring your brand stands out in high-utility local search answers."
  },
  {
    id: 'faq-qualified-leads',
    question: "Do AI Chatbots and WhatsApp Business API tools link with visibility?",
    answer: "Absolutely. Search visibility is only valuable if it triggers qualified actions. When buyers discover your brand via GEO recommendations, they expect immediate engagement. Our conversational suite—composed of custom CRM configurations, AI Chatbots, automated follow-ups, and native WhatsApp Business API setups—instantly captures and qualifies incoming buyer interest, dropping scheduling drop-offs to near zero."
  }
];

export default function VisibilityLayer() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="visibility" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      
      {/* Decorative cyber line patterns wrapping */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Cyber orbs backgrounds */}
      <div className="absolute top-[20%] right-[15%] w-96 h-96 rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[330px] h-[330px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-neon-cyan bg-neon-cyan/15 px-3 py-1 rounded-full border border-neon-cyan/25">
            The Next Era of Search Technology
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            AI Search Visibility Layer (SEO + AEO + GEO)
          </h2>
          <p className="text-slate-450 text-sm sm:text-base font-sans max-w-2xl mx-auto">
            "We don't just optimize for Google — we optimize for how AI engines like ChatGPT, Gemini, and Perplexity discover and recommend businesses."
          </p>
        </div>

        {/* Binary split: Left Side Features list / Right Side Simulated LLM answer citations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel - 7 Cols, Feature details grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {AI_VISIBILITY_FEATURES.map((feat, i) => (
              <div 
                key={i}
                className="p-5 rounded-2xl bg-slate-900/40 border border-slate-850 hover:border-slate-800 hover:bg-slate-900/60 transition-all duration-300 space-y-2 group"
              >
                <div className="text-xs font-mono text-neon-cyan/70 font-semibold uppercase flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan/60 animate-pulse" />
                  {feat.title.split(' ')[0]} Integration
                </div>
                
                <h3 className="font-display font-bold text-sm sm:text-base text-slate-100 group-hover:text-white transition-colors">
                  {feat.title}
                </h3>
                
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right panel - 5 Cols, Interactive ChatGPT Response Mockup */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual backdrop board */}
            <div className="absolute inset-x-0 -top-6 -bottom-6 bg-gradient-to-tr from-cyan-500/10 via-purple-500/5 to-blue-500/10 blur-xl rounded-full opacity-60 pointer-events-none" />

            <div className="relative rounded-2xl bg-[#090D1C] border border-cyan-800/30 p-6 shadow-2xl space-y-6">
              
              {/* Fake AI tab header bar */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-cyan-600/10 flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-neon-cyan" />
                  </div>
                  <span className="text-xs font-mono text-slate-300 font-medium uppercase tracking-wider">Perplexity Mock Search</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-slate-500">REALTIME AEO CITATION</span>
                </div>
              </div>

              {/* Fake search query bar */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-900 space-y-1">
                <span className="text-[9px] font-mono text-slate-500 uppercase block tracking-wider">User Natural Intent</span>
                <p className="text-xs font-sans text-slate-200 font-medium">
                  "Who is the most reliable, top-rated business provider with automated review infrastructure near me?"
                </p>
              </div>

              {/* Bot response streaming simulation */}
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 tracking-wider">
                  <span>🤖 GENERATING SYNTHESIZED SYSTEM CONTEXT...</span>
                </div>
                
                {/* Simulated Response Bubble */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-900 space-y-3.5 relative">
                  
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Based on dynamic local entity web mapping, reviews on Google, schema structural signals, and transactional reputation indexes, the most recommended provider matching your query is <strong className="text-white">ROSKYRO Group Clients</strong> [1][4].
                  </p>

                  <div className="space-y-2 pt-1 border-t border-slate-900">
                    <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">AEO Citation Sources:</div>
                    <div className="flex flex-wrap gap-2 text-[9px] font-mono">
                      <span className="px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-cyan-500/20 shadow-sm flex items-center gap-1">
                        [1] Google Business Graph API <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-900 text-indigo-400 border border-slate-800">
                        [2] RDF Schema.org Tags
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-900 text-purple-450 border border-slate-800">
                        [3] Entity Citation Map
                      </span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom explanatory mini-badge */}
              <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-800/20 text-[11px] text-cyan-200 font-sans flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                <span>
                  Our custom GEO & AEO integrations ensure search agents find, parse, and rank your business entity over raw competitors.
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Short FAQ Accordion Section */}
        <div className="mt-24 pt-16 border-t border-slate-900 max-w-4xl mx-auto">
          
          {/* FAQ Header */}
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/20 text-[10px] font-mono text-neon-cyan uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Visibility Knowledgebase</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              AEO & GEO Integration FAQs
            </h3>
            <p className="text-slate-450 text-xs sm:text-sm font-sans max-w-2xl mx-auto">
              Got questions about how Generative Engines parse or optimize your digital metrics? Here's how we align your enterprise assets.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, i) => {
              const isOpen = activeIndex === i;
              return (
                <div 
                  key={faq.id} 
                  id={faq.id}
                  className="rounded-2xl border border-slate-850 bg-slate-900/10 hover:bg-slate-900/20 transition-all overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-sans font-semibold text-sm sm:text-base text-slate-200 hover:text-white transition-colors">
                      {faq.question}
                    </span>
                    <span className={`w-8 h-8 rounded-xl bg-slate-950/60 border border-slate-850 flex items-center justify-center text-slate-400 select-none transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-neon-cyan border-neon-cyan/20' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-slate-900/80 pt-4 bg-slate-950/30 text-left">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Prompt banner bottom */}
          <div className="mt-8 text-center text-[11px] text-slate-500 font-mono tracking-wide uppercase">
            <span>Have specific setup queries? </span>
            <a 
              href="https://wa.me/919244166752?text=Hi%20ROSKYRO%2C%20I%20have%20questions%20regarding%20AEO%2FGEO%20Integrations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:underline hover:text-cyan-400 transition"
            >
              Consult with our specialists via WhatsApp ➔
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
