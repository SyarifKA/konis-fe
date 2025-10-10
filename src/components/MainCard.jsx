import { BsCart3 } from "react-icons/bs";
import Image from "next/image";
import FlashSale from '../components/LabelFlashSale'
import Link from "next/link";

export default function MainCard({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <Link href={`/product/${item.slug}`} key={index} className="w-[280px] shrink-0 drop-shadow-lg">
            <div className="relative h-[268px] w-full rounded-t-lg overflow-hidden">
                <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority={index === 0}
                />
                {item?.flashSale && (
                  <div className="absolute top-2 left-2 z-10">
                    <FlashSale />
                  </div>
                )}
            </div>
            <div className="flex flex-col gap-2 relative bg-white mx-2 -mt-8 p-2">
                <h1 className="font-semibold text-xl">{item.title}</h1>
                <p className="text-xs">{item.desc}</p>
                <div className="flex gap-2 items-center">
                  {item?.priceBefore &&(
                    <span className="text-lg text-red-700 line-through">IDR {Number(item?.priceBefore).toLocaleString('id-ID')}</span>
                  )}
                  <span className="text-2xl text-primary">IDR {Number(item.price).toLocaleString('id-ID')}</span>
                </div>
                <div className="flex w-full gap-2">
                    <button className="bg-primary w-2/3 py-2 rounded-md cursor-pointer">Buy</button>
                    <button className="flex justify-center w-1/3 text-2xl py-2 border border-primary text-primary rounded-md cursor-pointer"><BsCart3 /></button>
                </div>
            </div>
        </Link>
      ))}
    </>
  );
}
