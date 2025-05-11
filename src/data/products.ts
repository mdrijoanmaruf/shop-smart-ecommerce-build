
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
  inStock: boolean;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation technology and 30-hour battery life.",
    price: 199.99,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    rating: 4.8,
    inStock: true,
    features: ["Active Noise Cancellation", "Bluetooth 5.0", "30-hour battery", "Premium sound quality"]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitor and sleep tracking.",
    price: 149.99,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    rating: 4.6,
    inStock: true,
    features: ["Heart rate monitor", "Sleep tracking", "Water resistant", "7-day battery life"]
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    description: "Compact speaker with powerful sound, perfect for outdoor adventures and home use.",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    rating: 4.5,
    inStock: true,
    features: ["Waterproof", "12-hour battery", "Compact design", "Powerful bass"]
  },
  {
    id: 4,
    name: "Designer Leather Backpack",
    description: "Stylish and functional leather backpack with laptop compartment and multiple pockets.",
    price: 129.99,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Fashion",
    rating: 4.9,
    inStock: true,
    features: ["Genuine leather", "Laptop compartment", "Multiple pockets", "Water resistant"]
  },
  {
    id: 5,
    name: "Stainless Steel Water Bottle",
    description: "Eco-friendly vacuum insulated bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    price: 34.99,
    imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Home",
    rating: 4.7,
    inStock: true,
    features: ["BPA-free", "Vacuum insulated", "24-hour cold retention", "12-hour hot retention"]
  },
  {
    id: 6,
    name: "Organic Cotton T-Shirt",
    description: "Sustainably made, comfortable cotton t-shirt perfect for everyday wear.",
    price: 29.99,
    imageUrl: "https://images.unsplash.com/photo-1534126511673-b6899657816a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Fashion",
    rating: 4.3,
    inStock: true,
    features: ["100% organic cotton", "Sustainably made", "Comfortable fit", "Durable fabric"]
  },
  {
    id: 7,
    name: "Wireless Charging Pad",
    description: "Fast-charging wireless pad compatible with all Qi-enabled devices.",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1625894877127-31ce54df6680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    rating: 4.4,
    inStock: true,
    features: ["Fast charging", "Qi-compatible", "Sleek design", "LED indicators"]
  },
  {
    id: 8,
    name: "Handcrafted Ceramic Mug",
    description: "Artisan-made ceramic mug, perfect for your morning coffee or tea.",
    price: 24.99,
    imageUrl: "https://images.unsplash.com/photo-1495100793874-0d3f391ce871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Home",
    rating: 4.8,
    inStock: true,
    features: ["Handcrafted", "Microwave safe", "Dishwasher safe", "12 oz capacity"]
  },
  {
    id: 9,
    name: "Ultralight Running Shoes",
    description: "Lightweight, breathable running shoes designed for maximum comfort and performance.",
    price: 119.99,
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Fashion",
    rating: 4.6,
    inStock: true,
    features: ["Ultra lightweight", "Breathable mesh", "Responsive cushioning", "Durable outsole"]
  },
  {
    id: 10,
    name: "Professional Camera Tripod",
    description: "Sturdy, adjustable tripod for professional photography and videography.",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1616088886430-caaae4b2a861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    rating: 4.7,
    inStock: false,
    features: ["Adjustable height", "Quick-release plate", "360° rotation", "Compact folding design"]
  },
  {
    id: 11,
    name: "Aromatherapy Essential Oil Diffuser",
    description: "Ultrasonic diffuser that disperses essential oils while adding humidity to the air.",
    price: 39.99,
    imageUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Home",
    rating: 4.5,
    inStock: true,
    features: ["Ultrasonic technology", "LED mood lighting", "Auto shut-off", "Whisper quiet operation"]
  },
  {
    id: 12,
    name: "Smart Home Security Camera",
    description: "HD security camera with motion detection, night vision, and two-way audio.",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1580947936285-73a1e4a238fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    rating: 4.2,
    inStock: true,
    features: ["1080p HD video", "Night vision", "Two-way audio", "Motion detection"]
  }
];
