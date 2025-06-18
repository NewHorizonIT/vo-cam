"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AudioPlayer } from "./audio-player";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Volume2,
  VolumeX,
  RotateCcw,
  Settings,
  Maximize2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComicReaderProps } from "../type";
import Image from "next/image";

export function ComicReader({
  comic,
  autoPlay = false,
  onComplete,
}: ComicReaderProps) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(autoPlay);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false); // Thêm state này

  const currentPage = comic.pages[currentPageIndex];
  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === comic.pages.length - 1;

  const goToNextPage = () => {
    if (!isLastPage) {
      setCurrentPageIndex((prev) => prev + 1);
    } else if (onComplete) {
      onComplete();
    }
  };

  const goToPreviousPage = () => {
    if (!isFirstPage) {
      setCurrentPageIndex((prev) => prev - 1);
    }
  };

  const goToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < comic.pages.length) {
      setCurrentPageIndex(pageIndex);
    }
  };

  const resetReading = () => {
    setCurrentPageIndex(0);
    setAudioCurrentTime(0);
  };

  // Tự động chuyển trang khi audio đến thời điểm kết thúc của trang hiện tại
  const handleAudioTimeUpdate = (currentTime: number) => {
    setAudioCurrentTime(currentTime);

    // Chỉ tự động chuyển trang khi:
    // 1. Auto advance được bật
    // 2. Audio đang phát
    // 3. Đã đến thời điểm kết thúc của trang hiện tại
    // 4. Không phải trang cuối
    if (
      autoAdvance &&
      isAudioPlaying &&
      currentPage.endTime &&
      currentTime >= currentPage.endTime &&
      !isLastPage
    ) {
      console.log(
        `Auto advancing from page ${currentPageIndex + 1} to ${
          currentPageIndex + 2
        }`
      );
      goToNextPage();
    }
  };

  const handleAudioPlayStateChange = (isPlaying: boolean) => {
    setIsAudioPlaying(isPlaying);
  };

  // Khi chuyển trang, seek audio đến thời điểm bắt đầu của trang mới
  useEffect(() => {
    if (currentPage.startTime !== undefined) {
      setAudioCurrentTime(currentPage.startTime);
    }
  }, [currentPageIndex, currentPage.startTime]);

  const handleAudioSeek = (time: number) => {
    setAudioCurrentTime(time);

    // Tìm trang tương ứng với thời điểm audio
    const targetPage = comic.pages.find(
      (page) =>
        page.startTime !== undefined &&
        page.endTime !== undefined &&
        time >= page.startTime &&
        time < page.endTime
    );

    if (targetPage) {
      const targetPageIndex = comic.pages.findIndex(
        (page) => page.id === targetPage.id
      );
      if (targetPageIndex !== -1 && targetPageIndex !== currentPageIndex) {
        setCurrentPageIndex(targetPageIndex);
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          goToPreviousPage();
          break;
        case "ArrowRight":
        case " ":
          event.preventDefault();
          goToNextPage();
          break;
        case "Home":
          goToPage(0);
          break;
        case "End":
          goToPage(comic.pages.length - 1);
          break;
        case "f":
        case "F":
          setIsFullscreen((prev) => !prev);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentPageIndex, comic.pages.length]);

  return (
    <div
      className={cn(
        "max-w-6xl mx-auto",
        isFullscreen && "fixed inset-0 z-50 bg-background p-4"
      )}
    >
      {/* Header */}
      <Card className="mb-4">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              {comic.title}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="outline">
                {currentPageIndex + 1}/{comic.pages.length}
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setAutoAdvance(!autoAdvance)}
                className={
                  autoAdvance
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                    : ""
                }
                title={
                  autoAdvance
                    ? "Tắt tự động chuyển trang"
                    : "Bật tự động chuyển trang"
                }
              >
                {autoAdvance ? "🔄 Auto" : "⏸️ Manual"}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsAudioEnabled(!isAudioEnabled)}
              >
                {isAudioEnabled ? (
                  <Volume2 className="w-4 h-4" />
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFullscreen(!isFullscreen)}
              >
                <Maximize2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSettings(!showSettings)}
              >
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Comic Panel */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  width={800}
                  height={1200}
                  src={currentPage.imageUrl || "/placeholder.svg"}
                  alt={`Trang ${currentPageIndex + 1}`}
                  className="w-full h-auto rounded-t-lg"
                  style={{
                    maxHeight: isFullscreen ? "70vh" : "600px",
                    objectFit: "contain",
                  }}
                />

                {/* Navigation Overlay */}
                <div className="absolute inset-0 flex">
                  <button
                    className="flex-1 opacity-0 hover:opacity-20 hover:bg-black transition-opacity"
                    onClick={goToPreviousPage}
                    disabled={isFirstPage}
                  />
                  <button
                    className="flex-1 opacity-0 hover:opacity-20 hover:bg-black transition-opacity"
                    onClick={goToNextPage}
                  />
                </div>

                {/* Page Number Indicator */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-black/70 text-white">
                    {currentPageIndex + 1}/{comic.pages.length}
                  </Badge>
                </div>

                {/* Audio Time Indicator */}
                {currentPage.startTime !== undefined &&
                  currentPage.endTime !== undefined && (
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-blue-100/90 text-blue-800"
                      >
                        {Math.floor(currentPage.startTime / 60)}:
                        {(currentPage.startTime % 60)
                          .toString()
                          .padStart(2, "0")}{" "}
                        - {Math.floor(currentPage.endTime / 60)}:
                        {(currentPage.endTime % 60).toString().padStart(2, "0")}
                      </Badge>
                    </div>
                  )}
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-4">
            <Button
              variant="outline"
              onClick={goToPreviousPage}
              disabled={isFirstPage}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Trang trước
            </Button>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={resetReading}>
                <RotateCcw className="w-4 h-4" />
              </Button>
              <span className="text-sm text-muted-foreground">
                Trang {currentPageIndex + 1} / {comic.pages.length}
              </span>
            </div>

            <Button variant="outline" onClick={goToNextPage}>
              {isLastPage ? "Hoàn thành" : "Trang sau"}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Side Panel */}
        <div className="lg:col-span-1 space-y-4">
          {/* Audio Player */}
          {isAudioEnabled && comic.audioUrl && (
            <AudioPlayer
              audioUrl={comic.audioUrl}
              currentTime={audioCurrentTime}
              onTimeUpdate={handleAudioTimeUpdate}
              onSeek={handleAudioSeek}
              onPlayStateChange={handleAudioPlayStateChange}
              autoPlay={autoPlay}
            />
          )}

          {/* Page Thumbnails */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Danh sách trang</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto">
                {comic.pages.map((page, index) => (
                  <button
                    key={page.id}
                    onClick={() => goToPage(index)}
                    className={cn(
                      "relative aspect-[3/4] rounded border-2 overflow-hidden transition-all",
                      index === currentPageIndex
                        ? "border-blue-500 ring-2 ring-blue-200"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <Image
                      width={300}
                      height={400}
                      src={page.imageUrl || "/placeholder.svg"}
                      alt={`Trang ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-1 text-center">
                      {index + 1}
                    </div>
                    {/* Audio time indicator */}
                    {page.startTime !== undefined && (
                      <div className="absolute top-0 left-0 right-0 bg-blue-500/80 text-white text-xs p-1 text-center">
                        {Math.floor(page.startTime / 60)}:
                        {(page.startTime % 60).toString().padStart(2, "0")}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Comic Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Thông tin truyện</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>
                <strong>Tiêu đề:</strong> {comic.title}
              </p>
              <p>
                <strong>Số trang:</strong> {comic.pages.length}
              </p>
              {comic.totalDuration && (
                <p>
                  <strong>Thời lượng:</strong>{" "}
                  {Math.floor(comic.totalDuration / 60)}:
                  {(comic.totalDuration % 60).toString().padStart(2, "0")}
                </p>
              )}
              <p className="text-muted-foreground">{comic.description}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Keyboard Shortcuts Help */}
      {showSettings && (
        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="text-sm">Phím tắt</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-1">
            <p>
              <kbd className="px-2 py-1 bg-gray-100 rounded">←</kbd> Trang trước
            </p>
            <p>
              <kbd className="px-2 py-1 bg-gray-100 rounded">→</kbd> /{" "}
              <kbd className="px-2 py-1 bg-gray-100 rounded">Space</kbd> Trang
              sau
            </p>
            <p>
              <kbd className="px-2 py-1 bg-gray-100 rounded">Home</kbd> Trang
              đầu
            </p>
            <p>
              <kbd className="px-2 py-1 bg-gray-100 rounded">End</kbd> Trang
              cuối
            </p>
            <p>
              <kbd className="px-2 py-1 bg-gray-100 rounded">F</kbd> Toàn màn
              hình
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
