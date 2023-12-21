import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { useHandleModal } from "../../hooks/useHandleModal";

export const NavbarMobile = () => {
  const { isModalOpen, setIsModalOpen, handleModalClose } = useHandleModal();
  return (
    <>
      {/* // navMobile */}
      <nav className="navbar navbar-expand-sm navbar-dark  bg-black text-light d-flex justify-content-around m-0 p-0 d-block d-sm-none">
        <Link className="btn btn-black text-light " to="products">
          <i
            className="bi-cart"
            style={{ fontSize: "2rem", color: "white" }}
          ></i>
          {/* Shop */}
        </Link>
        <Link className="btn btn-black text-light " to="/shop/search">
          <i
            className="bi-search"
            style={{ fontSize: "2rem", color: "white" }}
          ></i>
          {/* Buscar */}
        </Link>

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
