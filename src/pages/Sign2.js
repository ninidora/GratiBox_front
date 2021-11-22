import React, { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

import MainComponent from "../components/MainComponent";
import image from "../assets/img/image03.jpg";
import { Box, Options, Button, Input } from "../layouts/MainStyles";
import { getAdressData } from "../services/server";

export default function Sign2() {
	const location = useLocation();
	const { option } = location.state;
	const [name, setName] = useState("");
	const [cep, setCep] = useState("");
	const [adress, setAdress] = useState("");
	const street = adress.street + ", " + adress.neighborhood;
	console.log(option);
	console.log(adress);

	function searchCep() {
		const req = getAdressData(cep);
		req.then(res => setAdress(res.data));
	}

	return (
		<MainComponent text={"“Agradecer é arte de atrair coisas boas”"} page={"sign"}>
			<Box>
				<img src={image} alt="Sign"/>
				<Options>
					<form>
						<Input
							type="text" 
							placeholder="Nome completo"
							value={name}
							onChange={e => setName(e.target.value)}
						/>
						<Input
							type="number" 
							placeholder="CEP"
							value={cep}
							onChange={e => setCep(e.target.value)}
							onBlur={searchCep}
						/>
						<Input
							type="text" 
							placeholder="Endereço de entrega"
							value={adress !== "" ? street : ""}
						/>
						<Line>
							<Input
								className="city"
								type="text" 
								placeholder="Cidade"
								value={adress.city}
							/>
							<Input
								className="state"
								type="text" 
								placeholder="Estado"
								value={adress.state}
							/>
						</Line>
					</form>
				</Options>
				<Button>
					<button>Finalizar</button>
				</Button>
			</Box>
		</MainComponent>
	);
}

const Line = styled.div`
    display: flex;


    .city{
        width: 168px;
        margin-right: 13px;
    }

    .state{
        width: 108px;
    }
`;