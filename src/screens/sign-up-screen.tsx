import * as React from "react"
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react"
import { useNavigate } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StatusBar } from "@/components/app/phone-frame"
import { Wordmark } from "@/components/app/wordmark"
import { SocialButtons } from "@/components/app/social-buttons"

export function SignUpScreen() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = React.useState(false)

  const enterApp = () => void navigate({ to: "/" })
  const goToSignIn = () => void navigate({ to: "/entrar" })

  return (
    <>
      <StatusBar />

      <div className="flex h-[calc(100%-50px)] flex-col overflow-y-auto px-7 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* wordmark */}
        <Wordmark className="mb-10" />

        {/* eyebrow */}
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[.1em] text-primary">
          Criar conta
        </p>

        {/* headline */}
        <h1 className="mb-3 font-heading text-[36px] font-bold leading-[1.04] tracking-[-0.025em]">
          Junte-se à conversa.
        </h1>

        {/* subtitle */}
        <p className="mb-7 text-[15px] leading-[1.55] text-muted-foreground">
          Episódios novos toda quinta, antes de todo mundo. Sem spam.
        </p>

        {/* name input */}
        <div className="relative mb-3">
          <User
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="text"
            placeholder="Seu nome"
            className="h-12 pl-11"
          />
        </div>

        {/* email input */}
        <div className="relative mb-3">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="email"
            placeholder="seu@email.com"
            className="h-12 pl-11"
          />
        </div>

        {/* password input */}
        <div className="relative mb-[10px]">
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Crie uma senha"
            className="h-12 pl-11 pr-11"
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* password hint */}
        <p className="mb-[22px] pl-1 font-mono text-[11px] text-muted-foreground">
          Mínimo 8 caracteres.
        </p>

        {/* primary CTA */}
        <Button
          size="lg"
          className="h-12 w-full text-[15px]"
          onClick={enterApp}
        >
          Criar conta
        </Button>

        {/* divider */}
        <div className="my-5 flex items-center gap-[14px] font-mono text-[11px] text-muted-foreground">
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

        {/* terms */}
        <p className="mb-3 text-center text-[11px] leading-[1.5] text-muted-foreground">
          Ao criar a conta, você concorda com os{" "}
          <span className="text-foreground">Termos</span> e a{" "}
          <span className="text-foreground">Privacidade</span>.
        </p>

        {/* footer */}
        <div className="pb-[18px] text-center text-sm text-muted-foreground">
          Já tem conta?{" "}
          <button
            type="button"
            className="font-medium text-primary"
            onClick={goToSignIn}
          >
            Entrar
          </button>
        </div>
      </div>
    </>
  )
}
