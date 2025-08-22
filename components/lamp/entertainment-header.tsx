// import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Music, Headphones, BookOpen } from "lucide-react"

export function EntertainmentHeader() {
  return (
    <div>
      {/* <Navigation /> */}
      <div className="bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Entertainment Hub</h1>
            <p className="text-xl text-red-100 mb-8">Stream videos, music, podcasts, and discover amazing content</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Play className="h-5 w-5 mr-2" />
                HD Streaming
              </div>
              <div className="flex items-center">
                <Music className="h-5 w-5 mr-2" />
                High-Quality Audio
              </div>
              <div className="flex items-center">
                <Headphones className="h-5 w-5 mr-2" />
                Exclusive Podcasts
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Premium Articles
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-500 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 text-white text-sm">
            <Badge variant="secondary" className="bg-yellow-400 text-yellow-900">
              Premium
            </Badge>
            <span>Get 30 days free premium access - Unlimited streaming!</span>
            <Button variant="outline" size="sm" className="text-red-500 bg-white hover:bg-gray-100">
              Try Free
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
