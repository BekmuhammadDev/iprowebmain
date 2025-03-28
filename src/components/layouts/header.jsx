import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Logo from "../../assets/icons/Logo.svg";
import { FaBell } from "react-icons/fa";
import { IoClose, IoPersonOutline } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaUser, FaBriefcase, FaTasks, FaShoppingBag, FaListAlt } from "react-icons/fa";
import profileicon from "../../assets/images/profileicon.png"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`w-full py-4 fixed px-5 top-0 h-20 z-50 text-white flex transition-all duration-300 bg-[#0A0F1F]
            ${isScrolled ? "backdrop-blur-lg bg-transparent" : "bg-transparent"}`}>
            <nav className='flex container mx-auto py-5 justify-between items-center'>

                {/* Logo */}
                <NavLink to="/">
                    <img src={Logo} alt="Logo" className="w-32" />
                </NavLink>

                {/* Desktop Navbar */}
                <ul className='hidden md:flex gap-10'>
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
                <div className='flex items-center gap-4'>
                    <FaBell fontSize={25} color='white' />
                    <IoPersonOutline fontSize={25} color='white' className="hidden md:block" />
                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-3xl">
                        {menuOpen ? <IoClose /> : <CgMenuRightAlt />}
                    </button>
                </div>
            </nav>

            {/* Fullscreen Mobile Menu */}
            <div className={`fixed inset-0 bg-gray-900/80 backdrop-blur-lg h-full text-white flex flex-col transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-between items-center p-5">
                    <div className="items-center gap-3">
                        <img src={profileicon} alt="Profile" className="w-[110px] h-[110px] rounded-full border-2 border-gray-500" />
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
            </div>
        </header>
    );
};

export default Header;