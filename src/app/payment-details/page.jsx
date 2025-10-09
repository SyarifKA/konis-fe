'use client'

import OrderCard from "@/components/OrderCard";
import Image from "next/image";
import { useState,useEffect } from "react";

export default function PaymentDetails(){
    const [selectedDelivery, setSelectedDelivery] = useState('')
    const [deliveryFee, setDeliveryFee] = useState(0);
    const delivery = ['Dine In', 'Door Delivery', 'Pick Up']

    useEffect(() => {
        if (selectedDelivery === 'Door Delivery') {
            setDeliveryFee(15000);
        } else {
            setDeliveryFee(0);
        }
    }, [selectedDelivery]);


    const dataOrder = [{
        image: '/img/detailProduct1.jpg',
        title: 'Hazelnut Latte',
        priceBefore: 40000,
        price: 20000,
        qty: 2,
        size: 'Regular',
        variant: 'Ice',
        delivery: selectedDelivery
    },{
        image: '/img/detailProduct1.jpg',
        title: 'Hazelnut Latte',
        priceBefore: 40000,
        price: 20000,
        qty: 2,
        size: 'Regular',
        variant: 'Ice',
        delivery: selectedDelivery
    }]

    const orderTotal = dataOrder.reduce((sum, item) => sum + item.price, 0);
    const tax = Math.round(orderTotal * 0.1);
    const subTotal = orderTotal + deliveryFee + tax;
    return(
        <div className="flex flex-col gap-6 px-30 mt-30">
            <h1 className="text-5xl font-semibold">Payment Details</h1>
            <section className="flex gap-8">
                <div className="flex flex-col gap-2 w-1/2">
                    <div className="flex justify-between">
                        <span className="text-xl">You Order</span>
                        <button className="bg-primary px-4 py-2 text-black rounded-lg">+ Add Menu</button>
                    </div>
                    <OrderCard data={dataOrder}/>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                    <span className="text-xl">Total</span>
                    <div className="flex justify-between text-lg">
                        <span>Order</span>
                        <span>IDR {Number(orderTotal).toLocaleString('id')}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                        <span>Delivery</span>
                        <span>IDR {Number(deliveryFee).toLocaleString('id')}</span>
                    </div>
                    <div className="flex justify-between text-lg border-b-1 border-gray-300 pb-4">
                        <span>Tax</span>
                        <span>IDR {Number(tax).toLocaleString('id')}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                        <span>Sub Total</span>
                        <span>IDR {Number(subTotal).toLocaleString('id')}</span>
                    </div>
                    <button className="bg-primary py-2 text-xl rounded-lg mt-4 cursor-pointer">Checkout</button>
                    <div className="flex flex-col gap-4 mt-4 text-gray-500">
                        <span>We Accept</span>
                        <div className="flex flex-wrap gap-6 items-center">
                            {["bca", "bri", "dana", "gopay", "ovo", "paypal"].map((bank) => (
                            <Image
                                key={bank}
                                src={`/img/${bank}.png`}
                                alt={bank}
                                width={40}
                                height={30}
                                className="object-contain"
                            />
                            ))}
                        </div>
                        <span>*Get Discount if you pay with Bank Central Asia</span>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-6 md:w-1/2">
                <h1 className="text-3xl">Payment Info & Delivery</h1>
                <form className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-800">
                        Email
                        </label>
                        <input
                        id="email"
                        type="email"
                        placeholder="Enter Your Email"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullName" className="text-sm font-semibold text-gray-800">
                        Full Name
                        </label>
                        <input
                        id="fullName"
                        type="text"
                        placeholder="Enter Your Full Name"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="address" className="text-sm font-semibold text-gray-800">
                        Address
                        </label>
                        <input
                        id="address"
                        type="text"
                        placeholder="Enter Your Address"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-gray-800">Delivery?</span>
                        <div className="flex flex-wrap gap-4">
                        {delivery.map((del) => (
                            <label
                            key={del}
                            className={`px-6 py-3 rounded-lg border-2 cursor-pointer transition-all select-none ${
                                selectedDelivery === del
                                ? 'border-primary bg-primary text-white shadow-sm'
                                : 'border-gray-300 hover:border-primary hover:bg-gray-50'
                            }`}
                            >
                            <input
                                type="checkbox"
                                value={del}
                                checked={selectedDelivery === del}
                                onChange={() =>
                                setSelectedDelivery(selectedDelivery === del ? '' : del)
                                }
                                className="hidden"
                            />
                            {del}
                            </label>
                        ))}
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}