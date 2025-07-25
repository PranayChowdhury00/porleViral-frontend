import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/authContext";

const ProductDetails2 = () => {
  const { user } = useContext(AuthContext);
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${category}/${id}`)

      .then(res => setProduct(res.data))
      .catch(err => console.error("Error fetching product details:", err));
  }, [category, id]);

  const handleAddToCart = async () => {
    if (!selectedSize) {
      Swal.fire({ icon: "warning", title: "Size Required", text: "Please select a size." });
      return;
    }

    if (!user) {
      Swal.fire({ icon: "error", title: "Login Required", text: "Please login to continue." });
      return;
    }

    const cartItem = {
      productId: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      currency: product.currency,
      size: selectedSize,
      quantity: quantity,
      userName: user.displayName || "Anonymous",
      userEmail: user.email || "",
    };

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/cart", cartItem);
      Swal.fire({ icon: "success", title: "Added to Cart!", text: `${product.name} added successfully.` });
    } catch (err) {
      console.error("Cart error:", err);
      Swal.fire({ icon: "error", title: "Error", text: "Could not add to cart." });
    } finally {
      setLoading(false);
    }
  };

  if (!product) return <p className="text-center text-lg mt-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 md:flex gap-10">
      <div className="w-full md:w-1/2">
        <img src={product.image} alt={product.name} className="w-full h-[400px] object-cover rounded" />
      </div>
      <div className="flex-1 space-y-4 mt-6 md:mt-0">
        <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
        <p className="text-xl font-semibold text-yellow-600">{product.currency} ${product.price}</p>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-sm text-gray-500">Category: {product.category}</p>

        <div className="mt-4">
          <label className="block font-semibold mb-1">Select Size:</label>
          <select value={selectedSize} onChange={e => setSelectedSize(e.target.value)} className="p-2 border rounded">
            <option value="">-- Choose Size --</option>
            {product.size.map(size => <option key={size} value={size}>{size}</option>)}
          </select>
        </div>

        <div className="mt-4">
          <label className="block font-semibold mb-1">Quantity:</label>
          <input type="number" value={quantity} onChange={e => setQuantity(parseInt(e.target.value))} className="p-2 border rounded w-24" min="1" />
        </div>

        <button
          onClick={handleAddToCart}
          disabled={loading}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 mt-6 rounded-full transition"
        >
          {loading ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails2;
