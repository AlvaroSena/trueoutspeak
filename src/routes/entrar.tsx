import { createFileRoute } from "@tanstack/react-router"
import { SignInScreen } from "@/screens/sign-in-screen"

export const Route = createFileRoute("/entrar")({
  component: SignInScreen,
})
