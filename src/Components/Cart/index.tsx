import { ContainerCart } from "./style";
import {CartItens} from "./style";
import CardCart from "../CardCart";
import {ImCross} from "react-icons/im";
import { CartUser } from "../../Provider/Cart";

const Cart =()=> {

    const {setShowCart,listCart,totalPrice,removeAllCartApi}=CartUser()

    return (
        <ContainerCart>
            <CartItens>
                <div className="headercart">
                    <h3>Carrinho de compras</h3><ImCross className="icone" onClick={()=>setShowCart(false)}/>
                </div>
                <div className="bodycart">
                    <ul>
                        {listCart&&listCart.map((item,index)=><li><CardCart cartItem={item} /></li>)}
                    </ul>                 
                </div> 
                <div className="total"><span>Total</span><span className="reduce">{totalPrice
                .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span></div>
                <button className="remover" onClick={removeAllCartApi}>Remover todos</button>        
            </CartItens>
        </ContainerCart>
    )
}

export default Cart