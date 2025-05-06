import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Primary = ({ t, Video }) => {
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
    const container = containerRef.current;
  
    if (
      !video || !content || !leftImg || !rightImg ||
      !topImg || !bottomImg || !bottomRightImg || !container
    ) {
      console.warn("Refs are missing");
      return;
    }
  
    // Refs boshlang‘ich holatga keltiriladi
    gsap.set(video, { objectFit: "cover", zIndex: 50 });
    gsap.set(content, { opacity: 0, x: -100, zIndex: 50 });
    gsap.set([leftImg, rightImg, topImg, bottomImg, bottomRightImg], { opacity: 0 });
  
    // ScrollTrigger media query bilan
    ScrollTrigger.matchMedia({
      // Katta ekranlar
      "(min-width: 1200px)": () => {
        gsap.set(video, {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        });
  
        gsap.set(content, {
          position: "fixed",
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
          width: "35%",
        });
  
        gsap.set(leftImg, {
          x: -50,
          position: "fixed",
          top: "50%",
          left: "calc(65% - 15vw - 10px)",
          transform: "translateY(-50%)",
          width: "15vw",
          zIndex: 20,
        });
  
        gsap.set(rightImg, {
          x: 50,
          position: "fixed",
          top: "50%",
          left: "calc(58% + 30vw + 10px)",
          transform: "translateY(-50%)",
          width: "9vw",
          zIndex: 20,
        });
  
        gsap.set(topImg, {
          y: -50,
          position: "fixed",
          top: "88px",
          left: "70%",
          transform: "translateX(-50%)",
          width: "15vw",
          zIndex: 20,
        });
  
        gsap.set(bottomImg, {
          y: 50,
          position: "fixed",
          top: "calc(25% + 25vh + 10px)",
          left: "60%",
          transform: "translateX(-50%)",
          width: "15vw",
          zIndex: 20,
        });
  
        gsap.set(bottomRightImg, {
          y: 50,
          position: "fixed",
          top: "calc(33% + 25vh + 10px)",
          left: "90%",
          transform: "translateX(-50%)",
          width: "15vw",
          zIndex: 20,
        });
  
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=1000",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true, // MUHIM: qayta hisoblashda kerak
          },
        });
  
        tl.to(video, {
          width: "30vw",
          height: "50vh",
          top: "25%",
          left: "60%",
          xPercent: -10,
          yPercent: -10,
          objectFit: "contain",
          zIndex: 10,
          duration: 2,
        });
  
        tl.to(content, { opacity: 1, x: 0, duration: 1.5, delay: 1 }, "<");
        tl.to(leftImg, { opacity: 1, x: 0, duration: 1 }, "<0.2");
        tl.to(rightImg, { opacity: 1, x: 0, duration: 1 }, "<0.2");
        tl.to(topImg, { opacity: 1, y: 0, duration: 1 }, "<0.2");
        tl.to(bottomImg, { opacity: 1, y: 0, duration: 1 }, "<0.2");
        tl.to(bottomRightImg, { opacity: 1, y: 0, duration: 1 }, "<0.2");
      },
  
      // Kichik ekranlar
      "(max-width: 1199px)": () => {
        gsap.set(video, {
          position: "relative",
          width: "100%",
          height: "auto",
          zIndex: 0,
        });
  
        gsap.set(content, {
          opacity: 1,
          x: 0,
          position: "relative",
          width: "90%",
          margin: "20px auto",
          transform: "none",
          zIndex: 0,
        });
  
        [leftImg, rightImg, topImg, bottomImg, bottomRightImg].forEach((img) => {
          gsap.set(img, {
            opacity: 1,
            position: "relative",
            width: "100%",
            margin: "10px 0",
            transform: "none",
            zIndex: 0,
          });
        });
      },
    });
  
    // Tozalash
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ScrollTrigger.clearMatchMedia();
    };
  }, []);
  
  
  
  
  
  

  

  return (
    <section ref={containerRef} className="relative min-h-[100vh] bg-black text-white">
      <video ref={videoRef} className="pointer-events-none" autoPlay muted loop playsInline>
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

        <div className="relative w-full max-w-[400px] h-[50px] overflow-hidden border border-blue-500 rounded-lg font-lato">
          <span className="absolute inset-0 flex  items-center justify-center font-bold text-blue-400 hover:text-black text-[20px] pointer-events-none -z-10">
            {t("speak_expert")}
          </span>
          <button
            type="button"
            name="Hover"
            className="w-full h-full flex items-center justify-center font-bold text-[#0086EE] text-[20px] bg-white z-10 border-none hover:text-white transition-colors duration-300 custom-mask-button"
          >
            {t("speak_expert")}
          </button>
        </div>
      </div>

      {/* Images */}
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
    </section>
  );
};

export default Primary;
