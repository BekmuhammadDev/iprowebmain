import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaQuestion } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Primary = ({ t, handleCardClick, Video }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const topImgRef = useRef(null);
  const bottomImgRef = useRef(null);
  const bottomRightImgRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const content = contentRef.current;
    const leftImg = leftImgRef.current;
    const rightImg = rightImgRef.current;
    const topImg = topImgRef.current;
    const bottomImg = bottomImgRef.current;
    const bottomRightImg = bottomRightImgRef.current;

    // Dastlabki holat
    gsap.set(video, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",     // 100% o‘rniga 100vw
      height: "100vh",
      objectFit: "cover",
      zIndex: 50,
    });

    gsap.set(content, {
      opacity: 0,
      x: -100,  // Chapdan chiqish
      position: "fixed",
      top: "60%",
      left: "10%",
      transform: "translateY(-50%)",
      zIndex: 50,
      width: "35%",
    });

    gsap.set(leftImg, {
      opacity: 0,
      x: -50,
      position: "fixed",
      top: "50%",
      left: "calc(65% - 15vw - 10px)",
      transform: "translateY(-50%)",
      zIndex: 20,
      width: "15vw",
    });

    gsap.set(rightImg, {
      opacity: 0,
      x: 50,
      position: "fixed",
      top: "50%",
      left: "calc(58% + 30vw + 10px)",
      transform: "translateY(-50%)",
      zIndex: 20,
      width: "9vw",
    });

    gsap.set(topImg, {
      opacity: 0,
      y: -50,
      position: "fixed",
      top: "88px",
      left: "70%",
      transform: "translateX(-50%)",
      zIndex: 20,
      width: "15vw",
    });

    gsap.set(bottomImg, {
      opacity: 0,
      y: 50,
      position: "fixed",
      top: "calc(25% + 25vh + 10px)",
      left: "60%",
      transform: "translateX(-50%)",
      zIndex: 20,
      width: "15vw",
    });

    gsap.set(bottomRightImg, {
      opacity: 0,
      y: 50,
      position: "fixed",
      top: "calc(33% + 25vh + 10px)",
      left: "90%",
      transform: "translateX(-50%)",
      zIndex: 20,
      width: "15vw",
    });

    if (window.innerWidth <= 700) {
      // Ekran 700px yoki kichik — animatsiya 1s ichida ko‘rsatiladi
      const tl = gsap.timeline();

      tl.to(video, {
        width: "90vw",
        height: "40vh",
        top: "10%",
        left: "5%",
        position: "fixed",
        objectFit: "contain",
        zIndex: 10,
        duration: 1,
        ease: "power2.out",
      });

      tl.to(content, {
        opacity: 1,
        x: 0,  // O'ngga qarab harakatlanadi
        duration: 1,
        ease: "power2.out",
        delay: 1, // 1 sekund kechikish qo'shiladi
      }, "<");

      tl.to([leftImg, rightImg, topImg, bottomImg, bottomRightImg], {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
      }, "<");
    } else {
      // Katta ekranlar uchun scrollTrigger bilan animatsiya
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1000",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(video, {
        width: "30vw",
        height: "50vh",
        top: "25%",
        left: "60%",
        xPercent: -10,
        yPercent: -10,
        position: "fixed",
        objectFit: "contain",
        zIndex: 10,
        duration: 2,
      });

      tl.to(content, {
        opacity: 1,
        x: 0,
        duration: 1.5,
        delay: 1, // 1 sekund kechikish
      }, "<");

      tl.to(leftImg, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
      }, "<0.2");

      tl.to(rightImg, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
      }, "<0.2");

      tl.to(topImg, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }, "<0.2");

      tl.to(bottomImg, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }, "<0.2");

      tl.to(bottomRightImg, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }, "<0.2");
    }

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100vh] bg-black text-white">
      <video
        ref={videoRef}
        className="pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={Video} type="video/mp4" />
      </video>

      <div ref={contentRef} className="p-8">
        <p className="text-xl lg:text-2xl font-medium">{t("premium_web_design")}</p>
        <h1 className="text-[#0086EE] text-4xl lg:text-6xl font-bold uppercase my-4">
          {t("brands_growth")}
        </h1>
        <p className="text-sm lg:text-xl font-medium mb-6">
          {t("custom_websites")}<br />{t("marketing_services")}
        </p>
        <button className="w-full max-w-[320px] h-[50px] bg-white text-[#0086EE] font-bold uppercase rounded-lg shadow-lg hover:shadow-[0_5px_20px_rgba(0,112,244,0.8)] transition-all">
          {t("speak_expert")}
        </button>
      </div>

      <div ref={leftImgRef} className="opacity-0">
        <img src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png" alt="Left" className="rounded-lg shadow-xl border-2 border-white/20 w-[100px]" />
        <p>HR</p>
      </div>
      <div ref={rightImgRef} className="opacity-0">
        <img src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png" alt="Right" className="rounded-lg shadow-xl border-2 border-white/20 w-[100px]" />
        <p>Mobile</p>
      </div>
      <div ref={topImgRef} className="opacity-0">
        <img src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png" alt="Top" className="rounded-lg shadow-xl border-2 border-white/20 w-[100px]" />
        <p>UI/UX</p>
      </div>
      <div ref={bottomImgRef} className="opacity-0">
        <img src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png" alt="Bottom" className="rounded-lg shadow-xl border-2 border-white/20 w-[100px]" />
        <p>Backend</p>
      </div>
      <div ref={bottomRightImgRef} className="opacity-0">
        <img src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png" alt="Bottom Right" className="rounded-lg shadow-xl border-2 border-white/20 w-[100px]" />
        <p>Front end</p>
      </div>

      <NavLink onClick={handleCardClick}>
        <button className="animate-pulse fixed bottom-10 right-10 z-50 p-4 bg-white rounded-full shadow-xl">
          <FaQuestion size={24} color="#0086EE" />
        </button>
      </NavLink>
    </section>
  );
};

export default Primary;