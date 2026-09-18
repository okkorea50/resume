"use client";

import React from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  Languages, 
  Briefcase, 
  GraduationCap, 
  Award, 
  CheckCircle,
  AlertCircle,
  Building2,
  Ruler
} from "lucide-react";
import { ResumeData } from "../types/resume";
import { Language } from "../constants/i18n";

interface ResumePreviewProps {
  data: ResumeData;
  lang: Language;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ data, lang }) => {
  const { personal, visa, summary, languages, experiences, education, skills, certifications } = data;

  return (
    <div className="w-full flex justify-center py-4 print:p-0">
      {/* A4 Sheet Container */}
      <div 
        id="resume-a4-sheet"
        className="a4-sheet bg-white text-slate-800 shadow-2xl rounded-sm border border-slate-200 overflow-hidden w-full max-w-[210mm] min-h-[297mm] flex flex-col justify-between font-sans leading-relaxed transition-all"
        style={{ boxSizing: "border-box" }}
      >
        <div className="flex flex-row flex-1">
          {/* ================= LEFT SIDEBAR (34%) ================= */}
          <aside className="w-[34%] bg-slate-900 text-slate-200 p-6 flex flex-col justify-between border-r border-slate-800">
            <div className="space-y-6">
              {/* Profile Photo */}
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-36 rounded-xl overflow-hidden border-2 border-slate-700 shadow-lg bg-slate-800 flex items-center justify-center mb-3">
                  {personal.photoUrl ? (
                    <img
                      src={personal.photoUrl}
                      alt={personal.fullName || "Candidate Photo"}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-500 p-4">
                      <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mb-2">
                        <span className="text-xl font-bold text-slate-400">
                          {personal.fullName ? personal.fullName.charAt(0).toUpperCase() : "?"}
                        </span>
                      </div>
                      <span className="text-xs">Photo</span>
                    </div>
                  )}
                </div>

                {/* Candidate Name in Sidebar for Mobile/Print backup */}
                <div className="text-center">
                  <h3 className="text-base font-bold text-white tracking-wide">
                    {personal.fullName || "Full Name"}
                  </h3>
                  {personal.koreanName && (
                    <p className="text-xs text-blue-400 font-medium mt-0.5">
                      {personal.koreanName}
                    </p>
                  )}
                  <p className="text-xs text-slate-400 mt-1 font-medium">
                    {personal.jobTitle || "Job Title / Role"}
                  </p>
                </div>
              </div>

              {/* 1. VISA & WORK STATUS (Foreigner Specific Core Badge) */}
              <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700/80 space-y-2.5">
                <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-400">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Visa & Work Eligibility</span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex items-start justify-between">
                    <span className="text-slate-400">Visa:</span>
                    <span className="font-semibold text-white text-right max-w-[120px] truncate" title={visa.visaType}>
                      {visa.visaType || "Not Specified"}
                    </span>
                  </div>

                  {visa.visaExpiryDate && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Expires:</span>
                      <span className="text-slate-200 font-medium">
                        {visa.visaExpiryDate}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">ARC:</span>
                    <span className="inline-flex items-center text-[11px] font-semibold text-emerald-400">
                      <CheckCircle className="w-3 h-3 mr-1 inline" />
                      {visa.arcStatus || "Registered"}
                    </span>
                  </div>

                  <div className="pt-1.5 border-t border-slate-700/60">
                    <span className={`inline-block w-full text-center text-[11px] font-bold py-1 px-2 rounded-md ${
                      !visa.sponsorshipNeeded
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        : "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                    }`}>
                      {!visa.sponsorshipNeeded ? "✓ No Sponsorship Needed" : "! Sponsorship Required"}
                    </span>
                  </div>

                  {visa.availability && (
                    <div className="flex items-center justify-between pt-1 text-[11px]">
                      <span className="text-slate-400">Start:</span>
                      <span className="text-slate-200 font-medium truncate max-w-[120px]">
                        {visa.availability}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* 2. CONTACT & PERSONAL INFO */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
                  Contact & Details
                </h4>
                <div className="space-y-2 text-xs text-slate-300">
                  {personal.email && (
                    <div className="flex items-center space-x-2">
                      <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span className="truncate" title={personal.email}>{personal.email}</span>
                    </div>
                  )}
                  {personal.phone && (
                    <div className="flex items-center space-x-2">
                      <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{personal.phone}</span>
                    </div>
                  )}
                  {personal.nationality && (
                    <div className="flex items-center space-x-2">
                      <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>Nationality: <strong className="text-white">{personal.nationality}</strong></span>
                    </div>
                  )}
                  {personal.currentAddress && (
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{personal.currentAddress}</span>
                    </div>
                  )}
                  {personal.dateOfBirth && (
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>DOB: {personal.dateOfBirth} {personal.gender ? `(${personal.gender})` : ""}</span>
                    </div>
                  )}
                  {(personal.height || personal.weight) && (
                    <div className="flex items-center space-x-2">
                      <Ruler className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>
                        {personal.height ? `H: ${personal.height}` : ""}
                        {personal.height && personal.weight ? " / " : ""}
                        {personal.weight ? `W: ${personal.weight}` : ""}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* 3. LANGUAGES (Crucial for Foreigners in Korea) */}
              {languages && languages.length > 0 && (
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-1.5 border-b border-slate-800 pb-1">
                    <Languages className="w-3.5 h-3.5 text-blue-400" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Languages
                    </h4>
                  </div>
                  <div className="space-y-2.5">
                    {languages.map((langItem) => (
                      <div key={langItem.id} className="text-xs">
                        <div className="flex justify-between items-center mb-0.5">
                          <span className="font-semibold text-white">{langItem.language}</span>
                          <span className="text-[11px] text-blue-300 font-medium">{langItem.proficiency}</span>
                        </div>
                        {langItem.testScore && (
                          <div className="text-[11px] text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded inline-block">
                            {langItem.testScore}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. KEY SKILLS */}
              {skills && skills.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
                    Core Skills
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-[11px] font-medium bg-slate-800 text-slate-200 px-2.5 py-1 rounded-md border border-slate-700/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}


            </div>

            {/* Bottom watermark / standard note */}
            <div className="pt-4 text-[10px] text-slate-500 border-t border-slate-800/80 text-center">
              Verified Foreign Professional Resume
            </div>
          </aside>

          {/* ================= RIGHT MAIN BODY (66%) ================= */}
          <main className="w-[66%] p-7 bg-white flex flex-col justify-between">
            <div className="space-y-5">
              {/* Header: Name, Title, Preferences */}
              <div className="border-b-2 border-slate-100 pb-4">
                <div className="flex items-baseline justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        {personal.fullName || "Your Full Name"}
                      </h2>
                      {personal.koreanName && (
                        <span className="text-base font-semibold text-blue-700">
                          ({personal.koreanName})
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
                      {personal.jobTitle || "Target Position / Title"}
                    </p>
                  </div>
                </div>

                {/* Preference Badges */}
                <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-slate-600">
                  {visa.desiredEmploymentType && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded bg-slate-100 font-medium text-slate-700">
                      <Clock className="w-3 h-3 mr-1 text-slate-500" />
                      {visa.desiredEmploymentType}
                    </span>
                  )}
                  {visa.desiredLocation && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded bg-slate-100 font-medium text-slate-700">
                      <MapPin className="w-3 h-3 mr-1 text-slate-500" />
                      {visa.desiredLocation}
                    </span>
                  )}
                </div>
              </div>

              {/* 1. PROFESSIONAL SUMMARY */}
              {summary && (
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2 border-b border-slate-200 pb-1">
                    <Briefcase className="w-4 h-4 text-blue-600" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Professional Summary
                    </h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-line">
                    {summary}
                  </p>
                </div>
              )}

              {/* 2. WORK EXPERIENCE */}
              {experiences && experiences.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 border-b border-slate-200 pb-1">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Work Experience
                    </h3>
                  </div>

                  <div className="space-y-3.5">
                    {experiences.map((exp) => (
                      <div key={exp.id} className="relative pl-3.5 border-l-2 border-blue-200 space-y-1">
                        <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-600"></div>
                        <div className="flex items-baseline justify-between flex-wrap">
                          <h4 className="text-xs font-bold text-slate-900">
                            {exp.role} <span className="font-normal text-slate-500">at</span> {exp.company}
                          </h4>
                          <span className="text-[11px] font-medium text-slate-500">
                            {exp.startDate} – {exp.isCurrent ? "Present" : exp.endDate}
                          </span>
                        </div>

                        {exp.location && (
                          <div className="text-[11px] text-slate-500 flex items-center">
                            <MapPin className="w-3 h-3 mr-0.5 inline text-slate-400" />
                            {exp.location}
                          </div>
                        )}

                        {exp.description && (
                          <div className="text-xs text-slate-600 leading-relaxed whitespace-pre-line pt-0.5">
                            {exp.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. EDUCATION */}
              {education && education.length > 0 && (
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2 border-b border-slate-200 pb-1">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Education
                    </h3>
                  </div>

                  <div className="space-y-2.5">
                    {education.map((edu) => (
                      <div key={edu.id} className="text-xs space-y-0.5">
                        <div className="flex items-baseline justify-between flex-wrap">
                          <h4 className="font-bold text-slate-900">
                            {edu.degree} in {edu.major}
                          </h4>
                          <span className="text-[11px] text-slate-500">
                            {edu.startDate} – {edu.endDate}
                          </span>
                        </div>
                        <div className="flex justify-between text-[11px] text-slate-600">
                          <span>
                            {edu.institution} {edu.location ? `· ${edu.location}` : ""}
                          </span>
                          {edu.gpa && (
                            <span className="font-medium text-blue-700">
                              GPA: {edu.gpa}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. CERTIFICATIONS & AWARDS */}
              {certifications && certifications.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 border-b border-slate-200 pb-1">
                    <Award className="w-4 h-4 text-blue-600" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Certifications & Accreditations
                    </h3>
                  </div>

                  <div className="space-y-1.5">
                    {certifications.map((cert) => (
                      <div key={cert.id} className="flex items-baseline justify-between text-xs">
                        <div>
                          <span className="font-semibold text-slate-800">{cert.title}</span>
                          {cert.issuer && (
                            <span className="text-slate-500 text-[11px] ml-1.5">
                              · {cert.issuer}
                            </span>
                          )}
                        </div>
                        {cert.issueDate && (
                          <span className="text-[11px] text-slate-500 font-medium">
                            {cert.issueDate}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer stamp */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
              <span>Standard Resume Format for Global Candidates in Korea</span>
              <span>Page 1 of 1 (A4)</span>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
