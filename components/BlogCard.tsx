// components/BlogCard.tsx
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author?: string;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  coverImage,
  date,
  author,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="group rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative w-full h-48">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {title}
          </h2>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">{excerpt}</p>
          <div className="mt-4 flex items-center text-xs text-gray-500">
            <time dateTime={date}>{date}</time>
            {author && <span className="ml-2">· {author}</span>}
          </div>
        </div>
      </article>
    </Link>
  );
}
