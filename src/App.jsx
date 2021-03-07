import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Components
import { Navbar } from "./components/layout/Navbar/Navbar";

// Pages
import Home from "./pages/Home";
import Team from "./pages/Team";
import MessPanel from "./pages/MessPanel";

import { AuthProvider } from "./contexts/Auth";

import MessRoutes from "./routes/MessRoutes";

// theme handler with local storage
import useLocalTheme from "./helper/themeHandler";
import GlobalStyle from "./helper/globalStyle";

const App = () => {
  const [userChoiceTheme, setUserChoiceTheme] = useLocalTheme();
  return (
    <AuthProvider>
      <ThemeProvider theme={userChoiceTheme}>
        <GlobalStyle />
        <div className="App">
          <Router>
            <Navbar toggleTheme={setUserChoiceTheme} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/team" component={Team} />
              <Route path="/mess">
                <MessRoutes />
              </Route>
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
