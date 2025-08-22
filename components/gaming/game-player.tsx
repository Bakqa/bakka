"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pause, RotateCcw, Home, Volume2, VolumeX, Maximize } from "lucide-react"

interface GamePlayerProps {
  gameId: string
}

export function GamePlayer({ gameId }: GamePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [score, setScore] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1)
        // Simulate score increase
        if (Math.random() > 0.7) {
          setScore((prev) => prev + Math.floor(Math.random() * 10) + 1)
        }
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Game Controls Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-white/10 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <Home className="h-4 w-4 mr-2" />
              Back to Games
            </Button>
            <div className="text-sm">
              <span className="text-gray-300">Playing:</span>
              <span className="ml-2 font-semibold">Space Odyssey</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-sm">
              <span className="text-gray-300">Score:</span>
              <span className="ml-2 font-bold text-yellow-400">{score.toLocaleString()}</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-300">Time:</span>
              <span className="ml-2 font-mono">{formatTime(timeElapsed)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMuted(!isMuted)}
                className="text-white hover:bg-white/10"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Maximize className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <Card className="w-full max-w-4xl bg-black/30 backdrop-blur-sm border-white/20">
          <CardContent className="p-8">
            <div className="aspect-video bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Game Canvas Placeholder */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                {!isPlaying ? (
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Play className="h-12 w-12 text-white ml-1" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Space Odyssey</h3>
                    <p className="text-white/80 mb-6">Navigate through space and collect cosmic energy</p>
                    <Button
                      size="lg"
                      onClick={() => setIsPlaying(true)}
                      className="bg-white text-black hover:bg-gray-200"
                    >
                      <Play className="h-5 w-5 mr-2" />
                      Start Game
                    </Button>
                  </div>
                ) : (
                  <div className="text-center">
                    {/* Animated game elements */}
                    <div className="relative w-full h-full">
                      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="absolute bottom-1/3 left-1/2 w-5 h-5 bg-pink-400 rounded-full animate-ping"></div>
                      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>

                      {/* Player ship */}
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        🚀
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      <Button variant="secondary" size="sm" onClick={() => setIsPlaying(false)}>
                        <Pause className="h-4 w-4 mr-2" />
                        Pause
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          setScore(0)
                          setTimeElapsed(0)
                        }}
                      >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Restart
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Game Stats */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{score.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatTime(timeElapsed)}</div>
                <div className="text-sm text-gray-400">Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">Level 3</div>
                <div className="text-sm text-gray-400">Current Level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">5</div>
                <div className="text-sm text-gray-400">Lives</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
