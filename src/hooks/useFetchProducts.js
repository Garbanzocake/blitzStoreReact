import { useState, useEffect } from "react";
// import { getGifs } from "../ /getGifs";

export const useFetchProducts = (category) => {
  const [products, setProducts] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);

  const getProducts =  () => {
    const newProducts = [
      {
        id: "1",
        nombre: "Marco 15x15",
        descripcion: "Descripcion 1",
        precio: 25000,
        imgUrl:'../src/assets/BlitzRocket.png'
      },
      {
        id: "2",
        nombre: "Marco 15x25",
        descripcion: "Descripcion 2",
        precio: 30000,
        imgUrl:'../src/assets/react.svg'
      },
      {
        id: "3",
        nombre: "Marco 25cmx25cm",
        descripcion: "Descripcion 3",
        precio: 35000,
        imgUrl:'../src/assets/Makeupgirl.png'
      },
      {
        id: "4",
        nombre: "Marco 30cmx30cm",
        descripcion: "Descripcion 4",
        precio: 40000,
        imgUrl:'../src/assets/emojiface.png'
      },
      {
        id: "5",
        nombre: "Marco 35cmx35cm",
        descripcion: "Descripcion 5",
        precio: 45000,
        imgUrl:'../src/assets/emojiface.png'
      },
      {
        id: "6",
        nombre: "Marco 40cmx40cm",
        descripcion: "Descripcion 6",
        precio: 50000,
        imgUrl:'../src/assets/BlitzRocket.png'
      },
      {
        id: "7",
        nombre: "Marco 45cmx45cm",
        descripcion: "Descripcion 7",
        precio: 55000,
        imgUrl:'../src/assets/react.svg'
      },
      {
        id: "8",
        nombre: "Marco 50cmx50cm",
        descripcion: "Descripcion 8",
        precio: 60000,
        imgUrl:'../src/assets/emojiface.png'
      },
    ];
    setProducts(newProducts);
    setIsLoading(false);
  };

    useEffect(() => {
      getProducts();
    }, []);

  return {
    products,
    isLoading,
  };
};
