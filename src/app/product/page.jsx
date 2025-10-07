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
    return(
        <div className="flex flex-col gap-6">
            <section>
                <div className="flex items-center px-24 w-full bg-cover bg-no-repeat bg-[url('/img/banner-product1.jpg')] h-[400px] bg-[position:center_-1700px]">
                    <span className="text-white text-5xl">We Provide Good Coffee and Healthy Meals</span>
                </div>
            </section>
            <section className="flex flex-col gap-6 w-full">
                <div className="flex justify-between px-24">
                    <h1 className="text-5xl text-black">Today <span className="text-secondary">Promo</span></h1>
                    <div className="text-black flex gap-2 p-4 drop-shadow-md">
                      <button onClick={scrollLeft} className="bg-white p-2 rounded-full text-xl"><GoArrowLeft /></button>
                      <button onClick={scrollRight} className="bg-primary p-2 rounded-full text-xl"><GoArrowRight /></button>
                    </div>
                </div>
                <div ref={scrollRef} className="flex gap-16 overflow-x-scroll relative hide-scrollbar">
                    <Coupon data={dataCoupon}/>
                </div>
            </section>
            <section className="w-full px-24 flex flex-col gap-6">
                <h1 className="text-5xl text-black">Our <span className="text-secondary">Product</span></h1>
                <div className="flex w-full gap-12">
                    <form className="flex flex-col gap-4 bg-black text-white py-4 px-8 rounded-xl">
                        <div className="flex justify-between font-semibold">
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
                        <div className="items-start justify-end grid grid-cols-2 2xl:grid-cols-3 gap-6">
                            <MainCard data={dataMenu}/>
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