import { NavLink } from "react-router-dom";

const items = [
  { to: "/", name: "Home", exact: true },
  { to: "/about-us", name: "About Us" },
];

const Navigation = () => {
  return (
    <nav className="menu-wrapper">
      <ul className="nav-menu">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              exact={item.exact || false}
              activeClassName="active-link"
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
