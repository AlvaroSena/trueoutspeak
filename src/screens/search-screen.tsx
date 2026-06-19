import { Search, Landmark, Vote, Palette, Cpu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { episodes, trending } from "@/data/episodes"
import { useEpisodeActions } from "@/hooks/use-episode-actions"

const categoryConfig = [
  { label: "Economia", Icon: Landmark, chartColor: 4 as const },
  { label: "Política", Icon: Vote, chartColor: 5 as const },
  { label: "Cultura", Icon: Palette, chartColor: 3 as const },
  { label: "Tecnologia", Icon: Cpu, chartColor: 1 as const },
]

const chartBgVar: Record<number, string> = {
  1: "var(--chart-1)",
  2: "var(--chart-2)",
  3: "var(--chart-3)",
  4: "var(--chart-4)",
  5: "var(--chart-5)",
}

export function SearchScreen() {
  const { openEpisode } = useEpisodeActions()

  const trendingEpisodes = trending.map(({ rank, id }) => ({
    rank,
    episode: episodes.find((e) => e.id === id)!,
  }))

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* header + search */}
      <div className="px-[22px] pt-[10px]">
        <h1 className="mb-4 font-heading text-[27px] font-bold tracking-[-0.02em]">Buscar</h1>
        <div className="relative mb-[22px]">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            className="h-11 pl-11"
            placeholder="Buscar episódios, convidados…"
            readOnly
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-[22px] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* categories */}
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[.1em] text-muted-foreground">
          Explorar por tema
        </div>
        <div className="mb-6 grid grid-cols-2 gap-2.5">
          {categoryConfig.map(({ label, Icon, chartColor }) => (
            <div
              key={label}
              className="flex h-[84px] flex-col justify-between overflow-hidden rounded-xl p-[13px] text-primary-foreground"
              style={{ background: chartBgVar[chartColor] }}
            >
              <Icon size={20} className="opacity-90" />
              <span className="font-heading text-base font-semibold">{label}</span>
            </div>
          ))}
        </div>

        {/* trending */}
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[.1em] text-muted-foreground">
          Em alta esta semana
        </div>
        <div className="flex flex-col gap-3.5 pb-4">
          {trendingEpisodes.map(({ rank, episode }) => (
            <button
              key={episode.id}
              className="flex items-center gap-3 text-left focus-visible:outline-none"
              onClick={() => openEpisode(episode.id)}
            >
              <span className="w-[22px] shrink-0 font-heading text-[22px] font-bold text-primary">
                {rank}
              </span>
              <div className="min-w-0 flex-1">
                <div className="line-clamp-2 font-heading text-[15px] font-semibold leading-snug">
                  {episode.title}
                </div>
                <div className="mt-[3px] font-mono text-[11px] text-muted-foreground">
                  {episode.category} · {episode.durationLabel}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
