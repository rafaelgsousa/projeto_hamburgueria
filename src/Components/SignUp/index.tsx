import React from "react";
import {ContainerSignUp} from "./style";
import { Link } from "react-router-dom";
import {BsFillArchiveFill} from "react-icons/bs";
import {SignLoginUser} from "../../Provider/Login&SignUp/index";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHistory} from "react-router-dom";

interface RegisterData {
    username:string;
    email:string;
    password:string;
    passwordConfirm:string;
}

interface onLoginData {
    username:string;
    email:string;
    password:string;
}

const Signup = () => {

    const history = useHistory<any>()

    const schema = yup.object().shape({
        username:yup.string().required("campo obrigatório !"),
        email:yup.string().required("campo obrigatório !").email("Digite um email valido"),
        password:yup.string().required("campo obrigatório !")
        .matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve ter letras maíuscula, mínuscula, numero e caracter"),
        passwordConfirm:yup.string().required("campo obrigatório !").oneOf([yup.ref("password")],"senha incorreta!")
    })

    const {register,handleSubmit,formState:{errors}}=useForm<RegisterData>({resolver:yupResolver(schema)})

    const {token,errorSign,SignUp} = SignLoginUser();

    const onSignUp = ({username,email,password}:onLoginData)=>{
        const data = {username,email,password}
        SignUp(data)
        history.push("/")
    }

    if(token){
        history.push("/home")
    }

    return (
        <>
            <ContainerSignUp>
               
                <div className="logo">
                    <h2>Burguer <span>kenzie</span></h2>
                    <div className="textlogo">
                        <div><BsFillArchiveFill/></div>
                        <p>A vida é como um sanduiche, é preciso recheala com os <strong>melhores</strong> ingredientes.</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSignUp)}>
                    <p><span className="principal">Cadastro</span><span><Link to="/" className="link">Retornar para login</Link></span></p>
                    <input {...register("username")} placeholder="nome"/>
                    <p className="feedback" style={{display:errors.username?"block":"none",height:"5px",fontSize:"10px"}}>{errors.username?.message}</p>
                    <input {...register("email")} placeholder="email" type="email"/>
                    <p className="feedback" style={{display:errors.email?"block":"none",height:"5px",fontSize:"10px"}}>{errors.email?.message}</p>
                    <input {...register("password")} placeholder="senha" type="password"/>
                    <p className="feedback" style={{display:errors.password?"block":"none",height:"5px",fontSize:"10px"}}>{errors.password?.message}</p>
                    <input {...register("passwordConfirm")} placeholder="confirmar senha" type="password"/>
                    <p className="feedback" style={{display:errors.passwordConfirm?"block":"none",height:"5px",fontSize:"10px"}}>{errors.passwordConfirm?.message}</p>
                    <button type="submit">Cadastrar</button>
                </form>
            </ContainerSignUp>
        </>
    )
}

export default Signup