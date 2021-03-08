import { Link } from "react-router-dom";

import { Nav, NavLinks } from "../../../styles/components/layout/NavbarStyles";
import { H6, Type } from "../../../styles/Shared/StyledTypes";

import ThemeSwitch from "./ThemeSwitcher";

import logo64 from "../../../images/logo64.png";

export const Navbar = ({ toggleTheme }) => {
  return (
    <Nav className="navbar">
      {/* logo */}
      <NavLinks logo>
        <Link to="/">
          <img src={logo64} alt="" style={{ height: 25, width: 25 }} />
          <H6>MUJ HUB</H6>
        </Link>
      </NavLinks>
      <NavLinks>
        <Link to="/team">
          <Type>Team</Type>
        </Link>
      </NavLinks>
      <ThemeSwitch toggleTheme={toggleTheme} />
    </Nav>
  );
};
