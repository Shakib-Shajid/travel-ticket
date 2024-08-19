import Image from "next/image";

const Offer = () => {
    return (
        <div className="w-full bg-gradient-to-r from-red-500 to-purple-500 text-center my-10">

            <div className="py-10  text-white">
                <h3 className="text-3xl my-5">How much can you save with Smart</h3>
                <p>Savings vary depending on the amount and number of passengers booked. Examples of savings <br /> between the basic and Smart fare:</p>
            </div>

            <div className="flex justify-center">
                <div className="stats shadow w-2/4 my-2">
                    <div className="stat p-3">
                        <div className="flex gap-2">
                            <Image src="/save_1.jpg" alt="" width="130" height="100" className="rounded-xl" />
                            <div className="text-start  my-auto">
                                <div className="text-xs">Round trip flight</div>
                                <div className="text-sm font-bold">Madrid - Frankfurt</div>
                                <div className="text-xs">3 adults</div>
                            </div>
                        </div>

                    </div>

                    <div className="stat place-items-center w-1/3">
                        <div className="">Basic</div>
                        <div className="">1.030 EUR</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className=""><button className="btn btn-xs">Smart</button></div>
                        <div className="">955 EUR</div>
                    </div>

                    <div className="stat place-items-center p-2">
                        <div className="bg-green-300 p-3 rounded-lg text-green-800">
                            <div className="">Saving</div>
                            <div className="">-75 EUR</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="stats shadow w-2/4 my-3">
                    <div className="stat p-3">
                        <div className="flex gap-2">
                            <Image src="/save_2.jpg" alt="" width="130" height="100" className="rounded-xl" />
                            <div className="text-start  my-auto">
                                <div className="text-xs">Activities</div>
                                <div className="text-sm font-bold">Spa with massage at <br /> Eurostar Sitges *****</div>
                                <div className="text-xs">2 adults</div>
                            </div>
                        </div>

                    </div>

                    <div className="stat place-items-center w-1/3">
                        <div className="">Basic</div>
                        <div className="">159 EUR</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className=""><button className="btn btn-xs">Smart</button></div>
                        <div className="">127 EUR</div>
                    </div>

                    <div className="stat place-items-center p-2">
                        <div className="bg-green-300 p-3 rounded-lg text-green-800">
                            <div className="">Saving</div>
                            <div className="">-32 EUR</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="stats shadow w-2/4 my-3">
                    <div className="stat p-3">
                        <div className="flex gap-2">
                            <Image src="/save_3.jpg" alt="" width="130" height="100" className="rounded-xl" />
                            <div className="text-start  my-auto">
                                <div className="text-xs">BIRD</div>
                                <div className="text-sm font-bold">Madrid - Puertollano</div>
                                <div className="text-xs">2 adults</div>
                            </div>
                        </div>

                    </div>

                    <div className="stat place-items-center w-1/3">
                        <div className="">Basic</div>
                        <div className="">101 EUR</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className=""><button className="btn btn-xs">Smart</button></div>
                        <div className="">71 EUR</div>
                    </div>

                    <div className="stat place-items-center p-2">
                        <div className="bg-green-300 p-3 rounded-lg text-green-800">
                            <div className="">Saving</div>
                            <div className="">-30 EUR</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="stats shadow w-2/4 my-3">
                    <div className="stat p-3">
                        <div className="flex gap-2">
                            <Image src="/save_4.jpg" alt="" width="130" height="100" className="rounded-xl" />
                            <div className="text-start  my-auto">
                                <div className="text-xs">Accommodation</div>
                                <div className="text-sm font-bold">Hotel Sol Costa <br /> Daurada****, Salou</div>
                                <div className="text-xs">4 adults, 6 nights</div>
                            </div>
                        </div>

                    </div>

                    <div className="stat place-items-center w-1/3">
                        <div className="">Basic</div>
                        <div className="">1.556 EUR</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className=""><button className="btn btn-xs">Smart</button></div>
                        <div className="">1.531 EUR</div>
                    </div>

                    <div className="stat place-items-center p-2">
                        <div className="bg-green-300 p-3 rounded-lg text-green-800">
                            <div className="">Saving</div>
                            <div className="">-25 EUR</div>
                        </div>
                    </div>
                </div>
            </div>

            

            
        </div>
    );
};

export default Offer;