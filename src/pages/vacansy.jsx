import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';

const vacansy = () => {
    return (
        <>
            <Header />
            <main>
                <section className='mt-40'>
                    <div className='w-full px-16 bg-[#16182B]'>
                        <div className='flex justify-between py-5'>
                            <h1 className='text-white text-xl font-semibold'>Senior Front End Developer</h1>
                            <button className='bg-white text-[#0086EE] px-9 py-1 text-base font-bold shadow-lg drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]'>Apply now</button>
                        </div>
                        <hr />

                        <div className='flex items-center justify-between'>
                            <div className='flex gap-20 mt-5 py-5'>
                                <div className='flex gap-5 items-center'>
                                    <span className="text-xl"><FaCalendarAlt color='white' fontSize={24} /></span>
                                    <h2 className='text-white text-xs font-normal'>Monday-Saturday</h2>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <span className="text-xl"><FaClock color='white' fontSize={24} /></span>
                                    <h2 className='text-white text-xs font-normal'> 09:00-18:00</h2>
                                </div>

                            </div>

                            <div className="flex justify-start gap-4 mt-3">
                                <FaTelegramPlane className="text-3xl text-white cursor-pointer hover:text-blue-500 transition" />
                                <FaInstagram className="text-3xl text-white cursor-pointer hover:text-pink-500 transition" />
                                <FaFacebookF className="text-3xl text-white cursor-pointer hover:text-blue-600 transition" />
                                <FaYoutube className="text-3xl text-white cursor-pointer hover:text-red-500 transition" />
                                <FaWhatsapp className="text-3xl text-white cursor-pointer hover:text-green-500 transition" />
                            </div>

                        </div>

                    </div>
                </section>

                <section>
                    <div className='container mx-auto px-10 py-20 '>
                        <div>
                            <h1 className='text-white text-xl font-semibold'>Requirements</h1>
                            <ul className='list-disc ml-6'>
                                <li className='text-white text-xl font-semibold'>Support and improvement of existing projects, as well as the introduction of new functionality;</li>
                                <li className='text-white text-xl font-semibold'>Teamwork with other developers, QA testers, backend programmers and UI/UX designers.</li>
                            </ul>
                        </div>

                        <div className='mt-10'>
                            <h1 className='text-white text-xl font-semibold'>Tasks</h1>
                            <ul className='list-disc ml-6'>
                                <li className='text-white text-xl font-semibold'>Knowledge of the application structure of PWA(Progressive Web App), SPA(Single Page Application), SSR(Server-Side Rendering), MF(Mutual Funds);</li>
                                <li className='text-white text-xl font-semibold'>Understanding the principles of SOLID, KISS, DRY.</li>
                                <li className='text-white text-xl font-semibold'>More than 2 years of work experience.(active development for more than 1 year);</li>
                                <li className='text-white text-xl font-semibold'>Knowledge of JavaScript and its basic concepts (prototypical inheritance, event loop, closures, this keyword, etc.);</li>
                                <li className='text-white text-xl font-semibold'>Knowledge of modern methods of writing code in JavaScript and TypeScript;</li>
                                <li className='text-white text-xl font-semibold'>Work experience with Vue.js 2.3, Pinia, Vue Router;</li>
                                <li className='text-white text-xl font-semibold'>Ability to work with Axios and API;</li>
                                <li className='text-white text-xl font-semibold'>Knowledge of Tailwind CSS and good layout skills;</li>
                                <li className='text-white text-xl font-semibold'>Experience working with NPM/ Yarn for package management;</li>
                                <li className='text-white text-xl font-semibold'>Experience working with project builders in Vue, Vue CLI, Webpack, Rollup;</li>
                                <li className='text-white text-xl font-semibold'>Knowledge of Git, Shell Commands, Git Flow;</li>
                                <li className='text-white text-xl font-semibold'>Experience working with Nuxt.js;</li>
                                <li className='text-white text-xl font-semibold'>Willingness to constantly learn and explore new technologies.</li>
                            </ul>
                            <button className='bg-white mt-14 text-[#0086EE] px-9 py-1 text-base font-bold shadow-lg drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]'>Apply now</button>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default vacansy;