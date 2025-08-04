import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        LinkedLite
      </Link>

      <div className="space-x-6 text-lg">
        <Link to="/" className="text-gray-800 hover:text-blue-600">
          Feed
        </Link>

        {user ? (
          <>
            <Link to="/profile" className="text-gray-800 hover:text-blue-600">
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="text-red-600 hover:underline"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register" className="text-gray-800 hover:text-blue-600">
              Register
            </Link>
            <Link to="/login" className="text-gray-800 hover:text-blue-600">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;