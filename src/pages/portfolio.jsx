import React from 'react';
import KranPortfolio from "../assets/images/kranPortfolio.png"
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';

const projectsData = [
    { title: 'Websites', description: 'We build modern mobile apps with sleek UX and smooth performance.' },
    { title: 'Mobile', description: 'We build modern mobile apps with sleek UX and smooth performance.' },
    { title: 'SMM', description: 'We deliver high-performing social media marketing strategies.' },
    { title: 'Marketing', description: 'Boost your brand with data-driven marketing campaigns.' },
    { title: 'Target', description: 'Laser-focused targeting that brings results.' },
    { title: 'Graphic design', description: 'Creative designs tailored to your brand identity.' },
];

const portfolio = () => {
    return (
        <>
            <Header />
            <main className='mt-20'>

                <section>
                    <div className='container mx-auto mb-44 px-14'>
                        <h1
                            className="text-white md:text-[108px] text-[48px] font-black ml-5 mb-10 text-center md:text-left drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                            PROJECTS
                        </h1>

                        {projectsData.map((project, index) => (

                            <div key={index} className="flex items-center  justify-between mb-7 flex-col md:flex-row  overflow-hidden rounded-[8px] py-5 bg-[#16182B] px-5 -space-x-16">
                                <div className='relative'>
                                    <h1 className='text-4xl font-bold text-white mb-[10px] text-center md:text-left'>{project.title}</h1>
                                    <p className='text-xs xl:text-base font-medium text-white md:mb-10 mb-0 text-center md:text-left'>
                                        {project.description}<br />Just click the button below to see all projects.
                                    </p>
                                    <button className='relative md:top-0 rounded-md xl:w-[150px] bg-white text-blue-600 py-2  uppercase text-base w-full font-bold shadow-lg drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)] hover:bg-slate-300'>
                                        View projects
                                    </button>
                                </div>

                                <div className='flex items-center gap-0 overflow-hidden -space-x-36'>
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <div key={i} className="relative w-full md:h-[198px] left-20 shadow-lg rounded-[20px] transition-transform duration-300 cursor-pointer hover:translate-x-6  group">
                                            <img src={KranPortfolio} className="h-full w-full object-cover rounded-[20px]" alt={`${project.title} ${i}`} />
                                            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-300 rounded-[20px]"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        ))}
                    </div>
                </section>

            </main>
            <Footer />

        </>
    );
};

export default portfolio;