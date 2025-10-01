import React from "react";
import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const linkClass = (path) => {
    return `mb-2 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-3 ${
      isActive(path)
        ? "text-white"
        : "hover:bg-gray-300 text-gray-700"
    }`;
  };

  const getStyle = (path) => {
    return isActive(path) ? { backgroundColor: '#e7000b' } : {};
  };

  return (
    <nav className="bg-gray-200 w-64 p-4">
      <ul>
        <li>
          <Link to="/" className={linkClass("/")} style={getStyle("/")}>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/cart" className={linkClass("/cart")} style={getStyle("/cart")}>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Cart
          </Link>
        </li>
        <li>
          <Link to="/checkout" className={linkClass("/checkout")} style={getStyle("/checkout")}>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Checkout
          </Link>
        </li>
      </ul>
      
      <div className="mt-8 pt-8 border-t border-gray-300">
        <h3 className="font-semibold text-gray-700 mb-3 px-4">Categories</h3>
        <ul>
          <li className="mb-2 px-4 py-2 text-gray-600 cursor-pointer transition-colors duration-200" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = '#e7000b'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>
            Laptops
          </li>
          <li className="mb-2 px-4 py-2 text-gray-600 cursor-pointer transition-colors duration-200" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = '#e7000b'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>
            Smartphones
          </li>
          <li className="mb-2 px-4 py-2 text-gray-600 cursor-pointer transition-colors duration-200" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = '#e7000b'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>
            Accessories
          </li>
          <li className="mb-2 px-4 py-2 text-gray-600 cursor-pointer transition-colors duration-200" style={{ color: 'inherit' }} onMouseEnter={(e) => e.target.style.color = '#e7000b'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>
            Audio
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;
