'use client'

import { useState } from 'react'
import Image from 'next/image'
import Dp1 from '../../../public/img/detailProduct1.jpg'
import Dp2 from '../../../public/img/detailProduct2.jpg'
import Dp3 from '../../../public/img/detailProduct3.jpg'
import Dp4 from '../../../public/img/detailProduct4.jpg'
import FlashSale from '@/components/LabelFlashSale'
import { FaStar } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import MainCard from '../../components/MainCard'

export default function DetailProduct(){
    const [count, setCount] = useState(1)

    const handleIncrement = () => setCount((prev) => prev + 1)
    const handleDecrement = () => setCount((prev) => (prev > 1 ? prev - 1 : prev))
    const [selectedSize, setSelectedSize] = useState('')
    const sizes = ['Regular', 'Medium', 'Large']
    const [selectedVariant, setSelectedVariant] = useState('')
    const variants = ['Hot', 'Ice']
    const dataMenu = [{
        image: "/img/menu1.jpg",
        title: "Hazelnut Latte",
        desc: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
        priceBefore: 40000,
        price: 20000,
        flashSale: true
    },
    {
        image: "/img/menu2.png",
        title: "Hazelnut Latte",
        desc: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
        priceBefore: 55000,
        price: 25000,
        flashSale: true
        },
    {
        image: "/img/menu4.png",
        title: "Hazelnut Latte",
        desc: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
        priceBefore: 39000,
        price: 27000,
        flashSale: true
        }]
    return(
        <div className='mt-30 px-30 flex flex-col gap-12'>
            <section className="flex flex-col gap-8">
                <div className='flex flex-col gap-4 w-full max-w-[500px]'>
                    <div className="h-[400px] relative">
                        <Image
                        src={Dp1}
                        alt="Detail Produk"
                        fill
                        className="object-cover bg-top"
                        priority
                        />
                    </div>
                    <div className='flex gap-4 w-full'>
                        <div className="w-1/3 h-[120px] relative">
                            <Image
                            src={Dp2}
                            alt="Detail Produk"
                            fill
                            className="object-cover bg-top"
                            priority
                            />
                        </div>
                        <div className="w-1/3 h-[120px] relative">
                            <Image
                            src={Dp3}
                            alt="Detail Produk"
                            fill
                            className="object-cover bg-top"
                            priority
                            />
                        </div>
                        <div className="w-1/3 h-[120px] relative">
                            <Image
                            src={Dp4}
                            alt="Detail Produk"
                            fill
                            className="object-cover bg-top"
                            priority
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 w-full'>
                    <FlashSale/>
                    <h1 className='text-5xl font-medium'>Hazelnut Latte</h1>
                    <div className='flex gap-4 items-center'>
                        <span className='text-red-600 text-lg line-through'>IDR 20.000</span>
                        <span className='text-primary text-3xl'>IDR 10.000</span>
                    </div>
                    <div className="flex gap-2 text-primary items-center">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <span className="text-black">5.0</span>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <span className='border-r-2 pr-4'>200+ Review</span>
                        <span>Recommendation</span>
                        <BiLike className='text-xl text-primary'/>
                    </div>
                    <p>Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</p>
                    <form action="" className='flex flex-col gap-4 w-full'>
                        <div className='flex gap-6 items-center text-2xl'>
                            <button type='button' onClick={handleDecrement} className='bg-white border border-primary px-4 py-2 rounded-lg cursor-pointer'>-</button>
                            <span>{count}</span>
                            <button type='button' onClick={handleIncrement} className='bg-primary px-4 py-2 rounded-lg cursor-pointer'>+</button>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='font-semibold'>Choose Size</span>
                            <div className="flex gap-4">
                                {sizes.map((size) => (
                                <label
                                    key={size}
                                    className={`px-6 py-3 rounded-lg border-2 cursor-pointer transition-all select-none
                                    ${
                                        selectedSize === size
                                        ? 'border-primary bg-primary text-white'
                                        : 'border-gray-300 hover:border-primary'
                                    }`}
                                >
                                    <input
                                    type="checkbox"
                                    value={size}
                                    checked={selectedSize === size}
                                    onChange={() =>
                                        setSelectedSize(selectedSize === size ? '' : size)
                                    }
                                    className="hidden"
                                    />
                                    {size}
                                </label>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='font-semibold'>Hot/Ice?</span>
                            <div className="flex gap-4">
                                {variants.map((variant) => (
                                <label
                                    key={variant}
                                    className={`px-6 py-3 rounded-lg border-2 cursor-pointer transition-all select-none
                                    ${
                                        selectedVariant === variant
                                        ? 'border-primary bg-primary text-white'
                                        : 'border-gray-300 hover:border-primary'
                                    }`}
                                >
                                    <input
                                    type="checkbox"
                                    value={variant}
                                    checked={selectedVariant === variant}
                                    onChange={() =>
                                        setSelectedVariant(selectedVariant === variant ? '' : variant)
                                    }
                                    className="hidden"
                                    />
                                    {variant}
                                </label>
                                ))}
                            </div>
                        </div>
                        <div className='flex gap-6 w-full'>
                            <button type='button' className='bg-primary cursor-pointer text-black w-1/4 py-2 rounded-lg'>Buy</button>
                            <button type='button' className='text-primary cursor-pointer border border-primary w-1/4 py-2 rounded-lg'>Add to Cart</button>
                        </div>
                    </form>
                </div>
            </section>
            <section className='flex flex-col gap-6'>
                <h1 className="text-5xl text-black">Recommendation <span className="text-secondary">For You</span></h1>
                <div className='flex gap-6 justify-center'>
                    <MainCard data={dataMenu}/>
                </div>
                <div className="flex gap-2 justify-center">
                    <button className="flex justify-center items-center p-2 w-10 rounded-full bg-primary cursor-pointer">1</button>
                    <button className="flex justify-center items-center p-2 w-10 rounded-full bg-gray-300 cursor-pointer">2</button>
                    <button className="flex justify-center items-center p-2 w-10 rounded-full bg-gray-300 cursor-pointer">3</button>
                    <button className="flex justify-center items-center p-2 w-10 rounded-full bg-gray-300 cursor-pointer">4</button>
                    <button className="flex justify-center items-center p-2 w-10 rounded-full bg-primary text-white cursor-pointer"><GoArrowRight/></button>
                </div>
            </section>
        </div>
    )
}