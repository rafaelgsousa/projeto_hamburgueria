import { createContext,useContext,ReactNode,useState } from "react";
import { History } from "history";
import api from "../../Service";

interface LoginSignData {
    children:ReactNode
}

interface DataSign {
    username:string;
    email:String;
    password:string
}

interface DataLogin {
    email:string;
    password:string;
}

interface SignLoginData {
    token:string
    id:string
    errorLogin:string
    errorSign:string
    SignUp:(dataSign:DataSign,history:History)=>void
    Login:(dataLogin:DataLogin,history:History)=>void
    Logout:()=>void

}

const LoginSignContext = createContext<SignLoginData>({} as SignLoginData)


const LoginSignProvider = ({children}:LoginSignData) => {

    const [token,setToken] = useState(localStorage.getItem("tokencliente") || "")

    const [id,setId] = useState(localStorage.getItem("tokenIdcliente") || "")

    const [errorSign,setErrorSign] = useState("")

    const [errorLogin,setErrorLogin] = useState("")

    const SignUp = (dataSign:DataSign,history:History) => {

        api.post("/signup",dataSign)
        .then(resp=>{
            
            history.push("/")
        })
        .catch(err=> setErrorSign(err))
    }

    const Login =(dataLogin:DataLogin,history:History)=>{

        api.post("/login",dataLogin)
        .then(resp=>{

            setToken(resp.data.accessToken)

            setId(resp.data.user.id)

            localStorage.setItem("tokencliente",resp.data.accessToken)

            localStorage.setItem("tokenIdcliente",JSON.stringify(resp.data.user.id))

            history.push("/home")
        })
        .catch(err=> setErrorLogin(err))
    }

    const Logout = ()=>{

        localStorage.clear()
        window.location.href="/"
        
    }

    return(
        <LoginSignContext.Provider value={{token,id,errorLogin,errorSign,SignUp,Login,Logout}}>
            {children}
        </LoginSignContext.Provider>
    )
}

export default LoginSignProvider;

export const SignLoginUser = () => useContext(LoginSignContext)