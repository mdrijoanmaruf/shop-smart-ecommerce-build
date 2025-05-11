
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";
import { Search, ShoppingCart, Heart, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Header: React.FC = () => {
  const { toggleCart, totalItems: cartItems } = useCart();
  const { totalItems: wishlistItems } = useWishlist();
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`sticky top-0 w-full z-30 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-brand-navy">
            ShopStore
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-gray-700 hover:text-brand-navy transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Search">
              <Search size={20} />
            </button>
            <Link to="/wishlist" className="p-2 rounded-full hover:bg-gray-100 relative" aria-label="Wishlist">
              <Heart size={20} />
              {wishlistItems > 0 && (
                <div className="absolute -top-1 -right-1 rounded-full bg-brand-coral text-white text-xs w-5 h-5 flex items-center justify-center">
                  {wishlistItems}
                </div>
              )}
            </Link>
            <button 
              onClick={toggleCart} 
              className="p-2 rounded-full hover:bg-gray-100 relative"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
              {cartItems > 0 && (
                <div className="absolute -top-1 -right-1 rounded-full bg-brand-coral text-white text-xs w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </div>
              )}
            </button>
            
            {/* User auth buttons */}
            {user ? (
              <Link 
                to="/dashboard"
                className="flex items-center gap-2 py-1 px-3 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <User size={18} />
                <span className="text-sm">Account</span>
              </Link>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="text-sm py-1 px-3 text-gray-700 hover:text-brand-navy transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-sm py-1 px-3 bg-brand-coral text-white rounded-full hover:bg-brand-coral/90 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button 
              onClick={toggleCart} 
              className="p-2 rounded-full hover:bg-gray-100 relative"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
              {cartItems > 0 && (
                <div className="absolute -top-1 -right-1 rounded-full bg-brand-coral text-white text-xs w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </div>
              )}
            </button>
            
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="block py-2 text-gray-700 hover:text-brand-navy"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* User auth links for mobile */}
            {user ? (
              <Link 
                to="/dashboard"
                className="flex items-center py-2 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={18} className="mr-2" />
                My Account
              </Link>
            ) : (
              <>
                <Link 
                  to="/login"
                  className="block py-2 text-gray-700 hover:text-brand-navy"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/signup"
                  className="block py-2 text-gray-700 hover:text-brand-navy"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}

            <div className="pt-2 flex space-x-4 border-t">
              <Link 
                to="/wishlist" 
                className="flex items-center py-2 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart size={18} className="mr-2" />
                Wishlist
                {wishlistItems > 0 && (
                  <span className="ml-1 rounded-full bg-brand-coral text-white text-xs px-2">
                    {wishlistItems}
                  </span>
                )}
              </Link>
              <button 
                className="flex items-center py-2 text-gray-700"
                onClick={() => {
                  setIsMenuOpen(false);
                  // Fixed: Using optional chaining to safely access focus method
                  setTimeout(() => {
                    const searchInput = document.querySelector('input[type="search"]');
                    if (searchInput && 'focus' in searchInput) {
                      searchInput.focus();
                    }
                  }, 100);
                }}
              >
                <Search size={18} className="mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
