import { NavLink, Outlet, useLocation } from "react-router-dom";

const Profile = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex-column">
      <h2>User Profile</h2>
      <div className="tab-wrapper">
        <div className="tab flex-column">
          {/* Tabs section. Dashboard is default active */}
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `tab__link ${isActive || pathname === "/profile" ? "active" : ""}`
            }
            end
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/profile/downloads"
            className={({ isActive }) =>
              `tab__link ${isActive ? "active" : ""}`
            }
          >
            Download
          </NavLink>
        </div>
        <div className="tab-content">
          {/* Show content here */}
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Profile;
