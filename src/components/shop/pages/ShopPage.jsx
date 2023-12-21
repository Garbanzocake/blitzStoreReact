import React from "react";

import { Link, NavLink, Outlet } from "react-router-dom";
import { Footer } from "../../ui/Footer";

import { NavbarMobile } from "../../ui/NavbarMobile";

export const ShopPage = () => {
  return (
    <>
      <div className="container-fluid m-0 p-0 animate__animated animate__fadeIn ">
        <NavbarMobile/>
        <div className="row m-0 p-0 vh-100">
          <div className="col-3 bg-black text-light p-2 d-none d-sm-block ">
            <div className="card text-center bg-black text-bg-dark border-0 mt-5 ">
              <NavLink to="/home">
                <img
                  src="../src/assets/BlitzRocket.png"
                  className="card-img-top align-self-center"
                  style={{ width: "150px", height: "150px" }}
                  alt=""
                />
              </NavLink>
              <div className="card-body p-0">
                <Link className="btn btn-black text-light me-5" to="products">
                  <i
                    className="bi-cart"
                    style={{ fontSize: "2rem", color: "white" }}
                  ></i>
                  {/* Shop */}
                </Link>
                <Link
                  className="btn btn-black text-light ms-5"
                  to="/shop/search"
                >
                  <i
                    className="bi-search"
                    style={{ fontSize: "2rem", color: "white" }}
                  ></i>
                  {/* Buscar */}
                </Link>
                <div className="navbar-nav">
                  <NavLink
                    activeclassname="active"
                    className="nav-item nav-link"
                    exact="true"
                    to="homeStore"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    activeclassname="active"
                    className="nav-item nav-link"
                    exact="true"
                    to="products"
                  >
                    Products
                  </NavLink>

                  <NavLink
                    activeclassname="active"
                    className="nav-item nav-link"
                    exact="true"
                    // to="/shop/products"
                  >
                    Enlistate
                  </NavLink>
                </div>
              </div>
            </div>

            <div style={{position:"absolute",bottom:0}}>
            <Footer />
            </div>
            
          </div>
          <div className="col-12 col-sm-9 p-0">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
