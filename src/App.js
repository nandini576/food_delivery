import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Router>
        <NavBar/>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
         </Routes>
      </Router>
    </div>
  )
}

export default App
