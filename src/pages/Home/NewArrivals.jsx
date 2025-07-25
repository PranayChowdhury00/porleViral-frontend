import { useEffect, useState } from "react";
import axios from "axios";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/new-arrivals")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">🆕Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="border rounded-xl p-4 shadow hover:shadow-md transition">
            <img src={product.image} alt={product.name} className="h-60 w-full object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
