import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';
import KranPortfolio from "../assets/images/kranPortfolio.png";

const ProjectsPage = () => {
    const { category } = useParams();

    return (
        <>
            <Header />
            <main className="mt-20 px-5 xl:px-14 container mx-auto mb-10">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-10 text-center capitalize">{category} Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="bg-[#16182B] rounded-xl shadow-md overflow-hidden hover:scale-105 transition-all cursor-pointer">
                            <img src={KranPortfolio} alt="Project" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-white font-bold text-lg">Project {i + 1}</h3>
                                <p className="text-white text-sm">Short description about this project.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ProjectsPage;
