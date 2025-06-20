"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PuzzlePiece } from "./puzzle-piece";
import { QuestionModal } from "@/components/question-modal";
import { Trophy, RotateCcw, Star, Target, ArrowLeft, Home } from "lucide-react";
import type {
  PuzzleGameProps,
  GameState,
  PuzzlePiece as PuzzlePieceType,
} from "../type";
import { PuzzlePreview } from "./puzzle-preview";
import Image from "next/image";

export function PuzzleGameMultiLevel({
  level,
  onComplete,
  onLevelComplete,
}: PuzzleGameProps) {
  const [gameState, setGameState] = useState<GameState>({
    pieces: level.questions.map((question, index) => ({
      id: question.id,
      position: index,
      isRevealed: false,
      question,
    })),
    currentQuestion: null,
    score: 0,
    isCompleted: false,
    attempts: {},
  });

  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [currentPiece, setCurrentPiece] = useState<PuzzlePieceType | null>(
    null
  );
  const [showLevelComplete, setShowLevelComplete] = useState(false);

  const progress =
    (gameState.pieces.filter((p) => p.isRevealed).length /
      gameState.pieces.length) *
    100;
  const totalAttempts = Object.values(gameState.attempts).reduce(
    (sum, attempts) => sum + attempts,
    0
  );

  const handlePieceClick = (piece: PuzzlePieceType) => {
    if (piece.isRevealed) return;

    setCurrentPiece(piece);
    setGameState((prev) => ({ ...prev, currentQuestion: piece.id }));
    setShowQuestionModal(true);
  };

  const handleAnswer = (answerIndex: number) => {
    if (!currentPiece) return;

    const isCorrect = answerIndex === currentPiece.question.correctAnswer;

    setGameState((prev) => {
      const newAttempts = { ...prev.attempts };
      if (!isCorrect) {
        newAttempts[currentPiece.id] = (newAttempts[currentPiece.id] || 0) + 1;
      }

      const newPieces = prev.pieces.map((piece) =>
        piece.id === currentPiece.id && isCorrect
          ? { ...piece, isRevealed: true }
          : piece
      );

      const newScore = isCorrect ? prev.score + 1 : prev.score;
      const isCompleted = newPieces.every((p) => p.isRevealed);

      return {
        ...prev,
        pieces: newPieces,
        score: newScore,
        isCompleted,
        attempts: newAttempts,
      };
    });
  };

  const resetGame = () => {
    setGameState({
      pieces: level.questions.map((question, index) => ({
        id: question.id,
        position: index,
        isRevealed: false,
        question,
      })),
      currentQuestion: null,
      score: 0,
      isCompleted: false,
      attempts: {},
    });
    setCurrentPiece(null);
    setShowQuestionModal(false);
    setShowLevelComplete(false);
  };

  const getStarRating = (score: number, totalQuestions: number) => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 90) return 3;
    if (percentage >= 70) return 2;
    if (percentage >= 50) return 1;
    return 0;
  };

  const handleBackToLevels = () => {
    onComplete?.(gameState.score, totalAttempts);
  };

  // Gọi callback khi hoàn thành
  useEffect(() => {
    if (gameState.isCompleted && !showLevelComplete) {
      setShowLevelComplete(true);
      onLevelComplete?.(level.id, gameState.score, totalAttempts);
    }
  }, [
    gameState.isCompleted,
    level.id,
    gameState.score,
    totalAttempts,
    onLevelComplete,
    showLevelComplete,
  ]);

  const stars = getStarRating(gameState.score, level.questions.length);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={handleBackToLevels}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Quay lại
              </Button>
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  {level.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {level.description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-sm">
                {level.difficulty === "easy"
                  ? "Dễ"
                  : level.difficulty === "medium"
                  ? "Trung bình"
                  : "Khó"}
              </Badge>
              <Badge variant="outline">
                {gameState.pieces.filter((p) => p.isRevealed).length}/
                {gameState.pieces.length} ô
              </Badge>
              <Badge variant="secondary">
                <Star className="w-3 h-3 mr-1" />
                {gameState.score} điểm
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Tiến độ hoàn thành</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          {totalAttempts > 0 && (
            <div className="text-sm text-muted-foreground">
              Tổng số lần trả lời sai: {totalAttempts}
            </div>
          )}
          {level.minScore && (
            <div className="text-sm text-blue-600">
              Thử thách: Cố gắng đạt{" "}
              {level.minScore || Math.ceil(level.questions.length * 0.7)}/
              {level.questions.length} để có kết quả tốt!
            </div>
          )}
        </CardContent>
      </Card>

      {/* Puzzle Grid và Preview */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Puzzle */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="max-w-lg mx-auto">
                <div className="grid grid-cols-3 gap-0 border-4 border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg">
                  {gameState.pieces.map((piece) => (
                    <PuzzlePiece
                      key={piece.id}
                      piece={piece}
                      imageUrl={level.imageUrl}
                      isActive={gameState.currentQuestion === piece.id}
                      attempts={gameState.attempts[piece.id] || 0}
                      onClick={() => handlePieceClick(piece)}
                      className="border-0"
                    />
                  ))}
                </div>

                {gameState.isCompleted && (
                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Hình ảnh hoàn chỉnh:
                    </p>
                    <Image
                      width={300}
                      height={300}
                      src={level.imageUrl || "/placeholder.svg"}
                      alt="Completed puzzle"
                      className="max-w-full h-auto rounded-lg shadow-md mx-auto"
                    />
                    <p className="text-xl font-bold mt-4">{level.slogan}</p>
                    <p className="text-sm">{level.sublogan}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview Panel */}
        <div className="lg:col-span-1">
          <PuzzlePreview
            imageUrl={level.imageUrl}
            revealedPieces={gameState.pieces.map((p) => p.isRevealed)}
          />
        </div>
      </div>

      {/* Level Completion Message */}
      {showLevelComplete && (
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200">
          <CardContent className="text-center py-8">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
              Chúc mừng! Bạn đã hoàn thành màn {level.title}!
            </h2>

            {/* Star Rating */}
            <div className="flex items-center justify-center gap-1 mb-4">
              {Array.from({ length: 3 }, (_, i) => (
                <Star
                  key={i}
                  className={`w-8 h-8 ${
                    i < stars ? "text-yellow-500 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <div className="space-y-2 mb-6">
              <p className="text-green-600 dark:text-green-300">
                Điểm số: {gameState.score}/{gameState.pieces.length} (
                {Math.round((gameState.score / gameState.pieces.length) * 100)}
                %)
              </p>
              <p className="text-sm text-muted-foreground">
                Số lần trả lời sai: {totalAttempts}
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={resetGame} variant="outline">
                <RotateCcw className="w-4 h-4 mr-2" />
                Chơi lại
              </Button>
              <Button onClick={handleBackToLevels}>
                <Home className="w-4 h-4 mr-2" />
                Chọn màn khác
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Question Modal */}
      <QuestionModal
        isOpen={showQuestionModal}
        question={currentPiece?.question || null}
        pieceNumber={(currentPiece?.position || 0) + 1}
        attempts={currentPiece ? gameState.attempts[currentPiece.id] || 0 : 0}
        onAnswer={handleAnswer}
        onClose={() => {
          setShowQuestionModal(false);
          setCurrentPiece(null);
          setGameState((prev) => ({ ...prev, currentQuestion: null }));
        }}
      />
    </div>
  );
}
