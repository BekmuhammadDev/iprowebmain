import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';
import BgImgService from "../assets/images/bgimgservice.png"

const serviceData = {
    'web-development': {
        title: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at.',
        image: 'https://picsum.photos/id/1011/800/400'
    },
    'mobile-apps': {
        title: 'Mobile Apps',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at.',
        image: 'https://picsum.photos/id/1012/800/400'
    },
    'ui-ux': {
        title: 'UI/UX Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at.',
        image: 'https://picsum.photos/id/1013/800/400'
    },
    'seo-optimization': {
        title: 'SEO Optimization',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at.',
        image: 'https://picsum.photos/id/1014/800/400'
    },
    'smm': {
        title: 'SMM',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at.',
        image: 'https://picsum.photos/id/1015/800/400'
    },
    'marketing-strategy': {
        title: 'Marketing Strategy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at.',
        image: 'https://picsum.photos/id/1016/800/400'
    },
    'telegram-bot': {
        title: 'telegram-bot',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at.',
        image: 'https://picsum.photos/id/1032/800/400'
    },
    'target-ads': {
        title: 'Target Ads',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at.',
        image: 'https://picsum.photos/id/1018/800/400'
    },
    'video-production': {
        title: 'Video Production',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at.',
        image: 'https://picsum.photos/id/1019/800/400'
    },
    'promo-video': {
        title: 'promo-video',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at.',
        image: 'https://picsum.photos/id/1020/800/400'
    },
    'video-montage': {
        title: 'video-montage',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at.',
        image: 'https://picsum.photos/id/1021/800/400'
    },
    'programming': {
        title: 'programming',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim, natus, autem quas nulla, debitis architecto dignissimos assumenda eaque laborum quis. Officiis laborum quod incidunt voluptatibus quo ducimus non at.',
        image: 'https://picsum.photos/id/1022/800/400'
    }
};

const SingleService = () => {
    const { slug } = useParams();
    const service = serviceData[slug];

    if (!service) {
        return (
            <div className="text-white text-center mt-20">
                <h1 className="text-3xl font-bold">Service Not Found</h1>
            </div>
        );
    }

    return (
        <>
            <Header />
            <main className='mt-40 px-5 xl:px-14 container mx-auto'>

                <div className='flex items-center gap-6'>
                    <div>
                        <h1 className='text-white md:text-[70px] text-[48px] font-black ml-5 mb-10 text-center md:text-left drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)]'>{service.title}</h1>
                        <p className="text-gray-300 text-lg text-left max-w-3xl">{service.description}</p>
                    </div>
                    <div className="relative w-full">
                        {/* BACKGROUND IMAG */}
                        <img
                            src={BgImgService}
                            alt=""
                            className="absolute top-0 right-0 w-40 md:w-64 lg:w-80 opacity-20 md:opacity-40 z-0 pointer-events-none select-none"
                        />

                        {/* SERVICE IMAGE */}
                        <img
                            src={service.image}
                            alt={service.title}
                            className="relative z-10 w-full h-72 object-cover mb-6 max-w-4xl mx-auto"
                        />
                    </div>

                </div>

                <h2 className='text-white text-3xl font-bold mt-16 mb-4'>Example Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="bg-[#16182B] rounded-xl shadow-md overflow-hidden hover:scale-105 transition-all cursor-pointer">
                            <img src={service.image} alt={`Project ${i + 1}`} className="w-full h-40 object-cover" />
                            <div className="p-3">
                                <h3 className="text-white font-bold text-base">Project {i + 1}</h3>
                                <p className="text-white text-sm">Short description...</p>
                            </div>

                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default SingleService;
