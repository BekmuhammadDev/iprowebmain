import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sampleVideo from "../assets/video/ipro.mp4";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
    const videoRef = useRef(null);
    const textRef = useRef(null);
    const containerRef = useRef(null);
    const windmillRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        // Videoning boshlang‘ich holati
        gsap.set(video, {
            width: "100vw",
            height: "100vh",
            x: "0%",
            y: "0%",
            scale: 1,
        });

        // Scroll animatsiya (start va end holati)
        gsap.to(video, {
            width: "300px",   // Kichik hajmga o‘tish
            height: "auto",   // Proporsiyalarni saqlash
            x: "-50%",        // Chapga siljish
            y: "-50%",        // Pastga siljish
            scale: 1,
            transformOrigin: "center center",
            duration: 2,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true,
                pin: true, // 📌 Video joyida qoladi
            },
        });

        // Matn asta-sekin chiqadi
        gsap.to(textRef.current, {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        // **Windmill aylanishi**
        const tl = gsap.timeline({
            scrollTrigger: {
                scrub: 1,
                pin: true,
                trigger: "#pin-windmill",
                start: "50% 50%",
                endTrigger: "#pin-windmill-wrap",
                end: "bottom 50%",
            },
        });

        tl.to("#pin-windmill-svg", {
            rotateZ: 900, // 900° ga aylanish
        });

    }, []);

    return (
        <main className="overflow-hidden flex flex-col">

            {/* VIDEO SECTION (PIN bilan) */}
            <section ref={containerRef} className="relative w-full h-screen flex items-center justify-center">
                <div className="pin-spacer relative w-full h-screen flex items-center justify-center">
                    <video
                        ref={videoRef}
                        className="absolute object-cover"
                        autoPlay
                        muted
                        loop
                    >
                        <source src={sampleVideo} type="video/mp4" />
                    </video>
                </div>
            </section>

            {/* WINDMILL ANIMATION */}
            <section id="pin-windmill-wrap" className="relative h-screen flex items-center justify-center">
                <div id="pin-windmill" className="relative">
                    <svg 
                        id="pin-windmill-svg"
                        ref={windmillRef} 
                        width="150" 
                        height="150" 
                        viewBox="0 0 150 150" 
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="75" cy="75" r="70" stroke="white" strokeWidth="10"/>
                        <line x1="75" y1="5" x2="75" y2="145" stroke="white" strokeWidth="10"/>
                        <line x1="5" y1="75" x2="145" y2="75" stroke="white" strokeWidth="10"/>
                    </svg>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section
                ref={textRef}
                className="container mx-auto mt-20 flex justify-between items-center opacity-0 transition-opacity duration-500"
            >
                <div className="w-1/2">
                    <h2 className="text-white text-2xl font-medium">Premium Web Design Agency</h2>
                    <h1 className="text-white text-[80px] font-bold">Brands growth</h1>
                    <p className="text-white text-xl font-medium">
                        Custom Websites, Mobile Apps, Branding & Digital <br /> Marketing, other services
                    </p>
                    <button className="w-80 h-16 bg-white text-[#0086EE] text-2xl font-semibold mt-[37px]">
                        Speak with Expert
                    </button>
                </div>
            </section>

            {/* EXTRA SPACE - Pastga skroll qilish uchun */}
            <section className="h-[150vh] bg-gray-900 flex items-center justify-center">
                <h1 className="text-white text-5xl">More Content Below</h1>
            </section>

        </main>
    );
};

export default AboutUs;
