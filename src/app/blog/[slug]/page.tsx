import { getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';

// 1. 清晰、正确地定义这个页面组件所需要的 props 类型
interface PostPageProps {
    params: {
        slug: string;
    };
}

// 2. 在函数签名中使用这个正确的类型
export default async function PostPage({ params }: PostPageProps) {
    try {
        const post = await getPostData(params.slug);

        return (
            <article className="container mx-auto p-4">
                <header className="mb-8">
                    <h1 className="text-5xl font-extrabold text-center">{post.title}</h1>
                    <p className="text-gray-500 text-center mt-4">{post.date}</p>
                </header>

                {/* 使用 prose 类来自动美化 Markdown 内容 */}
                <div
                    className="prose lg:prose-xl mx-auto"
                    dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />
            </article>
        );
    } catch { // 3. 使用我们上次修复过的、简洁的 catch 写法
        notFound();
    }
}