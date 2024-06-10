import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { Signin } from "./pages/Signin"
import { Singup } from "./pages/Singup"
import { SendMoney } from "./pages/SendMoney"
import { LandingPage } from "./pages/LandingPage"
import { Payment } from "./pages/Payment"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/signup" element={<Singup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/send" element={<SendMoney/>}/>
          <Route path="/error" element={<Error/>}/>
          <Route path="/payment" element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
