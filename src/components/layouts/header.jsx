import React from 'react';
import { NavLink } from "react-router-dom";  // NavLink import qilamiz
import Logo from "../../assets/icons/Logo.svg";
import { FaBell } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";

const Header = () => {
    return (
        <header className=' fixed w-full top-0 right-0 sl:bg-transparent transition-300 z-[80] border-b border-white-80 headerLinear border-none'>
            <nav className='flex container mx-auto py-5 z-30 justify-between gap-10 items-center'>
                {/* Logo */}
                <NavLink to="/">
                    <img src={Logo} alt="Logo" />
                </NavLink>

                {/* Navbar links */}
                <ul className='flex gap-10'>
                    <NavLink to="/" className="nav-link">About Us</NavLink>
                    <NavLink to="/team" className="nav-link">Team</NavLink>
                    <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
                    <NavLink to="/services" className="nav-link">Services</NavLink>
                    <NavLink to="/careers" className="nav-link">Careers</NavLink>
                </ul>

                {/* Notifications & Profile */}
                <div className='flex gap-4'>
                    <FaBell fontSize={25} color='white' />
                    <IoPersonOutline fontSize={25} color='white' />
                </div>
            </nav>
        </header>
    );
};

export default Header;
