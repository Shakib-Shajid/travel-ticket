import React from 'react';

const Join = () => {
    return (
        <div className="relative py-1 lg:py-10 bg-gradient-to-r from-green-300 to-blue-300">
            {/* Overlay */}

            <div className="relative z-20"> {/* Content with z-index to stay on top of overlay */}
                <div className="text-center my-5 space-y-2">
                    <h3 className="text-3xl font-bold">Cómo unirte a eDreams Prime</h3>
                    <p>¡Es fácil! Sigue estos sencillos pasos.</p>
                </div>

                <section className="w-full max-w-7xl mx-auto flex flex-col gap-10 justify-center items-center lg:flex-row" data-aos="fade-right">
                    <div className="w-[90%] md:w-[50%] lg:ml-10 space-y-3">
                        <div className="flex justify-center lg:justify-start my-5 md:my-2">
                            <p className="inline-block bg-black text-white py-1 px-4 rounded-full">Paso 1</p>
                        </div>
                        <h4 className="text-4xl font-bold">Selecciona tu vuelo u hotel</h4>
                        <p>Elige entre las +690 aerolíneas y +2 millones de habitaciones</p>
                    </div>

                    <div className="card bg-black text-black w-96">
                        <div className="card-body h-56 flex flex-col items-center justify-center text-center">
                            <input type="text" placeholder="París" className="input input-bordered mb-4 w-[76%]" />
                            <button className="btn btn-success w-[76%] rounded-full text-white">Buscar</button>
                        </div>
                    </div>
                </section>

                <section className="w-full max-w-7xl mx-auto flex flex-col gap-10 justify-center items-center lg:flex-row-reverse mt-10" data-aos="fade-right">
                    <div className="w-[90%] md:w-[50%] lg:ml-10 space-y-3">
                        <div className="flex justify-center lg:justify-start my-5 md:my-2">
                            <p className="inline-block bg-black text-white py-1 px-4 rounded-full">Paso 2</p>
                        </div>
                        <h4 className="text-4xl font-bold">Elige la tarifa Prime</h4>
                        <p>Elige la tarifa de tu vuelo con descuento Prime para comenzar tu prueba gratuita de 15 días y empieza a ahorrar al instante.</p>
                    </div>

                    <div className="bg-base-300 w-96 rounded-2xl">
                        <h3 className="pt-5 px-6 text-xl font-bold text-start">Prueba eDreams Prime</h3>
                        <div className="flex flex-col items-center">
                            <div className="bg-white flex gap-5 items-center justify-between p-5 rounded-xl w-[90%] mt-4">
                                <div>
                                    <h5 className="text-blue-600 font-bold text-start">Prueba gratis de 15 días</h5>
                                    <p className="text-base">Tarifa con descuentos Prime</p>
                                </div>
                                <p className="text-green-500 text-xl">+0,00 $</p>
                            </div>

                            <div className="bg-white flex gap-5 items-center justify-between p-5 rounded-xl w-[90%] mt-4 mb-5">
                                <div>
                                    <h5 className="font-bold text-start">Tarifa sin descuentos</h5>
                                </div>
                                <p className="text-green-500 text-xl">+67,00 $</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>


    );
};

export default Join;