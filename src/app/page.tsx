"use client";

import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { EditorForm } from "../components/EditorForm";
import { ResumePreview } from "../components/ResumePreview";
import { ResumeData } from "../types/resume";
import { sampleResume, emptyResume } from "../constants/sampleData";
import { Language, translations } from "../constants/i18n";
import { Edit3, Eye, Info, Sparkles } from "lucide-react";

export default function Home() {
  const [data, setData] = useState<ResumeData>(sampleResume);
  const [lang, setLang] = useState<Language>("ko");
  const [activeTab, setActiveTab] = useState<"editor" | "preview">("editor");
  const [isLoaded, setIsLoaded] = useState(false);
  const [lastSaved, setLastSaved] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("foreign_talent_resume_v5");
      if (saved) {
        const parsed = JSON.parse(saved);
        setData({
          ...sampleResume,
          ...parsed,
          personal: {
            ...sampleResume.personal,
            ...(parsed.personal || {}),
          },
          visa: {
            ...sampleResume.visa,
            ...(parsed.visa || {}),
          },
          languages: parsed.languages || sampleResume.languages,
          experiences: parsed.experiences || sampleResume.experiences,
          education: parsed.education || sampleResume.education,
          skills: parsed.skills || sampleResume.skills,
          certifications: parsed.certifications || sampleResume.certifications,
        });
      }
      const savedLang = localStorage.getItem("foreign_talent_resume_lang") as Language;
      if (savedLang) {
        setLang(savedLang);
      }
    } catch (e) {
      console.error("Failed to load local storage:", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("foreign_talent_resume_v5", JSON.stringify(data));
      setLastSaved(true);
      const timer = setTimeout(() => setLastSaved(false), 2000);
      return () => clearTimeout(timer);
    } catch (e) {
      console.error("Failed to save to local storage:", e);
    }
  }, [data, isLoaded]);

  // Language toggle
  const handleToggleLang = () => {
    const nextLang = lang === "ko" ? "en" : "ko";
    setLang(nextLang);
    localStorage.setItem("foreign_talent_resume_lang", nextLang);
  };

  // Actions
  const handleLoadSample = () => {
    if (confirm(lang === "ko" ? "외국인 구직자 샘플 데이터를 불러올까요? 현재 작성 중인 내용이 덮어씌워집니다." : "Load sample foreigner data? Current inputs will be overwritten.")) {
      setData(sampleResume);
    }
  };

  const handleReset = () => {
    if (confirm(lang === "ko" ? "모든 필드를 비우고 새로 작성하시겠습니까?" : "Clear all fields and start fresh?")) {
      setData(emptyResume);
    }
  };

  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `resume_${data.personal.fullName.replace(/\s+/g, "_") || "foreign_talent"}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          setData(parsed);
          alert(lang === "ko" ? "이력서 데이터를 성공적으로 불러왔습니다." : "Resume loaded successfully.");
        } catch (err) {
          alert("Invalid JSON file.");
        }
      };
      reader.readAsText(file);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      {/* Navigation Header */}
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        onLoadSample={handleLoadSample}
        onReset={handleReset}
        onExportJson={handleExportJson}
        onImportJson={handleImportJson}
        onPrint={handlePrint}
        lastSaved={lastSaved}
      />

      {/* Top Notification / Guide Banner */}
      <div className="no-print bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white px-4 py-2.5 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs space-y-1 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="p-1 rounded-full bg-blue-500/40 text-blue-200">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span>
              <strong>외국인 구직자 특화:</strong> 비자 종류, 체류 유효기간, 스폰서십 필요 여부, 한국어 TOPIK 급수 등 핵심 항목이 한눈에 보이도록 설계되었습니다.
            </span>
          </div>
          <div className="text-slate-300 text-[11px] flex items-center space-x-1">
            <Info className="w-3.5 h-3.5 inline mr-0.5 text-blue-300" />
            <span>{t.printHint}</span>
          </div>
        </div>
      </div>

      {/* Mobile Tab Switcher */}
      <div className="no-print lg:hidden sticky top-16 z-30 bg-white border-b border-slate-200 p-2 flex justify-center shadow-sm">
        <div className="inline-flex rounded-lg bg-slate-100 p-1 border border-slate-200">
          <button
            onClick={() => setActiveTab("editor")}
            className={`flex items-center space-x-1.5 px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === "editor"
                ? "bg-white text-blue-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{t.editor}</span>
          </button>
          <button
            onClick={() => setActiveTab("preview")}
            className={`flex items-center space-x-1.5 px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === "preview"
                ? "bg-white text-blue-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{t.preview}</span>
          </button>
        </div>
      </div>

      {/* Main Split Layout */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-3 sm:px-6 lg:px-8 py-6 print:p-0 print:m-0 print:max-w-none">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
          {/* Left Column: Editor Form */}
          <div
            className={`lg:col-span-6 xl:col-span-5 no-print ${
              activeTab === "editor" ? "block" : "hidden lg:block"
            }`}
          >
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900 flex items-center">
                <Edit3 className="w-4 h-4 mr-1.5 text-blue-600" />
                {t.editor}
              </h2>
              <span className="text-xs text-slate-500">
                실시간 입력 즉시 반영
              </span>
            </div>
            <EditorForm data={data} onChange={setData} lang={lang} />
          </div>

          {/* Right Column: Live A4 Resume Preview */}
          <div
            className={`lg:col-span-6 xl:col-span-7 print:w-full print:block ${
              activeTab === "preview" ? "block" : "hidden lg:block"
            }`}
          >
            <div className="no-print mb-3 flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900 flex items-center">
                <Eye className="w-4 h-4 mr-1.5 text-blue-600" />
                {t.preview} (A4 Standard)
              </h2>
              <span className="text-xs text-slate-500">
                모던 비즈니스 단일 양식
              </span>
            </div>

            {/* Sticky Preview Scroll Container */}
            <div className="print-container lg:sticky lg:top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-xl p-2 sm:p-4 bg-slate-200/70 border border-slate-300/80 shadow-inner print:bg-transparent print:p-0 print:border-none print:shadow-none print:overflow-visible print:max-h-none">
              <ResumePreview data={data} lang={lang} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
