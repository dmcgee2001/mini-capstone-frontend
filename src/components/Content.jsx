import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { CategoryIndex } from "./CategoryIndex";
import { ProductsShowPage } from "./ProductsShow";
import { Header } from "./Header";
export function Content() {
  const [products, setProducts] = useState([]);
  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };
  const handleCreateProduct = (params) => {
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setProducts([...products, response.data]);
    });
  };

  useEffect(handleIndexProducts, []);
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/products" element={<ProductsIndex products={products} />} />
          <Route path="/products/:id" element={<ProductsShowPage />} />
          <Route path="/products/test" element={<CategoryIndex products={products} />} />
          <Route path="/products/new" element={<ProductsNew onCreateProduct={handleCreateProduct} />} />
        </Routes>
      </div>
    </>
  );
}
