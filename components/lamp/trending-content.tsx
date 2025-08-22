"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Clock, TrendingUp, Eye, ThumbsUp } from "lucide-react"

const trendingVideos = [
  {
    id: 1,
    title: "Amazing Nature Documentary",
    views: "2.3M",
    duration: "42:15",
    thumbnail: "/nature-doc.png",
    channel: "Nature Plus",
    likes: "45K",
  },
  {
    id: 2,
    title: "Cooking Masterclass",
    views: "1.8M",
    duration: "28:30",
    thumbnail: "/cooking-show.png",
    channel: "Chef's Kitchen",
    likes: "32K",
  },
  {
    id: 3,
    title: "Space Exploration",
    views: "3.1M",
    duration: "55:20",
    thumbnail: "/space-doc.png",
    channel: "Cosmos TV",
    likes: "67K",
  },
]

const trendingMusic = [
  {
    id: 1,
    title: "Midnight Vibes",
    artist: "Luna Eclipse",
    plays: "5.2M",
    duration: "3:45",
    cover: "/music-midnight.png",
    genre: "Chill",
  },
  {
    id: 2,
    title: "Electric Dreams",
    artist: "Neon Pulse",
    plays: "3.8M",
    duration: "4:12",
    cover: "/music-electric.png",
    genre: "Electronic",
  },
  {
    id: 3,
    title: "Ocean Waves",
    artist: "Ambient Flow",
    plays: "2.9M",
    duration: "6:30",
    cover: "/music-ocean.png",
    genre: "Ambient",
  },
]

const trendingPodcasts = [
  {
    id: 1,
    title: "Future of AI",
    host: "Tech Talks",
    listens: "890K",
    duration: "45:20",
    cover: "/podcast-ai.png",
    category: "Technology",
  },
  {
    id: 2,
    title: "Mindful Living",
    host: "Wellness Weekly",
    listens: "1.2M",
    duration: "32:15",
    cover: "/podcast-mindful.png",
    category: "Health",
  },
  {
    id: 3,
    title: "Business Insights",
    host: "Entrepreneur Hub",
    listens: "756K",
    duration: "38:45",
    cover: "/podcast-business.png",
    category: "Business",
  },
]

export function TrendingContent() {
  return (
    <section>
      <div className="flex items-center mb-6">
        <TrendingUp className="h-6 w-6 text-red-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
      </div>

      <Tabs defaultValue="videos" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
        </TabsList>

        <TabsContent value="videos" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingVideos.map((video) => (
              <Card key={video.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white">
                        <Play className="h-4 w-4 mr-2" />
                        Play
                      </Button>
                    </div>
                    <Badge className="absolute bottom-2 right-2 bg-black/70 text-white">{video.duration}</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{video.channel}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {video.views} views
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        {video.likes}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="music" className="mt-6">
          <div className="space-y-4">
            {trendingMusic.map((track, index) => (
              <Card key={track.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-red-100 rounded-full text-red-600 font-bold text-sm">
                      {index + 1}
                    </div>
                    <img
                      src={track.cover || "/placeholder.svg"}
                      alt={track.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{track.title}</h3>
                      <p className="text-sm text-gray-600">{track.artist}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <span>{track.plays} plays</span>
                        <span>{track.duration}</span>
                        <Badge variant="outline" className="text-xs">
                          {track.genre}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="podcasts" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingPodcasts.map((podcast) => (
              <Card key={podcast.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <img
                      src={podcast.cover || "/placeholder.svg"}
                      alt={podcast.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <Badge variant="outline" className="text-xs mb-2">
                        {podcast.category}
                      </Badge>
                      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{podcast.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{podcast.host}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{podcast.listens} listens</span>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {podcast.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    <Play className="h-4 w-4 mr-2" />
                    Listen Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
