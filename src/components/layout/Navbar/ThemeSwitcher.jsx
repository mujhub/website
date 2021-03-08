import React, { useContext, useState } from "react";
import { BsFillBrightnessHighFill, BsMoon } from "react-icons/bs";
import { Button } from "../../../styles/components/layout/NavbarStyles";
import { ThemeContext } from "styled-components";
import theme from "../../../theme";

const ThemeSwitch = ({ toggleTheme }) => {
  const themeContext = useContext(ThemeContext);

  const [icon, setIcon] = useState(
    themeContext.id === theme.dark.id ? (
      <BsFillBrightnessHighFill />
    ) : (
      <BsMoon />
    )
  );

  const onClick = () => {
    if (themeContext.id === theme.dark.id) {
      toggleTheme(theme.light);
      localStorage.setItem("theme-mujhub", JSON.stringify(theme.light));
      setIcon(<BsMoon />);
    } else {
      toggleTheme(theme.dark);
      localStorage.setItem("theme-mujhub", JSON.stringify(theme.dark));
      setIcon(<BsFillBrightnessHighFill />);
    }
  };

  return <Button onClick={onClick}>{icon}</Button>;
};

export default ThemeSwitch;
