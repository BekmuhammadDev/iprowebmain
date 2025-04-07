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

    return (
        <>
            <Header />
            <main className='mt-40'>

                <section className='container mx-auto px-10'>
                    <div className='flex justify-between mb-10'>
                        <div className='mt-10'>
                            <h1 className='text-white font-black text-3xl sm:text-5xl md:text-[65px] xl:text-[96px] leading-tight mb-10 drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]'>About Us</h1>
                            <p className='text-white font-normal text-xl'>Lorem ipsum dolor sit amet consectetur. Cras donec id facilisi elit nulla <br /> elit non amet. Urna volutpat venenatis cras aliquam nunc. Cras ornare <br /> ultrices leo ac nibh adipiscing tellus dictum id. Habitasse nulla orci <br />  dignissim non pulvinar. Egestas at posuere tincidunt suscipit duis. <br />  Diam sit ac varius bibendum duis vestibulum odio mauris donec. Elit <br /> tristique porta et lorem quam ullamcorper sit. Mi tempor placerat <br /> molestie viverra lectus amet adipiscing auctor. Convallis sed cras  leo <br /> sapien. Nisi scelerisque convallis sagittis eu. </p>
                        </div>

                        <div className='flex'>
                            <div>
                                <img
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    data-aos-delay="0"
                                    src={NumTwo}
                                    alt=""
                                />
                                <img
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    data-aos-delay="500"
                                    src={NumTwo}
                                    alt=""
                                />
                            </div>

                            <div className='mt-14'>
                                <img
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    data-aos-delay="1000"
                                    src={NumZero}
                                    alt=""
                                />
                                <img
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    data-aos-delay="1500"
                                    src={NumOne}
                                    alt=""
                                />
                            </div>
                        </div>

                    </div>
                    <div>
                        <div>
                            <Achievements />
                        </div>
                    </div>
                </section>

                <section className='container mx-auto px-10'>
                    <div className='flex justify-between items-center text-white px-10 mt-52 mb-10'>
                        <img src={aboutus1} alt="" data-aos="fade-up" data-aos-duration="3000" />
                        <h1 className='text-[48px] font-bold' data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">New office in Tashkent</h1>
                    </div>
                    <div className='flex items-center overflow-hidden justify-between px-10'>
                        <div>
                            <a href=""><img data-aos="fade-right" data-aos-duration="1200" src={OfficeIMG} className='cursor-pointer shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 group' alt="" /></a>
                            <a href=""><img data-aos="fade-right" data-aos-duration="1500" className='mt-14 cursor-pointer shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 group' src={OfficeIMgBig} alt="" /></a>
                        </div>
                        <div>
                            <a href=""><img data-aos-delay="500" data-aos="fade-left" data-aos-duration="1200" src={officeimgY} className='cursor-pointer shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 group' alt="" /></a>
                            <a href=""><img data-aos-delay="500" className='mt-14 cursor-pointer shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 group' data-aos="fade-left" data-aos-duration="1500" src={officeimgX} alt="" /></a>
                        </div>
                    </div>
                </section>

                <section className='container mx-auto px-10'>
                    <div className='flex justify-between items-center text-white px-10 mt-52 mb-10'>
                        <h1 className='text-[48px] font-bold' data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">Expanding Team</h1>
                        <img src={aboutus2} alt="" data-aos="fade-up" data-aos-duration="3000" />
                    </div>
                    <div className='flex items-center overflow-hidden justify-between px-10'>
                        <div>
                            <a href=""><img data-aos="fade-right" data-aos-duration="1700" src={OfficeIMG} alt="" /></a>
                            <a href=""><img data-aos="fade-right" data-aos-duration="1800" className='mt-14' src={OfficeIMgBig} alt="" /></a>
                        </div>
                        <div>
                            <a href=""><img data-aos="fade-left" data-aos-delay="500" data-aos-duration="1700" src={officeimgY} alt="" /></a>
                            <a href=""><img data-aos="fade-left" data-aos-delay="500" data-aos-duration="1800" className='mt-14' src={officeimgX} alt="" /></a>
                        </div>
                    </div>
                </section>

                <section className='container mx-auto px-10'>
                    <div className='flex justify-between items-center text-white px-10 mt-52 mb-10'>
                        <img src={aboutus3} alt="" data-aos="fade-up" data-aos-duration="3000" />
                        <h1 className='text-[48px] font-bold' data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">New office in Tashkent</h1>
                    </div>
                    <div className='flex items-center overflow-hidden justify-between px-10'>
                        <div>
                            <a href=""><img data-aos="fade-right" data-aos-duration="1700" src={OfficeIMG} alt="" /></a>
                            <a href=""><img data-aos="fade-right" data-aos-duration="1800" className='mt-14' src={OfficeIMgBig} alt="" /></a>
                        </div>
                        <div>
                            <a href=""><img data-aos="fade-left" data-aos-delay="500" data-aos-duration="1700" src={officeimgY} alt="" /></a>
                            <a href=""><img data-aos="fade-left" data-aos-delay="500" data-aos-duration="1800" className='mt-14' src={officeimgX} alt="" /></a>
                        </div>
                    </div>
                </section>

                <section className='container mx-auto px-10'>
                    <div className='flex justify-between items-center text-white px-10 mt-52 mb-10'>
                        <h1 className='text-[48px] font-bold' data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">Expanding Team</h1>
                        <img src={aboutus4} alt="" data-aos="fade-up" data-aos-duration="3000" />
                    </div>
                    <div className='flex items-center overflow-hidden justify-between px-10'>
                        <div>
                            <a href=""><img data-aos="fade-right" data-aos-duration="1700" src={OfficeIMG} alt="" /></a>
                            <a href=""><img data-aos="fade-right" data-aos-duration="1800" className='mt-14' src={OfficeIMgBig} alt="" /></a>
                        </div>
                        <div>
                            <a href=""><img data-aos="fade-left" data-aos-delay="500" data-aos-duration="1700" src={officeimgY} alt="" /></a>
                            <a href=""><img data-aos="fade-left" data-aos-delay="500" data-aos-duration="1800" className='mt-14' src={officeimgX} alt="" /></a>
                        </div>
                    </div>
                </section>

                <section className='mb-80 container mx-auto px-10'>
                    <div className='flex justify-between items-center text-white px-10 mt-52 mb-10'>
                        <img src={aboutus5} alt="" data-aos="fade-up" data-aos-duration="3000" />
                        <h1 className='text-[48px] font-bold' data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">New office in Tashkent</h1>
                    </div>
                    <div className='flex items-center overflow-hidden justify-between px-10'>
                        <div>
                            <a href=""><img data-aos="fade-right" data-aos-duration="1700" src={OfficeIMG} alt="" /></a>
                            <a href=""><img data-aos="fade-right" data-aos-duration="1800" className='mt-14' src={OfficeIMgBig} alt="" /></a>
                        </div>
                        <div>
                            <a href=""><img data-aos="fade-left" data-aos-delay="500" data-aos-duration="1700" src={officeimgY} alt="" /></a>
                            <a href=""><img data-aos="fade-left" data-aos-delay="500" data-aos-duration="1800" className='mt-14' src={officeimgX} alt="" /></a>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />

        </>
    );
};

export default aboutus;