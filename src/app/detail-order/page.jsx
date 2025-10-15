import { BsPerson } from "react-icons/bs";
import { FaRegAddressBook } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlinePayments } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { GrInProgress } from "react-icons/gr";
import OrderCard from "@/components/OrderCard";

export default function DetailOrder(){
    const dataOrder = [{
        image: '/img/detailProduct1.jpg',
        title: 'Hazelnut Latte',
        priceBefore: 40000,
        price: 20000,
        qty: 2,
        size: 'Regular',
        variant: 'Ice',
        delivery: 'Dine In'
    },{
        image: '/img/detailProduct1.jpg',
        title: 'Hazelnut Latte',
        priceBefore: 40000,
        price: 20000,
        qty: 2,
        size: 'Regular',
        variant: 'Ice',
        delivery: 'Dine In'
    }]
    return(
        <div className="flex flex-col gap-4 md:gap-6 px-8 md:px-30 mt-20 md:mt-30">
            <h1 className="text-3xl md:text-5xl font-semibold">Order #12354-09893</h1>
            <span className="text-gray-600">21 March 2023 at 10:30 AM</span>
            <section className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-6 w-full md:w-1/2">
                    <h2 className="text-2xl font-medium">Order Information</h2>
                    <div className="flex justify-between border-b border-gray-300 text-lg pb-4">
                        <div className="flex items-center gap-2">
                            <BsPerson/>
                            <span>Full Name</span>
                        </div>
                        <span className="font-semibold">Ghaluh Wizard Anggoro</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 text-lg pb-4">
                        <div className="flex items-center gap-2">
                            <FaRegAddressBook />
                            <span>Address</span>
                        </div>
                        <span className="font-semibold">Sukmajaya, Depok</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 text-lg pb-4">
                        <div className="flex items-center gap-2">
                            <FiPhoneCall />
                            <span>Phone</span>
                        </div>
                        <span className="font-semibold">082116304338</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 text-lg pb-4">
                        <div className="flex items-center gap-2">
                            <MdOutlinePayments />
                            <span>Payment Method</span>
                        </div>
                        <span className="font-semibold">Cash</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 text-lg pb-4">
                        <div className="flex items-center gap-2">
                            <FiTruck />
                            <span>Shipping</span>
                        </div>
                        <span className="font-semibold">Dine In</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 text-lg pb-4">
                        <div className="flex items-center gap-2">
                            <GrInProgress />
                            <span>Status</span>
                        </div>
                        <div className="bg-green-200 rounded-2xl py-1 px-4">
                            <span className="font-semibold text-green-600">Done</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center text-lg">
                        <div className="flex items-center gap-2">
                            <FaRegAddressBook />
                            <span>Total Transaction</span>
                        </div>
                        <span className="font-semibold text-xl text-primary">IDR 40.000</span>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                    <h2 className="text-2xl font-medium">You Order</h2>
                    <OrderCard data={dataOrder}/>
                </div>
            </section>
        </div>
    )
}