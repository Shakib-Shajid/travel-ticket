
const Card = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className=" grid grid-cols-3 gap-2  w-3/4 mx-auto">
                <div className="card bg-[#fce6f1] w-72">
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-[#F2384B]">Precios más bajos exclusivos para clientes Smart.</h2>
                        <p>Ahorra hasta 100 EUR en cada vuelo, además de descuentos en trenes, hoteles, paquetes de vuelo+hotel y actividades en cualquier fecha y destino</p>
                    </div>
                </div>

                <div className="card bg-[#fce6f1] w-72">
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-[#F2384B]">Tarifa Smart para ti y tus acompañantes.</h2>
                        <p>Los descuentos Smart también se aplican a todos los acompañantes de tus reservas, con un máximo de 8 personas en total.</p>
                    </div>
                </div>

                <div className="card bg-[#fce6f1] w-72">
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-[#F2384B]">Comparte los beneficios Smart.</h2>
                        <p>Hasta 3 personas que tú elijas podrán disfrutar de los descuentos exclusivos Smart cuando la reserva no sea para ti.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;