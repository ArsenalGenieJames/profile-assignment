import React from "react";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

// Sample product data
const products = [
  {
    id: 1,
    name: "MacBook Pro 16\"",
    description: "Powerful laptop with M3 chip, 16GB RAM, and 512GB SSD. Perfect for professionals and creative work.",
    price: 139999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop"
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    description: "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system.",
    price: 54999,
    image: "https://images.unsplash.com/photo-1592286927505-c9c8e98e5b80?w=500&h=500&fit=crop"
  },
  {
    id: 3,
    name: "AirPods Pro",
    description: "Premium wireless earbuds with active noise cancellation and spatial audio.",
    price: 13999,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&h=500&fit=crop"
  },
  {
    id: 4,
    name: "iPad Air",
    description: "Versatile tablet with M1 chip, 10.9\" Liquid Retina display, and Apple Pencil support.",
    price: 32999,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop"
  },
  {
    id: 5,
    name: "Samsung Galaxy S24",
    description: "Flagship Android phone with advanced AI features and stunning display.",
    price: 49999,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=500&fit=crop"
  },
  {
    id: 6,
    name: "Sony WH-1000XM5",
    description: "Industry-leading noise canceling headphones with premium sound quality.",
    price: 21999,
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500&h=500&fit=crop"
  },
  {
    id: 7,
    name: "Dell XPS 13",
    description: "Compact and powerful ultrabook with stunning InfinityEdge display.",
    price: 71999,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop"
  },
  {
    id: 8,
    name: "Apple Watch Series 9",
    description: "Advanced smartwatch with health tracking and fitness features.",
    price: 23999,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop"
  },
  {
    id: 9,
    name: "Magic Keyboard",
    description: "Wireless keyboard with numeric keypad and rechargeable battery.",
    price: 7199,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop"
  },
  {
    id: 10,
    name: "Logitech MX Master 3",
    description: "Advanced wireless mouse designed for precision and productivity.",
    price: 5499,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop"
  },
  {
    id: 11,
    name: "Nintendo Switch OLED",
    description: "Gaming console with vibrant OLED screen and enhanced audio.",
    price: 19499,
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500&h=500&fit=crop"
  },
  {
    id: 12,
    name: "Kindle Paperwhite",
    description: "E-reader with adjustable warm light and waterproof design.",
    price: 7699,
    image: "https://images.unsplash.com/photo-1592496001020-d31bd830651f?w=500&h=500&fit=crop"
  }
];

function ProductListing() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    // You could add a toast notification here
  };

  return (
    <main className="flex-1 p-8 bg-white overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Featured Products</h1>
          <p className="text-gray-600">Discover our latest collection of premium tech products</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProductListing;
