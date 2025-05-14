import React from "react";
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Logo from "../../assets/icons/Logo.svg";
import { useTranslation } from "react-i18next";
import "../../i18";
import { Link, NavLink } from "react-router-dom";


const Footer = () => {

    const { t } = useTranslation();

    return (
        <footer className="bg-[#0D1117] text-white py-12 px-10 h-full">
            <div className="container mx-auto px-6 lg:px-1">
                {/* Parent flex container */}
                <div className="flex flex-wrap md:flex-row justify-between items-start gap-10 md:gap-0">

                    {/* Logo & Copyright */}
                    <div className="flex flex-col items-start w-auto ">
                        <img src={Logo} alt="iPro Logo" className="w-[173px] h-12 mb-5" />
                        <p className="text-[15px] font-normal">© 2020-2025 «iPro»</p>
                    </div>

                    {/* Contacts */}
                    <div className="text-left w-auto md:border-l-2 md:pl-20">
                        <h3 className="text-xl font-bold">{t("contact")}</h3>
                        <p className="text-[15px] font-normal mt-2">{t("google_map")}</p>
                        <p className="text-[15px] font-normal">{t("yandex_map")}</p>
                        <p className="text-[15px] font-normal mt-2">+998 90 000 00 00</p>
                    </div>

                    {/* Links */}
                    <ul className='hidden lg:flex flex-col'>
                        <h3 className="text-xl font-semibold">{t("links")}</h3>
                        {[
                            { name: "", path: "/" },
                            { name: t("about"), path: "/aboutus" },
                            { name: t("team"), path: "/team" },
                            { name: t("portfolio"), path: "/portfolio" },
                            { name: t("services"), path: "/services" },
                            { name: t("careers"), path: "/careers" },
                        ].map((item, index) => (

                            <NavLink
                                key={index}
                                to={item.path}
                                className="relative transition duration-300 ease-in-out text-white hover:text-blue-500 text-base font-semibold group"
                            >
                                {item.name}

                                {/* Underline effect */}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </NavLink>

                        ))}
                    </ul>

                    {/* Social Media (Follow Us) */}
                    <div className="text-left w-auto">
                        <h3 className="text-xl font-bold">{t("follow_us")}</h3>
                        <div className="flex justify-start gap-4 mt-3">
                            <Link to="http://t.me/iPRO_group">
                                <FaTelegramPlane className="text-3xl cursor-pointer hover:text-blue-500 transition" />
                            </Link>
                            <Link to="https://www.instagram.com/iprogroupuz/#">
                                <FaInstagram className="text-3xl cursor-pointer hover:text-pink-500 transition" />
                            </Link>
                            <Link to="https://www.facebook.com/share/16EFV1KTV8/">
                                <FaFacebookF className="text-3xl cursor-pointer hover:text-blue-600 transition" />
                            </Link>
                            <Link to="https://www.youtube.com/@iprouz">
                                <FaYoutube className="text-3xl cursor-pointer hover:text-red-500 transition" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    );
};

export default Footer;
