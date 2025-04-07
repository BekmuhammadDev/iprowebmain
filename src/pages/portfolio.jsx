import React from 'react';
import KranPortfolio from "../assets/images/kranPortfolio.png"
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';

const portfolio = () => {
    return (
        <>
            <Header />
            <main className='mt-20'>

                <section>
                    <div className='container mx-auto mb-44'>

                        <h1 className="text-white md:text-[128px] text-[48px] font-black ml-5 mb-10 text-center md:text-left drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                            PROJECTS
                        </h1>

                        <div class="flex items-center flex-col md:flex-row gap-0 overflow-hidden rounded-[8px] py-20 bg-[#16182B] px-5 -space-x-16">

                            <div className='relative'>
                                <h1 className='text-5xl font-bold text-white mb-[10px] text-center md:text-left'>Mobile</h1>
                                <p className='text-xs xl:text-base font-medium text-white md:mb-10 mb-0 text-center md:text-left'>Our team created over 20+ websites including online <br />  shops, CRM, and other type for business owners. Just click the button bellow to see all projects.</p>
                                <button className='relative top-[330px] md:top-0 bg-white text-blue-600 py-2 px-5 uppercase text-base w-full md:w-[172px] font-bold shadow-lg drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]'>View projects</button>
                            </div>

                            <div className='flex items-center gap-0 overflow-hidden -space-x-16'>
                                
                                <div class="relative w-full h-[268px] left-20 shadow-lg rounded-[20px] transition-transform duration-300 cursor-pointer hover:translate-x-6 z-10 group">
                                    <img src={KranPortfolio} className=" h-full w-full  object-cover rounded-[20px]" alt="" />
                                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-300 rounded-[20px]"></div>
                                </div>

                                <div class="relative w-full h-[268px] left-20 shadow-lg rounded-[20px] transition-transform duration-300 cursor-pointer hover:translate-x-6 z-10 group">
                                    <img src={KranPortfolio} className="h-full w-full object-cover rounded-[20px]" alt="" />
                                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-300 rounded-[20px]"></div>
                                </div>

                                <div class="relative w-full h-[268px] left-20 shadow-lg rounded-[20px] transition-transform duration-300 cursor-pointer hover:translate-x-6 z-10 group">
                                    <img src={KranPortfolio} className="h-full w-full object-cover rounded-[20px]" alt="" />
                                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-300 rounded-[20px]"></div>
                                </div>

                                <div class="relative w-full h-[268px] left-20 shadow-lg rounded-[20px] transition-transform duration-300 cursor-pointer hover:translate-x-6 z-10 group">
                                    <img src={KranPortfolio} className="h-full w-full object-cover rounded-[20px]" alt="" />
                                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-300 rounded-[20px]"></div>
                                </div>

                                {/* <div class="relative w-[372px] h-[268px] left-20 shadow-lg rounded-[20px] transition-transform duration-300 cursor-pointer hover:translate-x-6 z-10 group">
                                    <img src={KranPortfolio} className="h-full w-full object-cover rounded-[20px]" alt="" />
                                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-300 rounded-[20px]"></div>
                                </div> */}
                            </div>
                        </div>

                    </div>
                </section>

            </main>
            <Footer />

        </>
    );
};

export default portfolio;