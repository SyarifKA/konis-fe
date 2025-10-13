// "use client";

// import { usePathname } from "next/navigation";
// import { GiCoffeeCup } from "react-icons/gi";
// import { FaFacebookF } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
// import { FaInstagram } from "react-icons/fa";

// export default function MainFooter(){
//     const pathname = usePathname();
//     if (["/login", "/register", "/forgot-pass"].includes(pathname)) {
//         return null;
//     }
//     return(
//         <div className="bg-white mt-6 flex px-40 gap-4 py-8 w-full">
//             <div className="w-1/5 flex flex-col gap-4 justify-end">
//                 <button className="flex text-secondary gap-2 text-2xl">
//                     <GiCoffeeCup className=""/>
//                     <span className="font-sacramento">Kopi Manis</span>
//                 </button>
//                 <p>Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
//                 <span className="text-[#AFB5C0]">©2025 Kopi Manis</span>
//             </div>
//             <div className="w-1/8 flex flex-col gap-2 items-start">
//                 <h1 className="font-semibold">Product</h1>
//                 <button>Our Product</button>
//                 <button>Pricing</button>
//                 <button>Locations</button>
//                 <button>Countries</button>
//                 <button>Blog</button>
//             </div>
//             <div className="w-1/8 flex flex-col gap-2 items-start">
//                 <h1 className="font-semibold">Engage</h1>
//                 <button>Partner</button>
//                 <button>FAQ</button>
//                 <button>About Us</button>
//                 <button>Privacy Policy</button>
//                 <button>Terms of Service</button>
//             </div>
//             <div className="w-1/8 flex flex-col gap-2 items-start">
//                 <h1 className="font-semibold">Social Media</h1>
//                 <div className="flex gap-2">
//                     <button className="bg-primary rounded-full p-2"><FaFacebookF /></button>
//                     <button className="bg-primary rounded-full p-2"><BsTwitterX /></button>
//                     <button className="bg-primary rounded-full p-2"><FaInstagram /></button>
//                 </div>
//             </div>
//         </div>
//     )
// }

"use client";

import { usePathname } from "next/navigation";
import { GiCoffeeCup } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

export default function MainFooter() {
  const pathname = usePathname();
  if (["/login", "/register", "/forgot-pass"].includes(pathname)) {
    return null;
  }

  return (
    <footer className="bg-white mt-6 w-full px-6 sm:px-20 lg:px-40 py-10 text-sm text-gray-700">
      <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap justify-between">
        {/* Bagian Brand */}
        <div className="sm:w-[35%] flex flex-col gap-4">
          <button className="flex items-center text-secondary gap-2 text-2xl">
            <GiCoffeeCup />
            <span className="font-sacramento text-2xl">Kopi Manis</span>
          </button>
          <p className="text-gray-600 leading-relaxed">
            Coffee Shop is a store that sells some good meals, and especially
            coffee. We provide high quality beans.
          </p>
          <span className="text-[#AFB5C0] text-sm">©2025 Kopi Manis</span>
        </div>

        {/* Bagian Product & Engage sejajar */}
        <div className="flex sm:w-[40%] justify-around">
          {/* Product */}
          <div className="flex flex-col items-start gap-2">
            <h1 className="font-semibold text-gray-800 mb-1">Product</h1>
            <button>Our Product</button>
            <button>Pricing</button>
            <button>Locations</button>
            <button>Countries</button>
            <button>Blog</button>
          </div>

          {/* Engage */}
          <div className="flex flex-col items-start gap-2">
            <h1 className="font-semibold text-gray-800 mb-1">Engage</h1>
            <button>Partner</button>
            <button>FAQ</button>
            <button>About Us</button>
            <button>Privacy Policy</button>
            <button>Terms of Service</button>
          </div>
        </div>

        {/* Bagian Sosial Media */}
        <div className="sm:w-[18%] flex flex-col gap-3">
          <h1 className="font-semibold text-gray-800 mb-1">Social Media</h1>
          <div className="flex gap-3">
            <button className="bg-primary rounded-full p-2 text-white hover:opacity-90 transition">
              <FaFacebookF />
            </button>
            <button className="bg-primary rounded-full p-2 text-white hover:opacity-90 transition">
              <BsTwitterX />
            </button>
            <button className="bg-primary rounded-full p-2 text-white hover:opacity-90 transition">
              <FaInstagram />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
