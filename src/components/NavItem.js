import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = ({ path, textContent }) => (
  <li>
    <Link to={path}>{textContent}</Link>
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
