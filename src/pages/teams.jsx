import React, { useEffect, useState } from 'react'
import { teamMembers } from '../mocks/mock';
import { useTranslation } from "react-i18next";

const Teams = ({StarsRightImg,CardBg}) => {
     const [activeIndex, setActiveIndex] = useState(0);
        const { t } = useTranslation();
    
     useEffect(() => {
            const interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
            }, 2000); // Har 2 sekundda almashinadi
    
            return () => clearInterval(interval);
        }, []);
    
        const [activeMember, setActiveMember] = useState(teamMembers[0]);
    
        const handleMemberClick = (member) => {
            setActiveMember(member);
        };
    
  return (
    <section className="bg-[#16182B]  overflow-hidden">
      <div className="container mx-auto px-5 xl:px-0">
        <h1 className="text-white text-[32px] sm:text-[48px] xl:text-[80px] font-black leading-[1.1] text-center md:text-left drop-shadow-[0_5px_10px_rgba(0,112,244,0.8)]"
            data-aos="fade-down"
            data-aos-duration="1200">
          {t("meetyheteam")}
        </h1>
    
        <div className="relative hidden xl:block" data-aos="fade-left" data-aos-duration="1000">
          <img className="absolute right-0 top-0" src={StarsRightImg} alt="" />
        </div>
    
        <div className="mt-10 flex flex-col md:flex-row items-center gap-10 justify-between"
             data-aos="fade-up"
             data-aos-duration="1200">
          {/* Matn qismi */}
          <div className="w-full md:w-1/2 z-10" data-aos="fade-right" data-aos-duration="1300">
            <h1 className="text-white text-sm sm:text-base lg:text-2xl font-semibold uppercase text-center md:text-left">
              {t(activeMember.role)}
            </h1>
            <h1 className="text-white text-[24px] sm:text-[32px] lg:text-[56px] font-black uppercase drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)] text-center md:text-left">
              {t(activeMember.name)}
            </h1>
            <h1 className="text-white text-xs sm:text-sm lg:text-2xl font-semibold uppercase text-center md:text-left">
              {t(activeMember.description)}
            </h1>
    
            {/* Stats */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-5 sm:gap-10 mt-8">
              <div className="flex items-center gap-3">
                <h1 className="text-white text-base md:text-xl font-semibold uppercase">
                  {t("projects")}:
                </h1>
                <h2 className="text-white text-2xl md:text-5xl font-bold drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                  {t(activeMember.projects)}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <h1 className="text-white text-base md:text-xl font-semibold uppercase">
                  {t("experience")}:
                </h1>
                <h2 className="text-white text-2xl md:text-5xl font-bold drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                  {t(activeMember.experience)}
                </h2>
              </div>
            </div>
          </div>
    
          {/* Rasm qismi */}
          <div className="w-full md:w-1/2 flex justify-center" data-aos="zoom-in-up" data-aos-duration="1400">
            <div className="relative w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl">
              <img src={CardBg} alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <img src={activeMember.workerImg} alt="Worker" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
    
        {/* Karusel qismi */}
        <div className="relative z-2 -mt-14 sm:-mt-16 md:-mt-20">
      <div className="overflow-hidden w-full">
        <div className="flex gap-4 sm:gap-6 animate-scroll whitespace-nowrap hover:[animation-play-state:paused] backdrop-blur-sm bg-white/10 p-2 sm:p-4 rounded-xl w-max min-w-full">
          {[...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={index}
              className="relative w-32 sm:w-40 md:w-48 h-48 sm:h-60 md:h-72 rounded-lg overflow-hidden bg-[#0a0f1f] cursor-pointer group shadow-lg shrink-0"
              onClick={() => handleMemberClick(member)}
            >
              <img
                src={member.img}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <img
                src={member.hoverImg}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-white text-xs sm:text-sm md:text-base text-center font-bold group-hover:font-extrabold z-10">
                {member.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
    
          @media (max-width: 640px) {
            .animate-scroll {
              animation: scroll 45s linear infinite;
            }
          }
        `}
      </style>
    </div>
    
    
      </div>
              </section>
  )
}

export default Teams