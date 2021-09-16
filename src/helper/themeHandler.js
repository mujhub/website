import { useState, useEffect } from "react";
import theme from "../theme";

function useLocalTheme() {
  const [userChoiceTheme, setUserChoiceTheme] = useState({});

  useEffect(() => {
    const themeLocal = localStorage.getItem("theme-mujhub");
    const themeParsed = JSON.parse(themeLocal);
    setUserChoiceTheme(themeParsed || theme.dark);
  }, []);

  return [userChoiceTheme, setUserChoiceTheme];
}

export default useLocalTheme;
