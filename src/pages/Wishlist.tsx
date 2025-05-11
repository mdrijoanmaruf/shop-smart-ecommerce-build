
import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { Heart, ShoppingCart, ChevronLeft, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

const Wishlist: React.FC = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        to="/"
        className="flex items-center text-gray-600 mb-6 hover:text-gray-900"
      >
        <ChevronLeft size={18} className="mr-1" />
        Back to Shopping
      </Link>
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold flex items-center">
          <Heart size={24} className="mr-3 text-brand-coral" />
          My Wishlist ({wishlist.length})
        </h1>
        
        {wishlist.length > 0 && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={clearWishlist}
            className="text-red-600 border-red-600 hover:bg-red-50"
          >
            <Trash size={16} className="mr-2" />
            Clear Wishlist
          </Button>
        )}
      </div>
      
      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-gray-100 p-12 rounded-lg inline-block">
            <Heart size={48} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">Add items that you like to your wishlist</p>
            <Button asChild>
              <Link to="/">Browse Products</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map(product => (
            <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
              <Link to={`/product/${product.id}`} className="block relative pt-[70%]">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </Link>
              
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h2 className="font-medium text-lg mb-2 hover:text-brand-navy">{product.name}</h2>
                </Link>
                <p className="text-gray-900 font-semibold mb-4">${product.price.toFixed(2)}</p>
                
                <div className="flex justify-between">
                  <Button 
                    onClick={() => addToCart(product)} 
                    disabled={!product.inStock}
                    size="sm"
                  >
                    <ShoppingCart size={16} className="mr-1" />
                    Add to Cart
                  </Button>
                  
                  <Button 
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromWishlist(product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
