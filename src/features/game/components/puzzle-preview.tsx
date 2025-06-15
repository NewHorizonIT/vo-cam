"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye } from "lucide-react";

interface PuzzlePreviewProps {
  imageUrl: string;
  revealedPieces: boolean[];
}

export function PuzzlePreview({
  imageUrl,
  revealedPieces,
}: PuzzlePreviewProps) {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <Eye className="w-4 h-4" />
          Xem trước puzzle
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-1 border-2 border-gray-200 rounded overflow-hidden">
          {Array.from({ length: 9 }, (_, index) => {
            const row = Math.floor(index / 3);
            const col = index % 3;

            return (
              <div
                key={index}
                className="aspect-square relative bg-gray-100 dark:bg-gray-800"
                style={{
                  backgroundImage: revealedPieces[index]
                    ? `url(${imageUrl})`
                    : "none",
                  backgroundSize: "300% 300%",
                  backgroundPosition: `${col * -100}% ${row * -100}%`,
                }}
              >
                {!revealedPieces[index] && (
                  <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-xs text-gray-500">{index + 1}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-2 text-xs text-center text-muted-foreground">
          {revealedPieces.filter(Boolean).length}/9 ô đã mở
        </div>
      </CardContent>
    </Card>
  );
}
