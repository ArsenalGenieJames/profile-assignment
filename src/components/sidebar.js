import React from "react";

function SideBar() {
  return (
    <nav className="bg-gray-200 w-48 p-4">
      <ul>
        <li className="mb-2"><a href="#home">Home</a></li>
        <li className="mb-2"><a href="#profile">Profile</a></li>
        <li className="mb-2"><a href="#settings">Settings</a></li>
      </ul>
    </nav>
  );
}

export default SideBar;
