import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { NavBar } from "../components/NavBar";
import { useNavigate } from "react-router-dom";

export function Signin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign In"}></Heading>
                <InputBox onChange={e => {
                    setUsername(e.target.value)
                }} label={"Email"} placeholder={"gautamraju@gmail.com"}></InputBox>
                <InputBox  onChange={e => {
                    setPassword(e.target.value)
                }}  label={"Password"} placeholder={"123456"}></InputBox>
                <Button onClick={async () => {
                    const response = await axios.post("http://3.24.182.97/api/v1/user/signin", {
                    username,
                    password
                    })
                    if(response.status == 200) {
                        localStorage.setItem("token",response.data.token)
                        navigate("/dashboard")
                    }else {
                        navigate("/error")
                    }
              
                   }} label={"Sign In"}></Button>
                <ButtonWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}></ButtonWarning>
         </div>
       </div>
    </div>
}