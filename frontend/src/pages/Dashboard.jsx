import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = () => {

    return <div>
        <AppBar/>
        <Balance value={4000}/>
        <Users/>
    </div>
}