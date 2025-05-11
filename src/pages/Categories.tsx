
import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { products, Product } from "@/data/products";
import { ArrowRight } from "lucide-react";

// Simulate fetching categories from API
const fetchCategories = () => {
  // Get unique categories with a sample product for each
  const categories = Array.from(new Set(products.map((p) => p.category)));
  
  return new Promise<{ name: string; count: number; image: string }[]>((resolve) => {
    setTimeout(() => {
      const result = categories.map(category => {
        const productsInCategory = products.filter(p => p.category === category);
        return {
          name: category,
          count: productsInCategory.length,
          image: productsInCategory[0].imageUrl
        };
      });
      resolve(result);
    }, 500);
  });
};

const Categories: React.FC = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Product Categories</h1>
      
      {isLoading ? (
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.name}
              to={`/shop?category=${category.name}`} 
              className="group block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all"></div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold capitalize">{category.name}</h2>
                    <p className="text-sm text-gray-500">{category.count} Products</p>
                  </div>
                  <ArrowRight className="text-gray-400 group-hover:text-gray-900 transition-colors" size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
