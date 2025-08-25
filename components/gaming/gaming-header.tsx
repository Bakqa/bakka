// import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Zap } from "lucide-react"

export function GamingHeader() {
  return (
    <div>
      {/* <Navigation /> */}
      <div className="bg-gradient-to-r from-[#555e84] via-[#5d668b] to-[#7985b8] text-white p-8 rounded-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Gaming Hub</h1>
            <p className="text-xl text-purple-100 mb-8">Play instantly in your browser or download premium games</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                Instant Play
              </div>
              <div className="flex items-center">
                <Trophy className="h-5 w-5 mr-2" />
                Global Leaderboards
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Multiplayer Ready
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#555e84] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 text-white text-sm">
            <Badge variant="secondary" className="bg-yellow-400 text-yellow-900">
              Tournament
            </Badge>
            <span>Weekly Gaming Tournament - Win $1000 Prize Pool!</span>
            <Button variant="outline" size="sm" className="text-purple-500 bg-white hover:bg-gray-100">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
