
import React from "react";
import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { Product } from "@/data/products";

interface WishlistButtonProps {
  product: Product;
  size?: number;
  className?: string;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ 
  product, 
  size = 20,
  className = ""
}) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isProductInWishlist = isInWishlist(product.id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isProductInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <button
      onClick={toggleWishlist}
      className={`rounded-full p-2 transition-all ${
        isProductInWishlist 
          ? "text-red-500 hover:bg-red-100" 
          : "text-gray-400 hover:text-red-500 hover:bg-gray-100"
      } ${className}`}
      aria-label={isProductInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      title={isProductInWishlist ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart size={size} fill={isProductInWishlist ? "currentColor" : "none"} />
    </button>
  );
};

export default WishlistButton;
