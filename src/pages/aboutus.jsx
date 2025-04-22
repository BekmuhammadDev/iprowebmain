import React, { useEffect } from 'react';
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';
import NumTwo from "../assets/images/2.png"
import NumZero from "../assets/images/0.png"
import NumOne from "../assets/images/1.png"
import Achievements from '../components/ui/achivements';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutus1 from "../assets/images/2025.png"
import aboutus2 from "../assets/images/2024.png"
import aboutus3 from "../assets/images/2023.png"
import aboutus4 from "../assets/images/2022.png"
import aboutus5 from "../assets/images/2021.png"

import OfficeIMG from "../assets/images/officeimg.png"
import OfficeIMgBig from "../assets/images/officeimgBig.png"
import officeimgY from "../assets/images/officeimgY.png"
import officeimgX from "../assets/images/officeImgX.png"


const aboutus = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0); // sahifa tepasiga o'tadi
    }, []);


    return (
        <>
            <Header />
            <main className='mt-40'>

                <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-10">

                    <div className="flex flex-col lg:flex-row-reverse justify-between gap-10 mb-40">
                        {/* Image Section - top on small, right on large */}
                        <div className="flex justify-center lg:justify-end w-full lg:w-1/2 gap-6 flex-wrap">
                            <div className="flex flex-col gap-6">
                                <img
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    data-aos-delay="0"
                                    src={NumTwo}
                                    alt=""
                                    className="w-20 sm:w-28 md:w-32 object-contain"
                                />
                                <img
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    data-aos-delay="500"
                                    src={NumTwo}
                                    alt=""
                                    className="w-20 sm:w-28 md:w-32 object-contain"
                                />
                            </div>
                            <div className="flex flex-col gap-6 mt-6 sm:mt-14">
                                <img
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    data-aos-delay="1000"
                                    src={NumZero}
                                    alt=""
                                    className="w-20 sm:w-28 md:w-32 object-contain"
                                />
                                <img
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    data-aos-delay="1500"
                                    src={NumOne}
                                    alt=""
                                    className="w-14 sm:w-20 object-contain"
                                />
                            </div>
                        </div>

                        {/* Text Section - bottom on small, left on large */}
                        <div className="w-full lg:w-1/2 mt-5 lg:mt-10">
                            <h1 className="text-white text-center md:text-left font-black text-3xl sm:text-5xl md:text-[65px] xl:text-[96px] leading-tight mb-6 drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                                About Us
                            </h1>
                            <p className="text-white text-center md:text-left font-normal text-base sm:text-lg md:text-xl leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Cras donec id facilisi elit nulla elit non amet.
                                Urna volutpat venenatis cras aliquam nunc. Cras ornare ultrices leo ac nibh adipiscing tellus
                                dictum id. Habitasse nulla orci dignissim non pulvinar. Egestas at posuere tincidunt suscipit
                                duis. Diam sit ac varius bibendum duis vestibulum odio mauris donec. Elit tristique porta et
                                lorem quam ullamcorper sit. Mi tempor placerat molestie viverra lectus amet adipiscing auctor.
                                Convallis sed cras leo sapien. Nisi scelerisque convallis sagittis eu.
                            </p>
                        </div>
                    </div>


                    {/* Achievements Section */}
                    <div>
                        <Achievements />
                    </div>
                </section>


                <section className='container mx-auto px-4 sm:px-6 lg:px-10'>
                    {/* Title Section */}
                    <div className='flex flex-col lg:flex-row justify-between items-center text-white mt-40 mb-10 gap-6 text-center lg:text-left'>
                        <img
                            src={aboutus1}
                            alt=""
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className='w-full max-w-[200px] sm:max-w-[250px] lg:w-full mx-auto lg:mx-0'
                        />
                        <h1
                            className='text-3xl sm:text-4xl md:text-5xl font-bold'
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            New office in Tashkent
                        </h1>
                    </div>

                    {/* Images Grid */}
                    <div className='flex flex-col lg:flex-row justify-between gap-10 items-center overflow-hidden'>
                        {/* Left Column */}
                        <div className="flex flex-col items-center gap-14 w-full lg:w-1/2">
                            <a href="#">
                                <img
                                    src={OfficeIMG}
                                    data-aos="fade-right"
                                    data-aos-duration="1200"
                                    alt=""
                                    className='w-full h-full shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer'
                                />
                            </a>
                            <a href="#">
                                <img
                                    src={OfficeIMgBig}
                                    data-aos="fade-right"
                                    data-aos-duration="1500"
                                    alt=""
                                    className='w-full h-full shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer'
                                />
                            </a>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col items-center xl:items-end gap-14 w-full lg:w-1/2">
                            <a href="#" className=''>
                                <img
                                    src={officeimgY}
                                    data-aos="fade-left"
                                    data-aos-delay="500"
                                    data-aos-duration="1200"
                                    alt=""
                                    className='w-full shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer'
                                />
                            </a>
                            <a href="#" className=''>
                                <img
                                    src={officeimgX}
                                    data-aos="fade-left"
                                    data-aos-delay="500"
                                    data-aos-duration="1500"
                                    alt=""
                                    className='w-full shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer'
                                />
                            </a>
                        </div>
                    </div>
                </section>


                <section className="container mx-auto px-4 sm:px-6 lg:px-10">
                    {/* Title Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-center text-white mt-40 mb-10 gap-6 text-center lg:text-left">
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold"
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            Expanding Team
                        </h1>
                        <img
                            src={aboutus2}
                            alt=""
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] mx-auto lg:mx-0"
                        />
                    </div>

                    {/* Images Grid */}
                    <div className="flex flex-col lg:flex-row justify-between gap-10 items-center overflow-hidden">
                        {/* Left Column */}
                        <div className="flex flex-col items-center gap-14 w-full lg:w-1/2">
                            <a href="#">
                                <img
                                    src={OfficeIMG}
                                    data-aos="fade-right"
                                    data-aos-duration="1700"
                                    alt=""
                                    className="w-full shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src={OfficeIMgBig}
                                    data-aos="fade-right"
                                    data-aos-duration="1800"
                                    alt=""
                                    className="w-full mt-10 shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer"
                                />
                            </a>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col items-center xl:items-end gap-14 w-full lg:w-1/2">
                            <a href="#">
                                <img
                                    src={officeimgY}
                                    data-aos="fade-left"
                                    data-aos-delay="500"
                                    data-aos-duration="1700"
                                    alt=""
                                    className="w-full  shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src={officeimgX}
                                    data-aos="fade-left"
                                    data-aos-delay="500"
                                    data-aos-duration="1800"
                                    alt=""
                                    className="w-full  mt-10 shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer"
                                />
                            </a>
                        </div>
                    </div>
                </section>


                <section className="container mx-auto px-4 sm:px-6 lg:px-10">
                    {/* Title Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-center text-white mt-40 mb-10 gap-6 text-center lg:text-left">
                        <img
                            src={aboutus3}
                            alt=""
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] mx-auto lg:mx-0"
                        />
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold"
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            New office in Tashkent
                        </h1>
                    </div>

                    {/* Images Grid */}
                    <div className="flex flex-col lg:flex-row justify-between gap-10 items-center overflow-hidden">
                        {/* Left Column */}
                        <div className="flex flex-col items-center gap-14 w-full lg:w-1/2">
                            <a href="#">
                                <img
                                    src={OfficeIMG}
                                    data-aos="fade-right"
                                    data-aos-duration="1700"
                                    alt=""
                                    className="w-full  shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src={OfficeIMgBig}
                                    data-aos="fade-right"
                                    data-aos-duration="1800"
                                    alt=""
                                    className="w-full  mt-10 shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer"
                                />
                            </a>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col items-center xl:items-end gap-14 w-full lg:w-1/2">
                            <a href="#">
                                <img
                                    src={officeimgY}
                                    data-aos="fade-left"
                                    data-aos-delay="500"
                                    data-aos-duration="1700"
                                    alt=""
                                    className="w-full  shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src={officeimgX}
                                    data-aos="fade-left"
                                    data-aos-delay="500"
                                    data-aos-duration="1800"
                                    alt=""
                                    className="w-full  mt-10 shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer"
                                />
                            </a>
                        </div>
                    </div>
                </section>


                <section className="container mx-auto px-4 sm:px-6 lg:px-10">
                    {/* Title Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-center text-white mt-40 mb-10 gap-6 text-center lg:text-left">
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold"
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            Expanding Team
                        </h1>
                        <img
                            src={aboutus4}
                            alt=""
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] mx-auto lg:mx-0"
                        />
                    </div>

                    {/* Images Section */}
                    <div className="flex flex-col lg:flex-row justify-between gap-10 items-center overflow-hidden">
                        {/* Left Column */}
                        <div className="flex flex-col items-center gap-14 w-full lg:w-1/2">
                            <a href="#">
                                <img
                                    src={OfficeIMG}
                                    data-aos="fade-right"
                                    data-aos-duration="1700"
                                    alt=""
                                    className="w-full shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src={OfficeIMgBig}
                                    data-aos="fade-right"
                                    data-aos-duration="1800"
                                    alt=""
                                    className="w-full mt-10 shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer"
                                />
                            </a>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col items-center xl:items-end gap-14 w-full lg:w-1/2">
                            <a href="#">
                                <img
                                    src={officeimgY}
                                    data-aos="fade-left"
                                    data-aos-delay="500"
                                    data-aos-duration="1700"
                                    alt=""
                                    className="w-full shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src={officeimgX}
                                    data-aos="fade-left"
                                    data-aos-delay="500"
                                    data-aos-duration="1800"
                                    alt=""
                                    className="w-full mt-10 shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer"
                                />
                            </a>
                        </div>
                    </div>
                </section>


                <section className="container mx-auto px-4 sm:px-6 lg:px-10 mb-80">
                    {/* Title Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-center text-white mt-40 mb-10 gap-6 text-center lg:text-left">
                        <img
                            src={aboutus5}
                            alt=""
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] mx-auto lg:mx-0"
                        />
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold"
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            New office in Tashkent
                        </h1>
                    </div>

                    {/* Images Section */}
                    <div className="flex flex-col lg:flex-row justify-between gap-10 items-center overflow-hidden">
                        {/* Left Column */}
                        <div className="flex flex-col items-center gap-14 w-full lg:w-1/2">
                            <a href="#">
                                <img
                                    src={OfficeIMG}
                                    data-aos="fade-right"
                                    data-aos-duration="1700"
                                    alt=""
                                    className="w-full  shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src={OfficeIMgBig}
                                    data-aos="fade-right"
                                    data-aos-duration="1800"
                                    alt=""
                                    className="w-full  mt-10 shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer"
                                />
                            </a>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col items-center xl:ite gap-14 w-full lg:w-1/2">

                            <a href="#">
                                <img
                                    src={officeimgY}
                                    data-aos="fade-left"
                                    data-aos-delay="500"
                                    data-aos-duration="1700"
                                    alt=""
                                    className="w-full  shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src={officeimgX}
                                    data-aos="fade-left"
                                    data-aos-delay="500"
                                    data-aos-duration="1800"
                                    alt=""
                                    className="w-full  mt-10 shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 cursor-pointer"
                                />
                            </a>
                        </div>
                    </div>
                </section>


            </main>
            <Footer />

        </>
    );
};

export default aboutus;