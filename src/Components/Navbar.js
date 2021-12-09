import React, { useState } from "react"
import './Navbar.css'
// import logo from '../assets/image/logo.svg'
import { FiAlignJustify } from "react-icons/fi"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const [Show, SetShow] = useState(false)
    return (
        <>
        <nav className="navbar">
            <div className="nav-center">
                <div class="nav-header">
                    <NavLink to="index.html" class="nav-logo">
                        {/* <img src={logo} alt="Recipes"/> */}<h1>S@ck</h1>
                    </NavLink>
                    <button className="nav-btn" onClick={() => SetShow(!Show)}>
                        <FiAlignJustify />
                    </button>
                </div>
                <div className={Show ? "nav-links show-links" : "nav-links"}>
                    <NavLink to="/" exact className="nav-link" onClick={() => SetShow(false)}>Home</NavLink>
                    <NavLink to="/bag" exact className="nav-link" onClick={() => SetShow(false)}>Kid</NavLink>
                    <NavLink to="/school" exact className="nav-link" onClick={() => SetShow(false)}>School/College</NavLink>
                    <NavLink to="/travel" exact className="nav-link" onClick={() => SetShow(false)}>Travel</NavLink>
                    <NavLink to="/gym" exact className="nav-link" onClick={() => SetShow(false)}>Gym</NavLink>
                    <NavLink to="/about" exact className="nav-link" onClick={() => SetShow(false)}>About</NavLink>
                    <div class="nav-link contact-link" onClick={() => SetShow(false)}>
                        <NavLink to="/contact" exact className="btn" onClick={() => SetShow(false)}>Contact</NavLink>
                    </div>
                </div>
            </div>
        </nav>
        </>
            
    )
}

export default Navbar
