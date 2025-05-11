
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/components/product/ProductCard";
import { Product, products } from "@/data/products";
import { Filter, SlidersHorizontal, Grid2X2, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Simulate fetching products from API
const fetchProducts = () => {
  // Simulate network delay
  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

const Shop: React.FC = () => {
  const [gridView, setGridView] = useState<"grid-2" | "grid-3">("grid-3");
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const { data: productData = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(productData.map(p => p.category)))];

  // Filter products based on selected filters
  const filteredProducts = productData.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "name-asc") return a.name.localeCompare(b.name);
    if (sortBy === "name-desc") return b.name.localeCompare(a.name);
    // Default: featured or newest
    return b.id - a.id;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Shop All Products</h1>

      {/* Filter and Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center"
          >
            <Filter size={16} className="mr-2" />
            Filter
          </Button>

          <div className="flex items-center border rounded-md overflow-hidden">
            <button
              className={`p-2 ${
                gridView === "grid-2" ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
              onClick={() => setGridView("grid-2")}
              aria-label="2-column grid"
            >
              <Grid2X2 size={16} />
            </button>
            <button
              className={`p-2 ${
                gridView === "grid-3" ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
              onClick={() => setGridView("grid-3")}
              aria-label="3-column grid"
            >
              <Grid3X3 size={16} />
            </button>
          </div>
        </div>

        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">Sort by:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Featured" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name-asc">Name: A to Z</SelectItem>
              <SelectItem value="name-desc">Name: Z to A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Filters Panel */}
      {filterOpen && (
        <div className="bg-gray-50 p-4 mb-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-medium mb-2">Categories</h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <input
                      type="radio"
                      id={`category-${category}`}
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="mr-2"
                    />
                    <label
                      htmlFor={`category-${category}`}
                      className="text-sm capitalize"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <h3 className="text-sm font-medium mb-2">Price Range</h3>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  min="0"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([parseInt(e.target.value), priceRange[1]])
                  }
                  className="w-20 p-1 border rounded text-sm"
                />
                <span>to</span>
                <input
                  type="number"
                  min="0"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                  className="w-20 p-1 border rounded text-sm"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                onClick={() => {
                  setSelectedCategory("all");
                  setPriceRange([0, 1000]);
                }}
                variant="outline"
              >
                Reset Filters
              </Button>
              <Button
                size="sm"
                onClick={() => setFilterOpen(false)}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Products Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          <div
            className={`grid ${
              gridView === "grid-2"
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
            } gap-6`}
          >
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">
                No products found matching your criteria
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCategory("all");
                  setPriceRange([0, 1000]);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Shop;
