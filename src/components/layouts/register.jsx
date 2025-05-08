import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Register = ({ IproRegisterLogo, setIsModalOpen, error ,isSignInModalOpen,setIsSignInModalOpen}) => {
  const navigate =useNavigate()
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });
  const [formErrors, setFormErrors] = useState({
    fullName: '',
    username: '',
    password: '',
  });

  const toggleLogin=()=>{
    return setIsSignInModalOpen(!isSignInModalOpen), setIsModalOpen(false)
  }

  useEffect(() => {
    const length = password.length >= 8;
    const uppercase = /[A-Z]/.test(password);
    const number = /\d/.test(password);
    const specialChar = /[^A-Za-z0-9]/.test(password);

    setPasswordValidations({ length, uppercase, number, specialChar });
  }, [password]);

  const register = async () => {
    if (!fullName || !username || !password) {
      setFormErrors({
        fullName: !fullName ? "Full Name is required" : "",
        username: !username ? "Username is required" : "",
        password: !password ? "Password is required" : "",
      });
      return;
    }

    if (!Object.values(passwordValidations).every(Boolean)) {
      alert("Parol talablariga javob bermaydi");
      return;
    }

    const data = {
      fullName: fullName.trim(),
      username: username.trim(),
      password: password,
      countryName: "UZB"
    };

    try {
      setLoading(true);
      const res = await axios.post('https://ipro.javohir-dev.uz/api/auth/register', data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if ([200, 201, 204].includes(res.status)) {
        alert("Ro'yxatdan muvaffaqiyatli o'tildi");
        setIsModalOpen(false);
        window.location.reload()
        localStorage.setItem("token", res?.data?.data);
        navigate("/user")
      }
    } catch (err) {
      if (err.response) {
        console.log("Server javobi:", err.response.data);
        alert("Royxatdan otishda xatolik roybardi ");
      } else {
        alert("Royxatdan otishda xatolik");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center h-[100vh] px-5 justify-center bg-black bg-opacity-50">
      <div className='flex rounded-md justify-between bg-[#16182B] items-center sm:px-20'>
        <div className='hidden md:flex'>
          <img src={IproRegisterLogo} alt="Register Logo" />
        </div>
        <div className="p-6 rounded-lg w-full sm:w-[400px] relative">
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
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {formErrors.fullName && <p className="text-red-500 text-sm mt-[-13px]">{formErrors.fullName}</p>}

          <input
            className="w-full px-5 h-[49px] my-4 border rounded bg-gray-800 border-[#0086EE] text-white"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {formErrors.username && <p className="text-red-500 text-sm mt-[-13px]">{formErrors.username}</p>}

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

          {/* Password validation feedback */}
          <div className="text-sm mt-2 space-y-1">
            <p className={`${passwordValidations.length ? 'text-green-500' : 'text-red-500'}`}>
              • Kamida 8 ta belgi va harflardan iborat bolsin
            </p>
            <p className={`${passwordValidations.uppercase ? 'text-green-500' : 'text-red-500'}`}>
              • Kamida 1 ta katta harf (A-Z)
            </p>
            <p className={`${passwordValidations.number ? 'text-green-500' : 'text-red-500'}`}>
              • Kamida 1 ta raqam (0-9)
            </p>
            <p className={`${passwordValidations.specialChar ? 'text-green-500' : 'text-red-500'}`}>
              • Kamida 1 ta maxsus belgi (@, #, $, ...)
            </p>
          </div>

          <button
            className="w-full bg-white text-base font-semibold drop-shadow-[0_5px_15px_rgba(0,112,244,0.8)] text-blue-600 p-2 mt-4 rounded disabled:opacity-50"
            onClick={register}
            disabled={loading}
          >
            {loading ? 'PROCESSING...' : 'CONTINUE'}
          </button>

          <button
            className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold p-2 mt-4 rounded drop-shadow-[0_5px_15px_rgba(0,112,244,0.8)] hover:bg-gray-100 transition"
            onClick={() => window.location.href = 'https://ipro.javohir-dev.uz/oauth2/authorization/google'}
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <p className="text-white text-center mt-2">
            Have an account? <span className="text-blue-400 cursor-pointer" onClick={toggleLogin}>Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
