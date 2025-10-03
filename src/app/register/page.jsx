import LogoKonis from "../../components/LogoKonis"
import LogoGoogle from "../../../public/img/google-icon.png";
import LogoFb from "../../../public/img/fb-icon.png";
import Image from "next/image";

export default function Register(){
    return(
        <div className="flex min-w-full">
            <div className="min-w-1/4 bg-[url('/img/regist-banner.jpg')] min-h-screen bg-cover bg-center"></div>
            <div className="min-w-3/4 px-16 flex flex-col justify-center gap-4">
                <div className="text-secondary">
                    <LogoKonis/>
                </div>
                <form action="" className="flex flex-col gap-4 w-1/2">
                    <h1 className="text-secondary font-semibold text-2xl">Register</h1>
                    <span>Fill out the form correctly</span>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullName" className="text-black font-semibold">Full Name</label>
                        <input type="text" id="fullName" name="fullName" className="border rounded-lg py-2 px-4" placeholder="Enter Your Full Name" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-black font-semibold">Email</label>
                        <input type="text" id="email" name="email" className="border rounded-lg py-2 px-4" placeholder="Enter Your Email" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-black font-semibold">Password</label>
                        <input type="text" id="password" name="password" className="border rounded-lg py-2 px-4" placeholder="Enter Your Password" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="cPassword" className="text-black font-semibold">Confirm Password</label>
                        <input type="text" id="cPassword" name="cPassword" className="border rounded-lg py-2 px-4" placeholder="Enter Your Password Again" />
                    </div>
                    <div className="w-full mt-4">
                        <button className="bg-primary w-full py-4 font-medium text-xl rounded-lg cursor-pointer">Register</button>
                    </div>
                    <div className="flex gap-1 justify-center">
                        <span>Have An Account?</span>
                        <button className="text-primary cursor-pointer">Login</button>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="text-gray-500">or</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>
                    <div className="w-full flex gap-4">
                        <button className="flex w-1/2 gap-4 py-4 justify-center cursor-pointer items-center drop-shadow-lg rounded-lg bg-white">
                            {/* <LogoGoogle/> */}
                            <Image
                                src={LogoFb}
                                alt="Logo Google"
                                className=""
                            />
                            Facebook
                        </button>
                        <button className="flex w-1/2 gap-4 py-4 justify-center cursor-pointer items-center drop-shadow-lg rounded-lg bg-white">
                            {/* <LogoGoogle/> */}
                            <Image
                                src={LogoGoogle}
                                alt="Logo Google"
                                className=""
                            />
                            Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}