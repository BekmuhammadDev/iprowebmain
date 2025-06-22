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
    const cards = document.querySelectorAll(".testimonial-card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonial-cards-wrapper",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    cards.forEach((card, i) => {
      const fromDir = i % 2 === 0 ? { x: -150, y: 20, rotate: -5 } : { x: 150, y: 20, rotate: 5 };

      tl.fromTo(
        card,
        {
          ...fromDir,
          opacity: 0,
          scale: 0.9,
          filter: "blur(8px)",
          clipPath: "inset(10% 20% 10% 20%)",
        },
        {
          x: 0,
          y: 0,
          rotate: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.9,
          ease: "power4.out",
        },
        i * 0.25
      );
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.index);
            setActiveIndex((prev) => (idx > prev ? idx : prev));
          }
        });
      },
      { threshold: 0.6 }
    );

    cards.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-[#0A0F1F] via-[#101935] to-[#0A0F1F] py-24 px-4 md:px-28">
      {/* Dekorativ yulduzlar */}
      <img className="absolute top-0 right-0 w-32 opacity-20 animate-pulse" src={StarsRight} alt="stars" />
      <img className="absolute bottom-0 left-0 w-32 opacity-20 animate-spin-slow" src={StarsLeft} alt="stars" />

      <div className="testimonial-cards-wrapper space-y-28 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            data-index={index}
            className={`testimonial-card w-full md:w-[80%] flex flex-col md:flex-row items-center gap-6 
              ${index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:mr-0 md:ml-auto"}
              transition-all duration-700 group`}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full border-4 border-blue-400/30 shadow-xl"
            />

            <div
              className={`w-full md:w-[75%] p-6 rounded-3xl backdrop-blur-md border border-blue-500/10 relative z-10 
                ${
                  activeIndex >= index
                    ? "bg-[#11172A] text-white shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50"
                    : "bg-[#11172A]/70 text-gray-400 shadow-md"
                }`}
            >
              <FaQuoteLeft className="text-blue-400 text-2xl absolute top-4 right-4" />
              <h3 className="text-lg font-semibold mb-2 text-blue-300">{item.name}</h3>
              <p className="text-sm leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
