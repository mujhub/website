import React, { useContext, useState } from "react";
import { BsFillLightningFill, BsMoon } from "react-icons/bs";
import { Button } from "../../../styles/components/layout/NavbarStyles";
import { ThemeContext } from "styled-components";
import theme from "../../../theme";

const ThemeSwitch = ({ toggleTheme }) => {
  const themeContext = useContext(ThemeContext);
  const [icon, setIcon] = useState(<BsFillLightningFill />);

  const onClick = () => {
    if (themeContext === theme.dark) {
      toggleTheme(theme.light);
      setIcon(<BsMoon />);
    } else {
      toggleTheme(theme.dark);
      setIcon(<BsFillLightningFill />);
    }
  };

  return <Button onClick={onClick}>{icon}</Button>;
};

export default ThemeSwitch;
