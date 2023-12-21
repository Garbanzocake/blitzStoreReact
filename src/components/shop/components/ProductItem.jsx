import React from "react";

export const ProductItem = ({ nombre, descripcion, precio,imgUrl }) => {
  return (
    <div className="col-12 col-sm-6 mt-3">
    <div className="card border-0">
      
      <img src={imgUrl} className="img-fluid mx-auto d-block rounded"   alt="" />
      <div className="card-body ">
        <h5 className="card-title"> {nombre}</h5>
        <p className="card-text">Precio {precio}</p>

        <blockquote className="blockquote mb-0">
          <p>{descripcion}</p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </div>
    </div>
    </div>
  );
};
