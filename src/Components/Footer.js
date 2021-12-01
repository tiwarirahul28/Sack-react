import React from "react"
import { NavLink } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="footer-content">
                <div className="items">
                    <NavLink to="/" className="logo">About Us</NavLink>  
                    <p> 
                    At S@ck we're all about equipping our bags with not only the bags worthy of lust but the confidence to match. Bringing you the latest trends, style updates and latest launches, we are the go-to online destination for all your designer bag and accessory needs.
                    </p>
                </div>
                <div className="items">
                    <h3>Quick Link</h3>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/bag">Kids</NavLink></li>
                        <li><NavLink to="/school">School/College</NavLink></li>
                        <li><NavLink to="/travel">Travels</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>                          
                </div>

                <div className="items">
                    <h3>Legal</h3>
                <ul>
                    <li><NavLink to="/">Terms</NavLink></li>
                    <li><NavLink to="/">Privacy Policy</NavLink></li>
                    <li><NavLink to="/">Cookie Policy</NavLink></li>
                    <li><NavLink to="/">GDPR Compliance</NavLink></li>
                </ul>
                </div>
                <div className="items">
                    <h3>Contact Us</h3>
                        <p> <i className="fas fa-phone"></i> +123-456-7890 </p>
                        <p> <i className="fas fa-envelope"></i> languagelab@gmail.com </p>
                        <p> <i className="fas fa-map-marker-alt"></i> mumbai, india - 400016 </p>
                </div>

            </div>
            <hr/>
            <footer className="page-footer">
                <p>
                    &copy; {new Date().getFullYear()} <span>S@ck</span>. Built with{" "}
                    <NavLink to="https://reactjs.org/">React Js</NavLink>
                </p>
            </footer>
        </div>
    </footer>
    {/* <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>S@ck</span>. Built with{" "}
        <NavLink to="https://reactjs.org/">React Js</NavLink>
      </p>
    </footer> */}
    </>
  )
}

export default Footer
