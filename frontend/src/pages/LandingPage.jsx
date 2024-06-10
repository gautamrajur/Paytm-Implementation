import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { NavBar } from "../components/NavBar";
import {SubHeading} from "../components/SubHeading"

export function LandingPage() {
    return <div className="bg-slate-300 h-screen flex-col">
        <NavBar/>
        <div className="flex-col h-screen mx-auto justify-center items-center text-center">
                <Heading label={"Welcome to Paytm App"}/>
                <SubHeading label={"Sign Up/Sign In to Proceed !"} regular={true}/>
        </div>
    </div>
}