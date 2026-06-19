import * as React from "react"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { useNavigate } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StatusBar } from "@/components/app/phone-frame"
import { Wordmark } from "@/components/app/wordmark"
import { SocialButtons } from "@/components/app/social-buttons"

export function SignInScreen() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = React.useState(false)

  const enterApp = () => void navigate({ to: "/" })
  const goToSignUp = () => void navigate({ to: "/criar-conta" })

  return (
    <>
      <StatusBar />

      <div className="flex h-[calc(100%-50px)] flex-col px-7 pt-4">
        {/* wordmark */}
        <Wordmark className="mb-14" />

        {/* eyebrow */}
        <p className="mb-3 font-mono text-[11px] tracking-[.1em] text-primary uppercase">
          Entrar
        </p>

        {/* headline */}
        <h1 className="mb-3 font-heading text-[36px] leading-[1.04] font-bold tracking-[-0.025em]">
          Bem-vindo de volta.
        </h1>

        {/* subtitle */}
        <p className="mb-[30px] text-[15px] leading-[1.55] text-muted-foreground">
          Continue de onde parou — sua fila e seus downloads estão te esperando.
        </p>

        {/* email input */}
        <div className="relative mb-3">
          <Mail
            size={18}
            className="absolute top-1/2 left-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="email"
            defaultValue="marina@email.com"
            className="h-12 pl-11"
          />
        </div>

        {/* password input */}
        <div className="relative mb-3">
          <Lock
            size={18}
            className="absolute top-1/2 left-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type={showPassword ? "text" : "password"}
            defaultValue="senha-secreta"
            className="h-12 pr-11 pl-11"
          />
          <button
            type="button"
            className="absolute top-1/2 right-4 -translate-y-1/2 text-muted-foreground"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
          >
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        </div>

        {/* forgot */}
        <div className="mb-[22px] text-right">
          <span className="text-[13px] text-primary">Esqueceu a senha?</span>
        </div>

        {/* primary CTA */}
        <Button
          size="lg"
          className="h-12 w-full text-[15px]"
          onClick={enterApp}
        >
          Entrar
        </Button>

        {/* divider */}
        <div className="my-[22px] flex items-center gap-[14px] font-mono text-[11px] text-muted-foreground">
          <span className="h-px flex-1 bg-border" />
          ou
          <span className="h-px flex-1 bg-border" />
        </div>

        {/* social */}
        <div className="flex flex-col gap-[10px]">
          <SocialButtons onAuth={enterApp} />
        </div>

        {/* spacer */}
        <div className="flex-1" />

        {/* footer */}
        <div className="pb-[22px] text-center text-sm text-muted-foreground">
          Não tem conta?{" "}
          <button
            type="button"
            className="font-medium text-primary"
            onClick={goToSignUp}
          >
            Criar conta
          </button>
        </div>
      </div>
    </>
  )
}
