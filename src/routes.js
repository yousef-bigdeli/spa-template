import { Navigate, useParams } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import NotFound from "./Pages/NotFound";
import Blogs from "./Pages/Blogs";
import Blog from "./components/Blog";
import Profile from "./Pages/Profile";
import Dashboard from "./components/Dashboard";
import Downloads from "./components/Downloads";

const routes = [
  { path: "blogs/:id", element: <ValidateId /> },
  { path: "blogs", element: <Blogs /> },
  { path: "about-us", element: <AboutUs /> },
  { path: "/", element: <Home />, index: true },
  { index: true, element: <Home />, id: "home-index" },
  { path: "*", element: <NotFound /> },
  {
    path: "profile",
    element: <Profile />,
    subRoutes: [
      { index: true, element: <Dashboard />, id: "dashboard-index" },
      { path: "downloads", element: <Downloads /> },
      { path: "*", element: <Navigate to="/profile" /> },
    ],
  },
];

export default routes;

// For validate blog id
function ValidateId() {
  const blogId = useParams().id.match(/\d+/);
  if (blogId) {
    return <Blog />;
  }
  console.log(blogId);
  return <NotFound />;
}
