import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <div>

      <nav className="nav-container">

        <div className="left-nav">

          <div className="inner-left-nav">
            <h1>HOME FOOD</h1>
            <img src="/images/icon.ico" alt="food"/>
          </div>

          <div>
              <Link className="list" to="/">HOME</Link>
              <Link className="list" to="/login">LOGIN</Link>
              <Link className="list" to="/register">REGISTER</Link>
           </div>

        </div>

        <div className="right-nav">
          <form className="inner-right-nav">
             <input className="search" type="search" placeholder="Search..."/>
             <button className="search-button" >Search</button>
          </form>
        </div>
      
      </nav>
    </div>
  )
}

export default NavBar
