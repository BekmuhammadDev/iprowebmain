import React from 'react';
import { NavLink } from "react-router-dom";  // NavLink import qilamiz
import Logo from "../../assets/icons/Logo.svg";
import { FaBell } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";

const Header = () => {
    return (
        <header className='container mx-auto py-5'>
            <nav className='flex justify-between gap-10 items-center'>
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
