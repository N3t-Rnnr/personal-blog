import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link"; // 1. 导入 Link 组件
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
        {/* 2. 创建一个居中且有最大宽度的容器 */}
        <div className="max-w-2xl mx-auto">
            {/* 3. 添加全局导航栏 */}
            <header className="p-4 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                <nav className="flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold hover:text-blue-500 transition-colors">
                        首页
                    </Link>
                    {/* 你未来可以在这里添加其他链接，比如 "关于我" */}
                    {/* <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                关于
              </Link> */}
                </nav>
            </header>

            {/* 4. 页面内容 */}
            <main>
                {children}
            </main>
        </div>
        </body>
        </html>
    );
}