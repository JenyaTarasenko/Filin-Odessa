import React, { useState } from "react";
import { X, Menu } from "lucide-react"; // иконки npm install lucide-react
import logo from "../../assets/image/Filin.svg";
import { Link, useLocation } from "react-router-dom";
// npm install react-router-hash-link    библиотека для прокрутки на секцию id="/#project-list"
import { HashLink } from "react-router-hash-link";
import telega from "../../assets/image/telega.svg";
import telefon from "../../assets/image/telefon.svg";
import viber from "../../assets/image/viber.svg";
import inst from "../../assets/image/inst.svg";





const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Получаем текущий путь для проверки ховер меню

    // функция для прверки пути и ховера меню
    const isActiveLink = (path) => {
        // Главная
        // if (path === "/#home" && location.pathname === "/" && !location.hash) {
        //     return true;
        // }
        if (
            path === "/#home" &&
            location.pathname === "/" &&
            (location.hash === "#home" || location.hash === "")
        ) {
            return true;
        }



        // О нас
        if (path === "/#about" && location.pathname === "/" && location.hash === "#about") {
            return true;
        }

        // Цены
        if (path === "/#prices" && location.pathname === "/" && location.hash === "#prices") {
            return true;
        }
        // Услуги
        if (path === "/#services" && location.pathname === "/" && location.hash === "#services") {
            return true;
        }
        // Услуги
        if (path === "/#services-mobile" && location.pathname === "/" && location.hash === "#services-mobile") {
            return true;
        }
        // На карте
        if (path === "/#map" && location.pathname === "/" && location.hash === "#map") {
            return true;
        }


        return false;
    };


    // Функция для получения класса активной ссылки
    const getLinkClass = (path) => {
        const baseClass =
            "hover:text-gray-900 font-medium uppercase transition-all duration-200 " +
            "hover:underline underline-offset-4 hover:decoration-yellow-400";

        const activeClass =
            "text-gray-900 font-bold underline decoration-yellow-400 decoration-2";

        return isActiveLink(path)
            ? `${baseClass} ${activeClass}`
            : baseClass;
    };
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 text-black bg-white shadow-md rounded-b-2xl">
                <div className="flex items-center justify-between relative py-5">
                    {/* Лого слева */}
                    <div className="logo-menu sm:px-10 px-5">
                        <Link to="/">
                            <img src={logo} alt="Filin - эвакуация автомобилей в Одессе быстро и эффективно" className="w-[80px]" />
                        </Link>
                    </div>

                    {/* Центр меню */}
                    <ul className="hidden lg:flex gap-10 text-xs font-light tracking-widest absolute justify-center w-full pr-5 text-uppercase">
                        {/* <li><Link to="/#home" className={getLinkClass("/")}>Главная</Link></li> */}
                        <HashLink smooth to="/#home" className={getLinkClass("/#home")}>
                            Главная
                        </HashLink>
                        <HashLink smooth to="/#about" className={getLinkClass("/#about")}>
                            О нас
                        </HashLink>
                        <HashLink smooth to="/#prices" className={getLinkClass("/#prices")}>
                            Цены
                        </HashLink>

                        <HashLink smooth to="/#services" className={getLinkClass("/#services")}>
                            Услуги
                        </HashLink>
                        <HashLink smooth to="/#map" className={getLinkClass("/#map")}>
                            На карте
                        </HashLink>

                    </ul>
                    <div className="hidden lg:flex gap-5 flex-row items-center  px-10">
                        <a
                            href="https://t.me/httpswwwtowtruckodesaua"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Написать в Telegram"
                            className="
                                inline-flex items-center justify-center
                                transform transition-transform duration-300
                                hover:scale-125
                                active:scale-110
                            "
                        ><img src={telega} alt="telegram" className="w-8 h-8" /></a>
                        <a
                            href="tel:+380663642781"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Написать в Telegram"
                            className="
                                inline-flex items-center justify-center
                                transform transition-transform duration-300
                                hover:scale-125
                                active:scale-110
                            "
                        ><img src={telefon} alt="telephone" className="w-8 h-8" /></a>
                        <a
                            href="viber://chat?number=%2B380663642781"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Написать в Telegram"
                            className="
                                inline-flex items-center justify-center
                                transform transition-transform duration-300
                                hover:scale-125
                                active:scale-110
                            "
                        ><img src={viber} alt="viber" className="w-8 h-8" /></a>
                        <a
                            href="https://www.instagram.com/filin.vans/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Написать в Telegram"
                            className="
                                inline-flex items-center justify-center
                                transform transition-transform duration-300 hover:scale-125
                                active:scale-110
                            "
                        ><img src={inst} alt="instagram" className="w-8 h-8" /></a>

                    </div>



                    {/* Бургер справа (mobile) */}
                    {/* Анимационный бургер — центральные линии абсолютом */}
                    <div className="lg:hidden flex items-center justify-center px-5 z-50">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            className="relative w-10 h-10 flex items-center justify-center"
                        >
                            {/* общий контейнер для линий */}
                            <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                {/* Верхняя линия */}
                                <span
                                    className={`absolute block w-7 h-[3px] rounded-full bg-black transform transition-transform duration-300 ease-in-out origin-center
                                ${isOpen ? "rotate-45" : " -translate-y-2"}
                                `}
                                />

                                {/* Средняя линия */}
                                <span
                                    className={`absolute block w-7 h-[3px] rounded-full bg-black transform transition-all duration-300 ease-in-out origin-center
                                ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}
                                `}
                                />

                                {/* Нижняя линия */}
                                <span
                                    className={`absolute block w-7 h-[3px] rounded-full bg-black transform transition-transform duration-300 ease-in-out origin-center
                                ${isOpen ? "-rotate-45" : " translate-y-2"}
                                `}
                                />
                            </span>
                        </button>

                    </div>
                </div>
                {/* Меню на mobile */}

                <div
                    className={`
                            lg:hidden fixed top-0 right-0 h-full w-[70%] bg-white z-40 
                            flex flex-col items-center justify-center shadow-xl
                            transition-transform duration-300 
                            ${isOpen ? "translate-x-0" : "translate-x-full"}
                        `}
                >
                    <ul className="flex flex-col gap-10 text-xl font-light items-center">
                        {/* <li><Link to="/" className={getLinkClass("/")}>Главная</Link></li> */}
                        <HashLink smooth to="/#home" className={getLinkClass("/#home")}>
                            Главная
                        </HashLink>

                        <HashLink smooth to="/#about" className={getLinkClass("/#about")}>
                            О нас
                        </HashLink>

                        {/* плавный скролл */}
                        <HashLink smooth to="/#prices" className={getLinkClass("/#prices")}>
                            Цены
                        </HashLink>

                        <HashLink smooth to="/#services-mobile" className={getLinkClass("/#services-mobile")}>
                            Услуги
                        </HashLink>

                        <HashLink smooth to="/#map" className={getLinkClass("/#map")}>
                            На карте
                        </HashLink>
                    </ul>
                </div>

            </nav>
            <div className="border-t border-gray-200 w-full mt-20 px-1"></div>
        </>
    );
};

export default NavBar;