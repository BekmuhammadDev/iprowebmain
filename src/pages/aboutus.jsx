import React from 'react';
import Video from "../assets/video/ipro.mp4"
import Logomarqee from '../components/ui/logomarquee';
import Logocloud from "../assets/images/iPro11.png"

const aboutus = () => {
    return (
        <>
            <section className='hero section'>
                <div className='flex items-center justify-between'>
                    <div className='py-[199px]'>
                        <p className='text-[#FFFFFF] text-2xl font-medium'>Premium Web Design Agency</p>
                        <h1 className='text-[#0086EE] text-[80px] font-bold uppercase'>Brands growth</h1>
                        <p className='text-[#FFFFFF] text-xl font-medium '>Custom Websites, Mobile Apps, Branding & Digital <br /> Marketing, other services</p>
                        <button className='w-[317px] h-[60px] bg-white text-[#0086EE] text-2xl font-bold uppercase mt-9'>Speak with Expert</button>
                    </div>

                    <div>
                        <video class="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                            controls
                            src={Video}
                            autoPlay
                            loop
                        >

                        </video>

                    </div>
                </div>
            </section>

            <div>
                <Logomarqee />
            </div>

            <section className="bg-[#16182B] px-10 py-20">
                <div className="flex items-center justify-between gap-10">
                    {/* Matn qismi */}
                    <div className="w-1/2">
                        <h1 className="text-white font-black text-[128px] leading-[1.1]">
                            WHO ARE <br /> WE?
                        </h1>
                        <p className="text-white font-normal text-xl mt-4">
                            iPro is a web design company & digital marketing agency focused on growing brands online. We create effective brand strategies, custom web design, development, and digital marketing solutions to generate greater brand engagement and conversions.
                        </p>
                    </div>

                    {/* Rasm qismi */}
                    <div className="w-1/2">
                        <img src={Logocloud} alt="Logo Cloud" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </section>


        </>
    );
};

export default aboutus;