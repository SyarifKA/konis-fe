"use client";

import {useState, useEffect} from 'react'
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { BsCartCheck } from "react-icons/bs";
import LogoKonis from "../components/LogoKonis"
import Link from 'next/link';

export default function MainHeader(){
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    if (["/login", "/register", "/forgot-pass"].includes(pathname)) {
        return null;
    }

    // deteksi scroll
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return(
        <div className={`flex fixed z-50 top-0 w-full justify-between py-4 px-20 text-lg text-white transition-colors duration-500 ${
            isScrolled ? "bg-black shadow-md" : "bg-[#0B090921]"
        }`}>
            <div className="flex gap-4 items-center">
                <LogoKonis/>
                <Link href={`/`}>
                    Home
                </Link>
                <Link href={`/product`}>
                    Product
                </Link>
            </div>
            <div className="flex gap-4 items-center">
                <button className="text-2xl">
                    <CiSearch />
                </button>
                <button className="text-2xl">
                    <BsCartCheck />
                </button>
                <button className="border px-4 py-2 rounded-md">
                    SignIn
                </button>
                <button className="text-black px-4 py-2 rounded-md bg-primary">
                    SignUp
                </button>
            </div>
        </div>
    )
}