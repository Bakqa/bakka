"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ShopFilters() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const categories = ["Electronics", "Clothing", "Home & Garden", "Sports", "Books", "Beauty", "Toys", "Automotive"]

  const brands = ["Apple", "Samsung", "Nike", "Adidas", "Sony", "Microsoft"]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={category} />
                  <label
                    htmlFor={category}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-semibold mb-3">Price Range</h3>
            <div className="px-2">
              <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={10} className="mb-4" />
              <div className="flex justify-between text-sm text-gray-600">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Brands */}
          <div>
            <h3 className="font-semibold mb-3">Brands</h3>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox id={brand} />
                  <label
                    htmlFor={brand}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <h3 className="font-semibold mb-3">Rating</h3>
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${rating}`} />
                  <label htmlFor={`rating-${rating}`} className="text-sm font-medium leading-none">
                    {rating}+ Stars
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full">Apply Filters</Button>
        </CardContent>
      </Card>

      {/* Active Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Active Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Electronics ×</Badge>
            <Badge variant="secondary">$0-$500 ×</Badge>
            <Badge variant="secondary">4+ Stars ×</Badge>
          </div>
          <Button variant="outline" size="sm" className="mt-3 w-full bg-transparent">
            Clear All
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
