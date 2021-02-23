import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

// Components
import { Navbar } from "./components/layout/Navbar/Navbar";

import theme from "./theme";

const App = () => {
  const [userChoiceTheme, setUserChoiceTheme] = useState(theme.dark);
  const GlobalStyle = createGlobalStyle`
    body{
      background: ${(props) => props.theme.BG};
      color: ${(props) => props.theme.TEXT};
    }
  `;

  return (
    <ThemeProvider theme={userChoiceTheme}>
      <>
        <GlobalStyle />
        <div className="App">
          <Navbar toggleTheme={setUserChoiceTheme} />
          <h1>hello</h1>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
