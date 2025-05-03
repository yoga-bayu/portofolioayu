import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-6">
        
        {/* Teks inspiratif */}
        <p className="text-lg font-medium">
          Let’s connect and build something amazing together!
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-2xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaGithub />
          </a>
        </div>

        {/* Garis pemisah */}
        <div className="w-full h-px bg-gray-600"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Ayu Wandrira. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
