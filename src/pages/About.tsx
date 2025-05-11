
import React from "react";
import { CheckCircle2, Trophy, HeartHandshake, TruckIcon } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gray-100 rounded-xl p-8 md:p-12 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About ShopStore</h1>
          <p className="text-lg text-gray-700 mb-6">
            We're passionate about providing quality products with exceptional service.
            Founded in 2023, we've been committed to bringing the best shopping experience to our customers.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="bg-white px-4 py-2 rounded-full text-sm font-medium">Quality Products</div>
            <div className="bg-white px-4 py-2 rounded-full text-sm font-medium">Fast Shipping</div>
            <div className="bg-white px-4 py-2 rounded-full text-sm font-medium">24/7 Support</div>
            <div className="bg-white px-4 py-2 rounded-full text-sm font-medium">Secure Checkout</div>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-700 mb-4">
              ShopStore was born out of a desire to create a shopping destination that truly puts customers first. 
              In a world of impersonal mega-retailers, we wanted to build something different: a store with 
              personality, quality products, and genuine customer care.
            </p>
            <p className="text-gray-700 mb-4">
              What started as a small online shop with just a handful of products has grown into a trusted 
              destination for thousands of customers. But even as we've grown, we've never lost sight of our 
              core values: quality, affordability, and exceptional service.
            </p>
            <p className="text-gray-700">
              Every product in our store is carefully selected for its quality and value. We work directly 
              with manufacturers and artisans to bring you the best products at the best prices, cutting out 
              middlemen whenever possible.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="block text-lg">Quality First</strong>
                  <p className="text-gray-600">We never compromise on quality and only offer products we would use ourselves.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="block text-lg">Customer Focus</strong>
                  <p className="text-gray-600">Your satisfaction is our top priority. We're not happy until you're happy.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="block text-lg">Transparency</strong>
                  <p className="text-gray-600">Clear pricing, honest product descriptions, and no hidden fees.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="block text-lg">Sustainability</strong>
                  <p className="text-gray-600">We're committed to reducing our environmental impact with eco-friendly practices.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Why Choose ShopStore</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full text-blue-500 mb-4">
              <Trophy size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600">
              Carefully curated products that meet our strict quality standards
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-50 rounded-full text-green-500 mb-4">
              <TruckIcon size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fast Shipping</h3>
            <p className="text-gray-600">
              Quick processing and reliable delivery to your doorstep
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-50 rounded-full text-purple-500 mb-4">
              <HeartHandshake size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Customer Support</h3>
            <p className="text-gray-600">
              Friendly and responsive support team ready to assist you
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-50 rounded-full text-yellow-500 mb-4">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure Shopping</h3>
            <p className="text-gray-600">
              Protected checkout and secure payment processing
            </p>
          </div>
        </div>
      </div>
      
      {/* Team section could go here */}
      
      {/* Call to action */}
      <div className="bg-gray-900 text-white rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
        <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
          Explore our collection of quality products at great prices. Your perfect find is just a click away.
        </p>
        <a 
          href="/shop" 
          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default About;
