import { Nav, NavLinks } from "../../../styles/components/layout/NavbarStyles";
import { H5 } from "../../../styles/Shared/StyledTypes";
import ThemeSwitch from "./ThemeSwitcher";

export const Navbar = ({ toggleTheme }) => {
  return (
    <Nav className="navbar">
      {/* logo */}
      <NavLinks logo>
        <H5>MUJHUB</H5>
      </NavLinks>
      <ThemeSwitch toggleTheme={toggleTheme} />
    </Nav>
  );
};
