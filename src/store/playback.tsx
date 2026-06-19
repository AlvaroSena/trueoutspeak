/* eslint-disable react-refresh/only-export-components */
import * as React from "react"

interface PlaybackState {
  currentEpisodeId: string | null
  isPlaying: boolean
  progress: number // 0–1
}

interface PlaybackContextValue extends PlaybackState {
  load: (id: string) => void
  togglePlay: () => void
  setProgress: (progress: number) => void
}

const PlaybackContext = React.createContext<PlaybackContextValue | undefined>(undefined)

export function PlaybackProvider({ children }: { children: React.ReactNode }) {
  const [currentEpisodeId, setCurrentEpisodeId] = React.useState<string | null>(null)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [progress, setProgressState] = React.useState(0)

  const value = React.useMemo<PlaybackContextValue>(
    () => ({
      currentEpisodeId,
      isPlaying,
      progress,
      load: (id) => {
        setCurrentEpisodeId(id)
        setIsPlaying(true)
      },
      togglePlay: () => setIsPlaying((p) => !p),
      setProgress: (n) => setProgressState(n),
    }),
    [currentEpisodeId, isPlaying, progress]
  )

  return <PlaybackContext.Provider value={value}>{children}</PlaybackContext.Provider>
}

export function usePlayback(): PlaybackContextValue {
  const ctx = React.useContext(PlaybackContext)
  if (!ctx) throw new Error("usePlayback must be used inside PlaybackProvider")
  return ctx
}
