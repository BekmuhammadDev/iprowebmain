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

import ContactWithMap from '../components/ui/contactwithmap';
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';
import ScrollProgressBar from '../components/progressLine/progressline';
import VerticalScrollProgress from '../components/vertikalLine/vertikalline';
// import RegisterForm from '../components/forms/signup/singnup';
import { useTranslation } from "react-i18next";
import "../i18";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Primary from './primary';

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
            {/* <VerticalScrollProgress/> */}
            <ScrollProgressBar />

            <section className="text-white py-16 mt-20 overflow-hidden">
                <div className="container mx-auto md:max-w-none 2xl:max-w-none relative flex flex-col md:flex-row items-center justify-between px-5 md:px-10 lg:px-20">
                    {/* Text Content */}
                    <div
                        className="text-center md:text-left md:w-1/2 space-y-4"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                    >
                        <p className="lg:text-2xl text-xl font-medium">
                            {t("premium_web_design")}
                        </p>
                        <h1 className="text-[#0086EE] text-4xl lg:text-6xl leading-tight font-bold uppercase">
                            {t("brands_growth")}
                        </h1>
                        <p className="text-sm lg:text-xl font-medium">
                            {t("custom_websites")} <br className="hidden md:block" />
                            {t("marketing_services")}
                        </p>

                        <div className="relative w-full max-w-[400px] h-[50px] overflow-hidden border border-white rounded-lg font-lato">
                            <span className="absolute inset-0 flex items-center justify-center font-bold text-white hover:text-black text-[20px] pointer-events-none z-20">
                                {t("speak_expert")}
                            </span>
                            <button
                                type="button"
                                name="Hover"
                                className="w-full h-full flex items-center justify-center font-bold text-black text-[20px] bg-white z-10 border-none hover:text-white transition-colors duration-300 custom-mask-button"
                            >
                                {t("speak_expert")}
                            </button>
                        </div>






                    </div>

                    {/* Video Content */}
                    <div
                        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
                        data-aos="zoom-in"
                    >
                        <video
                            className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] rounded-lg shadow-lg"
                            controls
                            autoPlay
                            loop
                        >
                            <source src={Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                <NavLink onClick={handleCardClick}>
                    <button className="animate-bounce p-5 rounded-[50%] fixed bottom-20 right-5 z-50 bg-white">
                        <FaQuestion color="black" />
                    </button>
                </NavLink>
            </section>

            <section className="bg-[#16182B] md:py-20 overflow-hidden">
                <div className="md:mb-24" data-aos="fade-up" data-aos-duration="1200">
                    <Logomarqee />
                </div>

                <div className="container mx-auto md:max-w-none 2xl:max-w-none flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-5 md:px-10 lg:px-20">
                    {/* Matn qismi */}
                    <div
                        className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 space-y-4"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                    >
                        <h1 className="text-white font-black text-3xl sm:text-5xl md:text-[65px] xl:text-[120px] leading-tight drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                            {t("who_are_we")}
                        </h1>
                        <p className="text-white font-normal text-sm sm:text-base md:text-sm lg:text-xl">
                            {t("description1")}
                        </p>
                    </div>

                    {/* Rasm qismi */}
                    <div
                        className="w-full mt-20 md:mt-0 md:w-1/2 flex justify-center"
                        data-aos="zoom-in"
                    >
                        <img
                            src={Logocloud}
                            alt="Logo Cloud"
                            className="w-full max-w-[300px] sm:max-w-[400px] xl:max-w-[500px] lg:max-w-[600px] h-auto object-contain md:object-cover"
                        />
                    </div>
                </div>

                <div
                    className="container mx-auto sm:max-w-none flex flex-col md:flex-row items-center px-5 md:px-10 lg:px-20 justify-start gap-6 mt-16 md:mt-24 mb-16 md:mb-24"
                    data-aos="fade-up"
                >
                    <video
                        className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:w-[265px] rounded-lg shadow-lg"
                        controls
                        src={Video}
                        autoPlay
                        loop
                    />
                    <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl text-center md:text-left">
                        {t("see_our_company")}
                    </h1>
                </div>

                <div data-aos="fade-up">
                    <Achievements />
                </div>
            </section>

            <section className="py-16 bg-[#0F111C] overflow-hidden">
                <div
                    className="container mx-auto md:max-w-none 2xl:max-w-none"
                    data-aos="flip-up"
                    data-aos-duration="1200"
                >
                    <TestimonialSlider />
                </div>
            </section>

            <section className="bg-[#16182B] overflow-hidden">
                <div className="container mx-auto sm:max-w-none">
                    <h1
                        className="text-white xl:text-[128px] sm:mb-20 text-[48px] font-black ml-5 leading-[1.1] text-center md:text-left drop-shadow-[0_5px_10px_rgba(0,112,244,0.8)]"
                        data-aos="fade-down"
                        data-aos-duration="1200"
                    >
                        {t("meetyheteam")}
                    </h1>

                    <div
                        className="relative hidden xl:flex -bottom-[700px]"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <img className="absolute right-0" src={StarsRightImg} alt="" />
                    </div>

                    <div
                        className="flex xl:px-10 px-5 flex-col md:flex-row items-center gap-10 justify-between xl:ml-5"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        {/* Matn qismi */}
                        <div className="w-full md:w-1/2 relative top-60 sm:top-[500px] z-40 sm:-z-10 md:top-0 backdrop-blur-lg bg-transparent px-5 sm:px-10"
                            data-aos="fade-right"
                            data-aos-duration="1300"
                        >
                            <h1 className="text-white text-base text-center sm:text-left lg:text-2xl font-semibold uppercase">
                                {t(activeMember.role)}
                            </h1>
                            <h1 className="text-white text-[32px] sm:text-[40px] lg:text-[96px] text-center sm:text-left font-black uppercase drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                                {t(activeMember.name)}
                            </h1>
                            <h1 className="text-white text-xs sm:text-sm lg:text-2xl text-center sm:text-left font-semibold uppercase">
                                {t(activeMember.description)}
                            </h1>

                            {/* Stats */}
                            <div className="flex justify-center sm:justify-start gap-5 mt-5 md:mt-36">
                                <div className="flex gap-3 sm:gap-5 items-center">
                                    <h1 className="md:text-xl text-base uppercase font-semibold text-white">{t("projects")}:</h1>
                                    <h2 className="text-3xl md:text-5xl text-white font-semibold drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                                        {t(activeMember.projects)}
                                    </h2>
                                </div>
                                <div className="flex gap-3 sm:gap-5 items-center">
                                    <h1 className="md:text-xl text-base uppercase font-semibold text-white">{t("experience")}:</h1>
                                    <h2 className="text-3xl md:text-5xl text-white font-semibold drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                                        {t(activeMember.experience)}
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* Rasm qismi */}
                        <div
                            className="w-full -top-48 md:top-0 px-5 md:w-1/2 relative flex justify-center"
                            data-aos="zoom-in-up"
                            data-aos-duration="1400"
                        >
                            <div className="relative">
                                <img src={CardBg} alt="Background" className="w-full h-full object-cover" />
                                <div className="absolute md:z-30 inset-0 flex items-center justify-center">
                                    <img
                                        src={activeMember.workerImg}
                                        alt="Worker"
                                        className="w-auto h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Carousel qismi */}
                    <div
                        className="relative top-10 sm:-top-20 z-30 backdrop-blur-lg bg-transparent overflow-hidden w-full flex justify-center"
                        data-aos="fade-up"
                        data-aos-duration="1600"
                    >
                        <div className="carousel-track">
                            <div className="carousel-inner">
                                {[...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
                                    <div
                                        key={index}
                                        className="carousel-card"
                                        onClick={() => handleMemberClick(member)}
                                    >
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3 text-white text-center font-bold">
                                            {member.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <style jsx>{`
            .carousel-track {
              overflow: hidden;
              width: 100%;
            }
            .carousel-inner {
              display: flex;
              width: max-content;
              gap: 1.5rem;
              animation: scroll 30s linear infinite;
              will-change: transform;
            }
            .carousel-track:hover .carousel-inner {
              animation-play-state: paused;
            }
            .carousel-card {
              position: relative;
              width: 12rem;
              height: 18rem;
              border: 2px solid #3b82f6;
              border-radius: 0.5rem;
              overflow: hidden;
              box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
              background-color: #0A0F1F;
              cursor: pointer;
              transition: all 0.3s;
            }
            .carousel-card:hover {
              box-shadow: 0 0 25px 10px rgba(0, 122, 255, 0.6);
            }
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-33.33%);
              }
            }
          `}</style>
                    </div>
                </div>
            </section>

            <section className="text-white px-10 pt-[81px] pb-[74px] overflow-hidden">
                <div className="container mx-auto">
                    <h1
                        className="text-[48px] md:text-[128px] uppercase mb-10 md:mb-0 font-black text-center drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        {t("portfolio")}
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-auto grid-flow-row-dense">
                        {portfolioData.map((item, index) => (
                            <div
                                key={item.id}
                                className={`relative overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 group ${item.style}`}
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                                data-aos-duration="1000"
                            >
                                {/* Rasm */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Sarlavha */}
                                <div className="absolute bottom-0 left-0 p-3 text-white text-center font-bold">
                                    {item.title}
                                </div>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 transition duration-300 opacity-0 group-hover:opacity-100">
                                    <div className="absolute inset-0 rounded-lg border-2 shadow-lg border-blue-500 hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.8)]"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pt-10 px-10 md:pt-72 overflow-hidden">
                <div className="relative top-[600px]">
                    <img className="absolute" src={StarsLeftImg} alt="" />
                </div>
                <div className="container mx-auto">
                    <h1
                        className="text-white font-black text-5xl text-center md:text-left md:text-[128px] drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        {t("services")}
                    </h1>

                    <div
                        className="flex flex-col md:flex-row justify-center items-center gap-4 bg-[#0b0f19] p-10"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        {portfolioData.map((item, index) => (
                            <div
                                key={item.id}
                                className="relative flex flex-col h-[105px] md:h-[300px] w-full md:flex-[0.2] overflow-hidden rounded-lg cursor-pointer transition-all duration-500 ease-in-out group hover:flex-[0.8] md:hover:h-[300px] sm:hover:h-auto"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                                data-aos-duration="1000"
                            >
                                {/* Rasm */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                />

                                {/* Overlay Effekt */}
                                <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-5">
                                    <p className="text-white text-lg font-bold">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="md:px-10 pt-[211px] mb-20 overflow-hidden">
                <div className="relative -z-10 top-[800px]">
                    <img className="absolute hidden md:flex bottom-0 -right-10" src={StarsRightImg} alt="" />
                </div>
                <div className="container mx-auto">
                    <h1
                        className="text-5xl text-center md:text-left md:text-[128px] font-black leading-[0.95] mb-10 text-white drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]"
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
                            className="bg-[#0b0f19] flex flex-col mt-24 w-full lg:w-1/2"
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >
                            <div className="w-full max-w-2xl">
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
                                            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? "max-h-40 p-5 text-white bg-[#1d2536]" : "max-h-0"
                                                }`}
                                        >
                                            {t(faq.answer)}

                                            {index === 0 && openIndex === 0 && (
                                                <div className="mt-4 flex items-center group relative min-h-[48px]">
                                                    <button
                                                        className="bg-white text-blue-500 z-10 px-4 py-2 rounded-lg md:font-semibold drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]"
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

                                {/* Modal */}
                                {isModalOpen && (
                                    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
                                        <div
                                            className="bg-[#0b0f19] w-full max-w-2xl p-6 rounded-2xl shadow-lg relative"
                                            data-aos="zoom-in"
                                        >
                                            <button
                                                onClick={closeModal}
                                                className="absolute -top-[600px] md:-top-[450px] right-4 text-3xl text-white"
                                            >
                                                <IoMdClose />
                                            </button>

                                            <h2 className="text-xl font-bold text-white mb-4">
                                                {t("issue")}: <span className="text-red-500">{selectedIssue}!</span>
                                            </h2>

                                            <div className="block md:flex w-full">
                                                <div className="max-w-xl md:w-full">
                                                    <img src={IproIMage} alt="" />
                                                </div>
                                                <div className="w-full">
                                                    <form className="flex flex-col gap-4">
                                                        <input
                                                            type="text"
                                                            placeholder={t("your_name")}
                                                            className="px-4 py-2 rounded-lg bg-[#161b29] text-white placeholder-gray-400 drop-shadow-[0_5px_5px_rgba(0,112,244,0.8)]"
                                                        />
                                                        <input
                                                            type="tel"
                                                            placeholder={t("phone_number")}
                                                            className="px-4 py-2 rounded-lg bg-[#161b29] text-white placeholder-gray-400 drop-shadow-[0_5px_5px_rgba(0,112,244,0.8)]"
                                                        />
                                                        <textarea
                                                            placeholder={t("problem_details")}
                                                            rows={4}
                                                            className="px-4 py-2 rounded-lg bg-[#161b29] text-white placeholder-gray-400 resize-none drop-shadow-[0_5px_5px_rgba(0,112,244,0.8)]"
                                                        ></textarea>
                                                        <button
                                                            type="submit"
                                                            className="bg-[#fff] text-[#0086EE] w-full px-6 py-2 rounded-md font-semibold drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]"
                                                        >
                                                            {t("submit")}
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* O'ng tomon – ContactWithMap */}
                        <div
                            className="relative md:top-24 flex md:justify-center w-full xl:w-1/2"
                            data-aos="fade-left"
                            data-aos-delay="300"
                        >
                            <ContactWithMap />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    );
};

export default aboutus;
