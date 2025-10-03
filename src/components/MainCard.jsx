import { BsCart3 } from "react-icons/bs";
import Image from "next/image";

export default function MainCard({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="w-[280px] drop-shadow-lg">
            <div className="relative h-[268px] w-full rounded-t-lg overflow-hidden">
                <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority={index === 0}
                />
            </div>
            <div className="relative bg-white mx-2 -mt-8 p-2">
                <h1>{item.title}</h1>
                <p className="text-sm">{item.desc}</p>
                <span>IDR {item.price}</span>
                <div className="flex w-full gap-2">
                    <button className="bg-primary w-2/3 py-2 rounded-md">Buy</button>
                    <button className="flex justify-center w-1/3 text-2xl py-2 border border-primary text-primary rounded-md"><BsCart3 /></button>
                </div>
            </div>
        </div>
      ))}
    </>
  );
}
