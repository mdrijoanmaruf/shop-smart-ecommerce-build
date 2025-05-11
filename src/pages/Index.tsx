
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

const Index: React.FC = () => {
  // Featured products (first 4)
  const featuredProducts = products.slice(0, 4);
  
  // Latest products (last 8)
  const latestProducts = products.slice(4, 12);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Shop the Latest Trends
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Discover our curated collection of premium products at amazing prices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="bg-brand-coral hover:bg-brand-coral/90">
                  <Link to="/shop">Shop Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                  <Link to="/categories">Browse Categories</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Featured Product" 
                  className="rounded-lg object-cover w-full h-40 md:h-56"
                />
                <img 
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Featured Product" 
                  className="rounded-lg object-cover w-full h-40 md:h-56"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Products</h2>
          <p className="text-gray-600 mb-8">Our most popular products based on sales</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Banner */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <Link to="/categories/electronics" className="block relative pt-[60%]">
                <img 
                  src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Electronics Category"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Electronics</h3>
                    <Button size="sm" variant="secondary">Shop Now</Button>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <Link to="/categories/fashion" className="block relative pt-[60%]">
                <img 
                  src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Fashion Category"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Fashion</h3>
                    <Button size="sm" variant="secondary">Shop Now</Button>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <Link to="/categories/home" className="block relative pt-[60%]">
                <img 
                  src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Home Category"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Home</h3>
                    <Button size="sm" variant="secondary">Shop Now</Button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Products */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Latest Products</h2>
          <p className="text-gray-600 mb-8">Check out our newest arrivals</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-6">Sign up to receive updates on new products and special promotions</p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
