import { useEffect, useState } from "react";
import CardImg from "../../assets/images/cardimg.png";
import { FaQuoteLeft } from "react-icons/fa";
import StarsLeft from "../../assets/images/starsleft.png";
import StarsRight from "../../assets/images/starsright.png";
import { useTranslation } from "react-i18next";
import "../../i18";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function TestimonialSlider() {
  const { t } = useTranslation();

  const testimonials = [
    { name: "John Doe", text: t("description2"), img: CardImg },
    { name: "Jane Smith", text: t("description3"), img: CardImg },
    { name: "Michael Johnson", text: t("description4"), img: CardImg },
    { name: "Emily Davis", text: t("description5"), img: CardImg },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll(".testimonial-card");

    // timeline yaratamiz
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonial-cards-wrapper",
        start: "top 80%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });

    elements.forEach((el, i) => {
      const direction = i % 2 === 0 ? -200 : 200;
      tl.fromTo(
        el,
        { x: direction, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        i * 0.3 // elementlar ketma-ket chiqadi
      );
    });

    // IntersectionObserver faollik uchun
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newIndex = parseInt(entry.target.dataset.index);
            setActiveIndex((prev) => (newIndex > prev ? newIndex : prev));
          }
        });
      },
      { threshold: 0.6, rootMargin: "-30% 0px -30% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  return (
   <div className="overflow-hidden min-h-[950px] md:h-[950px]">
  <div className="hidden md:flex relative">
    <img className="absolute -right-20 top-0" src={StarsRight} alt="#" />
  </div>
  <div className="testimonial-cards-wrapper flex flex-col items-center space-y-10 gap-y-28 px-4 md:gap-y-0 py-20 md:py-32 mb-10 md:mb-[338px] overflow-hidden md:px-40">
    {testimonials.map((item, index) => (
      <div
        key={index}
        data-index={index}
        className={`testimonial-card relative rounded-md w-full md:w-[550px] p-4 shadow-lg transition-all duration-700 flex flex-col md:flex-row items-center
        ${
          activeIndex >= index
            ? "opacity-100 scale-105 bg-[#0A0F1F] text-white drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]"
            : "opacity-50 scale-95 bg-gray-800 text-gray-300 shadow-md"
        }
        ${
          index % 2 === 0
            ? "md:self-start md:rounded-l-full"
            : "md:flex-row-reverse md:self-end md:rounded-r-full"
        }`}
      >
        <FaQuoteLeft
          className={`absolute text-white hidden md:flex text-3xl
          ${index % 2 === 0 ? "-top-4 right-20" : "-top-4 left-80"}
          ${index === 1 || index === 3 ? "ml-[-20px]" : ""}`}
        />

        <img
          src={item.img}
          alt={item.name}
          className="w-[110px] h-[110px] md:w-[131px] md:h-[133px] rounded-full shadow-lg mb-4 md:mb-0"
        />

        <div className="text-center md:text-left md:ml-5">
          <h3 className="text-base md:text-xl font-semibold border-b-2 border-blue-400 pb-1">{item.name}</h3>
          <p className="text-sm mt-2">{item.text}</p>
        </div>
      </div>
    ))}
  </div>
  <div className="hidden md:flex relative">
    <img className="absolute" src={StarsLeft} alt="#" />
  </div>
</div>

  );
}
