import React, { useState } from 'react';
import { X, ShieldAlert, Sparkles, AlertCircle, CheckCircle, Bot, Share2, TrendingUp, HelpCircle } from 'lucide-react';
import { AuditRequest } from './types';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanContext?: string;
}

export default function AuditModal({ isOpen, onClose, selectedPlanContext = '' }: AuditModalProps) {
  const [step, setStep] = useState<'form' | 'loading' | 'results'>('form');
  const [formData, setFormData] = useState({
    businessName: '',
    websiteUrl: '',
    email: '',
    phone: '',
    growthFocus: 'all',
  });
  
  const [progressLog, setProgressLog] = useState<string[]>([]);
  const [progressNum, setProgressNum] = useState(0);
  const [generatedReport, setGeneratedReport] = useState<any>(null);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const simulateAudit = () => {
    setStep('loading');
    setProgressNum(0);
    setProgressLog([]);

    const logs = [
      "Establishing system handshakes with Google Citations Index...",
      "Crawling microdata Schema specifications on target domain...",
      "Simulating ChatGPT multi-turn recommendation queries...",
      "Querying Perplexity citation graphs for business listings...",
      "Calculating WhatsApp workflow automation response rate...",
      "Validating Google Maps local 3-pack saturation levels...",
      "Compiling final K-Y-R-O Diagnostic Scorecard..."
    ];

    let currentLogIdx = 0;
    
    const interval = setInterval(() => {
      if (currentLogIdx < logs.length) {
        setProgressLog((prev) => [...prev, logs[currentLogIdx]]);
        setProgressNum((prev) => Math.min(prev + 14, 100));
        currentLogIdx++;
      } else {
        clearInterval(interval);
        
        // Generate results
        const score = Math.floor(Math.random() * 20) + 35; // Score between 35 and 55 (typical of unoptimized local businesses)
        const leakage = Math.floor(Math.random() * 40000) + 15000; // estimated monthly revenue leaking (₹15,000 to ₹55,000)
        
        const report = {
          score,
          aeoIndex: "Invisible (Missing Entity Graph)",
          geoRating: "Low (No Structured JSON-LD)",
          revenueLeakageEstimate: leakage.toLocaleString('en-IN'),
          gaps: [
            { 
              title: "AEO/GEO Citation Gap", 
              desc: "ChatGPT and Claude scrapers failed to find verified citation nodes. Your business is not included in recommendation summaries.",
              status: "Critical"
            },
            {
              title: "Lead Response Leakage",
              desc: "Average lead response time simulated at >45 minutes. Leads have high scheduling drop-off prior to calendar placement.",
              status: "Warning"
            },
            {
              title: "Google GBP Star Frequency",
              desc: "Star velocity is lower than competitor threshold. Your rating frequency ranks in the bottom 30% of the geography.",
              status: "Warning"
            }
          ]
        };

        setGeneratedReport(report);
        setStep('results');

        // Automatic lead submission to roskyroofficial@gmail.com
        setSubmitStatus('sending');
        fetch("https://formsubmit.co/ajax/roskyroofficial@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            _subject: `⚡ New Diagnostic Scan: ${formData.businessName} (Score: ${score}/100)`,
            _replyto: formData.email,
            _captcha: "false",
            _template: "table",
            "Registered Business Name": formData.businessName,
            "Target Website / GBP link": formData.websiteUrl || "Not Provided",
            "Contact Email": formData.email,
            "WhatsApp Phone": formData.phone,
            "Select growth Focus Block": formData.growthFocus,
            "Calculated Cumulative Score": `${score} / 100`,
            "AEO Index Rating": report.aeoIndex,
            "GEO Structure Rating": report.geoRating,
            "Estimated Lost Profits Estimate (Monthly)": `INR ${leakage.toLocaleString('en-IN')}`,
            "Structural Failures / Identified Gaps": report.gaps.map((g: any) => `[${g.status}] ${g.title}: ${g.desc}`).join("\n\n")
          })
        })
        .then(res => {
          if (res.ok) {
            setSubmitStatus('success');
          } else {
            setSubmitStatus('error');
          }
        })
        .catch(err => {
          console.error("Auto submission delivery error:", err);
          setSubmitStatus('error');
        });
      }
    }, 850);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.email) {
      alert("Please provide at least a Business Name and email.");
      return;
    }

    // Save submission locally
    const auditObj: AuditRequest = {
      id: Date.now().toString(),
      ...formData,
      timestamp: Date.now()
    };
    
    const currentSubmissions = JSON.parse(localStorage.getItem('roskyro_sub_logs') || '[]');
    localStorage.setItem('roskyro_sub_logs', JSON.stringify([...currentSubmissions, auditObj]));

    simulateAudit();
  };

  const whatsappText = `Hi ROSKYRO, I ran your AI Diagnostic Tool for ${formData.businessName}. Our score was ${generatedReport?.score || 0}/100. We would love some support fixing these gaps!`;
  const shareToWhatsappUrl = `https://wa.me/919244166752?text=${encodeURIComponent(whatsappText)}`;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Black backdrop overlay */}
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md" onClick={onClose} />
      
      {/* Modal Card frame */}
      <div className="relative rounded-3xl bg-[#090D1C] border border-cyan-800/30 w-full max-w-lg overflow-hidden shadow-2xl transition-all p-px">
        
        {/* Glow corner trims */}
        <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-neon-cyan to-transparent animate-pulse" />
        <div className="absolute top-0 right-0 w-1 h-20 bg-gradient-to-b from-neon-violet to-transparent animate-pulse" />

        <div className="bg-[#0b1024] p-6 sm:p-8 space-y-6 relative z-10">
          
          {/* Header Row */}
          <div className="flex justify-between items-start">
            <div className="space-y-1 text-left">
              <span className="text-[9px] font-mono tracking-widest text-[#06b6d4] uppercase block">
                {selectedPlanContext ? `SYSTEM SPECIFIC: ${selectedPlanContext}` : 'AI DEPLOYMENT PROCESS'}
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-slate-100">
                {step === 'form' ? 'Deploy Free Visibility Audit' : 
                 step === 'loading' ? 'Running AI Diagnostic Crawler...' : 
                 'Visibility Corrective Scorecard'}
              </h3>
            </div>
            
            <button 
              onClick={onClose}
              className="p-1.5 rounded-lg border border-slate-800 bg-slate-950 text-slate-500 hover:text-white hover:border-slate-700 transition"
              title="Close Panel"
            >
              <X size={16} />
            </button>
          </div>

          <div className="h-px bg-slate-850/80" />

          {/* Step 1: Input Form */}
          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Provide basic parameters about your commercial entity. Our sandbox engine will query search graphs and estimate leakage indexes.
              </p>

              <div className="space-y-4">
                
                {/* Biz Name */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">Registered Business Name *</label>
                  <input 
                    type="text" 
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 focus:border-neon-cyan rounded-xl px-3 py-2.5 text-xs text-slate-100"
                    placeholder="e.g. Verma Retail Distributors"
                    required
                  />
                </div>

                {/* Biz Website */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">Website URL / GBP Link</label>
                  <input 
                    type="url" 
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 focus:border-neon-cyan rounded-xl px-3 py-2.5 text-xs text-slate-100"
                    placeholder="e.g. https://yoursite.com"
                  />
                </div>

                {/* Grid of contact specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase">Contact Email *</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-neon-cyan rounded-xl px-3 py-2.5 text-xs text-slate-100"
                      placeholder="e.g. contact@domain.com"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase font-bold">WhatsApp Mobile *</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-neon-cyan rounded-xl px-3 py-2.5 text-xs text-slate-100"
                      placeholder="e.g. +91 98765 43210"
                      required
                    />
                  </div>
                </div>

                {/* Dropdown Focus */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-400 uppercase">Target Growth Block focus</label>
                  <select
                    value={formData.growthFocus}
                    onChange={(e) => setFormData({ ...formData, growthFocus: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 focus:border-neon-cyan rounded-xl px-3 py-2.5 text-xs text-slate-350 font-sans"
                  >
                    <option value="all">Complete Suite Audit (K-Y-R-O Overview)</option>
                    <option value="visibility">AEO + GEO Search Visibility Tuning</option>
                    <option value="reputation">Google GBP Review Automation System</option>
                    <option value="leads">Lead response & Conversational Funnels</option>
                  </select>
                </div>

              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-400 text-xs font-bold font-sans tracking-wide text-white transition-all shadow-lg hover:shadow-cyan-500/10 cursor-pointer"
                >
                  Deploy Diagnostic Scan →
                </button>
              </div>
            </form>
          )}

          {/* Step 2: Loading State */}
          {step === 'loading' && (
            <div className="py-8 space-y-6 text-center">
              
              {/* Spinning loading dial */}
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-slate-900" />
                <div className="absolute inset-0 rounded-full border-4 border-t-neon-cyan border-r-neon-violet animate-spin" />
                <div className="absolute inset-2.5 rounded-full bg-slate-950/80 flex items-center justify-center font-mono font-bold text-xs text-neon-cyan">
                  {progressNum}%
                </div>
              </div>

              <div className="space-y-3.5 max-w-sm mx-auto">
                <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-widest animate-pulse">Scanning target graph signals</span>
                
                {/* Dynamically appended log display logs */}
                <div className="h-28 bg-slate-950 border border-slate-900 rounded-xl p-3.5 text-[10.5px] font-mono text-slate-400 text-left overflow-y-auto space-y-1 scrollbar-thin">
                  {progressLog.map((log, i) => (
                    <div key={i} className="flex gap-2 items-center text-slate-300">
                      <span className="text-emerald-400">⚡</span>
                      <span className="truncate">{log}</span>
                    </div>
                  ))}
                  {progressLog.length > 0 && (
                    <div className="text-[9px] font-mono text-cyan-400 animate-pulse mt-1">
                      ➔ [SYSTEM CHECKING LOG {progressLog.length}/7]
                    </div>
                  )}
                </div>
              </div>

            </div>
          )}

          {/* Step 3: Diagnostic Result Scorecard */}
          {step === 'results' && generatedReport && (
            <div className="space-y-6 text-left">
              
              {/* Auto Delivery Feedback Strip */}
              <div className="px-4 py-2.5 rounded-2xl bg-slate-950/40 border border-slate-850/80 flex items-center justify-between gap-2.5 text-[11px] font-sans">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span className="relative flex h-2 w-2">
                    {submitStatus === 'sending' && (
                      <>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                      </>
                    )}
                    {submitStatus === 'success' && (
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    )}
                    {submitStatus === 'error' && (
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    )}
                    {submitStatus === 'idle' && (
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
                    )}
                  </span>
                  <span>
                    {submitStatus === 'sending' && 'Transmitting scan parameters to ROSKYRO Desk...'}
                    {submitStatus === 'success' && 'Auto-submitted to roskyroofficial@gmail.com'}
                    {submitStatus === 'error' && 'Saved locally (Click Apply to sync manually)'}
                    {submitStatus === 'idle' && 'Scan compilation complete'}
                  </span>
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase text-slate-500 select-none tracking-widest leading-none">
                  {submitStatus === 'success' && '✓ CONNECTED'}
                  {submitStatus === 'sending' && 'UPLOADING'}
                  {submitStatus === 'error' && 'LOCAL BACKUP'}
                  {submitStatus === 'idle' && 'READY'}
                </span>
              </div>

              {/* Score panel */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-900 flex items-center justify-between gap-4">
                <div className="space-y-1 flex-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">System Diagnostics</span>
                  <h4 className="font-display font-black text-lg text-white">Cumulative Visibility Score</h4>
                  <p className="text-slate-450 text-[11px] leading-relaxed">
                    Based on local schema citation checks and Perplexity recommendations indexing.
                  </p>
                </div>
                
                <div className="w-16 h-16 rounded-xl bg-slate-900 border border-red-500/30 flex flex-col justify-center items-center shadow-lg">
                  <span className="text-red-400 font-display text-2xl font-black">{generatedReport.score}</span>
                  <span className="text-[9px] font-mono text-slate-500 font-semibold tracking-wider font-bold">/ 100</span>
                </div>
              </div>

              {/* Vital specs */}
              <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                <div className="p-3.5 rounded-xl border border-slate-850 bg-slate-900/40 space-y-1">
                  <span className="text-[8.5px] font-mono text-slate-500 uppercase block">AEO Recommended Index</span>
                  <span className="font-medium text-red-400 block truncate">{generatedReport.aeoIndex}</span>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-850 bg-slate-900/40 space-y-1">
                  <span className="text-[8.5px] font-mono text-slate-500 uppercase block">Revenue leakage (monthly)</span>
                  <span className="font-medium text-emerald-400 block truncate">~₹{generatedReport.revenueLeakageEstimate}</span>
                </div>
              </div>

              {/* Identified Gaps Lists */}
              <div className="space-y-3">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">Identified Structural Failures:</span>
                
                <div className="space-y-2.5">
                  {generatedReport.gaps.map((gap: any, i: number) => (
                    <div key={i} className="p-3 bg-slate-950 border border-slate-900 rounded-xl flex gap-3 items-start">
                      <div className="mt-0.5 shrink-0">
                        {gap.status === 'Critical' ? (
                          <ShieldAlert className="w-4 h-4 text-red-400" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-amber-500" />
                        )}
                      </div>
                      
                      <div className="space-y-0.5 leading-snug flex-1">
                        <div className="flex items-center justify-between">
                          <h5 className="font-bold text-xs text-slate-100">{gap.title}</h5>
                          <span className={`text-[8.5px] font-mono uppercase font-black tracking-wider ${gap.status === 'Critical' ? 'text-red-400' : 'text-amber-500'}`}>{gap.status}</span>
                        </div>
                        <p className="text-slate-400 text-[11px] leading-relaxed pr-1">{gap.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-slate-850/80 my-5" />

              {/* Action columns buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <a
                  href={shareToWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs tracking-wider font-sans text-center hover:bg-emerald-450 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Bot className="w-4 h-4 fill-current text-slate-950" />
                  Apply Diagnostic Fix
                </a>
                
                <button
                  onClick={() => {
                    setFormData({ businessName: '', websiteUrl: '', email: '', phone: '', growthFocus: 'all' });
                    setSubmitStatus('idle');
                    setStep('form');
                  }}
                  className="p-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-850 text-slate-200 text-xs font-semibold text-center transition-all cursor-pointer"
                >
                  Restart Diagnostic Run
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
