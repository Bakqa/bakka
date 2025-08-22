"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Play, Download, Users, Star, Clock } from "lucide-react"

const games = [
  {
    id: 1,
    title: "Space Odyssey",
    description: "Epic space adventure with stunning graphics and immersive gameplay",
    image: "/space-game.png",
    category: "Action",
    type: "Browser",
    rating: 4.8,
    players: 1247,
    playTime: "15-30 min",
    badges: ["Popular", "New"],
  },
  {
    id: 2,
    title: "Puzzle Master",
    description: "Challenge your mind with increasingly complex puzzles",
    image: "/puzzle-game.png",
    category: "Puzzle",
    type: "Browser",
    rating: 4.6,
    players: 892,
    playTime: "5-15 min",
    badges: ["Brain Training"],
  },
  {
    id: 3,
    title: "Racing Thunder",
    description: "High-speed racing with customizable cars and tracks",
    image: "/racing-game.png",
    category: "Racing",
    type: "Download",
    rating: 4.9,
    players: 2156,
    playTime: "20-45 min",
    badges: ["Multiplayer", "HD"],
  },
  {
    id: 4,
    title: "Strategy Empire",
    description: "Build your empire and conquer the world in this strategy masterpiece",
    image: "/strategy-game.png",
    category: "Strategy",
    type: "Download",
    rating: 4.7,
    players: 1834,
    playTime: "60+ min",
    badges: ["Epic", "Multiplayer"],
  },
  {
    id: 5,
    title: "Arcade Legends",
    description: "Classic arcade action with modern twists and power-ups",
    image: "/arcade-game.png",
    category: "Arcade",
    type: "Browser",
    rating: 4.5,
    players: 3421,
    playTime: "10-20 min",
    badges: ["Retro", "High Score"],
  },
  {
    id: 6,
    title: "Sniper Elite",
    description: "Precision shooting game with realistic physics and missions",
    image: "/shooter-game.png",
    category: "Shooter",
    type: "Download",
    rating: 4.8,
    players: 1567,
    playTime: "30-60 min",
    badges: ["Realistic", "Campaign"],
  },
]

export function FeaturedGames() {
  const [sortBy, setSortBy] = useState("popular")
  const [filterType, setFilterType] = useState("all")

  const filteredGames = games.filter((game) => {
    if (filterType === "all") return true
    return game.type.toLowerCase() === filterType
  })

  return (
    <div>
      {/* Header with filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Featured Games</h2>
          <p className="text-gray-600">Discover amazing games to play right now</p>
        </div>
        <div className="flex space-x-3">
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Games</SelectItem>
              <SelectItem value="browser">Browser</SelectItem>
              <SelectItem value="download">Download</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="players">Most Players</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map((game) => (
          <Card key={game.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {game.badges.map((badge) => (
                    <Badge
                      key={badge}
                      className={`text-xs ${
                        badge === "Popular"
                          ? "bg-red-500"
                          : badge === "New"
                            ? "bg-green-500"
                            : badge === "Multiplayer"
                              ? "bg-blue-500"
                              : "bg-purple-500"
                      }`}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-black/50 text-white">
                    {game.type}
                  </Badge>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {game.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{game.description}</p>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span>{game.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{game.players}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{game.playTime}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  {game.type === "Browser" ? (
                    <Button className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Play Now
                    </Button>
                  ) : (
                    <Button className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  )}
                  <Button variant="outline" size="sm" className="bg-transparent">
                    Info
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Load More Games
        </Button>
      </div>
    </div>
  )
}
