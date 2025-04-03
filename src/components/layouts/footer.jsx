import React from "react";
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Logo from "../../assets/icons/Logo.svg"; // Logoni to‘g‘ri yo‘lda joylashtiring

const Footer = () => {
    return (
        <footer className="bg-[#0D1117] text-white py-12 px-10 h-full">
            <div className="container mx-auto px-6 lg:px-1">
                {/* Parent flex container */}
                <div className="flex flex-wrap md:flex-row justify-between items-start gap-10 md:gap-0">

                    {/* Logo & Copyright */}
                    <div className="flex flex-col items-start w-auto md:border-r-2 md:pr-10">
                        <img src={Logo} alt="iPro Logo" className="w-[173px] h-12 mb-5" />
                        <p className="text-[20px] font-normal">© 2020-2025 «iPro»</p>
                    </div>

                    {/* Contacts */}
                    <div className="text-left w-auto md:border-r-2 md:pr-10">
                        <h3 className="text-2xl font-bold">Contacts</h3>
                        <p className="text-[20px] font-normal mt-2">Google map</p>
                        <p className="text-[20px] font-normal">Yandex map</p>
                        <p className="text-[20px] font-normal mt-2">+998 90 000 00 00</p>
                    </div>

                    {/* Links */}
                    <div className="text-left w-auto md:border-r-2 md:pr-10">
                        <h3 className="text-2xl font-semibold">Links</h3>
                        <p className="text-[20px] font-normal mt-2">About Us</p>
                        <p className="text-[20px] font-normal">Services</p>
                        <p className="text-[20px] font-normal">Portfolio</p>
                    </div>

                    {/* Social Media (Follow Us) */}
                    <div className="text-left w-auto">
                        <h3 className="text-2xl font-bold">Follow us</h3>
                        <div className="flex justify-start gap-4 mt-3">
                            <FaTelegramPlane className="text-3xl cursor-pointer hover:text-blue-500 transition" />
                            <FaInstagram className="text-3xl cursor-pointer hover:text-pink-500 transition" />
                            <FaFacebookF className="text-3xl cursor-pointer hover:text-blue-600 transition" />
                            <FaYoutube className="text-3xl cursor-pointer hover:text-red-500 transition" />
                            <FaWhatsapp className="text-3xl cursor-pointer hover:text-green-500 transition" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    );
};

export default Footer;
