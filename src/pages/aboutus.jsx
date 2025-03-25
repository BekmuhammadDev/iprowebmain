import React from 'react';
import Video from "../assets/video/ipro.mp4"
import Logomarqee from '../components/ui/logomarquee';
import Logocloud from "../assets/images/iPro11.png"
import Achievements from '../components/ui/achivements';
import TestimonialSlider from '../components/ui/scrollcardworkers';
import CardBg from "../assets/images/cardbg.png"
import WorkersImg from "../assets/images/workersimg.png"


const teamMembers = [
    { name: "BACKEND", img: "https://picsum.photos/200/300?random=1" },
    { name: "FRONTEND", img: "https://picsum.photos/200/300?random=2" },
    { name: "PROJECT", img: "https://picsum.photos/200/300?random=3" },
    { name: "PRODUCT", img: "https://picsum.photos/200/300?random=4" },
    { name: "UX&UI", img: "https://picsum.photos/200/300?random=5" },
    { name: "TARGET", img: "https://picsum.photos/200/300?random=6" },
    


];


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

                <div className='flex items-center gap-6 mt-24 mb-24'>

                    <video class="w-[265px] rounded-lg shadow-lg"
                        controls
                        src={Video}
                        autoPlay
                        loop
                    >
                    </video>

                    <h1 className='text-white font-bold text-3xl'>See Our Company</h1>
                </div>

                <div>
                    <Achievements />
                </div>
            </section>

            <section>
                <div>
                    <TestimonialSlider />
                </div>
            </section>

            <section>
                <div className=''>
                    <h1 className='text-white text-[128px] font-black ml-5'>MEET THE TEAM</h1>
                    <div className='flex items-center gap-10 ml-5 px-24'>

                        <div >
                            <h1 className='text-white text-2xl font-semibold uppercase'>Backend Developer</h1>
                            <h1 className='text-white text-[96px] font-black uppercase'>Elizabeth</h1>
                            <h1 className='text-white text-xl font-semibold uppercase'>one of the most problem solving <br />  member of our team</h1>
                            <div className='flex items-center gap-12 mt-36'>
                                <div className='flex gap-5 items-center'><h1 className='text-xl  uppercase font-semibold text-white'>Projects:</h1><h2 className='text-5xl text-white font-semibold'>15+</h2></div>
                               <div className='flex gap-5 items-center'> <h1 className='text-xl uppercase  font-semibold text-white'>Experience:</h1><h2 className='text-5xl text-white font-semibold'>7+</h2></div>
                            </div>
                        </div>

                        <div className="relative top-36 w-full h-auto">
                            {/* Orqa fon rasmi (CardBg) */}
                            <div className="absolute inset-0 -z-10 w-full h-auto">
                                <img src={CardBg} alt="Background" className="w-full h-auto object-contain" />
                            </div>

                            {/* Ustki rasm (WorkersImg) */}
                            <div className="relative -z-10 w-full h-auto flex justify-center bottom-24">
                                <img src={WorkersImg} alt="Workers" className="w-auto max-w-full h-auto" />
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-center z-10 relative bottom-40 items-center gap-6 p-10">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="relative group w-48 h-72 overflow-hidden border-2
        border-blue-500 transition-all duration-300 rounded-lg shadow-md 
            hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)]"
                            >
                                {/* Rasm */}
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Ism yozuvi */}
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3 text-white text-center font-bold">
                                    {member.name}
                                </div>
                            </div>
                        ))}
                    </div>




                </div>
            </section>


        </>
    );
};

export default aboutus;