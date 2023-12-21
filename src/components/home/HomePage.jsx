import React from "react";
import "./styles.css";
import { Navbar } from "../ui/Navbar";
import { Banner } from "../ui/Banner";
import { Footer } from "../ui/Footer";

export const HomePage = () => {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <Navbar />

        <Banner />

        <div className="section p-0 m-0 text-light text-center ">
          <div className="row p-5">
            <h4>RECIBE ACTUALIZACIONES SOBRE </h4>
            <h4>MIS ULTIMOS TRABAJOS</h4>
          </div>

          <div className="row ">
            <span className="text-warning">Registrate Aqui!</span>
          </div>

          <img className="mt-2" src="src/assets/emojiface.png" alt="" />

          <div className="row m-0 justify-content-center">
            {/* nombre */}
            <div className="col-10 col-sm-3 p-2 mt-2 ">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                aria-label="Last name"
              />
            </div>
            {/* apellido */}
            <div className="col-10 col-sm-3  p-2 mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                aria-label="Last name"
              />
            </div>

            {/* correo */}
            <div className="col-10 col-sm-3 p-2 mt-2 ">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                aria-label="Last name"
              />
            </div>
            <div className="col-6 col-sm-2 p-2 mt-2">
              <div className="d-grid gap-2">
                <button
                  type="button"
                  className="btn btn-light "
                  style={{ borderRadius: "30px" }}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
