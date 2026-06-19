export type DownloadState = "not-downloaded" | "downloading" | "downloaded"

export interface Episode {
  id: string
  epNumber: number
  title: string
  category: string
  guest: string
  guestRole: string
  durationLabel: string
  dateLabel: string
  chartColor: 1 | 2 | 3 | 4 | 5
  progress: number // 0–1
  downloadState: DownloadState
  downloadProgress?: number // 0–1, when downloading
  notes: string
  pullQuote?: string
}

export const episodes: Episode[] = [
  {
    id: "ep-142",
    epNumber: 142,
    title: "A verdade que ninguém quer dizer em voz alta",
    category: "Economia",
    guest: "Rafael Marques",
    guestRole: "Economista",
    durationLabel: "1:12:40",
    dateLabel: "14 jun",
    chartColor: 4,
    progress: 0.28,
    downloadState: "downloaded",
    notes:
      "Por que o debate econômico no Brasil virou torcida de futebol — e o que isso custa para o seu bolso. Sentamos com Rafael Marques, sem pressa e sem rodeios.",
    pullQuote:
      '"O debate econômico virou torcida de futebol — e quem paga a conta é você."',
  },
  {
    id: "ep-141",
    epNumber: 141,
    title: "O preço de ter razão",
    category: "Cultura",
    guest: "Fernanda Luz",
    guestRole: "Filósofa",
    durationLabel: "58:22",
    dateLabel: "07 jun",
    chartColor: 3,
    progress: 0,
    downloadState: "downloaded",
    notes:
      "O custo social e emocional de insistir na verdade numa era em que a narrativa vale mais que os fatos. Fernanda Luz fala sobre identidade, ego e o paradoxo de vencer um debate e perder uma relação.",
  },
  {
    id: "ep-140",
    epNumber: 140,
    title: "Brasília por dentro",
    category: "Política",
    guest: "Marcos Veiga",
    guestRole: "Jornalista político",
    durationLabel: "1:34:05",
    dateLabel: "31 mai",
    chartColor: 5,
    progress: 0,
    downloadState: "not-downloaded",
    notes:
      "O que acontece nos corredores do Congresso que nunca chega às manchetes. Marcos Veiga cobriu três governos e conta o que viu.",
  },
  {
    id: "ep-139",
    epNumber: 139,
    title: "Trabalho, sentido e burnout",
    category: "Comportamento",
    guest: "Carla Nunes",
    guestRole: "Psicóloga organizacional",
    durationLabel: "47:18",
    dateLabel: "24 mai",
    chartColor: 2,
    progress: 0,
    downloadState: "not-downloaded",
    notes:
      "A epidemia silenciosa do burnout — como reconhecer, como sair, como não voltar. Uma conversa franca sobre limites, ambição e o que realmente importa.",
  },
  {
    id: "ep-138",
    epNumber: 138,
    title: "Inteligência artificial sem hype",
    category: "Tecnologia",
    guest: "João Pires",
    guestRole: "Pesquisador em IA",
    durationLabel: "1:05:51",
    dateLabel: "17 mai",
    chartColor: 1,
    progress: 0.64,
    downloadState: "downloading",
    downloadProgress: 0.64,
    notes:
      "O que a IA já consegue fazer, o que ainda não consegue, e por que a maior parte das notícias sobre o assunto está errada. João Pires desconstrói o hype com dados.",
  },
  {
    id: "ep-137",
    epNumber: 137,
    title: "O jornalismo que ainda vale a pena",
    category: "Cultura",
    guest: "Ana Beatriz Sousa",
    guestRole: "Editora-chefe",
    durationLabel: "52:44",
    dateLabel: "10 mai",
    chartColor: 3,
    progress: 0,
    downloadState: "not-downloaded",
    notes:
      "Num momento em que a desinformação ameaça a democracia, o que é fazer jornalismo responsável? Ana Beatriz fala sobre independência editorial, pressões e futuro.",
  },
]

export const categories = [
  { label: "Economia", icon: "landmark", chartColor: 4 as const },
  { label: "Política", icon: "vote", chartColor: 5 as const },
  { label: "Cultura", icon: "palette", chartColor: 3 as const },
  { label: "Tecnologia", icon: "cpu", chartColor: 1 as const },
]

export const trending = [
  { rank: 1, id: "ep-142" },
  { rank: 2, id: "ep-140" },
  { rank: 3, id: "ep-138" },
]
