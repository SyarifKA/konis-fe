"use client";

import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { BsCartCheck } from "react-icons/bs";
import LogoKonis from "../components/LogoKonis"

export default function MainHeader(){
    const pathname = usePathname();
    if (["/login", "/register"].includes(pathname)) {
        return null;
    }
    return(
        <div className="flex fixed text-lg top-0 w-full justify-between py-4 px-20 text-white bg-[#0B090921]">
            <div className="flex gap-4 items-center">
                <LogoKonis/>
                <button>
                    Home
                </button>
                <button>
                    Product
                </button>
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