"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Gamepad2, Sword, Car, Puzzle, Target, Brain } from "lucide-react"

const categories = [
  { name: "Action", icon: Sword, count: 45, color: "text-red-600" },
  { name: "Racing", icon: Car, count: 23, color: "text-blue-600" },
  { name: "Puzzle", icon: Puzzle, count: 67, color: "text-green-600" },
  { name: "Shooter", icon: Target, count: 34, color: "text-orange-600" },
  { name: "Strategy", icon: Brain, count: 28, color: "text-purple-600" },
  { name: "Arcade", icon: Gamepad2, count: 56, color: "text-pink-600" },
]

export function GameCategories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Gamepad2 className="h-5 w-5 mr-2 text-purple-600" />
          Game Categories
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
                {category.count}
              </Badge>
            </Button>
          )
        })}

        <div className="pt-4 border-t">
          <h4 className="font-semibold mb-3 text-sm text-gray-700">Game Type</h4>
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start text-sm bg-transparent">
              🌐 Browser Games
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm bg-transparent">
              💾 Download Games
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm bg-transparent">
              👥 Multiplayer
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
