import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Logo from "../../assets/icons/Logo.svg";
import { FaBell } from "react-icons/fa";
import { IoClose, IoPersonOutline } from "react-icons/io5";
import { FaEarthAsia } from "react-icons/fa6";
import { CgMenuRightAlt } from "react-icons/cg";
import { MdArrowDropUp } from "react-icons/md";
import { FaBriefcase, FaTasks, FaListAlt } from "react-icons/fa";
import IproRegisterLogo from "../../assets/images/iproLogoRegister.png"
import profileicon from "../../assets/images/profileicon.png"
import { IoMdClose } from "react-icons/io";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { IoHome } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import LangDropdown from "../langdropdown/langdropdown"
import { useTranslation } from "react-i18next";
import "../../i18";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const Header = () => {
    const { t } = useTranslation();

    const [menuOpen, setMenuOpen] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);


    // //////////////////////////////////////
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');


    const handleRegister = async () => {
        if (!username || !email || !password || !confirmPassword) {
            setError('Please fill in all fields!');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        try {
            const response = await fetch("http://192.168.0.105:8089/auth/registe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            });

            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            if (!response.ok) {
                throw new Error("Registration failed: " + response.status);
            }

            const data = await response.json();
            console.log("Backenddan javob:", data);

            // localStorage ga token saqlash (agar backend token yuborsa)
            // localStorage.setItem("token", data.token);

            // Forma tozalash
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setError('');

            // Modalni yopish
            setIsModalOpen(false);
            alert("Ro‘yxatdan o‘tish muvaffaqiyatli!");

        } catch (err) {
            console.error("Xatolik:", err);
            setError("Ro‘yxatdan o‘tishda xatolik: " + err.message);
        }
    };

    const handleSignIn = async () => {
        try {
            const userData = { username, password };
            const result = await signIn(userData);
            // Response'dan tokenni saqlash
            localStorage.setItem("authToken", result.token);
            // Successdan keyin sahifani yangilash yoki boshqa amalni bajarish
            console.log('User signed in successfully:', result);
        } catch (err) {
            setError('Invalid credentials or server error.');
        }
    };
    //////////////////////////////////////////

    return (
        <header className={`w-full py-4 fixed top-0 h-20 z-50 text-white flex transition-all duration-300 bg-[#0A0F1F]`}>
            <nav className='flex container mx-auto md:max-w-none xl:max-w-none px-10  py-5 justify-between items-center'>

                {/* Logo */}
                <NavLink to="/">
                    <img src={Logo} alt="Logo" className="w-32" />
                </NavLink>

                {/* Desktop Navbar */}
                <ul className='hidden lg:flex gap-10'>
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

                        <LangDropdown openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />

                        {/* Notifications Dropdown */}
                        <div className='relative dropdown'>
                            <button onClick={() => setOpenDropdown(openDropdown === "notif" ? null : "notif")}>
                                <FaBell fontSize={25} color='white' />
                            </button>
                            {openDropdown === "notif" && (
                                <div className="absolute top-12 -left-20 w-[230px] text-white rounded-lg shadow-lg">
                                    <MdArrowDropUp className='absolute -bottom-5 left-16 text-[#16182B] text-[48px]' />
                                    <div className="py-2 px-3 bg-[#16182B] w-[174px] rounded-xl">
                                        <button onClick={() => setOpenDropdown(null)} className="block w-full border-b-2 border-gray-600 text-start py-2 text-xs">{t("your_approved")}<p className='text-xs text-[#999999]'>5 days ago</p></button>
                                        <button onClick={() => setOpenDropdown(null)} className="block w-full text-start border-b-2 border-gray-600 py-2 text-xs">{t("your_rejected")} <p className='text-xs text-[#999999]'>15 days ago</p></button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* User Dropdown */}
                        <div className="relative dropdown">
                            <button onClick={() => setOpenDropdown(openDropdown === "user" ? null : "user")}>
                                <IoPersonOutline fontSize={25} color="white" className="hidden md:block" />
                            </button>

                            {openDropdown === "user" && (
                                <div className="absolute top-12 -left-14 w-40 text-white rounded-lg shadow-lg">
                                    <MdArrowDropUp className="absolute -bottom-5 left-10 text-[#16182B] text-[48px]" />
                                    <div className="py-5 px-3 bg-[#16182B] w-[140px] rounded-xl">
                                        <button
                                            onClick={() => {
                                                setOpenDropdown(null);
                                                setIsSignInModalOpen(true);
                                            }}

                                            className="block w-full mb-3 text-center bg-white text-blue-600 font-bold border-b-2 px-5"
                                        >
                                            Sign In
                                        </button>
                                        <button
                                            onClick={() => {
                                                setOpenDropdown(null);
                                                setIsModalOpen(true); // Modalni ochish
                                            }}
                                            className="block w-full border border-blue-600 text-center font-bold px-5"
                                        >
                                            Register
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Modal Sign In */}
                        {isSignInModalOpen && (
                            <div className="fixed inset-0 flex items-center px-5 justify-center bg-black bg-opacity-90 z-50">
                                <div className="flex rounded-md justify-between bg-[#16182B] items-center sm:px-20">
                                    <div className="hidden md:flex">
                                        <img src={IproRegisterLogo} alt="" />
                                    </div>
                                    <div className="p-6 rounded-lg w-full sm:w-[400px] relative">
                                        <button
                                            className="absolute -top-14 -right-5 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg"
                                            onClick={() => setIsSignInModalOpen(false)}
                                        >
                                            <IoMdClose fontSize={40} />
                                        </button>
                                        <h2 className="text-white text-[40px] font-bold text-center">Sign In</h2>

                                        <input
                                            className="w-full px-5 h-[49px] my-4 border rounded bg-gray-800 border-[#0086EE] text-white"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                        <div className="relative">
                                            <input
                                                className="w-full px-5 h-[49px] my-2 border rounded bg-gray-800 border-[#0086EE] text-white pr-10"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <button
                                                type="button"
                                                className="absolute top-[10%] right-4 text-gray-400"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                                            </button>
                                        </div>

                                        {/* Forgot Password Link */}
                                        <div className="text-right text-sm text-blue-400 cursor-pointer mb-4 hover:underline">
                                            Forgot password?
                                        </div>

                                        {/* Continue Button */}
                                        <button className="w-full bg-white text-base font-semibold drop-shadow-[0_5px_15px_rgba(0,112,244,0.8)] text-blue-600 p-2 rounded"
                                            onClick={handleSignIn}
                                        >
                                            CONTINUE
                                        </button>

                                        {/* Divider with Or */}
                                        <div className="flex items-center gap-2 my-4">
                                            <div className="flex-grow h-[1px] bg-gray-600" />
                                            <span className="text-white text-sm">Or, continue with</span>
                                            <div className="flex-grow h-[1px] bg-gray-600" />
                                        </div>

                                        {/* Google Sign In */}
                                        <button className="w-full flex items-center justify-center gap-2 border text-white border-gray-600 rounded p-2">
                                            <FcGoogle size={20} /> Continue with Google
                                        </button>

                                        <p className="text-white text-center mt-2">
                                            New to iPro?{" "}
                                            <span
                                                className="text-blue-400 cursor-pointer"
                                                onClick={() => {
                                                    setIsSignInModalOpen(false);
                                                    setIsModalOpen(true); // Open Register modal
                                                }}
                                            >
                                                Create an account
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Modal register */}
                        {isModalOpen && (
                            <div className="fixed inset-0 flex items-center px-5 justify-center bg-black bg-opacity-90">
                                <div className='flex rounded-md justify-between bg-[#16182B] items-center sm:px-20'>
                                    <div className='hidden md:flex'>
                                        <img src={IproRegisterLogo} alt="Register Logo" />
                                    </div>
                                    <div className=" p-6 rounded-lg w-full sm:w-[400px] relative">

                                        <button
                                            className="absolute -top-14 -right-5 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg"
                                            onClick={() => setIsModalOpen(false)}
                                        >
                                            <IoMdClose fontSize={40} />
                                        </button>
                                        <h2 className="text-white text-[40px] font-bold text-center">Register</h2>
                                        {error && <p className="text-red-500 text-center">{error}</p>}
                                        <input
                                            className="w-full px-5 h-[49px] my-4 border rounded bg-gray-800 border-[#0086EE] text-white"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                        <input
                                            className="w-full px-5 h-[49px] my-4 border rounded bg-gray-800 border-[#0086EE] text-white"
                                            placeholder="Email Address"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {/* Password Input */}
                                        <div className="relative">
                                            <input
                                                className="w-full px-5 h-[49px] my-2 border rounded bg-gray-800 border-[#0086EE] text-white pr-10"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <button
                                                type="button"
                                                className="absolute top-[10%] right-4 text-gray-400"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                                            </button>
                                        </div>

                                        {/* Confirm Password Input */}
                                        <div className="relative">
                                            <input
                                                className="w-full px-5 h-[49px] my-2 border rounded bg-gray-800 border-[#0086EE] text-white pr-10"
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder="Confirm password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                            <button
                                                type="button"
                                                className="absolute top-[10%] right-4 text-gray-400"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            >
                                                {showConfirmPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                                            </button>
                                        </div>

                                        <button
                                            className="w-full bg-white text-base font-semibold drop-shadow-[0_5px_15px_rgba(0,112,244,0.8)] text-blue-600 p-2 mt-4 rounded"
                                            onClick={handleRegister}
                                        >
                                            CONTINUE
                                        </button>
                                        <p className="text-white text-center mt-2">
                                            Have an account? <span className="text-blue-400 cursor-pointer">Sign In</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

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
                        { name: t("home"), icon: <IoHome />, path: "/" },
                        // { name: "Profile", icon: <FaUser />, path: "/profile" },
                        { name: t("about"), icon: <FaBriefcase />, path: "/aboutus" },
                        { name: t("team"), icon: <GrGroup />, path: "/team" },
                        { name: t("portfolio"), icon: <FaBriefcase />, path: "/portfolio" },
                        { name: t("services"), icon: <FaTasks />, path: "/services" },
                        { name: t("careers"), icon: <FaBriefcase />, path: "/careers" },
                        // { name: "Orders", icon: <FaShoppingBag />, path: "/orders" },
                        { name: "My Orders", icon: <FaListAlt />, path: "/user" },
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