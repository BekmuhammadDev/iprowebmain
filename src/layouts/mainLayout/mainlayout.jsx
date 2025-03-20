import { Outlet } from "react-router-dom";
import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />  {/* Bu joyga sahifalar yuklanadi */}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
