"use client";

import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Certification } from "../../types/resume";
import { Language, translations } from "../../constants/i18n";

interface SkillsAndCertSectionProps {
  skills: string[];
  certifications: Certification[];
  summary: string;
  onSkillsChange: (skills: string[]) => void;
  onCertsChange: (certs: Certification[]) => void;
  onSummaryChange: (summary: string) => void;
  lang: Language;
}

export const SkillsAndCertSection: React.FC<SkillsAndCertSectionProps> = ({
  skills,
  certifications,
  summary,
  onSkillsChange,
  onCertsChange,
  onSummaryChange,
  lang,
}) => {
  const t = translations[lang];
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newSkill.trim();
    if (trimmed && !skills.includes(trimmed)) {
      onSkillsChange([...skills, trimmed]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    onSkillsChange(skills.filter((s) => s !== skillToRemove));
  };

  const addCert = () => {
    const newCert: Certification = {
      id: "cert-" + Date.now(),
      title: "",
      issuer: "",
      issueDate: "",
    };
    onCertsChange([...certifications, newCert]);
  };

  const updateCert = (id: string, field: keyof Certification, value: string) => {
    onCertsChange(
      certifications.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const removeCert = (id: string) => {
    onCertsChange(certifications.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-4">
      {/* Professional Summary */}
      <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
          {t.professionalSummary}
        </label>
        <textarea
          rows={4}
          value={summary}
          onChange={(e) => onSummaryChange(e.target.value)}
          placeholder="Concise overview of your professional background, legal work authorization in Korea, language skills, and value proposition..."
          className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <p className="text-[11px] text-slate-500">
          💡 Tip: 외국인 지원자의 경우 자신의 전문 직무 경력과 더불어 한국 내 비자 취업 자격 및 한국어 능숙도를 함께 요약하면 인사담당자의 신뢰도가 크게 높아집니다.
        </p>
      </div>

      {/* Skills */}
      <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
          {t.skills}
        </label>
        <form onSubmit={handleAddSkill} className="flex gap-2">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder={t.addSkillPlaceholder}
            className="flex-1 px-3 py-1.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            {t.addSkill}
          </button>
        </form>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-800 rounded-md border border-slate-200"
            >
              {skill}
              <button
                type="button"
                onClick={() => removeSkill(skill)}
                className="ml-1.5 text-slate-400 hover:text-rose-600 focus:outline-none"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-3.5">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            {t.certifications} ({certifications.length})
          </label>
        </div>

        <div className="space-y-3">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex flex-col sm:flex-row gap-2.5 items-start sm:items-center"
            >
              <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input
                  type="text"
                  value={cert.title}
                  onChange={(e) => updateCert(cert.id, "title", e.target.value)}
                  placeholder={t.certTitle}
                  className="px-2.5 py-1.5 text-xs border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  value={cert.issuer}
                  onChange={(e) => updateCert(cert.id, "issuer", e.target.value)}
                  placeholder={t.issuer}
                  className="px-2.5 py-1.5 text-xs border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  value={cert.issueDate}
                  onChange={(e) => updateCert(cert.id, "issueDate", e.target.value)}
                  placeholder="2023-11"
                  className="px-2.5 py-1.5 text-xs border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="button"
                onClick={() => removeCert(cert.id)}
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
          onClick={addCert}
          className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors"
        >
          <Plus className="w-3.5 h-3.5 mr-1" />
          {t.addCert}
        </button>
      </div>
    </div>
  );
};
