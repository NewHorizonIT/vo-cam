"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  CheckCircle,
  XCircle,
  RotateCcw,
  Trophy,
  Clock,
  Target,
} from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizComponentProps {
  title: string;
  description: string;
  questions: Question[];
  timeLimit: number;
  onComplete?: (score: number, total: number) => void;
  customScoring?: (
    score: number,
    total: number
  ) => {
    level: string;
    message: string;
    variant: "default" | "secondary" | "destructive";
  };
}

export function QuizComponent({
  title,
  description,
  questions,
  timeLimit,
  onComplete,
  customScoring,
}: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const score = calculateScore();
      setShowResults(true);
      onComplete?.(score, questions.length);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const getScoreColor = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getDefaultScoring = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80)
      return {
        level: "Xuất sắc",
        message: "Bạn có hiểu biết tốt về chủ đề này!",
        variant: "default" as const,
      };
    if (percentage >= 60)
      return {
        level: "Khá",
        message: "Bạn có kiến thức cơ bản, hãy tiếp tục học hỏi!",
        variant: "secondary" as const,
      };
    return {
      level: "Cần cải thiện",
      message: "Bạn nên tìm hiểu thêm về chủ đề này.",
      variant: "destructive" as const,
    };
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizStarted(false);
  };

  if (!quizStarted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-600" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-muted-foreground">{description}</p>

          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Target className="w-8 h-8 text-blue-600" />
              <div>
                <div className="font-semibold">{questions.length} câu hỏi</div>
                <div className="text-sm text-muted-foreground">Trắc nghiệm</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Clock className="w-8 h-8 text-green-600" />
              <div>
                <div className="font-semibold">
                  {Math.floor(timeLimit / 60)} phút
                </div>
                <div className="text-sm text-muted-foreground">Thời gian</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Trophy className="w-8 h-8 text-yellow-600" />
              <div>
                <div className="font-semibold">Điểm số</div>
                <div className="text-sm text-muted-foreground">
                  Đánh giá ngay
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Hướng dẫn:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Đọc kỹ từng câu hỏi trước khi chọn đáp án</li>
              <li>• Mỗi câu hỏi chỉ có một đáp án đúng</li>
              <li>• Bạn có thể quay lại câu hỏi trước đó để thay đổi đáp án</li>
              <li>• Kết quả sẽ được hiển thị ngay sau khi hoàn thành</li>
            </ul>
          </div>

          <Button
            onClick={() => setQuizStarted(true)}
            className="w-full"
            size="lg"
          >
            Bắt đầu Quiz
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const scoring = customScoring
      ? customScoring(score, questions.length)
      : getDefaultScoring(score, questions.length);

    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-600" />
            Kết quả Quiz: {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <div className={`text-4xl font-bold ${getScoreColor(score)}`}>
              {score}/{questions.length}
            </div>
            <div>
              <Badge variant={scoring.variant} className="text-lg px-4 py-2">
                {scoring.level}
              </Badge>
              <p className="text-sm mt-2 text-muted-foreground">
                {scoring.message}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Chi tiết kết quả:</h3>
            {questions.map((question, index) => {
              const isCorrect =
                selectedAnswers[index] === question.correctAnswer;
              return (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 mt-1" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium mb-2">
                        Câu {index + 1}: {question.question}
                      </p>
                      <p className="text-sm text-muted-foreground mb-1">
                        Đáp án của bạn:{" "}
                        {question.options[selectedAnswers[index]]}
                      </p>
                      {!isCorrect && (
                        <p className="text-sm text-green-600 mb-1">
                          Đáp án đúng:{" "}
                          {question.options[question.correctAnswer]}
                        </p>
                      )}
                      <p className="text-sm italic text-gray-500">
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button onClick={resetQuiz} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Làm lại bài Quiz
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Question */}
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-bold">
            Câu {currentQuestion + 1} / {questions.length}
          </CardTitle>
          <Progress value={progress} className="h-2 mt-4" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium mb-4">{question.question}</p>
            <RadioGroup
              key={currentQuestion}
              value={
                selectedAnswers[currentQuestion] !== undefined
                  ? selectedAnswers[currentQuestion].toString()
                  : ""
              }
              onValueChange={(value) =>
                handleAnswerSelect(Number.parseInt(value))
              }
            >
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={index.toString()} id={`q${index}`} />
                  <Label
                    htmlFor={`q${index}`}
                    className="flex-1 cursor-pointer py-2"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="flex justify-between mt-6">
            <Button onClick={handlePrevious} disabled={currentQuestion === 0}>
              Quay lại
            </Button>
            <Button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
            >
              {currentQuestion === questions.length - 1
                ? "Hoàn thành"
                : "Tiếp theo"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
