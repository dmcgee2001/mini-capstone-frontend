/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export function ProductsIndex(props) {
  return (
    <div>
      <h1>All products</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {props.products.map((product) => (
          <div key={product.id} className="col">
            <div className="card">
              <img src={product.images[0].url} alt="" />
              <h2 className="card-title">{product.name}</h2>
              <p className="card-text">{product.price}</p>
              <p>{product.description}</p>
              <Link to={`/products/${product.id}`}>
                <button>Show Product</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

<div className="col">
  <div className="card">
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a
        little bit longer.
      </p>
    </div>
  </div>
</div>;
