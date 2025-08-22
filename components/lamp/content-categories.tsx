"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Music, Headphones, BookOpen, Film, Tv, Radio } from "lucide-react"

const categories = [
  { name: "Movies", icon: Film, count: 1250, color: "text-red-600" },
  { name: "TV Shows", icon: Tv, count: 890, color: "text-blue-600" },
  { name: "Music", icon: Music, count: 15420, color: "text-green-600" },
  { name: "Podcasts", icon: Headphones, count: 567, color: "text-purple-600" },
  { name: "Live Radio", icon: Radio, count: 89, color: "text-orange-600" },
  { name: "Articles", icon: BookOpen, count: 2340, color: "text-pink-600" },
]

const genres = ["Action", "Comedy", "Drama", "Documentary", "Sci-Fi", "Horror", "Romance", "Thriller"]

export function ContentCategories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Play className="h-5 w-5 mr-2 text-red-600" />
            Content Types
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "ghost"}
                className="w-full justify-between p-3 h-auto bg-transparent"
                onClick={() => setSelectedCategory(category.name)}
              >
                <div className="flex items-center">
                  <Icon className={`h-4 w-4 mr-3 ${category.color}`} />
                  <span className="font-medium">{category.name}</span>
                </div>
                <Badge variant="secondary" className="ml-2">
                  {category.count.toLocaleString()}
                </Badge>
              </Button>
            )
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Genres</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <Badge key={genre} variant="outline" className="cursor-pointer hover:bg-gray-100">
                {genre}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">My Playlists</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="ghost" className="w-full justify-start text-sm bg-transparent">
            🎵 My Favorites (24)
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sm bg-transparent">
            📺 Watch Later (12)
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sm bg-transparent">
            🎧 Podcast Queue (8)
          </Button>
          <Button variant="outline" className="w-full text-sm bg-transparent">
            + Create Playlist
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
