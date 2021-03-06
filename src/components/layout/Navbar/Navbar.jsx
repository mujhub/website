import { Nav, NavLinks } from "../../../styles/components/layout/NavbarStyles";
import { H6 } from "../../../styles/Shared/StyledTypes";
import ThemeSwitch from "./ThemeSwitcher";

export const Navbar = ({ toggleTheme }) => {
  return (
    <Nav className="navbar">
      {/* logo */}
      <NavLinks logo>
        <H6>[logo] MUJ HUB</H6>
      </NavLinks>
      <ThemeSwitch toggleTheme={toggleTheme} />
    </Nav>
  );
};
