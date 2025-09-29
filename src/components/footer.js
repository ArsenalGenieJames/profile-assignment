import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-between items-center">
          <div>
            <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Arsenal Portfolio</p>
          </div>
          <div>
            <p className="text-sm text-blue-100">Information Technology | Full-Stack Developer</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
