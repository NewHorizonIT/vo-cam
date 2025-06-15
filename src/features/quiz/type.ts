export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // vị trí của đáp án đúng (index)
}
