import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Login = ({
  IproRegisterLogo,
  setIsSignInModalOpen,
  showPassword,
  setShowPassword,
  setIsModalOpen,
}) => {

  return (
      <div
          className="fixed inset-0 flex items-center justify-center h-screen px-2 bg-black bg-opacity-50 backdrop-blur-2xl z-50">
        <div
            className="w-full max-w-[95%] sm:max-w-[500px] md:max-w-4xl bg-[#0D111C] rounded-lg py-8 flex flex-col md:flex-row relative overflow-hidden">

          {/* Logo faqat md va undan kattaroqda ko‘rinadi */}
          <div className="hidden md:flex flex-shrink-0">
            <img src={IproRegisterLogo} alt="logo" className="max-h-[400px] object-contain"/>
          </div>

          {/* Form qismi */}
          <div className="p-6 sm:px-8 md:px-12 w-full relative text-white">
            <button
                className="absolute -top-4 right-4 text-gray-400 w-8 h-8 flex items-center justify-center rounded-full shadow-lg hover:text-red-500"
                onClick={() => setIsSignInModalOpen(false)}
            >
              <IoMdClose fontSize={28}/>
            </button>

            <h2 className="text-[32px] md:text-[40px] font-bold text-center mb-4">Sign In</h2>

            <input
                className="w-full px-5 h-[49px] my-3 border rounded bg-[#1F2335] border-[#00A3FF] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#00A3FF]"
                placeholder="Email"
            />

            <div className="relative">
              <input
                  className="w-full px-5 h-[49px] my-2 border rounded bg-[#1F2335] border-[#00A3FF] text-white pr-10 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#00A3FF]"
                  type={showPassword ? "text" : "password"}
                  placeholder="Parol"
              />
              <button
                  type="button"
                  className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-300"
                  onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible size={22}/> : <AiOutlineEye size={22}/>}
              </button>
            </div>

            <button
                className="w-full mt-5 bg-gradient-to-r from-[#00C6FB] to-[#0086EE] text-white font-semibold py-2 rounded hover:opacity-90 transition-all duration-200"
            >
              CONTINUE
            </button>

            <div className="flex items-center gap-2 my-5">
              <div className="flex-grow h-[1px] bg-gray-600"/>
              <span className="text-white text-sm">Or, continue with</span>
              <div className="flex-grow h-[1px] bg-gray-600"/>
            </div>

            <p className="text-white text-center mt-2">
              New to iPro?{" "}
              <span
                  className="text-blue-400 cursor-pointer hover:underline"
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
