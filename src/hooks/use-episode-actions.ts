import { useNavigate } from "@tanstack/react-router"
import { usePlayback } from "@/store/playback"

export function useEpisodeActions() {
  const navigate = useNavigate()
  const { load } = usePlayback()

  return {
    openEpisode: (id: string) => {
      void navigate({ to: "/episodio/$episodeId", params: { episodeId: id } })
    },
    playEpisode: (id: string) => {
      load(id)
      void navigate({ to: "/player/$episodeId", params: { episodeId: id } })
    },
  }
}
