import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../connection/firebase';

const Register = ({ IproRegisterLogo, setIsModalOpen, error, isSignInModalOpen, setIsSignInModalOpen }) => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [googleUser, setGoogleUser] = useState(null);
  const [registerpage,setRegisterpae]=useState(false)
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

  useEffect(() => {
    const length = password.length >= 8;
    const uppercase = /[A-Z]/.test(password);
    const number = /\d/.test(password);
    const specialChar = /[^A-Za-z0-9]/.test(password);
    setPasswordValidations({ length, uppercase, number, specialChar });
  }, [password]);

  const toggleLogin = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
    setIsModalOpen(false);
  };

  const validateFields = () => {
    const errors = {
      fullName: !fullName ? "Full Name is required" : '',
      username: !username ? "Username is required" : '',
      password: !password ? "Password is required" : '',
    };
    setFormErrors(errors);
    return !Object.values(errors).some(Boolean);
  };

  const isPasswordValid = () => Object.values(passwordValidations).every(Boolean);

  const register = async () => {
    if (!validateFields()) return;
    if (!isPasswordValid()) return alert("Parol talablariga javob bermaydi");

    const data = {
      fullName: fullName.trim(),
      username: username.trim(),
      password,
      countryName: "UZB"
    };

    try {
      setLoading(true);
      const res = await axios.post('https://ipro.javohir-dev.uz/api/auth/register', data);
      if ([200, 201, 204].includes(res.status)) {
        alert("Ro'yxatdan muvaffaqiyatli o'tildi");
        localStorage.setItem("token", res?.data?.data);
        setIsModalOpen(false);
        navigate("/user");
      }
    } catch (err) {
      console.log("Xatolik:", err);
      alert("Ro'yxatdan o'tishda xatolik");
    } finally {
      setLoading(false);
    }
  };

  const googleRegister = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setGoogleUser({
        fullName: result.user.displayName,
        username: result.user.email,
      });
      setShowPasswordModal(true);
      setRegisterpae(false)
    } catch {
      alert("Google orqali ro'yxatdan o'tishda xatolik");
    }
  };

  const handleGooglePasswordSubmit = async () => {
    if (password !== confirmPassword) return alert("Parollar mos emas");
    if (!isPasswordValid()) return alert("Parol talablariga javob bermaydi");

    const data = {
      fullName: googleUser.fullName,
      username: googleUser.username,
      password,
      countryName: "UZB"
    };

    try {
      setLoading(true);
      const res = await axios.post('https://ipro.javohir-dev.uz/api/auth/register', data);
      if ([200, 201].includes(res.status)) {
        alert("Google orqali ro'yxatdan o'tildi");
        localStorage.setItem("token", res.data.data);
        setShowPasswordModal(false);
        setIsModalOpen(false);
        navigate("/user");
      }
    } catch {
      alert("Ro'yxatdan o'tishda xatolik");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center h-screen px-5 justify-center bg-black bg-opacity-50 z-50">
      <div className="flex rounded-md bg-[#16182B] sm:px-20 items-center">
        <div className="hidden md:flex">
          <img src={IproRegisterLogo} alt="Register Logo" />
        </div>

        <div className="p-6 w-full sm:w-[400px] relative text-white">
          <button
            className="absolute -top-14 -right-5 w-8 h-8 flex items-center justify-center rounded-full"
            onClick={() => setIsModalOpen(false)}
          >
            <IoMdClose fontSize={40} />
          </button>

          <h2 className="text-[40px] font-bold text-center mb-2">Register</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}

          <input
            className="w-full px-5 h-[49px] my-2 border rounded bg-gray-800 border-[#0086EE] text-white"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {formErrors.fullName && <p className="text-red-500 text-sm">{formErrors.fullName}</p>}

          <input
            className="w-full px-5 h-[49px] my-2 border rounded bg-gray-800 border-[#0086EE] text-white"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {formErrors.username && <p className="text-red-500 text-sm">{formErrors.username}</p>}

          <div className="relative my-2">
            <input
              className="w-full px-5 h-[49px] border rounded bg-gray-800 border-[#0086EE] text-white pr-10"
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

          <div className="text-sm mt-2 space-y-1">
            <p className={passwordValidations.length ? 'text-green-500' : 'text-red-500'}>• Kamida 8 ta belgi</p>
            <p className={passwordValidations.uppercase ? 'text-green-500' : 'text-red-500'}>• Kamida 1 ta katta harf</p>
            <p className={passwordValidations.number ? 'text-green-500' : 'text-red-500'}>• Kamida 1 ta raqam</p>
            <p className={passwordValidations.specialChar ? 'text-green-500' : 'text-red-500'}>• Kamida 1 ta maxsus belgi</p>
          </div>

          <button
            className="w-full bg-white text-blue-600 font-semibold py-2 mt-4 rounded disabled:opacity-50"
            onClick={register}
            disabled={loading}
          >
            {loading ? 'PROCESSING...' : 'CONTINUE'}
          </button>

          <button
            className="w-full bg-red-600 text-white py-2 mt-4 rounded hover:bg-red-700"
            onClick={googleRegister}
          >
            Google orqali ro'yxatdan o'tish
          </button>

          <p className="text-center mt-2">
            Have an account? <span className="text-blue-400 cursor-pointer" onClick={toggleLogin}>Sign In</span>
          </p>
        </div>
      </div>

      {showPasswordModal && (
        <div className="flex rounded-md bg-[#16182B] sm:px-20 items-center">
        <div className="hidden md:flex">
          <img src={IproRegisterLogo} alt="Register Logo" />
        </div>

        <div className="p-6 w-full sm:w-[400px] relative text-white">
          <button
            className="absolute -top-14 -right-5 w-8 h-8 flex items-center justify-center rounded-full"
            onClick={() => setIsModalOpen(false)}
          >
            <IoMdClose fontSize={40} />
          </button>

          <h2 className="text-[40px] font-bold text-center mb-2">Create Password</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}

        
          <div className="relative my-2">
            <input
              className="w-full px-5 h-[49px] border rounded bg-gray-800 border-[#0086EE] text-white pr-10"
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

            <div className="relative my-3">
            <input
              className="w-full px-5 h-[49px] border rounded bg-gray-800 border-[#0086EE] text-white pr-10"
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

          <div className="text-sm mt-2 space-y-1">
            <p className={passwordValidations.length ? 'text-green-500' : 'text-red-500'}>• Kamida 8 ta belgi</p>
            <p className={passwordValidations.uppercase ? 'text-green-500' : 'text-red-500'}>• Kamida 1 ta katta harf</p>
            <p className={passwordValidations.number ? 'text-green-500' : 'text-red-500'}>• Kamida 1 ta raqam</p>
            <p className={passwordValidations.specialChar ? 'text-green-500' : 'text-red-500'}>• Kamida 1 ta maxsus belgi</p>
          </div>

          <button
            className="w-full bg-white text-blue-600 font-semibold py-2 mt-4 rounded disabled:opacity-50"
            onClick={register}
            disabled={loading}
          >
            {loading ? 'PROCESSING...' : 'CONTINUE'}
          </button>
          <p className="text-center mt-2">
            Have an account? <span className="text-blue-400 cursor-pointer" onClick={handleGooglePasswordSubmit}>Sign In</span>
          </p>
        </div>
      </div>
      )}
    </div>
  );
};

export default Register;
