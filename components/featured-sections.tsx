import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, Clock, Link } from "lucide-react"

export function FeaturedSections() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Featured Products */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <Button variant="outline"><Link href="/theMarket">View All</Link></Button>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src={`/diverse-products-still-life.png?height=200&width=200&query=product${i}`}
                    alt={`Product ${i}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Premium Product {i}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">(124)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">${99 + i * 20}.99</span>
                  <Badge variant="secondary">New</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Trending Games */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Trending Games</h2>
          <Button variant="outline"><Link href="/gamer">View All</Link></Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src={`/diverse-group-playing-board-game.png?height=180&width=320&query=game${i}`}
                    alt={`Game ${i}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                  <Badge variant="outline">Trending</Badge>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Epic Adventure {i}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Immersive gameplay with stunning graphics and engaging storyline.
                </p>
                <Button className="w-full">Play Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest Entertainment */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Entertainment</h2>
          <Button variant="outline"><Link href="/lamp">View All</Link></Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src={`/diverse-entertainment.png?height=120&width=200&query=entertainment${i}`}
                    alt={`Entertainment ${i}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">{15 + i * 5} min</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Amazing Content {i}</h3>
                <p className="text-gray-600 text-sm">Discover new worlds of entertainment with our premium content.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
