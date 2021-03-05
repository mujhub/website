import React from "react";
import { ThemeProvider } from "styled-components";

// Components
import { Navbar } from "./components/layout/Navbar/Navbar";

// Pages
import Home from "./HomePage/Home";

// theme handler with local storage
import useLocalTheme from "./helper/themeHandler";
import GlobalStyle from "./helper/globalStyle";

const App = () => {
  const [userChoiceTheme, setUserChoiceTheme] = useLocalTheme();

  return (
    <ThemeProvider theme={userChoiceTheme}>
      <>
        <GlobalStyle />
        <div className="App">
          <Navbar toggleTheme={setUserChoiceTheme} />
          {/* Routes */}
          <Home />
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
