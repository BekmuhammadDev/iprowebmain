import React from 'react';
import { useState, useEffect } from 'react';
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
import StarsRightImg from "../assets/images/starsright.png"
import StarsLeftImg from "../assets/images/starsleft.png"
import IproIMage from "../assets/images/iproLogoRegister.png"
import { NavLink } from 'react-router-dom';
import { FaQuestion } from "react-icons/fa";
import { motion } from "framer-motion";
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
import Teams from './teams';
import Faq from './Faq'



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

         <Teams t={t} StarsRightImg={StarsRightImg} CardBg={CardBg}/>


          {/* <PortfolioSection t={t} /> */}
           
            
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
          {/* Rasm */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out p-5">
            <p className="text-white text-lg font-bold text-center drop-shadow-lg">{item.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
           </section>
           <Faq t={t} StarsRightImg={StarsRightImg} toggleAccordion={toggleAccordion} openIndex={toggleAccordion} openModal={openModal} isModalOpen={isModalOpen} closeModal={closeModal} selectedIssue={selectedIssue} IproIMage={IproIMage}/>
        </>
    );
};

export default aboutus;