import { EpisodeRow } from "@/components/app/episode-row"
import { episodes } from "@/data/episodes"

export function EpisodesScreen() {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="px-[22px] pt-[10px] pb-4">
        <h1 className="font-heading text-[27px] font-bold tracking-[-0.02em]">Episódios</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-[22px] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex flex-col gap-4 pb-4">
          {episodes.map((ep) => (
            <EpisodeRow key={ep.id} episode={ep} />
          ))}
        </div>
      </div>
    </div>
  )
}
