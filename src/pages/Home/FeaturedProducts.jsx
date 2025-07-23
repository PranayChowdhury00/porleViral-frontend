// FeaturedProducts.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/featuredProducts')
      .then(res => setFeaturedProducts(res.data))
      .catch(err => console.error(err.message));
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredProducts.map(product => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image.url}
              alt={product.image.altText || product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
              <p className="text-yellow-600 font-bold mt-1">
                {product.price.currency} ${product.price.amount}
              </p>
              <Link to={`/product/${product._id}`}>
                <button className="mt-4 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
