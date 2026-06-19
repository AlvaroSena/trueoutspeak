/* eslint-disable react-refresh/only-export-components */
import { createFileRoute, Outlet, useMatchRoute } from "@tanstack/react-router"
import { StatusBar } from "@/components/app/phone-frame"
import { BottomNav } from "@/components/app/bottom-nav"
import { MiniPlayer } from "@/components/app/mini-player"
import { usePlayback } from "@/store/playback"

export const Route = createFileRoute("/_app")({
  component: AppLayout,
})

function AppLayout() {
  const { currentEpisodeId } = usePlayback()
  const matchRoute = useMatchRoute()
  const onPlayerRoute = !!matchRoute({ to: "/player/$episodeId", params: { episodeId: "$episodeId" } })

  const hasMiniPlayer = !!currentEpisodeId && !onPlayerRoute
  const bottomOffset = hasMiniPlayer ? "bottom-[152px]" : "bottom-[76px]"

  return (
    <>
      <StatusBar />
      <div className={`absolute inset-x-0 top-[50px] overflow-hidden ${bottomOffset}`}>
        <Outlet />
      </div>
      {hasMiniPlayer && <MiniPlayer />}
      <BottomNav />
    </>
  )
}
