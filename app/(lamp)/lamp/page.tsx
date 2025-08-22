import { EntertainmentHeader } from "@/components/lamp/entertainment-header"
import { ContentCategories } from "@/components/lamp/content-categories"
import { FeaturedContent } from "@/components/lamp/featured-content"
import { TrendingContent } from "@/components/lamp/trending-content"
// import { AuthProvider } from "@/components/providers/auth-provider"


export default function Lamp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-pink-50">
      <EntertainmentHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <ContentCategories />
          </aside>
          <main className="lg:col-span-3 space-y-12">
            <FeaturedContent />
            <TrendingContent />
          </main>
        </div>
      </div>
    </div>
  )
}
