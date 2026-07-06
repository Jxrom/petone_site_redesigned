"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between px-6 py-4 bg-white md:mx-30">
        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <HiX size={32} className="text-white " />
          ) : (
            <HiMenu size={32} className="" />
          )}
        </button>

        <div className="flex items-center gap-10">
          <Link href="/" className="">
            <Image
              src="/images/petone_logo.svg"
              alt="Pet One Logo"
              width={130}
              height={100}
              className="object-contain"
            />
          </Link>

          <ul className="sm:flex gap-6 hidden text-sm text-black">
            <li>
              <Link href="/" className="hover:text-[#E0027B]">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#E0027B]">
                Stores
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#E0027B]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#E0027B]">
                Learn
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#E0027B]">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <button>
          <BiSearch size={32} className="text-black" />
        </button>
      </div>
    </nav>
  );
}
