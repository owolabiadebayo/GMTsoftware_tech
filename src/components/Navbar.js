import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'
function Navbar() {
  return (
    <>
      <div
        className="container-fluid py-2 fixed-top  sticky-top scrollspy text-white"
        style={{ background: "#272626" }}
      >
        <div className="container ">
          <nav className="navbar navbar-expand-lg navbar-expand-md  navbar-dark">
            <Link to="/" className="text-decoration-none">
              <div className="h3 d-flex ">
                <span className="log2 align-self-center font-weight-bolder">
                  GMT
                </span>
                <span className="log align-self-center font-weight-bold">
                  software
                </span>
              </div>
            </Link>

            <button
              className="navbar-toggler collapsed border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <div className="close-icon py-1 text-white">x</div>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link text-white" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link text-white dropdown-toggle"
                    to="/courses"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Courses
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <Link className="dropdown-item" to="/FrontEnd">
                      Frontend Web Development
                    </Link>
                    <div class="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/React">
                      React Development
                    </Link>
                    <div class="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/Python">
                      Python Programming
                    </Link>
                    <div class="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/Fullstack">
                      Software Engineering Immersive
                    </Link>
                    <div class="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/flutter">
                      Android Development
                    </Link>
                    <div class="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/Uxdesigner">
                      UX/UI designer
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/curriculum">
                    Curriculum
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Companies">
                    For Companies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/sign-up">
                    Apply
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/About-Us">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar
