import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/paths');
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-purple-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              DodyDev
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-purple-400 transition">Home</Link>
            <Link to="/paths" className="hover:text-purple-400 transition">Learning Paths</Link>
            <Link to="/about" className="hover:text-purple-400 transition">About</Link>
            <Link to="/custom-plan" className="hover:text-purple-400 transition">Custom Plan</Link>
            <button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 hover:bg-purple-800/20 rounded" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/paths" className="block px-3 py-2 hover:bg-purple-800/20 rounded" onClick={() => setIsMenuOpen(false)}>Learning Paths</Link>
            <Link to="/about" className="block px-3 py-2 hover:bg-purple-800/20 rounded" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/custom-plan" className="block px-3 py-2 hover:bg-purple-800/20 rounded" onClick={() => setIsMenuOpen(false)}>Custom Plan</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;