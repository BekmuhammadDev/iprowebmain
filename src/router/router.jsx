import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout/mainlayout"
import Home from "../pages/home";
import AboutUs from "../pages/aboutus";
import Team from "../pages/team"
import Portfolio from "../pages/portfolio";
import Services from "../pages/services";
import Careers from "../pages/career";
import UserProfile from "../pages/userpanel/user"
import NotFound from "../pages/notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "team", element: <Team /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "services", element: <Services /> },
      { path: "careers", element: <Careers /> },
      { path: "user", element: <UserProfile /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
