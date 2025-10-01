import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Header() {
  const { getCartItemsCount } = useCart();
  const cartCount = getCartItemsCount();

  return (
    <header className="text-white p-4 flex items-center justify-between" style={{ backgroundColor: '#e7000b' }}>
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <svg
            className="w-12 h-12 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <div>
            <h1 className="text-2xl font-bold">Bossgen</h1>
            <p className="text-sm text-red-100">Your One-Stop Tech Store</p>
          </div>
        </Link>
      </div>
      
      <Link
        to="/cart"
        className="relative bg-white px-4 py-2 rounded-lg hover:bg-red-50 transition-colors duration-200 flex items-center gap-2"
        style={{ color: '#e7000b' }}
      >
        <svg
          className="w-6 h-6"
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
        <span className="font-semibold">Cart</span>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>
    </header>
  );
}

export default Header;
