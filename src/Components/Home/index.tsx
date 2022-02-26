import { ContainerHome } from "./style";
import {BsFillCartFill} from "react-icons/bs";
import {BsBoxArrowInRight} from "react-icons/bs";
import {FaSearch} from "react-icons/fa";
import Card from "../Card";
import Cart from "../Cart";
import { HomeUse } from "../../Provider/Home";
import { CartUser } from "../../Provider/Cart";
import { SignLoginUser } from "../../Provider/Login&SignUp";
import { useHistory} from "react-router-dom";
import { useState, useEffect } from "react";

const Home = ()=> {

    const history=useHistory()

    const {products,filtered,SearchFilter,Products}=HomeUse()

    const {totalItens,showCart,setShowCart}=CartUser()

    const {token,Logout}=SignLoginUser()

    const [word,setWord]=useState("")

    const HandleWord=(word:string)=>{
        
        SearchFilter(word)
        
    }

    useEffect(()=>{
        Products()
    },[])

    if(!token){
        history.push("/")
    }

    const handleLogout = ()=>{
        Logout()
    }

    return (
        <>
        <ContainerHome>
            <header>
                <div className="logo">
                    <h3>Burguer <span>kenzie</span></h3>
                </div>
                <div className="menupesquisa">
                    <div className="search">
                        <input placeholder="Categoria" value={word} onChange={(e)=>setWord(e.target.value)}/>
                        <FaSearch className="pes" onClick={()=>HandleWord(word)}/>
                    </div>
                    <div className="conteinerdadoscart">
                        <div className="totalcart">{totalItens}</div>
                        <BsFillCartFill className="iconecart" onClick={()=>setShowCart(true)}></BsFillCartFill>                       
                    </div>
                    <BsBoxArrowInRight className="iconeseta" onClick={handleLogout}/>
                </div>
            </header>
            <main className="dashboard">
                <div className="itens">
                    {filtered.length===0 || word===""?
                    products.map((itens,index)=><Card itens={itens} key={index}/>)
                    :
                    filtered.map((itens,index)=><Card itens={itens} key={index}/>)
                    }
                </div>
            </main>
            {showCart&&<Cart/>}
        </ContainerHome>
        </>
    )
}

export default Home;