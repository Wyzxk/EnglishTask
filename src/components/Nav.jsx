import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center">
            <img
              src="/logo_idiomas_eafit.png" // Ruta de la imagen
              alt="Logo" // Texto alternativo de la imagen
              className="h-7" // Clase de Tailwind para definir el ancho de la imagen
            />
          </div>
        </Link>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/turism" className="text-black hover:text-gray-300">
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
