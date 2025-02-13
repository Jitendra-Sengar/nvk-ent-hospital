import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 relative">
        
        {/* Logo & Name */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/images/nvklogo.jpeg"
            alt="NVK ENT Logo"
            className="w-12 h-12 object-cover rounded-full border-2 border-white shadow-md"
          />
          <span className="text-white text-2xl font-bold">NVK ENT</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className={`text-lg font-semibold transition-all duration-300 px-4 py-2 rounded-full ${
                location.pathname === page.path
                  ? "bg-white text-teal-700 shadow-md"
                  : "text-white hover:bg-white hover:text-teal-700"
              }`}
            >
              {page.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu (Animated) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-teal-600 shadow-lg md:hidden"
            >
              <div className="flex flex-col space-y-4 p-4">
                {pages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-lg font-semibold block px-4 py-2 rounded-full text-center transition-all duration-300 ${
                      location.pathname === page.path
                        ? "bg-white text-teal-700 shadow-md"
                        : "text-white hover:bg-white hover:text-teal-700"
                    }`}
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
