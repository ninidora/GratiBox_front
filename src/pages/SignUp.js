import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";

import LoginSignUp from "../components/LoginSignUp";
import UserContext from "../contexts/UserContext";
import { Box, Input, Button, Error } from "../layouts/LoginSignUpStyles";
import { registration } from "../services/server";

export default function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const history = useHistory();
	const { setUserData } = useContext(UserContext);
	const user = localStorage.getItem("user");

	useEffect(() => {
		user ? history.push("/plans") : setUserData(null);
	},[]);

	function signUp(e) {
		e.preventDefault();
		setLoading(true);

		const body = {name, email, password, confirmPassword};
		
		const req = registration(body);
		req.then(() => {
			alert("Cadastro realizado com sucesso!");
			history.push("/login");
		});
		req.catch(() => {
			setError("Dados inválidos. Tente novamente.");
			setLoading(false);
		});
	}
	
	return (
		<LoginSignUp>
			<Box>
				<form onSubmit={signUp}>
					<Input 
						type="text" 
						placeholder="Nome" 
						value={name} 
						onChange={e => setName(e.target.value)}
						onInvalid={e => e.target.setCustomValidity("Você deve inserir um nome aqui")} 
						onInput={e => e.target.setCustomValidity("")}
						required
					/>
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
					<Input 
						type="password" 
						placeholder="Confirmar senha" 
						value={confirmPassword} 
						onChange={e => setConfirmPassword(e.target.value)}
						onInvalid={e => e.target.setCustomValidity("Repita a senha aqui")} 
						onInput={e => e.target.setCustomValidity("")}
						required
					/>
					{error && 
						<Error>
							{error}
						</Error>
					}
					<Button type="submit" disabled={loading} >
                        Cadastrar
					</Button>
				</form>
			</Box>
		</LoginSignUp>
	); 
}
