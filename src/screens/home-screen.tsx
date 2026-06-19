import { Play, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EpisodeRow } from "@/components/app/episode-row"
import { episodes } from "@/data/episodes"
import { useEpisodeActions } from "@/hooks/use-episode-actions"

const featured = episodes[0] // EP 142
const recents = episodes.slice(1, 4) // EP 141–139

export function HomeScreen() {
  const { openEpisode, playEpisode } = useEpisodeActions()

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between px-[22px] pb-[14px] pt-2">
        <div className="font-heading text-[21px] font-bold tracking-[-0.02em]">
          True Outspeak<span className="text-primary">.</span>
        </div>
        <div className="flex gap-1.5">
          <Button variant="ghost" size="icon-sm" aria-label="Buscar">
            <Search size={18} />
          </Button>
          <div
            className="flex size-6 shrink-0 items-center justify-center rounded-full text-primary-foreground font-mono text-[11px] font-medium"
            style={{ background: "var(--chart-4)" }}
            aria-label="Perfil"
          >
            AS
          </div>
        </div>
      </div>

      {/* scrollable body */}
      <div className="flex-1 overflow-y-auto px-[22px] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* featured eyebrow */}
        <div className="mb-[14px] flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[.1em] text-muted-foreground">
          Episódio em destaque
          <span className="h-px flex-1 bg-border" />
        </div>

        {/* featured card */}
        <button
          className="relative w-full overflow-hidden focus-visible:outline-none"
          style={{
            aspectRatio: "1.55/1",
            borderRadius: "18px",
            background: "var(--chart-4)",
            boxShadow: "var(--ring-card)",
          }}
          onClick={() => openEpisode(featured.id)}
          aria-label={`Abrir episódio ${featured.epNumber}`}
        >
          <div className="flex h-full flex-col justify-between p-[18px] text-primary-foreground">
            <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-[.06em] opacity-90">
              <span>🎙</span> TRUE OUTSPEAK · EP {featured.epNumber}
            </div>
            <div className="font-heading text-[27px] font-bold leading-[1.12] tracking-[-0.02em] max-w-[86%]">
              {featured.title}
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] opacity-90">
                {featured.guest} · {featured.durationLabel}
              </span>
              <button
                className="flex size-11 items-center justify-center rounded-full text-[--chart-5] focus-visible:outline-none"
                style={{ background: "var(--primary-foreground)" }}
                onClick={(e) => {
                  e.stopPropagation()
                  playEpisode(featured.id)
                }}
                aria-label="Ouvir agora"
              >
                <Play size={18} fill="currentColor" />
              </button>
            </div>
          </div>
        </button>

        {/* recents eyebrow */}
        <div className="mb-[14px] mt-[22px] flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[.1em] text-muted-foreground">
          Mais episódios
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="flex flex-col gap-4">
          {recents.map((ep) => (
            <EpisodeRow key={ep.id} episode={ep} />
          ))}
        </div>
      </div>
    </div>
  )
}
