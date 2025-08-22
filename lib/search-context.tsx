"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface SearchResult {
  id: string
  title: string
  description: string
  type: "product" | "game" | "video" | "music" | "podcast" | "article"
  platform: "shop" | "gaming" | "entertainment"
  image: string
  price?: number
  rating?: number
  duration?: string
  category: string
  url: string
}

interface SearchContextType {
  query: string
  setQuery: (query: string) => void
  results: SearchResult[]
  isSearching: boolean
  recentSearches: string[]
  suggestions: string[]
  searchHistory: SearchResult[]
  performSearch: (searchQuery: string) => Promise<void>
  clearSearch: () => void
  addToHistory: (result: SearchResult) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

// Mock data for search results
const mockSearchData: SearchResult[] = [
  // Products
  {
    id: "p1",
    title: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    type: "product",
    platform: "shop",
    image: "/wireless-headphones.png",
    price: 199.99,
    rating: 4.8,
    category: "Electronics",
    url: "/shop/product/p1",
  },
  {
    id: "p2",
    title: "Gaming Mechanical Keyboard",
    description: "RGB mechanical keyboard perfect for gaming",
    type: "product",
    platform: "shop",
    image: "/gaming-keyboard.png",
    price: 149.99,
    rating: 4.7,
    category: "Gaming Accessories",
    url: "/shop/product/p2",
  },
  // Games
  {
    id: "g1",
    title: "Space Odyssey",
    description: "Epic space adventure with stunning graphics",
    type: "game",
    platform: "gaming",
    image: "/space-game.png",
    rating: 4.8,
    category: "Action",
    url: "/gaming/play/g1",
  },
  {
    id: "g2",
    title: "Puzzle Master",
    description: "Challenge your mind with complex puzzles",
    type: "game",
    platform: "gaming",
    image: "/puzzle-game.png",
    rating: 4.6,
    category: "Puzzle",
    url: "/gaming/play/g2",
  },
  // Entertainment
  {
    id: "e1",
    title: "Epic Adventure Series",
    description: "Fantasy series with amazing storyline",
    type: "video",
    platform: "entertainment",
    image: "/tv-show-adventure.png",
    rating: 4.9,
    duration: "45 min",
    category: "Fantasy",
    url: "/entertainment/watch/e1",
  },
  {
    id: "e2",
    title: "Cosmic Soundscapes",
    description: "Ambient electronic music for relaxation",
    type: "music",
    platform: "entertainment",
    image: "/music-cosmic.png",
    rating: 4.7,
    duration: "52 min",
    category: "Electronic",
    url: "/entertainment/listen/e2",
  },
  {
    id: "e3",
    title: "Tech Innovation Podcast",
    description: "Weekly tech discussions and insights",
    type: "podcast",
    platform: "entertainment",
    image: "/podcast-tech.png",
    rating: 4.8,
    duration: "38 min",
    category: "Technology",
    url: "/entertainment/listen/e3",
  },
]

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [suggestions] = useState<string[]>([
    "wireless headphones",
    "space games",
    "fantasy series",
    "puzzle games",
    "tech podcasts",
    "electronic music",
    "gaming keyboard",
    "adventure movies",
  ])
  const [searchHistory, setSearchHistory] = useState<SearchResult[]>([])

  useEffect(() => {
    // Load search history from localStorage
    const savedHistory = localStorage.getItem("searchHistory")
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory))
    }
    const savedRecentSearches = localStorage.getItem("recentSearches")
    if (savedRecentSearches) {
      setRecentSearches(JSON.parse(savedRecentSearches))
    }
  }, [])

  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    setIsSearching(true)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    // Filter mock data based on search query
    const filteredResults = mockSearchData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    setResults(filteredResults)
    setIsSearching(false)

    // Add to recent searches
    const updatedRecentSearches = [searchQuery, ...recentSearches.filter((s) => s !== searchQuery)].slice(0, 5)
    setRecentSearches(updatedRecentSearches)
    localStorage.setItem("recentSearches", JSON.stringify(updatedRecentSearches))
  }

  const clearSearch = () => {
    setQuery("")
    setResults([])
  }

  const addToHistory = (result: SearchResult) => {
    const updatedHistory = [result, ...searchHistory.filter((h) => h.id !== result.id)].slice(0, 10)
    setSearchHistory(updatedHistory)
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory))
  }

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        results,
        isSearching,
        recentSearches,
        suggestions,
        searchHistory,
        performSearch,
        clearSearch,
        addToHistory,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider")
  }
  return context
}
