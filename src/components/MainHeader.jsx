import { GiCoffeeCup } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { BsCartCheck } from "react-icons/bs";

export default function MainHeader(){
    return(
        <div className="flex fixed text-lg top-0 w-full justify-between py-4 px-20 text-white bg-[#0B090921]">
            <div className="flex gap-4 items-center">
                <button className="flex gap-2 text-2xl">
                    <GiCoffeeCup className=""/>
                    <span className="font-sacramento">Kopi Manis</span>
                </button>
                <button>
                    Home
                </button>
                <button>
                    Product
                </button>
            </div>
            <div className="flex gap-4 items-center">
                <button className="text-2xl">
                    <CiSearch />
                </button>
                <button className="text-2xl">
                    <BsCartCheck />
                </button>
                <button className="border px-4 py-2 rounded-md">
                    SignIn
                </button>
                <button className="text-black px-4 py-2 rounded-md bg-primary">
                    SignUp
                </button>
            </div>
        </div>
    )
}