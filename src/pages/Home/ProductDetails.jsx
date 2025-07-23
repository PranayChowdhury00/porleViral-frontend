import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/authContext";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);

  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/featuredProducts/${productId}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [productId]);

  const handleAddToCart = async () => {
    if (!selectedSize) {
      Swal.fire({
        icon: 'warning',
        title: 'Size Required',
        text: 'Please select a size before adding to cart!',
      });
      return;
    }

    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Not Logged In',
        text: 'Please login to add items to cart.',
      });
      return;
    }

    const cartItem = {
      productId: product._id,
      name: product.name,
      image: product.image.url,
      price: product.price.amount,
      currency: product.price.currency,
      size: selectedSize,
      quantity: quantity,
      userName: user.displayName || "Anonymous",
      userEmail: user.email || "",
    };

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/cart", cartItem);
      setLoading(false);
      Swal.fire({
        icon: 'success',
        title: 'Added to Cart!',
        text: `${product.name} (Size: ${selectedSize}, Qty: ${quantity}) added successfully.`,
      });
    } catch (err) {
      setLoading(false);
      console.error("Error sending cart item to backend:", err);
      Swal.fire({
        icon: 'error',
        title: 'Failed',
        text: 'Could not add item to cart.',
      });
    }
  };

  if (!product) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={product.image.url}
          alt={product.image.altText || product.name}
          className="w-full md:w-1/2 h-[400px] object-cover rounded-xl"
        />

        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-xl text-yellow-600 font-semibold">
            {product.price.currency} ${product.price.amount}
          </p>
          <p className="text-gray-600 capitalize">Category: {product.category}</p>

          {/* Size Selector */}
          <div>
            <label className="font-semibold">Select Size:</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="mt-1 block w-32 p-2 border rounded"
              disabled={loading}
            >
              <option value="">-- Choose --</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

          {/* Quantity Selector */}
          <div>
            <label className="font-semibold">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="mt-1 block w-20 p-2 border rounded"
              min="1"
              disabled={loading}
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-6 px-6 py-2 rounded-full text-sm bg-yellow-500 hover:bg-yellow-600 text-white transition flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : null}
            {loading ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
