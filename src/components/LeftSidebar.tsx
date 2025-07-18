"use client"; // 因为要使用 usePathname，所以必须是客户端组件

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, User } from 'lucide-react'; // 使用图标库增加美感

const navLinks = [
    { name: '主页', href: '/', icon: Home },
    { name: '博客', href: '/blog', icon: BookOpen },
    // { name: '关于', href: '/about', icon: User }, // 为未来预留
];

export default function LeftSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 p-6 pr-0 flex-shrink-0">
            <div className="sticky top-6">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-mono tracking-wider">
                        N3T-RNNR
                    </h1>
                </div>
                <nav className="flex flex-col space-y-2">
                    {navLinks.map((link) => {
                        const isActive = pathname.startsWith(link.href) && (link.href !== '/' || pathname === '/');
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex items-center gap-3 rounded-full px-4 py-3 text-lg transition-colors duration-200
                  ${
                                    isActive
                                        ? 'font-bold bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white'
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'
                                }
                `}
                            >
                                <link.icon className="h-6 w-6" />
                                <span>{link.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}