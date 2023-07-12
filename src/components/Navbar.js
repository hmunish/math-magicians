import NavItem from './NavItem';

const Navbar = () => (
  <nav>
    <ul className="navbar">
      <NavItem path="/" textContent="Home" />
      <NavItem path="/calculator" textContent="Calculator" />
      <NavItem path="/quote" textContent="Quote" />
    </ul>
  </nav>
);

export default Navbar;
