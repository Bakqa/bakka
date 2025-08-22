
import { MediaPlayer } from "@/components/lamp/media-player"
// import { Navigation } from "@/components/navigation"

interface WatchPageProps {
  params: {
    contentId: string
  }
}

export default function WatchPage({ params }: WatchPageProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* <Navigation /> */}
      <MediaPlayer contentId={params.contentId} type="video" />
    </div>
  )
}
