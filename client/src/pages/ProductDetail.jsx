import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      setProduct(data);
    };
    fetchData();
  }, []);

  const productItem = product.find((p) => p.id == id);

  if (!productItem) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-8 max-w-5xl">
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
            src={productItem.image_url}
            alt={productItem.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">
            {productItem.name}
          </h1>
          <p className="text-gray-600 text-lg">{productItem.category}</p>
          <p className="text-2xl font-semibold text-blue-600">
            ${productItem.price}
          </p>
          <p className="text-gray-700">{productItem.description}</p>
          <p className="text-sm text-gray-500">In stock: {productItem.stock}</p>

          {/* Add to Cart Button */}
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
