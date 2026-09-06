"use client";

import React from "react";
import { Plus, Trash2 } from "lucide-react";
import { LanguageSkill } from "../../types/resume";
import { Language, translations } from "../../constants/i18n";

interface LanguageSectionProps {
  languages: LanguageSkill[];
  onChange: (languages: LanguageSkill[]) => void;
  lang: Language;
}

export const LanguageSection: React.FC<LanguageSectionProps> = ({
  languages,
  onChange,
  lang,
}) => {
  const t = translations[lang];

  const addLanguage = () => {
    const newLang: LanguageSkill = {
      id: "lang-" + Date.now(),
      language: "",
      proficiency: "Professional Working / Fluent",
      testScore: "",
    };
    onChange([...languages, newLang]);
  };

  const updateLanguage = (id: string, field: keyof LanguageSkill, value: string) => {
    onChange(
      languages.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const removeLanguage = (id: string) => {
    onChange(languages.filter((item) => item.id !== id));
  };

  return (
    <div className="p-5 space-y-3.5">
      <div className="space-y-3">
        {languages.map((langItem) => (
          <div
            key={langItem.id}
            className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex flex-col sm:flex-row gap-2.5 items-start sm:items-center"
          >
            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-2">
              <input
                type="text"
                value={langItem.language}
                onChange={(e) => updateLanguage(langItem.id, "language", e.target.value)}
                placeholder="Language (e.g. Korean / 한국어)"
                className="px-2.5 py-1.5 text-xs border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={langItem.proficiency}
                onChange={(e) => updateLanguage(langItem.id, "proficiency", e.target.value)}
                className="px-2.5 py-1.5 text-xs border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Native / Bilingual">Native / 모국어</option>
                <option value="Professional Working / Fluent">Professional / 비즈니스 유창</option>
                <option value="Conversational">Conversational / 일상회화</option>
                <option value="Elementary">Elementary / 기초</option>
              </select>
              <input
                type="text"
                value={langItem.testScore}
                onChange={(e) => updateLanguage(langItem.id, "testScore", e.target.value)}
                placeholder="e.g. TOPIK 5급, TOEIC 950"
                className="px-2.5 py-1.5 text-xs border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={() => removeLanguage(langItem.id)}
              className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded"
              title={t.delete}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addLanguage}
        className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors"
      >
        <Plus className="w-3.5 h-3.5 mr-1" />
        {t.addLanguage}
      </button>
    </div>
  );
};
