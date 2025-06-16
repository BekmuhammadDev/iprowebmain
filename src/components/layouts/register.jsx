import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../connection/firebase';

const Register = ({ IproRegisterLogo, setIsModalOpen, error, isSignInModalOpen, setIsSignInModalOpen }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: '', username: '', password: '' });  // confirmPassword olib tashlandi
  const [formErrors, setFormErrors] = useState({});
  const [passwordValidations, setPasswordValidations] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [googleUser, setGoogleUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  useEffect(() => {
    const { password } = form;
    setPasswordValidations({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[^A-Za-z0-9]/.test(password),
    });
  }, [form.password]);

  const isPasswordValid = () => Object.values(passwordValidations).every(Boolean);

  const validateForm = (isGoogle = false) => {
    const errors = {};
    if (!isGoogle) {
      if (!form.fullName.trim()) errors.fullName = "Full Name is required";
      if (!form.username.trim()) errors.username = "Username is required";
    }
    if (!form.password) errors.password = "Password is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const register = async (isGoogle = false) => {
    if (!validateForm(isGoogle)) return;
    if (!isPasswordValid()) return alert("Parol talablariga javob bermaydi");
    // Parolni tasdiqlash tekshiruvi olib tashlandi

    const payload = {
      fullName: isGoogle ? googleUser.fullName : form.fullName.trim(),
      username: isGoogle ? googleUser.username : form.username.trim(),
      password: form.password,
      countryName: 'UZB',
    };

    try {
      setLoading(true);
      const res = await axios.post('https://ipro.javohir-dev.uz/api/auth/register', payload);
      if ([200, 201].includes(res.status)) {
        alert("Ro'yxatdan o'tildi");
        localStorage.setItem("token", res.data?.data);
        setShowPasswordModal(false);
        setIsModalOpen(false);
        navigate('/user');
      }
    } catch (err) {
      console.error("Xatolik:", err);
      alert("Bunday Email avval royxatdan otgan");
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
    } catch {
      alert("Google orqali ro'yxatdan o'tishda xatolik");
    }
  };

  const toggleLogin = () => {
    setIsModalOpen(false);
    setIsSignInModalOpen(true);
  };

  const PasswordValidationList = () => (
    <div className="text-sm mt-2 space-y-1">
      <p className={passwordValidations.length ? 'text-green-500' : 'text-red-500'}>• Kamida 8 ta belgi</p>
      <p className={passwordValidations.uppercase ? 'text-green-500' : 'text-red-500'}>• Kamida 1 ta katta harf</p>
      <p className={passwordValidations.number ? 'text-green-500' : 'text-red-500'}>• Kamida 1 ta raqam</p>
      <p className={passwordValidations.specialChar ? 'text-green-500' : 'text-red-500'}>• Kamida 1 ta maxsus belgi</p>
    </div>
  );

  const FormBody = ({ isGoogle = false }) => (
    <>
      {!isGoogle && (
        <>
          <input
            className="w-full px-5 h-[49px] my-2 border rounded bg-gray-800 border-[#0086EE] text-white"
            placeholder="Full name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
          {formErrors.fullName && <p className="text-red-500 text-sm">{formErrors.fullName}</p>}

          <input
            className="w-full px-5 h-[49px] my-2 border rounded bg-gray-800 border-[#0086EE] text-white"
            placeholder="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          {formErrors.username && <p className="text-red-500 text-sm">{formErrors.username}</p>}
        </>
      )}

      <div className="relative my-2">
        <input
          className="w-full px-5 h-[49px] border rounded bg-gray-800 border-[#0086EE] text-white pr-10"
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button
          type="button"
          className="absolute top-[10%] right-4 text-gray-400"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
        </button>
      </div>

      {/* Confirm password input olib tashlandi */}

      <PasswordValidationList />

      <button
        className="w-full bg-white text-blue-600 font-semibold py-2 mt-4 rounded disabled:opacity-50"
        onClick={() => register(isGoogle)}
        disabled={loading}
      >
        {loading ? 'PROCESSING...' : 'CONTINUE'}
      </button>
    </>
  );

  return (
    <div className="fixed inset-0 flex items-center h-screen px-5 justify-center bg-black bg-opacity-50 z-50">
      <div className="flex rounded-md bg-[#16182B] sm:px-20 items-center">
        <div className="hidden md:flex">
          <img src={IproRegisterLogo} alt="Register Logo" />
        </div>

        <div className="p-6 w-full sm:w-[400px] relative text-white">
          <button
            className="absolute top-2 -right-14 w-8 h-8 flex items-center justify-center rounded-full"
            onClick={() => setIsModalOpen(false)}
          >
            <IoMdClose fontSize={40} />
          </button>

          <h2 className="text-[40px] font-bold text-center mb-2">
            {showPasswordModal ? 'Create Password' : 'Register'}
          </h2>
          {error && <p className="text-red-500 text-center">{error}</p>}

          {FormBody({ isGoogle: showPasswordModal })}

          {!showPasswordModal && (
            <>
              <button
                onClick={googleRegister}
                className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold p-2 mt-4 rounded drop-shadow-[0_5px_15px_rgba(0,112,244,0.8)] hover:bg-gray-100 transition"
              >
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <p className="text-center mt-2">
                Have an account?{' '}
                <span className="text-blue-400 cursor-pointer" onClick={toggleLogin}>
                  Sign In
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
