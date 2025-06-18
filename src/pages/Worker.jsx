import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

export const Worker = () => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <section className="relative z-10 bg-gradient-to-br from-[#0A0F1F] via-[#0E1628] to-[#111B30] py-32 px-4">
      <div className="container mx-auto max-w-4xl">
      <motion.h2
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 text-[42px] md:text-[64px] font-extrabold leading-[1.2] drop-shadow-[0_5px_30px_rgba(0,112,244,0.8)] mb-12"
>
  Bizning Jamoamizga Qo‘shiling
</motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-center text-gray-300 text-lg mb-10 max-w-2xl mx-auto"
        >
          Biz o‘z ishining ustasi bo‘lgan, mas'uliyatli va ijodiy fikrlaydigan yangi a’zolarni qidirmoqdamiz!
        </motion.p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
             {
              label: "F.I.O",
              type: "url",
              placeholder: "To'liq ism familya",
              delay: 0.4,
            },
            {
              label: "Tel raqam",
              type: "number",
              placeholder: "+9989901234567",
              delay: 0.5,
            },
            {
              label: "Yo‘nalish",
              type: "text",
              placeholder: "Frontend, Backend, Design...",
              delay: 0.2,
            },
            {
              label: "Daraja",
              type: "select",
              options: ["Junior", "Middle", "Senior"],
              delay: 0.3,
            },
            {
              label: "Portfolio URL",
              type: "url",
              placeholder: "https://portfolio.com",
              delay: 0.4,
            },
            {
              label: "Narx (so‘m)",
              type: "number",
              placeholder: "1000000",
              delay: 0.5,
            },
          ].map((field, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: field.delay }}
              viewport={{ once: true }}
            >
              <label className="block mb-2 text-sm font-medium text-gray-300">
                {field.label}
              </label>
              {field.type === "select" ? (
                <select className="w-full bg-[#11152A] border border-blue-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {field.options.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-[#11152A] border border-blue-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            </motion.div>
          ))}
        </form>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <button className="px-10 py-3 text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg shadow-[0_0_25px_5px_rgba(0,122,255,0.5)] hover:shadow-[0_0_35px_10px_rgba(0,122,255,0.7)] hover:scale-105 transition-all duration-300">
            Yuborish
          </button>
        </motion.div>
      </div>
    </section>
  );
};
