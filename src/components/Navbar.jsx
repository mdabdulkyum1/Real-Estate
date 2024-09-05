// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Left Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Real Estate Logo" className="h-8 w-8 mr-2"/>
            <Link to="/" className="text-primary font-bold text-xl">Real Estate</Link>
          </div>
          
          {/* Middle Navigation Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-text-dark hover:text-primary">Home</Link>
            <Link to="/properties" className="text-text-dark hover:text-primary">Properties</Link>
            <Link to="/about" className="text-text-dark hover:text-primary">About Us</Link>
            <Link to="/contact" className="text-text-dark hover:text-primary">Contact</Link>
          </div>

          {/* Right Login/Signup */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-secondary font-semibold">Login</Link>
            <Link to="/signup" className="bg-primary text-white px-4 py-2 rounded">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
