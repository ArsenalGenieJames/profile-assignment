import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Student Portfolio</p>
            <p className="text-sm">Created with React & Tailwind CSS</p>
          </div>
          <div className="space-x-6">
            <a href="https://github.com/" className="hover:text-blue-200" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/" className="hover:text-blue-200" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/" className="hover:text-blue-200" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
