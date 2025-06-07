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

const quizQuestions = [
  {
    id: 1,
    question: "Theo bạn, thế nào được coi là vô cảm?",
    options: [
      "Là khi con người biết quan tâm, chia sẻ với những người xung quanh.",
      "là một cách nói ẩn dụ dùng để chỉ hiện tượng con người ngày càng trở nên thờ ơ, lãnh đạm, thiếu quan tâm đến những vấn đề xung quanh, đặc biệt là nỗi đau, khó khăn hay bất hạnh của người khác.",
      "Là khi con người dễ xúc động và hay giúp đỡ mọi người.",
      "Là khi con người sống khép kín và không bao giờ tiếp xúc với xã hội.",
    ],
    correctAnswer: 1,
    explanation:
      "là một cách nói ẩn dụ dùng để chỉ hiện tượng con người ngày càng trở nên thờ ơ, lãnh đạm, thiếu quan tâm đến những vấn đề xung quanh, đặc biệt là nỗi đau, khó khăn hay bất hạnh của người khác.",
  },
  {
    id: 2,
    question:
      "Bạn có được nghe nói về vô cảm ở trường bạn trong các môn học, giờ chào cờ, sinh hoạt hay hoạt động ngoại khóa không? ",
    options: [
      "Có, nhưng chỉ trong một vài môn học như Ngữ văn hoặc Giáo dục công dân.",
      "Không, chưa từng nghe nhắc đến.",
      "Có, vô cảm được nhắc đến trong nhiều hoạt động như môn học, giờ chào cờ, sinh hoạt lớp và ngoại khóa.",
      "Có nghe nói nhưng không hiểu rõ đó là gì.",
    ],
    correctAnswer: 2,
    explanation:
      "Có, vô cảm được nhắc đến trong nhiều hoạt động như môn học, giờ chào cờ, sinh hoạt lớp và ngoại khóa.",
  },
  {
    id: 3,
    question:
      "Nguyên nhân nào sau đây dẫn đến hiện tượng vô cảm ở một bộ phận giới trẻ hiện nay?",
    options: [
      "Do giới trẻ ngày nay luôn được sống trong môi trường đầy đủ tình cảm và sự quan tâm.",
      "Do mạng xã hội giúp giới trẻ thấu hiểu và chia sẻ cảm xúc tốt hơn.",
      "Do giới trẻ ngày càng chủ động tham gia các hoạt động tình nguyện, giúp đỡ cộng đồng.",
      "Do ảnh hưởng tiêu cực từ mạng xã hội và các phương tiện truyền thông khiến họ sống khép kín, ít giao tiếp.",
    ],
    correctAnswer: 2,
    explanation:
      "Do ảnh hưởng tiêu cực từ mạng xã hội và các phương tiện truyền thông khiến họ sống khép kín, ít giao tiếp.",
  },
  {
    id: 4,
    question: "Nếu thấy mẹ em bị bệnh, em sẽ làm gì?",
    options: [
      "Lờ đi vì nghĩ việc chăm sóc là của người lớn.",
      "Hỏi han, chăm sóc mẹ và phụ giúp việc nhà nếu có thể.",
      "Cảm thấy buồn nhưng không biết làm gì nên cứ im lặng.",
      "Rủ bạn đi chơi để quên đi chuyện đó cho đỡ buồn.",
    ],
    correctAnswer: 1,
    explanation: "Hỏi han, chăm sóc mẹ và phụ giúp việc nhà nếu có thể.",
  },
  {
    id: 5,
    question: "Nếu bạn thấy một bạn học bị bắt nạt, bạn sẽ...?",
    options: [
      "Giả vờ không thấy để khỏi phiền phức.",
      "Nói với giáo viên hoặc người lớn.",
      "Quay video đăng lên mạng.",
      "Cười theo cho vui.",
    ],
    correctAnswer: 1,
    explanation: "Nói với giáo viên hoặc người lớn.",
  },
  {
    id: 6,
    question:
      "Nếu một người bạn trong lớp bạn luôn im lặng, ít nói, có dấu hiệu buồn bã và tránh giao tiếp, bạn sẽ làm gì?",
    options: [
      "Lờ đi vì nghĩ bạn ấy không thích bị làm phiền.",
      "Kể với bạn khác để mọi người chú ý.",
      "Tìm cách tiếp cận, hỏi han nhẹ nhàng và chia sẻ với thầy cô nếu cần.",
      "Tránh tiếp xúc vì sợ liên lụy đến mình.",
    ],
    correctAnswer: 2,
    explanation:
      "Tìm cách tiếp cận, hỏi han nhẹ nhàng và chia sẻ với thầy cô nếu cần.",
  },
  {
    id: 7,
    question: "Những người nào dễ bị vô cảm?",
    options: [
      "Những người luôn sẵn sàng lắng nghe và chia sẻ với người khác.",
      "Những người biết quan tâm, giúp đỡ người gặp khó khăn.",
      "Những người thường thể hiện sự đồng cảm trong các tình huống xã hội.",
      "Những người thờ ơ, né tránh các mối quan hệ và không quan tâm đến cảm xúc của người khác.",
    ],
    correctAnswer: 3,
    explanation:
      "Những người thờ ơ, né tránh các mối quan hệ và không quan tâm đến cảm xúc của người khác.",
  },
  {
    id: 8,
    question:
      "Trong giờ hoạt động trải nghiệm, cách nào là không hiệu quả để giải quyết tình trạng vô cảm?",
    options: [
      "Tạo không gian để học sinh thể hiện cảm xúc và chia sẻ với nhau.",
      "Khuyến khích học sinh làm việc nhóm để tăng cường sự đồng cảm và hiểu biết.",
      "Sử dụng các trò chơi để giải trí và chơi chung với nhau, giúp học sinh giảm sự vô cảm và xa lánh.",
      "Để học sinh tự do, không định hướng hoạt động hay hỗ trợ cảm xúc.",
    ],
    correctAnswer: 3,
    explanation:
      "Để học sinh tự do, không định hướng hoạt động hay hỗ trợ cảm xúc.",
  },
  {
    id: 9,
    question:
      "Bạn cảm các tiết học hoạt động trải nghiệm ở trường như thế nào?",
    options: [
      "Rất chán,cảm thấy buồn ngủ",
      "Cảm thấy bình thường",
      "Cảm thấy chưa được thực hành chơi các trò chơi nhiều",
      "Rất vui,rất yêu thích tiết học.",
    ],
    correctAnswer: 3,
    explanation: "Rất vui,rất yêu thích tiết học.",
  },
  {
    id: 10,
    question:
      "Theo bạn có nên tổ chức các buổi tuyên truyền và ngăn ngừa tình trạng vô cảm cho học sinh không?",
    options: [
      "Không cần thiết vì học sinh tự biết cách sống có trách nhiệm.",
      "Nên tổ chức nhưng chỉ dành cho một số học sinh có vấn đề cá nhân.",
      "Chỉ nên tổ chức khi có dấu hiệu nghiêm trọng mới can thiệp.",
      "Nên tổ chức thường xuyên để nâng cao nhận thức và phòng tránh vô cảm cho tất cả học sinh.",
    ],
    correctAnswer: 3,
    explanation:
      "Nên tổ chức thường xuyên để nâng cao nhận thức và phòng tránh vô cảm cho tất cả học sinh.",
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
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
      if (answer === quizQuestions[index].correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const getScoreColor = (score: number) => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizStarted(false);
    setTimeLeft(300);
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Quiz về Vô cảm
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Kiểm tra kiến thức của bạn về tâm lý học vô cảm
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-600" />
                Thông tin Quiz
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Target className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="font-semibold">
                      {quizQuestions.length} câu hỏi
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Trắc nghiệm
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Clock className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="font-semibold">5 phút</div>
                    <div className="text-sm text-muted-foreground">
                      Thời gian
                    </div>
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
                  <li>
                    • Bạn có thể quay lại câu hỏi trước đó để thay đổi đáp án
                  </li>
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
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / quizQuestions.length) * 100);

    return (
      <div className="min-h-screen py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-600" />
                Kết quả Quiz
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div className={`text-4xl font-bold ${getScoreColor(score)}`}>
                  {score}/{quizQuestions.length}
                </div>
                <div className="text-2xl font-semibold">{percentage}%</div>
                <Badge
                  variant={
                    percentage >= 80
                      ? "default"
                      : percentage >= 60
                      ? "secondary"
                      : "destructive"
                  }
                  className="text-lg px-4 py-2"
                >
                  {percentage >= 80
                    ? "Xuất sắc"
                    : percentage >= 60
                    ? "Khá"
                    : "Cần cải thiện"}
                </Badge>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Chi tiết kết quả:</h3>
                {quizQuestions.map((question, index) => {
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
                            <p className="text-sm text-green-600">
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
                <Button onClick={resetQuiz} className="mt-6" variant="outline">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Làm lại bài Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-bold">
              Câu {currentQuestion + 1} / {quizQuestions.length}
            </CardTitle>
            <Progress
              value={((currentQuestion + 1) / quizQuestions.length) * 100}
              className="h-2 mt-4"
            />
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-medium mb-4">
                {quizQuestions[currentQuestion].question}
              </p>
              <RadioGroup
                value={
                  selectedAnswers[currentQuestion]?.toString() || undefined
                }
                onValueChange={(val) => handleAnswerSelect(parseInt(val))}
              >
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={index.toString()} id={`q${index}`} />
                    <Label htmlFor={`q${index}`}>{option}</Label>
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
                {currentQuestion === quizQuestions.length - 1
                  ? "Hoàn thành"
                  : "Tiếp theo"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
