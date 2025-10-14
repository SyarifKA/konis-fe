'use client'

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Coupon from '../../components/Coupon'
import { useRef } from "react";
import MainCard from '../../components/MainCard'
import DualPriceRange from "@/components/DualPriceRange";

export default function Product(){
    const dataCoupon = [{
        image: '/img/person-promo1.png',
        title: 'HAPPY MOTHER’S DAY!',
        desc: 'Get one of our favorite menu for free!',
        button: 'Klaim Kupon'
    },{
        image: '/img/person-promo1.png',
        title: 'HAPPY MOTHER’S DAY!',
        desc: 'Get one of our favorite menu for free!',
        button: 'Klaim Kupon'
    },{
        image: '/img/person-promo1.png',
        title: 'HAPPY MOTHER’S DAY!',
        desc: 'Get one of our favorite menu for free!',
        button: 'Klaim Kupon'
    },{
        image: '/img/person-promo2.png',
        title: 'Get a cup of coffee for free on sunday morning',
        desc: 'Only at 7 to 9 AM'
    },{
        image: '/img/person-promo1.png',
        title: 'HAPPY MOTHER’S DAY!',
        desc: 'Get one of our favorite menu for free!',
        button: 'Klaim Kupon'
    },{
        image: '/img/person-promo1.png',
        title: 'HAPPY MOTHER’S DAY!',
        desc: 'Get one of our favorite menu for free!',
        button: 'Klaim Kupon'
    },
    {
        image: '/img/person-promo1.png',
        title: 'HAPPY MOTHER’S DAY!',
        desc: 'Get one of our favorite menu for free!',
        button: 'Klaim Kupon'
    },]

    const scrollRef = useRef(null)

    const scrollLeft = () => {
        if (scrollRef.current) {
        scrollRef.current.scrollBy({
            left: -400, // jumlah scroll ke kiri (px)
            behavior: 'smooth'
        })
        }
    }

    const scrollRight = () => {
        if (scrollRef.current) {
        scrollRef.current.scrollBy({
            left: 400, // jumlah scroll ke kanan (px)
            behavior: 'smooth'
        })
        }
    }

    const dataMenu = [
    {
        id: 1,
        slug: "hazelnut-latte",
        image: "/img/menu1.jpg",
        title: "Hazelnut Latte",
        desc: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
        priceBefore: 40000,
        price: 20000,
        flashSale: true,
    },
    {
        id: 2,
        slug: "mocha-latte",
        image: "/img/menu2.png",
        title: "Mocha Latte",
        desc: "A mix of chocolate and espresso to brighten your mood.",
        priceBefore: 42000,
        price: 21000,
        flashSale: true,
    },
    {
        id: 3,
        slug: "caramel-macchiato",
        image: "/img/menu3.png",
        title: "Caramel Macchiato",
        desc: "Espresso with caramel flavor that gives a sweet touch to your day.",
        priceBefore: 35000,
        price: 14000,
        flashSale: true,
    },
    {
        id: 4,
        slug: "vanilla-latte",
        image: "/img/menu4.png",
        title: "Vanilla Latte",
        desc: "Smooth and creamy latte with a hint of vanilla aroma.",
        priceBefore: 25000,
        price: 19000,
        flashSale: true,
    },
    {
        id: 5,
        slug: "americano",
        image: "/img/menu4.png",
        title: "Americano",
        desc: "Classic black coffee for a strong and bold flavor.",
        priceBefore: 19000,
        price: 8000,
        flashSale: true,
    },
    {
        id: 6,
        slug: "espresso",
        image: "/img/menu3.png",
        title: "Espresso",
        desc: "Pure espresso shot to keep you energized.",
        priceBefore: 18500,
        price: 14000,
        flashSale: true,
    },
    {
        id: 7,
        slug: "matcha-latte",
        image: "/img/menu2.png",
        title: "Matcha Latte",
        desc: "Green tea blend with milk for a relaxing taste.",
        priceBefore: 30000,
        price: 23000,
        flashSale: true,
    },
    {
        id: 8,
        slug: "cold-brew",
        image: "/img/menu1.jpg",
        title: "Cold Brew",
        desc: "Smooth and refreshing coffee brewed cold for hours.",
        priceBefore: 26000,
        price: 24000,
        flashSale: true,
    }];

        
    return(
        <div className="flex flex-col gap-6">
            <section className="hidden md:flex items-center px-24 w-full bg-cover bg-no-repeat bg-[url('/img/banner-product1.jpg')] h-[400px] md:bg-[position:center_-1700px]">
                    <span className="text-white text-5xl">We Provide Good Coffee and Healthy Meals</span>
            </section>
            <section className="mt-24 flex justify-center w-full md:hidden border-b-1 border-gray-300 pb-4">
                <form action="" className="flex gap-4 items-center">
                    <input type="text" placeholder="Find Product" className="border focus:outline-primary border-gray-300 py-2 px-4 rounded-xl"/>
                    <button className="bg-primary p-2 rounded-xl">search</button>
                </form>
            </section>
            <section className="flex flex-col gap-6 w-full">
                <div className="flex justify-between px-12 md:px-24">
                    <h1 className="text-3xl md:text-5xl text-black">Today <span className="text-secondary">Promo</span></h1>
                    <div className="text-black hidden md:flex gap-2 p-4 drop-shadow-md">
                      <button onClick={scrollLeft} className="bg-white p-2 rounded-full text-xl"><GoArrowLeft /></button>
                      <button onClick={scrollRight} className="bg-primary p-2 rounded-full text-xl"><GoArrowRight /></button>
                    </div>
                </div>
                <div ref={scrollRef} className="flex gap-16 overflow-x-scroll relative hide-scrollbar">
                    <Coupon data={dataCoupon}/>
                </div>
            </section>
            <section className="w-full px-12 md:px-24 flex flex-col gap-6">
                <h1 className="text-3xl md:text-5xl text-black">Our <span className="text-secondary">Product</span></h1>
                <div className="flex w-full gap-12">
                    <form className="hidden md:flex flex-col gap-4 bg-black h-fit text-white py-4 px-8 rounded-xl">
                        <div className="flex justify-between font-semibold text-xl">
                            <h1>Filter</h1>
                            <button>Reset Filter</button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="font-semibold">Search</span>
                            <input type="text" placeholder="Search Your Product" className="bg-gray-50 text-black rounded-lg border py-2 px-6 border-white"/>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="font-semibold">Category</span>
                            <div className="flex gap-4">
                                <input
                                id="favProduct"
                                type="checkbox"
                                className="appearance-none relative w-6 h-6 border-2 border-gray-400 rounded-md bg-white 
                                            checked:bg-primary checked:border-primary cursor-pointer
                                            after:content-[''] after:absolute after:top-[3px] after:left-[8px]
                                            after:w-[6px] after:h-[12px] after:border-r-2 after:border-b-2 after:border-white 
                                            after:rotate-45 after:opacity-0 checked:after:opacity-100"
                                />
                                <label htmlFor="favProduct">Favorite Product</label>
                            </div>
                            <div className="flex gap-4">
                                <input
                                id="coffee"
                                type="checkbox"
                                className="appearance-none relative w-6 h-6 border-2 border-gray-400 rounded-md bg-white 
                                            checked:bg-primary checked:border-primary cursor-pointer
                                            after:content-[''] after:absolute after:top-[3px] after:left-[8px]
                                            after:w-[6px] after:h-[12px] after:border-r-2 after:border-b-2 after:border-white 
                                            after:rotate-45 after:opacity-0 checked:after:opacity-100"
                                />
                                <label htmlFor="coffee">Coffee</label>
                            </div>
                            <div className="flex gap-4">
                                <input
                                id="nonCoffee"
                                type="checkbox"
                                className="appearance-none relative w-6 h-6 border-2 border-gray-400 rounded-md bg-white 
                                            checked:bg-primary checked:border-primary cursor-pointer
                                            after:content-[''] after:absolute after:top-[3px] after:left-[8px]
                                            after:w-[6px] after:h-[12px] after:border-r-2 after:border-b-2 after:border-white 
                                            after:rotate-45 after:opacity-0 checked:after:opacity-100"
                                />
                                <label htmlFor="nonCoffee">Non Coffee</label>
                            </div>
                            <div className="flex gap-4">
                                <input
                                id="foods"
                                type="checkbox"
                                className="appearance-none relative w-6 h-6 border-2 border-gray-400 rounded-md bg-white 
                                            checked:bg-primary checked:border-primary cursor-pointer
                                            after:content-[''] after:absolute after:top-[3px] after:left-[8px]
                                            after:w-[6px] after:h-[12px] after:border-r-2 after:border-b-2 after:border-white 
                                            after:rotate-45 after:opacity-0 checked:after:opacity-100"
                                />
                                <label htmlFor="foods">Foods</label>
                            </div>
                            <div className="flex gap-4">
                                <input
                                id="addOn"
                                type="checkbox"
                                className="appearance-none relative w-6 h-6 border-2 border-gray-400 rounded-md bg-white 
                                            checked:bg-primary checked:border-primary cursor-pointer
                                            after:content-[''] after:absolute after:top-[3px] after:left-[8px]
                                            after:w-[6px] after:h-[12px] after:border-r-2 after:border-b-2 after:border-white 
                                            after:rotate-45 after:opacity-0 checked:after:opacity-100"
                                />
                                <label htmlFor="addOn">Add On</label>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="font-semibold">Sort By</span>
                            <div className="flex gap-4">
                                <input
                                id="buy1get1"
                                type="checkbox"
                                className="appearance-none relative w-6 h-6 border-2 border-gray-400 rounded-md bg-white 
                                            checked:bg-primary checked:border-primary cursor-pointer
                                            after:content-[''] after:absolute after:top-[3px] after:left-[8px]
                                            after:w-[6px] after:h-[12px] after:border-r-2 after:border-b-2 after:border-white 
                                            after:rotate-45 after:opacity-0 checked:after:opacity-100"
                                />
                                <label htmlFor="buy1get1">Buy 1 get 1</label>
                            </div>
                            <div className="flex gap-4">
                                <input
                                id="flashSale"
                                type="checkbox"
                                className="appearance-none relative w-6 h-6 border-2 border-gray-400 rounded-md bg-white 
                                            checked:bg-primary checked:border-primary cursor-pointer
                                            after:content-[''] after:absolute after:top-[3px] after:left-[8px]
                                            after:w-[6px] after:h-[12px] after:border-r-2 after:border-b-2 after:border-white 
                                            after:rotate-45 after:opacity-0 checked:after:opacity-100"
                                />
                                <label htmlFor="flashSale">Flash sale</label>
                            </div>
                            <div className="flex gap-4">
                                <input
                                id="birthday"
                                type="checkbox"
                                className="appearance-none relative w-6 h-6 border-2 border-gray-400 rounded-md bg-white 
                                            checked:bg-primary checked:border-primary cursor-pointer
                                            after:content-[''] after:absolute after:top-[3px] after:left-[8px]
                                            after:w-[6px] after:h-[12px] after:border-r-2 after:border-b-2 after:border-white 
                                            after:rotate-45 after:opacity-0 checked:after:opacity-100"
                                />
                                <label htmlFor="birthday">Birthday Package</label>
                            </div>
                            <div className="flex gap-4">
                                <input
                                id="cheap"
                                type="checkbox"
                                className="appearance-none relative w-6 h-6 border-2 border-gray-400 rounded-md bg-white 
                                            checked:bg-primary checked:border-primary cursor-pointer
                                            after:content-[''] after:absolute after:top-[3px] after:left-[8px]
                                            after:w-[6px] after:h-[12px] after:border-r-2 after:border-b-2 after:border-white 
                                            after:rotate-45 after:opacity-0 checked:after:opacity-100"
                                />
                                <label htmlFor="cheap">Cheap</label>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="font-semibold">Range Price</span>
                            <DualPriceRange/>
                        </div>
                        <button className="bg-primary mt-4 py-2 rounded-lg text-black">Apply Filter</button>
                    </form>
                    <div className="flex flex-col gap-4">
                        <div className="items-start justify-end grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
                            <MainCard  data={dataMenu}/>
                        </div>
                        <div className="flex gap-2 justify-center">
                            <button className="flex justify-center items-center p-2 w-10 rounded-full bg-primary cursor-pointer">1</button>
                            <button className="flex justify-center items-center p-2 w-10 rounded-full bg-gray-300 cursor-pointer">2</button>
                            <button className="flex justify-center items-center p-2 w-10 rounded-full bg-gray-300 cursor-pointer">3</button>
                            <button className="flex justify-center items-center p-2 w-10 rounded-full bg-gray-300 cursor-pointer">4</button>
                            <button className="flex justify-center items-center p-2 w-10 rounded-full bg-primary text-white cursor-pointer"><GoArrowRight/></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}