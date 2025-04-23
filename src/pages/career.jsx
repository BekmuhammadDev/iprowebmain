import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Qo‘shildi
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';

const jobListings = [

    { slug: 'motion-designer', title: "Motion Designer", schedule: "Monday-Saturday", time: "09:00-18:00" },
    { slug: 'ui-ux-designer', title: "UI/UX Designer", schedule: "Monday-Friday", time: "10:00-17:00" },
    { slug: 'graphic-designer', title: "Graphic Designer", schedule: "Monday-Saturday", time: "08:00-16:00" },
    { slug: 'frontend-developer', title: "Frontend Developer", schedule: "Monday-Friday", time: "09:00-18:00" },
    { slug: 'backend-developer', title: "Backend Developer", schedule: "Monday-Friday", time: "10:00-19:00" },
    { slug: 'project-manager', title: "Project Manager", schedule: "Monday-Saturday", time: "09:00-17:00" },
    { slug: 'data-analyst', title: "Data Analyst", schedule: "Monday-Friday", time: "09:00-17:30" },
    { slug: 'marketing-specialist', title: "Marketing Specialist", schedule: "Monday-Saturday", time: "08:30-17:30" },
    { slug: 'seo-expert', title: "SEO Expert", schedule: "Monday-Friday", time: "09:00-18:00" },
    { slug: 'data-analyst', title: "Data Analyst", schedule: "Monday-Friday", time: "09:00-17:30" },
    { slug: 'motion-designer', title: "Motion Designer", schedule: "Monday-Saturday", time: "09:00-18:00" },
    { slug: 'ui-ux-designer', title: "UI/UX Designer", schedule: "Monday-Friday", time: "10:00-17:00" },
    { slug: 'graphic-designer', title: "Graphic Designer", schedule: "Monday-Saturday", time: "08:00-16:00" },
    { slug: 'frontend-developer', title: "Frontend Developer", schedule: "Monday-Friday", time: "09:00-18:00" },
    { slug: 'backend-developer', title: "Backend Developer", schedule: "Monday-Friday", time: "10:00-19:00" },
    { slug: 'project-manager', title: "Project Manager", schedule: "Monday-Saturday", time: "09:00-17:00" },
    { slug: 'data-analyst', title: "Data Analyst", schedule: "Monday-Friday", time: "09:00-17:30" },
    { slug: 'marketing-specialist', title: "Marketing Specialist", schedule: "Monday-Saturday", time: "08:30-17:30" },
    { slug: 'seo-expert', title: "SEO Expert", schedule: "Monday-Friday", time: "09:00-18:00" },
    { slug: 'data-analyst', title: "Data Analyst", schedule: "Monday-Friday", time: "09:00-17:30" },

];

const career = () => {
   
        const initialCount = 6;
        const navigate = useNavigate(); // Qo‘shildi
    
        const [visibleJobs, setVisibleJobs] = useState(6);
    
        const showMoreJobs = () => {
            setVisibleJobs((prev) => prev + 18);
        };
    
        const handleClick = (slug) => {
            navigate(`/vacansy/${slug}`);
        };
    
        const resetJobs = () => {
            setVisibleJobs(initialCount);
        };
    
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
        
        // qolgan kod davom etadi...
    



    return (
        <>
            <Header />
            <main className='mt-20'>
                <section>
                    <div className="container mx-auto mt-52">
                        <h1 className="text-white md:text-[128px] text-[48px] font-black px-10 leading-[1.1] text-center md:text-left drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                            VACANCIES
                        </h1>

                        <div className="bg-[#0A0F1F] flex flex-col justify-center items-center mt-20 mb-20">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {jobListings.slice(0, visibleJobs).map((job, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#11152A] text-white p-6 rounded-lg shadow-lg cursor-pointer h-[150px] w-full hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 group"
                                        onClick={() => handleClick(job.slug)}
                                    >
                                        <h2 className="text-2xl font-bold">{job.title}</h2>
                                        <hr className="my-2 border-gray-600" />
                                        <div className="flex gap-14 items-center">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl"><FaCalendarAlt color='white' fontSize={24} /></span>
                                                <p className="text-base font-normal">{job.schedule}</p>
                                            </div>
                                            <div className="flex items-center gap-2 mt-2">
                                                <span className="text-xl"><FaClock color='white' fontSize={24} /></span>
                                                <p className="text-sm font-normal">{job.time}</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            <button className="mt-5 px-8 py-1 text-center font-bold bg-white text-blue-600 shadow-[0_0_25px_10px_rgba(0,122,255,0.6)]">
                                                APPLY NOW
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Show More Button */}
                            {visibleJobs < jobListings.length ? (
                                <button
                                    onClick={showMoreJobs}
                                    className="mt-14 px-6 py-2 bg-white text-blue-600 font-bold rounded-md border border-blue-700 shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300"
                                >
                                    Show More
                                </button>
                            ) : (
                                <button
                                    onClick={resetJobs}
                                    className="mt-14 px-6 py-2 bg-white text-blue-600 font-bold rounded-md border border-blue-700 shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300"
                                >
                                    Show Less
                                </button>
                            )}

                        </div>
                    </div>
                </section>
            </main>
            <Footer />

        </>
    );
};

export default career;