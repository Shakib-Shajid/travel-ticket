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
                            <h1 className="mb-5 text-4xl font-bold text-[#F2384B]">Conoce la nueva forma de viajar más por menos</h1>

                            <p className="mb-5 text-xl text-[#222222]">
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
