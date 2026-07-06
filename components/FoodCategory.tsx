import CategoryButton from "./CategoryButton";

export default function FoodCategory() {
  return (
    <div className="text-center py-3 bg-white ">
      <div className=" md:mx-30 ">
        <h2 className="text-2xl font-semibold text-[#E0027B]">Our Products</h2>

        <div className="grid grid-cols-2 gap-2  p-4 justify-items-center md:flex md:flex-row md:justify-center md:gap-20  ">
          <CategoryButton
            imageSrc="/images/dog_food.webp"
            href=""
            alt="dog food"
            label="Dry Dog Food"
          />
          <CategoryButton
            imageSrc="/images/cat_food.jpg"
            href=""
            alt="cat food"
            label="Dry Cat Food"
          />
          <CategoryButton
            imageSrc="/images/wet_food.webp"
            href=""
            alt="wet food"
            label="Wet Food"
          />
          <CategoryButton
            imageSrc="/images/shampoo.webp"
            href=""
            alt="shampoo"
            label="Shampoo"
          />

          <CategoryButton
            imageSrc="/images/cat_litter.jpg"
            href=""
            alt="cat litter"
            label="Cat Litter"
          />

          <CategoryButton
            imageSrc="/images/pet_toy.jpg"
            href=""
            alt="pet toy"
            label="Pet Toy"
          />
        </div>
      </div>
    </div>
  );
}
