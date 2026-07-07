import BrandDescription from "@/components/BrandDescription";
import Carousel from "@/components/Carousel";
import FoodCategory from "@/components/FoodCategory";
import Image from "next/image";
import Vision from "@/components/Vision";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main>
      <Carousel />

      <FoodCategory />

      <BrandDescription />

      <Vision />

      <BlogSection />

      <FAQSection />
    </main>
  );
}
