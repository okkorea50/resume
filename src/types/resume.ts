export interface PersonalInfo {
  fullName: string;
  koreanName: string;
  photoUrl: string;
  jobTitle: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  currentAddress: string;
  height?: string;
  weight?: string;
}

export type VisaCategory =
  | 'E-7' // Foreign Professional Worker
  | 'D-10' // Job Seeker
  | 'F-2' // Resident
  | 'F-4' // Overseas Korean
  | 'F-5' // Permanent Resident
  | 'F-6' // Marriage Immigrant
  | 'D-2' // Student / Soon to Graduate
  | 'H-1' // Working Holiday
  | 'E-9' // Non-professional Employment
  | 'Overseas / Need Visa' // Requires Visa to enter
  | 'Other';

export interface VisaInfo {
  visaType: string;
  visaExpiryDate: string;
  sponsorshipNeeded: boolean;
  arcStatus: 'Registered (ARC)' | 'Applied / In Process' | 'Not Yet Issued';
  availability: string;
  desiredEmploymentType: string;
  desiredLocation: string;
}

export interface LanguageSkill {
  id: string;
  language: string;
  proficiency: string;
  testScore: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  location: string;
  role: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  location: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
  gpa: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  visa: VisaInfo;
  summary: string;
  languages: LanguageSkill[];
  experiences: WorkExperience[];
  education: Education[];
  skills: string[];
  certifications: Certification[];
}
