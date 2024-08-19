import { TbHandFinger } from "react-icons/tb";
import { RiTwitterLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
    return (
        <div className="bg-neutral">
            <footer className="footer text-[#CCCCCC] p-10 max-w-7xl mx-auto w-4/6">
                <nav>
                    <h6 className="text-base font-bold text-white">Atrápalo en el mundo</h6>
                    <a className="link link-hover">Argentina</a>
                    <a className="link link-hover">Chile</a>
                    <a className="link link-hover">Colombia</a>
                    <a className="link link-hover">Costa Rica</a>
                    <a className="link link-hover">Guatemala</a>
                    <a className="link link-hover">México</a>
                    <a className="link link-hover">Panamá</a>
                    <a className="link link-hover">Perú</a>
                </nav>
                <nav>
                    <h6 className="text-base font-bold text-white">Productos</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="text-base font-bold text-white">Sobre nosotros</h6>
                    <a className="link link-hover">¿Qué es Atrápalo?</a>
                    <a className="link link-hover">Atrápalo Social</a>
                    <a className="link link-hover">Área de prensa</a>
                    <a className="link link-hover">Publicidad</a>
                    <a className="link link-hover">Trabajar en Atrápalo</a>
                    <a className="link link-hover">Términos y condiciones generales</a>
                    <a className="link link-hover">Privacidad y cookies</a>
                    <a className="link link-hover">Aviso legal</a>
                </nav>
                <nav>
                    <h6 className="text-base font-bold text-white">¿Dudas? Contáctanos</h6>
                    <a className="link link-hover">Mis reservas</a>
                    <a className="link link-hover">Ir al Centro de ayuda</a>
                    <a className="link link-hover">Resolución de litigios</a>
                </nav>
            </footer>

            <footer className="footer footer-center text-white rounded p-10">
                <hr className="max-w-7xl mx-auto w-full border-slate-600" />

                <h3 className="text-center text-white">¡Síguenos!</h3>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <TbHandFinger className="text-xl mr-2" />
                        </a>
                        <a>
                            <RiTwitterLine className="text-xl mr-2" />
                        </a>
                        <a>
                            <FaFacebookSquare className="text-xl mr-2" />
                        </a>
                        <a>
                            <FiInstagram className="text-xl mr-2" />
                        </a>
                        <a>
                            <FaYoutube className="text-xl mr-2" />
                        </a>
                    </div>
                </nav>

                <Link href="/"><div className="flex gap-2 p-4 border border-gray-400 text-[#CCCCCC] rounded-xl hover:border-white">
                    <Image src="/brandApp.png" className="w-8 h-10" alt="" height="12" width="12" />
                    <p>Descárgate gratis la <br /> app de Atrápalo</p>
                </div></Link>
                <aside>
                    <small>ATRÁPALO SL - Plaça Catalunya 9 08002 Barcelona, ​​Spain - GC1018</small>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;