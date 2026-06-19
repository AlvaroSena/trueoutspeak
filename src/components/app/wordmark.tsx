import { Mic } from "lucide-react"
import { cn } from "@/lib/utils"

interface WordmarkProps {
  className?: string
}

export function Wordmark({ className }: WordmarkProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Mic size={18} className="shrink-0 text-primary" />
      <span className="font-heading text-[18px] font-bold tracking-[-0.02em]">
        True Outspeak<span className="text-primary">.</span>
      </span>
    </div>
  )
}
