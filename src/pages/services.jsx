import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';
import { useTranslation } from "react-i18next";
import "../i18";
import AOS from 'aos';
import 'aos/dist/aos.css';

const servicesList = [
    {
        slug: 'web-development',
        title: 'webdevelopment',
        description: 'web_apps',
        image: 'https://picsum.photos/id/1011/400/200'
    },
    {
        slug: 'mobile-apps',
        title: 'mobile',
        description: 'mobile_apps',
        image: 'https://picsum.photos/id/1012/400/200'
    },
    {
        slug: 'ui-ux',
        title: 'UX/UI',
        description: 'seo_boost',
        image: 'https://picsum.photos/id/1013/400/200'
    },
    {
        slug: 'seo-optimization',
        title: 'seo_optimization',
        description: 'seo_boost',
        image: 'https://picsum.photos/id/1014/400/200'
    },
    {
        slug: 'smm',
        title: 'smmtex',
        description: 'seo_optimization',
        image: 'https://picsum.photos/id/1015/400/200'
    },
    {
        slug: 'marketing-strategy',
        title: 'marketing',
        description: 'data_marketing',
        image: 'https://picsum.photos/id/1016/400/200'
    },
    {
        slug: 'telegram-bot',
        title: 'telegram_Bot',
        description: 'telegram_bot_tex',
        image: 'https://picsum.photos/id/1032/400/200'
    },
    {
        slug: 'target-ads',
        title: 'target',
        description: 'ad_campaigns',
        image: 'https://picsum.photos/id/1018/400/200'
    },
    {
        slug: 'video-production',
        title: 'video_Production',
        description: 'video_content',
        image: 'https://picsum.photos/id/1019/400/200'
    },
    {
        slug: 'promo-video',
        title: 'promo_Video',
        description: 'promo_video',
        image: 'https://picsum.photos/id/1020/400/200'
    },
    {
        slug: 'video-montage',
        title: 'video_Montage',
        description: 'montage_solutions',
        image: 'https://picsum.photos/id/1021/400/200'
    },
    {
        slug: 'programming',
        title: 'programming',
        description: 'business_programming',
        image: 'https://picsum.photos/id/1022/400/200'
    }
];


const Services = () => {

    const { t } = useTranslation();

    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate(`/service/${slug}`);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <>
            <Header />
            <main className="mt-20 px-5 xl:px-14 container mx-auto">
                <h1
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="text-white md:text-[108px] text-[48px] font-black ml-5 uppercase mb-10 text-center md:text-left drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]"
                >
                    {t("services")}
                </h1>

                <div className="grid grid-cols-1 mb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {servicesList.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick(service.slug)}
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-delay={`${index * 200}`} // Delay each item sequentially
                            className="bg-[#16182B] rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-all"
                        >
                            <img src={service.image} alt={t(service.title)} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h2 className="text-white font-bold text-lg">{t(service.title)}</h2>
                                <p className="text-gray-300 text-sm">{t(service.description)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

        </>
    );
};

export default Services;
