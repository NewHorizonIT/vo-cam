export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface PuzzlePiece {
  id: number;
  position: number;
  isRevealed: boolean;
  question: Question;
}

export interface GameState {
  pieces: PuzzlePiece[];
  currentQuestion: number | null;
  score: number;
  isCompleted: boolean;
  attempts: Record<number, number>;
}

export interface PuzzleLevel {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  slogan?: string;
  sublogan?: string;
  questions: Question[];
  difficulty: "easy" | "medium" | "hard";
  unlocked: boolean;
  completed: boolean;
  bestScore?: number;
  minScore?: number; // Điểm tối thiểu để unlock level tiếp theo
}

export interface PuzzleGameProps {
  level: PuzzleLevel;
  onComplete?: (score: number, attempts: number) => void;
  onLevelComplete?: (levelId: string, score: number, attempts: number) => void;
}

export interface GameProgress {
  currentLevel: number;
  unlockedLevels: string[];
  completedLevels: Record<
    string,
    { score: number; attempts: number; timestamp: number }
  >;
  totalScore: number;
}
