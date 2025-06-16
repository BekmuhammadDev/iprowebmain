import React, { useState, useEffect } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';
import { useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';


const jobData = {
    'motion-designer': { title: "Motion Designer", schedule: "Monday-Saturday", time: "09:00-18:00" },
    'ui-ux-designer': { title: "UI/UX Designer", schedule: "Monday-Friday", time: "10:00-17:00" },
    'graphic-designer': { title: "Graphic Designer", schedule: "Monday-Saturday", time: "08:00-16:00" },
    'frontend-developer': { title: "Frontend Developer", schedule: "Monday-Friday", time: "09:00-18:00" },
    'backend-developer': { title: "Backend Developer", schedule: "Monday-Friday", time: "10:00-19:00" },
    'project-manager': { title: "Project Manager", schedule: "Monday-Saturday", time: "09:00-17:00" },
    'data-analyst': { title: "Data Analyst", schedule: "Monday-Friday", time: "09:00-17:30" },
    'marketing-specialist': { title: "Marketing Specialist", schedule: "Monday-Saturday", time: "08:30-17:30" },
    'seo-expert': { title: "SEO Expert", schedule: "Monday-Friday", time: "09:00-18:00" },
};

const vacansy = () => {
    const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    workTime: '',
    level: '',
    salary: '',
    portfolioLink: '',
    resume: null,
  });
   const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
    const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.resume) {
    alert('Resume fayli tanlanmadi!');
    return;
  }

  const resumeFormData = new FormData();
  resumeFormData.append('file', formData.resume);

  try {
    const uploadRes = await axios.post(
      'https://ipro.javohir-dev.uz/api/attachments/upload',
      resumeFormData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    const resumeId = uploadRes.data; // bu `string` bo'lishi kerak
    console.log("Resume ID:", resumeId);

    const careerData = {
  fullName: formData.fullName,
  phoneNumber: formData.phoneNumber,
  workTime: formData.workTime,
  level: formData.level,
  salary: parseFloat(formData.salary) || 0,
  portfolioLink: formData.portfolioLink,
  resume: resumeId // ⚠️ endi `resume` bo'lishi kerak!
};


    console.log("Career data:", careerData);

    const response = await axios.post(
      'https://ipro.javohir-dev.uz/api/career',
      careerData
    );

    console.log(response.data);
    alert('Arizangiz muvaffaqiyatli yuborildi!');
  } catch (error) {
    console.error('Xatolik yuz berdi:', error);
    alert('Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.');
  }
};


    const { slug } = useParams();
    const vacansy = jobData[slug];
    const [showModal, setShowModal] = useState(false);

    if (!vacansy) {
        return (
            <>
                <Header />
                <div className="text-white text-center mt-40 text-xl">Job not found</div>
                <Footer />
            </>
        );
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);


    return (
        <>
            <Header />
            <main className='overflow-hidden'>

                <section className='mt-20 sm:mt-28 md:mt-40 container mx-auto' data-aos="fade-up" duration={500}>
                    <div className='px-4 sm:px-8 md:px-12'>
                        <div className='w-full md:px-10 xl:px-16 rounded-md bg-[#16182B]' data-aos="zoom-in" data-aos-delay="100">

                            <div className='flex flex-col md:flex-row justify-between py-5 gap-4' data-aos="fade-right" data-aos-delay="200">
                                <h1 className='text-white text-xl font-semibold'>{vacansy.title}</h1>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className='bg-white text-[#0086EE] px-6 hidden md:flex sm:px-9 py-1 text-base font-bold shadow-lg drop-shadow-[0_5px_10px_rgba(0,112,244,0.8)]'
                                >
                                    Apply now
                                </button>
                            </div>

                            <hr />

                  <div className='flex flex-col lg:flex-row items-center lg:items-center px-2 justify-between gap-4' data-aos="fade-up" data-aos-delay="300">
  
  {/* Ish vaqti ma'lumotlari - markazga telefon versiyasida */}
  <div className='flex flex-row sm:flex-col gap-6 mt-5 py-5 items-center sm:items-start'>
    <div className='flex gap-3 items-center' data-aos="fade-right" data-aos-delay="400">
      <FaCalendarAlt className='text-white text-xl' />
      <h2 className='text-white text-xs font-normal'>Monday-Saturday</h2>
    </div>
    <div className='flex gap-3 items-center' data-aos="fade-right" data-aos-delay="500">
      <FaClock className='text-white text-xl' />
      <h2 className='text-white text-xs font-normal'>09:00-18:00</h2>
    </div>
  </div>

  {/* Ijtimoiy tarmoqlar - markazga telefon versiyasida */}
  <div className="flex justify-center lg:justify-start gap-4 mt-3 mb-1 lg:mb-0" data-aos="zoom-in-up" data-aos-delay="600">
    <FaTelegramPlane className="text-2xl sm:text-3xl text-white cursor-pointer hover:text-blue-500 transition" />
    <FaInstagram className="text-2xl sm:text-3xl text-white cursor-pointer hover:text-pink-500 transition" />
    <FaFacebookF className="text-2xl sm:text-3xl text-white cursor-pointer hover:text-blue-600 transition" />
    <FaYoutube className="text-2xl sm:text-3xl text-white cursor-pointer hover:text-red-500 transition" />
    <FaWhatsapp className="text-2xl sm:text-3xl text-white cursor-pointer hover:text-green-500 transition" />
  </div>

</div>

                        </div>
                    </div>
                </section>


            {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
    <div className="bg-[#16182B] w-full max-w-4xl rounded-lg p-6 relative max-h-[90vh] overflow-y-auto">
      {/* Close button */}
     <button
  onClick={() => setShowModal(false)}
  className="relotive right-4 text-3xl text-white hover:text-red-500 transition top-[-550px]"
  aria-label="Close modal"
>
  <IoMdClose />
</button>


      {/* Form */}
       <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <label htmlFor="fullName" className="block text-xl text-white font-medium mb-1">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="border border-gray-600 p-2 w-full rounded-md bg-[#1E2238] text-white focus:outline-none focus:ring-2 focus:ring-[#0086EE]"
          required
        />
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-xl text-white font-medium mb-1">Phone</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone"
          className="border border-gray-600 p-2 w-full rounded-md bg-[#1E2238] text-white focus:outline-none focus:ring-2 focus:ring-[#0086EE]"
          required
        />
      </div>

      <div>
        <label htmlFor="workTime" className="block text-xl text-white font-medium mb-1">Work Time</label>
        <select
          id="workTime"
          name="workTime"
          value={formData.workTime}
          onChange={handleChange}
          className="border border-gray-600 p-2 w-full rounded-md bg-[#1E2238] text-white focus:outline-none focus:ring-2 focus:ring-[#0086EE]"
          required
        >
          <option value="ONLINE">ONLINE</option>
          <option value="OFFLINE">OFFLINE</option>
        </select>
      </div>

      <div>
        <label htmlFor="level" className="block text-xl text-white font-medium mb-1">Level</label>
        <select
          id="level"
          name="level"
          value={formData.level}
          onChange={handleChange}
          className="border border-gray-600 p-2 w-full rounded-md bg-[#1E2238] text-white focus:outline-none focus:ring-2 focus:ring-[#0086EE]"
          required
        >
          <option value="JUNIOR">JUNIOR</option>
          <option value="STRONG_JUNIOR">STRONG JUNIOR</option>
          <option value="MIDDLE">MIDDLE</option>
          <option value="STRONG_MIDDLE">STRONG MIDDLE</option>
          <option value="SENIOR">SENIOR</option>
        </select>
      </div>

      <div>
        <label htmlFor="salary" className="block text-xl text-white font-medium mb-1">Salary</label>
        <input
          id="salary"
          name="salary"
          type="number"
          value={formData.salary}
          onChange={handleChange}
          placeholder="Salary"
          className="border border-gray-600 p-2 w-full rounded-md bg-[#1E2238] text-white focus:outline-none focus:ring-2 focus:ring-[#0086EE]"
          required
        />
      </div>

      <div>
        <label htmlFor="portfolioLink" className="block text-xl text-white font-medium mb-1">Portfolio Link</label>
        <input
          id="portfolioLink"
          name="portfolioLink"
          type="url"
          value={formData.portfolioLink}
          onChange={handleChange}
          placeholder="Portfolio Link"
          className="border border-gray-600 p-2 w-full rounded-md bg-[#1E2238] text-white focus:outline-none focus:ring-2 focus:ring-[#0086EE]"
          required
        />
      </div>

      <div className="col-span-1 sm:col-span-2">
        <label htmlFor="resume" className="block text-xl text-white font-medium mb-2">Upload CV/Resume</label>
        <div className="relative">
          <input
            id="resume"
            name="resumeFile"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            required
          />
          <label
            htmlFor="resume"
            className="w-full cursor-pointer text-center bg-[#999999] text-white px-6 py-3 flex rounded-md font-semibold transition justify-center gap-3 items-center hover:bg-gray-700"
          >
            Upload CV/Resume <FaFileDownload />
          </label>
        </div>
      </div>

      <div className="col-span-1 sm:col-span-2 flex w-full mt-4">
        <button
          type="submit"
          className="bg-white text-[#0086EE] w-full px-6 py-2 rounded-md font-semibold drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)] hover:bg-[#e6f0ff] transition"
        >
          Apply now
        </button>
      </div>
    </form>
    </div>
  </div>
)}



                <section className='mt-20' data-aos="fade-up" data-aos-duration="1000">
                    <div className='container mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 md:py-20'>

                        {/* Requirements */}
                        <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                            <h1 className='text-white text-lg sm:text-xl font-semibold mb-4'>Requirements</h1>
                            <ul className='list-disc ml-5 sm:ml-6 space-y-2'>
                                <li className='text-white text-base sm:text-lg'>Support and improvement of existing projects, as well as the introduction of new functionality;</li>
                                <li className='text-white text-base sm:text-lg'>Teamwork with other developers, QA testers, backend programmers and UI/UX designers.</li>
                            </ul>
                        </div>

                        {/* Tasks */}
                        <div className='mt-10' data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
                            <h1 className='text-white text-lg sm:text-xl font-semibold mb-4'>Tasks</h1>
                            <ul className='list-disc ml-5 sm:ml-6 space-y-2'>
                                <li className='text-white text-base sm:text-lg'>Knowledge of the application structure of PWA(Progressive Web App), SPA(Single Page Application), SSR(Server-Side Rendering), MF(Mutual Funds);</li>
                                <li className='text-white text-base sm:text-lg'>Understanding the principles of SOLID, KISS, DRY.</li>
                                <li className='text-white text-base sm:text-lg'>More than 2 years of work experience.(active development for more than 1 year);</li>
                                <li className='text-white text-base sm:text-lg'>Knowledge of JavaScript and its basic concepts (prototypical inheritance, event loop, closures, this keyword, etc.);</li>
                                <li className='text-white text-base sm:text-lg'>Knowledge of modern methods of writing code in JavaScript and TypeScript;</li>
                                <li className='text-white text-base sm:text-lg'>Work experience with Vue.js 2.3, Pinia, Vue Router;</li>
                                <li className='text-white text-base sm:text-lg'>Ability to work with Axios and API;</li>
                                <li className='text-white text-base sm:text-lg'>Knowledge of Tailwind CSS and good layout skills;</li>
                                <li className='text-white text-base sm:text-lg'>Experience working with NPM/ Yarn for package management;</li>
                                <li className='text-white text-base sm:text-lg'>Experience working with project builders in Vue, Vue CLI, Webpack, Rollup;</li>
                                <li className='text-white text-base sm:text-lg'>Knowledge of Git, Shell Commands, Git Flow;</li>
                                <li className='text-white text-base sm:text-lg'>Experience working with Nuxt.js;</li>
                                <li className='text-white text-base sm:text-lg'>Willingness to constantly learn and explore new technologies.</li>
                            </ul>

                            <button
                                onClick={() => setShowModal(true)}
                                className='bg-white mt-10 sm:mt-14 text-[#0086EE] px-6 sm:px-9 py-2 text-base font-bold shadow-lg drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)] w-full sm:w-auto'
                                data-aos="zoom-in"
                                data-aos-delay="400"
                                data-aos-duration="700"
                            >
                                Apply now
                            </button>
                        </div>

                    </div>
                </section>


            </main>
            <Footer />
        </>
    );
};

export default vacansy;