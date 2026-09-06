"use client";

import React from "react";
import { Plus, Trash2 } from "lucide-react";
import { Education } from "../../types/resume";
import { Language, translations } from "../../constants/i18n";

interface EducationSectionProps {
  education: Education[];
  onChange: (education: Education[]) => void;
  lang: Language;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  education,
  onChange,
  lang,
}) => {
  const t = translations[lang];

  const addEducation = () => {
    const newEdu: Education = {
      id: "edu-" + Date.now(),
      institution: "",
      location: "Seoul, Korea",
      degree: "Bachelor\'s Degree",
      major: "",
      startDate: "",
      endDate: "",
      gpa: "",
    };
    onChange([...education, newEdu]);
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    onChange(
      education.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const removeEducation = (id: string) => {
    onChange(education.filter((item) => item.id !== id));
  };

  return (
    <div className="p-5 space-y-4">
      <div className="space-y-4">
        {education.map((edu, idx) => (
          <div key={edu.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                Degree #{idx + 1}
              </span>
              <button
                type="button"
                onClick={() => removeEducation(edu.id)}
                className="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded"
                title={t.delete}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  {t.school} *
                </label>
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                  placeholder="e.g. Seoul National University / Yonsei Univ"
                  className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  {t.location}
                </label>
                <input
                  type="text"
                  value={edu.location}
                  onChange={(e) => updateEducation(edu.id, "location", e.target.value)}
                  placeholder="e.g. Seoul, Korea / Paris, France"
                  className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  {t.degree} *
                </label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                  placeholder="Master of Science / Bachelor"
                  className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  {t.major} *
                </label>
                <input
                  type="text"
                  value={edu.major}
                  onChange={(e) => updateEducation(edu.id, "major", e.target.value)}
                  placeholder="Computer Science & Engineering"
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
                    value={edu.startDate}
                    onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                    placeholder="2019-09"
                    className="w-1/2 px-2 py-1.5 text-xs border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-slate-400 text-xs">~</span>
                  <input
                    type="text"
                    value={edu.endDate}
                    onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                    placeholder="2021-08"
                    className="w-1/2 px-2 py-1.5 text-xs border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  {t.gpa}
                </label>
                <input
                  type="text"
                  value={edu.gpa}
                  onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)}
                  placeholder="3.92 / 4.3"
                  className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addEducation}
        className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors"
      >
        <Plus className="w-3.5 h-3.5 mr-1" />
        {t.addEducation}
      </button>
    </div>
  );
};
