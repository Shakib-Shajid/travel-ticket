import React from 'react';
import { IoMdCheckmark } from "react-icons/io";

const Plan = () => {

    function CheckIcon() {
        return <span className="text-black text-2xl bg-yellow-400 rounded-full px-2 py-1">✔</span>;
    }

    // Minus Icon Component
    function MinusIcon() {
        return <span className="text-black text-3xl font-bold">–</span>;
    }


    return (
        <div>
            <div className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 text-black py-12 px-4 hidden">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2">Elige tu plan</h1>
                    <p className="text-lg">
                        eDreams Prime te ofrece 2 opciones de suscripción para satisfacer tus necesidades de viaje
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Plan options */}
                    <div className="grid grid-cols-3 gap-4 text-center mb-6">
                        <div></div> {/* Empty space for alignment */}
                        <div>
                            <h2 className="text-lg font-semibold">Prime</h2>
                            <p className="text-xl font-bold">69,99 € <span className="text-sm">/año</span></p>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Prime Plus</h2>
                            <p className="text-xl font-bold">89,99 € <span className="text-sm">/año</span></p>
                        </div>
                    </div>

                    {/* Features table */}
                    <div className="bg-gradient-to-r from-blue-300 to-green-300  p-6 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold">Ahorros</h3>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {/* Feature rows */}
                            <div className="col-span-1">Ahorra 100 € en vuelos, hoteles y alquileres de coches</div>
                            <div className="text-center"><CheckIcon /></div>
                            <div className="text-center"><CheckIcon /></div>

                            <div className="col-span-1">Reserva con descuentos Prime para 4 amigos y familiares</div>
                            <div className="text-center"><MinusIcon /></div>
                            <div className="text-center"><CheckIcon /></div>

                            <div className="col-span-1">
                                Cada mes más de 300 € en exclusivos códigos promo en vuelos y hoteles
                            </div>
                            <div className="text-center"><CheckIcon /></div>
                            <div className="text-center"><CheckIcon /></div>

                            <div className="col-span-1">
                                Disfruta de las ofertas únicas para miembros y de los Prime Days
                            </div>
                            <div className="text-center"><CheckIcon /></div>
                            <div className="text-center"><CheckIcon /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 text-black py-12 px-4 ">

                <div className="text-center my-5 space-y-3">
                    <h2 className="text-5xl font-bold">Elige tu plan</h2>
                    <p>eDreams Prime te ofrece 2 opciones de suscripción para satisfacer tus necesidades de viaje</p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="flex gap-5 justify-end w-[88%] md:w-[66%] lg:w-[58%] mx-auto font-bold text-center">
                        <p>Prime <br /> <br /> 69,99 € <br /> año</p>
                        <p>Prime <br /> Plus <br /> 89,99 € <br /> año</p>
                    </div>

                    {/* Section 1 */}
                    <div className="w-full md:w-[70%] lg:w-[60%] mx-auto border border-white my-5 pt-7 pb-3 p-1 rounded-2xl">
                        <h3 className="pl-4 font-bold text-xl">Ahorros</h3> {/* Moved outside table */}
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Ahorra 100 € en vuelos, hoteles y alquileres de coches</td>
                                    <td className="text-2xl font-bold">
                                        <IoMdCheckmark className="text-4xl bg-blue-500 rounded-full p-2" />
                                    </td>
                                    <td className="text-2xl font-bold">
                                        <IoMdCheckmark className="text-4xl bg-blue-500 rounded-full p-2" />
                                    </td>
                                </tr>
                                {/* row 1 */}
                                <tr>
                                    <td>Reserva con descuentos Prime para 4 amigos y familiares, incluso cuando tú no viajes</td>
                                    <td className="text-3xl font-bold"><span className="ml-2">-</span></td>
                                    <td className="text-2xl font-bold">
                                        <IoMdCheckmark className="text-4xl bg-blue-500 rounded-full p-2" />
                                    </td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td>Cada mes más de 300 € en exclusivos códigos promo en vuelos y hoteles además de tus descuentos Prime</td>
                                    <td className="text-2xl font-bold">
                                        <IoMdCheckmark className="text-4xl bg-blue-500 rounded-full p-2" />
                                    </td>
                                    <td className="text-2xl font-bold">
                                        <IoMdCheckmark className="text-4xl bg-blue-500 rounded-full p-2" />
                                    </td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td>Disfruta de las ofertas únicas para miembros y de los Prime Days</td>
                                    <td className="text-2xl font-bold">
                                        <IoMdCheckmark className="text-4xl bg-blue-500 rounded-full p-2" />
                                    </td>
                                    <td className="text-2xl font-bold">
                                        <IoMdCheckmark className="text-4xl bg-blue-500 rounded-full p-2" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Section 2 */}
                    <div className="w-full md:w-[70%] lg:w-[60%] mx-auto border border-white my-5 pt-7 pb-3 p-1 rounded-2xl">
                        <h3 className="pl-4 font-bold text-xl">Flexibilidad</h3> {/* Moved outside table */}
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Congela el precio de cualquier vuelo por 1 € y evita pagar más después</td>
                                    <td className="text-2xl font-bold">
                                        <IoMdCheckmark className="text-4xl bg-blue-500 rounded-full p-2" />
                                    </td>
                                    <td className="text-2xl font-bold">
                                        <IoMdCheckmark className="text-4xl bg-blue-500 rounded-full p-2" />
                                    </td>
                                </tr>
                                {/* row 1 */}
                                <tr>
                                    <td>Cancela 2 reservas de vuelo realizadas en la app después de la prueba gratuita. Obtén instantáneamente un reembolso en forma de crédito.</td>
                                    <td className="text-3xl font-bold"><span className="ml-2">-</span></td>
                                    <td className="text-2xl font-bold">
                                        <IoMdCheckmark className="text-4xl bg-blue-500 rounded-full p-2" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Section 3 */}
                    <div className="w-full md:w-[70%] lg:w-[60%] mx-auto border border-white my-5 pt-7 pb-3 p-1 rounded-2xl">
                        <h3 className="pl-4 font-bold text-xl">Tranquilidad</h3> {/* Moved outside table */}
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Atención al cliente VIP: respondemos casi todas las llamadas en 60 segundos o menos</td>
                                    <td className="text-2xl font-bold">
                                        <IoMdCheckmark className="text-4xl bg-blue-500 rounded-full p-2" />
                                    </td>
                                    <td className="text-2xl font-bold">
                                        <IoMdCheckmark className="text-4xl bg-blue-500 rounded-full p-2" />
                                    </td>
                                </tr>
                                {/* row 1 */}
                                <tr>
                                    <td>Reembolsos en 48h de más de 150 aerolíneas si te cancelan tus vuelos</td>
                                    <td className="text-2xl font-bold">
                                        <IoMdCheckmark className="text-4xl bg-blue-500 rounded-full p-2" />
                                    </td>
                                    <td className="text-2xl font-bold">
                                        <IoMdCheckmark className="text-4xl bg-blue-500 rounded-full p-2" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Plan;