import Image from "next/image";

export default function BrandDescription() {
  return (
    <div className="py-3 px-3 bg-[#F7F7F7]">
      <h2 className="text-[#E0027B] font-bold text-2xl text-center">
        A healthy pet begins with a health food
      </h2>

      <p className="text-black text-center mt-4">
        From ingredients like real beef and lamb to natural Vitamin E, we make
        sure we give you the quality pet food without sacrificing your pet's
        long-term health and development.
      </p>

      <div className="grid grid-cols-2 mt-4 gap-2">
        <div className="flex flex-col items-center  text-center">
          <div className="">
            <Image
              src={"/brand_desc_icons/pyramid.png"}
              alt="Pyramid"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <span className="text-black">Complete Nutrition</span>
        </div>

        <div className="flex flex-col items-center  text-center">
          <div className="">
            <Image
              src={"/brand_desc_icons/meat.png"}
              alt="Meat"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <span className="text-black">Made with Real Meat</span>
        </div>

        <div className="flex flex-col items-center  text-center">
          <div className="">
            <Image
              src={"/brand_desc_icons/leaves.png"}
              alt="Leaves"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <span className="text-black">Natural Ingredients</span>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="">
            <Image
              src={"/brand_desc_icons/salt.png"}
              alt="Salt"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <span className="text-black">Low Sodium Contents</span>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="">
            <Image
              src={"/brand_desc_icons/digestive-organ.png"}
              alt="Salt"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <span className="text-black">Probiotics for Digestion</span>
        </div>
      </div>
    </div>
  );
}
