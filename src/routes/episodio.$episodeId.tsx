import { createFileRoute } from "@tanstack/react-router"
import { EpisodeDetailScreen } from "@/screens/episode-detail-screen"

export const Route = createFileRoute("/episodio/$episodeId")({
  component: EpisodeDetailScreen,
})
