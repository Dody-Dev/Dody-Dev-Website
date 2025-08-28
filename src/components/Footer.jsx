import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-purple-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent inline-block mb-4">
              DodyDev
            </Link>
            <p className="text-gray-400 text-sm">
              Accelerating your coding journey with structured paths and real practice.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Learning Paths</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/paths/basic-coding" className="hover:text-purple-400 transition">Basic Coding</Link></li>
              <li><Link to="/paths/dsa-fundamentals" className="hover:text-purple-400 transition">DSA Mastery</Link></li>
              <li><Link to="/paths/mern-stack" className="hover:text-purple-400 transition">MERN Stack</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/assignments" className="hover:text-purple-400 transition">Sample Assignments</Link></li>
              <li><Link to="/paths" className="hover:text-purple-400 transition">All Courses</Link></li>
              <li><Link to="/about" className="hover:text-purple-400 transition">Success Stories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/contact" className="hover:text-purple-400 transition">Contact Us</Link></li>
              <li><Link to="/custom-plan" className="hover:text-purple-400 transition">Custom Plans</Link></li>
              <li><a href="mailto:support@dodydev.com" className="hover:text-purple-400 transition">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-400 pt-8 border-t border-purple-800/30">
          <p>&copy; 2024 DodyDev. Helping you learn better, one assignment at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;