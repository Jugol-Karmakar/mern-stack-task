import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center bg-white py-2">
      <div>
        <h2 className="text-xl font-semibold">Navbar</h2>
      </div>
      <div className="flex items-center">
        <Link to="/" className="mr-5 text-base font-medium py-3 px-3">
          Home
        </Link>
        <Link to="/product" className="mr-5 text-base font-medium py-3 px-3">
          Product
        </Link>
        <Link to="/about" className="mr-5 text-base font-medium py-3 px-3">
          About
        </Link>
        <Link to="/contact" className="mr-5 text-base font-medium py-3 px-3">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
