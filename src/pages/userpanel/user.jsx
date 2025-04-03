import { useState } from "react";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/Logo.svg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbMoneybag } from "react-icons/tb";
import { FaClipboardList } from "react-icons/fa";
import { IoClose, IoEye, IoEyeOff } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import Request from "./request";
import Orders from "./orders";
import Layout from "./layout";
import { FaCamera } from "react-icons/fa";
import Logouser from "../../assets/icons/userpanellog.svg"

const AdminDashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const [profilePic, setProfilePic] = useState(null);
  const [hover, setHover] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  // Hozir qaysi sahifa ochilganligini saqlaydi
  const [activePage, setActivePage] = useState("orders"); // Boshlang'ich holat Orders

  return (
    <div className="flex h-screen text-white sticky">
      {/* Sidebar */}
      <div className="w-[365px] h-full bg-[#292d32] p-6 text-white">
        <NavLink to={"/"} >
          <img src={logo} alt="Logo" className="text-xl font-bold mb-14 mt-10 ml-10" />
        </NavLink>
        <p className="text-2xl font-semibold mb-4 ml-10">John Doe</p>
        <ul className="ml-10">
          <button
            className={`flex items-center gap-2 p-2 rounded-lg w-full ${activePage === "orders" ? "text-blue-500" : "hover:bg-gray-700"}`}
            onClick={() => setActivePage("orders")}
          >
            <FaShoppingCart /> Orders
          </button>

          <button
            className={`flex items-center gap-2 p-2 rounded-lg w-full ${activePage === "requests" ? "text-blue-500" : "hover:bg-gray-700"}`}
            onClick={() => setActivePage("requests")}
          >
            <FaClipboardList /> My requests
          </button>

          <button
            className={`flex items-center gap-2 p-2 rounded-lg w-full ${activePage === "layout" ? "text-blue-500" : "hover:bg-gray-700"}`}
            onClick={() => setActivePage("layout")}
          >
            <LuLayoutDashboard /> Layout
          </button>

        </ul>
      </div>

      {/* Main Content */}
      <div className="w-auto flex-1 bg-[#323232] h-full text-white">
        {/* Sticky Navbar */}
        <div className=" top-0 bg-[#292d32] p-4 shadow-md flex justify-end items-center z-10 gap-10">
          <div className="flex justify-center items-center space-x-4">
            <IoMdNotificationsOutline className="w-[40px] h-[40px] border border-white rounded-full p-2 cursor-pointer" />
            <TbMoneybag className="w-[40px] h-[40px] border border-white rounded-full p-2 cursor-pointer" />
          </div>
          <div className="relative gap-4 flex">
            <button className="flex items-center space-x-2 focus:outline-none" onClick={() => setDropdownOpen(!dropdownOpen)}>
              John Doe <IoMdArrowDropdown />
            </button>
            <div
              className="relative w-12 h-12 rounded-full overflow-hidden cursor-pointer"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {profilePic ? (
                <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <FaUserCircle className="w-full h-full text-gray-400" />
              )}
              {hover && (
                <label className="absolute  inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer">
                  <FaCamera className="text-white text-lg" />
                  <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
              )}
            </div>


            {dropdownOpen && (
              <div className="absolute top-10 right-10 mt-2 bg-gray-800 p-2 rounded-lg shadow-lg w-32">
                <button
                  className="block w-full text-left p-2 hover:bg-gray-700"
                  onClick={() => {
                    setDropdownOpen(false); // Dropdown yopiladi
                    setModalOpen(true); // Modal ochiladi
                  }}
                >
                  Edit profile
                </button>
                <NavLink to={"/"}>
                  <button className="block w-full text-left mt-2 p-2 bg-red-600 rounded-md">
                    Sign out
                  </button>
                </NavLink>
              </div>
            )}


          </div>
        </div>

        {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
            <div className="bg-[#292d32] p-10 rounded-lg shadow-lg w-[763px]">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-semibold text-white">Profile</h2>
                <button className="text-3xl" onClick={() => setModalOpen(false)}>
                  <IoClose />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <label>
                  <h1>Full name</h1>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 mb-3 bg-gray-700 rounded-md "
                    autoComplete="off"
                  />
                </label>
                <label>
                  <h1>Phone</h1>
                  <input
                    type="number"
                    placeholder="Number"
                    className="w-full p-3 mb-3 bg-gray-700 rounded-md"
                    autoComplete="off"
                  />
                </label>
                {/* Password Input */}
                <label className="relative">
                  <h1>Password</h1>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="New Password"
                    className="w-full p-3 pr-10 bg-gray-700 rounded-md"
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex top-6 items-center text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
                  </button>
                </label>
                {/* Repeat Password Input */}
                <label className="relative">
                  <h1>Repeat password</h1>
                  <input
                    type={showRepeatPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="w-full p-3 pr-10 bg-gray-700 autofill:bg-gray-700 rounded-md"
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 top-6 flex items-center text-white"
                    onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                  >
                    {showRepeatPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
                  </button>
                </label>
              </div>
              <div className="flex justify-center mt-8">
                <button className="w-full py-3 bg-blue-500 rounded-md">Edit Profile</button>
              </div>
            </div>
          </div>
        )}

        {/* Sahifa tarkibi */}
        <div className="p-6 ">
          {activePage === "orders" && <Orders />}
          {activePage === "requests" && <Request />}
          {activePage === "layout" && <Layout />}
        </div>

        <div className="absolute top-[300px] right-0 z-[1]">
          <img src={Logouser} alt="" />
        </div>

      </div>



    </div>
  );
};

export default AdminDashboard;
