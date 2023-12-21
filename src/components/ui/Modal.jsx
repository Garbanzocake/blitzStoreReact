import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

export const Modal = ({ onClose }) => {

  document.querySelector('body').classList.add('modal-open');
  return (
    <>
      <div className="modal1 animate__animated animate__fadeIn animate__faster">
        <div className="modal-content1">
          <div className="navbar-collapse ">
            <div className="navbar-nav text-center text-light ">
              <NavLink
                activeclassname="active"
                className="nav-item nav-link"
                exact="true"
                to="/home"
                onClick={onClose}
              >
                HOME
              </NavLink>

              <NavLink
                activeclassname="active"
                className="nav-item nav-link"
                exact="true"
                to="/gallery"
                onClick={onClose}
              >
                GALLERY
              </NavLink>

              <NavLink
                activeclassname="active"
                className="nav-item nav-link"
                exact="true"
                to="/news"
                onClick={onClose}
              >
                NEWS
              </NavLink>

              <NavLink
                activeclassname="active"
                className="nav-item nav-link"
                exact="true"
                to="/shop"
                onClick={onClose}
              >
                SHOP
              </NavLink>
            </div>
          </div>

          
        </div>
      </div>
    
    </>
  );
};
