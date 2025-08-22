"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  SkipBack,
  SkipForward,
  Settings,
  Share2,
  ThumbsUp,
  ThumbsDown,
  Plus,
} from "lucide-react"

interface MediaPlayerProps {
  contentId: string
  type: "video" | "audio"
}

export function MediaPlayer({ contentId, type }: MediaPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration] = useState(3600) // 1 hour in seconds
  const [volume, setVolume] = useState([75])
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    }
    return `${minutes}:${secs.toString().padStart(2, "0")}`
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (value: number[]) => {
    setCurrentTime(value[0])
  }

  return (
    <div className={`${isFullscreen ? "fixed inset-0 z-50" : ""} bg-black text-white`}>
      {/* Media Player */}
      <div className="relative">
        <div className="aspect-video bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
          {type === "video" ? (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Video placeholder with animated elements */}
              <div className="absolute inset-0 bg-black/20">
                <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-blue-400/30 rounded-full animate-bounce"></div>
                <div className="absolute bottom-1/3 left-1/2 w-10 h-10 bg-purple-400/20 rounded-full animate-ping"></div>
              </div>

              {!isPlaying && (
                <Button
                  size="lg"
                  onClick={handlePlayPause}
                  className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 w-20 h-20 rounded-full"
                >
                  <Play className="h-8 w-8 ml-1" />
                </Button>
              )}
            </div>
          ) : (
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Volume2 className="h-16 w-16" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Cosmic Soundscapes</h2>
              <p className="text-gray-300">Luna Eclipse</p>
            </div>
          )}
        </div>

        {/* Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          {/* Progress Bar */}
          <div className="mb-4">
            <Slider value={[currentTime]} onValueChange={handleSeek} max={duration} step={1} className="w-full" />
            <div className="flex justify-between text-sm text-gray-300 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <SkipBack className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={handlePlayPause}
                className="text-white hover:bg-white/20 w-12 h-12 rounded-full"
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <SkipForward className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white hover:bg-white/20"
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>
                <div className="w-20">
                  <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="w-full" />
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Settings className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="text-white hover:bg-white/20"
              >
                <Maximize className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Info */}
      {!isFullscreen && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-white mb-2">Epic Adventure Series - Episode 1</h1>
                <div className="flex items-center space-x-4 text-gray-300 mb-4">
                  <span>2.3M views</span>
                  <span>•</span>
                  <span>2 days ago</span>
                  <Badge variant="secondary">Fantasy</Badge>
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm" className="bg-transparent text-white border-white/30">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    45K
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent text-white border-white/30">
                    <ThumbsDown className="h-4 w-4 mr-2" />
                    1.2K
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent text-white border-white/30">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent text-white border-white/30">
                    <Plus className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>

              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">EP</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-2">Epic Productions</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Follow heroes on their journey through mystical lands in this award-winning fantasy series.
                        Experience breathtaking adventures, complex characters, and stunning visual effects that bring
                        this magical world to life.
                      </p>
                      <Button variant="outline" size="sm" className="bg-transparent text-white border-white/30">
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-4">Up Next</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex space-x-3">
                        <img
                          src={`/dramatic-episode-cliffhanger.png?height=60&width=100&query=episode${i + 1}`}
                          alt={`Episode ${i + 1}`}
                          className="w-24 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="text-white text-sm font-medium mb-1">Episode {i + 1}</h4>
                          <p className="text-gray-400 text-xs mb-1">Epic Productions</p>
                          <p className="text-gray-400 text-xs">45:20</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
