import { CardItem } from "./style";
import {CartUser} from "../../Provider/Cart/index"

interface ProductCard {
    name:string;
    category:string;
    img:string;
    price:number;
    userId:number;
    id:number
}

interface Data {
    itens:ProductCard;
}

const Card = ({itens}:Data) => {

    const {addCartApi} = CartUser()
    
    return (
        <CardItem>
            <div className="imagem">
                <img src={itens.img} alt="item"/>
            </div>
            <div className="dados">
                <h2>{itens.name}</h2>
                <p>{itens.category}</p>
                <h3>{(itens.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
                <button onClick={()=>addCartApi(itens)}>Adicionar</button>
            </div>
        </CardItem>
    )
}
export default Card