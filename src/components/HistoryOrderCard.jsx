import Image from "next/image";
import Link from "next/link";
import { TbCup } from "react-icons/tb";

export default function HistoryOrderCard({ data }) {
  const getStatusStyle = (status) => {
    switch (status) {
      case "On Progress":
        return "bg-yellow-100 text-yellow-700";
      case "Sending Goods":
        return "bg-blue-100 text-blue-700";
      case "Finish Order":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };
  return (
    <div className="flex flex-col gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-wrap md:flex-nowrap gap-6 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all"
        >
          <div className="w-24 h-24 flex-shrink-0">
            <Image
              src={item.image}
              alt={`order-${index}`}
              width={96}
              height={96}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between flex-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <TbCup />
                  <span>No. Order</span>
                </div>
                <span className="text-lg font-semibold">{item.orderNum}</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <TbCup />
                  <span>Date</span>
                </div>
                <span className="text-lg font-semibold">{item.date}</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <TbCup />
                  <span>Total</span>
                </div>
                <span className="text-lg font-semibold text-green-700">
                  {Number(item.price).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <TbCup />
                  <span>Status</span>
                </div>
                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold text-center w-fit ${getStatusStyle(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>
              </div>
            </div>
            <Link
              href="/detail-order"
              className="text-primary underline text-sm mt-3 hover:text-primary/80 w-fit"
            >
              View Order Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
