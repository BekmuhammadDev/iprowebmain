import { useEffect, useState } from "react";
import CardImg from "../../assets/images/cardimg.png";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        name: "John Doe",
        text: "Working with the team brought a lot of experience and each project was done perfectly with paying attention...",
        img: CardImg,
    },
    {
        name: "Jane Smith",
        text: "A great experience working with professionals who truly care about quality and delivery...",
        img: CardImg,
    },
    {
        name: "Michael Johnson",
        text: "Their expertise helped our project reach new heights, would definitely recommend!",
        img: CardImg,
    },
    {
        name: "Emily Davis",
        text: "Top-notch service, everything was done on time and exceeded our expectations!",
        img: CardImg,
    },
];

export default function TestimonialSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const newIndex = parseInt(entry.target.dataset.index);
                        if (newIndex === activeIndex + 1) {
                            setActiveIndex(newIndex);
                        }
                    }
                });
            },
            { threshold: 0.6, rootMargin: "-30% 0px -30% 0px" }
        );

        const elements = document.querySelectorAll(".testimonial-card");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [activeIndex]);

    return (
        <div className="flex flex-col items-center space-y-10 gap-y-28 px-7  md:gap-y-0 py-32 mb-10 md:mb-[338px] bg-[#16182B] overflow-hidden p-4 md:p-40">
            {testimonials.map((item, index) => (
                <div
                    key={index}
                    data-index={index}
                    className={`testimonial-card  relative mt-20 h-[155px] md:h-[128px] rounded-md  w-full md:w-[550px] p-2 shadow-lg transition-all duration-700 flex flex-col md:flex-row items-center 
                        ${activeIndex >= index
                            ? "opacity-100 scale-105 bg-[#0A0F1F]  text-white drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]"
                            : "opacity-50 scale-95 bg-gray-800 text-gray-300 shadow-md"
                        }
                        
                        ${index % 2 === 0 ? "md:flex-row md:self-start md:rounded-l-full" : "md:flex-row-reverse md:self-end md:rounded-r-full"}`}
                >
                    {/* Iqtibos (Quote) Icon */}
                    <FaQuoteLeft
                        className={`absolute text-white hidden md:flex text-3xl 
                            ${index % 2 === 0 ? "-top-4 right-20" : "-top-4 left-80"} 
                            ${index === 1 || index === 3 ? "ml-[-20px]" : ""}`}
                    />

                    {/* Rasm */}
                    <img
                        src={item.img}
                        alt={item.name}
                        className={`relative bottom-24 md:bottom-0 w-[131px] h-[131px] md:w-[131px] md:h-[133px] rounded-full shadow-lg mb-4 md:mb-0 
                            ${index === 0 ? "left-[-30px]" : ""} 
                            ${index === 1 ? "left-[30px]" : ""} 
                            ${index === 2 ? "left-[-30px]" : ""} 
                            ${index === 3 ? "left-[30px]" : ""}`}
                    />

                    {/* Matn qismi */}
                    <div className="text-center relative bottom-24 md:bottom-0 md:text-left">
                        <h3 className="text-lg md:text-xl font-semibold border-b-2 border-blue-400 pb-1">{item.name}</h3>
                        <p className="text-sm mt-2">{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}