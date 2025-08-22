"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Heart, ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviews: 324,
    image: "/wireless-headphones.png",
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 299.99,
    rating: 4.6,
    reviews: 156,
    image: "/fitness-watch.png",
    badge: "New",
    inStock: true,
  },
  {
    id: 3,
    name: "Professional Camera Lens",
    price: 899.99,
    rating: 4.9,
    reviews: 89,
    image: "/camera-lens.png",
    badge: "Pro",
    inStock: false,
  },
  {
    id: 4,
    name: "Gaming Mechanical Keyboard",
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.7,
    reviews: 267,
    image: "/gaming-keyboard.png",
    badge: "Sale",
    inStock: true,
  },
  {
    id: 5,
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    rating: 4.5,
    reviews: 445,
    image: "/bluetooth-speaker.png",
    inStock: true,
  },
  {
    id: 6,
    name: "4K Webcam",
    price: 129.99,
    rating: 4.4,
    reviews: 178,
    image: "/4k-webcam.png",
    badge: "Popular",
    inStock: true,
  },
]

export function ProductGrid() {
  const [sortBy, setSortBy] = useState("featured")

  return (
    <div>
      {/* Header with sorting */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">All Products</h2>
          <p className="text-gray-600">Showing 1-6 of 1,234 products</p>
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                {product.badge && (
                  <Badge
                    className={`absolute top-3 left-3 ${
                      product.badge === "Sale"
                        ? "bg-red-500"
                        : product.badge === "New"
                          ? "bg-green-500"
                          : product.badge === "Best Seller"
                            ? "bg-blue-500"
                            : "bg-purple-500"
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}
                <Button variant="ghost" size="sm" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  {!product.inStock && (
                    <Badge variant="outline" className="text-red-600 border-red-600">
                      Out of Stock
                    </Badge>
                  )}
                </div>

                <Button
                  className="w-full"
                  disabled={!product.inStock}
                  variant={product.inStock ? "default" : "secondary"}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? "Add to Cart" : "Notify Me"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Load More Products
        </Button>
      </div>
    </div>
  )
}
