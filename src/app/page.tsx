import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function HomePage() {
  const allPosts = getSortedPostsData();

  return (
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">我的博客</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allPosts.map(({ slug, title, date, excerpt }) => (
              <Link href={`/blog/${slug}`} key={slug} className="block border p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-500 text-sm mb-2">{date}</p>
                <p className="text-gray-600">{excerpt}</p>
              </Link>
          ))}
        </div>
      </main>
  );
}