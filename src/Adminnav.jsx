import "./Nav.css";
import { NavLink, useNavigate } from "react-router-dom";

function Adminnav({ setIsAdmin }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    if (setIsAdmin) setIsAdmin(false);
    navigate("/");
  };

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
              <NavLink className="nav-link" to="/adhome">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link " to="/"></NavLink>
            </li>

            <li className="nav-item dropdown">

              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                
              </a>

              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to=""> </NavLink></li>
                <li><NavLink className="dropdown-item" to="/"> </NavLink></li>
                <li><NavLink className="dropdown-item" to="/"></NavLink></li>
              </ul>

            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/"></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/"> </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/studentdata">Students Data</NavLink>
            </li>

          </ul>

          {/* Right side Join / Logout button */}
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <button
                className="nav-link join-btn border-0 outline-none"
                onClick={handleLogout}
                style={{ cursor: "pointer", background: "none" }}
              >
                Logout
              </button>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Adminnav;