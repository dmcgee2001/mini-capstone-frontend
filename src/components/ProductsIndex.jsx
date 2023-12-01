/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.products.map((product) => (
          <div key={product.id} className="col">
            <div className="card">
              {product.images &&
                product.images.length > 0 && ( // Check if at least one image exists
                  <img src={product.images[0].url} alt="" className="aspect-square object-cover w-full" />
                )}
              <h2 className="card-title">{product.name}</h2>
              <p className="card-text">${product.price}</p>
              <p>{product.description}</p>
              <Link to={`/products/${product.id}`}>
                <button className="btn btn-primary">Show Product</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
