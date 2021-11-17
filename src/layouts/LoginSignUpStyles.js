import styled from "styled-components";

export const Input = styled.input`
  padding: 16px;
  border: 1px solid ${props => props.invalid ? "#DC3545" : "#CCC"};
  background-color: ${props => props.invalid ? "#DC3545" : "#FFF"};
  border-radius: 5px;
  margin-bottom: 8px;
  width: 100%;
  height: 58px;
  font-size: 24px;

  ::placeholder{
    font-size: 20px;
    color: #60484866;
;
  }
`;

export const Button = styled.button`
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
  margin-top: 62px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 43px;
`;


export const Path = styled.p`
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-top: 21px;
`;