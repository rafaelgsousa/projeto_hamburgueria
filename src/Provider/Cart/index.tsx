import { createContext,useContext,ReactNode,useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../Service";
import {SignLoginUser} from "../Login&SignUp/index";

interface CartChildren{
    children:ReactNode
}

interface Product {
    name:string;
    category:string;
    img:string
    price:number;
    userId:number;
    id:number
}

interface CartContApi {
    cart:Product[];
    listCart:Product[];
    totalPrice:number;
    totalItens:number;
    setListCart: React.Dispatch<React.SetStateAction<Product[]>>
    getCart:()=>void;
    addCartApi:(itemData:Product)=>void;
    removeCartApi:(idDelete:ItemDelete)=>void;
    removeAllCartApi:()=>void;
    showCart:boolean;
    setShowCart:(any:boolean)=>any;
    deleteCartApi:(product:Product)=>any;
    removerItemCart:({id}:Product)=>any
}

interface ItemDelete {
    id:number
    name:string
}

const CartContext = createContext<CartContApi>({} as CartContApi)

const CartProvider =({children}:CartChildren)=>{

    const {id,token}= SignLoginUser()

    const[showCart,setShowCart]=useState(false);
    
    const [listCart,setListCart] = useState<Product[]>([] as Product[])

    const [cart,setCart] = useState<Product[]>([]);

    const totalPrice = cart.reduce((acc,itens)=>acc+itens.price,0);

    const totalItens = cart.length;

    const getCart =()=>{

        const userId = Number(id)
        api.get(`/cart/?userId=${Number(userId)}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(resp=>{
            // localStorage.setItem("cart",resp)
            setCart(resp.data)
        })
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getCart()
    },[])

    const addCartApi = ({name,category,price}:Product) =>{
        
        const userId = id
        const data = {name,category,price,userId}
        token === ''? toast.error("Vocẽ deve estar logado para adicionar ao carrinho!"):
        api.post("/cart",data,{
        headers: {
            Authorization: `Bearer ${token}`,
        }})
        .then(resp=>{
            console.log(resp.data)
            setCart([...cart,resp.data])
            if(!(listCart.filter((item)=>item.name===name)).length){
                setListCart([...listCart,resp.data])
            }
            getCart()
        })
        .catch(err=>console.log(err))
              
    }

    const removeCartApi = ({name}:ItemDelete)=>{
        
        if ((cart.filter(item=>item.name === name)).length>=1){
            api.delete(`/cart/${cart.filter(item=>item.name === name)[0].id}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then(_=>{
                if ((cart.filter(item =>item.name===name)).length === 0){
                    setListCart(listCart.filter(item =>item.name!==name))
                }
                getCart()   
            })
            .catch(err=>console.log(err))  
        } else {
            setListCart(listCart.filter(item =>item.name!==name))
        }

    }

    const removerItemCart = ({name}:Product)=>{
        const list_items:Product[] = cart.filter(item=>item.name === name)
        list_items.map(item=>deleteCartApi(item))
        setListCart(listCart.filter(item =>item.name!==name))
    }

    const deleteCartApi = ({id}:Product)=>{
        
        
            api.delete(`/cart/${cart.filter(item=>item.id === id)[0].id}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then(_=>{
                if ((cart.filter(item =>item.id=== id)).length === 0){
                    setListCart(listCart.filter(item =>item.id!==id))
                }
                getCart()   
            })
            .catch(err=>console.log(err))  
        

    }

    const removeAllCartApi=()=>{
        cart.map((item)=>deleteCartApi(item))
        setListCart([])
    }

    return(
        <CartContext.Provider value={{cart,getCart,totalPrice,totalItens,addCartApi,removeCartApi,
        removeAllCartApi,showCart,setShowCart,listCart,setListCart,deleteCartApi,removerItemCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const CartUser=()=>useContext(CartContext)