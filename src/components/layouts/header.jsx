    import React, { useState, useEffect } from 'react';
    import { NavLink, useNavigate } from "react-router-dom";
    import Logo from "../../assets/icons/Logo.svg";
    import { FaBell } from "react-icons/fa";
    import { IoClose, IoPersonOutline } from "react-icons/io5";
    import { CgMenuRightAlt } from "react-icons/cg";
    import { MdArrowDropUp } from "react-icons/md";
    import { FaBriefcase, FaTasks, FaListAlt } from "react-icons/fa";
    import IproRegisterLogo from "../../assets/images/iproLogoRegister.png"
    import profileicon from "../../assets/images/profileicon.png"
    import { IoMdClose } from "react-icons/io";
    import {
  FaUser, FaShoppingBag, FaSignOutAlt,
} from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
    import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
    import { FcGoogle } from "react-icons/fc";
    import LangDropdown from "../langdropdown/langdropdown"
    import { useTranslation } from "react-i18next";
    import "../../i18";
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import Login from './login';
    import Register from './register';
    import TestModeBanner from "../ui/testmodebanner"
import axios from 'axios';
import { h1 } from 'framer-motion/client';
    AOS.init();
    const Header = () => {
        const token =localStorage.getItem("token")
        const { t } = useTranslation();
        const navigate =useNavigate()
        const [menuOpen, setMenuOpen] = useState(null);
        const [isScrolled, setIsScrolled] = useState(false);
        const [openDropdown, setOpenDropdown] = useState(null);
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
        const [showPassword, setShowPassword] = useState(false);
        const [user, setUser] = useState(null);

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
        const [error, setError] = useState('');

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
const handleSignOut = async () => {
  try {
    if (!token) {
      console.error("Token topilmadi.");
      return;
    }

    const response = await axios.post(
      "https://ipro.javohir-dev.uz/api/auth/logout",
      {}, // POST body bo'sh
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Agar muvaffaqiyatli bo‘lsa
    if (response.status === 200) {
      localStorage.removeItem("token");
      window.location.href = "/"; // yoki navigate("/login")
    }
  } catch (error) {
    console.error("Logoutda xatolik:", error.response?.status || error.message);
  }
};
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Language");

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
    // Agar tilni saqlamoqchi bo‘lsangiz, bu yerga logika yozing
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token"); // tokenni localStorage'dan olamiz
        if (!token) return;

        const response = await axios.get("https://ipro.javohir-dev.uz/api/auth/getMe", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data); // foydalanuvchi malumotlarini saqlash
      } catch (error) {
        console.error("Foydalanuvchini olishda xatolik:", error);
      }
    };

    fetchUser();
  }, []);

  const truncateName = (name, maxLength = 7) => {
    if (!name) return "Loading...";
    return name.length > maxLength ? name.slice(0, maxLength) + "..." : name;
  };

        return (
           <>
           <TestModeBanner/>
            <header className={`w-full py-4 fixed top-0 h-20 z-40 text-white flex transition-all duration-300 bg-[#0A0F1F]`}>
                <nav data-aos="flip-up"
                    data-aos-duration="1200" className='flex container mx-auto md:max-w-none xl:max-w-none px-10  py-5 justify-between items-center'>

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
                                className="relative transition duration-300 ease-in-out text-white hover:text-blue-500 text-lg font-semibold group"
                            >
                                {item.name}

                                {/* Underline effect */}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
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
                                    <FaBell fontSize={25} className='text-white' />
                                </button>
                                {openDropdown === "notif" && (
                                    <div className="absolute top-12  -left-20 border w-[230px] text-white rounded-lg shadow-lg">
                                        <MdArrowDropUp className='absolute -bottom-5 left-16 text-[#16182B] text-[48px] ' />
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
      {token ? (
         <div className="relative">
      {/* Uchburchak */}

        <h2 className="font-bold text-lg mb-2">Hi, {truncateName(user?.fullName || "Loading...")}</h2>
        <hr className="border-gray-500 my-2" />
        <button
          onClick={() => navigate("/user")}
          className="block w-full text-left text-white text-lg py-1 hover:underline"
        >
          My Profile
        </button>
       
        <hr className="border-gray-500 my-2" />
        <button
        onClick={handleSignOut}
          className="block w-full text-left text-red-500 text-lg font-semibold hover:underline"
        >
          Sign Out
        </button>
      </div>
      ) : (
        <>
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
        </>
      )}
    </div>

                                    </div>
                                )}
                            </div>

                            {/* Modal Sign In */}
                            {isSignInModalOpen && (
                            <Login IproRegisterLogo={IproRegisterLogo} setIsSignInModalOpen={setIsSignInModalOpen}  showPassword={showPassword} setShowPassword={setShowPassword} handleSignIn={handleSignIn} setIsModalOpen={setIsModalOpen}/>
                            )}

                            {/* Modal register */}
                            {isModalOpen && (
                            <Register IproRegisterLogo={IproRegisterLogo} setIsModalOpen={setIsModalOpen} error={error} isSignInModalOpen={isSignInModalOpen} setIsSignInModalOpen={setIsSignInModalOpen} />
                            )}

                        </div>

                        {/* Other Icons */}
                        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white text-3xl">
                            {menuOpen ? <IoClose /> : <CgMenuRightAlt />}
                        </button>
                    </div>

                </nav>

                {/* Fullscreen Mobile Menu */}
                 <div className={`fixed w-full sm:w-96 sm:right-0 bg-[#0d1128] text-white h-full z-50 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="p-6 flex justify-between items-start">
        <div className="flex flex-col items-center text-center">
          <img
            src={profileicon}
            alt="Profile"
            className="w-[110px] h-[110px] rounded-full border-2 border-gray-500"
          />
          {!token?"":
          <h2 className="text-lg font-bold mt-4">Hi, {truncateName(user?.fullName || "")}</h2>
          }
        </div>
        <button
          onClick={() => setMenuOpen(false)}
          className="text-3xl text-white"
        >
          <IoClose />
        </button>
      </div>

      <ul className="mt-4 px-6 space-y-2 text-[17px] font-medium">
       {!token ?  <h1>regisetr</h1>  :  <li>
          <NavLink to="/user" className="flex items-center gap-3 py-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>
            <FaUser /> Profile
          </NavLink>
        </li> }
        <li>
          <NavLink to="/aboutus" className="flex items-center gap-3 py-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>
            <FaBriefcase /> About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/team" className="flex items-center gap-3 py-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>
            <GrGroup /> Team
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className="flex items-center gap-3 py-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>
            <FaBriefcase /> Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className="flex items-center gap-3 py-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>
            <FaTasks /> Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/careers" className="flex items-center gap-3 py-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>
            <FaBriefcase /> Careers
          </NavLink>
        </li>
        <li>
          <div className="relative">
          
      <div
        className="flex ml-[-2px] items-center gap-3 py-2 hover:text-blue-400 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <MdLanguage size={26}/> <h3 className='text-xl'>{selected}</h3>
      </div>
      {open && (
        <ul className="absolute bg-white text-black mt-2 rounded shadow-md w-40 z-10">
          <li
            onClick={() => handleSelect("Uzbek")}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Uzbek
          </li>
          <li
            onClick={() => handleSelect("English")}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            English
          </li>
          <li
            onClick={() => handleSelect("Russian")}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Russian
          </li>
        </ul>
      )}
    </div>
        </li>
         
       {!token?"":  <li>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 py-2 text-red-500 hover:underline"
          >
            <FaSignOutAlt /> Sign Out
          </button>
        </li> }
      </ul>
    </div>


            </header>
           </>
        );
    };

    export default Header;