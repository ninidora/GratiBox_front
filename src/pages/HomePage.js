import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import cover from "../assets/img/image05.webp";

export default function HomePage() {
	return (
		<Body>
			<Title>Bem vindo ao GratiBox</Title>
			<Subtitle>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</Subtitle>
			<img src={cover} alt="cover"/>
			<Action>
				<Link to="/sign-up">
					<button>Quero começar</button>
				</Link>
				<Link to="/sign-in">
					<p>Já sou grato</p>
				</Link>
			</Action>
		</Body>
	);
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    img{
        height: calc(width);
        width: 100%;
        margin: 0 auto;
    }
`;

const Title = styled.div`
    text-align: center;
    margin-top: 53px;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
`;

const Subtitle = styled.div`
    margin-top: 44px;
    text-align: center;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    padding: 0 50px;
`;

const Action = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    background-color: #4D65A8;
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        width: 202px;
        height: 45px;
        margin-top: 29px;
        background: #8C97EA;
        border: none;
        border-radius: 10px;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
    }

    p{
        margin-top: 17px;
        font-size: 18px;
        font-weight: 700;
    }
`;

