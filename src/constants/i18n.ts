export type Language = "ko" | "en";

export const translations = {
  ko: {
    appTitle: "글로벌 인재 이력서 빌더",
    appSubtitle: "외국인 구직자를 위한 한국 & 글로벌 기업 맞춤 원페이지 레주메",
    loadSample: "외국인 샘플 불러오기",
    reset: "새로 쓰기",
    downloadPdf: "PDF 다운로드 / 인쇄",
    backupJson: "백업 (JSON 저장)",
    loadJson: "불러오기 (JSON)",
    preview: "실시간 미리보기",
    editor: "정보 입력",
    savedAlert: "브라우저에 자동 저장되었습니다.",
    
    // Sections
    personalDetails: "인적사항 및 연락처",
    visaWorkAuth: "비자 및 취업 자격 (Visa & Work Authorization)",
    professionalSummary: "전문성 요약 (About Me)",
    languages: "어학 능력 (Languages)",
    workExperience: "경력 사항 (Work Experience)",
    education: "학력 사항 (Education)",
    skills: "보유 기술 & 역량 (Skills)",
    certifications: "자격증 및 대외활동 (Certifications)",

    // Personal Fields
    fullName: "영문 성명 (여권 기준)",
    koreanName: "한글 성명 (있을 경우)",
    photo: "프로필 사진",
    uploadPhoto: "사진 업로드",
    removePhoto: "사진 제거",
    jobTitle: "희망 직무 / 타이틀 (예: Full-Stack Developer)",
    email: "이메일",
    phone: "연락처",
    dob: "생년월일",
    gender: "성별",
    nationality: "국적",
    currentAddress: "현재 체류지 / 거주 국가 및 도시",

    // Visa Fields
    visaType: "현재 체류 자격 / 비자 종류",
    visaExpiry: "비자 만료일",
    sponsorship: "취업 비자 스폰서십 필요 여부",
    sponsorshipNeeded: "스폰서십 지원 필요",
    sponsorshipNotNeeded: "스폰서십 불필요 (취업 가능 비자 소지)",
    arcStatus: "외국인등록증 (ARC) 상태",
    arcRegistered: "등록 완료 (소지)",
    arcPending: "신청 중 / 발급 예정",
    arcNone: "미소지",
    availability: "입사 가능 시기",
    desiredEmployment: "희망 고용 형태",
    desiredLocation: "희망 근무 지역",

    // Language Fields
    addLanguage: "+ 언어 추가",
    langName: "언어명",
    proficiency: "숙련도",
    testScore: "공인 시험 / 점수 (예: TOPIK 5급, TOEIC 950)",

    // Experience Fields
    addExperience: "+ 경력 추가",
    company: "회사명",
    location: "위치 (도시, 국가)",
    role: "직책 / 담당 업무",
    period: "근무 기간",
    currentWorking: "현재 재직 중",
    responsibilities: "주요 업무 및 성과 (줄바꿈 지원)",

    // Education Fields
    addEducation: "+ 학력 추가",
    school: "학교명 / 교육기관",
    degree: "학위",
    major: "전공",
    gpa: "학점 (GPA)",

    // Skills Fields
    addSkillPlaceholder: "기술/역량 입력 후 Enter 또는 추가 버튼",
    addSkill: "추가",

    // Cert Fields
    addCert: "+ 자격증 추가",
    certTitle: "자격증 / 수상명",
    issuer: "발급 기관",
    issueDate: "취득일자",
    
    delete: "삭제",
    printHint: "인쇄 창에서 대상: 'PDF로 저장', 여백: '없음' 또는 '기본'을 선택하시면 완벽한 A4 한 장으로 저장됩니다.",
  },
  en: {
    appTitle: "Global Talent Resume Builder",
    appSubtitle: "Standard One-Page Resume for Foreign Professionals in Korea & Global",
    loadSample: "Load Foreigner Sample",
    reset: "Clear All",
    downloadPdf: "Download PDF / Print",
    backupJson: "Export JSON",
    loadJson: "Import JSON",
    preview: "Live Preview",
    editor: "Editor Form",
    savedAlert: "Saved locally in your browser.",

    // Sections
    personalDetails: "Personal Details",
    visaWorkAuth: "Visa & Work Authorization",
    professionalSummary: "Professional Summary",
    languages: "Language Proficiency",
    workExperience: "Work Experience",
    education: "Education",
    skills: "Key Skills & Competencies",
    certifications: "Certifications & Activities",

    // Personal Fields
    fullName: "Full Name (Passport / Legal)",
    koreanName: "Korean Name (Optional)",
    photo: "Profile Photo",
    uploadPhoto: "Upload Photo",
    removePhoto: "Remove Photo",
    jobTitle: "Target Job Title (e.g. Full-Stack Developer)",
    email: "Email Address",
    phone: "Phone Number",
    dob: "Date of Birth",
    gender: "Gender",
    nationality: "Nationality",
    currentAddress: "Current Residence (City, Country)",

    // Visa Fields
    visaType: "Current Visa Status",
    visaExpiry: "Visa Expiration Date",
    sponsorship: "Visa Sponsorship Requirement",
    sponsorshipNeeded: "Requires Visa Sponsorship",
    sponsorshipNotNeeded: "Eligible to Work / No Sponsorship Needed",
    arcStatus: "Alien Registration Card (ARC)",
    arcRegistered: "Registered / Card Issued",
    arcPending: "Applied / In Process",
    arcNone: "Not Yet Issued",
    availability: "Availability / Notice Period",
    desiredEmployment: "Desired Employment Type",
    desiredLocation: "Desired Work Location",

    // Language Fields
    addLanguage: "+ Add Language",
    langName: "Language",
    proficiency: "Proficiency Level",
    testScore: "Official Test / Score (e.g. TOPIK Level 5)",

    // Experience Fields
    addExperience: "+ Add Experience",
    company: "Company Name",
    location: "Location (City, Country)",
    role: "Role / Position",
    period: "Employment Period",
    currentWorking: "Currently working here",
    responsibilities: "Key Responsibilities & Achievements",

    // Education Fields
    addEducation: "+ Add Education",
    school: "School / University",
    degree: "Degree",
    major: "Major / Field of Study",
    gpa: "GPA / Honors",

    // Skills Fields
    addSkillPlaceholder: "Type skill and press Enter",
    addSkill: "Add",

    // Cert Fields
    addCert: "+ Add Certification",
    certTitle: "Certificate / Award Title",
    issuer: "Issuing Organization",
    issueDate: "Issue Date",
    
    delete: "Delete",
    printHint: "In the print dialog, select Destination: 'Save as PDF', Margins: 'None' or 'Default' for the best A4 output.",
  },
};
