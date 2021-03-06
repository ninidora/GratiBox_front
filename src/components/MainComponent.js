import React, { useContext } from "react";
import styled from "styled-components";

import UserContext from "../contexts/UserContext";

// eslint-disable-next-line react/prop-types
export default function MainComponent({ children, text, page }) {
	const { userData } = useContext(UserContext);
	const name = userData?.name?.split(" ")[0];

	return (
		<Container margin={page}>
			<Title>
				<h1>Bom te ver por aqui, @{name}.</h1>
				<h2>{ text }</h2>
			</Title>
			<Box>
				{ children }
			</Box>
		</Container>
	);
}

const Container = styled.div`
  margin: ${props => props.margin === "plans" ? "30vw auto 10vw auto" : "20vw auto 10vw auto"};
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  max-width: 100%;
  padding-left: 17px;
  
  h1{
    font-size: 26px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 22px;
  }

  h2{
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
  }
`;

const Box = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;