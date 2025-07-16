import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "我的个人博客",
    description: "由 Next.js 构建的现代化博客",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
        <body
            className={`${inter.className} bg-white dark:bg-black text-gray-900 dark:text-gray-100`}
        >
        {/* 创建一个居中且有最大宽度的容器 */}
        <div className="max-w-2xl mx-auto">
            {children}
        </div>
        </body>
        </html>
    );
}