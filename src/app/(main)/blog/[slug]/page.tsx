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
            // 为文章详情页添加自己的居中、卡片式布局
            <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                    <article className="p-6 md:p-8 lg:p-12">
                        <header className="mb-8">
                            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-center text-gray-900 dark:text-white">{post.title}</h1>
                            <p className="text-gray-500 dark:text-gray-400 text-center">{post.date}</p>
                        </header>

                        <div
                            className="prose dark:prose-invert max-w-none"
                            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                        />
                    </article>
                </div>
            </div>
        );
    } catch {
        notFound();
    }
}