import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/layouts/header';
import ScrollProgressBar from '../components/progressLine/progressline';
import Primary from './primary';
import Scroller from './scroller';
import Teams from './teams';
import Faq from './Faq';
import PrimaryService from './PrimaryService'
import Video from '../assets/video/ipro.mp4';
import Logocloud from '../assets/images/iPro11.png';
import CardBg from '../assets/images/cardbg.png';
import StarsRightImg from "../assets/images/starsright.png";
import StarsLeftImg from "../assets/images/starsleft.png";
import IproIMage from "../assets/images/iproLogoRegister.png";

import TestimonialSlider from '../components/ui/scrollcardworkers';
import { teamMembers } from '../mocks/mock';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('question');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <ScrollProgressBar />
      <Primary t={t} handleCardClick={handleCardClick} Video={Video} />
      <Scroller t={t} Video={Video} Logocloud={Logocloud} />
      <TestimonialSlider />
      <Teams t={t} StarsRightImg={StarsRightImg} CardBg={CardBg} />
      {/* Portfolio Cards */}
      <PrimaryService StarsLeftImg={StarsLeftImg} t={t}/>

      <Faq
        t={t}
        StarsRightImg={StarsRightImg}
        IproIMage={IproIMage}
      />
    </>
  );
};

export default AboutUs;
