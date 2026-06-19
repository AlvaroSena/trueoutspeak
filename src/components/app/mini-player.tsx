import { Pause, Play } from "lucide-react"
import { useNavigate } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { CoverArt } from "./cover-art"
import { usePlayback } from "@/store/playback"
import { episodes } from "@/data/episodes"

export function MiniPlayer() {
  const { currentEpisodeId, isPlaying, progress, togglePlay } = usePlayback()
  const navigate = useNavigate()

  const currentEpisode = currentEpisodeId
    ? (episodes.find((e) => e.id === currentEpisodeId) ?? null)
    : null

  if (!currentEpisode) return null

  const openPlayer = () => {
    void navigate({ to: "/player/$episodeId", params: { episodeId: currentEpisode.id } })
  }

  return (
    <div
      className="absolute inset-x-3 bottom-[84px] flex h-[60px] items-center gap-3 rounded-[18px] px-3"
      style={{
        background: "color-mix(in oklch, var(--card), transparent 6%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "var(--ring-card), var(--shadow-overlay)",
      }}
      role="region"
      aria-label="Mini player"
    >
      {/* progress bar at top */}
      <div className="absolute inset-x-[14px] top-0 h-[2px] overflow-hidden rounded-full bg-muted">
        <div
          className="h-full bg-primary"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <button
        onClick={openPlayer}
        className="shrink-0 focus-visible:outline-none"
        aria-label="Abrir player"
      >
        <CoverArt
          epNumber={currentEpisode.epNumber}
          chartColor={currentEpisode.chartColor}
          size="chip-sm"
        />
      </button>

      <button
        className="min-w-0 flex-1 text-left focus-visible:outline-none"
        onClick={openPlayer}
      >
        <div className="truncate font-heading text-[13px] font-semibold">
          {currentEpisode.title.length > 32
            ? currentEpisode.title.slice(0, 32) + "…"
            : currentEpisode.title}
        </div>
        <div className="font-mono text-[10px] text-muted-foreground">
          {Math.floor(progress * 72)}:18 / {currentEpisode.durationLabel}
        </div>
      </button>

      <Button
        variant="default"
        size="icon"
        onClick={(e) => {
          e.stopPropagation()
          togglePlay()
        }}
        aria-label={isPlaying ? "Pausar" : "Reproduzir"}
      >
        {isPlaying ? (
          <Pause size={16} fill="currentColor" />
        ) : (
          <Play size={16} fill="currentColor" />
        )}
      </Button>
    </div>
  )
}
