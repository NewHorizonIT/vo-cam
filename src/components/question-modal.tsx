"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, HelpCircle } from "lucide-react";
import { Question } from "@/features/quiz/type";

interface QuestionModalProps {
  isOpen: boolean;
  question: Question | null;
  pieceNumber: number;
  attempts: number;
  onAnswer: (answerIndex: number) => void;
  onClose: () => void;
}

export function QuestionModal({
  isOpen,
  question,
  pieceNumber,
  attempts,
  onAnswer,
  onClose,
}: QuestionModalProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (selectedAnswer === null || !question) return;

    const correct = selectedAnswer === question.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);

    // Delay để hiển thị kết quả trước khi gọi callback
    setTimeout(() => {
      onAnswer(selectedAnswer);
      handleClose();
    }, 2000);
  };

  const handleClose = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setIsCorrect(false);
    onClose();
  };

  if (!question) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            Câu hỏi cho Ô {pieceNumber}
          </DialogTitle>
          <DialogDescription>
            {attempts > 0 && (
              <Badge variant="destructive" className="mb-2">
                Đã sai {attempts} lần
              </Badge>
            )}
            Trả lời đúng để mở khóa phần hình ảnh này
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
            <h3 className="font-medium text-lg mb-4">{question.question}</h3>

            {!showResult ? (
              <RadioGroup
                value={selectedAnswer?.toString()}
                onValueChange={(value) =>
                  setSelectedAnswer(Number.parseInt(value))
                }
              >
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={index.toString()}
                      id={`option-${index}`}
                    />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer py-2"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  {isCorrect ? (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-600" />
                  )}
                  <span
                    className={`font-medium ${
                      isCorrect ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {isCorrect ? "Chính xác!" : "Sai rồi!"}
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <strong>Đáp án của bạn:</strong>{" "}
                    {question.options[selectedAnswer!]}
                  </p>
                </div>
              </div>
            )}
          </div>

          {!showResult && (
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={handleClose}>
                Hủy
              </Button>
              <Button onClick={handleSubmit} disabled={selectedAnswer === null}>
                Trả lời
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
