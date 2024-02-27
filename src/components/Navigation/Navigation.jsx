import React from 'react';

import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        <li className={s.nav_item}>
          <NavLink to="/" className={s.nav_link}>
            Home
          </NavLink>
        </li>
        <li className={s.nav_item}>
          <NavLink to="/movies" className={s.nav_link}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
