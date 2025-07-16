import { getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }: { params: { slug: string } }) {
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
    } catch (error) {
        notFound(); // 如果文章找不到，显示 404 页面
    }
}