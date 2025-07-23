import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import Swal from "sweetalert2";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      userName: user?.displayName,
      userEmail: user?.email,
      address,
      phone,
      totalPrice: state?.totalPrice,
      products: state?.cartItems,
      date: new Date().toISOString()
    };

    try {
      await axios.post("http://localhost:5000/orders", orderData);
      Swal.fire("Success!", "Your order has been placed.", "success");
      navigate("/");
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to place order.", "error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            value={user?.displayName}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            value={user?.email}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="text"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Address</label>
          <textarea
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
