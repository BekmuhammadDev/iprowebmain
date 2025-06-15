import axios from "axios";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Login = ({
  IproRegisterLogo,
  setIsSignInModalOpen,
  showPassword,
  setShowPassword,
  setIsModalOpen,
}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

const login = async () => {
  if (!username || !password) {
    if (!username) setUsernameError("Email kiritilmadi");
    if (!password) setPasswordError("Parol kiritilmadi");
    return;
  }

  setUsernameError("");
  setPasswordError("");

  try {
    const data = { username, password };
    const res = await axios.post(
      "https://ipro.javohir-dev.uz/api/auth/login",
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if ([200, 201, 204].includes(res.status)) {
        const token = res?.data?.data?.resToken?.body;  // tokenni olamiz
      // Tokenni localStorage ga saqlash (token joyini backendga qarab tekshiring)
      localStorage.setItem("token", token);

      setIsSignInModalOpen(false);
      navigate("/user");
    }
  } catch (err) {
    const message = err.response?.data?.message || err.message;

    if (message.includes("OAuth")) {
      alert("Bu email OAuth orqali ro'yxatdan o'tgan. Iltimos, Google bilan davom eting.");
      window.location.href = "https://ipro.javohir-dev.uz/oauth2/authorization/google";
      return;
    }

    if (err.response?.status === 401) {
      alert("Login yoki parol noto‘g‘ri!");
    } else {
      alert("Login muvaffaqiyatsiz: " + message);
    }
  }
};


  return (
    <div className="fixed inset-0 flex items-center h-[100vh] px-5 justify-center bg-black bg-opacity-50 z-50">
      <div className="flex rounded-md justify-between bg-[#16182B] items-center sm:px-20">
        <div className="hidden md:flex">
          <img src={IproRegisterLogo} alt="logo" />
        </div>
        <div className="p-6 rounded-lg w-full sm:w-[400px] relative">
          <button
            className="absolute -top-14 -right-5 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg"
            onClick={() => setIsSignInModalOpen(false)}
          >
            <IoMdClose fontSize={28} />
          </button>
          <h2 className="text-white text-[40px] font-bold text-center">Sign In</h2>

          <input
            className="w-full px-5 h-[49px] my-4 border rounded bg-gray-800 border-[#0086EE] text-white"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <p className="text-red-500 mt-[-13px]">{usernameError}</p>}

          <div className="relative">
            <input
              className="w-full px-5 h-[49px] my-2 border rounded bg-gray-800 border-[#0086EE] text-white pr-10"
              type={showPassword ? "text" : "password"}
              placeholder="Parol"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="text-red-500 mt-[-5px]">{passwordError}</p>}
            <button
              type="button"
              className="absolute top-[10%] right-4 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
            </button>
          </div>

          <div className="text-right text-sm text-blue-400 cursor-pointer mb-4 hover:underline">
            Forgot password?
          </div>

          <button
            className="w-full bg-white text-base font-semibold drop-shadow-[0_5px_15px_rgba(0,112,244,0.8)] text-blue-600 p-2 rounded"
            onClick={login}
          >
            CONTINUE
          </button>

          <div className="flex items-center gap-2 my-4">
            <div className="flex-grow h-[1px] bg-gray-600" />
            <span className="text-white text-sm">Or, continue with</span>
            <div className="flex-grow h-[1px] bg-gray-600" />
          </div>

          

          <p className="text-white text-center mt-2">
            New to iPro?{" "}
            <span
              className="text-blue-400 cursor-pointer"
              onClick={() => {
                setIsSignInModalOpen(false);
                setIsModalOpen(true);
              }}
            >
              Create an account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
