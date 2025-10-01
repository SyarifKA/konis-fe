import Image from "next/image";
import Home1 from "../../public/img/home1.jpg";
import Home2 from "../../public/img/home2.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="flex min-h-screen w-full">
        <div className="bg-linear-to-b from-[#777C82] to-[#0B0909] w-1/2 flex flex-col gap-6 justify-center text-white px-58">
          <h1 className="text-5xl">Start Your Day with Coffee and Good Meals</h1>
          <p>We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
          <div>
            <button className="bg-primary px-4 py-2 rounded-md text-black">Get Started</button>
          </div>
          <div className="flex">
            <div className="flex flex-col border-r w-1/3 gap-2">
              <span className="text-primary text-5xl">90+</span>
              <span>Staff</span>
            </div>
            <div className="flex flex-col border-r w-1/3 gap-2 text-center">
              <span className="text-primary text-5xl">30+</span>
              <span>Stores</span>
            </div>
            <div className="flex flex-col w-1/3 gap-2 text-right">
              <span className="text-primary text-5xl">800+</span>
              <span>Customer</span>
            </div>
          </div>
        </div>
        <div className="relative w-1/2">
          <Image
          src={Home1}
          alt="Background"
          fill
          className="object-auto -z-10"
          priority
          />
          <button className="fixed bottom-12 right-12 rounded-full p-4 bg-primary">
            <IoChatbubbleEllipsesOutline className="text-2xl text-black"/>
          </button>
        </div>
      </section>
      <section className="w-full h-[574px] flex">
        <div className="w-1/2 justify-center flex flex-col gap-4 px-58">
          {/* <h1 className="text-5xl pl-6 border-l-8 border-primary">We Provide <span className="text-secondary">Good Coffee</span> and <span className="text-secondary">Healthy Meals</span></h1> */}
          <h1 className="relative text-5xl pl-6 
              before:content-[''] before:absolute before:left-0 before:top-1/3
              before:h-1/3 before:w-2 before:bg-primary">
            We Provide <span className="text-secondary">Good Coffee</span> and <span className="text-secondary">Healthy Meals</span>
          </h1>
          <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <FaCheckCircle className="text-green-600"/>
              <span>High quality beans</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaCheckCircle className="text-green-600"/>
              <span>Healthy meals, you can request the ingredients</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaCheckCircle className="text-green-600"/>
              <span>Chat with our staff to get better experience for ordering</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaCheckCircle className="text-green-600"/>
              <span>Free member card with a minimum purchase of IDR 200.000.</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-cover bg-[center_-150px] bg-no-repeat bg-[url('/img/home2.jpg')] h-full">
        </div>
      </section>
    </div>
  );
}
