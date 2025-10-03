import { GiCoffeeCup } from "react-icons/gi";

export default function LogoKonis(){
    return(
        <button className="flex gap-2 text-2xl">
            <GiCoffeeCup className=""/>
            <span className="font-sacramento">Kopi Manis</span>
        </button>
    )
}