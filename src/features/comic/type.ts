export interface ComicPage {
  id: number
  imageUrl: string
  text?: string
  startTime?: number // thời điểm bắt đầu audio cho trang này (giây)
  endTime?: number // thời điểm kết thúc audio cho trang này (giây)
}

export interface Comic {
  id: string
  title: string
  description: string
  coverImage: string
  pages: ComicPage[]
  audioUrl?: string // 1 file audio cho toàn bộ truyện
  totalDuration?: number
}

export interface AudioState {
  isPlaying: boolean
  currentTime: number
  duration: number
  volume: number
  isLoading: boolean
}

export interface ComicReaderProps {
  comic: Comic
  autoPlay?: boolean
  showText?: boolean
  onComplete?: () => void
}
