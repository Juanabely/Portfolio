import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'




function Nav() {
  return (
   <> 
    <nav className="main-menu">
      <ul>
        <li>
          <Link to="/">
            <i className="fa fa-home nav-icon"></i>
            <span className="nav-text">Home</span>
          </Link>
        </li>

        <li>
          <Link to="/projects">
            <i className="fa fa-image nav-icon"></i>
            <span className="nav-text">Projects</span>
          </Link>
        </li>

        <li>
          <Link to="/skills">
            <i className="fa fa-pen nav-icon"></i>
            <span className="nav-text">Blog/skills</span>
          </Link>
        </li>

        <li>
          <Link to="/contact">
            <i className="fa fa-envelope nav-icon"></i>
            <span className="nav-text">Contact</span>
          </Link>
        </li>

        <li>
          <Link to="/socials">
            <i className="fa fa-bell nav-icon"></i>
            <span className="nav-text">Socials</span>
          </Link>
        </li>

      </ul>

      <ul className="logout">
       

        <li>
          <Link to="/logout">
            <i className="fa fa-right-from-bracket nav-icon"></i>
            <span className="nav-text">
              Logout
            </span>
          </Link>
        </li>  
      </ul>
   </nav>
    
   

</>

  )
}
export default Nav