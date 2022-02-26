import { createContext,useContext,ReactNode,useState } from "react";
import api from "../../Service";

interface HomeProviderData{
    children:ReactNode;
}

interface Product {
    name:string;
    category:string;
    img:string
    price:number;
    userId:number;
    id:number
}

interface Home {
    products:Product[]
    filtered:Product[]
    SearchFilter:(word:string)=>void
    Products:()=>void
}


const HomeContext = createContext<Home>({} as Home)


const HomeProvider = ({children}:HomeProviderData)=>{

    const [products,setProducts]=useState([])

    const [filtered,setFiltered] = useState([])

    const SearchFilter = (word:string) => {
        if(word!==""){
            setFiltered(products.filter((product:Product)=> product.category.toLowerCase()===word.toLowerCase()))
        } else {
            setFiltered([])
        }
    }

    const Products = ()=>{
        api.get("/menu")
        .then(resp=>setProducts(resp.data))
        .catch(err=>console.log(err))
    }

    return(
        <HomeContext.Provider value={{products,filtered,SearchFilter,Products}}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeProvider;

export const HomeUse = ()=> useContext(HomeContext)