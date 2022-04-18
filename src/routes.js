import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";

const routes = [
  { path: "/", element: <Home />, exact: true },
  { path: "/about-us", element: <AboutUs /> },
];

export default routes;
