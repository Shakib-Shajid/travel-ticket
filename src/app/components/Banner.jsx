import Image from "next/image";
import Link from "next/link";




const Banner = () => {
    return (
        <div className="bg-[#f9f1f5] pb-3">
            <div className="max-w-7xl mx-auto">

                <div className="navbar md:z-10 md:absolute max-w-7xl mx-auto flex justify-center md:justify-start">
                    <Link href="/"><Image src="/logo.png" className="" width="156" height="44" alt="" /></Link>
                </div>
                <div
                    className="hero 
                    min-h-screen
                    md:w-full  md:relative object-scale-down"
                    style={{
                        backgroundImage: "url(/banner.png)",
                    }}>
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-xl md:text-3xl font-bold text-[#F2384B] md:mt-20 lg:mt-3 uppercase gradient-color">Conoce la nueva <br className="block md:hidden"/> forma <br className="hidden md:block"/> de viajar <br className="block md:hidden" /> más por menos</h1>



                            <div className="flex justify-center items-center">
                                <div className="h-24 md:h-32 w-70 md:w-2/3 rounded-full bg-gradient-to-r from-red-500 to-purple-700 flex justify-center items-center px-4">
                                    <div className="mb-6 mt-3 bg-white h-16 md:h-24 w-70 md:w-96 rounded-full flex justify-center items-center  ">
                                        <span className="text-5xl md:text-7xl font-extrabold pb-7 p-5 gradient-color" >Smart</span>
                                    </div>
                                </div>
                            </div>



                            <p className="mb-5 text-lg my-2 md:text-xl text-[#222222] font-open_sans">
                                La solución para ahorrar cientos de euros con tus reservas en Atrápalo.
                            </p>
                            <p className="bg-[#DFF3EB] font-semibold w-2/3 p-2 rounded-lg md:w-2/4 mx-auto text-[#027D49] font-open_sans">Prueba gratis 30 días</p>


                            <Link href="#card">
                                <div className="flex justify-center my-10">
                                    <div className="icons_color size-12 flex justify-center items-center rounded-full text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="500" height="500"
                                            className="size-6 ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;
