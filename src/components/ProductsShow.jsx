import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function ProductsShowPage() {
  const [product, setProduct] = useState({});
  const params = useParams();

  const handleShowProduct = () => {
    axios.get(`http://localhost:3000/products/${params.id}.json`).then((response) => {
      setProduct(response.data);
    });
  };

  const handleCartProduct = () => {
    const { id } = product;
    const cartedProduct = { product_id: id, quantity: 1 };
    axios
      .post(`http://localhost:3000/carted_products.json`, cartedProduct)
      .then((response) => {
        console.log("Product added to cart:", response.data);
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  };

  useEffect(handleShowProduct, []);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <div className="images">
        {product.images && product.images.map((image) => <img key={image.id} src={image.url} alt="" />)}
      </div>
      <button className="btn btn-primary" onClick={handleCartProduct}>
        Add to cart
      </button>
    </div>
  );
}
