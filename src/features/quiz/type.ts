export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // vị trí của đáp án đúng (index)
}
