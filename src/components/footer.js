import React from "react";

function Footer() {
  return (
    <footer className="text-white py-8" style={{ background: 'linear-gradient(to right, #e7000b, #b80009)' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Bossgen</h3>
            <p className="text-red-100 text-sm">
              Your trusted destination for premium tech products. Quality guaranteed.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">About Bossgen</h3>
            <ul className="text-red-100 text-sm space-y-2">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Shipping Info</li>
              <li className="hover:text-white cursor-pointer">Returns</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
            <ul className="text-red-100 text-sm space-y-2">
              <li>Email: geniejamesarsenal.202300349@gmail.com</li>
              <li>Phone: 09954831139</li>
              <li>Hours: Mon-Fri 9AM-6PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center" style={{ borderColor: '#ff4d4d' }}>
          <div>
            <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Bossgen</p>
          </div>
          <div>
            <p className="text-sm text-red-100">All Rights Reserved | Premium Bossgen Products</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
