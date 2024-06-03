import './Footer.css' 
import { NavLink } from "react-router-dom";





  export default function Footer() {
  return (
    <footer className="row fixed-bottom">
       <nav className="container col-6">
        <ul className= "row justify-content-between align-items-center list-unstyled">
          <li className="col-2">
            <a href="https://www.linkedin.com/in/maggie-mcdowell-927778106/" target= "_blank" className="text-light text-decoration-none">LinkedIn</a>
          </li>
          <li className="col-2">
            <a href="https://github.com/magtron3030" target="_blank" className="col-2 text-light text-decoration-none">GitHub</a>
          </li>
          <li className="col-2">
            <a href="https://www.instagram.com/magtron3030/" target="_blank" className="col-2 text-light text-decoration-none">Instagram</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}



