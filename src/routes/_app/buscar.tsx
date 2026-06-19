import { createFileRoute } from "@tanstack/react-router"
import { SearchScreen } from "@/screens/search-screen"

export const Route = createFileRoute("/_app/buscar")({
  component: SearchScreen,
})
