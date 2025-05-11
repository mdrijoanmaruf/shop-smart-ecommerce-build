
import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../data/products";
import { toast } from "sonner";

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  clearWishlist: () => void;
  totalItems: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  // Load wishlist from localStorage on initial load
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (error) {
        console.error("Failed to parse wishlist from localStorage:", error);
        localStorage.removeItem("wishlist");
      }
    }
  }, []);

  // Update localStorage and totals whenever wishlist changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    setTotalItems(wishlist.length);
  }, [wishlist]);

  const addToWishlist = (product: Product) => {
    if (isInWishlist(product.id)) {
      return;
    }
    
    setWishlist(prev => [...prev, product]);
    toast.success(`Added ${product.name} to your wishlist`);
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist(prevWishlist => {
      const removedItem = prevWishlist.find(item => item.id === productId);
      if (removedItem) {
        toast.info(`Removed ${removedItem.name} from your wishlist`);
      }
      return prevWishlist.filter(item => item.id !== productId);
    });
  };

  const isInWishlist = (productId: number): boolean => {
    return wishlist.some(item => item.id === productId);
  };

  const clearWishlist = () => {
    setWishlist([]);
    toast.info("Wishlist cleared");
  };

  return (
    <WishlistContext.Provider value={{
      wishlist,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      clearWishlist,
      totalItems
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
