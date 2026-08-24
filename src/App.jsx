import React from 'react'
import Navbar from './components/Navbar'
import Home from './views/Home/home'
import Browse from './views/BrowseSkills/browse'
import UserProfile from './views/UserProfile/userprofile'
import RequestSwap from './views/RequestSwap/requestswap'
import MySwaps from './views/MySwaps/myswaps'
import Matches from './views/Matches/matches'


import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>

      <Navbar/>

        <Routes>

              <Route path='/' element={<Home/>} />

              <Route path='/browse' element={<Browse/>} />

              {/*agar yahan se URL ko /profile/4 khatam ho jae tu wo render kar de browser main us page ko, lekin React ko pata nahi hoga ke /profile/4 par kaunsa component render karna hai.tu yahan zarori hai route define karna */}
              <Route path='/profile/:id' element={<UserProfile/>} />

              <Route path='/request/:id' element={<RequestSwap/>} />

              <Route path='/myswaps' element={<MySwaps/>}/>

              <Route path='/matches' element={<Matches/>}/>

        </Routes>
    
    </BrowserRouter>
  )
}

export default App