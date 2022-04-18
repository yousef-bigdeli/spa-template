import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import NotFound from "./Pages/NotFound";
import Blogs from "./Pages/Blogs";
import Blog from "./components/Blog";

const routes = [
  { path: "blogs/:id", element: <Blog /> },
  { path: "blogs", element: <Blogs /> },
  { path: "about-us", element: <AboutUs /> },
  { path: "/", element: <Home /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
