"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Star, Share2, Heart, Plus } from "lucide-react"

const featuredContent = [
  {
    id: 1,
    title: "Epic Adventure Series",
    description: "Follow heroes on their journey through mystical lands in this award-winning series",
    type: "TV Show",
    duration: "45 min",
    rating: 4.9,
    image: "/tv-show-adventure.png",
    badge: "New Episode",
    category: "Fantasy",
  },
  {
    id: 2,
    title: "Cosmic Soundscapes",
    description: "Ambient electronic music perfect for focus and relaxation",
    type: "Music",
    duration: "52 min",
    rating: 4.7,
    image: "/music-cosmic.png",
    badge: "Trending",
    category: "Electronic",
  },
  {
    id: 3,
    title: "Tech Innovation Podcast",
    description: "Weekly discussions about the latest in technology and innovation",
    type: "Podcast",
    duration: "38 min",
    rating: 4.8,
    image: "/podcast-tech.png",
    badge: "Popular",
    category: "Technology",
  },
]

export function FeaturedContent() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Featured Content</h2>
        <Button variant="outline">View All</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredContent.map((content) => (
          <Card key={content.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={content.image || "/placeholder.svg"}
                  alt={content.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                  >
                    <Play className="h-6 w-6 mr-2" />
                    Play Now
                  </Button>
                </div>
                <Badge
                  className={`absolute top-3 left-3 ${
                    content.badge === "New Episode"
                      ? "bg-green-500"
                      : content.badge === "Trending"
                        ? "bg-red-500"
                        : "bg-blue-500"
                  }`}
                >
                  {content.badge}
                </Badge>
                <Badge variant="secondary" className="absolute top-3 right-3 bg-black/50 text-white">
                  {content.type}
                </Badge>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{content.category}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {content.duration}
                  </div>
                </div>

                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{content.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{content.rating}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  {content.type === "Music" ? "Play Album" : content.type === "Podcast" ? "Listen Now" : "Watch Now"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
