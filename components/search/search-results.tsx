"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSearch } from "@/lib/search-context"
import { ShoppingBag, Gamepad2, Play, Star, Clock, DollarSign, Loader2, Search } from "lucide-react"
import Link from "next/link"

export function SearchResults() {
  const { results, isSearching, query, addToHistory } = useSearch()
  const [activeTab, setActiveTab] = useState("all")

  const filteredResults = results.filter((result) => {
    if (activeTab === "all") return true
    return result.platform === activeTab
  })

  const getResultCounts = () => {
    const counts = {
      all: results.length,
      shop: results.filter((r) => r.platform === "shop").length,
      gaming: results.filter((r) => r.platform === "gaming").length,
      entertainment: results.filter((r) => r.platform === "entertainment").length,
    }
    return counts
  }

  const counts = getResultCounts()

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "shop":
        return <ShoppingBag className="h-4 w-4" />
      case "gaming":
        return <Gamepad2 className="h-4 w-4" />
      case "entertainment":
        return <Play className="h-4 w-4" />
      default:
        return null
    }
  }

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "shop":
        return "text-blue-600 bg-blue-50 border-blue-200"
      case "gaming":
        return "text-purple-600 bg-purple-50 border-purple-200"
      case "entertainment":
        return "text-red-600 bg-red-50 border-red-200"
      default:
        return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  if (isSearching) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Searching across all platforms...</p>
        </div>
      </div>
    )
  }

  if (results.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
          <p className="text-gray-500">Try adjusting your search terms or filters</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Search results for "{query}" ({results.length} found)
        </h2>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All ({counts.all})</TabsTrigger>
            <TabsTrigger value="shop">Shop ({counts.shop})</TabsTrigger>
            <TabsTrigger value="gaming">Gaming ({counts.gaming})</TabsTrigger>
            <TabsTrigger value="entertainment">Entertainment ({counts.entertainment})</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <div className="grid gap-4">
              {filteredResults.map((result) => (
                <Card key={result.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <img
                        src={result.image || "/placeholder.svg"}
                        alt={result.title}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Badge className={`${getPlatformColor(result.platform)} border`}>
                              {getPlatformIcon(result.platform)}
                              <span className="ml-1 capitalize">{result.platform}</span>
                            </Badge>
                            <Badge variant="outline">{result.category}</Badge>
                          </div>
                          {result.rating && (
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                              <span className="text-sm font-medium">{result.rating}</span>
                            </div>
                          )}
                        </div>

                        <h3 className="font-semibold text-gray-900 mb-1 truncate">{result.title}</h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{result.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            {result.price && (
                              <div className="flex items-center">
                                <DollarSign className="h-4 w-4 mr-1" />
                                <span className="font-medium">${result.price}</span>
                              </div>
                            )}
                            {result.duration && (
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>{result.duration}</span>
                              </div>
                            )}
                          </div>

                          <Link href={result.url}>
                            <Button size="sm" onClick={() => addToHistory(result)} className="ml-4">
                              {result.platform === "shop"
                                ? "View Product"
                                : result.platform === "gaming"
                                  ? "Play Game"
                                  : "Watch/Listen"}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
