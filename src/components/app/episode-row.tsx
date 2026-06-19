import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CoverArt } from "./cover-art"
import { useEpisodeActions } from "@/hooks/use-episode-actions"
import type { Episode } from "@/data/episodes"

interface EpisodeRowProps {
  episode: Episode
  chipSize?: "chip" | "chip-sm"
}

export function EpisodeRow({ episode, chipSize = "chip" }: EpisodeRowProps) {
  const { openEpisode, playEpisode } = useEpisodeActions()

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => openEpisode(episode.id)}
        className="shrink-0 focus-visible:outline-none"
        aria-label={`Abrir episódio ${episode.epNumber}`}
      >
        <CoverArt
          epNumber={episode.epNumber}
          chartColor={episode.chartColor}
          size={chipSize}
        />
      </button>

      <button
        className="min-w-0 flex-1 text-left focus-visible:outline-none"
        onClick={() => openEpisode(episode.id)}
      >
        <div className="mb-1 flex gap-1.5">
          <Badge variant="secondary">{episode.category}</Badge>
        </div>
        <div
          className="line-clamp-2 font-heading text-[15px] font-semibold leading-snug"
        >
          {episode.title}
        </div>
        <div className="mt-1 font-mono text-[11px] text-muted-foreground">
          {episode.durationLabel} · {episode.dateLabel}
        </div>
      </button>

      <Button
        variant="outline"
        size="icon-sm"
        onClick={(e) => {
          e.stopPropagation()
          playEpisode(episode.id)
        }}
        aria-label="Ouvir"
      >
        <Play size={15} fill="currentColor" />
      </Button>
    </div>
  )
}
