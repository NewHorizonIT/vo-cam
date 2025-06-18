"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LevelSelector } from "@/features/game/components/level-puzzle";
import { PuzzleGameMultiLevel } from "@/features/game/components/multi-puzzle";
import { puzzleLevels } from "@/features/game/data";
import type { PuzzleLevel, GameProgress } from "@/features/game/type";

// Cập nhật để bỏ logic unlock và cho phép chơi tất cả levels

export default function PuzzlePage() {
  const [currentLevel, setCurrentLevel] = useState<PuzzleLevel | null>(null);
  const [gameProgress, setGameProgress] = useState<GameProgress>({
    currentLevel: 0,
    unlockedLevels: puzzleLevels.map((level) => level.id), // Unlock tất cả levels
    completedLevels: {},
    totalScore: 0,
  });

  // Load progress từ localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem("puzzle-game-progress");
    if (savedProgress) {
      try {
        const progress = JSON.parse(savedProgress);
        // Đảm bảo tất cả levels đều unlocked
        progress.unlockedLevels = puzzleLevels.map((level) => level.id);
        setGameProgress(progress);
      } catch (error) {
        console.error("Error loading game progress:", error);
      }
    }
  }, []);

  // Save progress to localStorage
  const saveProgress = (newProgress: GameProgress) => {
    setGameProgress(newProgress);
    localStorage.setItem("puzzle-game-progress", JSON.stringify(newProgress));
  };

  const handleSelectLevel = (level: PuzzleLevel) => {
    setCurrentLevel(level);
  };

  const handleBackToLevels = () => {
    setCurrentLevel(null);
  };

  const handleLevelComplete = (
    levelId: string,
    score: number,
    attempts: number
  ) => {
    const newProgress = { ...gameProgress };

    // Cập nhật kết quả level
    newProgress.completedLevels[levelId] = {
      score,
      attempts,
      timestamp: Date.now(),
    };

    // Cập nhật tổng điểm
    newProgress.totalScore = Object.values(newProgress.completedLevels).reduce(
      (sum, result) => sum + result.score,
      0
    );

    // Bỏ logic unlock level tiếp theo - tất cả đều có thể chơi

    saveProgress(newProgress);
  };

  // Tất cả levels đều unlocked
  const levelsWithProgress = puzzleLevels.map((level) => ({
    ...level,
    unlocked: true, // Luôn true
    completed: !!gameProgress.completedLevels[level.id],
    bestScore: gameProgress.completedLevels[level.id]?.score,
  }));

  if (currentLevel) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <PuzzleGameMultiLevel
            level={currentLevel}
            onComplete={handleBackToLevels}
            onLevelComplete={handleLevelComplete}
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
            Trò chơi <span className="text-blue-600">Puzzle</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Khám phá kiến thức về vô cảm qua {puzzleLevels.length} màn chơi với
            độ khó tăng dần
          </p>
        </div>

        {/* Level Selector */}
        <LevelSelector
          levels={levelsWithProgress}
          gameProgress={gameProgress}
          onSelectLevel={handleSelectLevel}
        />

        {/* Game Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Hướng dẫn chơi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">🎯 Cách chơi:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Chọn bất kỳ màn nào bạn muốn chơi</li>
                  <li>• Trả lời đúng câu hỏi để mở từng ô puzzle</li>
                  <li>• Hoàn thành tất cả 9 ô để thấy hình ảnh đầy đủ</li>
                  <li>• Chơi lại để cải thiện điểm số và giảm lỗi</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
                💡 Mẹo chơi hiệu quả:
              </h4>
              <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
                <li>• Bắt đầu với các màn dễ để làm quen</li>
                <li>• Đọc kỹ câu hỏi và các lựa chọn</li>
                <li>• Sử dụng kiến thức đã học từ phần lý thuyết</li>
                <li>• Không ngại chơi lại để đạt điểm cao hơn</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
