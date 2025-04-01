import React from 'react';
import { useState } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

import CardBg from '../assets/images/cardbg.png';
import WorkersImg from '../assets/images/workersimg.png';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

const teamMembers = [
    {
        name: "Elizabeth",
        role: "Backend Developer",
        description: "One of the most problem-solving members of our team.",
        projects: "15+",
        experience: "7+",
        workerImg: WorkersImg,
        img: WorkersImg,
    },
    {
        name: "John",
        role: "Frontend Developer",
        description: "Creative front-end developer with strong UI skills.",
        projects: "20+",
        experience: "5+",
        workerImg: WorkersImg,
        img: WorkersImg,
    },
    {
        name: "Alice",
        role: "UI/UX Designer",
        description: "Designs intuitive and user-friendly interfaces.",
        projects: "30+",
        experience: "6+",
        workerImg: WorkersImg,
        img: WorkersImg,
    },
    {
        name: "Mike",
        role: "Project Manager",
        description: "Leads projects to successful completion with a clear vision.",
        projects: "50+",
        experience: "10+",
        workerImg: WorkersImg,
        img: WorkersImg,
    },

];

const jobListings = [
    { title: "Motion Designer", schedule: "Monday-Saturday", time: "09:00-18:00" },
    { title: "UI/UX Designer", schedule: "Monday-Friday", time: "10:00-17:00" },
    { title: "Graphic Designer", schedule: "Monday-Saturday", time: "08:00-16:00" },
    { title: "Frontend Developer", schedule: "Monday-Friday", time: "09:00-18:00" },
    { title: "Backend Developer", schedule: "Monday-Friday", time: "10:00-19:00" },
    { title: "Project Manager", schedule: "Monday-Saturday", time: "09:00-17:00" },
    { title: "Data Analyst", schedule: "Monday-Friday", time: "09:00-17:30" },
    { title: "Marketing Specialist", schedule: "Monday-Saturday", time: "08:30-17:30" },
    { title: "SEO Expert", schedule: "Monday-Friday", time: "09:00-18:00" },
    { title: "Data Analyst", schedule: "Monday-Friday", time: "09:00-17:30" },
    { title: "Marketing Specialist", schedule: "Monday-Saturday", time: "08:30-17:30" },
    { title: "SEO Expert", schedule: "Monday-Friday", time: "09:00-18:00" },

];




const team = () => {
    const [activeMember, setActiveMember] = useState(teamMembers[0]);

    const handleMemberClick = (member) => {
        setActiveMember(member);
    };

    const [visibleJobs, setVisibleJobs] = useState(6); // Show 6 initially

    const showMoreJobs = () => {
        setVisibleJobs((prev) => prev + 6); // Show 6 more jobs per click
    };

    // ////////////////////////////////////////////////
    const [isExpanded, setIsExpanded] = useState(false);


    return (
        <main>

            <section>
                <div className="container mx-auto ">
                    <h1 className="text-white md:text-[128px] text-[48px] font-black ml-5 leading-[1.1] text-center md:text-left drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                        MEET THE TEAM
                    </h1>

                    <div className="relative md:flex md:px-10 items-center justify-between gap-38 ml-5">

                        {/* Workers info */}
                        <motion.div
                            animate={{ x: isExpanded ? (window.innerWidth >= 768 ? "100%" : "0%") : "0%" }}
                            transition={{ duration: 0.5 }}
                            className="relative top-80 md:top-0 backdrop-blur-lg bg-transparent w-full md:w-1/2 text-center md:text-left"
                        >

                            {!isExpanded && (
                                <h1 className="text-white text-base text-center md:text-left md:text-2xl font-semibold uppercase">
                                    {activeMember.role}
                                </h1>
                            )}

                            <h1 className="text-white text-[40px] md:text-[96px] text-center md:text-left font-black uppercase drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                                {activeMember.name}
                            </h1>

                            <h1 className="text-white text-xs md:text-xl text-center md:text-left font-semibold uppercase">
                                {isExpanded
                                    ? 'I have spent nearly four years working as a backend developer, where I honed my analytical skills and gained a deep understanding of software processes. This experience ignited my passion for data-driven decision-making, leading me to transition into the world of programming.'
                                    : activeMember.description}
                            </h1>

                            <div className="text-center">
                                {!isExpanded ? (
                                    <div className="flex items-center gap-5 md:gap-12 mt-5 md:mt-36">
                                        <div className="flex gap-2 md:gap-5 items-center">
                                            <h1 className="md:text-xl text-base uppercase font-semibold text-white">
                                                Projects:
                                            </h1>
                                            <h2 className="md:text-5xl text-4xl text-white font-semibold drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                                                {activeMember.projects}
                                            </h2>
                                        </div>
                                        <div className="flex gap-2 md:gap-5 items-center">
                                            <h1 className="md:text-xl text-base uppercase font-semibold text-white">
                                                Experience:
                                            </h1>
                                            <h2 className="md:text-5xl text-4xl text-white font-semibold drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                                                {activeMember.experience}
                                            </h2>
                                        </div>
                                    </div>
                                ) : (

                                    <div>
                                        <h1 className='text-white text-2xl font-semibold mt-5'>Using tools</h1>
                                        <div className="flex justify-center gap-6 mt-10">
                                            <FaReact className="text-[#61DAFB] text-6xl drop-shadow-lg" />
                                            <FaNodeJs className="text-[#68A063] text-6xl drop-shadow-lg" />
                                            <FaHtml5 className="text-[#E34F26] text-6xl drop-shadow-lg" />
                                            <FaCss3Alt className="text-[#1572B6] text-6xl drop-shadow-lg" />
                                            <FaJs className="text-[#F7DF1E] text-6xl drop-shadow-lg" />
                                        </div>
                                    </div>
                                )}

                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="px-14 py-2 bg-white text-[#0086EE] text-xl md:text-2xl font-bold uppercase mt-14 drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]"
                                >
                                    {isExpanded ? 'Less Info' : 'More Info'}
                                </button>

                            </div>
                        </motion.div>

                        {/* Workers img */}
                        <motion.div
                            animate={{ x: isExpanded ? (window.innerWidth >= 768 ? "-100%" : "0%") : "0%" }}
                            transition={{ duration: 0.5 }}
                            className="relative -top-48 md:top-32 w-full h-auto md:w-1/2"
                        >
                            <div className="absolute inset-0 w-[400px] -z-10 md:w-[700px] h-[355px] md:h-auto">
                                <img src={CardBg} alt="Background" className="-top-10" />
                            </div>
                            <div className="relative -z-10 w-[400px] h-[380px] md:-right-40 md:h-auto flex justify-center bottom-24">
                                <img src={activeMember.workerImg} alt="Worker" />
                            </div>
                        </motion.div>


                    </div>

                    <div className="relative backdrop-blur-lg bg-transparent overflow-hidden w-full flex flex-col gap-10 justify-center">
                        <div
                            className="carousel-container flex w-max gap-6 transition-transform duration-1000 ease-in-out"
                        >
                            {[...teamMembers, ...teamMembers].map((member, index) => (
                                <div
                                    key={index}
                                    className="relative group w-48 h-72 overflow-hidden border-2 border-blue-500 transition-all duration-300 rounded-lg shadow-md cursor-pointer hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)]  group bg-[#0A0F1F]"
                                    onClick={() => handleMemberClick(member)} // Update active member
                                >
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3 text-white text-center font-bold">
                                        {member.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* pastagi o'ng tarafagaa harakatlansin */}

                        <div
                            className="carousel-container flex w-max gap-6 transition-transform duration-1000 ease-in-out"
                        >
                            {[...teamMembers, ...teamMembers].map((member, index) => (
                                <div
                                    key={index}
                                    className="relative group w-48 h-72 overflow-hidden border-2 border-blue-500 transition-all duration-300 rounded-lg shadow-md cursor-pointer hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)]  group bg-[#0A0F1F]"
                                    onClick={() => handleMemberClick(member)} // Update active member
                                >
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3 text-white text-center font-bold">
                                        {member.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <style jsx>{`
  .carousel-container {
    animation: carousel-left 90s linear infinite;
  }

  .carousel-container:nth-of-type(2) {
    animation: carousel-right 90s linear infinite;
  }

  .carousel-container:hover {
    animation-play-state: paused;
  }

  @keyframes carousel-left {
    10% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes carousel-right {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`}</style>

                </div>
            </section>

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
                        {visibleJobs < jobListings.length && (
                            <button
                                onClick={showMoreJobs}
                                className="mt-14 px-6 py-2 bg-white text-blue-600 font-bold  rounded-md border border-blue-700 shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300"
                            >
                                Show More
                            </button>
                        )}
                    </div>
                </div>
            </section>

        </main>
    );
};

export default team;