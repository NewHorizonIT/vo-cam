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

export interface PuzzleGameProps {
  title: string;
  description: string;
  imageUrl: string;
  questions: Question[];
  onComplete?: (score: number, attempts: number) => void;
}
