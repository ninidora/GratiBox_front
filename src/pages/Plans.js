import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import MainComponent from "../components/MainComponent";
import image1 from "../assets/img/image04.jpg";
import image2 from "../assets/img/image02.jpg";

export default function Plans() {
	const history = useHistory();
	const user = localStorage.getItem("user");

	useEffect(() => {
		!user && history.push("/welcome");
	},[]);

	const data = [
		{
			image: image1,
			alt: "Weekly",
			text: "Você recebe um box por semana. Ideal para quem quer exercer a gratidão todos os dias."
		},
		{
			image: image2,
			alt: "Monthly",
			text: "Você recebe um box por mês. Ideal para quem está começando agora."
		}
	];

	return (
		<MainComponent text={"Você ainda não assinou um plano, que tal começar agora?"} page={"plans"}>
			{data.map((d,i) => (
				<Box key={i}>
					<img src={d.image} alt={d.alt} />
					<Infos>
						<p>{d.text}</p>
						<div>
							<Link to={{pathname: "/sign", state: {option: d.alt}}}>
								<button>Assinar</button>
							</Link>
						</div>
					</Infos>
				</Box>
			))}
		</MainComponent>
	);
}

const Box = styled.div`
    margin-top: 30px;

    img{
        border-radius: 25px 25px 0 0;
    }
`;

const Infos = styled.div`
    width: 354px;
    background-color: #e5cdb3;
    padding: 22px;
    margin-top: -4px;
    border-radius: 0 0 25px 25px; 

    p{
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: #4D65A8;
    }

    div{
        display: flex;
        justify-content: center;
    }

    button{
        margin-top: 36px;
        width: 168px;
        height: 39px;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
    }
`;
