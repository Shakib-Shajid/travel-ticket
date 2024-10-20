import Image from "next/image";

const Offer = () => {
    return (
        <div className="w-full bg-gradient-to-r from-green-300 to-blue-300 text-center my-10 relative">

            {/* ...................................................... */}
            {/* <Image src="/offer_1.png" alt="" width="100" height="100" className="absolute w-60 h-28 -top-10 md:-left-40 lg:left-0 -left-48" /> */}

            {/* ...................................................... */}

            <div className="py-10  text-black">
                <h3 className="text-3xl my-5">How much can you save with Smart</h3>
                <p>Savings vary depending on the amount and number of passengers booked. Examples of savings <br /> between the basic and Smart fare:</p>
            </div>

            {/* 1st */}
            <div className="hidden md:block">
                <div className="stats shadow lg:w-2/4 my-3">
                    <div className="stat p-3">
                        <div className="flex gap-2">
                            <Image src="/save_1.jpg" alt="" width="130" height="100" className="rounded-xl" />
                            <div className="text-start  my-auto">
                                <div className="text-xs">Round trip flight</div>
                                <div className="text-sm font-bold">Madrid - Frankfurt</div>
                                <div className="text-xs">3 adultos</div>
                            </div>
                        </div>
                    </div>

                    <div className="stat place-items-center ">
                        <div className="">Básica</div>
                        <div className="">1.030 EUR</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className=""><button className="btn btn-xs">Smart</button></div>
                        <div className="">955 EUR</div>
                    </div>

                    <div className="stat place-items-center p-2">
                        <div className="bg-green-300 p-3 rounded-lg text-green-800">
                            <div className="">Ahorro</div>
                            <div className="">-75 EUR</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* for small */}

            <div className="block md:hidden">
                <div className="stats shadow my-3 w-72 ">
                    <div className="flex flex-col ">

                        <div className="stat px-3 py-2">
                            <div className="flex gap-2">
                                <Image src="/save_1.jpg" alt="" width="120" height="120" className="rounded-xl" />
                                <div className="text-start  my-auto">
                                    <div className="text-xs">Vuelo ida/vuelta</div>
                                    <div className="text-sm font-bold">Madrid - Frankfurt</div>
                                    <div className="text-xs">3 adultos</div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-row text-base">
                            <div className="stat p-2">
                                <div className="">Básica</div>
                                <div className="">1.030 EUR</div>
                            </div>

                            <div className="stat p-2">
                                <div className=""><button className="btn btn-xs">Smart</button></div>
                                <div className="">955 EUR</div>
                            </div>

                            <div className="stat m-2 p-1 bg-green-300  rounded-xl text-green-800">
                                <div className="">
                                    <div className="">Ahorro</div>
                                    <div className="">-75 EUR</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 2nd */}
            <div className="hidden md:block ">
                <div className="stats shadow lg:w-2/4 my-3">
                    <div className="stat p-3">
                        <div className="flex gap-2">
                            <Image src="/save_2.jpg" alt="" width="130" height="100" className="rounded-xl" />
                            <div className="text-start  my-auto">
                                <div className="text-xs">Activities</div>
                                <div className="text-sm font-bold">Spa con masaje en <br /> Eurostar Sitges *****</div>
                                <div className="text-xs">2 adultos</div>
                            </div>
                        </div>
                    </div>

                    <div className="stat place-items-center ">
                        <div className="">Básica</div>
                        <div className="">159 EUR</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className=""><button className="btn btn-xs">Smart</button></div>
                        <div className="">127 EUR</div>
                    </div>

                    <div className="stat place-items-center p-2">
                        <div className="bg-green-300 p-3 rounded-lg text-green-800">
                            <div className="">Ahorro</div>
                            <div className="">-32 EUR</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* for small */}

            <div className="block md:hidden">
                <div className="stats shadow my-3 w-72 ">
                    <div className="flex flex-col ">

                        <div className="stat px-3 py-2">
                            <div className="flex gap-2">
                                <Image src="/save_2.jpg" alt="" width="120" height="120" className="rounded-xl" />
                                <div className="text-start  my-auto">
                                    <div className="text-xs">Actividades</div>
                                    <div className="text-sm font-bold">Spa con masaje en Eurostar Sitges *****</div>
                                    <div className="text-xs">2 adultos</div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-row text-base">
                            <div className="stat p-2">
                                <div className="">Básica</div>
                                <div className="">159 EUR</div>
                            </div>

                            <div className="stat p-2">
                                <div className=""><button className="btn btn-xs">Smart</button></div>
                                <div className="">127 EUR</div>
                            </div>

                            <div className="stat m-2 p-1 bg-green-300  rounded-xl text-green-800">
                                <div className="">
                                    <div className="">Ahorro</div>
                                    <div className="">-32 EUR</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 3th */}
            <div className="hidden md:block ">
                <div className="stats shadow lg:w-2/4 my-3">
                    <div className="stat p-3">
                        <div className="flex gap-2">
                            <Image src="/save_3.jpg" alt="" width="130" height="100" className="rounded-xl" />
                            <div className="text-start  my-auto">
                                <div className="text-xs">BIRD</div>
                                <div className="text-sm font-bold">Madrid - Puertollano</div>
                                <div className="text-xs">2 adultos</div>
                            </div>
                        </div>

                    </div>

                    <div className="stat place-items-center ">
                        <div className="">Básica</div>
                        <div className="">101 EUR</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className=""><button className="btn btn-xs">Smart</button></div>
                        <div className="">71 EUR</div>
                    </div>

                    <div className="stat place-items-center p-2">
                        <div className="bg-green-300 p-3 rounded-lg text-green-800">
                            <div className="">Ahorro</div>
                            <div className="">-30 EUR</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* for small */}

            <div className="block md:hidden">
                <div className="stats shadow my-3 w-72 ">
                    <div className="flex flex-col ">

                        <div className="stat px-3 py-2">
                            <div className="flex gap-2">
                                <Image src="/save_3.jpg" alt="" width="120" height="120" className="rounded-xl" />
                                <div className="text-start  my-auto">
                                    <div className="text-xs">AVE</div>
                                    <div className="text-sm font-bold">Madrid - Puertollano</div>
                                    <div className="text-xs">2 adultos</div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-row text-base">
                            <div className="stat p-2">
                                <div className="">Básica</div>
                                <div className="">101 EUR</div>
                            </div>

                            <div className="stat p-2">
                                <div className=""><button className="btn btn-xs">Smart</button></div>
                                <div className="">71 EUR</div>
                            </div>

                            <div className="stat m-2 p-1 bg-green-300  rounded-xl text-green-800">
                                <div className="">
                                    <div className="">Ahorro</div>
                                    <div className="">-30 EUR</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 4th */}
            <div className="hidden md:block mb-20 lg:mb-14">
                <div className="stats shadow lg:w-2/4 my-3">
                    <div className="stat p-3">
                        <div className="flex gap-2">
                            <Image src="/save_4.jpg" alt="" width="130" height="100" className="rounded-xl" />
                            <div className="text-start  my-auto">
                                <div className="text-xs">Accommodation</div>
                                <div className="text-sm font-bold">Hotel Sol Costa <br /> Daurada****, Salou</div>
                                <div className="text-xs">4 adultos, 6 noches</div>
                            </div>
                        </div>

                    </div>

                    <div className="stat place-items-center ">
                        <div className="">Básica</div>
                        <div className="">1.556 EUR</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className=""><button className="btn btn-xs">Smart</button></div>
                        <div className="">1.531 EUR</div>
                    </div>

                    <div className="stat place-items-center p-2">
                        <div className="bg-green-300 p-3 rounded-lg text-green-800">
                            <div className="">Ahorro</div>
                            <div className="">-25 EUR</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* for small */}

            <div className="block md:hidden mb-12">
                <div className="stats shadow my-3 w-72 ">
                    <div className="flex flex-col ">

                        <div className="stat px-3 py-2">
                            <div className="flex gap-2">
                                <Image src="/save_1.jpg" alt="" width="120" height="120" className="rounded-xl" />
                                <div className="text-start  my-auto">
                                    <div className="text-xs">Alojamiento</div>
                                    <div className="text-sm font-bold">Hotel Sol Costa Daurada****, Salou</div>
                                    <div className="text-xs">4 adultos, 6 noches</div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-row text-base">
                            <div className="stat p-2">
                                <div className="">Básica</div>
                                <div className="">1.556 EUR</div>
                            </div>

                            <div className="stat p-2">
                                <div className=""><button className="btn btn-xs">Smart</button></div>
                                <div className="">1.531 EUR</div>
                            </div>

                            <div className="stat m-2 p-1 bg-green-300  rounded-xl text-green-800">
                                <div className="">
                                    <div className="">Ahorro</div>
                                    <div className="">-25 EUR</div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            {/* <div className=" lg:flex justify-end hidden">
                <Image src="/offer_2.png" alt="" width="100" height="100" className="absolute w-60 h-28 -bottom-10 right-0 " />
            </div> */}


            {/* small */}
            {/* <div className=" lg:hidden">
                <Image src="/offer_2(1).png" alt="" width="52" height="52" className="absolute md:h-32 md:w-20 -bottom-7 right-0 " />
            </div> */}




        </div>


    );
};

export default Offer;