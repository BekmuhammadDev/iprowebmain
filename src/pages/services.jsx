import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';

const servicesList = [
    {
        slug: 'web-development',
        title: 'Web Development',
        description: 'We create responsive, fast, and scalable web apps.',
        image: 'https://picsum.photos/id/1011/400/200'
    },
    {
        slug: 'mobile-apps',
        title: 'Mobile Apps',
        description: 'Modern apps for Android & iOS platforms.',
        image: 'https://picsum.photos/id/1012/400/200'
    },
    {
        slug: 'ui-ux',
        title: 'UX/UI',
        description: 'Boost your Google ranking with SEO.',
        image: 'https://picsum.photos/id/1013/400/200'
    },
    {
        slug: 'seo-optimization',
        title: 'SEO Optimization',
        description: 'Boost your Google ranking with SEO.',
        image: 'https://picsum.photos/id/1014/400/200'
    },
    {
        slug: 'smm',
        title: 'SMM',
        description: 'Effective social media marketing.',
        image: 'https://picsum.photos/id/1015/400/200'
    },
    {
        slug: 'marketing-strategy',
        title: 'Marketing Strategy',
        description: 'Data-driven marketing solutions.',
        image: 'https://picsum.photos/id/1016/400/200'
    },
    {
        slug: 'telegram-bot',
        title: 'Telegram Bot',
        description: 'Build a unique and strong telegram bot',
        image: 'https://picsum.photos/id/1032/400/200'
    },
    {
        slug: 'target-ads',
        title: 'Target Ads',
        description: 'Precision-targeted ad campaigns.',
        image: 'https://picsum.photos/id/1018/400/200'
    },
    {
        slug: 'video-production',
        title: 'Video Production',
        description: 'High-quality video content creation.',
        image: 'https://picsum.photos/id/1019/400/200'
    },
    {
        slug: 'promo-video',
        title: 'Promo Video',
        description: 'Promo Video for all platforms.',
        image: 'https://picsum.photos/id/1020/400/200'
    },
    {
        slug: 'video-montage',
        title: 'Video Montage',
        description: 'Video Montage store solutions.',
        image: 'https://picsum.photos/id/1021/400/200'
    },
    {
        slug: 'programming',
        title: 'Programming',
        description: 'Expert advice and business Programming.',
        image: 'https://picsum.photos/id/1022/400/200'
    }
];


const Services = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate(`/service/${slug}`);
    };
    
    return (
        <>
            <Header />
            <main className='mt-20 px-5 xl:px-14 container mx-auto'>
                <h1
                    className="text-white md:text-[108px] text-[48px] font-black ml-5 mb-10 text-center md:text-left drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]">
                    SERVICES
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {servicesList.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick(service.slug)}
                            className="bg-[#16182B] rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-all"
                        >
                            <img src={service.image} alt={service.title} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h2 className="text-white font-bold text-lg">{service.title}</h2>
                                <p className="text-gray-300 text-sm">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Services;
