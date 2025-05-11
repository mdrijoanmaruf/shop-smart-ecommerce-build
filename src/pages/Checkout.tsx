
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, CreditCard, Banknote, Truck } from "lucide-react";
import { toast } from "sonner";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  paymentMethod: string;
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cart, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "creditCard"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate cart has items
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    
    // Simple validation
    const requiredFields = ["firstName", "lastName", "email", "address", "city", "postalCode", "country"];
    const missingFields = requiredFields.filter(field => !formData[field as keyof FormData]);
    
    if (missingFields.length > 0) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Simulate order processing
    setIsProcessing(true);
    
    setTimeout(() => {
      // Clear cart and redirect to success page
      clearCart();
      setIsProcessing(false);
      navigate("/order-success");
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 mb-6 hover:text-gray-900"
      >
        <ChevronLeft size={18} className="mr-1" />
        Back to Cart
      </button>
      
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Checkout</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 mb-6">Your cart is empty</p>
          <Button onClick={() => navigate("/")}>Continue Shopping</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
              
              {/* Shipping Address */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Payment Method */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                <div className="space-y-4">
                  <div className="flex items-center border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                    <input
                      type="radio"
                      id="creditCard"
                      name="paymentMethod"
                      value="creditCard"
                      checked={formData.paymentMethod === "creditCard"}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    <label htmlFor="creditCard" className="flex-1 cursor-pointer flex items-center">
                      <CreditCard className="mr-2 text-gray-600" size={20} />
                      <span className="font-medium">Credit Card</span>
                    </label>
                  </div>

                  <div className="flex items-center border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                    <input
                      type="radio"
                      id="cashOnDelivery"
                      name="paymentMethod"
                      value="cashOnDelivery"
                      checked={formData.paymentMethod === "cashOnDelivery"}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    <label htmlFor="cashOnDelivery" className="flex-1 cursor-pointer flex items-center">
                      <Banknote className="mr-2 text-gray-600" size={20} />
                      <span className="font-medium">Cash on Delivery</span>
                    </label>
                  </div>
                  
                  <div className="flex items-center border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                    <input
                      type="radio"
                      id="paypal"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === "paypal"}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    <label htmlFor="paypal" className="flex-1 cursor-pointer flex items-center">
                      <span className="font-medium">PayPal</span>
                    </label>
                  </div>
                </div>
                
                {formData.paymentMethod === "creditCard" && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500 mb-2">
                      This is a demo store. No actual payment will be processed.
                    </p>
                    {/* Credit card form would go here in a real implementation */}
                  </div>
                )}

                {formData.paymentMethod === "cashOnDelivery" && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start">
                      <Truck className="mr-2 text-gray-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="text-sm font-medium mb-1">Cash on Delivery</p>
                        <p className="text-sm text-gray-500">
                          Pay with cash upon delivery. Please have the exact amount ready.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Button type="submit" className="w-full" disabled={isProcessing}>
                {isProcessing ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    </span>
                    Processing...
                  </span>
                ) : (
                  "Place Order"
                )}
              </Button>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex items-start">
                    <div className="w-16 h-16 rounded overflow-hidden bg-gray-100 flex-shrink-0">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      <p className="text-sm font-medium mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
