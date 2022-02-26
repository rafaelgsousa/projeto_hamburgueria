import styled from "styled-components";


export const ContainerHome = styled.div `
    width: 100vw;
    height: 100vh;
    padding: 0px;
    margin: 0px;
    position:relative;
    header {
        height: 60px;
        width: 100%;
        background-color: #F5F5F5;
        margin: 0px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        position:fixed;
        top:0;
        left:0;
        z-index:3;
        .logo {
            width: 50%;
            height: 100%;
            padding-left: 1rem;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            h3 {
                height: 100%;
                font-size: 2rem;
                margin: 0px;
                padding-top: 20px;
                span {
                    color: #EB5757;
                    height: 100%;
                    font-size: 0.6em;
                }
            }
        }
        .menupesquisa {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-right: 20px;
            margin: 10px;
            .search{
                height: 80%;
                width: 50%;
                border: 2px solid #E0E0E0;
                display: flex;
                align-items: center;
                box-sizing: border-box;
                padding: 2px;
                border-radius: 5px;
                input {
                    height: 80%;
                    width: 80%;
                    border: 0px solid white;
                    padding: 0px 0px 0px 10px;
                    margin: 0px;
                    box-sizing: border-box;
                }
                .pes{
                    width: 20%;
                    height: 80%;
                    background-color: #219653;
                    color:#E0E0E0;
                    padding: 3px;
                    border-radius: 5px;
                    margin: 4px;
                    box-sizing: border-box;
                    cursor: pointer;
                }
            }
            .conteinerdadoscart{
                position: relative;
                .iconecart {
                    width: 30px;
                    height: 30px;
                    margin: 10px;
                    color: #BDBDBD;
                    cursor: pointer;
                }
                .totalcart{
                    width: 20px;
                    height: 20px;
                    border-radius: 15px;
                    background-color: #219653;
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    text-align: center;
                    line-height: 20px;
                    color:white;
                    font-size: 0.7em;
                }
            }
            
            .iconeseta{
                width: 30px;
                height: 30px;
                margin: 10px;
                font-weight: bold;
                color: #BDBDBD;
                cursor: pointer;
                
            }
        }
    }
    .dashboard {
        position:relative;
        top:60px;
        width: 100%;
        padding: 20px 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        box-sizing: border-box;
        overflow-y: hidden;
        overflow-x: scroll;
        .itens {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: center;
            box-sizing: border-box;
        }
    }
    @media (max-width:425px){
        header {
        height: 60px;
        width: 100%;
        background-color: #F5F5F5;
        margin: 0px;
        display: flex;
        align-items: center;
        .logo {
            width: 50%;
            height: 100%;
            padding-left: 1rem;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            h3 {
                height: 100%;
                font-size: 1.1rem;
                margin: 0px;
                padding-top: 40px;
                span {
                    color: #EB5757;
                    height: 100%;
                    font-size: 0.7em;
                }
            }
        }
        .menupesquisa {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            padding-right: 20px;
            margin: 10px;
            box-sizing: border-box;
            .search{
                height: 80%;
                border: 2px solid #E0E0E0;
                display: flex;
                align-items: center;
                box-sizing: border-box;
                border-radius: 5px;
                input {
                    display: none;
                    height: 80%;
                    width: 80%;
                    border: 0px solid white;
                    padding: 0px;
                    margin: 0px;
                    box-sizing: border-box;
                    font-size: 10px;
                }
                .pes{
                    width: 100%;
                    height: 80%;
                    background-color: #219653;
                    color:#E0E0E0;
                    padding: 3px;
                    border-radius: 5px;
                    box-sizing: border-box;
                    cursor: pointer;
                }
            }
            .conteinerdadoscart{
                position: relative;
                .iconecart {
                    width: 30px;
                    height: 30px;
                    margin: 10px;
                    color: #BDBDBD;
                    cursor: pointer;
                }
                .totalcart{
                    width: 20px;
                    height: 20px;
                    border-radius: 15px;
                    background-color: #219653;
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    text-align: center;
                    line-height: 20px;
                    color:white;
                    font-size: 0.7em;
                }
            }
            
            .iconeseta{
                height: 30px;
                font-weight: bold;
                color: #BDBDBD;
                cursor: pointer;
                font-size: 20px;
            }
        }
    }
    .dashboard {
        width: 100%;
        padding: 20px 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        box-sizing: border-box;
        overflow-y: hidden;
        overflow-x: scroll;
        .itens {
            width: 500%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: center;
            box-sizing: border-box;
        }
    }
    }
`