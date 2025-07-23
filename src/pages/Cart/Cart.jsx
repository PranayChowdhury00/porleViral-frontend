import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/cart/${user.email}`)
        .then((res) => setCartItems(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this item from cart?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/cart/${id}`);
        setCartItems(cartItems.filter(item => item._id !== id));
        Swal.fire('Deleted!', 'Item removed from cart.', 'success');
      } catch (err) {
        console.error(err);
        Swal.fire('Error!', 'Failed to delete item.', 'error');
      }
    }
  };

  const handleUpdateQuantity = async (id, quantity) => {
    if (quantity < 1) return;

    try {
      await axios.patch(`http://localhost:5000/cart/${id}`, { quantity });
      setCartItems(cartItems.map(item =>
        item._id === id ? { ...item, quantity } : item
      ));
      Swal.fire('Updated!', 'Quantity updated.', 'success');
    } catch (err) {
      console.error(err);
      Swal.fire('Error!', 'Failed to update quantity.', 'error');
    }
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleBuyNow = () => {
    navigate("/checkout", {
      state: {
        cartItems,
        totalPrice,
      },
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">No items in cart.</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full border text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3">Image</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Size</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Subtotal</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item._id} className="border-t">
                    <td className="p-3">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    </td>
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">{item.size}</td>
                    <td className="p-3">${item.price}</td>
                    <td className="p-3">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleUpdateQuantity(item._id, parseInt(e.target.value))}
                        className="w-16 border rounded p-1"
                        min="1"
                      />
                    </td>
                    <td className="p-3">${item.price * item.quantity}</td>
                    <td className="p-3 space-x-2">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-right mt-6 text-xl font-semibold">
            Total Price: ${totalPrice}
          </div>

          <div className="text-right mt-4">
            <button
              onClick={handleBuyNow}
              className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
