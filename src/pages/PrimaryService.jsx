import React from 'react'
import { motion } from "framer-motion";

const portfolioData = [
  {
    id: 1,
    img: 'https://picsum.photos/200/300?random=1',
    title: 'China House',
    style: 'col-span-2 h-[243px]',
  },
  {
    id: 2,
    img: 'https://picsum.photos/200/300?random=2',
    title: 'China House',
    style: ' md:h-[243px] h-[198px]',
  },
  {
    id: 3,
    img: 'https://picsum.photos/200/300?random=3',
    title: 'China House',
    style: ' md:h-[488px] h-[198px]',
  },
  {
    id: 4,
    img: 'https://picsum.photos/200/300?random=4',
    title: 'China House',
    style: 'col-span-2 md:h-[500px] h-[243px]',
  },
  {
    id: 5,
    img: 'https://picsum.photos/200/300?random=5',
    title: 'China House',
    style: 'h-[258px]',
  },
  {
    id: 6,
    img: 'https://picsum.photos/200/300?random=6',
    title: 'China House',
    style: 'h-[258px]',
  },
  {
    id: 7,
    img: 'https://picsum.photos/200/300?random=7',
    title: 'China House',
    style: 'h-[258px] hidden md:flex',
  },
];
const PrimaryService = ({StarsLeftImg,t}) => {
  return (
      <section className="pt-10 px-6 md:pt-20 overflow-hidden bg-gradient-to-b from-[#0a0a23] to-[#121232]">
        <div className="relative">
          <img
            className="absolute top-[500px] left-0 w-[200px] opacity-50 animate-pulse"
            src={StarsLeftImg}
            alt=""
          />
        </div>

        <div className="container mx-auto mb-10 max-w-[1300px]">
          <motion.h1
            className="text-white px-4 font-black text-5xl text-center md:text-left md:text-[80px] leading-tight drop-shadow-[0_5px_30px_rgba(0,112,244,0.9)]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            {t("services")}
          </motion.h1>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12 px-2">
            {portfolioData.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative flex flex-col h-[120px] md:h-[320px] w-full md:flex-[0.25] overflow-hidden rounded-2xl cursor-pointer group hover:flex-[0.9] hover:z-20 transition-all duration-700 ease-in-out shadow-2xl hover:shadow-blue-500/50"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out p-5">
                  <p className="text-white text-lg font-bold text-center drop-shadow-lg">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default PrimaryService