import { GamePlayer } from "@/components/gaming/game-player"
// import { Navigation } from "@/components/navigation"

interface GamePlayPageProps {
  params: {
    gameId: string
  }
}

export default function GamePlayPage({ params }: GamePlayPageProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* <Navigation /> */}
      <GamePlayer gameId={params.gameId} />
    </div>
  )
}
