import HistoryOrderCard from "@/components/HistoryOrderCard";
import { GoArrowRight } from "react-icons/go";
import { BsChatLeftText } from "react-icons/bs";

export default function HistoryOrder() {
  const dataHistory = [
    {
      image: "/img/detailProduct1.jpg",
      orderNum: "#12354-09893",
      price: 40000,
      date: "23 January 2023",
      status: "On Progress",
    },
    {
      image: "/img/detailProduct1.jpg",
      orderNum: "#12354-09894",
      price: 40000,
      date: "23 January 2023",
      status: "Sending Goods",
    },
    {
      image: "/img/detailProduct1.jpg",
      orderNum: "#12354-09895",
      price: 40000,
      date: "23 January 2023",
      status: "Finish Order",
    },
    {
      image: "/img/detailProduct1.jpg",
      orderNum: "#12354-09896",
      price: 40000,
      date: "23 January 2023",
      status: "On Progress",
    },
  ];

  return (
    <div className="flex flex-col gap-8 px-8 md:px-30 mt-20 md:mt-30">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-semibold">History Order</h1>

      <section className="flex flex-col md:flex-row gap-8 w-full">
        {/* Left Section */}
        <div className="flex flex-col gap-6 w-full md:w-2/3">
          {/* Filter & Date */}
          <div className="flex flex-col-reverse sm:flex-row justify-between gap-4">
            <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
              {["On Progress", "Sending Goods", "Finish Order"].map((tab) => (
                <button
                  key={tab}
                  className="px-4 py-2 text-sm md:text-base hover:bg-white hover:shadow-inner transition-all focus:bg-white focus:shadow-md"
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
              <input
                type="date"
                className="bg-transparent outline-none text-gray-700"
              />
            </div>
          </div>

          {/* History List */}
          <HistoryOrderCard data={dataHistory} />

          {/* Pagination */}
          <div className="flex gap-2 justify-center mt-4">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                className={`flex justify-center items-center w-10 h-10 rounded-full transition-all ${
                  num === 1
                    ? "bg-primary text-white"
                    : "bg-gray-200 hover:bg-primary hover:text-white"
                }`}
              >
                {num}
              </button>
            ))}
            <button className="flex justify-center items-center w-10 h-10 rounded-full bg-primary text-white cursor-pointer">
              <GoArrowRight />
            </button>
          </div>
        </div>

        {/* Right Section (Message Box) */}
        <div className="w-full md:w-1/3 p-6 border border-gray-200 rounded-lg flex flex-col gap-6 text-gray-800 h-fit shadow-sm">
          <button className="bg-black text-primary text-2xl w-fit p-4 rounded-xl cursor-pointer hover:opacity-90 transition">
            <BsChatLeftText />
          </button>
          <h2 className="text-xl font-semibold">Send Us a Message</h2>
          <p className="text-gray-600 leading-relaxed">
            If you’re unable to find an answer or locate your product quickly,
            please describe your problem and tell us. We’ll provide the best
            solution for you.
          </p>
          <button className="bg-primary py-2 rounded-lg cursor-pointer font-medium hover:opacity-90 transition">
            Send Message
          </button>
        </div>
      </section>
    </div>
  );
}
