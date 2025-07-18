import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "N3T-RNNR's Space",
    description: "代码、思考与创造的交汇点",
};

// 这是一个最顶层的、极简的布局
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
        <body className={inter.className}>
        {/* 直接渲染子内容，不做任何额外的布局包裹 */}
        {children}
        </body>
        </html>
    );
}