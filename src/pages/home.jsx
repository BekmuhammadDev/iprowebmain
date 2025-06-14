import React from 'react';
import { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Video from '../assets/video/ipro.mp4';
import Logomarqee from '../components/ui/logomarquee';
import Logocloud from '../assets/images/iPro11.png';
import Achievements from '../components/ui/achivements';
import TestimonialSlider from '../components/ui/scrollcardworkers';
import CardBg from '../assets/images/cardbg.png';
import { teamMembers } from '../mocks/mock';
import { portfolioData } from '../mocks/mock';
import { faqs } from '../mocks/mock';
import StarsRightImg from "../assets/images/starsright.png"
import StarsLeftImg from "../assets/images/starsleft.png"
import { IoMdClose } from "react-icons/io";
import IproIMage from "../assets/images/iproLogoRegister.png"
import { NavLink } from 'react-router-dom';
import { FaQuestion } from "react-icons/fa";

import ContactWithMap from '../components/ui/contactwithmap';
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';
import ScrollProgressBar from '../components/progressLine/progressline';
import { useTranslation } from "react-i18next";
import "../i18";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Primary from './primary';
import Scroller from './scroller';
import PortfolioSection from './portfolyoSection';


gsap.registerPlugin(ScrollTrigger);

const aboutus = () => {

    const { t } = useTranslation();

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // /////////////////////
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

  
    const [openIndex, setOpenIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIssue, setSelectedIssue] = useState('');
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const openModal = (issue) => {
        setSelectedIssue(issue);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedIssue('');
    }

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

    const handleCardClick = (e) => {
        e.preventDefault();

        // Scroll qilish
        const element = document.getElementById('question');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }

    };

    return (
        <>
        
            <Header />

            <ScrollProgressBar />

            <Primary t={t} handleCardClick={handleCardClick} Video={Video} />

            <Scroller t={t} Video={Video} Logocloud={Logocloud}/>

            <section className=" overflow-hidden ">    
                <div
                    className=" container mx-auto md:max-w-none 2xl:max-w-none"
                    data-aos="flip-up"
                    data-aos-duration="1200"
                >
                    <TestimonialSlider />
                </div>
            </section>

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


          <PortfolioSection t={t} />
           
            
            <section className="pt-10 px-10 md:pt-20 overflow-hidden">
  <div className="relative top-[600px]">
    <img className="absolute" src={StarsLeftImg} alt="" />
  </div>

  <div className="container mx-auto">
    <h1
      className="text-white px-4 font-black text-5xl text-center md:text-left md:text-[100px] drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      {t("services")}
    </h1>

    <div
      className="flex flex-col md:flex-row justify-center items-center gap-4  p-10"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {portfolioData.map((item, index) => (
        <div
          key={item.id}
          className="relative flex flex-col h-[105px] md:h-[300px] w-full md:flex-[0.2] overflow-hidden rounded-lg cursor-pointer transition-all duration-700 ease-in-out group hover:flex-[0.8] md:hover:h-[300px] sm:hover:h-auto"
          data-aos="zoom-in"
          data-aos-delay={index * 100}
          data-aos-duration="1000"
        >
          {/* Rasm */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
          />

          {/* Overlay Effekti */}
          <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out p-5">
            <p className="text-white text-lg font-bold">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
            </section>


           <section className="relative w-full  pt-[90px] mb-10 overflow-hidden">
  <div className="relative -z-10 top-[800px]">
    <img
      className="absolute hidden md:flex bottom-0 -right-10"
      src={StarsRightImg}
      alt=""
    />
  </div>
  <div className="container mx-auto px-4 sm:px-6 md:px-10">
    <h1
      className="text-3xl sm:text-5xl md:text-[80px] text-center md:text-left font-black leading-[0.95] mb-10 text-white drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]"
      data-aos="fade-up"
    >
      {t("have_a_question")}
    </h1>

    <div
      id="question"
      className="flex flex-col lg:flex-row items-start justify-between gap-10 p-4 md:p-5"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {/* Chap tomon – FAQ */}
      <div
        className="flex flex-col mt-10 w-full lg:w-1/2"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div className="w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-3" data-aos="fade-up" data-aos-delay={index * 100}>
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-5 bg-[#161b29] text-white font-semibold text-base md:text-lg rounded-lg"
              >
                {t(faq.question)}
                {openIndex === index ? (
                  <FaMinus className="text-blue-400" />
                ) : (
                  <FaPlus className="text-blue-400" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? "max-h-40 p-5 text-white bg-[#1d2536]" : "max-h-0"}`}
              >
                {t(faq.answer)}

                {index === 0 && openIndex === 0 && (
                  <div className="mt-4 flex items-center group relative min-h-[48px]">
                    <button
                      className="bg-white text-blue-500 z-10 px-4 py-2 rounded-lg md:font-semibold drop-shadow-[0_2px_7px_rgba(0,112,244,0.8)]"
                      onClick={() => openModal("Texnik muammo")}
                    >
                      {t("technical_issue")}
                    </button>

                    <a
                      href="tel:+998999999999"
                      className="absolute left-0 opacity-0 text-base md:-translate-x-10 group-hover:opacity-100 group-hover:translate-x-44 transition-all duration-500 bg-blue-500 hover:bg-black border-blue-500 border font-medium text-white px-2 md:px-4 py-2 top-1 rounded-lg"
                    >
                      +99899 999 99 99
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* O'ng tomon – ContactWithMap */}
      <div
        className="relative md:top-10 flex justify-center w-full xl:w-1/2"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <ContactWithMap />
      </div>
    </div>
  </div>

  {/* Modal */}
  {isModalOpen && (
    <>
      <style>{`body { overflow: hidden; }`}</style>
      <div className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center py-10 px-4">
        <div className="bg-[#0b0f19] w-full max-w-3xl p-8 rounded-3xl shadow-2xl relative z-[1001] pt-12" data-aos="zoom-in">
          <div className="absolute top-4 right-4">
            <button
              onClick={closeModal}
              className="text-white hover:text-gray-300 text-3xl focus:outline-none"
            >
              <IoMdClose />
            </button>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">
            {t("issue")}: <span className="text-red-500">{selectedIssue}!</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2 w-full">
              <img src={IproIMage} alt="" className="rounded-2xl w-full object-cover" />
            </div>
            <div className="md:w-1/2 w-full">
              <form className="flex flex-col gap-5">
                <input
                  type="text"
                  placeholder={t("your_name")}
                  className="px-5 py-3 rounded-xl bg-[#161b29] text-white placeholder-gray-400 shadow-inner"
                />
                <input
                  type="tel"
                  placeholder={t("phone_number")}
                  className="px-5 py-3 rounded-xl bg-[#161b29] text-white placeholder-gray-400 shadow-inner"
                />
                <textarea
                  placeholder={t("problem_details")}
                  rows={5}
                  className="px-5 py-3 rounded-xl bg-[#161b29] text-white placeholder-gray-400 resize-none shadow-inner"
                ></textarea>
                <button
                  type="submit"
                  className="bg-white text-[#0086EE] w-full px-6 py-3 rounded-xl font-bold shadow-xl hover:bg-gray-200 transition-colors"
                >
                  {t("submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )}
          </section>


            <Footer />

        </>
    );
};

export default aboutus;