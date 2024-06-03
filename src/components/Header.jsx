import { NavLink } from "react-router-dom";
import './Header.css'




  export default function Nav() {
  return (
    <header className="row">
      <h1 className="col-5 p-3">Maggie's Portfolio</h1>

      <nav className="container col-6">
        <ul className= "row justify-content-end align-items-center list-unstyled">
          <li className="col-2 m-3">
            <a href="/" className="text-light text-decoration-none">About</a>
          </li>
          <li className="col-2 m-3">
            <a href="/portfolio" className="col-2 text-light text-decoration-none">Portfolio</a>
          </li>
          <li className="col-2 m-3">
            <a href="/contact" className="col-2 text-light text-decoration-none">Contact</a>
          </li>
          <li className="col-2 m-3">
            <a href="/resume" className="col-2 text-light text-decoration-none">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
