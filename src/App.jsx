import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

// Components
import { Navbar } from "./components/layout/Navbar/Navbar";

// Pages
import Home from "./pages/Home";
import MessPanel from "./pages/MessPanel";

import { AuthProvider } from "./contexts/Auth";

import MessRoutes from "./routes/MessRoutes";

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
		<AuthProvider>
			<ThemeProvider theme={userChoiceTheme}>
				<GlobalStyle />
				<div className='App'>
					<Router>
						<Navbar toggleTheme={setUserChoiceTheme} />
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/mess'>
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
