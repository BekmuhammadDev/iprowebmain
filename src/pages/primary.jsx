import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Primary = ({ t, Video }) => {
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const topImgRef = useRef(null);
  const bottomImgRef = useRef(null);
  const bottomRightImgRef = useRef(null);
  const containerRef = useRef(null);

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
  ) return;

  window.scrollTo(0, 0);

  let tl;

  const ctx = gsap.context(() => {
    // Match media shart emas — o‘rniga media queryni JS orqali tekshiramiz
    if (window.innerWidth >= 1200) {
      gsap.set([video, content], { zIndex: 50 });
      gsap.set([leftImg, rightImg, topImg, bottomImg, bottomRightImg], { opacity: 0 });

      gsap.set(video, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
      });

      gsap.set(content, {
        position: "fixed",
        top: "50%",
        left: "10%",
        transform: "translateY(-50%)",
        width: "35%",
        opacity: 0,
        x: -100,
      });

      const setImage = (el, styles) => el && gsap.set(el, styles);

      setImage(leftImg, {
        x: -50,
        position: "fixed",
        top: "50%",
        left: "calc(65% - 15vw - 10px)",
        transform: "translateY(-50%)",
        width: "15vw",
        zIndex: 20,
      });

      setImage(rightImg, {
        x: 50,
        position: "fixed",
        top: "50%",
        left: "calc(58% + 30vw + 10px)",
        transform: "translateY(-50%)",
        width: "9vw",
        zIndex: 20,
      });

      setImage(topImg, {
        y: -50,
        position: "fixed",
        top: "88px",
        left: "70%",
        transform: "translateX(-50%)",
        width: "15vw",
        zIndex: 20,
      });

      setImage(bottomImg, {
        y: 50,
        position: "fixed",
        top: "calc(25% + 25vh + 10px)",
        left: "60%",
        transform: "translateX(-50%)",
        width: "15vw",
        zIndex: 20,
      });

      setImage(bottomRightImg, {
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
          invalidateOnRefresh: true,
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
    }
  }, containerRef); // kontekstni containerRef ga bog‘lang

  return () => {
    ctx.revert(); // DOM tiklanadi
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);



  return (
    <section ref={containerRef} className="relative  xl:min-h-[100vh] bg-black text-white">

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

      <div className='hidden xl:flex'>
        <div ref={leftImgRef} className="opacity-0">
          <img src="https://picsum.photos/id/1/200/300" alt="Left" className="rounded-lg shadow-xl border-2 border-white/20 w-[100px]" />
          <p>HR</p>
        </div>
        <div ref={rightImgRef} className="opacity-0">
          <img src="https://picsum.photos/id/2/200/300" alt="Right" className="rounded-lg shadow-xl border-2 border-white/20 w-[100px]" />
          <p>Mobile</p>
        </div>
        <div ref={topImgRef} className="opacity-0">
          <img src="https://picsum.photos/id/3/200/300" alt="Top" className="rounded-lg shadow-xl border-2 border-white/20 w-[100px]" />
          <p>UI/UX</p>
        </div>
        <div ref={bottomImgRef} className="opacity-0">
          <img src="https://picsum.photos/id/4/200/300" alt="Bottom" className="rounded-lg shadow-xl border-2 border-white/20 w-[100px]" />
          <p>Backend</p>
        </div>
        <div ref={bottomRightImgRef} className="opacity-0">
          <img src="https://picsum.photos/id/5/200/300" alt="Bottom Right" className="rounded-lg shadow-xl border-2 border-white/20 w-[100px]" />
          <p>Front end</p>
        </div>
      </div>
    </section>
  );
};

export default Primary;
