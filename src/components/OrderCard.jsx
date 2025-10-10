'use client'

import Image from "next/image";
import FlashSale from "./LabelFlashSale";
import { usePathname } from "next/navigation";

export default function OrderCard({ data }) {
  const pathname = usePathname()
  const isDetailPage = pathname.includes("/detail-order");
  return (
    <div className="flex flex-col gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4"
        >
          <div className="flex gap-4 items-center">
            <div className="relative w-[150px] h-[150px] rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-fit">
                <FlashSale className="text-xs" />
              </div>
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <div className="flex gap-2 text-sm text-gray-600">
                {item.qty && <span className="border-r-2 pr-2">{item.qty} pcs</span>}
                {item.size && <span className="border-r-2 pr-2">{item.size}</span>}
                {item.variant && <span className="border-r-2 pr-2">{item.variant}</span>}
                {item.delivery && <span>{item.delivery}</span>}
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-red-600 text-sm line-through">
                  IDR {Number(item.priceBefore).toLocaleString("id-ID")}
                </span>
                <span className="text-primary font-semibold text-base">
                  IDR {Number(item.price).toLocaleString("id-ID")}
                </span>
              </div>
            </div>
          </div>
          {!isDetailPage && (
            <button
              type="button"
              className="text-gray-400 hover:text-red-600 text-2xl font-bold cursor-pointer transition-colors"
              title="Hapus item"
            >
              ×
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
