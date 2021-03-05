import React from "react";
import { ThemeProvider } from "styled-components";

// Components
import { Navbar } from "./components/layout/Navbar/Navbar";
import { Hero } from "./components/Hero";
import { MessMenuCard } from "./components/MessMenu";
import { Container } from "./styles/Shared/Container";

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
          <Container>
            <Hero />
            <MessMenuCard />
          </Container>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
