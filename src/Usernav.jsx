import "./Nav.css";
import { NavLink } from "react-router-dom";

function Usernav() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">

      <div className="container-fluid">

        <NavLink className="navbar-brand" to="/">LOGO</NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          {/* Left side links */}
          <ul className="navbar-nav">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link " to="/about">About</NavLink>
            </li>

            <li className="nav-item dropdown">

              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Courses
              </a>

              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/course1">Course </NavLink></li>
                <li><NavLink className="dropdown-item" to="/course2">Why Us? </NavLink></li>
                <li><NavLink className="dropdown-item" to="/course3">Mentors</NavLink></li>
              </ul>

            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">Admin</NavLink>
            </li>

          </ul>

          {/* Right side Join button */}
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink className="nav-link join-btn" to="/join">Join Us</NavLink> 
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Usernav;