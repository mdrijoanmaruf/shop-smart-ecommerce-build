
import React from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { X, ShoppingCart, Trash, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

const CartSlider: React.FC = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 z-40" 
        onClick={closeCart}
      />
      
      {/* Cart Slider */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 overflow-hidden animate-slide-in-right`}
      >
        <div className="flex flex-col h-full">
          {/* Cart Header */}
          <div className="flex justify-between items-center border-b p-4">
            <div className="flex items-center">
              <ShoppingCart size={20} className="mr-2" />
              <h2 className="font-semibold text-lg">Your Cart ({totalItems})</h2>
            </div>
            <button 
              onClick={closeCart}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Cart Content */}
          <div className="flex-grow overflow-y-auto py-2">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <ShoppingCart size={48} className="text-gray-300 mb-4" />
                <p className="text-gray-500 mb-6">Your cart is empty</p>
                <Button onClick={closeCart}>Continue Shopping</Button>
              </div>
            ) : (
              <div className="divide-y">
                {cart.map(item => (
                  <div key={item.id} className="flex py-4 px-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden mr-4">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-grow mr-2">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">${item.price.toFixed(2)}</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded border border-gray-300"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        
                        <span className="mx-2 w-8 text-center">{item.quantity}</span>
                        
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded border border-gray-300"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    
                    {/* Price & Remove */}
                    <div className="flex flex-col items-end">
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 p-1 hover:text-red-700 mt-2"
                        aria-label="Remove item"
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="border-t p-4">
              {/* Cart Summary */}
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <Button asChild className="w-full">
                  <Link to="/checkout" onClick={closeCart}>
                    Checkout
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={clearCart}
                  className="w-full text-red-600 border-red-600 hover:bg-red-50"
                >
                  <Trash size={16} className="mr-2" />
                  Clear Cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSlider;
