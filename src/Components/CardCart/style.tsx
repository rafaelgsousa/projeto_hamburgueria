import styled from "styled-components";

export const CardCartItem = styled.div `
    width: 100%;
    height: 80px;
    display: flex;
    .imagem {
        height: 100%;
        width: 80px;
        display: flex;
        align-items: center;
        align-items: center;
        img{
            width: 100%;
            object-fit: cover;
        }
    }
    .dados{
        width: 80%;
        display: flex;
        flex-direction: column;
        h3{
            height: 50px;
            width: 100%;
            display: flex;
            align-items: center;
            position: relative;
            color: #333;
            span{
                display: flex;
                align-items: center;
                position:absolute;
                right: 15px;
                color: #BDBDBD;
                cursor: pointer;
            }
        }
        .controle{
            display: flex;
            width: 100%;
            .sinais{
                color:#EB5757;
                font-weight: bold;
                width: 15px;
                cursor: pointer;
            }
            div {
                width: 40px;
                margin: 5px;
                text-align: center;
                color: #333;
            }
        }
    }
`;