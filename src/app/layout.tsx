import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 1. 从 google 导入 Inter 字体
import "./globals.css";

// 2. 初始化 Inter 字体
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "我的个人博客", // 你可以自定义标题
    description: "由 Next.js 构建的现代化博客", // 你可以自定义描述
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        {/* 3. 将字体的 className 应用到 body 标签上 */}
        <body className={inter.className}>{children}</body>
        </html>
    );
}