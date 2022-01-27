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
    
    const {cart,removeCartApi,addCartApi} = CartUser()

    const [total,setTotal] = useState((cart.filter(item => item.name === cartItem.name)).length)

    const totalCalc = () =>{
        setTotal((cart.filter(item => item.name === cartItem.name)).length)
    }

    useEffect(()=>totalCalc(),[cart])

    const handleSub =()=>{
        if(total>0){
            removeCartApi(cartItem)
            totalCalc()
        }
    }

    const handleSum =()=>{
        addCartApi(cartItem)
        totalCalc()
    }

    const remove = ()=> {
        removeCartApi(cartItem)
        totalCalc()
    }

    return(
        <CardCartItem>
            {console.log(`${cartItem.name} ==>>`,total)}
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