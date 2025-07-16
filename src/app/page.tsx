import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function HomePage() {
    const allPosts = getSortedPostsData();

    return (
        <main>
            {/* 博客标题 */}
            <header className="p-4 border-b border-gray-200 dark:border-gray-800">
                <h1 className="text-xl font-bold">首页</h1>
            </header>

            {/* 文章列表 */}
            <section>
                {allPosts.map(({ slug, title, date, excerpt }) => (
                    <Link href={`/blog/${slug}`} key={slug} className="block">
                        <article className="p-4 border-b border-gray-200 dark:border-gray-800 cursor-pointer transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-900">
                            <div className="flex items-center mb-2">
                                <h2 className="text-lg font-bold">{title}</h2>
                                <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">· {date}</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                {excerpt}
                            </p>
                        </article>
                    </Link>
                ))}
            </section>
        </main>
    );
}