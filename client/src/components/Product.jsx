import { useState, useEffect } from "react";
import axios from "axios";
import { ArrowRight, Box, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
export const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:4000/api/products");
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 font-[poppins]">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300">
          <div className="relative h-56 overflow-hidden">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex flex-col flex-grow p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              {product.name}
            </h2>
            <p className="text-xs text-black bg-gray-300 rounded-full w-max px-2 py-1 font-semibold">
              {product.category}
            </p>
            <p className="text-xl font-bold text-black mt-2 flex items-center">
              <span>
                <DollarSign size={16} />
              </span>
              {`${product.price.toFixed(2)}`}
            </p>
            <p className="text-sm text-gray-500 mt-1 flex gap-2 items-center">
              <span>
                <Box size={16} />
              </span>
              Stock: {product.stock}
            </p>
            <hr className="m-2 bg-gray-300" />
            <p className="text-sm text-gray-700 mt-2 line-clamp-2">
              {product.description}
            </p>
          </div>
          <hr className="mx-5 bg-gray-300" />
          <div className="p-4 flex justify-between items-center mt-auto">
            <button className="text-white bg-black p-3 rounded-sm border flex gap-3 border-black text-xs font-medium hover:text-black hover:bg-white  transition-colors duration-200">
              View Details
              <ArrowRight size={16} />
            </button>
            <span className="text-sm text-gray-400">ID: {product.id}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
