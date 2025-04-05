import React, { useEffect } from 'react';
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';
import NumTwo from "../assets/images/2.png"
import NumZero from "../assets/images/0.png"
import NumOne from "../assets/images/1.png"
import Achievements from '../components/ui/achivements';
import AOS from 'aos';
import 'aos/dist/aos.css';

const aboutus = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <>
            <Header />
            <main className='mt-40'>

                <section className='container max-w-[1920px] px-10'>
                    <div className='flex justify-between mb-10'>
                        <div className='mt-10'>
                            <h1 className='text-white font-black text-3xl sm:text-5xl md:text-[65px] xl:text-[96px] leading-tight mb-10 drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]'>About Us</h1>
                            <p className='text-white font-normal text-xl'>Lorem ipsum dolor sit amet consectetur. Cras donec id facilisi elit nulla <br /> elit non amet. Urna volutpat venenatis cras aliquam nunc. Cras ornare <br /> ultrices leo ac nibh adipiscing tellus dictum id. Habitasse nulla orci <br />  dignissim non pulvinar. Egestas at posuere tincidunt suscipit duis. <br />  Diam sit ac varius bibendum duis vestibulum odio mauris donec. Elit <br /> tristique porta et lorem quam ullamcorper sit. Mi tempor placerat <br /> molestie viverra lectus amet adipiscing auctor. Convallis sed cras  leo <br /> sapien. Nisi scelerisque convallis sagittis eu. </p>
                        </div>

                        <div className='flex'>
                            <div>
                                <img data-aos="fade-down" src={NumTwo} alt="" />
                                <img data-aos="fade-up" src={NumTwo} alt="" />
                            </div>
                            <div className='mt-14'>
                                <img data-aos="fade-left" src={NumZero} alt="" />
                                <img data-aos="zoom-in-left" src={NumOne} alt="" />
                            </div>

                        </div>
                    </div>
                    <div>
                        <div>
                            <Achievements />
                        </div>
                    </div>
                </section>

                <section>
                     <div>
                        <h1></h1>
                     </div>
                </section>

            </main>
            <Footer />

        </>
    );
};

export default aboutus;