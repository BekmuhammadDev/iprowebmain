"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { portfolioData } from "../mocks/mock"; // sizdagi portfolio data

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = ({ t }) => {
  const containerRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card");

      // Barcha kartalarni markazga joylashtirib, ko‘rinmas qilib qo‘yamiz
      gsap.set(cards, {
        opacity: 0,
        scale: 1,
        xPercent: -50,
        yPercent: -50,
        left: "50%",
        top: "50%",
      });

      // 1-kartani pin qilish
      gsap.to(cards[0], {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${portfolioData.length * 100}%`,
          scrub: true,
          pin: true,
        },
        opacity: 1,
        x: 0,
        y: 0,
        ease: "power2.out",
      });

      // Qolgan kartalarni aylana bo‘ylab chiqaramiz
      const radius = 300;
      const total = portfolioData.length - 1;

      cards.slice(1).forEach((card, i) => {
        const angle = (i / total) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        gsap.to(card, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${(i + 1) * 60}% top`,
            end: "+=30%",
            scrub: true,
          },
          opacity: 1,
          x,
          y,
          ease: "power2.out",
        });
      });

      // Info qismini oxirida ko‘rsatamiz
      gsap.to(infoRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top+=${portfolioData.length * 80}% top`,
          end: "+=20%",
          scrub: true,
        },
        opacity: 1,
        y: -50,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const sectionHeight = `${(portfolioData.length + 3) * 100}vh`;

  return (
    <section className={`text-white w-full`} style={{ height: sectionHeight, overflow: "hidden", position: "relative" }}>
      <div
        className="sticky top-0 w-full h-screen flex items-center justify-center"
        ref={containerRef}
      >
        {/* PORTFOLIO sarlavhasi */}
        <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[48px] md:text-[100px] uppercase font-black text-center drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)] z-20">
          {t("portfolio")}
        </h1>

        {/* Kartalar joylashadi */}
        <div className="absolute inset-0">
          {portfolioData.map((item) => (
            <div
              key={item.id}
              className="card absolute w-[220px] h-[320px] bg-blue-500 rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 w-full text-center text-white font-bold p-2">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Info bo‘limi */}
        <div
          ref={infoRef}
          className="opacity-0 absolute z-10 bottom-20 left-1/2 -translate-x-1/2 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t("portfolio_info_title")}
          </h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            {t("portfolio_info_description")}
          </p>
          <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            {t("learn_more")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
