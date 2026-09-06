"use client";

import React from "react";
import { Plus, Trash2 } from "lucide-react";
import { WorkExperience } from "../../types/resume";
import { Language, translations } from "../../constants/i18n";

interface ExperienceSectionProps {
  experiences: WorkExperience[];
  onChange: (experiences: WorkExperience[]) => void;
  lang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  onChange,
  lang,
}) => {
  const t = translations[lang];

  const addExperience = () => {
    const newExp: WorkExperience = {
      id: "exp-" + Date.now(),
      company: "",
      location: "Seoul, Korea",
      role: "",
      startDate: "",
      endDate: "",
      isCurrent: false,
      description: "",
    };
    onChange([...experiences, newExp]);
  };

  const updateExperience = (id: string, field: keyof WorkExperience, value: any) => {
    onChange(
      experiences.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const removeExperience = (id: string) => {
    onChange(experiences.filter((item) => item.id !== id));
  };

  return (
    <div className="p-5 space-y-4">
      <div className="space-y-4">
        {experiences.map((exp, idx) => (
          <div key={exp.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                Experience #{idx + 1}
              </span>
              <button
                type="button"
                onClick={() => removeExperience(exp.id)}
                className="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded"
                title={t.delete}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  {t.company} *
                </label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                  placeholder="e.g. Kakao Corp / Samsung Electronics"
                  className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  {t.role} *
                </label>
                <input
                  type="text"
                  value={exp.role}
                  onChange={(e) => updateExperience(exp.id, "role", e.target.value)}
                  placeholder="e.g. Senior Frontend Engineer"
                  className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  {t.location}
                </label>
                <input
                  type="text"
                  value={exp.location}
                  onChange={(e) => updateExperience(exp.id, "location", e.target.value)}
                  placeholder="e.g. Pangyo, Korea / Toronto, Canada"
                  className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  {t.period}
                </label>
                <div className="flex items-center space-x-1.5">
                  <input
                    type="text"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                    placeholder="2022-03"
                    className="w-1/2 px-2 py-1.5 text-xs border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-slate-400 text-xs">~</span>
                  <input
                    type="text"
                    disabled={exp.isCurrent}
                    value={exp.isCurrent ? "Present" : exp.endDate}
                    onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                    placeholder={exp.isCurrent ? "Present" : "2024-05"}
                    className="w-1/2 px-2 py-1.5 text-xs border border-slate-300 rounded bg-white disabled:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <label className="flex items-center space-x-1.5 mt-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={exp.isCurrent}
                    onChange={(e) => updateExperience(exp.id, "isCurrent", e.target.checked)}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-[11px] text-slate-600">{t.currentWorking}</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                {t.responsibilities}
              </label>
              <textarea
                rows={3}
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                placeholder="• Architected microservices...&#10;• Collaborated with Korean business teams...&#10;• Optimized performance by 40%..."
                className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addExperience}
        className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors"
      >
        <Plus className="w-3.5 h-3.5 mr-1" />
        {t.addExperience}
      </button>
    </div>
  );
};
