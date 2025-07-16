import { getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';

// 1. 定义一个清晰的 props 类型，这是这个页面唯一需要的类型
interface PostPageProps {
    params: {
        slug: string;
    };
}

// 2. 在函数签名中，明确使用上面定义的 PostPageProps 类型
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
                    className="prose lg:prose-xl mx-auto"
                    dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />
            </article>
        );
    } catch {
        // 3. 确保 catch 块是简洁的，不带任何未使用的变量
        notFound();
    }
}