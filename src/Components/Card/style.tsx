import styled from "styled-components";

export const CardItem = styled.div `
    width: 220px;
    height: 340px;
    background-color: #FFFFFF;
    margin: 20px;
    border-radius: 5px;
    box-sizing: border-box;
    border: 2px solid #E0E0E0;
    box-sizing: border-box;
    .imagem{
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        img{
            height: 100%;
        }
    }
    .dados {
        padding:5px;
        h2 {
            width: 80%;
            font-size: 16px;
            color:#333333;
        }
        p{
            width: 80%;
            height: 20px;
            font-size: 12px;
            color: #828282;
        }
        h3{
            width: 80%;
            color: #27AE60;
            font-weight: bold;
            font-size: 14px;
        }
        button {
            width: 106px;
            height: 40px;
            background-color: #27AE60;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            border:2px solid #27AE60;
            font-size: 14px;
            cursor: pointer;
            color:#FFF;
        }
    }
`;