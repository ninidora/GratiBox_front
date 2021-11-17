import React from "react";

import LoginSignUp from "../components/LoginSignUp";
import { Box, Input, Button } from "../layouts/LoginSignUpStyles";

export default function SignUp() {
	return (
		<LoginSignUp>
			<Box>
				<form>
					<Input type="text" placeholder="Nome" />
					<Input type="email" placeholder="E-mail" />
					<Input type="password" placeholder="Senha" />
					<Input type="password" placeholder="Confirmar senha" />
					<Button type="submit" >
                        Cadastrar
					</Button>
				</form>
			</Box>
		</LoginSignUp>
	); 
}
