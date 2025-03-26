import { Outlet } from "react-router-dom";
import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";
import Marquee from "../../components/ui/marque";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <main className="mt-20">
                <Outlet />  {/* Bu joyga sahifalar yuklanadi */}
            </main>
            <Marquee/>
            <Footer />
        </div>
    );
};

export default MainLayout;
