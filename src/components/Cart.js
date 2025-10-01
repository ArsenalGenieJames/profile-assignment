import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="flex-1 p-8 bg-white overflow-y-auto">
        <div className="max-w-4xl mx-auto text-center py-16">
          <svg
            className="w-24 h-24 mx-auto text-gray-300 mb-4"
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Add some products to get started!</p>
          <Link
            to="/"
            className="inline-block text-white px-8 py-3 rounded-lg transition-colors duration-200"
            style={{ backgroundColor: '#e7000b' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#c10009'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#e7000b'}
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 p-8 bg-white overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition-shadow duration-200"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <p className="text-xl font-bold" style={{ color: '#e7000b' }}>
                  ₱{item.price.toLocaleString('en-PH')}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  -
                </button>
                <span className="text-lg font-semibold w-8 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  +
                </button>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold text-gray-800 mb-2">
                  ₱{(item.price * item.quantity).toLocaleString('en-PH')}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm transition-colors duration-200"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg text-gray-600">Subtotal:</span>
            <span className="text-2xl font-bold text-gray-800">
              ₱{getCartTotal().toLocaleString('en-PH')}
            </span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg text-gray-600">Shipping:</span>
            <span className="text-lg text-gray-800">Free</span>
          </div>
          <div className="border-t border-gray-300 pt-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-gray-800">Total:</span>
              <span className="text-3xl font-bold" style={{ color: '#e7000b' }}>
                ₱{getCartTotal().toLocaleString('en-PH')}
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <Link
              to="/"
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg text-center transition-colors duration-200"
            >
              Continue Shopping
            </Link>
            <Link
              to="/checkout"
              className="flex-1 text-white py-3 rounded-lg text-center transition-colors duration-200"
              style={{ backgroundColor: '#e7000b' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#c10009'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#e7000b'}
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
