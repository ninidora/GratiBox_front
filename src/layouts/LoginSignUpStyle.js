import React from "react";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export default function LoginSignUpStyle({ children }) {
	return (
		<Container>
			<Title>
				<h1>Bem vindo ao GratiBox</h1>
			</Title>
			<Box>
				{ children }
			</Box>
		</Container>
	);
}

const Container = styled.div`
  margin: 30vw auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  
  h1{
    font-size: 28px;
    font-weight: 500;
  }
`;

const Box = styled.div`
  width: 400px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;