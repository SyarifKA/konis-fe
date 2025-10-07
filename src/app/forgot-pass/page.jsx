import LogoKonis from "../../components/LogoKonis"

export default function ForgotPass(){
    return(
        <div className="flex min-w-full">
            <div className="min-w-1/4 bg-[url('/img/login-banner.jpg')] min-h-screen bg-cover bg-center"></div>
            <div className="min-w-3/4 px-16 flex flex-col justify-center gap-4">
                <div className="text-secondary">
                    <LogoKonis/>
                </div>
                <form action="" className="flex flex-col gap-4 w-1/2">
                    <h1 className="text-secondary font-semibold text-2xl">Fill out the form correctly</h1>
                    <span>We will send new password to your email</span>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-black font-semibold">Email</label>
                        <input type="text" id="email" name="email" className="border rounded-lg py-2 px-4" placeholder="Enter Your Email" />
                    </div>
                    <div className="w-full mt-4">
                        <button className="bg-primary w-full py-4 font-medium text-xl rounded-lg cursor-pointer">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}