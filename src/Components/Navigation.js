import { NavLink } from "react-router-dom";

const items = [
  { to: "/", name: "Home" },
  { to: "/about-us", name: "About Us" },
  { to: "/blogs", name: "Blogs" },
  { to: "/profile", name: "Profile" },
];

const Navigation = () => {
  return (
    <nav className="menu-wrapper">
      <ul className="nav-menu">
        {items.map((item) => (
          <li key={item.to} className="menu-item">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `menu-link ${isActive ? "active" : ""}`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
