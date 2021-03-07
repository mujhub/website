import { Link } from "react-router-dom";

import { Nav, NavLinks } from "../../../styles/components/layout/NavbarStyles";
import { H6, Type } from "../../../styles/Shared/StyledTypes";
import ThemeSwitch from "./ThemeSwitcher";

export const Navbar = ({ toggleTheme }) => {
	return (
		<Nav className='navbar'>
			{/* logo */}
			<NavLinks logo>
				<Link to='/'>
					<H6>[logo] MUJ HUB</H6>
				</Link>
			</NavLinks>
			<NavLinks>
				<Link to='/team'>
					<Type>Our Team</Type>
				</Link>
			</NavLinks>
			<ThemeSwitch toggleTheme={toggleTheme} />
		</Nav>
	);
};
