'use client'

import { useState , use} from 'react'
import Image from 'next/image'
import Dp1 from '../../../../public/img/detailProduct1.jpg'
import Dp2 from '../../../../public/img/detailProduct2.jpg'
import Dp3 from '../../../../public/img/detailProduct3.jpg'
import Dp4 from '../../../../public/img/detailProduct4.jpg'
import FlashSale from '@/components/LabelFlashSale'
import { FaStar } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import MainCard from '../../../components/MainCard'
import RecommendationSection from './Recomendation'

export default function DetailProduct({params}){
    const {slug}=use(params)
    const [count, setCount] = useState(1)

    const handleIncrement = () => setCount((prev) => prev + 1)
    const handleDecrement = () => setCount((prev) => (prev > 1 ? prev - 1 : prev))
    const [selectedSize, setSelectedSize] = useState('')
    const sizes = ['Regular', 'Medium', 'Large']
    const [selectedVariant, setSelectedVariant] = useState('')
    const variants = ['Hot', 'Ice']

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


    const product = dataMenu.find((p) => p.slug === slug);
    if (!product) {
        return <div className="p-6 text-red-500 flex min-h-screen justify-center items-center">Produk tidak ditemukan</div>;
    }
    return(
        <div className='mt-30 px-30 flex flex-col gap-12'>
            <section className="flex gap-8">
                <div className='flex flex-col gap-4 w-full max-w-[500px]'>
                    <div className="h-[400px] relative">
                        <Image
                        src={product.image}
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
                    <h1 className='text-5xl font-medium'>{product.title}</h1>
                    <div className='flex gap-4 items-center'>
                        <span className='text-red-600 text-lg line-through'>IDR {product.priceBefore}</span>
                        <span className='text-primary text-3xl'>IDR {product.price}</span>
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
                    <p>{product.desc}</p>
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
            <RecommendationSection dataMenu={dataMenu} />
        </div>
    )
}