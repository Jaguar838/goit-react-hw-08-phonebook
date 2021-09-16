import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.scss';

const AuthNav = () => (
  <div className={css.AuthNav}>
    <ul className={css.AuthNavList}>
      <li className={css.AuthNavListItem}>
        <NavLink
          to="/register"
          exact
          className={css.link}
          activeClassName={css.activeLink}
        >
          Signup
        </NavLink>
      </li>
      <li className={css.AuthNavListItem}>
        <NavLink
          to="/login"
          exact
          className={css.link}
          activeClassName={css.activeLink}
        >
          Login
        </NavLink>
      </li>
    </ul>
  </div>
);

export default AuthNav;
