import CountUp from "react-countup";
import { useEffect, useState, useRef } from "react";

const achievementsList = [
    { metric: "Projects", value: 100, postfix: "+" },
    { metric: "Partners", value: 50, postfix: "+" },
    { metric: "Achievements", value: 30 },
    { metric: "Year", value: 5 },
];

const Achievements = () => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className="py-5 flex justify-center my-10">
            <div className="flex flex-col sm:flex-row items-center justify-center text-white gap-8 sm:gap-[50px]">
                {achievementsList.map((achievement, index) => (
                    <div key={index} className="flex items-center">
                        {/* Chiziq faqat katta ekranda chiqadi */}
                        {index !== 0 && (
                            <div className="hidden sm:block h-20 w-[1px] bg-gray-500 mx-8"></div>
                        )}
                        <div className="text-center">
                            <h2 className="text-4xl sm:text-5xl font-bold">
                                {inView && (
                                    <CountUp start={0} end={achievement.value} duration={3} separator="," />
                                )}
                                {achievement.postfix && <span className="ml-1">{achievement.postfix}</span>}
                            </h2>
                            <p className="text-xl sm:text-2xl text-gray-300 font-semibold">
                                {achievement.metric}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
