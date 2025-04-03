import { Outlet } from "react-router-dom";
import Marquee from "../../components/ui/marque";

const MainLayout = () => {
    return (
        <div>
            <main>
        
                <Outlet />
          
            </main>
            <Marquee/>
        </div>
    );
};

export default MainLayout;
