import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal } from "./Modal";
import { useHandleModal } from "../../hooks/useHandleModal";

export const Navbar = () => {
  const { isModalOpen, setIsModalOpen, handleModalClose } = useHandleModal();
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const handleModalClose = () => {
  //   console.log("clickeado");

  //   setIsModalOpen(false);
  //   document.querySelector('body').classList.remove('modal-open')
  // };

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark  bg-black text-light d-flex justify-content-around m-0 p-0">
        <div className="container-fluid m-0 p-0">
          <a className="navbar-brand" href="#">
            <img
              className="logo-brand"
              // src="src/assets/BlitzRocket.png"
              src="src/assets/BlitzRocket.png"
              title="BlitzStoreBrand"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarHomeBlitz"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsModalOpen(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Normal navbar */}
        <div className="collapse navbar-collapse " id="navbarHomeBlitz">
          <div className="navbar-nav">
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
              to="/shop"
            >
              Shop
            </NavLink>
          </div>
        </div>
      </nav>

      {isModalOpen && (
        <Modal
          className="animate__animated animate__fadeOut "
          onClose={handleModalClose}
        />
      )}
    </>
  );
};
