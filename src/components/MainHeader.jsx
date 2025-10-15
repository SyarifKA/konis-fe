"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { BsCartCheck } from "react-icons/bs";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import LogoKonis from "../components/LogoKonis";
import Link from "next/link";

export default function MainHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  useEffect(() => {
      const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    if (["/login", "/register", "/forgot-pass"].includes(pathname)) {
      return null;
    }
    return (
    <header
      className={`fixed z-50 top-0 w-full flex justify-between items-center py-4 px-6 md:px-20 text-lg text-white transition-all duration-500 ${
        isScrolled ? "bg-black shadow-md" : "bg-[#0B090921]"
      }`}
    >
      <div className="flex items-center gap-4">
        <LogoKonis />
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/product" className="hover:text-primary transition-colors">
            Product
          </Link>
        </nav>
      </div>
      <div className="hidden md:flex gap-4 items-center">
        <button className="text-2xl hover:text-primary transition-colors">
          <CiSearch />
        </button>
        <button className="text-2xl hover:text-primary transition-colors">
          <BsCartCheck />
        </button>
        <Link href="/login">
          <button className="border px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors">
            SignIn
          </button>
        </Link>
        <Link href="/register">
          <button className="text-black px-4 py-2 rounded-md bg-primary hover:bg-[#e6b800] transition-colors">
            SignUp
          </button>
        </Link>
      </div>
      <button
        className="md:hidden text-3xl text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
      </button>
      <div
        className={`absolute top-full left-0 w-full bg-black/90 flex flex-col items-center gap-6 py-8 text-white font-medium transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-6"
        }`}
      >
        <Link
          href="/"
          className="hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/product"
          className="hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Product
        </Link>
        <div className="flex gap-3 items-center">
          <button className="text-2xl">
            <CiSearch />
          </button>
          <button className="text-2xl">
            <BsCartCheck />
          </button>
        </div>
        <div className="flex flex-col gap-3 w-2/3">
          <Link href="/login">
            <button className="border w-full px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors">
              SignIn
            </button>
          </Link>
          <Link href="/register">
            <button className="text-black w-full px-4 py-2 rounded-md bg-primary hover:bg-[#e6b800] transition-colors">
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
