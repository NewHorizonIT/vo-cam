"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Target, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PuzzleLevel, GameProgress } from "../type";
import Image from "next/image";

interface LevelSelectorProps {
  levels: PuzzleLevel[];
  gameProgress: GameProgress;
  onSelectLevel: (level: PuzzleLevel) => void;
}

// Cập nhật để hiển thị tất cả levels như available, bỏ logic unlock

export function LevelSelector({
  levels,
  gameProgress,
  onSelectLevel,
}: LevelSelectorProps) {
  const getCompletionData = (levelId: string) => {
    return gameProgress.completedLevels[levelId];
  };

  const getStarRating = (score: number, totalQuestions: number) => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 90) return 3;
    if (percentage >= 70) return 2;
    if (percentage >= 50) return 1;
    return 0;
  };

  return (
    <div className="space-y-6">
      {/* Level Grid - bỏ logic unlock, tất cả đều có thể chơi */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level, index) => {
          const completionData = getCompletionData(level.id);
          const isCompleted = !!completionData;
          const stars = completionData
            ? getStarRating(completionData.score, level.questions.length)
            : 0;

          return (
            <Card
              key={level.id}
              className={cn(
                "relative transition-all duration-300 hover:shadow-lg cursor-pointer",
                isCompleted && "ring-2 ring-green-200 dark:ring-green-800"
              )}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                        isCompleted
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      )}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        index + 1
                      )}
                    </div>
                  </div>
                  {/* Bỏ icon Lock */}
                </div>
                <CardTitle className="text-lg">{level.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {level.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4 text-blue-600" />
                    <span>{level.questions.length} câu hỏi</span>
                  </div>
                </div>

                {/* Completion Status */}
                {isCompleted && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Kết quả tốt nhất:
                      </span>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 3 }, (_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "w-4 h-4",
                              i < stars
                                ? "text-yellow-500 fill-current"
                                : "text-gray-300"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Điểm: {completionData.score}/{level.questions.length} |
                      Sai: {completionData.attempts} lần
                    </div>
                  </div>
                )}

                <Button
                  onClick={() => onSelectLevel(level)}
                  className="w-full"
                  variant={isCompleted ? "secondary" : "default"}
                >
                  {isCompleted ? "Chơi lại" : "Bắt đầu"}
                </Button>
              </CardContent>

              {/* Level Preview Image */}
              <div className="absolute top-4 right-4 w-16 h-16 rounded-lg overflow-hidden opacity-20">
                <Image
                  width={64}
                  height={64}
                  src={level.imageUrl || "/placeholder.svg"}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
