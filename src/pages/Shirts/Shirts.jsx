import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Swal from "sweetalert2";

const Shirts = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6);
  const [sizeFilter, setSizeFilter] = useState("");
  const [priceSort, setPriceSort] = useState("");


  useEffect(() => {
    axios.get("http://localhost:5000/products?category=shirt")
      .then(res => {
        setProducts(res.data);
        setFiltered(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    let result = [...products];

    if (sizeFilter) {
      result = result.filter(product => product.size.includes(sizeFilter));
    }

    if (priceSort === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (priceSort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    setFiltered(result);
    setCurrentPage(1);
  }, [sizeFilter, priceSort, products]);

  

  const paginatedData = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const totalPages = Math.ceil(filtered.length / pageSize);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Shirts Collection</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select onChange={e => setSizeFilter(e.target.value)} value={sizeFilter} className="border p-2 rounded">
          <option value="">All Sizes</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <select onChange={e => setPriceSort(e.target.value)} value={priceSort} className="border p-2 rounded">
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedData.map(product => (
          <div key={product._id} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-yellow-600 font-bold">{product.currency} ${product.price}</p>
            <p className="text-sm text-gray-600 mt-1">Available Sizes: {product.size.join(", ")}</p>
            <div className="flex gap-2 mt-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full text-sm">
               <Link to={`/product/shirt/${product._id}`}>View Details</Link>
              </button>
              

            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        {[...Array(totalPages).keys()].map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page + 1)}
            className={`px-3 py-1 border rounded ${currentPage === page + 1 ? 'bg-yellow-400 text-white' : 'hover:bg-gray-200'}`}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Shirts;
