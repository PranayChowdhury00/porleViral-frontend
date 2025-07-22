import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Swal from 'sweetalert2';
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
console.log(formData)
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInUser(formData.email, formData.password);
      
      // Show success message
      await Swal.fire({
        title: 'Welcome back!',
        text: 'You have successfully logged in.',
        icon: 'success',
        confirmButtonText: 'Continue'
      });
      
      navigate("/"); // Redirect after successful login
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
      
      // Show error message
      Swal.fire({
        title: 'Login Failed',
        text: err.message || 'Invalid email or password. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
        
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-4 text-center space-y-2">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
          <p className="text-gray-600">
            <Link to="/forgot-password" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;