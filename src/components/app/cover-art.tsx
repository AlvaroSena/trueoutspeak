import { Mic, AudioLines } from "lucide-react"
import { cn } from "@/lib/utils"

type ChartColor = 1 | 2 | 3 | 4 | 5

const chartBg: Record<ChartColor, string> = {
  1: "bg-chart-1",
  2: "bg-chart-2",
  3: "bg-chart-3",
  4: "bg-chart-4",
  5: "bg-chart-5",
}

interface CoverArtProps {
  epNumber: number
  chartColor: ChartColor
  /** "chip" = 42–60px list item, "featured" = wide 1.55:1, "detail" = square 1:1, "player" = large square 1:1 */
  size: "chip" | "chip-sm" | "featured" | "detail" | "player"
  className?: string
}

export function CoverArt({ epNumber, chartColor, size, className }: CoverArtProps) {
  const bg = chartBg[chartColor]

  if (size === "chip") {
    return (
      <div
        className={cn(
          "flex size-[60px] shrink-0 items-end rounded-xl p-[7px] text-primary-foreground",
          bg,
          className
        )}
      >
        <span className="font-heading text-[15px] font-bold leading-none">{epNumber}</span>
      </div>
    )
  }

  if (size === "chip-sm") {
    return (
      <div
        className={cn(
          "flex size-[42px] shrink-0 items-end rounded-lg p-[5px] text-primary-foreground",
          bg,
          className
        )}
      >
        <span className="font-heading text-[12px] font-bold leading-none">{epNumber}</span>
      </div>
    )
  }

  if (size === "featured") {
    return (
      <div
        className={cn(
          "relative flex w-full shrink-0 flex-col justify-between overflow-hidden rounded-[18px] p-[18px] text-primary-foreground",
          "aspect-[1.55/1]",
          bg,
          className
        )}
        style={{ boxShadow: "var(--ring-card)" }}
      >
        <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-[.06em] opacity-90">
          <Mic size={12} className="shrink-0" />
          TRUE OUTSPEAK · EP {epNumber}
        </div>
        <div />
        {/* title is rendered by parent */}
      </div>
    )
  }

  if (size === "detail") {
    return (
      <div
        className={cn(
          "relative flex w-full flex-col justify-between overflow-hidden rounded-[18px] p-[22px] text-primary-foreground",
          "aspect-square",
          bg,
          className
        )}
        style={{ boxShadow: "var(--ring-card)" }}
      >
        <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-[.06em] opacity-90">
          <Mic size={14} className="shrink-0" />
          TRUE OUTSPEAK
        </div>
        <div className="font-heading text-[64px] font-bold leading-[.92] tracking-[-0.03em]">
          EP
          <br />
          {epNumber}
        </div>
        <AudioLines size={30} className="self-end opacity-55" />
      </div>
    )
  }

  // player — same as detail but slightly larger padding
  return (
    <div
      className={cn(
        "relative flex w-full flex-col justify-between overflow-hidden rounded-[18px] p-6 text-primary-foreground",
        "aspect-square",
        bg,
        className
      )}
      style={{ boxShadow: "var(--ring-card), 0 24px 50px -16px rgba(0,0,0,.5)" }}
    >
      <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-[.06em] opacity-90">
        <Mic size={14} className="shrink-0" />
        TRUE OUTSPEAK
      </div>
      <div className="font-heading text-[76px] font-bold leading-[.9] tracking-[-0.03em]">
        EP
        <br />
        {epNumber}
      </div>
      <AudioLines size={30} className="self-end opacity-55" />
    </div>
  )
}
