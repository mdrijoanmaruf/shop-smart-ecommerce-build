
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-bold text-brand-navy">
              ShopStore
            </Link>
            <p className="mt-4 text-gray-600">
              Your one-stop shop for all your favorite products at amazing prices.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand-navy" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-navy" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-navy" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-navy" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Links Columns */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/categories" className="text-gray-600 hover:text-gray-900">All Categories</Link></li>
              <li><Link to="/deals" className="text-gray-600 hover:text-gray-900">Deals</Link></li>
              <li><Link to="/featured" className="text-gray-600 hover:text-gray-900">Featured</Link></li>
              <li><Link to="/new" className="text-gray-600 hover:text-gray-900">New Arrivals</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-gray-900">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>
              <li><Link to="/size-guide" className="text-gray-600 hover:text-gray-900">Size Guide</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">Our Story</Link></li>
              <li><Link to="/sustainability" className="text-gray-600 hover:text-gray-900">Sustainability</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-gray-900">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6">
          <p className="text-sm text-gray-500 text-center">
            &copy; {year} ShopStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
