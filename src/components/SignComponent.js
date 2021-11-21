import styled from "styled-components";

export const Box = styled.div`
    margin-top: 30px;

    img{
        border-radius: 10px 10px 0 0;
    }
`;

export const Options = styled.div`
    background-color: #FFF;
    padding: 22px;
    margin-top: -4px;
    border-radius: 0 0 10px 10px; 
    display: flex;
    flex-direction: column;
`;

export const Label = styled.div`
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

export const HiddenContent = styled.div`
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

export const Button = styled.div`
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

export const Input = styled.input`
    width: 290px;
    background: rgba(224, 209, 237);
    padding: 12px;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #4D65A8;
    margin-top: -1px;
    border: none;
    margin-bottom: 7px;

    ::placeholder{
        color: #4D65A8;
    }
`;
