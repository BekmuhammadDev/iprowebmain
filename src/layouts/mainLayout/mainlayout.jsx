import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Marquee from "../../components/ui/marque";

const MainLayout = () => {
    const [loading, setLoading] = useState(true);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 300); // biroz kechikib kontent ko‘rsatiladi
                    return 100;
                }
                return prev + 1;
            });
        }, 30); // 30ms da 1% => 100% uchun ~3s

        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="loader">
                <div className="intern">{percent}%</div>
                <div className="external-shadow">
                    <div className="central"></div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="fixed top-24 right-2 z-50 bg-blue-500 h-8  text-white px-3 py-1 rounded shadow-lg text-sm font-semibold">
                Sayt test rejimida
            </div>
            <main>
                <Outlet />
            </main>
            <Marquee />
        </div>
    );

};

export default MainLayout;
