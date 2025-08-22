"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SearchFilters() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 500])
  const [ratingFilter, setRatingFilter] = useState("all")
  const [sortBy, setSortBy] = useState("relevance")

  const platforms = [
    { id: "shop", label: "Shop", color: "bg-blue-500" },
    { id: "gaming", label: "Gaming", color: "bg-purple-500" },
    { id: "entertainment", label: "Entertainment", color: "bg-red-500" },
  ]

  const contentTypes = [
    { id: "product", label: "Products" },
    { id: "game", label: "Games" },
    { id: "video", label: "Videos" },
    { id: "music", label: "Music" },
    { id: "podcast", label: "Podcasts" },
    { id: "article", label: "Articles" },
  ]

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId) ? prev.filter((p) => p !== platformId) : [...prev, platformId],
    )
  }

  const toggleType = (typeId: string) => {
    setSelectedTypes((prev) => (prev.includes(typeId) ? prev.filter((t) => t !== typeId) : [...prev, typeId]))
  }

  const clearAllFilters = () => {
    setSelectedPlatforms([])
    setSelectedTypes([])
    setPriceRange([0, 500])
    setRatingFilter("all")
    setSortBy("relevance")
  }

  const hasActiveFilters = selectedPlatforms.length > 0 || selectedTypes.length > 0 || ratingFilter !== "all"

  return (
    <div className="bg-gray-50 rounded-lg p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">Filters</h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            Clear All
          </Button>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Platforms */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Platforms</h4>
          <div className="space-y-2">
            {platforms.map((platform) => (
              <div key={platform.id} className="flex items-center space-x-2">
                <Checkbox
                  id={platform.id}
                  checked={selectedPlatforms.includes(platform.id)}
                  onCheckedChange={() => togglePlatform(platform.id)}
                />
                <label htmlFor={platform.id} className="text-sm font-medium leading-none cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${platform.color}`}></div>
                    <span>{platform.label}</span>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Content Types */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Content Type</h4>
          <div className="space-y-2">
            {contentTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox
                  id={type.id}
                  checked={selectedTypes.includes(type.id)}
                  onCheckedChange={() => toggleType(type.id)}
                />
                <label htmlFor={type.id} className="text-sm font-medium leading-none cursor-pointer">
                  {type.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
          <div className="px-2">
            <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={10} className="mb-4" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Rating & Sort */}
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Rating</h4>
            <Select value={ratingFilter} onValueChange={setRatingFilter}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="4+">4+ Stars</SelectItem>
                <SelectItem value="3+">3+ Stars</SelectItem>
                <SelectItem value="2+">2+ Stars</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Sort By</h4>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Active Filters</h4>
          <div className="flex flex-wrap gap-2">
            {selectedPlatforms.map((platform) => (
              <Badge
                key={platform}
                variant="secondary"
                className="cursor-pointer"
                onClick={() => togglePlatform(platform)}
              >
                {platforms.find((p) => p.id === platform)?.label} ×
              </Badge>
            ))}
            {selectedTypes.map((type) => (
              <Badge key={type} variant="secondary" className="cursor-pointer" onClick={() => toggleType(type)}>
                {contentTypes.find((t) => t.id === type)?.label} ×
              </Badge>
            ))}
            {ratingFilter !== "all" && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => setRatingFilter("all")}>
                {ratingFilter} Stars ×
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
