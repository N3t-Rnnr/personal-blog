import LeftSidebar from "@/components/LeftSidebar";

// 这是我们之前创建的、带侧边栏的布局
export default function MainAppLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-black">
            {/* 左侧垂直导航栏 */}
            <LeftSidebar />

            {/* 右侧主内容区 */}
            <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}