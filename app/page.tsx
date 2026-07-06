import Carousel from "@/components/Carousel";
import FoodCategory from "@/components/FoodCategory";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Carousel />

      <FoodCategory />
    </main>
  );
}
