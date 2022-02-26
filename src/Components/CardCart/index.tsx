import { CardCartItem } from "./style";
import {BsTrash} from "react-icons/bs";
import { CartUser } from "../../Provider/Cart";
import { useState } from "react";
import { useEffect } from "react";

interface Product {
    name:string;
    category:string;
    img:string;
    price:number;
    userId:number;
    id:number
}


interface Data {
    cartItem:Product;
}

const CardCart = ({cartItem}:Data) => {
    console.log(cartItem)
    
    const {cart,removeCartApi,addCartApi,deleteCartApi} = CartUser()

    const [total,setTotal] = useState((cart.filter(item => item.name === cartItem.name)).length)

    const totalCalc = () =>{
        setTotal((cart.filter(item => item.name === cartItem.name)).length)
    }

    useEffect(()=>totalCalc(),[cart])

    const handleSub =()=>{
        totalCalc()
        if(total>0){
            removeCartApi(cartItem)
            totalCalc()
        }
        else if (total===0){
            deleteCartApi(cartItem)
            totalCalc()
        }
    }

    const handleSum =()=>{
        totalCalc()
        addCartApi(cartItem)
    }

    const remove = ()=> {
        removeCartApi(cartItem)
        totalCalc()
    }

    return(
        <CardCartItem>
            <div className="imagem">
                <img src={cartItem.img} alt="item"/>
            </div>
            <div className="dados">
                <h3>{cartItem.name}<span onClick={remove}><BsTrash/></span></h3>
                <div className="controle">
                    <div className="sinais" onClick={handleSub}>-</div>
                    <div>{total}</div>
                    <div className="sinais" onClick={handleSum}>+</div>
                </div>
            </div>
        </CardCartItem>
    )
}
export default CardCart