import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import Team from "./pages/team";
import Portfolio from "./pages/portfolio";
import Services from "./pages/services";
import Careers from "./pages/career";
import UserProfile from "./pages/userpanel/user";
import Vacansy from "./pages/vacansy";
import ProjectPage from "./pages/projectpage";
import SingleService from "./pages/serviceInfo";
import NotFound from "./pages/notfound";
import ProjectInfo from './pages/ProjectInfo'
import AuthGuard from "./connection/AuthGuard";
import MainLayout from "./layouts/mainLayout/mainlayout";
import SplashScreen from "./components/ui/SplashScren.jsx";
import {useState} from "react";

function AppRouter() {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading ? (
                <SplashScreen onFinish={() => setLoading(false)} />
            ) : (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainLayout/>}>
                            <Route index element={<Home/>}/>
                            <Route path="aboutus" element={<AboutUs/>}/>
                            <Route path="team" element={<Team/>}/>
                            <Route path="portfolio" element={<Portfolio/>}/>
                            <Route path="projects/:category" element={<ProjectPage/>}/>
                            <Route path="service/:slug" element={<SingleService/>}/>
                            <Route path="services" element={<Services/>}/>
                            <Route path="careers" element={<Careers/>}/>
                            <Route path="project/:id" element={<ProjectInfo/>}/>
                            <Route
                                path="user"
                                element={
                                    <AuthGuard>
                                        <UserProfile/>
                                    </AuthGuard>
                                }
                            />
                            <Route path="vacansy/:slug" element={<Vacansy/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            )}
        </>
    );
}

export default AppRouter;
