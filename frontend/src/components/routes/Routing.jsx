import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import InitialHome from "../../pages/initial-home/InitialHome";
import SignIn from "../../pages/sign-in/SignIn";
import SignUp from "../../pages/sign-up/SignUp";
import Cart from "../../pages/cart/Cart";
import ContactUs from "../../pages/contactus/ContactUs";
import Download from "../../pages/download/Download";
import Orders from "../orders/Orders";
import Payments from "../payments/Payments";
import ProfileDetails from "../profile-details/ProfileDetails";
import Menu from "../../pages/menu/Menu";
import Profile from "../../pages/profile/Profile";

function Routing({ login }) {
  const routes = [
    {
      path: "/sign-in",
      element: <SignIn login={login} />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/",
      element: <InitialHome />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
    {
      path: "/download",
      element: <Download />,
    },
    {
      path: "/orders",
      element: <Orders />,
    },
    {
      path: "/payments",
      element: <Payments />,
    },
    {
      path: "/profile-details",
      element: <ProfileDetails />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ];
  return (
    <Routes>
      {routes.map((route, index) => {
        return <Route key={index} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
}

export default Routing;
