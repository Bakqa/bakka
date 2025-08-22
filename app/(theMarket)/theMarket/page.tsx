import { ProductGrid } from "@/components/theMarket/product-grid"
import { ShopFilters } from "@/components/theMarket/shop-filters"
import { ShopHeader } from "@/components/theMarket/shop-header"
// import { AuthProvider } from "@/components/providers/auth-provider"


export default function theMarket() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ShopHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64">
            <ShopFilters />
          </aside>
          <main className="flex-1">
            <ProductGrid />
          </main>
        </div>
      </div>
    </div>
  )
}
