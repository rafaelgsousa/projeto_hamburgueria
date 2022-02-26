import React from "react";
import {ContainerLogin} from "./style";
import { Link } from "react-router-dom";
import {BsFillArchiveFill} from "react-icons/bs";
import {SignLoginUser} from "../../Provider/Login&SignUp/index";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHistory} from "react-router-dom";
import {toast} from "react-toastify"

interface RegisterData{
    email:string;
    password:string;
}

const Login = () => {

    const history=useHistory()

    const {token,errorLogin,Login} = SignLoginUser()

    const schema = yup.object().shape({
        email:yup.string().required("Campo obrigatório !"),
        password:yup.string().required("Campo obrigatório !")
    })

    const {register,handleSubmit,formState:{errors}} = useForm<RegisterData>({resolver:yupResolver(schema)})

    if(token){
        history.push("/home")
    }

    const handleLogin = (data:RegisterData) => {
        Login(data)
        history.push("/home")
        toast.success("Logando...")
    }

    return (
        <>
            <ContainerLogin>
                {console.log(Login)}
                <form onSubmit={handleSubmit(handleLogin)}>
                    <p>Login</p>
                    <input {...register("email")} placeholder="email" type="email"/>
                    <p className="feedback" style={{display:errors.email?"block":"none",height:"5px",fontSize:"10px"}}>{errors.email?.message}</p>
                    <input {...register("password")} placeholder="senha" type="password"/>
                    <p className="feedback" style={{display:errors.password?"block":"none",height:"5px",fontSize:"10px"}}>{errors.password?.message}</p>
                    <button type="submit">Logar</button>
                    <p className="textocadastro">Crie sua conta para saborear muitas delicias e matar sua fome</p>
                    <div className="cadastrar"><Link to="/signup">Cadastrar</Link></div>
                </form>
                <div className="logo">
                    <h2>Burguer <span>kenzie</span></h2>
                    <div className="textlogo">
                        <div><BsFillArchiveFill/></div>
                        <p>A vida é como um sanduiche, é preciso recheala com os <strong>melhores</strong> ingredientes.</p>
                    </div>
                </div>
            </ContainerLogin>
        </>
    )
}

export default Login