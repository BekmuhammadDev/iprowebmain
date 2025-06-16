import { useState, useEffect } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import StarsRightImg from "../assets/images/starsright.png"
import CardBg from '../assets/images/cardbg.png';
import WorkersImg from '../assets/images/workersimg.png';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "../i18";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import WorkersMan from "../assets/images/workersman.png"
import WorkersMan2 from "../assets/images/workersman2.png"
import Teams from './teams';

const teamMembers = [
    {
        name: "Bekmuhammad",
        role: "Frontend Developer",
        description: "One of the most problem-solving members of our team.One of the most problem-solving members of our team.",
        projects: "15+",
        experience: "7+",
        workerImg: WorkersMan2,
        hoverImg: WorkersMan,
        img: WorkersMan2,
    },
    {
        name: "E'zoza",
        role: "Beckend Developer",
        description: "Creative front-end developer with strong UI skills.",
        projects: "20+",
        experience: "5+",
        workerImg: WorkersImg,
        hoverImg: WorkersMan,
        img: WorkersImg,
    },
    {
        name: "Javohir",
        role: "Java Developer",
        description: "Designs intuitive and user-friendly interfaces.",
        projects: "30+",
        experience: "6+",
        workerImg: WorkersMan2,
        hoverImg: WorkersMan,
        img: WorkersMan2,
    },
    {
        name: "Fahriya",
        role: "SMM Manager",
        description: "Leads projects to successful completion with a clear vision.",
        projects: "50+",
        experience: "10+",
        workerImg: WorkersImg,
        hoverImg: WorkersMan,
        img: WorkersImg,
    },
    {
        name: "Azizbek",
        role: "Frontend Developer",
        description: "One of the most problem-solving members of our team.",
        projects: "15+",
        experience: "7+",
        workerImg: WorkersMan2,
        hoverImg: WorkersMan,
        img: WorkersMan2,
    },
    {
        name: "Zebo",
        role: "UI/UX Designer",
        description: "Designs intuitive and user-friendly interfaces.",
        projects: "30+",
        experience: "6+",
        workerImg: WorkersImg,
        hoverImg: WorkersMan,
        img: WorkersImg,
    },
    {
        name: "Asadulloh",
        role: "Python Developer",
        description: "Creative front-end developer with strong UI skills.",
        projects: "20+",
        experience: "5+",
        workerImg: WorkersMan2,
        hoverImg: WorkersMan,
        img: WorkersMan2,
    },

    {
        name: "Mike",
        role: "Project Manager",
        description: "Leads projects to successful completion with a clear vision.",
        projects: "50+",
        experience: "10+",
        workerImg: WorkersImg,
        hoverImg: WorkersMan,
        img: WorkersImg,
    },
    {
        name: "Elizabeth",
        role: "Backend Developer",
        description: "One of the most problem-solving members of our team.",
        projects: "15+",
        experience: "7+",
        workerImg: WorkersImg,
        hoverImg: WorkersMan,
        img: WorkersImg,
    },
    {
        name: "John",
        role: "Frontend Developer",
        description: "Creative front-end developer with strong UI skills.",
        projects: "20+",
        experience: "5+",
        workerImg: WorkersImg,
        hoverImg: WorkersMan,
        img: WorkersImg,
    },
    {
        name: "Alice",
        role: "UI/UX Designer",
        description: "Designs intuitive and user-friendly interfaces.",
        projects: "30+",
        experience: "6+",
        workerImg: WorkersImg,
        hoverImg: WorkersMan,
        img: WorkersImg,
    },
    {
        name: "Mike",
        role: "Project Manager",
        description: "Leads projects to successful completion with a clear vision.",
        projects: "50+",
        experience: "10+",
        workerImg: WorkersImg,
        hoverImg: WorkersMan,
        img: WorkersImg,
    },
    {
        name: "Elizabeth",
        role: "Backend Developer",
        description: "One of the most problem-solving members of our team.",
        projects: "15+",
        experience: "7+",
        workerImg: WorkersImg,
        hoverImg: WorkersMan,
        img: WorkersImg,
    },
    {
        name: "John",
        role: "Frontend Developer",
        description: "Creative front-end developer with strong UI skills.",
        projects: "20+",
        experience: "5+",
        workerImg: WorkersImg,
        hoverImg: WorkersMan,
        img: WorkersImg,
    },
    {
        name: "Alice",
        role: "UI/UX Designer",
        description: "Designs intuitive and user-friendly interfaces.",
        projects: "30+",
        experience: "6+",
        workerImg: WorkersImg,
        hoverImg: WorkersMan,
        img: WorkersImg,
    },
    {
        name: "Mike",
        role: "Project Manager",
        description: "Leads projects to successful completion with a clear vision.",
        projects: "50+",
        experience: "10+",
        workerImg: WorkersImg,
        hoverImg: WorkersMan,
        img: WorkersImg,
    },

];

const jobListings = [

    { slug: 'motion-designer', title: "Motion Designer", schedule: "monday_saturday", time: "09:00-18:00" },
    { slug: 'ui-ux-designer', title: "UI/UX Designer", schedule: "monday_friday", time: "10:00-17:00" },
    { slug: 'graphic-designer', title: "Graphic Designer", schedule: "monday_saturday", time: "08:00-16:00" },
    { slug: 'frontend-developer', title: "Frontend Developer", schedule: "monday_friday", time: "09:00-18:00" },
    { slug: 'backend-developer', title: "Backend Developer", schedule: "monday_friday", time: "10:00-19:00" },
    { slug: 'project-manager', title: "Project Manager", schedule: "monday_saturday", time: "09:00-17:00" },
    { slug: 'marketing-specialist', title: "Marketing Specialist", schedule: "monday_saturday", time: "08:30-17:30" },
    { slug: 'seo-expert', title: "SEO Expert", schedule: "monday_friday", time: "09:00-18:00" },
    { slug: 'data-analyst', title: "Data Analyst", schedule: "monday_friday", time: "09:00-17:30" },
    { slug: 'marketing-specialist', title: "Marketing Specialist", schedule: "monday_saturday", time: "08:30-17:30" },
    { slug: 'seo-expert', title: "SEO Expert", schedule: "monday_friday", time: "09:00-18:00" },

];

const team = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const [activeMember, setActiveMember] = useState(teamMembers[0]);

    const handleMemberClick = (member) => {
        setActiveMember(member);
    };

    const [visibleJobs, setVisibleJobs] = useState(6);

    const showMoreJobs = () => {
        setVisibleJobs((prev) => prev + 8); // Show 6 more jobs per click
    };

    const handleClick = (slug) => {
        navigate(`/vacansy/${slug}`);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);


    // ////////////////////////////////////////////////
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <Header />

            <main className='mt-20'>
                <Teams t={t} CardBg={CardBg} StarsRightImg={StarsRightImg}/>

                <section>
                    <div className="container mx-auto mt-40">
                        <h1
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className="text-white md:text-[100px] text-[48px] font-black px-10 leading-[1.1] text-center md:text-left drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]"
                        >
                            {t("vacansy")}
                        </h1>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-delay="500"
                            className="bg-[#0A0F1F] flex flex-col justify-center items-center mt-20 mb-20"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {jobListings.slice(0, visibleJobs).map((job, index) => (
                                    <div
                                        key={index}
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                        data-aos-delay={`${index * 200}`}
                                        className="bg-[#11152A] text-white p-6 rounded-lg shadow-lg cursor-pointer h-[150px] w-full hover:shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300 group"
                                        onClick={() => handleClick(job.slug)}
                                    >
                                        <h2 className="text-2xl font-bold">{job.title}</h2>
                                        <hr className="my-2 border-gray-600" />
                                        <div className="flex gap-14 items-center">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl"><FaCalendarAlt color='white' fontSize={24} /></span>
                                                <p className="text-base font-normal">{t(job.schedule)}</p>
                                            </div>
                                            <div className="flex items-center gap-2 mt-2">
                                                <span className="text-xl"><FaClock color='white' fontSize={24} /></span>
                                                <p className="text-sm font-normal">{job.time}</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            <button className="mt-5 px-8 py-1 text-center font-bold bg-white text-blue-600 shadow-[0_0_25px_10px_rgba(0,122,255,0.6)]">
                                                {t("applynow")}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {visibleJobs < jobListings.length && (
                                <button
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    data-aos-delay="2000"
                                    onClick={showMoreJobs}
                                    className="mt-14 px-6 py-2 bg-white text-blue-600 font-bold rounded-md border border-blue-700 shadow-[0_0_25px_10px_rgba(0,122,255,0.6)] transition-all duration-300"
                                >
                                    {t("show_more")}
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

export default team;