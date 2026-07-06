import Link from "next/link";
import Image from "next/image";

interface CategoryButtonProps {
  href: string;
  imageSrc: string;
  alt: string;
  label: string;
}

export default function CategoryButton({
  href,
  imageSrc,
  alt,
  label,
}: CategoryButtonProps) {
  return (
    <Link href={href} className="flex flex-col items-center gap-2">
      <button className="border border-[#E0027B] rounded-full overflow-hidden w-[100px] h-[100px]">
        <Image
          src={imageSrc}
          alt={alt}
          width={100}
          height={100}
          className="object-contain"
        />
      </button>
      <span className="text-sm text-black font-medium">{label}</span>
    </Link>
  );
}
