import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import NotFound from "./Pages/NotFound";
import Blogs from "./Pages/Blogs";

const routes = [
  { path: "/", element: <Home />, exact: true },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
