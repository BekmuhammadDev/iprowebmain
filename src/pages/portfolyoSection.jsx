"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { portfolioData } from "../mocks/mock";

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = ({ t }) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const infoRef = useRef(null);
  const blurWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      if (vw < 768) return; // Mobil versiyada animatsiyani o'chiramiz

      const scaleX = Math.min(vw * 0.25, 300);
      const scaleY = Math.min(vh * 0.25, 300);

      const positions = [
        [0, 0],
        [scaleX, -scaleY],
        [-scaleX, scaleY],
        [scaleX * 0.7, scaleY * 1.2],
        [-scaleX * 0.9, -scaleY * 1.1],
        [0, scaleY * 1.3],
        [scaleX * 1.2, 0],
        [-scaleX * 1.2, 0],
        [scaleX * 0.5, -scaleY * 1.4],
        [-scaleX * 0.5, scaleY * 1.4],
        [scaleX * 1.1, -scaleY * 1.1],
        [-scaleX * 1.1, scaleY * 1.1],
        [0, -scaleY * 1.5],
      ];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${portfolioData.length * 700 + 1000}`,
          scrub: true,
          pin: true,
        },
      });

      cardsRef.current.forEach((card, i) => {
        const [x, y] = positions[i % positions.length];
        tl.to(
          card,
          {
            opacity: 1,
            scale: 1,
            x,
            y,
            duration: 1,
            ease: "power2.out",
          },
          i * 1
        );
      });

      tl.to(
        blurWrapperRef.current,
        {
          filter: "blur(6px)",
          duration: 1,
          ease: "power1.out",
        },
        `+=0.5`
      );

      tl.to(
        infoRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=1"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen text-white"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row md:items-center md:justify-center overflow-hidden">
        <h1 className="absolute top-5 md:top-10 left-1/2 -translate-x-1/2 text-[28px] sm:text-[36px] md:text-[64px] xl:text-[80px] uppercase font-black text-center drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)] z-30">
          {t("portfolio")}
        </h1>

        <div
          ref={blurWrapperRef}
          className="absolute inset-0 transition-all duration-500 md:block hidden"
        >
          {portfolioData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="card fixed w-[160px] h-[240px] sm:w-[180px] sm:h-[280px] md:w-[200px] md:h-[300px] xl:w-[220px] xl:h-[320px] bg-blue-500 rounded-xl overflow-hidden shadow-2xl cursor-pointer z-10"
              style={{
                opacity: 0,
                transform: "translate(-50%, -50%)",
                left: "50%",
                top: "50%",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 w-full text-center text-white font-bold p-2 text-xs sm:text-sm md:text-base">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Mobil versiya uchun oddiy kartalar */}
        <div className="md:hidden w-full px-4 pt-20 pb-10 space-y-6 overflow-y-auto">
          {portfolioData.map((item) => (
            <div
              key={item.id}
              className="w-full bg-blue-500 rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 object-cover"
              />
              <div className="bg-black bg-opacity-50 w-full text-center text-white font-bold p-3">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        <div
          ref={infoRef}
          className="absolute bottom-[10%] md:bottom-[20%] left-1/2 -translate-x-1/2 z-50 text-center opacity-0 translate-y-10 transition-all duration-500"
        >
          <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-semibold mb-4 max-w-[90vw]">
            {t("portfolioInfo") || "All projects displayed successfully!"}
          </p>
          <button className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-bold text-xs sm:text-sm md:text-base shadow-lg transition">
            {t("seeMore") || "See More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
