import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div className="m-auto justify-items-center space-y-4">
            <div className="flex items-center gap-2">
              {/* <Rocket className="text-brand-blue" size={24} /> */}
              <span className="text-3xl  font-bold">Innovation Garage</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Nurturing the next generation of entrepreneurs and innovators within our college ecosystem.
            </p>
          </div>

          {/* Quick Links */}
          <div className='m-auto justify-items-center'>
            <h4 className="text-2xl font-bold mb-6 text-brand-yellow">Explore</h4>
            <ul className="justify-items-center space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-brand-blue transition-colors">Home</Link></li>
              <li><Link to="/ideas" className="text-gray-300 hover:text-brand-blue transition-colors">Register Idea</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-brand-blue transition-colors">Events</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-brand-blue transition-colors">Our Team</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div className='m-auto justify-items-center'>
            <h4 className="text-2xl font-bold mb-6 text-brand-yellow">Connect</h4>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Innovation Garage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;