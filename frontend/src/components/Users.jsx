import { useState, useEffect } from "react"
import { Button } from "./Button"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Users = () => {

    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState("")
    useEffect( () => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter).
        then(response => setUsers(response.data.users))
    }, [filter])

    return <div className="mx-2">
        <div className="font-bold mt-3 text-lg ml-3">Users</div>
        <div className="my-2 m-2">
            <input onChange={ e => setFilter(e.target.value) } type="text" className="w-full px-2 py-1 border rounded-border border-slate-200 " placeholder="Search for users... " />
        </div>
        <div>
           { users.map(user => <User user={user}/>)}
        </div>
    </div>
}

function User({user}) {
    const navigate = useNavigate()
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full bg-slate-200 h-12 w-12 flex justify-center pt-2.5 m-1 text-xl">{user.firstname[0].toUpperCase()}</div>
            <div className="flex flex-col justify-center h-full text-xl mx-2">
                {user.firstname} {user.lastname}
            </div>
        </div>
        <div className="flex flex-col justify-center h-full mr-4">
            <Button onClick={ () => {
                navigate("/send?id=" + user._id + "&name=" + user.firstname)   
            }} label={"Send Money"}/> 
        </div>
    </div>
}