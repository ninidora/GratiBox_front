import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "../components/GlobalStyles";
import HomePage from "../pages/HomePage";

export default function App(){
	return(
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}