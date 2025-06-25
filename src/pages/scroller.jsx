import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Logomarqee from "../components/ui/logomarquee";
import Achievements from "../components/ui/achivements";

gsap.registerPlugin(ScrollTrigger);

const Scroller = ({ t, Logocloud, Video }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const boxes = gsap.utils.toArray(".box");

    gsap.to(boxes, {
      xPercent: -100 * (boxes.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <div>
      <section className="bg-[#16182B] md:py-20 overflow-hidden">
        {/* Logo slider */}
        <div className="md:mb-24" data-aos="fade-up" data-aos-duration="1200">
          <Logomarqee />
        </div>

        {/* Horizontal scroll section */}
        <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
          <div ref={containerRef} className="flex w-[300vw] h-full">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="box w-screen h-full flex items-center justify-center bg-[#16182B] px-5 md:px-10 lg:px-20"
              >
                <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                  {/* Left Text */}
                  <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
                    <h1 className="text-white font-black text-3xl sm:text-5xl md:text-[65px] xl:text-[100px] leading-tight drop-shadow-[0_5px_30px_rgba(0,112,244,0.8)] transition duration-300">
                      {t("who_are_we")}
                    </h1>
                    <p className="text-white font-normal text-sm sm:text-base md:text-base lg:text-xl leading-relaxed tracking-wide text-opacity-90">
                      {t("description1")}
                    </p>
                  </div>

                  {/* Right Image */}
                  <div className="w-full md:w-1/2 flex justify-center relative group">
                    <img
                      src={Logocloud}
                      alt="Logo Cloud"
                      className="w-full max-w-[300px] sm:max-w-[400px] xl:max-w-[500px] lg:max-w-[600px] object-contain md:object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/10 rounded-2xl pointer-events-none" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video and Text Section */}
        <div
          className="container mx-auto flex flex-col md:flex-row items-center justify-start gap-6 mt-16 md:mt-24 mb-16 md:mb-24 px-5 md:px-10 lg:px-20"
          data-aos="fade-up"
        >
          <video
            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:w-[265px] rounded-2xl shadow-lg ring-1 ring-white/10"
            controls
            src={Video}
            autoPlay
            loop
          />
          <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl text-center md:text-left">
            {t("see_our_company")}
          </h1>
        </div>

        {/* Achievements section */}
        <div data-aos="fade-up">
          <Achievements />
        </div>
      </section>
    </div>
  );
};

export default Scroller;
