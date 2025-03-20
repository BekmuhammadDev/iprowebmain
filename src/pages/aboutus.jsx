import React from 'react';
import sampleVideo from "../assets/video/ipro.mp4"

const aboutus = () => {
    return (
        <main>
            <section className='container mx-auto mt-20'>
                <div className='flex justify-between'>
                    <div className='items-center'>
                        <h2 className='text-white text-2xl font-medium'>Premium Web Design Agency</h2>
                        <h1 className='text-white text-[80px] font-bold'>Brands growth</h1>
                        <p className='text-white text-xl font-medium'>Custom Websites, Mobile Apps, Branding & Digital <br /> Marketing, other services</p>
                        <button className='w-80 h-16 bg-white text-[#0086EE] text-2xl font-semibold mt-[37px]'>Speak with Expert</button>
                    </div>
                    <div>
                        <video width="579" height="812" controls>
                            <source src={sampleVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default aboutus;