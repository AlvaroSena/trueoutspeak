import { ChevronLeft, Share2, Play, Download, ListPlus } from "lucide-react"
import { useRouter } from "@tanstack/react-router"
import { getRouteApi } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CoverArt } from "@/components/app/cover-art"
import { StatusBar } from "@/components/app/phone-frame"
import { episodes } from "@/data/episodes"
import { useEpisodeActions } from "@/hooks/use-episode-actions"

const routeApi = getRouteApi("/episodio/$episodeId")

export function EpisodeDetailScreen() {
  const { episodeId } = routeApi.useParams()
  const router = useRouter()
  const { playEpisode } = useEpisodeActions()

  const episode = episodes.find((e) => e.id === episodeId)

  if (!episode) return null

  const initials = episode.guest
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="absolute inset-0 z-0 flex flex-col overflow-hidden bg-background text-foreground">
      {/* status bar */}
      <StatusBar />

      {/* nav row */}
      <div className="flex items-center justify-between px-[18px] pb-3">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => router.history.back()}
          aria-label="Voltar"
        >
          <ChevronLeft size={22} />
        </Button>
        <span className="font-mono text-[11px] uppercase tracking-[.08em] text-muted-foreground">
          Início · Episódios
        </span>
        <Button variant="ghost" size="icon-sm" aria-label="Compartilhar">
          <Share2 size={18} />
        </Button>
      </div>

      {/* scrollable content */}
      <div className="flex-1 overflow-y-auto px-[22px] pt-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* big square cover */}
        <CoverArt epNumber={episode.epNumber} chartColor={episode.chartColor} size="detail" />

        {/* badges */}
        <div className="mt-[18px] flex gap-2">
          <Badge variant="secondary">{episode.category}</Badge>
          <Badge variant="outline">E · Explícito</Badge>
        </div>

        {/* title */}
        <h1 className="mt-3 font-heading text-[26px] font-bold leading-[1.12] tracking-[-0.02em]">
          {episode.title}
        </h1>

        {/* meta */}
        <div className="mt-3 flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span>EP {episode.epNumber}</span>
          <span>·</span>
          <span>{episode.durationLabel}</span>
          <span>·</span>
          <span>{episode.dateLabel} 2026</span>
        </div>

        {/* actions */}
        <div className="mt-[18px] flex gap-2.5">
          <Button
            variant="default"
            size="lg"
            className="flex-1"
            onClick={() => playEpisode(episode.id)}
          >
            <Play size={16} fill="currentColor" />
            Ouvir agora
          </Button>
          <Button variant="outline" size="icon-lg" aria-label="Baixar">
            <Download size={18} />
          </Button>
          <Button variant="outline" size="icon-lg" aria-label="Adicionar à fila">
            <ListPlus size={18} />
          </Button>
        </div>

        {/* guest card */}
        <div
          className="mt-[18px] mb-[18px] flex items-center gap-3 rounded-[18px] px-4 py-[14px]"
          style={{ boxShadow: "var(--ring-card)" }}
        >
          <Avatar className="size-10 shrink-0">
            <AvatarFallback
              className="font-mono text-[13px] text-primary-foreground"
              style={{ background: "var(--chart-3)" }}
            >
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <div className="font-heading text-[15px] font-semibold">{episode.guest}</div>
            <div className="text-[13px] text-muted-foreground">
              Convidado · {episode.guestRole}
            </div>
          </div>
          <Button variant="outline" size="sm">
            Seguir
          </Button>
        </div>

        {/* tabs */}
        <Tabs defaultValue="notas">
          <TabsList>
            <TabsTrigger value="notas">Notas</TabsTrigger>
            <TabsTrigger value="transcricao">Transcrição</TabsTrigger>
            <TabsTrigger value="capitulos">Capítulos</TabsTrigger>
          </TabsList>
          <TabsContent value="notas" className="mt-3.5">
            <p className="text-[15px] leading-[1.7]">{episode.notes}</p>
          </TabsContent>
          <TabsContent value="transcricao" className="mt-3.5">
            <p className="text-sm text-muted-foreground">
              Transcrição disponível em breve.
            </p>
          </TabsContent>
          <TabsContent value="capitulos" className="mt-3.5">
            <p className="text-sm text-muted-foreground">Sem capítulos marcados.</p>
          </TabsContent>
        </Tabs>

        {/* bottom spacer */}
        <div className="h-8" />
      </div>
    </div>
  )
}
