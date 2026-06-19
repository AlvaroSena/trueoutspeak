/* eslint-disable react-refresh/only-export-components */
import { createRootRoute, Outlet } from "@tanstack/react-router"
import { PhoneFrame } from "@/components/app/phone-frame"

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <PhoneFrame>
      <Outlet />
    </PhoneFrame>
  )
}
