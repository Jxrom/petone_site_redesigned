import Image from "next/image";

export default function Vision() {
  return (
    <div className="bg-white py-3 px-3">
      <div className="md:mx-30">
        <Image
          src={"/images/dog.jpg"}
          alt={"Dog"}
          width={400}
          height={100}
          className={"object-contain"}
        />

        <div className="border flex flex-col items-center">
          <Image
            src={"/images/care_naturally.png"}
            alt={"Dog"}
            width={400}
            height={100}
            className={"object-contain"}
          />
          <p className="text-black">
            We believe that care is key for a long lasting and happy dog and
            owner relationship
          </p>

          <button className="bg-[#E0027B] p-4 rounded-2xl mt-4">
            <span className="text-white font-semibold">Learn More</span>
          </button>
        </div>
      </div>
    </div>
  );
}
