import { Link } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Heading } from "./Heading";

export function NavBar () {
    return <div className="container  mx-auto">
        <div className=" flex flex-wrap justify-between w-full items-center">
            <Heading label={"Paytm App"}/>  
            <div className="flex">
                <Link className="p-2 pt-10"  to={LandingPage}>Home</Link>
                <Link className="p-2 pt-10" to={"/signin"}>Sing In</Link>
                <Link className="p-2 pt-10"  to={"/signup"}>Sign Up</Link>
            </div>
        </div>
    </div>
}