import { getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PostPageProps {
    params: {
        slug: string;
    };
}

export default async function PostPage({ params }: PostPageProps) {
    try {
        const post = await getPostData(params.slug);

        return (
            <div>
                <header className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center gap-4">
                    <Link href="/" className="text-blue-500 hover:underline">
                        ← 返回
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold">文章</h1>
                    </div>
                </header>

                <article className="p-4">
                    <h2 className="text-3xl font-extrabold mb-2">{post.title}</h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-8">{post.date}</p>

                    <div
                        className="prose dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                    />
                </article>
            </div>
        );
    } catch {
        notFound();
    }
}