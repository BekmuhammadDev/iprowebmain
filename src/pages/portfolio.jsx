import React, { useEffect } from 'react';
import KranPortfolio from "../assets/images/kranPortfolio.png"
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';
import Stars from "../assets/images/stars.png"
import LefftStars from "../assets/images/starsleft.png"
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "../i18";
import AOS from 'aos';
import 'aos/dist/aos.css';


const portfolio = () => {

    const { t } = useTranslation();

    const projectsData = [
        { title: 'websites', description: 'mobileApps' },
        { title: 'mobile', description: 'mobileApps' },
        { title: 'smm', description: 'socialMedia' },
        { title: 'marketing', description: 'dataDriven' },
        { title: 'target', description: 'laserTargeting' },
        { title: 'graphicDesign', description: 'creativeDesigns' },
    ];

    const navigate = useNavigate();

    const handleNavigate = (category) => {
        navigate(`/projects/${category.toLowerCase()}`);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <>
            <Header />
            <main className='mt-20'>
                <section>
                    <div className="absolute  right-0 -z-10">
                        <img src={Stars} alt="" />
                    </div>

                    <div className="container mx-auto mb-44 px-5 xl:px-14">
                        <h1
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className="text-white md:text-[108px] text-[48px] font-black ml-5 mb-10 text-center md:text-left drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]"
                        >
                            {t("projects")}
                        </h1>

                        {projectsData.map((project, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-delay={`${index * 300}`}
                                className="flex items-center justify-between mb-7 flex-col md:flex-row overflow-hidden rounded-[8px] py-20 md:py-5 bg-[#16182B] md:px-5 -space-x-16"
                            >
                                <div className="relative">
                                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-[10px] text-center md:text-left">
                                        {t(project.title)}
                                    </h1>
                                    <p className="text-[10px] md:text-xs xl:text-base font-medium text-white md:mb-10 mb-0 text-center md:text-left">
                                        {t(project.description)}<br />{t("buttonText")}
                                    </p>
                                    <button onClick={()=>handleNavigate(t(project.title))} className="relative top-44 md:top-0 rounded-md xl:w-[150px] bg-white text-blue-600 py-2 uppercase text-xs w-full font-bold shadow-lg drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)] hover:bg-slate-300">
                                        {t("viewProjects")}
                                    </button>
                                </div>

                                <div className="flex items-center gap-0 overflow-hidden -space-x-14 md:-space-x-36">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <div
                                            key={i}
                                            data-aos-delay={`${(index + i) * 200}`}
                                            className="relative w-full md:h-[198px] left-20 shadow-lg rounded-[20px] transition-transform duration-300 cursor-pointer hover:translate-x-6 group"
                                        >
                                            <img
                                                src={KranPortfolio}
                                                className="md:h-full h-28 w-full object-cover rounded-[20px]"
                                                alt={`${t(project.title)} ${i}`}
                                            />
                                            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-300 rounded-[20px]"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="absolute left-0 top-[500px] -z-10">
                            <img src={LefftStars} alt="" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

        </>
    );
};

export default portfolio;