import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-800 to-orange-500 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">MS CHOUHAN</span>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering students to achieve excellence in JEE and NEET examinations through quality resources and expert mentorship.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/store" className="block text-gray-300 hover:text-white transition-colors">Online Store</Link>
              <Link to="/mentorship" className="block text-gray-300 hover:text-white transition-colors">Mentorship</Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Resources</span>
            <div className="space-y-2">
              <Link to="/blog" className="block text-gray-300 hover:text-white transition-colors">Blog</Link>
              <span className="block text-gray-300 hover:text-white cursor-pointer transition-colors">Study Materials</span>
              <span className="block text-gray-300 hover:text-white cursor-pointer transition-colors">Practice Tests</span>
              <span className="block text-gray-300 hover:text-white cursor-pointer transition-colors">Success Stories</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300 text-sm">info@mschouhan.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300 text-sm">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 MS CHOUHAN. All rights reserved. Empowering future engineers and doctors.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;