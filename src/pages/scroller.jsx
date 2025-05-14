import { useEffect, useRef } from "react";
import Logomarqee from "../components/ui/logomarquee";
import Achievements from "../components/ui/achivements";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import IMg1 from "../assets/icons/img1.jpg"
// import IMg2 from "../assets/icons/img2.jpg"
// import IMg3 from "../assets/icons/img3.jpg"
// import IMg4 from "../assets/icons/img4.jpg"


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
        <div className="md:mb-24" data-aos="fade-up" data-aos-duration="1200">
          <Logomarqee />
        </div>

        <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
          <div ref={containerRef} className="flex w-[300vw] h-full">
            {/* Box 1 */}
            <div className="box w-screen h-full flex items-center justify-center bg-[#16182B]">
              <div className="container mx-auto md:max-w-none 2xl:max-w-none flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-5 md:px-10 lg:px-20">
                <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 space-y-4">
                  <h1 className="text-white font-black text-3xl sm:text-5xl md:text-[65px] xl:text-[100px] leading-tight drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                    {t("who_are_we")}
                  </h1>
                  <p className="text-white font-normal text-sm sm:text-base md:text-sm lg:text-xl">
                    {t("description1")}
                  </p>
                </div>
                <div className="w-full mt-20 md:mt-0 md:w-1/2 flex justify-center">
                  <img
                    src={Logocloud}
                    alt="Logo Cloud"
                    className="w-full max-w-[300px] sm:max-w-[400px] xl:max-w-[500px] lg:max-w-[600px] h-auto object-contain md:object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="box w-screen h-full flex items-center justify-center bg-[#16182B]">
              <div className="container mx-auto md:max-w-none 2xl:max-w-none flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-5 md:px-10 lg:px-20">
                <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 space-y-4">
                  <h1 className="text-white font-black text-3xl sm:text-5xl md:text-[65px] xl:text-[100px] leading-tight drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                    {t("who_are_we")}
                  </h1>
                  <p className="text-white font-normal text-sm sm:text-base md:text-sm lg:text-xl">
                    {t("description1")}
                  </p>
                </div>
                <div className="w-full mt-20 md:mt-0 md:w-1/2 flex justify-center">
                  <img
                    src={Logocloud}
                    alt="Logo Cloud"
                    className="w-full max-w-[300px] sm:max-w-[400px] xl:max-w-[500px] lg:max-w-[600px] h-auto object-contain md:object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="box w-screen h-full flex items-center justify-center bg-[#16182B]">
              <div className="container mx-auto md:max-w-none 2xl:max-w-none flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-5 md:px-10 lg:px-20">
                <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 space-y-4">
                  <h1 className="text-white font-black text-3xl sm:text-5xl md:text-[65px] xl:text-[100px] leading-tight drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                    {t("who_are_we")}
                  </h1>
                  <p className="text-white font-normal text-sm sm:text-base md:text-sm lg:text-xl">
                    {t("description1")}
                  </p>
                </div>
                <div className="w-full mt-20 md:mt-0 md:w-1/2 flex justify-center">
                  <img
                    src={Logocloud}
                    alt="Logo Cloud"
                    className="w-full max-w-[300px] sm:max-w-[400px] xl:max-w-[500px] lg:max-w-[600px] h-auto object-contain md:object-cover"
                  />
                </div>
              </div>
            </div>
            
          </div>
        </section>

        <div
          className="container mx-auto sm:max-w-none flex flex-col md:flex-row items-center px-5 md:px-10 lg:px-20 justify-start gap-6 mt-16 md:mt-24 mb-16 md:mb-24"
          data-aos="fade-up"
        >
          <video
            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:w-[265px] rounded-lg shadow-lg"
            controls
            src={Video}
            autoPlay
            loop
          />
          <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl text-center md:text-left">
            {t("see_our_company")}
          </h1>
        </div>

        <div data-aos="fade-up">
          <Achievements />
        </div>
      </section>
    </div>
  );
};

export default Scroller;
