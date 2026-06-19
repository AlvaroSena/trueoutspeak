import { createFileRoute } from "@tanstack/react-router"
import { EpisodesScreen } from "@/screens/episodes-screen"

export const Route = createFileRoute("/_app/episodios")({
  component: EpisodesScreen,
})
