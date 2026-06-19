import { createFileRoute } from "@tanstack/react-router"
import { NowPlayingScreen } from "@/screens/now-playing-screen"

export const Route = createFileRoute("/player/$episodeId")({
  component: NowPlayingScreen,
})
