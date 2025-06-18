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
import { ComicReader } from "@/features/comic/components/comic-reader";
import { allComics } from "@/features/comic/data";
import {
  BookOpen,
  ArrowLeft,
  Play,
  Volume2,
  Clock,
  FilesIcon as Pages,
} from "lucide-react";
import type { Comic } from "@/features/comic/type";
import Image from "next/image";

export default function ComicPage() {
  const [selectedComic, setSelectedComic] = useState<Comic | null>(null);
  const [isReading, setIsReading] = useState(false);
  const [readingComplete, setReadingComplete] = useState(false);

  const handleSelectComic = (comic: Comic) => {
    setSelectedComic(comic);
    setIsReading(true);
    setReadingComplete(false);
  };

  const handleBackToMenu = () => {
    setIsReading(false);
    setSelectedComic(null);
  };

  const handleReadingComplete = () => {
    setReadingComplete(true);
  };

  if (isReading && selectedComic) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-6">
            <Button
              variant="outline"
              onClick={handleBackToMenu}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại danh sách
            </Button>
          </div>

          <ComicReader
            comic={selectedComic}
            autoPlay={false}
            showText={true}
            onComplete={handleReadingComplete}
          />

          {readingComplete && (
            <Card className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200">
              <CardContent className="text-center py-8">
                <BookOpen className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
                  Chúc mừng! Bạn đã hoàn thành truyện &quot;
                  {selectedComic.title}&quot;!
                </h2>
                <p className="text-green-600 dark:text-green-300 mb-4">
                  Hy vọng câu chuyện đã giúp bạn hiểu rõ hơn về chủ đề này.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={handleBackToMenu} variant="outline">
                    Đọc truyện khác
                  </Button>
                  <Button
                    onClick={() => {
                      setReadingComplete(false);
                    }}
                  >
                    Đọc lại
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
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
            Thư viện <span className="text-blue-600">Truyện tranh</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Khám phá các câu chuyện về vô cảm và đồng cảm thông qua truyện tranh
            có âm thanh
          </p>
        </div>

        {/* Comics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {allComics.map((comic) => (
            <Card
              key={comic.id}
              className="hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <CardHeader className="text-center">
                <div className="w-32 h-40 mx-auto mb-4 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    width={128}
                    height={160}
                    src={comic.coverImage || "/placeholder.svg"}
                    alt={comic.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardTitle className="text-xl">{comic.title}</CardTitle>
                <CardDescription className="text-sm">
                  {comic.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Comic Stats */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="flex flex-col items-center space-y-1">
                    <Pages className="w-4 h-4 text-blue-600" />
                    <span>{comic.pages.length} trang</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <Volume2 className="w-4 h-4 text-green-600" />
                    <span>Có âm thanh</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span>
                      {comic.totalDuration
                        ? `${Math.floor(comic.totalDuration / 60)}:${(
                            comic.totalDuration % 60
                          )
                            .toString()
                            .padStart(2, "0")}`
                        : "N/A"}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      🎧
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Audio đồng bộ
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      📱
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Responsive design
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => handleSelectComic(comic)}
                  className="w-full"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Đọc truyện
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
