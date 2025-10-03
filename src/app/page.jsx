import Image from "next/image";
import Home1 from "../../public/img/home1.jpg";
import Home2 from "../../public/img/home2.jpg";
import MainCard from "../components/MainCard"
import { FaCheckCircle } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { FaCircle } from "react-icons/fa";

export default function Home() {
  const dataMenu = [{
    image: "/img/menu1.jpg",
    title: "Hazelnut Latte",
    desc: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
    price: 20000
  },
  {
      image: "/img/menu2.png",
      title: "Hazelnut Latte",
      desc: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
      price: 20000
    },
  {
      image: "/img/menu3.png",
      title: "Hazelnut Latte",
      desc: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
      price: 20000
    },
  {
      image: "/img/menu4.png",
      title: "Hazelnut Latte",
      desc: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
      price: 20000
    }]

  const dataTestimonial = [{
    image: "/img/joko.jpg",
    name: "Joko",
    testi: `“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!"`
  },]
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
      <section className="w-full h-[800px] flex">
      {/* <section className="w-full h-[574px] flex"> */}
        <div className="w-1/2 justify-center flex flex-col gap-4 px-58">
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
      <section className="flex flex-col gap-6 justify-center items-center mt-8">
        <h1 className="relative text-5xl pb-6
            after:content-[''] after:absolute after:left-1/3 after:bottom-0
            after:h-2 after:w-1/6 after:bg-primary">
          Here is People’s <span className="text-secondary">Favorite</span>
        </h1>
        <p>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
        <div className="flex gap-4">
            <MainCard data={dataMenu}/>
        </div>
      </section>
      <section className="flex flex-col gap-4 items-center mt-12 px-16">
        <h1 className="relative text-5xl pb-6
            after:content-[''] after:absolute after:left-1/3 after:bottom-0
            after:h-2 after:w-1/6 after:bg-primary text-secondary">
          Visit Our Store <span className="text-black">in the Spot on the Map Below</span>
        </h1>
        <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
        <div className="w-2/3 bg-contain bg-no-repeat bg-[url('/img/Huge_Global.png')] h-[586px]"></div>
      </section>
      <section className="bg-linear-to-b from-[#777C82] to-[#0B0909] w-full flex gap-4 justify-center text-white py-12">
        <div className="h-[500px] bg-cover bg-no-repeat bg-[url('/img/joko.jpg')] w-[578px]"></div>
        <div className="flex flex-col gap-4 w-[578px]">
          <h1>TESTIMONIAL</h1>
          <span className="text-5xl border-l-6 border-primary pl-6">{dataTestimonial[0].name}</span>
          <span className="text-primary">Manager Kopi Manis</span>
          <p className="">{dataTestimonial[0].testi}</p>
          <div className="flex gap-2 text-primary items-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className="text-white">5.0</span>
          </div>
          <div className="text-black flex gap-2">
            <button className="bg-white p-2 rounded-full text-2xl"><GoArrowLeft /></button>
            <button className="bg-primary p-2 rounded-full text-2xl"><GoArrowRight /></button>
          </div>
          <div className="text-white flex gap-2 text-sm">
            <FaCircle className="text-primary"/>
            <FaCircle />
            <FaCircle />
            <FaCircle />
          </div>
        </div>
      </section>
    </div>
  );
}
