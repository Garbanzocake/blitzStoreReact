import React from "react";
import { ProductItem } from "../components/ProductItem";
import { useFetchProducts } from "../../../hooks/useFetchProducts";
import "./styles.css";

export const ProductsPage = () => {
  const { products, isLoading } = useFetchProducts();

  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <nav className="navbar ps-sm-5 pt-sm-3 ">
        {/* d-flex justify-content-between d-inline */}
        <div className="container-fluid ">
          <div className="d-flex justify-content-between d-inline align-items-center">
            <h3 className="d-none d-sm-block mb-0 me-2 me-sm-5">Products</h3>
            

            <p className="m-0">
              <strong>Filter by:</strong> All
            </p>
          </div>

          <p className="p-0 m-0 justify-self-end">COMPARTIR PAGINA</p>
        </div>

        {/* d-flex align-items-center */}
      </nav>

      <div className="row m-0 p-3 scrollable-div">
        {products.map((product) => {
          // console.log(producto);
          return <ProductItem key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};
