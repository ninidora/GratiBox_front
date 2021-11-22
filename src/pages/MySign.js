import React from "react";
import styled from "styled-components";

import MainComponent from "../components/MainComponent";
import image from "../assets/img/image03.jpg";
import { Box } from "../layouts/MainStyles";

export default function MySign() {
	return (
		<MainComponent text={"“Agradecer é arte de atrair coisas boas”"}>
			<Box>
				<img src={image} alt="MySign"/>
				<Options>
					<div>
						<p>Plano: </p>
						<p>Data da assinatura: </p>
						<p>Próximas entregas:</p>
					</div>
					<Products>
						<h2>Chás</h2>
						<h2>Produtos orgânicos</h2>
						<h2>Incensos</h2>
					</Products>
				</Options>
			</Box>
		</MainComponent>
	);
}

const Products = styled.div`
	width: 100%;
	height: 10px;
	color: #E63C80;
	display: flex;
	justify-content: space-between;
	padding-bottom: 15px;
`;

const Options = styled.div`
    background-color: #FFF;
	height: 200px;
    padding: 22px 22px 10px 22px;
    margin-top: -4px;
    border-radius: 0 0 10px 10px; 
    display: flex;
    flex-direction: column;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

    p{
        color: #4D65A8;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
    }
`;