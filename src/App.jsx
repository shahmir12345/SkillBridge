import React from "react"
import Navbar from "./components/Navbar"

import Home from "./views/Home/home"
import Browse from "./views/BrowseSkills/browse"
import UserProfile from "./views/UserProfile/userprofile"
import RequestSwap from "./views/RequestSwap/requestswap"
import MySwaps from "./views/MySwaps/myswaps"
import Matches from "./views/Matches/matches"
import Registration from "./views/Registration/registration"

import { AuthProvider } from './controllers/authcontext'

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import Login from "./views/Login/login"


const AppContent = () => {

  const location = useLocation()

  const hideNavbar =
    location.pathname === "/register" ||
    location.pathname === "/login"    ||
    location.pathname === "/"

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>

        <Route path="/" element={<Registration />} />

        <Route path="/home" element={<Home />} />

        <Route path="/browse" element={<Browse />} />

        <Route path="/profile/:id" element={<UserProfile />}/>

        <Route path="/request/:id" element={<RequestSwap />}/>

        <Route path="/myswaps" element={<MySwaps />}/>

        <Route path="/matches" element={<Matches />}/>

        <Route path="/register" element={<Registration />}/>

        <Route path="/login" element={<Login/>}/>

      </Routes>
    </>
  )
}


const App = () => {

  return (
  <AuthProvider>  
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </AuthProvider>  
  )
}

export default App