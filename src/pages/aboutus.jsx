import React from 'react';
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Video from "../assets/video/ipro.mp4"
import Logomarqee from '../components/ui/logomarquee';
import Logocloud from "../assets/images/iPro11.png"
import Achievements from '../components/ui/achivements';
import TestimonialSlider from '../components/ui/scrollcardworkers';
import CardBg from "../assets/images/cardbg.png"
import WorkersImg from "../assets/images/workersimg.png"
import ContactWithMap from '../components/ui/contactwithmap';
// import StarParticles from '../components/ui/stars';

const teamMembers = [
    { name: "BACKEND", img: "https://picsum.photos/200/300?random=1" },
    { name: "FRONTEND", img: "https://picsum.photos/200/300?random=2" },
    { name: "PROJECT", img: "https://picsum.photos/200/300?random=3" },
    { name: "PRODUCT", img: "https://picsum.photos/200/300?random=4" },
    { name: "UX&UI", img: "https://picsum.photos/200/300?random=5" },
    { name: "TARGET", img: "https://picsum.photos/200/300?random=6" },
    { name: "TARGET", img: "https://picsum.photos/200/300?random=7" },
];

const portfolioData = [
    { id: 1, img: "https://picsum.photos/200/300?random=1", title: "China House", style: "col-span-2 h-[243px]" },
    { id: 2, img: "https://picsum.photos/200/300?random=2", title: "China House", style: "h-[243px]" },
    { id: 3, img: "https://picsum.photos/200/300?random=3", title: "China House", style: " h-[488px]" },
    { id: 4, img: "https://picsum.photos/200/300?random=4", title: "China House", style: "col-span-2 h-[500px]" },
    { id: 5, img: "https://picsum.photos/200/300?random=5", title: "China House", style: "h-[258px]" },
    { id: 6, img: "https://picsum.photos/200/300?random=6", title: "China House", style: "h-[258px]" },
    { id: 7, img: "https://picsum.photos/200/300?random=7", title: "China House", style: "h-[258px]" },
];

const faqs = [
    {
        question: "When should I pay for a project?",
        answer: "After confirming contract need to pay at least 50% of total price, or if you looking optional method, you should contact with experts to make in order."
    },
    {
        question: "How long does a project take?",
        answer: "Project duration depends on the complexity and requirements, but generally it takes around 2-4 weeks."
    },
    {
        question: "Can I get a refund if I'm not satisfied?",
        answer: "Yes, we have a refund policy that allows refunds under certain conditions. Please contact us for more details."
    },
    {
        question: "Can I get a refund if I'm not satisfied?",
        answer: "Yes, we have a refund policy that allows refunds under certain conditions. Please contact us for more details."
    },
    {
        question: "How long does a project take?",
        answer: "Project duration depends on the complexity and requirements, but generally it takes around 2-4 weeks."
    },
    {
        question: "Can I get a refund if I'm not satisfied?",
        answer: "Yes, we have a refund policy that allows refunds under certain conditions. Please contact us for more details."
    },
];


const aboutus = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <section className='hero section bg-gray-900 text-white py-16'>
                <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-6'>
                    {/* Text Content */}
                    <div className='text-center md:text-left md:w-1/2 py-12'>
                        <p className='text-2xl font-medium'>Premium Web Design Agency</p>
                        <h1 className='text-[#0086EE] text-5xl md:text-7xl font-bold uppercase mt-4'>Brands Growth</h1>
                        <p className='text-xl font-medium mt-4'>
                            Custom Websites, Mobile Apps, Branding & Digital <br className='hidden md:block' />
                            Marketing, other services
                        </p>
                        <button className='w-full md:w-[317px] h-[60px] bg-white text-[#0086EE] text-2xl font-bold uppercase mt-9 rounded-lg shadow-lg'>
                            Speak with Expert
                        </button>
                    </div>

                    {/* Video Content */}
                    <div className='w-full md:w-1/2 flex justify-center'>
                        <video className='w-full max-w-lg rounded-lg shadow-lg' controls autoPlay loop>
                            <source src={Video} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>


            <section className="bg-[#16182B] px-10 py-20">
                <div className='mb-24'>
                    <Logomarqee />
                </div>

                <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                    {/* Matn qismi */}
                    <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
                        <h1 className="text-white font-black text-5xl md:text-[128px] leading-[1.1]">
                            WHO ARE <br /> WE?
                        </h1>
                        <p className="text-white font-normal text-lg md:text-xl mt-4">
                            iPro is a web design company & digital marketing agency focused on growing brands online. We create effective brand strategies, custom web design, development, and digital marketing solutions to generate greater brand engagement and conversions.
                        </p>
                    </div>

                    {/* Rasm qismi */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src={Logocloud} alt="Logo Cloud" className="w-full h-auto object-cover" />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row items-center  justify-start md:ml-40 gap-6 mt-16 md:mt-24 mb-16 md:mb-24 px-5'>
                    <video
                        className="w-full max-w-xs md:max-w-sm lg:w-[265px] rounded-lg shadow-lg"
                        controls
                        src={Video}
                        autoPlay
                        loop
                    />
                    <h1 className='text-white font-bold  text-2xl md:text-3xl text-center md:text-left'>See Our Company</h1>
                </div>

                <div>
                    <Achievements />
                </div>
            </section>


            <section className='bg-[#16182B]'>
                <div className='container mx-auto'>
                    <TestimonialSlider />
                </div>
            </section>


            <section>
                {/* <StarParticles/> */}
                <div className='container mx-auto'>

                    <h1 className='text-white md:text-[128px] text-[48px] font-black ml-5'>MEET THE TEAM</h1>
                    <div className='flex items-center gap-10 ml-5 '>

                        <div className='relative'>
                            <h1 className='text-white text-2xl font-semibold uppercase'>Backend Developer</h1>
                            <h1 className='text-white text-[96px] font-black uppercase'>Elizabeth</h1>
                            <h1 className='text-white text-xl font-semibold uppercase'>one of the most problem solving <br />  member of our team</h1>
                            <div className='flex items-center gap-12 mt-36'>
                                <div className='flex gap-5 items-center'><h1 className='text-xl  uppercase font-semibold text-white'>Projects:</h1><h2 className='text-5xl text-white font-semibold'>15+</h2></div>
                                <div className='flex gap-5 items-center'> <h1 className='text-xl uppercase  font-semibold text-white'>Experience:</h1><h2 className='text-5xl text-white font-semibold'>7+</h2></div>
                            </div>
                        </div>

                        <div className="relative top-32 w-full h-auto">
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

                    <div className="flex justify-center z-0 relative bottom-40 items-center gap-6 p-10">
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


            <section className="bg-[#0b0f19] text-white px-5 pt-[81px] py-74 ">
                <div className="container mx-auto">
                    <h1 className="text-[128px] font-black">Portfolio</h1>

                    <div className="grid grid-cols-3 gap-4 auto-rows-auto grid-flow-row-dense">
                        {portfolioData.map((item) => (
                            <div
                                key={item.id}
                                className={`relative overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)]" transition-all duration-300 group ${item.style}`}
                            >
                                {/* Rasm */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform  duration-500 group-hover:scale-105"
                                />

                                {/* Sarlavha */}
                                <div className="absolute bottom-0 left-0  p-3 text-white text-center font-bold">
                                    {item.title}``
                                </div>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 transition duration-300 opacity-0 group-hover:opacity-100">
                                    <div className="absolute inset-0 rounded-lg border-2 shadow-lg border-blue-500 shadow-[0_0_25px_10px_rgba(0,122,255,0.8)]"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className='bg-[#0b0f19] pt-72'>
                <div className='container mx-auto'>
                    <h1 className='text-white font-black text-[128px]'>SERVICES</h1>
                    <div className="flex justify-center items-center gap-4 bg-[#0b0f19] p-10">
                        {portfolioData.map((item) => (
                            <div
                                key={item.id}
                                className="relative h-[300px] flex-[0.2] overflow-hidden rounded-lg cursor-pointer transition-all duration-500 ease-in-out group hover:flex-[0.8]"
                            >
                                {/* Rasm */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                />

                                {/* Overlay Effekt (sarlavha va ikonka) */}
                                <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-5">
                                    <p className="text-white text-lg font-bold">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            <section className='bg-[#0b0f19] pt-[211px]'>
                <div className='container mx-auto'>
                    <h1 className='text-[128px] font-black text-white'>HAVE A QUESTION?</h1>

                    <div className='flex items-center justify-between'>

                        <div className="bg-[#0b0f19] min-h-screen flex flex-col  mt-24">
                            <div className="w-full max-w-2xl">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="mb-3">
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full flex justify-between items-center p-5 bg-[#161b29] text-white font-semibold text-lg rounded-lg"
                                        >
                                            {faq.question}
                                            {openIndex === index ? <FaMinus className="text-blue-400" /> : <FaPlus className="text-blue-400" />}
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? "max-h-40 p-5 text-white bg-[#1d2536]" : "max-h-0"
                                                }`}
                                        >
                                            {faq.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='relative -top-32'>
                            <ContactWithMap />
                        </div>

                    </div>
                </div>
            </section>


        </>
    );
};

export default aboutus;