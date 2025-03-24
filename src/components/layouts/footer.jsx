import React from "react";
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Logo from "../../assets/icons/Logo.svg"; // Logoni to‘g‘ri yo‘lda joylashtiring

const Footer = () => {
    return (
        <footer className="bg-[#0D1117] text-white py-12 h-[267px]">
            <div className="container mx-auto px-6 lg:px-1">
                {/* Footerning asosiy qismi */}
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-0">

                    {/* Logo & Copyright */}
                    <div className="flex flex-col items-center lg:items-start">
                        <img src={Logo} alt="iPro Logo" className="w-[173px] h-12 mb-16" />
                        <p className="text-[20px] font-normal">© 2020-2025 «iPro»</p>
                    </div>

                    {/* Contacts */}
                    <div className="text-center lg:text-left border-l-2 pl-40">
                        <h3 className="text-2xl font-bold">Contacts</h3>
                        <p className="text-[20px] font-normal text-[#FFFFFF] mt-2">Google map</p>
                        <p className="text-[20px] font-normal text-[#FFFFFF]">Yandex map</p>
                        <p className="text-[20px] font-normal mt-2 text-[#FFFFFF]">+998 90 000 00 00</p>
                    </div>

                    {/* Links */}
                    <div className="text-center lg:text-left border-r-2 pr-40">
                        <h3 className="text-2xl font-semibold">Links</h3>
                        <p className="text-[20px] font-normal text-[#FFFFFF] mt-2">About Us</p>
                        <p className="text-[20px] font-normal text-[#FFFFFF]">Services</p>
                        <p className="text-[20px] font-normal text-[#FFFFFF]">Portfolio</p>
                    </div>

                    {/* Follow Us */}
                    <div className="text-center lg:text-left">
                        <h3 className="text-2xl font-bold">Follow us</h3>
                        <div className="flex justify-center lg:justify-start gap-4 mt-3">
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
