import type { Metadata } from "next";
import "./globals.css";
import Soundscape from "./components/Soundscape";

export const metadata: Metadata = {
  title: "Thought Garden — Guo Tiantian",
  description: "郭甜甜的沉浸式 AI 产品经理个人作品空间。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <Soundscape />
      </body>
    </html>
  );
}
