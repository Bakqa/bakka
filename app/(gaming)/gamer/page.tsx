import { GamingHeader } from "@/components/gaming/gaming-header"
import { GameCategories } from "@/components/gaming/game-categories"
import { FeaturedGames } from "@/components/gaming/featured-games"
import { Leaderboards } from "@/components/gaming/leaderboards"
// import { AuthProvider } from "@/components/providers/auth-provider"

export default function Gamer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
   
      <GamingHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <GameCategories />
            <div className="mt-8">
              <Leaderboards />
            </div>
          </aside>
          <main className="lg:col-span-3">
            <FeaturedGames />
          </main>
        </div>
      </div>
      
    </div>
  )
}
