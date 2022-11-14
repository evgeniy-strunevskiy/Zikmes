import React from "react";
import cl from "classnames/bind";
import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

export const Nav = () => {

  const setActive = ({ isActive }) =>
  isActive ? cl(styles.nav_link, styles.nav_link__active) : cl(styles.nav_link);

  return (
    <nav className={cl(styles.nav)}>
      <ul className={cl(styles.nav_list)}>
        <li className={cl(styles.nav_item)}>
          <NavLink className={setActive}  to="/">
            Вход
          </NavLink>
        </li>
        <li className={cl(styles.nav_item)}>
          <NavLink className={setActive} to="/home">
            Главная
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
