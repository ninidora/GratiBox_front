/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useLocation } from "react-router";

import MainComponent from "../components/MainComponent";
import image from "../assets/img/image03.jpg";

export default function Sign() {
	const [selected, setSelected] = useState(true);
	const location = useLocation();
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

	const [answers, setAnswers] = useState({});
    
	function handleSubmit() {
        
		console.log(answers);
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
									{!selected &&
										    <AiOutlineArrowDown />
									}
								</Label>
								{selected &&
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
					<button onClick={handleSubmit}>Próximo</button>
				</Button>
			</Box>
		</MainComponent>
	);
}

const Box = styled.div`
    margin-top: 30px;

    img{
        border-radius: 10px 10px 0 0;
    }
`;

const Options = styled.div`
    background-color: #FFF;
    padding: 22px;
    margin-top: -4px;
    border-radius: 0 0 10px 10px; 
    display: flex;
    flex-direction: column;
`;

const Label = styled.div`
    width: 290px;
    height: 44px;
    display: flex;
    justify-content: space-between;
    border-radius: ${props => props.height ? "5px 5px 0 0" : "5px"};
    background: rgba(224, 209, 237);
    padding: 12px;
    color: #4D65A8;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    margin-top: 10px;
`;

const HiddenContent = styled.div`
    width: 290px;
    background: rgba(224, 209, 237);
    padding: 12px;
    border-radius: 0 0 5px 5px;
    display: flex;
    flex-wrap: wrap;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #4D65A8;
    margin-top: -1px;

    label{
        display: block;
        position: relative;
        padding-left: 25px;
        margin-right: 45px;
        margin-bottom: 10px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    input{
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        background-color: #eee;
    }

    input:checked ~ .checkmark {
        background-color: #4D65A8;
    }

`;

const Button = styled.div`
    display: flex;
    justify-content: center;

    button{
        width: 202px;
        height: 39px;
        border-radius: 10px;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        margin-top: 8px;
    }
`;