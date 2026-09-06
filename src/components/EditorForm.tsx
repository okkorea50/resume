"use client";

import React, { useState } from "react";
import { 
  User, 
  ShieldCheck, 
  Languages, 
  Briefcase, 
  GraduationCap, 
  Sparkles,
  ChevronDown, 
  ChevronUp 
} from "lucide-react";
import { ResumeData } from "../types/resume";
import { Language, translations } from "../constants/i18n";
import { PersonalSection } from "./editor/PersonalSection";
import { VisaSection } from "./editor/VisaSection";
import { LanguageSection } from "./editor/LanguageSection";
import { ExperienceSection } from "./editor/ExperienceSection";
import { EducationSection } from "./editor/EducationSection";
import { SkillsAndCertSection } from "./editor/SkillsAndCertSection";

interface EditorFormProps {
  data: ResumeData;
  onChange: (newData: ResumeData) => void;
  lang: Language;
}

export const EditorForm: React.FC<EditorFormProps> = ({ data, onChange, lang }) => {
  const t = translations[lang];

  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    personal: true,
    visa: true,
    languages: true,
    experiences: true,
    education: true,
    skillsAndMore: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="space-y-4 pb-12">
      {/* 1. Personal Details */}
      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection("personal")}
          className="w-full px-5 py-4 flex items-center justify-between bg-slate-50/70 hover:bg-slate-50 transition-colors border-b border-slate-200/80"
        >
          <div className="flex items-center space-x-2.5 text-slate-800">
            <User className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-sm sm:text-base">{t.personalDetails}</span>
          </div>
          {openSections.personal ? (
            <ChevronUp className="w-5 h-5 text-slate-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-400" />
          )}
        </button>
        {openSections.personal && (
          <PersonalSection
            personal={data.personal}
            onChange={(field, val) =>
              onChange({
                ...data,
                personal: { ...data.personal, [field]: val },
              })
            }
            lang={lang}
          />
        )}
      </section>

      {/* 2. Visa & Work Authorization */}
      <section className="bg-white rounded-xl border border-blue-200 shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection("visa")}
          className="w-full px-5 py-4 flex items-center justify-between bg-blue-50/50 hover:bg-blue-50 transition-colors border-b border-blue-100"
        >
          <div className="flex items-center space-x-2.5 text-blue-900">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-sm sm:text-base">{t.visaWorkAuth}</span>
            <span className="px-2 py-0.5 text-[10px] font-bold bg-blue-600 text-white rounded-full">
              핵심 필수
            </span>
          </div>
          {openSections.visa ? (
            <ChevronUp className="w-5 h-5 text-slate-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-400" />
          )}
        </button>
        {openSections.visa && (
          <VisaSection
            visa={data.visa}
            onChange={(field, val) =>
              onChange({
                ...data,
                visa: { ...data.visa, [field]: val },
              })
            }
            lang={lang}
          />
        )}
      </section>

      {/* 3. Language Skills */}
      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection("languages")}
          className="w-full px-5 py-4 flex items-center justify-between bg-slate-50/70 hover:bg-slate-50 transition-colors border-b border-slate-200/80"
        >
          <div className="flex items-center space-x-2.5 text-slate-800">
            <Languages className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-sm sm:text-base">{t.languages}</span>
          </div>
          {openSections.languages ? (
            <ChevronUp className="w-5 h-5 text-slate-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-400" />
          )}
        </button>
        {openSections.languages && (
          <LanguageSection
            languages={data.languages}
            onChange={(languages) => onChange({ ...data, languages })}
            lang={lang}
          />
        )}
      </section>

      {/* 4. Work Experience */}
      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection("experiences")}
          className="w-full px-5 py-4 flex items-center justify-between bg-slate-50/70 hover:bg-slate-50 transition-colors border-b border-slate-200/80"
        >
          <div className="flex items-center space-x-2.5 text-slate-800">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-sm sm:text-base">
              {t.workExperience} ({data.experiences.length})
            </span>
          </div>
          {openSections.experiences ? (
            <ChevronUp className="w-5 h-5 text-slate-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-400" />
          )}
        </button>
        {openSections.experiences && (
          <ExperienceSection
            experiences={data.experiences}
            onChange={(experiences) => onChange({ ...data, experiences })}
            lang={lang}
          />
        )}
      </section>

      {/* 5. Education */}
      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection("education")}
          className="w-full px-5 py-4 flex items-center justify-between bg-slate-50/70 hover:bg-slate-50 transition-colors border-b border-slate-200/80"
        >
          <div className="flex items-center space-x-2.5 text-slate-800">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-sm sm:text-base">
              {t.education} ({data.education.length})
            </span>
          </div>
          {openSections.education ? (
            <ChevronUp className="w-5 h-5 text-slate-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-400" />
          )}
        </button>
        {openSections.education && (
          <EducationSection
            education={data.education}
            onChange={(education) => onChange({ ...data, education })}
            lang={lang}
          />
        )}
      </section>

      {/* 6. Summary, Skills & Certifications */}
      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection("skillsAndMore")}
          className="w-full px-5 py-4 flex items-center justify-between bg-slate-50/70 hover:bg-slate-50 transition-colors border-b border-slate-200/80"
        >
          <div className="flex items-center space-x-2.5 text-slate-800">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-sm sm:text-base">
              {t.professionalSummary}, {t.skills} & {t.certifications}
            </span>
          </div>
          {openSections.skillsAndMore ? (
            <ChevronUp className="w-5 h-5 text-slate-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-400" />
          )}
        </button>
        {openSections.skillsAndMore && (
          <SkillsAndCertSection
            summary={data.summary}
            skills={data.skills}
            certifications={data.certifications}
            onSummaryChange={(summary) => onChange({ ...data, summary })}
            onSkillsChange={(skills) => onChange({ ...data, skills })}
            onCertsChange={(certifications) => onChange({ ...data, certifications })}
            lang={lang}
          />
        )}
      </section>
    </div>
  );
};
