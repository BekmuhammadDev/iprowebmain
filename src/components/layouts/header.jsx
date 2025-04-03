import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Logo from "../../assets/icons/Logo.svg";
import { FaBell } from "react-icons/fa";
import { IoClose, IoPersonOutline } from "react-icons/io5";
import { FaEarthAsia } from "react-icons/fa6";
import { CgMenuRightAlt } from "react-icons/cg";
import { MdArrowDropUp } from "react-icons/md";
import { FaUser, FaBriefcase, FaTasks, FaShoppingBag, FaListAlt } from "react-icons/fa";
import profileicon from "../../assets/images/profileicon.png"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(null);

    const [isScrolled, setIsScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown")) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden"; // Skrollni bloklash
        } else {
            document.body.style.overflow = "auto"; // Skrollni tiklash
        }

        return () => {
            document.body.style.overflow = "auto"; // Komponent unmount bo‘lganda tiklash
        };
    }, [menuOpen]);




    return (
        <header className={`w-full py-4 fixed  top-0 h-20 z-50 text-white flex transition-all duration-300 bg-[#0A0F1F]
            ${isScrolled ? "backdrop-blur-lg bg-transparent" : "bg-transparent"}`}>
            <nav className='flex container mx-auto md:max-w-none xl:max-w-none px-10  py-5 justify-between items-center'>

                {/* Logo */}
                <NavLink to="/">
                    <img src={Logo} alt="Logo" className="w-32" />
                </NavLink>

                {/* Desktop Navbar */}
                <ul className='hidden lg:flex gap-10'>
                    {[
                        { name: "About Us", path: "/" },
                        { name: "Team", path: "/team" },
                        { name: "Portfolio", path: "/portfolio" },
                        { name: "Services", path: "/services" },
                        { name: "Careers", path: "/careers" },
                    ].map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) =>
                                `transition duration-300 ease-in-out text-white text-lg font-semibold 
                 hover:text-blue-400 hover:[text-shadow:0px_0px_5px_#3b82f6, 0px_0px_10px_#3b82f6, 0px_0px_20px_#3b82f6]`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </ul>

                {/* Icons */}
                <div className='relative flex items-center gap-5'>
                    {/* Globe Icon with Dropdown */}

                    <div className='flex items-center md:gap-7 relative'>
                        {/* Language Dropdown */}
                        <div className=" hidden md:flex relative dropdown">
                            <button onClick={() => setOpenDropdown(openDropdown === "lang" ? null : "lang")}>
                                <FaEarthAsia fontSize={25} color='white' />
                            </button>
                            {openDropdown === "lang" && (
                                <div className="absolute top-12 -left-12 w-32 text-white rounded-lg shadow-lg">
                                    <MdArrowDropUp className='absolute -bottom-5 left-8 text-[#16182B] text-[48px]' />
                                    <div className="py-2 px-3 bg-[#16182B] w-[117px] rounded-xl">
                                        <button onClick={() => setOpenDropdown(null)} className="block w-full text-center border-gray-600 border-b-2 px-4 py-2">English</button>
                                        <button onClick={() => setOpenDropdown(null)} className="block w-full text-center border-gray-600 border-b-2 px-4 py-2">Русский</button>
                                        <button onClick={() => setOpenDropdown(null)} className="block w-full text-center px-4 py-2">Uzbek</button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Notifications Dropdown */}
                        <div className='relative dropdown'>
                            <button onClick={() => setOpenDropdown(openDropdown === "notif" ? null : "notif")}>
                                <FaBell fontSize={25} color='white' />
                            </button>
                            {openDropdown === "notif" && (
                                <div className="absolute top-12 -left-20 w-[230px] text-white rounded-lg shadow-lg">
                                    <MdArrowDropUp className='absolute -bottom-5 left-16 text-[#16182B] text-[48px]' />
                                    <div className="py-2 px-3 bg-[#16182B] w-[174px] rounded-xl">
                                        <button onClick={() => setOpenDropdown(null)} className="block w-full border-b-2 border-gray-600 text-start py-2 text-sm">Your project approved <p className='text-xs text-[#999999]'>5 days ago</p></button>
                                        <button onClick={() => setOpenDropdown(null)} className="block w-full text-start border-b-2 border-gray-600 py-2 text-sm">Your project rejected <p className='text-xs text-[#999999]'>15 days ago</p></button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* User Dropdown */}
                        <div className='relative dropdown'>
                            <button onClick={() => setOpenDropdown(openDropdown === "user" ? null : "user")}>
                                <IoPersonOutline fontSize={25} color='white' className="hidden md:block" />
                            </button>
                            {openDropdown === "user" && (
                                <div className="absolute top-12 -left-14 w-40 text-white rounded-lg shadow-lg">
                                    <MdArrowDropUp className='absolute -bottom-5 left-10 text-[#16182B] text-[48px]' />
                                    <div className="py-5 px-3 bg-[#16182B] w-[140px] rounded-xl ">
                                        <button onClick={() => setOpenDropdown(null)} className="block w-full mb-3 text-center bg-white text-blue-600 font-bold border-b-2 px-5 ">Sign In</button>
                                        <button onClick={() => setOpenDropdown(null)} className="block w-full border border-blue-600 text-center font-bold px-5">Register</button>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* Other Icons */}
                    <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white text-3xl">
                        {menuOpen ? <IoClose /> : <CgMenuRightAlt />}
                    </button>
                </div>

            </nav>

            {/* Fullscreen Mobile Menu */}
            <div
                className={`fixed w-full sm:w-96 sm:right-0 bg-gray-900/80 backdrop-blur-lg h-full text-white flex flex-col 
                    transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"} ${isScrolled ? "backdrop-blur-lg bg-transparent" : "bg-transparent"}`}
            >
                <div className="flex justify-between items-center p-5">
                    <div className="items-center gap-3">
                        <img
                            src={profileicon}
                            alt="Profile"
                            className="w-[110px] h-[110px] rounded-full border-2 border-gray-500"
                        />
                        <h2 className="text-xl font-bold mt-4">Jane Robertson</h2>
                    </div>

                    <button onClick={() => setMenuOpen(false)} className="text-3xl">
                        <IoClose />
                    </button>
                </div>

                <ul className="flex flex-col items-start pl-5 mt-6 space-y-2">
                    {[
                        { name: "Profile", icon: <FaUser />, path: "/profile" },
                        { name: "About Us", icon: <FaBriefcase />, path: "/" },
                        { name: "Team", icon: <FaTasks />, path: "/team" },
                        { name: "Portfolio", icon: <FaBriefcase />, path: "/portfolio" },
                        { name: "Services", icon: <FaTasks />, path: "/services" },
                        { name: "Careers", icon: <FaBriefcase />, path: "/careers" },
                        { name: "Orders", icon: <FaShoppingBag />, path: "/orders" },
                        { name: "My Orders", icon: <FaListAlt />, path: "/myorders" },
                    ].map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className="flex items-center gap-3 text-xl relative group transition w-full py-3"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.icon}
                            {item.name}

                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                            <span className="absolute top-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </NavLink>
                    ))}
                </ul>
            </div>;


        </header>
    );
};

export default Header;