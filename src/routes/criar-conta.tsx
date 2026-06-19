import { createFileRoute } from "@tanstack/react-router"
import { SignUpScreen } from "@/screens/sign-up-screen"

export const Route = createFileRoute("/criar-conta")({
  component: SignUpScreen,
})
