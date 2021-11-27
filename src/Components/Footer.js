import React from "react"
import './footer.css'

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>S@ck</span>. Built with{" "}
        <a href="https://reactjs.org/">React Js</a>
      </p>
    </footer>
  )
}

export default Footer
