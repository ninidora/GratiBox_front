import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import UserContext from "./contexts/UserContext";
import GlobalStyle from "./layouts/GlobalStyles";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Plans from "./pages/Plans";
import Sign from "./pages/Sign";
import Sign2 from "./pages/Sign2";
import MySign from "./pages/MySign";

export default function App() {
	const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")));

	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<UserContext.Provider value={{ userData, setUserData }}>
					<Switch>
						<Route path="/welcome" exact>
							<Welcome />
						</Route>
						<Route path="/sign-up" exact>
							<SignUp />
						</Route>
						<Route path="/login" exact>
							<Login />
						</Route>
						<Route path="/plans" exact>
							<Plans />
						</Route>
						<Route path="/sign" exact>
							<Sign />
						</Route>
						<Route path="/sign/2" exact>
							<Sign2 />
						</Route>
						<Route path="/" exact>
							<MySign />
						</Route>
					</Switch>
				</UserContext.Provider>
			</BrowserRouter>
		</>
	);
}