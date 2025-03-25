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
                    } else {
                        setInView(false);
                    }
                });
            },
            { threshold: 0.5 } // 50% chiqsa ishga tushadi
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
        <div ref={ref} className=" py-5 flex justify-center my-[10px]">
            <div className="flex flex-col sm:flex-row items-center justify-center text-white gap-8 sm:gap-[50px]">
                {achievementsList.map((achievement, index) => (
                    <div key={index} className="flex items-center">
                        {index !== 0 && (
                            <div className="hidden sm:block h-32 w-[1px] bg-gray-500 mx-14"></div>
                        )}
                        <div className="text-center">

                            <h2 className="text-5xl font-bold">
                                {inView && (
                                    <CountUp
                                        start={0}
                                        end={achievement.value}
                                        duration={3}
                                        separator=","
                                    />
                                )}
                                {achievement.postfix && (
                                    <span className="ml-1">{achievement.postfix}</span>
                                )}
                            </h2>

                            <p className="text-5xl text-gray-300 font-bold">
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
