import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/authContext';


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // 🔄 While checking if user is authenticated
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // ❌ User not found after loading is complete
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ✅ User is authenticated
  return children;
};

export default PrivateRoute;