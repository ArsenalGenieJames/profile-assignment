import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically process the payment
    setOrderPlaced(true);
    clearCart();
    
    // Redirect to home after 3 seconds
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <main className="flex-1 p-8 bg-white overflow-y-auto">
        <div className="max-w-4xl mx-auto text-center py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">No Items to Checkout</h2>
          <p className="text-gray-600 mb-8">Please add items to your cart first.</p>
          <button
            onClick={() => navigate("/")}
            className="text-white px-8 py-3 rounded-lg transition-colors duration-200"
            style={{ backgroundColor: '#e7000b' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#c10009'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#e7000b'}
          >
            Go to Shop
          </button>
        </div>
      </main>
    );
  }

  if (orderPlaced) {
    return (
      <main className="flex-1 p-8 bg-white overflow-y-auto">
        <div className="max-w-4xl mx-auto text-center py-16">
          <svg
            className="w-24 h-24 mx-auto text-green-500 mb-4"
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h2>
          <p className="text-gray-600 mb-8">Thank you for your purchase. You will receive a confirmation email shortly.</p>
          <p className="text-sm text-gray-500">Redirecting to shop...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 p-8 bg-white overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">State *</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">ZIP Code *</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Card Number *</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Expiry Date *</label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        required
                        placeholder="MM/YY"
                        maxLength="5"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">CVV *</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        required
                        placeholder="123"
                        maxLength="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-white py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                style={{ backgroundColor: '#e7000b' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#c10009'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#e7000b'}
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-gray-800 font-semibold">
                      ₱{(item.price * item.quantity).toLocaleString('en-PH')}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-300 pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>₱{getCartTotal().toLocaleString('en-PH')}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax:</span>
                  <span>₱{(getCartTotal() * 0.12).toLocaleString('en-PH')}</span>
                </div>
                <div className="border-t border-gray-300 pt-2 mt-2">
                  <div className="flex justify-between text-xl font-bold text-gray-800">
                    <span>Total:</span>
                    <span style={{ color: '#e7000b' }}>
                      ₱{(getCartTotal() * 1.12).toLocaleString('en-PH')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
