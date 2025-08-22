"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, User, Menu, X } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { useSearch } from "@/lib/search-context"
import { AuthModal } from "@/components/auth/auth-modal"
import { UserMenu } from "@/components/auth/user-menu"
import { SearchModal } from "@/components/search/search-modal"

import Image from "next/image"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "signup">("login")
  const { user } = useAuth()
  const { setQuery } = useSearch()
  const cartItemCount = 2 // This would come from cart state

  const openAuthModal = (mode: "login" | "signup") => {
    setAuthMode(mode)
    setIsAuthModalOpen(true)
  }

  const openSearchModal = () => {
    setIsSearchModalOpen(true)
  }

  const handleQuickSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchQuery = formData.get("search") as string
    if (searchQuery.trim()) {
      setQuery(searchQuery)
      openSearchModal()
    }
  }

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                <Image src="r_r.png" alt="Logo" width={100} height={50} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/shop"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Shop
                </Link>
                <Link
                  href="/gaming"
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Gaming
                </Link>
                <Link
                  href="/entertainment"
                  className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Entertainment
                </Link>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-md mx-8">
              <form onSubmit={handleQuickSearch}>
                <div className="relative cursor-pointer" onClick={openSearchModal}>
                  <Input
                    name="search"
                    type="text"
                    placeholder="Search across all platforms..."
                    className="pl-10 pr-4 cursor-pointer"
                    readOnly
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
              </form>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/shop/cart">
                <Button variant="ghost" size="sm" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      {cartItemCount}
                    </Badge>
                  )}
                </Button>
              </Link>

              {user ? (
                <UserMenu />
              ) : (
                <>
                  <Button variant="ghost" size="sm" onClick={() => openAuthModal("login")}>
                    Sign In
                  </Button>
                  <Button size="sm" onClick={() => openAuthModal("signup")}>
                    Sign Up
                  </Button>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
                <div className="mb-4">
                  <div className="relative cursor-pointer" onClick={openSearchModal}>
                    <Input type="text" placeholder="Search..." className="w-full cursor-pointer" readOnly />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  </div>
                </div>
                <Link href="/shop" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                  Shop
                </Link>
                <Link
                  href="/gaming"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600"
                >
                  Gaming
                </Link>
                <Link
                  href="/entertainment"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600"
                >
                  Entertainment
                </Link>
                <Link href="/shop/cart" className="flex items-center px-3 py-2 text-base font-medium text-gray-700">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Cart ({cartItemCount})
                </Link>

                {user ? (
                  <div className="px-3 py-2">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      View Profile
                    </Button>
                  </div>
                ) : (
                  <div className="flex space-x-2 px-3 py-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      onClick={() => openAuthModal("login")}
                    >
                      Sign In
                    </Button>
                    <Button size="sm" className="flex-1" onClick={() => openAuthModal("signup")}>
                      Sign Up
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} defaultMode={authMode} />
      <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
    </>
  )
}
