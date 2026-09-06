"use client";

import React, { useRef } from "react";
import { 
  Printer, 
  Sparkles, 
  RotateCcw, 
  Download, 
  Upload, 
  Globe, 
  FileText, 
  CheckCircle2 
} from "lucide-react";
import { Language, translations } from "../constants/i18n";

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onLoadSample: () => void;
  onReset: () => void;
  onExportJson: () => void;
  onImportJson: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPrint: () => void;
  lastSaved: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  onLoadSample,
  onReset,
  onExportJson,
  onImportJson,
  onPrint,
  lastSaved,
}) => {
  const t = translations[lang];
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <header className="no-print sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-lg font-bold text-slate-900 tracking-tight">
                {t.appTitle}
              </h1>
              <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                Global Talent in Korea
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              {t.appSubtitle}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Auto-save badge */}
          {lastSaved && (
            <div className="hidden lg:flex items-center space-x-1 text-xs text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Auto-saved</span>
            </div>
          )}

          {/* Load Sample Button */}
          <button
            onClick={onLoadSample}
            title={t.loadSample}
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200 transition-colors shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="hidden sm:inline">{t.loadSample}</span>
            <span className="sm:hidden">샘플</span>
          </button>

          {/* Reset Button */}
          <button
            onClick={onReset}
            title={t.reset}
            className="flex items-center space-x-1 px-2.5 py-1.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden md:inline">{t.reset}</span>
          </button>

          {/* Export JSON */}
          <button
            onClick={onExportJson}
            title={t.backupJson}
            className="hidden md:flex items-center space-x-1 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>JSON</span>
          </button>

          {/* Import JSON */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={onImportJson}
            accept=".json"
            className="hidden"
          />
          <button
            onClick={handleImportClick}
            title={t.loadJson}
            className="hidden md:flex items-center space-x-1 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>JSON 로드</span>
          </button>

          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="flex items-center space-x-1 px-2.5 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
            title="Toggle Language / 언어 전환"
          >
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            <span className="font-semibold">{lang.toUpperCase()}</span>
          </button>

          {/* Print / Download PDF Main Button */}
          <button
            onClick={onPrint}
            className="flex items-center space-x-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-md shadow-blue-500/25 transition-all hover:scale-[1.02]"
          >
            <Printer className="w-4 h-4" />
            <span>{t.downloadPdf}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
