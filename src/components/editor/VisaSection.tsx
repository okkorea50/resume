"use client";

import React from "react";
import { VisaInfo } from "../../types/resume";
import { Language, translations } from "../../constants/i18n";

interface VisaSectionProps {
  visa: VisaInfo;
  onChange: (field: keyof VisaInfo, value: any) => void;
  lang: Language;
}

export const VisaSection: React.FC<VisaSectionProps> = ({ visa, onChange, lang }) => {
  const t = translations[lang];

  return (
    <div className="p-5 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {t.visaType} *
          </label>
          <div className="space-y-1.5">
            <select
              value={
                [
                  "E-7-1 (Special Activity / Professional)",
                  "E-9 (Non-professional Employment)",
                  "D-10 (Job Seeker)",
                  "F-2 (Resident)",
                  "F-4 (Overseas Korean)",
                  "F-5 (Permanent Resident)",
                  "F-6 (Marriage Immigrant)",
                  "D-2 (Student / Soon to Graduate)",
                  "H-1 (Working Holiday)",
                  "Overseas / Need Visa Sponsorship",
                ].includes(visa.visaType)
                  ? visa.visaType
                  : "Custom"
              }
              onChange={(e) => {
                if (e.target.value !== "Custom") {
                  onChange("visaType", e.target.value);
                }
              }}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="E-7-1 (Special Activity / Professional)">E-7 (전문인력 / 특정활동)</option>
              <option value="E-9 (Non-professional Employment)">E-9 (비숙련직 / 비전문취업)</option>
              <option value="D-10 (Job Seeker)">D-10 (구직비자)</option>
              <option value="F-2 (Resident)">F-2 (거주비자)</option>
              <option value="F-4 (Overseas Korean)">F-4 (재외동포)</option>
              <option value="F-5 (Permanent Resident)">F-5 (영주권)</option>
              <option value="F-6 (Marriage Immigrant)">F-6 (결혼이민)</option>
              <option value="D-2 (Student / Soon to Graduate)">D-2 (유학생 / 졸업예정)</option>
              <option value="H-1 (Working Holiday)">H-1 (워킹홀리데이)</option>
              <option value="Overseas / Need Visa Sponsorship">해외 거주 / 비자 스폰서십 필요</option>
              <option value="Custom">직접 입력 (Custom)</option>
            </select>
            <input
              type="text"
              value={visa.visaType}
              onChange={(e) => onChange("visaType", e.target.value)}
              placeholder="비자 유형 세부 명칭 (e.g. E-7-1, F-2-7)"
              className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {t.visaExpiry}
          </label>
          <input
            type="date"
            value={visa.visaExpiryDate}
            onChange={(e) => onChange("visaExpiryDate", e.target.value)}
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {t.sponsorship} *
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onChange("sponsorshipNeeded", false)}
              className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-all ${
                !visa.sponsorshipNeeded
                  ? "bg-emerald-50 border-emerald-500 text-emerald-800 font-bold shadow-sm"
                  : "border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              ✓ {t.sponsorshipNotNeeded}
            </button>
            <button
              type="button"
              onClick={() => onChange("sponsorshipNeeded", true)}
              className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-all ${
                visa.sponsorshipNeeded
                  ? "bg-amber-50 border-amber-500 text-amber-800 font-bold shadow-sm"
                  : "border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              ! {t.sponsorshipNeeded}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {t.arcStatus} *
          </label>
          <select
            value={visa.arcStatus}
            onChange={(e) => onChange("arcStatus", e.target.value)}
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="Registered (ARC)">{t.arcRegistered}</option>
            <option value="Applied / In Process">{t.arcPending}</option>
            <option value="Not Yet Issued">{t.arcNone}</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {t.availability}
          </label>
          <input
            type="text"
            value={visa.availability}
            onChange={(e) => onChange("availability", e.target.value)}
            placeholder="e.g. Immediately / Within 2 Weeks / 협의 가능"
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {t.desiredEmployment}
          </label>
          <select
            value={visa.desiredEmploymentType}
            onChange={(e) => onChange("desiredEmploymentType", e.target.value)}
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="Full-time">Full-time (정규직)</option>
            <option value="Contract">Contract (계약직)</option>
            <option value="Internship">Internship (인턴십)</option>
            <option value="Part-time">Part-time (파트타임)</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {t.desiredLocation}
          </label>
          <input
            type="text"
            value={visa.desiredLocation}
            onChange={(e) => onChange("desiredLocation", e.target.value)}
            placeholder="e.g. Seoul, Pangyo, Remote, Any in Korea"
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};
