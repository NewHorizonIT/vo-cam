"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  BookOpen,
  Clock,
  Target,
  Trophy,
  ArrowLeft,
  Users,
} from "lucide-react";
import { QuizComponent } from "@/components/quiz-component";
import { quizSets, type QuizSet } from "@/constants/index";

export default function QuizPage() {
  const [selectedQuiz, setSelectedQuiz] = useState<QuizSet | null>(null);
  const [completedQuizzes, setCompletedQuizzes] = useState<
    Record<string, { score: number; total: number }>
  >({});

  const handleQuizComplete = (
    quizType: QuizSet,
    score: number,
    total: number
  ) => {
    setCompletedQuizzes((prev) => ({
      ...prev,
      [quizType]: { score, total },
    }));
  };

  const getScorePercentage = (score: number, total: number) => {
    return Math.round((score / total) * 100);
  };

  const getScoreBadge = (percentage: number) => {
    if (percentage >= 80)
      return {
        variant: "default" as const,
        text: "Xuất sắc",
        color: "text-green-600",
      };
    if (percentage >= 60)
      return {
        variant: "secondary" as const,
        text: "Khá",
        color: "text-yellow-600",
      };
    return {
      variant: "destructive" as const,
      text: "Cần cải thiện",
      color: "text-red-600",
    };
  };

  // Custom scoring cho quiz khảo sát
  const getSurveyScoring = (score: number) => {
    if (score <= 3) {
      return {
        level: "Mức độ Vô cảm: Cao",
        message:
          "Bạn đang có biểu hiện thờ ơ, thiếu quan tâm đến người xung quanh. Điều này có thể ảnh hưởng xấu đến các mối quan hệ và sự phát triển cảm xúc của bạn.",
        variant: "destructive" as const,
      };
    } else if (score <= 6) {
      return {
        level: "Mức độ Vô cảm: Trung bình",
        message:
          "Bạn có những lúc biết quan tâm, giúp đỡ người khác, nhưng cũng còn một số hành vi hoặc suy nghĩ mang tính thờ ơ. Bạn cần nhận diện rõ hơn các biểu hiện vô cảm trong bản thân và tích cực thay đổi để trở thành người biết yêu thương, sẻ chia nhiều hơn.",
        variant: "default" as const,
      };
    } else {
      return {
        level: "Mức độ Vô cảm: Thấp",
        message:
          "Bạn là người biết lắng nghe, quan tâm và sẵn sàng giúp đỡ người khác. Đây là điều rất đáng quý và cần được phát huy. Hãy tiếp tục giữ gìn, lan tỏa tình cảm tích cực và tinh thần sẻ chia trong cuộc sống hàng ngày",
        variant: "secondary" as const,
      };
    }
  };

  if (selectedQuiz) {
    const quiz = quizSets[selectedQuiz];
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6">
            <Button
              variant="outline"
              onClick={() => setSelectedQuiz(null)}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại danh sách quiz
            </Button>
          </div>

          <QuizComponent
            title={quiz.title}
            description={quiz.description}
            questions={quiz.questions}
            timeLimit={quiz.timeLimit}
            onComplete={(score, total) =>
              handleQuizComplete(selectedQuiz, score, total)
            }
            customScoring={
              selectedQuiz === "survey" ? getSurveyScoring : undefined
            }
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Quiz về <span className="text-blue-600">Vô cảm</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Chọn bộ câu hỏi phù hợp để kiểm tra kiến thức và mức độ vô cảm của
            bạn
          </p>
        </div>

        {/* Quiz Selection */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Survey Quiz */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <Badge variant="secondary">Khảo sát</Badge>
              </div>
              <CardTitle className="text-xl mb-2">
                {quizSets.survey.title}
              </CardTitle>
              <CardDescription className="text-base">
                {quizSets.survey.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-1">
                  <Target className="w-5 h-5 text-blue-600" />
                  <div className="text-sm font-medium">
                    {quizSets.survey.questions.length} câu
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <Clock className="w-5 h-5 text-green-600" />
                  <div className="text-sm font-medium">
                    {Math.floor(quizSets.survey.timeLimit / 60)} phút
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <Brain className="w-5 h-5 text-purple-600" />
                  <div className="text-sm font-medium">Thực tế</div>
                </div>
              </div>

              {completedQuizzes.survey && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Kết quả gần nhất:
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-bold ${
                          getScoreBadge(
                            getScorePercentage(
                              completedQuizzes.survey.score,
                              completedQuizzes.survey.total
                            )
                          ).color
                        }`}
                      >
                        {completedQuizzes.survey.score}/
                        {completedQuizzes.survey.total}
                      </span>
                      <Badge
                        variant={
                          getScoreBadge(
                            getScorePercentage(
                              completedQuizzes.survey.score,
                              completedQuizzes.survey.total
                            )
                          ).variant
                        }
                      >
                        {
                          getScoreBadge(
                            getScorePercentage(
                              completedQuizzes.survey.score,
                              completedQuizzes.survey.total
                            )
                          ).text
                        }
                      </Badge>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Nội dung bao gồm:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Các tình huống thực tế trong cuộc sống</li>
                  <li>• Đánh giá mức độ vô cảm cá nhân</li>
                  <li>• Nhận thức về vô cảm ở trường học</li>
                  <li>• Cách ứng phó với các tình huống</li>
                </ul>
              </div>

              <Button
                onClick={() => setSelectedQuiz("survey")}
                className="w-full group-hover:bg-primary/90 transition-colors"
              >
                {completedQuizzes.survey ? "Làm lại Quiz" : "Bắt đầu Quiz"}
              </Button>
            </CardContent>
          </Card>

          {/* Basic Quiz */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <Badge variant="default">Cơ bản</Badge>
              </div>
              <CardTitle className="text-xl mb-2">
                {quizSets.basic.title}
              </CardTitle>
              <CardDescription className="text-base">
                {quizSets.basic.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-1">
                  <Target className="w-5 h-5 text-blue-600" />
                  <div className="text-sm font-medium">
                    {quizSets.basic.questions.length} câu
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <Clock className="w-5 h-5 text-green-600" />
                  <div className="text-sm font-medium">
                    {Math.floor(quizSets.basic.timeLimit / 60)} phút
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <Brain className="w-5 h-5 text-blue-600" />
                  <div className="text-sm font-medium">Dễ</div>
                </div>
              </div>

              {completedQuizzes.basic && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Kết quả gần nhất:
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-bold ${
                          getScoreBadge(
                            getScorePercentage(
                              completedQuizzes.basic.score,
                              completedQuizzes.basic.total
                            )
                          ).color
                        }`}
                      >
                        {completedQuizzes.basic.score}/
                        {completedQuizzes.basic.total}
                      </span>
                      <Badge
                        variant={
                          getScoreBadge(
                            getScorePercentage(
                              completedQuizzes.basic.score,
                              completedQuizzes.basic.total
                            )
                          ).variant
                        }
                      >
                        {
                          getScoreBadge(
                            getScorePercentage(
                              completedQuizzes.basic.score,
                              completedQuizzes.basic.total
                            )
                          ).text
                        }
                      </Badge>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Nội dung bao gồm:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Định nghĩa và khái niệm cơ bản</li>
                  <li>• Phân biệt vô cảm và trầm cảm</li>
                  <li>• Các biểu hiện thường gặp</li>
                  <li>• Nguyên nhân và tác động</li>
                </ul>
              </div>

              <Button
                onClick={() => setSelectedQuiz("basic")}
                className="w-full group-hover:bg-primary/90 transition-colors"
                variant="secondary"
              >
                {completedQuizzes.basic ? "Làm lại Quiz" : "Bắt đầu Quiz"}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        {Object.keys(completedQuizzes).length > 0 && (
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-600" />
                Thống kê kết quả
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {Object.keys(completedQuizzes).length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Quiz đã hoàn thành
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {Object.values(completedQuizzes).reduce(
                      (acc, quiz) => acc + quiz.score,
                      0
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Tổng câu đúng
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {Math.round(
                      Object.values(completedQuizzes).reduce(
                        (acc, quiz) => acc + (quiz.score / quiz.total) * 100,
                        0
                      ) / Object.keys(completedQuizzes).length
                    )}
                    %
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Điểm trung bình
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
