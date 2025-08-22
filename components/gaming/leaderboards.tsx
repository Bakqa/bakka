import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Medal, Award } from "lucide-react"

const leaderboardData = [
  {
    rank: 1,
    username: "GameMaster2024",
    score: 15420,
    avatar: "/gaming-avatar-1.png",
    badge: "Champion",
  },
  {
    rank: 2,
    username: "PixelWarrior",
    score: 14890,
    avatar: "/gaming-avatar-2.png",
    badge: "Elite",
  },
  {
    rank: 3,
    username: "SpeedRunner",
    score: 13750,
    avatar: "/gaming-avatar-3.png",
    badge: "Pro",
  },
  {
    rank: 4,
    username: "PuzzleSolver",
    score: 12340,
    avatar: "/gaming-avatar-4.png",
    badge: "Expert",
  },
  {
    rank: 5,
    username: "ArcadeKing",
    score: 11890,
    avatar: "/gaming-avatar-5.png",
    badge: "Veteran",
  },
]

export function Leaderboards() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-4 w-4 text-yellow-500" />
      case 2:
        return <Medal className="h-4 w-4 text-gray-400" />
      case 3:
        return <Award className="h-4 w-4 text-amber-600" />
      default:
        return <span className="text-sm font-bold text-gray-600">#{rank}</span>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
          Top Players
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {leaderboardData.map((player) => (
          <div key={player.rank} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
            <div className="flex items-center justify-center w-6">{getRankIcon(player.rank)}</div>
            <Avatar className="h-8 w-8">
              <AvatarImage src={player.avatar || "/placeholder.svg"} alt={player.username} />
              <AvatarFallback>{player.username.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{player.username}</p>
              <div className="flex items-center space-x-2">
                <p className="text-xs text-gray-500">{player.score.toLocaleString()} pts</p>
                <Badge
                  variant="outline"
                  className={`text-xs ${
                    player.badge === "Champion"
                      ? "border-yellow-500 text-yellow-700"
                      : player.badge === "Elite"
                        ? "border-purple-500 text-purple-700"
                        : "border-blue-500 text-blue-700"
                  }`}
                >
                  {player.badge}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
