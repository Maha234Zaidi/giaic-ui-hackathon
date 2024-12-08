"use client";

import { useState } from "react";
import Logo from "@/app/assests/SHOP.CO.png";
import shopImg from "@/app/assests/Vector.png";
import userLogo from "@/app/assests/Vector (1).png";
import Image from "next/image";
import { FaSearch, FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

// Start Navbar //
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-4 py-3 lg:px-10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="logo"
            className="w-24 sm:w-32 h-auto shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6 text-sm lg:text-base font-medium ">
            <Link href={"/"}>
              <li className="flex items-center gap-1 hover:underline ">
                Shop <FaAngleDown className="w-4 h-4" />
              </li>
            </Link>
            <Link href={"/"}>
              <li className="hover:underline">On Sale</li>
            </Link>
            <Link href={"/"}>
              <li className="hover:underline">New Arrivals</li>
            </Link>
            <Link href={"/"}>
              {" "}
              <li className="hover:underline">Brands</li>
            </Link>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:block lg:max-w-md">
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none text-sm lg:text-base"
            />
          </div>
        </div>

        {/* Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <Image src={shopImg} alt="Shopping Cart" className="w-6 h-6" />
          <Image src={userLogo} alt="User Icon" className="w-6 h-6" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col gap-4 text-center text-sm font-medium">
            <li className="flex items-center justify-center gap-1">
              Shop <FaAngleDown className="w-4 h-4" />
            </li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
          <div className="mt-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                <FaSearch />
              </span>
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none text-sm"
              />
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <Image src={shopImg} alt="Shopping Cart" className="w-6 h-6" />
              <Image src={userLogo} alt="User Icon" className="w-6 h-6" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
