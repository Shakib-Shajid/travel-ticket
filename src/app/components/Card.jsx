
const Card = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto" id="card">
                <div className="ml-4 md:ml-0 my-5 lg:my-20">
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full  md:w-3/4 mx-auto"> */}
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center w-[90%] mx-auto">
                        <div className="card bg-gradient-to-r from-green-300 to-blue-300 w-80 mx-auto">
                            <div className="card-body">
                                <h2 className="card-title text-xl font-extrabold text-blue-500">Precios más bajos exclusivos para clientes Smart.</h2>
                                <p className="font-open_sans">Ahorra hasta 100 EUR en cada vuelo, además de descuentos en trenes, hoteles, paquetes de vuelo+hotel y actividades en cualquier fecha y destino</p>
                            </div>
                        </div>

                        <div className="card bg-gradient-to-r from-green-300 to-blue-300 w-80 mx-auto">
                            <div className="card-body">
                                <h2 className="card-title text-xl font-extrabold text-blue-500">Tarifa Smart para ti y tus acompañantes.</h2>
                                <p className="font-open_sans">Los descuentos Smart también se aplican a todos los acompañantes de tus reservas, con un máximo de 8 personas en total.</p>
                            </div>
                        </div>

                        <div className="card bg-gradient-to-r from-green-300 to-blue-300 w-80 mx-auto">
                            <div className="card-body">
                                <h2 className="card-title text-xl font-extrabold text-blue-500">Comparte los beneficios Smart.</h2>
                                <p className="font-open_sans">Hasta 3 personas que tú elijas podrán disfrutar de los descuentos exclusivos Smart cuando la reserva no sea para ti.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;