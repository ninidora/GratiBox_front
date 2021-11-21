import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import styled from "styled-components";

import LoginSignUp from "../components/LoginSignUp";
import { Box, Input, Path, Error } from "../layouts/LoginSignUpStyles";
import { signInUser } from "../services/server";
import UserContext from "../contexts/UserContext";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const history = useHistory();
	const { setUserData } = useContext(UserContext);

	function signIn(e) {
		e.preventDefault();
		setLoading(true);

		const body = {email, password};

		const req = signInUser(body);
		req.then(res => {
			setUserData({
				token: res.data.token,
				name: res.data.name
			});
			localStorage.setItem("user", JSON.stringify(res.data));
			history.push("/plans");
		});
		req.catch(() => {
			setError("Email e/ou senha inválidos");
			setLoading(false);
		});
	}

	return (
		<LoginSignUp>
			<Box>
				<form onSubmit={signIn}>
					<Input 
						type="email" 
						placeholder="E-mail"
						value={email} 
						onChange={e => setEmail(e.target.value)}
						onInvalid={e => e.target.setCustomValidity("Você deve inserir um email válido aqui")} 
						onInput={e => e.target.setCustomValidity("")}
						required 
					/>
					<Input 
						type="password" 
						placeholder="Senha"
						value={password} 
						onChange={e => setPassword(e.target.value)}
						onInvalid={e => e.target.setCustomValidity("Insira uma senha com no mínimo 6 caracteres")} 
						onInput={e => e.target.setCustomValidity("")}
						required
					/>
					{error && 
						<Error>
							{error}
						</Error>
					}
					<Button type="submit" disabled={loading}>
                        Login
					</Button>
					<Link to="/sign-up">
						<Path>
                            Ainda não sou grato
						</Path>
					</Link>
				</form>
			</Box>
		</LoginSignUp>
	); 
}

const Button = styled.button`
  background: #8C97EA;
  color: #FFF;
  opacity: ${props => props.disabled ? "0.7" : "1"};
  cursor: ${props => props.disabled ? "inherit": "pointer"};
  font-size: 36px;
  font-weight: 700;
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 144px;
`;
