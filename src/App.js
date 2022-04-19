import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import routes from "./routes";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => {
          if (route.subRoutes) {
            return (
              <Route {...route} key={route.path}>
                {route.subRoutes.map((item) => (
                  <Route {...item} key={item.path || item.id} />
                ))}
              </Route>
            );
          }
          return <Route {...route} key={route.path || route.id} />;
        })}
      </Routes>
    </Layout>
  );
}

export default App;
