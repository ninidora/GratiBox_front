/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useHistory, useLocation } from "react-router";

import MainComponent from "../components/MainComponent";
import image from "../assets/img/image03.jpg";
import { Box, Options, Label, HiddenContent, Button } from "../layouts/MainStyles";

export default function Sign() {
	const [selected, setSelected] = useState(true);
	const [answers, setAnswers] = useState([]);
	const location = useLocation();
	const history = useHistory();
	const { option } = location.state;
	const data = [
		{
			id: "1",
			text: "Plano",
			options: ["Semanal", "Mensal"],
		},
		{
			id: "2",
			text: "Entrega",
			options: option === "Monthly" ? ["01", "10", "20"] : ["Segunda", "Quarta", "Sexta"]
		},
		{
			id: "3",
			text: "Quero receber",
			options: ["Chás", "Insensos", "Produtos orgânicos"],
		}
	];

	function toNextPage() {
		if (answers.length === undefined && answers[1] !== undefined && answers[2] !== undefined && answers[3] !== undefined) history.push({pathname: "/sign/2", state: {option: answers}});
	}

	return (
		<MainComponent text={"“Agradecer é arte de atrair coisas boas”"} page={"sign"}>
			<Box>
				<img src={image} alt="Sign"/>
				<Options>
					{data.map((question) => {
						return (
							<div key={question.id}>
								<Label height={selected} onClick={() => setSelected(!selected)}>
									{question.text}
									{selected &&
										    <AiOutlineArrowDown />
									}
								</Label>
								{!selected &&
                                    <HiddenContent>
                                    	{question.options.map((option) => {
                                    		return (
                                    			<div key={option}>
                                    				<label>
                                    					{option}
                                    					<input
                                    						type="radio"
                                    						name={question.id}
                                    						checked={answers[question.id] === option}
                                    						onChange={() =>
                                    							setAnswers((answer) => ({
                                    								...answer,
                                    								[question.id]: option
                                    							}))
                                    						}
                                    					/>
                                    					<span className="checkmark"></span>
                                    				</label>
                                    			</div>
                                    		);
                                    	})}
                                    </HiddenContent>
								}
							</div>
						);
					})}
				</Options>
				<Button>
					<button onClick={toNextPage}>
                        Próximo
					</button>
				</Button>
			</Box>
		</MainComponent>
	);
}
