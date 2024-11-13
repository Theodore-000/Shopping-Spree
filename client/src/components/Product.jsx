import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}  // Link to product details page
          className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 duration-300"
        >
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-lg font-bold text-gray-900 mt-2">{`$${product.price.toFixed(
              2
            )}`}</p>
            <p className="text-sm text-gray-500 mt-1">{`Stock: ${product.stock}`}</p>
            <p className="text-sm text-gray-700 mt-2">{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
