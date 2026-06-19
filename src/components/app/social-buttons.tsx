import { Button } from "@/components/ui/button"

interface SocialButtonsProps {
  onAuth: () => void
}

export function SocialButtons({ onAuth }: SocialButtonsProps) {
  return (
    <>
      <Button
        variant="outline"
        size="lg"
        className="h-12 w-full gap-[10px] text-sm"
        onClick={onAuth}
      >
        {/* Apple logo — monochrome currentColor */}
        <svg
          viewBox="0 0 24 24"
          width="17"
          height="17"
          fill="currentColor"
          className="shrink-0"
          aria-hidden="true"
        >
          <path d="M17.05 12.04c-.03-2.6 2.12-3.84 2.22-3.9-1.21-1.77-3.1-2.02-3.77-2.04-1.6-.16-3.13.94-3.94.94-.81 0-2.07-.92-3.4-.9-1.75.03-3.36 1.02-4.26 2.58-1.81 3.15-.46 7.81 1.3 10.37.86 1.25 1.88 2.65 3.22 2.6 1.29-.05 1.78-.83 3.34-.83 1.56 0 2 .83 3.38.81 1.39-.03 2.27-1.27 3.12-2.53.98-1.44 1.38-2.84 1.4-2.92-.03-.01-2.7-1.03-2.73-4.1zM14.5 4.5c.71-.87 1.19-2.07 1.06-3.28-1.02.05-2.27.69-3 1.56-.66.77-1.24 1.99-1.08 3.16 1.14.09 2.3-.58 3.02-1.44z" />
        </svg>
        Continuar com Apple
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="h-12 w-full gap-[10px] text-sm"
        onClick={onAuth}
      >
        {/* Google logo — 4-color */}
        <svg
          viewBox="0 0 24 24"
          width="17"
          height="17"
          className="shrink-0"
          aria-hidden="true"
        >
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38z"
          />
        </svg>
        Continuar com Google
      </Button>
    </>
  )
}
