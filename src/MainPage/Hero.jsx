import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="h-screen bg-cover bg-center bg-[url(../images/iteration-1-images/home-banner.png)]">
            <div className="flex flex-col flex-wrap justify-center content-center absolute my-7 w-full">
                <div>
                    <img className="mx-auto" src="../images/iteration-1-images/logo.svg" alt="" />
                </div>
                <div className="my-16">
                    <div className="mx-auto text-xl font-satisfy size-fit text-[#FDC913] leading-[0.2]">fırsatı kaçırma</div>
                    <div className="text-7xl font-barlow text-white tracking-[-0.04em] font-extralight max-[640px]:w-70 mx-auto text-center">
                        <div>
                            <div className="mx-auto size-fit">
                                KOD ACIKTIRIR
                            </div>
                        </div>
                        <div>PIZZA, DOYURUR</div>
                    </div>
                    <div className="flex">
                        <Link to='/siparis' className="bg-[#FDC913] py-3 px-12 font-roboto font-medium rounded-full mt-10 inline-block mx-auto">
                            ACIKTIM
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}