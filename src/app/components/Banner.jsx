import Image from "next/image";
import Link from "next/link";




const Banner = () => {
    return (
        <div className="bg-[#f9f1f5] pb-3">
            <div className="max-w-7xl mx-auto">

                <div className="navbar md:z-10 md:absolute max-w-7xl mx-auto">
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
                            <h1 className="mb-5 text-xl md:text-4xl font-bold text-[#F2384B] md:mt-20 lg:mt-3">Conoce la nueva forma de viajar más por menos</h1>

                            {/* ............................................


                            ............................................. */}


                            <div className="flex justify-center items-center">
                                <div className="h-32  md:w-2/3 rounded-full bg-gradient-to-r from-red-500 to-purple-700 flex justify-center items-center px-4">
                                    <div className="mb-6 mt-3 bg-white h-24  md:w-96 rounded-full flex justify-center items-center  ">
                                        <span className="text-6xl font-extrabold pb-4 p-5 gradient-color" >Smart</span>
                                    </div>
                                </div>
                            </div>
                            {/* ......................................................................................... */}



                            <p className="mb-5 text-lg my-2 md:text-xl text-[#222222]">
                                La solución para ahorrar cientos de euros con tus reservas en Atrápalo.
                            </p>
                            <p className="bg-[#DFF3EB] font-semibold w-2/3 p-2 rounded-lg md:w-2/4 mx-auto text-[#027D49]">Prueba gratis 30 días</p>



                        
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;
