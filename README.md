# 🌐 Global Talent Resume Builder (외국인 구직자 특화 이력서 빌더)

한국 및 글로벌 기업 취업을 희망하는 외국인 구직자(Global Talent)를 위한 **실시간 미리보기 & A4 PDF 출력 지원 원페이지 레주메 웹앱**입니다.

LiveCareer와 같은 직관적인 작성 경험을 제공하면서도, 불필요한 템플릿 선택 과정을 없애고 **사진이 깔끔하게 들어가는 단일 프리미엄 모던 비즈니스 양식**을 채택했습니다.

---

## ✨ 핵심 특징 및 외국인 특화 기능

1. **외국인 취업 특화 필수 정보 완비 (Visa & Work Eligibility)**
   - **비자 종류 및 체류 자격**: E-7(전문인력), D-10(구직), F-2(거주), F-4(재외동포), F-5(영주), F-6(결혼이민), D-2(유학/졸업예정), H-1(워킹홀리데이) 등
   - **비자 만료일자** 및 **취업 비자 스폰서십 필요 여부** 배지
   - **외국인등록증(ARC)** 소지 상태
   - **입사 가능 시기(Availability)** 및 희망 근무 조건
2. **어학 능력 (Language Proficiency)**
   - 한국어 역량 (TOPIK 급수 1~6급 및 비즈니스 회화 수준)
   - 영어 능력 (Native / Fluent 및 TOEIC/IELTS 성적)
   - 모국어 및 제2외국어 동적 추가/삭제
3. **사진 포함된 단일 프리미엄 모던 A4 양식**
   - 글로벌 테크 기업 및 한국 대기업/스타트업 채용담당자가 선호하는 2열 구조
   - 프로필 사진 업로드 (Base64 로컬 처리로 서버 없이 실시간 반영)
   - 완벽한 A4 비율 및 `@media print` 최적화 (인쇄 시 웹 UI 자동 숨김, 오차 없는 A4 1장 출력)
4. **편의 기능**
   - **원클릭 샘플 불러오기**: 외국인 개발자의 실제 취업용 예시 데이터 즉시 로드
   - **로컬 자동 저장**: 브라우저 로컬스토리지에 실시간 자동 저장
   - **다국어 UI**: 한국어 / English 원클릭 토글
   - **JSON 내보내기 / 불러오기**: 데이터 백업 및 복원 지원

---

## 🚀 로컬 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 접속: http://localhost:3000
```

---

## 📦 GitHub 연결 및 푸시 방법

GitHub 계정에 이미 `resume` 저장소를 생성하셨다면 아래 명령어를 터미널에서 순서대로 실행하시면 됩니다.

```bash
# 1. git 초기화 (이미 되어있지 않은 경우)
git init

# 2. 모든 파일 스테이징 및 커밋
git add .
git commit -m "feat: initial commit for global talent resume webapp"

# 3. 브랜치명을 main으로 설정
git branch -M main

# 4. 본인 깃허브 resume 저장소 연결 (본인의 GitHub 유저네임으로 변경)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/resume.git

# 5. GitHub에 푸시
git push -u origin main
```

---

## ⚡ Vercel로 무료 웹앱 배포하기

1. **[Vercel](https://vercel.com/)** 에 로그인합니다 (GitHub 계정으로 로그인 권장).
2. **[Add New...]** -> **[Project]** 를 클릭합니다.
3. 방금 푸시한 **`resume`** GitHub 저장소를 찾아 **[Import]** 버튼을 누릅니다.
4. Next.js 프레임워크가 자동으로 감지되므로, 별도 설정 변경 없이 **[Deploy]** 버튼을 누릅니다.
5. 약 30초~1분 후 자신만의 도메인(예: `https://resume-xxx.vercel.app`)으로 즉시 배포되어 전 세계 어디서든 접속할 수 있습니다!

---

## 📄 기술 스택

- **프레임워크**: Next.js 15 (App Router)
- **라이브러리**: React 19, TypeScript
- **스타일링**: Tailwind CSS
- **아이콘**: Lucide React
