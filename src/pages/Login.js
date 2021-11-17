import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LoginSignUp from "../components/LoginSignUp";
import { Box, Input, Path } from "../layouts/LoginSignUpStyles";

export default function Login() {
	return (
		<LoginSignUp>
			<Box>
				<form>
					<Input type="email" placeholder="E-mail" />
					<Input type="password" placeholder="Senha" />
					<Button type="submit" >
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
