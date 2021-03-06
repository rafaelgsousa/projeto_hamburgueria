import styled from "styled-components";

export const ContainerLogin = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    form {
        width: 40vw;
        height: 70vh;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        background-color: #FFFFFF;
        border:2px solid #F5F5F5;
        padding:24px;
        margin-right: 50px;
        p{
            padding-left:10px;
        }
        
        input {
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        border: 2px solid #333333;
        border-radius: 8px;
        margin: 5px;
        font-size: 30px;
        padding: 5px 10px;
        }
        button {
            width: 100%;
            height: 60px;
            box-sizing: border-box;
            border-radius: 8px;
            background-color: #219653;
            margin: 5px;
            padding: 0px 40px;
            color: #F5F5F5;
            font-size: 20px;
            cursor: pointer;
        }
        .cadastrar {
            width: 100%;
            height: 50px;
            box-sizing: border-box;
            border-radius: 8px;
            padding: 0px 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #999999;
            cursor: pointer;
            a{
                text-decoration: none;
                color: inherit;
            }
        }
        .textocadastro {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #999999;
            box-sizing: border-box;
        }
    }
    
    .logo {
        width: 40vw;
        height: 70vh;
        box-sizing: border-box;
        padding: 20px 20px;
        padding-top: 50px;
        display:flex;
        flex-direction: column;
        h2 {
            width: 100%;
            height: 20%;
            font-size: 45px;
            color:#333333;
            margin: 20px 0px;
            margin-bottom: 30px;
            span{
                font-size: 30px;
                color: #EB5757;
            }
        }
        .textlogo{
            display: flex;
            width: 100%;
            height: 80%;
            div {
                width: 20%;
                height: 100%;
                margin: 20px;
                font-size: 30px;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                color:#219653;
            }
            p {
                width: 80%;
                height: 100%;
            }
        }
    }
    @media (max-width:425px){
        flex-direction: column-reverse;
        form {
        width: 100vw;
        height: 70vh;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items:center;
        box-sizing: border-box;
        background-color: #FFFFFF;
        border:2px solid #F5F5F5;
        padding:24px;
        margin: 0px;
        p{
            padding-left:10px;
        }
        input {
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        border: 2px solid #333333;
        border-radius: 8px;
        margin: 5px;
        font-size: 30px;
        padding: 5px 10px;
        }
        button {
            width: 100%;
            height: 60px;
            box-sizing: border-box;
            border-radius: 8px;
            background-color: #219653;
            margin: 5px;
            padding: 0px 40px;
            color: #F5F5F5;
            font-size: 20px;
            cursor: pointer;
        }
        .cadastrar {
            width: 100%;
            height: 50px;
            box-sizing: border-box;
            border-radius: 8px;
            padding: 0px 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #999999;
            cursor: pointer;
        }
        .textocadastro {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #999999;
            box-sizing: border-box;
        }
    }
    
    .logo {
        width: 100vw;
        height: 30vh;
        box-sizing: border-box;
        padding-top:30px;
        h2 {
            width: 100%;
            height: 20%;
            font-size: 40px;
            color:#333333;
            margin: 20px 0px;
            span{
                font-size: 30px;
                color: #EB5757;
            }
        }
        .textlogo{
            display: flex;
            width: 100%;
            height: 50%;
            div {
                width: 20%;
                height: 70px;
                margin: 10px;
                font-size: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top:10px;
                color:#219653;
                padding:0px;
            }
            p {
                width: 80%;
            }
        }
    }
}
`;
