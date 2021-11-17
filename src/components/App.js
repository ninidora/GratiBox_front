import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "../layouts/GlobalStyles";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/SignUp";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/sign-up" exact>
						<SignUp />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}