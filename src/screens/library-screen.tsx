import { Settings, HardDriveDownload, CircleCheckBig, X, EllipsisVertical } from "lucide-react"
import { useNavigate } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CoverArt } from "@/components/app/cover-art"
import { episodes } from "@/data/episodes"
import { useEpisodeActions } from "@/hooks/use-episode-actions"

const downloaded = episodes.filter((e) => e.downloadState !== "not-downloaded")

export function LibraryScreen() {
  const { openEpisode } = useEpisodeActions()
  const navigate = useNavigate()

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* header */}
      <div className="px-[22px] pt-[10px]">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="font-heading text-[27px] font-bold tracking-[-0.02em]">Biblioteca</h1>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Configurações"
            onClick={() => void navigate({ to: "/entrar" })}
          >
            <Settings size={20} />
          </Button>
        </div>
        <Tabs defaultValue="baixados">
          <TabsList className="w-full">
            <TabsTrigger value="baixados" className="flex-1">
              Baixados
            </TabsTrigger>
            <TabsTrigger value="fila" className="flex-1">
              Fila
            </TabsTrigger>
            <TabsTrigger value="historico" className="flex-1">
              Histórico
            </TabsTrigger>
          </TabsList>

          <div className="mt-[18px] h-[calc(812px-50px-130px-76px)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <TabsContent value="baixados">
              {/* storage summary */}
              <div
                className="mb-[18px] flex items-center gap-3 rounded-[18px] px-4 py-[14px]"
                style={{ boxShadow: "var(--ring-card)", background: "var(--card)" }}
              >
                <HardDriveDownload size={22} className="shrink-0 text-primary" />
                <div className="flex-1">
                  <div className="font-heading text-sm font-semibold">
                    {downloaded.length} episódios offline
                  </div>
                  <div className="font-mono text-[11px] text-muted-foreground">
                    412 MB · disponível sem internet
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-primary">
                  Gerenciar
                </Button>
              </div>

              <div className="flex flex-col gap-4 pb-4">
                {downloaded.map((ep) => (
                  <div key={ep.id} className="flex items-center gap-3">
                    <button
                      onClick={() => openEpisode(ep.id)}
                      className="shrink-0 focus-visible:outline-none"
                      aria-label={`Abrir episódio ${ep.epNumber}`}
                    >
                      <CoverArt
                        epNumber={ep.epNumber}
                        chartColor={ep.chartColor}
                        size="chip-sm"
                      />
                    </button>
                    <button
                      className="min-w-0 flex-1 text-left focus-visible:outline-none"
                      onClick={() => openEpisode(ep.id)}
                    >
                      <div className="line-clamp-2 font-heading text-sm font-semibold leading-snug">
                        {ep.title}
                      </div>
                      {ep.downloadState === "downloaded" ? (
                        <div className="mt-1 flex items-center gap-1.5 font-mono text-[11px] text-primary">
                          <CircleCheckBig size={12} />
                          Baixado · {ep.durationLabel}
                        </div>
                      ) : (
                        <div className="mt-[5px] flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                          <div className="h-[3px] max-w-[90px] flex-1 overflow-hidden rounded-full bg-muted">
                            <div
                              className="h-full bg-primary"
                              style={{
                                width: `${(ep.downloadProgress ?? 0) * 100}%`,
                              }}
                            />
                          </div>
                          {Math.round((ep.downloadProgress ?? 0) * 100)}% · baixando
                        </div>
                      )}
                    </button>
                    <Button variant="ghost" size="icon-sm" aria-label="Opções">
                      {ep.downloadState === "downloading" ? (
                        <X size={18} />
                      ) : (
                        <EllipsisVertical size={18} />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fila">
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Fila vazia
              </p>
            </TabsContent>

            <TabsContent value="historico">
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Sem histórico ainda
              </p>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
