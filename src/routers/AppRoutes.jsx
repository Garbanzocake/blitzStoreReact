import { Navigate, createBrowserRouter } from "react-router-dom";
import { BlitzStoreApp } from "../BlitzStoreApp";

import { HomePage } from "../components/home/HomePage";
import { GalleryPage } from "../components/gallery/GalleryPage";
import { NewsPage } from "../components/news/NewsPage";

import { ShopPage } from "../components/shop/pages/ShopPage";
import { ProductsPage } from "../components/shop/pages/ProductsPage";
import { ShopHomePage } from "../components/shop/pages/ShopHomePage";

export const AppRoutes = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <BlitzStoreApp />,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Navigate to="/home" />,
        },
        {
          path: "home",
          element: <HomePage />,
        },
        {
          path: "gallery",
          element: <GalleryPage />,
        },
        {
          path: "news",
          element: <NewsPage />,
        },
        {
          path: "shop",
          element: <ShopPage />,
          children: [
            {
              path:'/shop/',
              element:<Navigate to="/shop/homeStore"/>
            },
            
            {
              path: "homeStore",
              element: <ShopHomePage />,
            },
            {
              path: "products",
              element: <ProductsPage />,
            },
            {
              path: "/shop/*",
              element: <Navigate to="/shop/homeStore"/>
            }
            
          ],
        },
        {
          path: "*",
          element: <Navigate to="/home" />,
        },
      ],
    },
  ]);
