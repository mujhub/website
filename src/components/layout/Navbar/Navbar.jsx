import { Nav, NavLinks } from "../../../styles/components/layout/NavbarStyles";
import ThemeSwitch from "./ThemeSwitcher";

export const Navbar = ({ toggleTheme }) => {
  return (
    <Nav className="navbar">
      {/* logo */}
      <NavLinks logo>MUJHUB</NavLinks>
      <ThemeSwitch toggleTheme={toggleTheme} />
    </Nav>
  );
};
