import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = ({ path, textContent }) => (
  <li>
    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={path}>
      {textContent}
    </NavLink>
  </li>
);

NavItem.propTypes = {
  path: PropTypes.string,
  textContent: PropTypes.string,
};

NavItem.defaultProps = {
  path: '',
  textContent: '',
};

export default NavItem;
