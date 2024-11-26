import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:4000/api/products/${id}`
      );
      setProduct(data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="container mx-auto p-8 max-w-5xl font-[poppins]">
      {/* Go Back Button */}
      <Link
        to="/"
        className="inline-block my-2 px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-sm hover:bg-gray-400 transition duration-300">
        Go Back
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 text-lg">{product.category}</p>
          <p className="text-2xl font-semibold text-blue-600">
            ${product.price}
          </p>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-sm text-gray-500">In stock: {product.stock}</p>

          {/* Add to Cart Button */}
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-sm hover:bg-blue-500 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
