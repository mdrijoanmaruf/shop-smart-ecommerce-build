
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import WishlistButton from "@/components/wishlist/WishlistButton";
import Rating from "@/components/common/Rating";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group relative rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative pt-[100%] bg-gray-100 overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Out of stock badge */}
          {!product.inStock && (
            <div className="absolute top-2 right-2">
              <span className="bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded">
                Out of Stock
              </span>
            </div>
          )}
          
          {/* Wishlist button */}
          <div className="absolute top-2 left-2">
            <WishlistButton product={product} />
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium text-gray-900 text-sm sm:text-base truncate mr-2">
              {product.name}
            </h3>
          </div>
          
          <div className="mb-2">
            <Rating value={product.rating} />
          </div>
          
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            
            <Button
              onClick={handleAddToCart}
              size="sm"
              disabled={!product.inStock}
              className="rounded-full px-3 py-1 h-8"
            >
              <ShoppingCart size={16} className="mr-1" />
              Add
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
