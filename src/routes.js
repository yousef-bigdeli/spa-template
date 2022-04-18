import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import NotFound from './Pages/NotFound';

const routes = [
  { path: "/", element: <Home />, exact: true },
  { path: "/about-us", element: <AboutUs /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
