import location from "../../assets/image/footer-loc.svg";
import phone from "../../assets/image/footer-call.svg";
import email from "../../assets/image/footer-sms.svg";
import { Link } from "react-router-dom";
import instagram from "../../assets/image/footer-inst.svg";
import logo from "../../assets/image/footer-logo.svg";
import { HashLink } from "react-router-hash-link";


function Footer() {
    return (
        <footer className="w-full bg-[#051C34]">
            <div className="max-w-7xl mx-auto px-5 py-12">

                <div
                    className="flex flex-col md:flex-row justify-between"
                >

                    {/* LEFT */}
                    <div className="flex flex-col gap-3">
                        <img src={logo} alt="logo" className="w-[120px] h-[120px]" />

                        <div className="flex flex-row gap-3 items-center">
                            <img src={location} alt="location" />
                            <p className="text-gray-500 text-sm hover:text-yellow-500">Одесса и область</p>
                        </div>
                        <Link to="tel:+380663642781" className="flex flex-row gap-3 items-center mt-2">
                            <img src={phone} alt="phone" />
                            <p className="text-gray-500 text-sm hover:text-yellow-500">+38 (066) 364 27 81</p>
                        </Link>
                        <Link to="mailto:evakuatorznamenka@gmail.com" className="flex flex-row gap-3 items-center mt-2">
                            <img src={email} alt="phone" />
                            <p className="text-gray-500 text-sm hover:text-yellow-500">evakuatorznamenka@gmail.com</p>
                        </Link>
                    </div>

                    {/* CENTER */}
                    <div className="flex flex-col md:items-center items-start gap-3 text-left md:mt-[120px] mt-[50px]">
                        <HashLink to="#about" className="text-sm text-gray-500 text-left hover:text-yellow-500">
                            О нас
                        </HashLink>
                        <HashLink to="#prices" className="text-sm text-gray-500 text-left mt-2 hover:text-yellow-500">
                            Цены
                        </HashLink>
                        <HashLink to="#map" className="text-sm text-gray-500 text-left mt-2 hover:text-yellow-500">
                            На карте
                        </HashLink>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col gap-3 md:items-center items-start md:mt-[120px] mt-[50px]">
                        <p className="text-sm text-gray-600 hover:text-yellow-500">Мы в соцсетях</p>
                        <div className="flex gap-4 mt-2">
                            <a href="https://www.instagram.com/filin.vans/" target="_blank"><img src={instagram} alt="" /></a>
                        </div>
                    </div>

                </div>
                <hr class="border-t border-yellow-500 w-full mt-20 px-10" />

                {/* bottom line */}
                <div className=" flex justify-start flex-row mt-10 text-left text-xs text-gray-500">
                    <Link to="https://www.web-mars.com/" target="_blank" className="hover:text-red-500">© {new Date().getFullYear()} Mars Design Studio.</Link>
                </div>

            </div>
        </footer >

    );
}
export default Footer;