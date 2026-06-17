import React, { useRef } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

interface LogoPlaceholderProps {
  logoSrc: string | null;
  onLogoUpload: (base64: string | null) => void;
  variant?: 'nav' | 'footer' | 'large';
  isEditMode?: boolean;
}

export default function LogoPlaceholder({ logoSrc, onLogoUpload, variant = 'nav', isEditMode = false }: LogoPlaceholderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isEditMode) return;
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onLogoUpload(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = (e: React.MouseEvent) => {
    if (!isEditMode) return;
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const removeLogo = (e: React.MouseEvent) => {
    if (!isEditMode) return;
    e.stopPropagation();
    if (confirm("Remove custom logo and restore wordmark?")) {
      onLogoUpload(null);
    }
  };

  if (variant === 'nav') {
    return (
      <div 
        className={`group relative flex items-center gap-3 select-none ${isEditMode ? 'cursor-pointer' : ''}`}
        onClick={triggerUpload}
        title={isEditMode ? "Click to upload custom logo file (PNG, SVG, JPG)" : undefined}
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          accept="image/*" 
          className="hidden" 
        />
        
        {logoSrc ? (
          <div className={`relative h-9 max-w-[140px] flex items-center justify-center p-1 bg-slate-900/80 rounded-md border ${isEditMode ? 'border-slate-700/60 group-hover:border-neon-cyan/80' : 'border-slate-800'} transition-all duration-300`}>
            <img 
              src={logoSrc} 
              alt="ROSKYRO Logo" 
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            {isEditMode && (
              <div className="absolute inset-0 bg-slate-950/80 rounded-md opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-200">
                <span className="text-[10px] text-neon-cyan font-mono tracking-widest font-semibold uppercase">Edit Logo</span>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {!isEditMode ? (
              <div className="w-8 h-8 rounded-lg border border-neon-violet/30 bg-neon-violet/5 flex items-center justify-center">
                <span className="text-[11px] font-mono text-neon-violet">R</span>
              </div>
            ) : (
              <div className="w-8 h-8 rounded-lg border border-dashed border-neon-violet/60 bg-neon-violet/5 flex items-center justify-center group-hover:border-neon-cyan/80 group-hover:bg-neon-cyan/5 transition-all duration-300">
                <Upload className="w-3.5 h-3.5 text-neon-violet group-hover:text-neon-cyan transition-colors" />
              </div>
            )}
            <span className={`font-display text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-neon-cyan ${isEditMode ? 'group-hover:from-white group-hover:to-neon-violet' : ''} transition-all duration-300`}>
              ROSKYRO
            </span>
          </div>
        )}
      </div>
    );
  }

  // Footer / Larger instances
  return (
    <div className={`group relative ${isEditMode ? 'cursor-pointer' : ''}`} onClick={triggerUpload}>
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        className="hidden" 
      />
      
      {logoSrc ? (
        <div className={`relative inline-block max-w-[180px] h-12 p-1.5 bg-slate-900/90 rounded-lg border ${isEditMode ? 'border-dashed border-slate-700 group-hover:border-neon-violet' : 'border-slate-800'} transition-all duration-300`}>
          <img 
            src={logoSrc} 
            alt="ROSKYRO Logo" 
            className="h-full w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          {isEditMode && (
            <button 
              onClick={removeLogo}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center hover:bg-red-500 transition-colors shadow-lg"
              title="Remove custom logo"
            >
              ×
            </button>
          )}
        </div>
      ) : (
        <div className={`inline-flex items-center gap-2.5 p-2 bg-slate-950/60 rounded-xl border ${isEditMode ? 'border-dashed border-slate-800 group-hover:border-neon-cyan/50' : 'border-slate-900'} transition-all duration-300`}>
          <div className={`w-10 h-10 rounded-lg border ${isEditMode ? 'border-dashed border-neon-cyan/50 bg-neon-cyan/5' : 'border-neon-cyan/20 bg-neon-cyan/5'} flex items-center justify-center ${isEditMode ? 'group-hover:border-neon-violet/80' : ''} transition-all`}>
            <ImageIcon className="w-5 h-5 text-neon-cyan opacity-80" />
          </div>
          <div className="text-left font-display">
            <span className="block text-lg font-black tracking-widest text-slate-100">ROSKYRO</span>
            <span className="block text-[8px] tracking-widest opacity-60 text-slate-400 uppercase font-mono">AI Growth Tech</span>
          </div>
        </div>
      )}
    </div>
  );
}
