import BlogCard from "./BlogCard";

export default function BlogSection() {
  return (
    <div className="bg-[#FFFFFF] py-3 px-3">
      <div className="md:mx-30">
        <h2 className="text-[#E0027B] font-bold text-2xl text-center">
          Latest Blogs
        </h2>

        <div className="mt-8">
          <BlogCard
            coverImage="/sample_images/blog_1.jpg"
            date=""
            excerpt="Dull coat? Low energy? Your pup might be trying to tell you something. Here's how to spot the signs and what to do about it."
            slug=""
            title="5 Signs Your Dog's Diet Needs an Upgrade"
            author=""
          />
        </div>
      </div>
    </div>
  );
}
