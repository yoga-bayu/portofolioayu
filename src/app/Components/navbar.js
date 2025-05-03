import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = ["Home", "About", "Projects", "Contact"];

  return (
<nav className="sticky top-0 z-50 bg-[#F5F5DC] text-black px-4 py-3 shadow-md">
<div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">Portofolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:underline">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-[#fadadd] text-black px-4 py-2"> {/* Warna cream di mobile */}
          {menuItems.map((item) => (
            <li key={item} className="py-2">
              <a href={`#${item.toLowerCase()}`} className="block hover:underline" onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
