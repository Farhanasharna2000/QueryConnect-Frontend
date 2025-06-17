import { Link } from "react-router-dom";
import {  signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import { useAuth } from "../../AuthContext/AuthContext";

const Navbar = () => {
 const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden" role="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-questions">All Questions</Link></li>
            {user && <li><Link to="/dashboard">Dashboard</Link></li>}
          </ul>
        </div>
        <Link to="/" className="text-xl normal-case">AskZone</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/all-questions">All Questions</Link></li>
          {user && <li><Link to="/dashboard">Dashboard</Link></li>}
        </ul>
      </div>

      <div className="navbar-end">
        {!user ? (
          <Link to="/login" className="btn btn-primary">Login</Link>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar" role="button">
              <div className="w-10 rounded-full">
                <img src={user.photoURL || "https://i.pravatar.cc/40"} alt={user.displayName || "Profile"} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
              <li><span className="font-semibold px-2 uppercase">{user.displayName || "User"}</span></li>
              <li>
                <button onClick={handleLogout} className="text-red-600">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
