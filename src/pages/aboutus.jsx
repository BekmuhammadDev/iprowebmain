import React from 'react';
import { useState, useEffect, useRef } from 'react';
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
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import ContactWithMap from '../components/ui/contactwithmap';

gsap.registerPlugin(ScrollTrigger);

const aboutus = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // /////////////////////
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
        }, 2000); // Har 2 sekundda almashinadi

        return () => clearInterval(interval);
    }, []);
    //     const el = elementRef.current;
    //     gsap.set(el, {
    //         position: 'fixed',
    //         top: '45%',
    //         left: '50%',
    //         x: '-50%',
    //         y: '-50%',
    //         maxWidth: 'none',
    //         width: '100vw',
    //         height: '100vh',
    //         scale: 1,
    //         opacity: 1,
    //     });

    //     gsap.to(el, {
    //         scrollTrigger: {
    //             trigger: sectionRef.current,
    //             start: 'top-=7.5% top',
    //             end: 'top+=25% top',
    //             scrub: true,
    //         },
    //         width: '80vw',
    //         height: '80vh',
    //         position: 'fixed',
    //     });

    //     gsap.to(el, {
    //         scrollTrigger: {
    //             trigger: sectionRef.current,
    //             start: 'top+=25% top',
    //             end: 'top+=50% top',
    //             scrub: true,
    //         },
    //         x: '-5%',
    //         y: '0%',
    //         top: '20%',
    //         width: 'calc(50vw - 2.5rem)',
    //         height: '50vh',
    //         position: 'fixed',
    //     });

    //     gsap.to(el, {
    //         scrollTrigger: {
    //             trigger: sectionRef.current,
    //             start: 'top+=50% top',
    //             end: 'bottom bottom',
    //             scrub: 0,
    //             onUpdate: (self) => {
    //                 if (self.progress >= 1) {
    //                     gsap.set(el, { position: 'sticky' });
    //                 }
    //             },
    //         },
    //         top: '10%',
    //         x: '0%',
    //     });
    // }, []);

    const [activeMember, setActiveMember] = useState(teamMembers[0]);

    const handleMemberClick = (member) => {
        setActiveMember(member);
    };

    return (
        <>
            <section className="bg-gray-900 text-white md:px-10 py-16">
                <div

                    className="container mx-auto relative flex flex-col  md:flex-row justify-between "
                >
                    {/* Text Content */}
                    <div
                        className={`text-center md:text-left md:w-1/2 px-5 top-[100px] `}
                    >
                        <p className="md:text-2xl text-lg font-medium">
                            Premium Web Design Agency
                        </p>
                        <h1 className="text-[#0086EE] text-[32px] md:text-7xl leading-[1.1] font-bold uppercase mt-4">
                            Brands Growth
                        </h1>
                        <p className="text-sm md:text-xl font-medium mt-4">
                            Custom Websites, Mobile Apps, Branding & Digital{' '}
                            <br className="hidden md:block" />
                            Marketing, other services
                        </p>
                        <button className="w-full md:w-[317px] h-[56px] md:h-[60px] bg-white text-[#0086EE] text-xl md:text-2xl font-bold uppercase mt-9 md:rounded-lg shadow-lg drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                            Speak with Expert
                        </button>
                    </div>

                    {/* Video Content */}
                    <div>
                        <video
                            className="w-[800px]"
                            controls
                            autoPlay
                            loop>
                            <source src={Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                <div className=' hidden md:block fixed px-3 z-50 rounded-sm right-0 cursor-pointer top-80 bg-white text-blue-600 w-[190px] h-[70px] drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]'>
                    <h1 className=' text-center text-2xl font-extrabold'>Got a project?</h1>
                    <p className='text-xl font-bold flex items-center'>Request quote <MdKeyboardDoubleArrowRight color='' /></p>
                </div>

            </section>

            <section className="bg-[#16182B] md:py-20">
                <div className=" md:mb-24">
                    <Logomarqee />
                </div>

                <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                    {/* Matn qismi */}
                    <div className="w-full md:w-1/2 md:px-10 text-center md:text-left mt-6 md:mt-0">
                        <h1 className="text-white font-black text-4xl md:text-[128px] leading-[1.1] drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                            WHO ARE <br className="hidden md:flex" /> WE?
                        </h1>
                        <p className="text-white font-normal text-base md:text-xl mt-4">
                            iPro is a web design company & digital marketing agency focused on
                            growing brands online. We create effective brand strategies,
                            custom web design, development, and digital marketing solutions to
                            generate greater brand engagement and conversions.
                        </p>
                    </div>

                    {/* Rasm qismi */}
                    <div className="w-full md:w-1/2 h-auto md:h-[413px] mt-6 md:mt-0 px-8 flex justify-center">
                        <img
                            src={Logocloud}
                            alt="Logo Cloud"
                            className="w-full max-w-xs md:max-w-full h-auto md:h-auto object-contain md:object-cover"
                        />
                    </div>


                </div>

                <div className=" container mx-auto flex flex-col md:flex-row items-center px-10  justify-start  gap-6 mt-16 md:mt-24 mb-16 md:mb-24">
                    <video
                        className="w-full max-w-xs md:max-w-sm lg:w-[265px] rounded-lg shadow-lg"
                        controls
                        src={Video}
                        autoPlay
                        loop
                    />
                    <h1 className="text-white font-bold  text-2xl md:text-3xl text-center md:text-left">
                        See Our Company
                    </h1>
                </div>

                <div>
                    <Achievements />
                </div>
            </section>

            <section className="bg-[#16182B]">
                <div className="container mx-auto">
                    <TestimonialSlider />
                </div>
            </section>

            <section>
                <div className="container mx-auto ">
                    <h1 className="text-white md:text-[128px] text-[48px] font-black ml-5 leading-[1.1] text-center md:text-left drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                        MEET THE TEAM
                    </h1>

                    <div className="md:flex md:px-10 items-center justify-between gap-48 ml-5">

                        <div className="relative top-72 md:top-0 backdrop-blur-lg bg-transparent">
                            <h1 className="text-white text-base text-center md:text-left md:text-2xl font-semibold uppercase">
                                {activeMember.role}
                            </h1>
                            <h1 className="text-white text-[40px] md:text-[96px] text-center md:text-left font-black uppercase drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                                {activeMember.name}
                            </h1>
                            <h1 className="text-white text-xs md:text-xl text-center md:text-left font-semibold uppercase">
                                {activeMember.description}
                            </h1>
                            <div className="flex items-center gap-5 md:gap-12 mt-5 md:mt-36">
                                <div className="flex gap-2 md:gap-5 items-center">
                                    <h1 className="md:text-xl text-base uppercase font-semibold text-white">
                                        Projects:
                                    </h1>
                                    <h2 className="md:text-5xl text-4xl text-white font-semibold drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                                        {activeMember.projects}
                                    </h2>
                                </div>
                                <div className="flex gap-2 md:gap-5 items-center">
                                    <h1 className="md:text-xl text-base uppercase font-semibold text-white">
                                        Experience:
                                    </h1>
                                    <h2 className="md:text-5xl text-4xl text-white font-semibold drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                                        {activeMember.experience}
                                    </h2>
                                </div>
                            </div>

                        </div>

                        <div className="relative -top-16 md:top-32 w-full h-auto">
                            <div className="absolute inset-0 -top-14 w-[400px] -z-10 md:w-[700px] h-[355px] md:h-auto">
                                <img
                                    src={CardBg}
                                    alt="Background"
                                />
                            </div>
                            <div className="relative -z-10 w-[400px] h-[380px] md:-right-40 md:h-auto  flex justify-center bottom-24">
                                <img
                                    src={activeMember.workerImg}
                                    alt="Worker"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="relative backdrop-blur-lg bg-transparent overflow-hidden w-full flex justify-center">
                        <div className="carousel-container flex w-max gap-6">
                            {[...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
                                <div
                                    key={index}
                                    className="relative group w-48 h-72 overflow-hidden border-2 border-blue-500 transition-all duration-300 rounded-lg shadow-md cursor-pointer hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] bg-[#0A0F1F]"
                                    onClick={() => handleMemberClick(member)} // <-- Add onClick here
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


                        <style jsx>{`
        @keyframes carousel {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }

        .carousel-container {
          display: flex;
          animation: carousel 20s linear infinite;
          will-change: transform;
        }

        .carousel-container:hover {
          animation-play-state: paused;
        }
      `}</style>
                    </div>




                </div>
            </section>

            <section className="bg-[#0b0f19] text-white px-10 pt-[81px] pb-[74px]">
                <div className="container mx-auto">
                    <h1 className="text-[48px] md:text-[128px] mb-10 md:mb-0 font-black text-center drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                        Portfolio
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-auto grid-flow-row-dense">
                        {portfolioData.map((item) => (
                            <div
                                key={item.id}
                                className={`relative overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 group ${item.style}`}
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

            <section className="bg-[#0b0f19] pt-10 px-10  md:pt-72">
                <div className="container mx-auto">
                    <h1 className="text-white font-black text-5xl text-center md:text-left md:text-[128px] drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                        SERVICES
                    </h1>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 bg-[#0b0f19] p-10">
                        {portfolioData.map((item) => (
                            <div
                                key={item.id}
                                className="relative flex flex-col h-[105px] md:h-[300px] w-full md:flex-[0.2] overflow-hidden rounded-lg cursor-pointer transition-all duration-500 ease-in-out group hover:flex-[0.8] md:hover:h-[300px] sm:hover:h-auto"
                            >
                                {/* Rasm */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                />

                                {/* Overlay Effekt (sarlavha) */}
                                <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-5">
                                    <p className="text-white text-lg font-bold">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#0b0f19] md:px-10 pt-[211px] mb-20">
                <div className="container mx-auto">
                    <h1 className=" text-5xl text-center md:text-left md:text-[128px] font-black leading-[0.95] mb-10 text-white drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                        HAVE A <br /> QUESTION?
                    </h1>

                    <div className="flex flex-col md:flex-row items-start justify-between gap-10 p-4 md:p-5">
                        {/* Chap tomonda - FAQ */}
                        <div className="bg-[#0b0f19] flex flex-col mt-24 w-full md:w-1/2">
                            <div className="w-full max-w-2xl">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="mb-3">
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full flex justify-between items-center p-5 bg-[#161b29] text-white font-semibold text-base md:text-lg rounded-lg"
                                        >
                                            {faq.question}
                                            {openIndex === index ? (
                                                <FaMinus className="text-blue-400" />
                                            ) : (
                                                <FaPlus className="text-blue-400" />
                                            )}
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index
                                                ? 'max-h-40 p-5 text-white bg-[#1d2536]'
                                                : 'max-h-0'
                                                }`}
                                        >
                                            {faq.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* O'ng tomonda - ContactWithMap */}
                        <div className="relative md:top-24 -top-32 w-full md:w-1/2">
                            <ContactWithMap />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default aboutus;
