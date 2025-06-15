"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Lock, Unlock, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PuzzlePiece as PuzzlePieceType } from "@/features/game/type";

interface PuzzlePieceProps {
  piece: PuzzlePieceType;
  imageUrl: string;
  isActive: boolean;
  attempts: number;
  onClick: () => void;
  className?: string;
}

export function PuzzlePiece({
  piece,
  isActive,
  attempts,
  onClick,
  className,
}: PuzzlePieceProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative aspect-square cursor-pointer transition-all duration-300 hover:scale-105 border-2 border-gray-200 dark:border-gray-700",
        isActive && "ring-2 ring-blue-500 ring-offset-2",
        className
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background image - luôn hiển thị nhưng bị che bởi overlay */}
      <div className="absolute inset-0 bg-cover bg-no-repeat" />

      {/* Overlay che ảnh khi chưa mở */}
      {!piece.isRevealed && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-400/90 to-gray-600/90 dark:from-gray-700/90 dark:to-gray-900/90 backdrop-blur-sm">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-center space-y-2">
              <Lock className="w-8 h-8 text-white mx-auto drop-shadow-lg" />
              <div className="text-sm font-bold text-white drop-shadow">
                Ô {piece.position + 1}
              </div>
              {attempts > 0 && (
                <Badge variant="destructive" className="text-xs">
                  {attempts} lần sai
                </Badge>
              )}
            </div>

            {/* Hiển thị icon câu hỏi khi hover */}
            {isHovered && (
              <div className="absolute inset-0 bg-blue-500/30 flex items-center justify-center backdrop-blur-sm">
                <HelpCircle className="w-16 h-16 text-white drop-shadow-lg animate-pulse" />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Badge hiển thị trạng thái */}
      <div className="absolute top-2 left-2 z-10">
        <Badge variant="outline" className="text-xs bg-white/80 backdrop-blur">
          {piece.position + 1}
        </Badge>
      </div>

      {/* Badge đã mở */}
      {piece.isRevealed && (
        <div className="absolute top-2 right-2 z-10">
          <Badge
            variant="secondary"
            className="bg-green-100/90 text-green-800 backdrop-blur"
          >
            <Unlock className="w-3 h-3 mr-1" />
            Đã mở
          </Badge>
        </div>
      )}
    </div>
  );
}
