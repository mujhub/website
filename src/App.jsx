import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

// Components
import { Navbar } from "./components/layout/Navbar/Navbar";
import { Hero } from "./components/Hero";
import { MessMenuCard } from "./components/MessMenu";
import { Container } from "./styles/Shared/Container";
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
