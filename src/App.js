import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About-us" element={<AboutUs />} />
      </Routes>
    </Layout>
  );
}

export default App;
