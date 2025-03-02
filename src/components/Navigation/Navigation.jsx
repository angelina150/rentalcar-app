import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import Logo from "../Logo/Logo.jsx";

export const Navigation = () => {
  return (
    <div>
      <nav className={css.navWrapper}>
        <NavLink className={css.logoLink} to="/">
          <Logo />
        </NavLink>
        <div className={css.navRightWrapper}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : "")}
            to="/catalog"
          >
            Catalog
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
