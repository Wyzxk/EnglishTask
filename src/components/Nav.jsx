import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/app" className="text-black hover:text-gray-300">
                Next &gt;
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
