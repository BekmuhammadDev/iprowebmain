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
        <div className="flex p-40 flex-col items-center space-y-10 py-16 mb-[338px] bg-[#16182B] overflow-hidden">
            {testimonials.map((item, index) => (
                <div
                    key={index}
                    data-index={index}
                    className={`testimonial-card relative w-[550px] h-[132px] p-6 shadow-lg transition-all duration-700 flex items-center 
                        ${
                            activeIndex >= index
                                ? "opacity-100 scale-105 bg-[#0A0F1F] text-white shadow-xl shadow-blue-500/50"
                                : "opacity-50 scale-95 bg-gray-800 text-gray-300 shadow-md"
                        } 
                        ${index % 2 === 0 ? "flex-row self-start rounded-l-full" : "flex-row-reverse self-end rounded-r-full"}`}
                >
                    {/* Iqtibos (Quote) Icon */}
                    <FaQuoteLeft
                        className={`absolute text-white text-3xl ${
                            index % 2 === 0 ? "-top-4 right-20" : "-top-4 left-80"
                        }`}
                    />

                    <img
                        src={item.img}
                        alt={item.name}
                        className="w-[131px] h-[133px] relative rounded-full shadow-lg"
                        style={{
                            transform: `translateX(${index % 2 === 0 ? "-23px" : "23px"})`,
                        }}
                    />
                    <div>
                        <h3 className="text-xl font-semibold border-b-2 border-blue-400 pb-1">{item.name}</h3>
                        <p className="text-sm mt-2">{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
