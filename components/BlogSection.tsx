"use client";

import useEmblaCarousel from "embla-carousel-react";
import BlogCard from "./BlogCard";

const posts = [
  {
    slug: "dog-diet-upgrade",
    title: "5 Signs Your Dog's Diet Needs an Upgrade",
    excerpt:
      "Dull coat? Low energy? Your pup might be trying to tell you something. Here's how to spot the signs and what to do about it.",
    coverImage: "/sample_images/blog_1.jpg",
    date: "2026-06-01",
    author: "",
    tags: ["Nutrition", "5 min"],
  },
  {
    slug: "puppy-training-basics",
    title: "Puppy Training Basics Every New Owner Should Know",
    excerpt:
      "From potty training to leash manners, here's a simple routine to help your puppy learn good habits early on.",
    coverImage: "/sample_images/blog_1.jpg",
    date: "2026-06-02",
    author: "",
    tags: ["Training", "7 min"],
  },
  {
    slug: "cat-hydration-tips",
    title: "Why Your Cat Isn't Drinking Enough Water",
    excerpt:
      "Cats are notorious for under-drinking. Here are a few vet-approved tricks to keep them hydrated and healthy.",
    coverImage: "/sample_images/blog_1.jpg",
    date: "2026-06-03",
    author: "",
    tags: ["Health", "4 min"],
  },
];

export default function BlogSection() {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: "start" });

  return (
    <div className="bg-[#FFFFFF] py-3 px-3">
      <div className="md:mx-30">
        <h2 className="text-[#E0027B] font-bold text-2xl text-center">
          Latest Blogs
        </h2>

        {/* Mobile: carousel */}
        <div className="mt-8 md:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {posts.map((post) => (
              <div key={post.slug} className="flex-[0_0_85%] min-w-0">
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="mt-8 hidden md:grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
