import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Talent Resume Builder | 외국인 구직자 특화 이력서 빌더",
  description: "한국 및 글로벌 기업 취업을 위한 외국인 구직자 전용 원페이지 레주메 빌더. 비자, 어학(TOPIK), 합법적 취업 자격 및 사진 포함 깔끔한 A4 양식 지원.",
  keywords: ["foreign resume", "외국인 이력서", "E-7 visa resume", "TOPIK resume", "Korea job resume", "글로벌 취업 이력서"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
