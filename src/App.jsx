import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Components
import { Navbar } from "./components/layout/Navbar/Navbar";

// Pages
import Home from "./pages/Home";
import MessPanel from "./pages/MessPanel";

import { AuthProvider } from "./contexts/Auth";

import MessRoutes from "./routes/MessRoutes";

// theme handler with local storage
import useLocalTheme from "./helper/themeHandler";
import GlobalStyle from "./helper/globalStyle";

import theme from "./theme";

const App = () => {
	const [userChoiceTheme, setUserChoiceTheme] = useLocalTheme();
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
