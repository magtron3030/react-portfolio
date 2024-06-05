import { NavLink } from "react-router-dom";
import './Header.css'




  export default function Nav() {
  return (
    <header className="row">
      <h1 className="col-5 p-3 m-3">Maggie's Portfolio</h1>

      <nav className="container col-6 fs-4">
        <ul className= "row justify-content-end align-items-center list-unstyled">
          <li className="col-2 m-3">
            <NavLink to="/" className="text-light text-decoration-none">About</NavLink>
          </li>
          <li className="col-2 m-3">
            <NavLink to="/portfolio" className="col-2 text-light text-decoration-none">Portfolio</NavLink>
          </li>
          <li className="col-2 m-3">
            <NavLink to="/contact" className="col-2 text-light text-decoration-none">Contact</NavLink>
          </li>
          <li className="col-2 m-3">
            <NavLink to="/resume" className="col-2 text-light text-decoration-none">Resume</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
