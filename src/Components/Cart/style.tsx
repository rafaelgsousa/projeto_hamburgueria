import styled from "styled-components";

export const ContainerCart = styled.div `
    width: 100vw;
    height: 100vh;
    background-color: rgba(51,51,51,0.5);
    position: fixed;
    top: 0px;
    display: flex;
    justify-content: center;
`;

export const CartItens = styled.div `
    width: 500px;
    min-height: 250px;
    max-height: 400px;
    position: relative;
    margin-top:70px;
    box-sizing: border-box;
    border-radius: 5px;
    .headercart {
        width: 100%;
        height: 50px;
        position: absolute;
        background-color: #219653;
        top: 0px;
        padding: 0px 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
            color:#FFF;
            font-size: 18px;
        }
        .icone{
            color:#FFF;
            font-size: 12px;
            cursor: pointer;
        }
    }
    .bodycart {
        min-height:270px;
        max-height:320px;
        width: 100%;
        position: absolute;
        top:50px;
        background-color: #F5F5F5;
        box-sizing: border-box;
        ul {
            list-style: none;
            margin: 0px;
            padding: 0px;
            overflow: auto;
            margin: 5px 5px;
            min-height:calc(200px - 130px);
            max-height:calc(350px - 130px);
            li{
                padding: 0px;
                margin: 5px 0px;
            }
        }
    }
    .total {
        width: 100%;
        height: 40px;
        position: absolute;
        bottom: 80px;
        background-color: #F5F5F5;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 10px;
        box-sizing: border-box;
        color: #333;
        font-size: 14px;
        .reduce {
            color: #828282;
        }
    }
    .totalcart {
            position: absolute;
            height: 20px;
            width: 100%;
            font-size: 18px;
            bottom: 80px;
            margin: 5px;
            padding: 10px;
            background-color: #F5F5F5;
            color: #333;
            span {
                position: absolute;
                right: 30px;
            }
    }
    .remover {
        width: 100%;
        height: 80px;
        background-color: #E0E0E0;
        box-sizing: border-box;
        padding: 5px;
        position: absolute;
        bottom: 0px;
        margin: 5px auto;
        border:10px solid #F5F5F5;
        cursor: pointer;
    }
    
    @media (max-width:425px){
        width: 300px;
        min-height: 250px;
        max-height: 400px;
        position: relative;
        margin-top:70px;
        box-sizing: border-box;
        border-radius: 5px;
        .headercart {
            width: 100%;
            height: 50px;
            position: absolute;
            background-color: #219653;
            top: 0px;
            padding-left: 20px;
            box-sizing: border-box;
            h3 {
                color:#FFF;
                font-size: 18px;
            }
        }
        .bodycart {
            min-height:270px;
            max-height:320px;
            width: 100%;
            position: absolute;
            top:50px;
            background-color: #F5F5F5;
            box-sizing: border-box;
            ul {
                list-style: none;
                margin: 0px;
                padding: 0px;
                overflow: auto;
                margin: 5px 5px;
                min-height:calc(200px - 130px);
                max-height:calc(350px - 130px);
                li{
                    padding: 0px;
                    margin: 5px 0px;
                }
            }
        }
        .total {
            width: 100%;
            height: 40px;
            position: absolute;
            bottom: 80px;
            background-color: #F5F5F5;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 10px;
            box-sizing: border-box;
            color: #333;
            font-size: 14px;
            .reduce {
                color: #828282;
            }
        }
        .totalcart {
                position: absolute;
                height: 20px;
                width: 100%;
                font-size: 18px;
                bottom: 80px;
                margin: 5px;
                padding: 10px;
                background-color: #F5F5F5;
                color: #333;
                span {
                    position: absolute;
                    right: 30px;
                }
        }
        .remover {
            width: 100%;
            height: 80px;
            background-color: #E0E0E0;
            box-sizing: border-box;
            padding: 5px;
            position: absolute;
            bottom: 0px;
            margin: 5px auto;
            border:10px solid #F5F5F5;
            cursor: pointer;
        }
    }
`;