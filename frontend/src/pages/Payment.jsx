import { useState } from "react"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import axios from "axios"

export const Payment = ()=> {
    const location = useLocation()
    return <div className="flex justify-center h-screen bg-gray-100">
    <div className="h-full flex flex-col justify-center">
        <div
            className="border h-min text-card-foreground p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
            <div className="flex space-y-1.5 p-6">
            <h2 className="text-3xl font-bold text-center">{location.state.message}</h2>
            <h2 className="px-1"><svg fill="none" viewBox="0 0 15 15" height="1em" width="1em">
            <path fill="currentColor" fillRule="evenodd"
             d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm7.072 3.21l4.318-5.398-.78-.624-3.682 4.601L4.32 7.116l-.64.768 3.392 2.827z"
            clipRule="evenodd"
            />
            </svg>
            </h2>
        </div>
    </div>
  </div>
</div>
}