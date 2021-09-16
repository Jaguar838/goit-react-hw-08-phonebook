import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Avatar from '@material-ui/core/Avatar';
import { css } from '@material-ui/core/styles';

import css from './UserMenu.module.scss';

const MyAvatar = styled(Avatar)({
  background: 'white',
  color: '#30d5c8',
  width: 28,
  height: 28,
  marginRight: 4,
  borderRadius: '50%',
  padding: 4,
  fontSize: 16,
  border: 0,
  boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.15)',
});

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={css.UserMenu}>
      <div className={css.UserName}>
        <MyAvatar>{name[0]}</MyAvatar>
        <span className={css.Name}>{name}</span>
      </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
}
