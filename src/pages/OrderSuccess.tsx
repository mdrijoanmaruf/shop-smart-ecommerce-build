
import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrderSuccess: React.FC = () => {
  const orderNumber = Math.floor(100000 + Math.random() * 900000); // Random 6-digit order number
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-12 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <Check size={36} className="text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
        
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order #{orderNumber} has been placed successfully.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h2 className="font-semibold text-lg mb-2">What happens next?</h2>
          <ol className="text-left text-gray-600 space-y-3">
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-navy text-white flex items-center justify-center mr-2">1</span>
              <span>We'll send you an email confirmation with your order details.</span>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-navy text-white flex items-center justify-center mr-2">2</span>
              <span>Our team will process your order and prepare it for shipping.</span>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-navy text-white flex items-center justify-center mr-2">3</span>
              <span>Once your order ships, you'll receive a tracking number via email.</span>
            </li>
          </ol>
        </div>
        
        <div className="space-x-4">
          <Button asChild>
            <Link to="/">Continue Shopping</Link>
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-gray-500">
          If you have any questions about your order, please contact our customer support.
        </p>
      </div>
    </div>
  );
};

export default OrderSuccess;
