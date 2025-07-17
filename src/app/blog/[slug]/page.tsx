import { getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';

interface PostPageProps {
    params: {
        slug: string;
    };
}

export default async function PostPage({ params }: PostPageProps) {
    try {
        const post = await getPostData(params.slug);

        return (
            // 我们移除了这里原有的 <header> 和 "返回" 链接
            <article className="p-4 md:p-6">
                <header className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{post.title}</h1>
                    <p className="text-gray-500 dark:text-gray-400">{post.date}</p>
                </header>

                <div
                    className="prose dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />
            </article>
        );
    } catch {
        notFound();
    }
}