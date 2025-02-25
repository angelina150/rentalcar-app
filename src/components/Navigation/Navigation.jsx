import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={css.navWrapper}>
      <div className={css.logoWrapper}>
        <NavLink to="/" className={css.logo}>
          Rental<span>Car</span>
        </NavLink>
      </div>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <NavLink className={css.link} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
};
