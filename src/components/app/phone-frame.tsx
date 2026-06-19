import * as React from "react"
import { Signal, Wifi, BatteryFull } from "lucide-react"
import { cn } from "@/lib/utils"

export function StatusBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[50px] items-center justify-between px-[30px] pt-[14px]",
        className
      )}
    >
      <span className="font-mono text-sm font-medium tracking-[.02em]">9:41</span>
      {/* notch */}
      <div className="absolute left-1/2 top-[11px] h-[30px] w-[108px] -translate-x-1/2 rounded-2xl bg-black" />
      <div className="flex items-center gap-[7px]">
        <Signal size={16} className="shrink-0" />
        <Wifi size={16} className="shrink-0" />
        <BatteryFull size={22} className="shrink-0" />
      </div>
    </div>
  )
}

interface PhoneFrameProps {
  children: React.ReactNode
  className?: string
}

/**
 * On sm+ screens: a centered 375×812 phone bezel with border-radius 46px and a
 * double ring (dark bezel + shadow). On xs screens it fills the viewport.
 */
export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-[#e7e5df] sm:p-8">
      <div
        className={cn(
          "relative h-svh w-full overflow-hidden bg-background text-foreground",
          "sm:h-[812px] sm:w-[375px] sm:rounded-[46px]",
          className
        )}
        style={{
          boxShadow:
            "0 0 0 11px #14110e, 0 28px 60px -18px rgba(20,16,12,.5)",
        }}
      >
        {children}
        {/* home indicator */}
        <div className="absolute bottom-2 left-1/2 h-[5px] w-[134px] -translate-x-1/2 rounded-full bg-foreground opacity-90" />
      </div>
    </div>
  )
}
