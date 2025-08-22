"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSearch } from "@/lib/search-context"
import { Search, Clock, TrendingUp, X, Filter } from "lucide-react"
import { SearchResults } from "./search-results"
import { SearchFilters } from "./search-filters"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const { query, setQuery, performSearch, recentSearches, suggestions, clearSearch } = useSearch()
  const [localQuery, setLocalQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setLocalQuery(query)
    }
  }, [isOpen, query])

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery)
    setLocalQuery(searchQuery)
    await performSearch(searchQuery)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch(localQuery)
  }

  const handleClose = () => {
    clearSearch()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] p-0 gap-0">
        <div className="flex flex-col h-full">
          {/* Search Header */}
          <div className="p-6 border-b">
            <form onSubmit={handleSubmit} className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search across all platforms..."
                  value={localQuery}
                  onChange={(e) => setLocalQuery(e.target.value)}
                  className="pl-10 pr-4 text-lg h-12"
                  autoFocus
                />
              </div>
              <Button type="button" variant="outline" onClick={() => setShowFilters(!showFilters)}>
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button type="button" variant="ghost" onClick={handleClose}>
                <X className="h-5 w-5" />
              </Button>
            </form>

            {showFilters && (
              <div className="mt-4">
                <SearchFilters />
              </div>
            )}
          </div>

          {/* Search Content */}
          <div className="flex-1 overflow-hidden">
            {query ? (
              <SearchResults />
            ) : (
              <div className="p-6">
                <Tabs defaultValue="recent" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="recent">Recent</TabsTrigger>
                    <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
                  </TabsList>

                  <TabsContent value="recent" className="mt-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <h3 className="font-semibold text-gray-900">Recent Searches</h3>
                      </div>
                      {recentSearches.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {recentSearches.map((search, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={() => handleSearch(search)}
                              className="bg-transparent"
                            >
                              {search}
                            </Button>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 text-sm">No recent searches</p>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="suggestions" className="mt-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-gray-500" />
                        <h3 className="font-semibold text-gray-900">Popular Searches</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {suggestions.map((suggestion, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleSearch(suggestion)}
                            className="bg-transparent"
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
