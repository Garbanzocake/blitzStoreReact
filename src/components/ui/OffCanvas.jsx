import React from 'react'
import "./styles.css";
import { Link, NavLink } from "react-router-dom";


const OffCanvas = () => {
  return (
    <>
      {/* Offcanvas */}
      <div
          className="offcanvas offcanvas-top text-bg-dark bg-transparent"
          tabIndex={-1}
          id="offcanvasDark"
          style={{ height: "100%"}}
        >
          <div className="offcanvas-header bg-dark" >
            <a className="navbar-brand" href="#">
              <img src="src/assets/react.svg" title="BlitzStoreBrand" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasDark"
              aria-controls="navbarHomeBlitz"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="offcanvas-body" >
            <div className="navbar-nav">
              <div className="container-fluid text-center ">
                <NavLink
                  activeclassname="active"
                  className="nav-item nav-link"
                  exact="true"
                  to="/home"
                >
                  Home
                </NavLink>

                <NavLink
                  activeclassname="active"
                  className="nav-item nav-link"
                  exact="true"
                  to="/gallery"
                >
                  Gallery
                </NavLink>

                <NavLink
                  activeclassname="active"
                  className="nav-item nav-link"
                  exact="true"
                  to="/news"
                >
                  News
                </NavLink>

                <NavLink
                  activeclassname="active"
                  className="nav-item nav-link"
                  exact="true"
                  to="/Shop"
                >
                  Shop
                </NavLink>
              </div>
            </div>
          </div>
        </div> 
    </>
  )
}

export default OffCanvas
