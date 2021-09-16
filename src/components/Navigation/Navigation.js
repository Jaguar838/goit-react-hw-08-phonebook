import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import css from './Navigation.module.scss';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    // <div className={styles.ContainerNav}>
    <nav className={css.Navigation}>
      <ul className={css.NavList}>
        <li className={css.NavListItem}>
          <NavLink
            exact
            to="/"
            className={css.link}
            activeClassName={css.activeLink}
          >
            Home
          </NavLink>
        </li>

        {isLoggedIn && (
          <li className={css.NavListItem}>
            <NavLink
              to="/contacts"
              className={css.link}
              activeClassName={css.activeLink}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
    // </div>
  );
};

export default Navigation;
