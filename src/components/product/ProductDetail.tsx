
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Product, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Heart, ShoppingCart, Check, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Rating from "@/components/common/Rating";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);

  // Find the product by ID
  const product = products.find(p => p.id === Number(id));

  // Handle going back
  const handleBackClick = () => {
    navigate(-1);
  };

  // Handle quantity change
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  };

  // Handle add to cart
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  // Handle wishlist toggle
  const handleWishlistToggle = () => {
    if (!product) return;
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  // If product not found
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for doesn't exist.</p>
          <Button onClick={handleBackClick}>
            <ChevronLeft size={16} className="mr-2" />
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 md:py-12">
      <button 
        onClick={handleBackClick}
        className="flex items-center text-gray-600 mb-6 hover:text-gray-900"
      >
        <ChevronLeft size={18} className="mr-1" />
        Back to Products
      </button>
      
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={product.imageUrl} 
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* Product Details */}
        <div className="md:w-1/2 md:pl-8">
          <div className="flex flex-col h-full">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <Rating value={product.rating} size={20} />
            </div>
            
            <div className="text-2xl font-bold text-gray-900 mb-4">
              ${product.price.toFixed(2)}
            </div>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Features:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto">
              {/* Product status */}
              <div className="mb-4">
                {product.inStock ? (
                  <div className="flex items-center text-green-600">
                    <Check size={16} className="mr-2" />
                    <span>In Stock</span>
                  </div>
                ) : (
                  <div className="text-red-500">Out of Stock</div>
                )}
              </div>
              
              {/* Quantity selector */}
              {product.inStock && (
                <div className="flex items-center mb-6">
                  <label htmlFor="quantity" className="mr-3 text-gray-700">Quantity:</label>
                  <select
                    id="quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </Button>
                
                <Button
                  onClick={handleWishlistToggle}
                  variant="outline"
                  className={`flex-1 ${isInWishlist(product.id) ? 'border-brand-coral text-brand-coral' : ''}`}
                >
                  <Heart 
                    size={18} 
                    className="mr-2" 
                    fill={isInWishlist(product.id) ? "currentColor" : "none"} 
                  />
                  {isInWishlist(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
