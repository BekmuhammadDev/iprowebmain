import React, { useEffect, useState } from 'react';
import { teamMembers } from '../mocks/mock';
import { useTranslation } from "react-i18next";

const Teams = ({ StarsRightImg, CardBg }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeMember, setActiveMember] = useState(teamMembers[0]);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamMembers.length);
      setActiveMember(teamMembers[(activeIndex + 1) % teamMembers.length]);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleMemberClick = (member) => {
    setActiveMember(member);
  };

  return (
    <section className="bg-[#0f1125] overflow-hidden py-16 relative">
      <div className="container mx-auto px-5 xl:px-0">
        {/* Title */}
        <h1
          className="text-[32px] sm:text-[48px] xl:text-[80px] font-black text-white leading-tight text-center md:text-left drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]"
          data-aos="fade-down"
        >
          {t("meetyheteam")}
        </h1>

        {/* Decorative image */}
        <div className="absolute right-0 top-0 hidden xl:block" data-aos="fade-left">
          <img src={StarsRightImg} alt="decor" className="w-[250px] opacity-50" />
        </div>

        {/* Main section */}
        <div className="mt-10 flex flex-col md:flex-row gap-10 items-center justify-between">
          {/* Text content */}
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-white text-base md:text-xl uppercase text-center md:text-left font-semibold tracking-widest">
              {t(activeMember.role)}
            </h3>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[56px] font-black uppercase text-white text-center md:text-left drop-shadow-[0_5px_30px_rgba(0,112,244,0.8)]">
              {t(activeMember.name)}
            </h2>
            <p className="text-white/80 text-xs sm:text-sm lg:text-lg text-center md:text-left font-medium">
              {t(activeMember.description)}
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 mt-6">
              <div className="flex items-center gap-3">
                <span className="text-white text-sm sm:text-base uppercase font-semibold">
                  {t("projects")}:
                </span>
                <span className="text-[#00aaff] text-2xl md:text-4xl font-bold drop-shadow-md">
                  {activeMember.projects}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white text-sm sm:text-base uppercase font-semibold">
                  {t("experience")}:
                </span>
                <span className="text-[#00aaff] text-2xl md:text-4xl font-bold drop-shadow-md">
                  {activeMember.experience}
                </span>
              </div>
            </div>
          </div>

          {/* Image with card */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="relative w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-tr from-[#101426] via-[#0f0f1a] to-[#1d2236] ring-1 ring-blue-600/20">
              <img src={CardBg} alt="Card Background" className="absolute w-full h-full object-cover opacity-30 blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={activeMember.workerImg} alt={activeMember.name} className="w-full h-full object-contain z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="relative z-10 -mt-14 sm:-mt-16 md:-mt-20">
          <div className="overflow-hidden w-full">
            <div className="flex gap-4 sm:gap-6 animate-scroll whitespace-nowrap hover:[animation-play-state:paused] backdrop-blur-md bg-white/10 p-3 sm:p-4 rounded-xl w-max min-w-full shadow-lg border border-white/10">
              {[...teamMembers, ...teamMembers, ...teamMembers].map((member, idx) => (
                <div
                  key={idx}
                  className="relative w-32 sm:w-40 md:w-48 h-48 sm:h-60 md:h-72 rounded-xl overflow-hidden bg-[#0a0f1f] shadow-lg cursor-pointer group shrink-0 ring-1 ring-white/10 hover:ring-blue-500"
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
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 text-white text-xs sm:text-sm md:text-base text-center font-bold z-10">
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
  );
};

export default Teams;
