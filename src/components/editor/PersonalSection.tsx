"use client";

import React from "react";
import { User, Upload, Image as ImageIcon } from "lucide-react";
import { PersonalInfo } from "../../types/resume";
import { Language, translations } from "../../constants/i18n";

interface PersonalSectionProps {
  personal: PersonalInfo;
  onChange: (field: keyof PersonalInfo, value: string) => void;
  lang: Language;
}

export const PersonalSection: React.FC<PersonalSectionProps> = ({
  personal,
  onChange,
  lang,
}) => {
  const t = translations[lang];

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange("photoUrl", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-5 space-y-4">
      {/* Photo Upload Box */}
      <div className="flex items-center space-x-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
        <div className="w-16 h-20 rounded-lg overflow-hidden bg-slate-200 border border-slate-300 flex items-center justify-center shrink-0">
          {personal.photoUrl ? (
            <img
              src={personal.photoUrl}
              alt="Profile Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <ImageIcon className="w-6 h-6 text-slate-400" />
          )}
        </div>
        <div className="flex-1 space-y-1">
          <p className="text-xs font-semibold text-slate-700">{t.photo}</p>
          <div className="flex flex-wrap gap-2">
            <label className="cursor-pointer inline-flex items-center px-3 py-1.5 text-xs font-medium bg-white text-blue-600 border border-blue-200 rounded-md hover:bg-blue-50 shadow-sm">
              <Upload className="w-3.5 h-3.5 mr-1" />
              {t.uploadPhoto}
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </label>
            {personal.photoUrl && (
              <button
                type="button"
                onClick={() => onChange("photoUrl", "")}
                className="px-2.5 py-1.5 text-xs text-rose-600 hover:bg-rose-50 rounded-md border border-rose-200"
              >
                {t.removePhoto}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {t.fullName} *
          </label>
          <input
            type="text"
            value={personal.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            placeholder="e.g. Alexandre Tremblay"
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {t.koreanName}
          </label>
          <input
            type="text"
            value={personal.koreanName}
            onChange={(e) => onChange("koreanName", e.target.value)}
            placeholder="예: 알렉스 / 김알렉스"
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {t.jobTitle} *
          </label>
          <input
            type="text"
            value={personal.jobTitle}
            onChange={(e) => onChange("jobTitle", e.target.value)}
            placeholder="e.g. Senior Full-Stack Developer / Global BD"
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {t.email} *
          </label>
          <input
            type="email"
            value={personal.email}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder="alex.dev@gmail.com"
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {t.phone} *
          </label>
          <input
            type="tel"
            value={personal.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            placeholder="+82 10-1234-5678"
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {t.nationality} *
          </label>
          <input
            type="text"
            value={personal.nationality}
            onChange={(e) => onChange("nationality", e.target.value)}
            placeholder="e.g. Canada, United States, France"
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {t.currentAddress}
          </label>
          <input
            type="text"
            value={personal.currentAddress}
            onChange={(e) => onChange("currentAddress", e.target.value)}
            placeholder="e.g. Mapo-gu, Seoul, Korea"
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {t.dob}
          </label>
          <input
            type="date"
            value={personal.dateOfBirth}
            onChange={(e) => onChange("dateOfBirth", e.target.value)}
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {t.gender}
          </label>
          <select
            value={personal.gender}
            onChange={(e) => onChange("gender", e.target.value)}
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select / 선택</option>
            <option value="Male">Male / 남성</option>
            <option value="Female">Female / 여성</option>
            <option value="Other">Other / 기타</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {t.height}
          </label>
          <input
            type="text"
            value={personal.height || ""}
            onChange={(e) => onChange("height", e.target.value)}
            placeholder="e.g. 178 cm / 5'10&quot;"
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {t.weight}
          </label>
          <input
            type="text"
            value={personal.weight || ""}
            onChange={(e) => onChange("weight", e.target.value)}
            placeholder="e.g. 72 kg / 158 lbs"
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};
