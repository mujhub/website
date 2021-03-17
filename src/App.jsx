import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Components
import { Navbar } from "./components/layout/Navbar/Navbar";
import { Footer } from "./components/layout/Footer/Footer";

// Pages
import Home from "./pages/Home";
import Team from "./pages/Team";
import GetBooks from "./pages/GetBooks";

import { AuthProvider } from "./contexts/Auth";

import MessRoutes from "./routes/MessRoutes";
// import EateriesRoutes from "./routes/EateriesRoutes";

// theme handler with local storage
import useLocalTheme from "./helper/themeHandler";
import GlobalStyle from "./helper/globalStyle";

import NotFound from "./components/Misc/NotFound";
import AnalyticSupplier from "./components/Misc/AnalyticSupplier";
import Eateries from "./pages/Eateries";

const App = () => {
  const [userChoiceTheme, setUserChoiceTheme] = useLocalTheme();

  return (
    <AuthProvider>
      <ThemeProvider theme={userChoiceTheme}>
        <GlobalStyle />
        <div className="App">
          <Router>
            <Navbar toggleTheme={setUserChoiceTheme} />
            <AnalyticSupplier />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/team" component={Team} />
              <Route path="/mess">
                <MessRoutes />
              </Route>
              <Route exact path="/books" component={GetBooks} />
              <Route exact path="/eateries" component={Eateries} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </Router>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
