import * as React from "react"
import {
  ChevronDown,
  Ellipsis,
  Shuffle,
  RotateCcw,
  Pause,
  Play,
  RotateCw,
  Repeat,
  Gauge,
  Moon,
  ListMusic,
  Share2,
} from "lucide-react"
import { getRouteApi, useRouter } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CoverArt } from "@/components/app/cover-art"
import { StatusBar } from "@/components/app/phone-frame"
import { usePlayback } from "@/store/playback"
import { episodes } from "@/data/episodes"

const routeApi = getRouteApi("/player/$episodeId")

export function NowPlayingScreen() {
  const { episodeId } = routeApi.useParams()
  const router = useRouter()
  const { currentEpisodeId, isPlaying, progress, load, togglePlay, setProgress } = usePlayback()

  // Load episode into playback on mount if needed
  React.useEffect(() => {
    if (episodeId && episodeId !== currentEpisodeId) {
      load(episodeId)
    }
  }, [episodeId, currentEpisodeId, load])

  const episode = episodes.find((e) => e.id === (episodeId || currentEpisodeId))

  if (!episode) return null

  const progressPct = `${Math.round(progress * 100)}%`
  const totalSeconds = 72 * 60 + 40 // 1:12:40 approx
  const elapsedSeconds = Math.round(progress * totalSeconds)
  const remainingSeconds = totalSeconds - elapsedSeconds
  const fmt = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${m}:${sec.toString().padStart(2, "0")}`
  }

  return (
    <div className="absolute inset-0 z-0 flex flex-col overflow-hidden bg-background text-foreground">
      {/* status bar */}
      <StatusBar />

      {/* top controls */}
      <div className="flex items-center justify-between px-[22px] pt-[6px]">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => router.history.back()}
          aria-label="Fechar player"
        >
          <ChevronDown size={22} />
        </Button>
        <span className="font-mono text-[10px] uppercase tracking-[.1em] text-muted-foreground">
          Tocando agora
        </span>
        <Button variant="ghost" size="icon-sm" aria-label="Mais opções">
          <Ellipsis size={22} />
        </Button>
      </div>

      {/* main content */}
      <div className="flex flex-1 flex-col px-7 pt-6">
        {/* cover */}
        <CoverArt
          epNumber={episode.epNumber}
          chartColor={episode.chartColor}
          size="player"
        />

        {/* title */}
        <div className="mt-[26px]">
          <Badge variant="secondary" className="mb-3">
            {episode.category}
          </Badge>
          <div className="font-heading text-[23px] font-bold leading-[1.15] tracking-[-0.02em]">
            {episode.title}
          </div>
          <div className="mt-1.5 font-mono text-xs text-muted-foreground">
            {episode.guest} · EP {episode.epNumber}
          </div>
        </div>

        {/* scrubber */}
        <div className="mt-[26px]">
          <div
            className="relative h-1 cursor-pointer rounded-full bg-muted"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const pct = (e.clientX - rect.left) / rect.width
              setProgress(Math.max(0, Math.min(1, pct)))
            }}
          >
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-primary"
              style={{ width: progressPct }}
            />
            <div
              className="absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-primary"
              style={{
                left: progressPct,
                transform: "translate(-50%, -50%)",
                boxShadow:
                  "0 0 0 4px color-mix(in oklch, var(--primary), transparent 75%)",
              }}
            />
          </div>
          <div className="mt-[9px] flex justify-between font-mono text-[11px] text-muted-foreground">
            <span>{fmt(elapsedSeconds)}</span>
            <span>-{fmt(remainingSeconds)}</span>
          </div>
        </div>

        {/* transport */}
        <div className="mt-[22px] flex items-center justify-center gap-[26px]">
          <Button variant="ghost" size="icon" aria-label="Aleatório">
            <Shuffle size={18} className="text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Voltar 15s">
            <RotateCcw size={26} />
          </Button>
          <Button
            variant="default"
            className="size-[72px] rounded-full"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pausar" : "Reproduzir"}
          >
            {isPlaying ? (
              <Pause size={30} fill="currentColor" />
            ) : (
              <Play size={30} fill="currentColor" />
            )}
          </Button>
          <Button variant="ghost" size="icon" aria-label="Avançar 30s">
            <RotateCw size={26} />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Repetir">
            <Repeat size={18} className="text-muted-foreground" />
          </Button>
        </div>

        {/* bottom row */}
        <div className="mt-auto flex items-center justify-between pb-[26px] pt-[18px]">
          <Button variant="ghost" size="sm" className="gap-[5px] font-mono text-xs">
            <Gauge size={16} />
            1.0×
          </Button>
          <Button variant="ghost" size="icon" aria-label="Timer">
            <Moon size={18} />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Fila">
            <ListMusic size={18} />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Compartilhar">
            <Share2 size={18} />
          </Button>
        </div>
      </div>
    </div>
  )
}
