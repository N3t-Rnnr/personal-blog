import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function BlogIndexPage() {
    const allPosts = getSortedPostsData();

    return (
        // 使用 CSS Grid 布局来实现矩阵排列
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map(({ slug, title, date, excerpt, coverImage }) => (
                <Link
                    href={`/blog/${slug}`}
                    key={slug}
                    className="block group"
                >
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                        {/* 封面图 */}
                        <div className="relative h-48 w-full">
                            {/* 这里可以放一个 Image 组件，如果你的文章有封面图的话 */}
                            {/* <Image src={coverImage} alt={`Cover for ${title}`} layout="fill" objectFit="cover" /> */}
                            {/* 暂时用一个占位符背景 */}
                            <div className="h-full w-full bg-gradient-to-br from-blue-400 to-purple-600"></div>
                        </div>
                        {/* 文章信息 */}
                        <div className="p-6">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{date}</p>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 truncate">
                                {title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed h-20 overflow-hidden text-ellipsis">
                                {excerpt}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}