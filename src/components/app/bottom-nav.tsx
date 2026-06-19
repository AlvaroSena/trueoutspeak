import { House, AudioLines, Search, User } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { cn } from "@/lib/utils"

const tabs = [
  { to: "/", label: "Início", Icon: House },
  { to: "/episodios", label: "Episódios", Icon: AudioLines },
  { to: "/buscar", label: "Buscar", Icon: Search },
  { to: "/perfil", label: "Perfil", Icon: User },
] as const

export function BottomNav() {
  return (
    <div
      className="absolute inset-x-0 bottom-0 flex h-[76px] items-start border-t border-border pt-[10px]"
      style={{
        background: "color-mix(in oklch, var(--background), transparent 8%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {tabs.map(({ to, label, Icon }) => (
        <Link
          key={to}
          to={to}
          className={cn(
            "flex flex-1 flex-col items-center gap-1 focus-visible:outline-none text-muted-foreground [&.active]:text-primary"
          )}
          activeProps={{ className: "active" }}
          activeOptions={{ exact: to === "/" }}
          aria-label={label}
        >
          <Icon size={22} />
          <span className="font-mono text-[9px] tracking-[.03em]">{label}</span>
        </Link>
      ))}
    </div>
  )
}
