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
import { PuzzleGame } from "@/features/game/components/puzzle-game";
import { puzzleQuestions } from "@/features/game/data/data";
import { Puzzle, ArrowLeft, Trophy, Target } from "lucide-react";

export default function PuzzlePage() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameResults, setGameResults] = useState<{
    score: number;
    attempts: number;
  } | null>(null);

  const handleGameComplete = (score: number, attempts: number) => {
    setGameResults({ score, attempts });
  };

  const handleBackToMenu = () => {
    setGameStarted(false);
    setGameResults(null);
  };

  if (gameStarted) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6">
            <Button
              variant="outline"
              onClick={handleBackToMenu}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại menu
            </Button>
          </div>

          <PuzzleGame
            title="Khám phá hình ảnh về Vô cảm"
            description="Trả lời đúng các câu hỏi để từng bước khám phá bức tranh hoàn chỉnh về vô cảm. Mỗi câu trả lời đúng sẽ mở ra một phần của hình ảnh!"
            imageUrl="/p3.jpg"
            questions={puzzleQuestions}
            onComplete={handleGameComplete}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Trò chơi <span className="text-blue-600">Puzzle</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Khám phá hình ảnh thông qua việc trả lời các câu hỏi về vô cảm
          </p>
        </div>

        {/* Game Info */}
        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Puzzle className="w-6 h-6 text-purple-600" />
              Trò chơi Puzzle Hình ảnh
            </CardTitle>
            <CardDescription>
              Một cách thú vị để học về vô cảm thông qua trò chơi tương tác
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Game Stats */}
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center space-y-2">
                <Target className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="font-semibold">9 ô puzzle</div>
                  <div className="text-sm text-muted-foreground">
                    Cần mở khóa
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Puzzle className="w-8 h-8 text-green-600" />
                <div>
                  <div className="font-semibold">9 câu hỏi</div>
                  <div className="text-sm text-muted-foreground">Về vô cảm</div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Trophy className="w-8 h-8 text-yellow-600" />
                <div>
                  <div className="font-semibold">Điểm số</div>
                  <div className="text-sm text-muted-foreground">
                    Theo độ chính xác
                  </div>
                </div>
              </div>
            </div>

            {/* Game Rules */}
            <div className="space-y-4">
              <h3 className="font-semibold">Cách chơi:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Nhấn vào từng ô để mở câu hỏi</li>
                <li>• Trả lời đúng để mở khóa phần hình ảnh tương ứng</li>
                <li>• Trả lời sai sẽ đóng ô lại, bạn có thể thử lại</li>
                <li>• Mục tiêu: Mở tất cả 9 ô để hoàn thành hình ảnh</li>
                <li>• Càng ít lần trả lời sai, điểm số càng cao</li>
              </ul>
            </div>

            {/* Previous Results */}
            {gameResults && (
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Kết quả lần chơi trước:
                </h4>
                <div className="flex items-center gap-4">
                  <Badge variant="secondary">
                    {gameResults.score}/9 ô đúng
                  </Badge>
                  <Badge variant="outline">
                    {gameResults.attempts} lần sai
                  </Badge>
                </div>
              </div>
            )}

            <Button
              onClick={() => setGameStarted(true)}
              className="w-full"
              size="lg"
            >
              <Puzzle className="w-5 h-5 mr-2" />
              Bắt đầu chơi
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
