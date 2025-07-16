import { getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';

// 定义一个清晰、独立的 props 类型
interface PostPageProps {
    params: {
        slug: string;
    };
}

// 在函数签名中，明确使用上面定义的 PostPageProps 类型
export default async function PostPage({ params }: PostPageProps) {
    try {
        const post = await getPostData(params.slug);

        return (
            <article className="container mx-auto p-4">
                <header className="mb-8">
                    <h1 className="text-5xl font-extrabold text-center">{post.title}</h1>
                    <p className="text-gray-500 text-center mt-4">{post.date}</p>
                </header>

                <div
                    className="prose dark:prose-invert lg:prose-xl mx-auto"
                    dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />
            </article>
        );
    } catch {
        notFound();
    }
}