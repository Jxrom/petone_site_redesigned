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
  tags?: string[];
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  coverImage,
  date,
  author,
  tags,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="group w-full h-[450px] flex flex-col rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative w-full h-48 shrink-0">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 flex flex-col flex-1">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-wide font-semibold text-[#E0027B] bg-[#E0027B]/10 px-3 py-0.5 rounded-full "
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h2 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {title}
          </h2>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">{excerpt}</p>
          <div className="mt-4 flex items-center text-xs text-gray-500">
            <time dateTime={date}>{date}</time>
            {author && <span className="ml-2">· {author}</span>}
          </div>
        </div>

        <button className="text-sm text-black self-start mb-2 mx-4">
          Read More
        </button>
      </article>
    </Link>
  );
}
